'use server'

import { prisma } from "@/lib/db/prisma";
import { rateLimit } from "@/lib/rateLimit";
import { Lead } from "@/lib/schema/leadSchema";
import { headers } from "next/headers";
import * as z from "zod"
import { Prisma } from "../../../../prisma/generated/prisma";

type ActionResponse = {
    data?: { leadId: string },
    error?: {
        status: number,
        code: string,
        message: string,
        fields?: Record<string, string[]>
    }
}

export async function submitLead(rawData: unknown): Promise<ActionResponse> {
    const dataBot = rawData as Record<string, unknown>
    if (dataBot.website && typeof dataBot.website === 'string' && dataBot.website.length > 0) {
        return { data: { leadId: 'spam-detected' } }
    }

    const result = Lead.safeParse(rawData)
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

    const checkRateLimit = rateLimit(`lead:${ip}`)

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
            const phoneLead = await tx.user.findUnique({
                where: {
                    phone: data.phone
                }
            })

            const emailLead = await tx.user.findUnique({
                where: {
                    email: data.email
                }
            })

            if (!phoneLead && emailLead) {
                return {
                    error: {
                        status: 409,
                        code: "EMAIL_TAKEN_BY_OTHER_PHONE",
                        message: "Этот email уже привязан к другому номеру",
                        fields: { email: ["Этот email уже занят"] }
                    }
                }
            }

            if (phoneLead && emailLead && phoneLead.id !== emailLead.id) {
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

            if (!phoneLead && !emailLead) {
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
                userId = phoneLead ? phoneLead.id : emailLead!.id
            }

            const newLead = await tx.lead.create({
                data: {
                    budgetFrom: data.budgetFrom,
                    budgetTo: data.budgetTo,
                    description: data.description,
                    services: data.services,
                    ownerId: userId
                }
            })

            return {
                data: { leadId: newLead.id }
            }
        })
    } catch (error) {
        console.error('Ошибка при создании лида:', error)

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