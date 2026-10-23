'use server'

import { prisma } from "@/lib/db/prisma";
import { rateLimit } from "@/lib/rateLimit";
import { headers } from "next/headers";
import * as z from "zod"
import { Prisma } from "../../../../prisma/generated/prisma";
import { Purchases } from "@/lib/schema/purchaseSchema";

type ActionResponse = {
    data?: { purchasesId: string },
    error?: {
        status: number,
        code: string,
        message: string,
        fields?: Record<string, string[]>
    }
}

export async function submitPurchase(rawData: unknown): Promise<ActionResponse> {
    const dataBot = rawData as Record<string, unknown>
    if (dataBot.website && typeof dataBot.website === 'string' && dataBot.website.length > 0) {
        return { data: { purchasesId: 'spam-detected' } }
    }

    const result = Purchases.safeParse(rawData)
    if (!result.success) {
        return {
            error: {
                status: 400,
                code: "VALIDATION_ERROR",
                message: "Проверьте правильность заполнения",
                fields: z.flattenError(result.error).fieldErrors
            }
        }
    }

    const data = result.data

    const headersList = await headers()
    let ipHeader = headersList.get('x-forwarded-for') || 'unknown'
    let ipString = ipHeader.split(',')[0].trim()
    const ip = ipString || 'unknown'

    const checkRateLimit = rateLimit(`purchase:${ip}`)

    if (!checkRateLimit.success) {
        return {
            error: {
                status: 429,
                code: "RATE_LIMITED",
                message: "Слишком много попыток. Пожалуйста, попробуйте позже или напишите нам напрямую в Telegram!"
            }
        }
    }

    try {
        return prisma.$transaction(async (tx) => {
            const phonePurchases = await tx.user.findUnique({
                where: {
                    phone: data.phone
                }
            })

            const emailPurchases = await tx.user.findUnique({
                where: {
                    email: data.email
                }
            })

            if (!phonePurchases && emailPurchases) {
                return {
                    error: {
                        status: 409,
                        code: "EMAIL_TAKEN_BY_OTHER_PHONE",
                        message: "Этот email уже привязан к другому номеру",
                        fields: { email: ["Этот email уже занят"] }
                    }
                }
            }

            if (phonePurchases && emailPurchases && phonePurchases.id !== emailPurchases.id) {
                return {
                    error: {
                        status: 409,
                        code: "CONTACTS_MISMATCH",
                        message: "Указанный телефон и email принадлежат разным пользователям",
                        fields: { email: ["Этот email не совпадает с номером телефона"] }
                    }
                }
            }

            let userId: string

            if (!phonePurchases && !emailPurchases) {
                const newUser = await tx.user.create({
                    data: {
                        name: data.name,
                        phone: data.phone,
                        email: data.email,
                        consentedAt: new Date(),
                        consentVersion: 'v.1.0',
                        consentIp: ip,
                        advertisingConsent: data.advertisingConsent,
                        advertisingConsentedAt: data.advertisingConsent ? new Date() : null
                    }
                })
                userId = newUser.id
            } else {
                userId = phonePurchases ? phonePurchases.id : emailPurchases!.id
            }

            const newPurchases = await tx.catalogPurchases.create({
                data: {
                    format: data.format,
                    description: data.description,
                    nameProduct: data.nameProduct,
                    price: data.price,
                    offerAcceptedAt: new Date(),
                    ownerId: userId
                }
            })

            return {
                data: { purchasesId: newPurchases.id }
            }
        })

    } catch (error) {
        console.error('Ошибка при создании покупателя:', error)

        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                return {
                    error: {
                        status: 409,
                        code: "USER_ALREADY_EXISTS",
                        message: "Пользователь с такими данными уже создается. Пожалуйста, подождите пару секунд и попробуйте снова.",
                    }
                }
            }

            if (error.code === 'P2003') {
                return {
                    error: {
                        status: 400,
                        code: "RELATED_ENTITY_NOT_FOUND",
                        message: "Связанная запись не найдена",
                    }
                }
            }
        }

        return {
            error: {
                status: 500,
                code: "SERVER_ERROR",
                message: "Что-то пошло не так при сохранении данных. Попробуйте позже."
            }
        }
    }
}