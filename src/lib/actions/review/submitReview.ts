'use server'

import { revalidatePath } from "next/cache"
import { headers } from "next/headers"
import * as z from "zod"
import { Prisma } from "../../../../prisma/generated/prisma"
import { prisma } from "@/lib/db/prisma"
import { rateLimit } from "@/lib/rateLimit"
import { Review } from "@/lib/schema/reviewSchema"

type ActionResponse = {
    data?: { reviewId: string },
    error?: {
        status: number,
        code: string,
        message: string,
        fields?: Record<string, string[] | undefined>
    }
}

export async function submitReview(rawData: unknown): Promise<ActionResponse> {
    const dataBot = rawData && typeof rawData === 'object'
        ? rawData as Record<string, unknown>
        : {}
    if (dataBot.website && typeof dataBot.website === 'string' && dataBot.website.length > 0) {
        return { data: { reviewId: 'spam-detected' } }
    }

    const result = Review.safeParse(rawData)
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
    const ipHeader = headersList.get('x-forwarded-for') || 'unknown'
    const ipString = ipHeader.split(',')[0].trim()
    const ip = ipString || 'unknown'

    const checkRateLimit = rateLimit(`review:${ip}`)

    if (!checkRateLimit.success) {
        return {
            error: {
                status: 429,
                code: "RATE_LIMITED",
                message: "Слишком много попыток. Пожалуйста, попробуйте позже."
            }
        }
    }

    try {
        const newReview = await prisma.review.create({
            data: {
                name: data.name,
                nameCompany: data.nameCompany,
                avatar: data.avatar,
                estimation: data.estimation,
                category: data.category,
                description: data.description,
                caseHref: data.caseHref,
                consentedAt: new Date()
            }
        })

        revalidatePath('/reviews')

        return {
            data: { reviewId: newReview.id }
        }
    } catch (error) {
        console.error('Ошибка при создании отзыва:', error)

        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                return {
                    error: {
                        status: 409,
                        code: "REVIEW_ALREADY_EXISTS",
                        message: "Такой отзыв уже отправляется. Пожалуйста, подождите пару секунд и попробуйте снова."
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
