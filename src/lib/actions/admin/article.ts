'use server'

import { prisma } from "@/lib/db/prisma"
import { Article } from "@/lib/schema/articleSchema"
import { checkAdmin } from "@/lib/utils/checkAdmin"
import { getRandomInt } from "@/lib/utils/getRandomInt"
import { generateSlug } from "@/lib/utils/slugify"
import { revalidatePath } from "next/cache"
import * as z from "zod"
import { Prisma } from "../../../../prisma/generated/prisma"

type ActionResponse = {
    data?: { articleId: string },
    error?: {
        status: number,
        code: string,
        message: string,
        fields?: Record<string, string[] | undefined>
    }
}

export async function AddArticle(rawData: unknown): Promise<ActionResponse> {
    await checkAdmin()

    const result = Article.safeParse(rawData)
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

    try {
        const newSlug = generateSlug(data.title)

        const availabilityCheckArticle = await prisma.article.findUnique({
            where: {
                slug: newSlug
            }
        })

        const slug = availabilityCheckArticle !== null
            ? `${newSlug}-${getRandomInt(1000, 9999)}`
            : newSlug

        const newArticle = await prisma.article.create({
            data: {
                type: data.type,
                slug: slug,
                title: data.title,
                description: data.description,
                previewBg: data.previewBg,
                avatar: data.avatar,
                nameAuthor: data.nameAuthor,
                date: new Date(),
                readingTime: data.readingTime,
                content: data.content,
            }
        })

        revalidatePath('/admin/articles')
        revalidatePath('/blog/[article]', 'layout')
        revalidatePath('/blog')

        return {
            data: { articleId: newArticle.id }
        }

    } catch (error) {
        console.error('Ошибка при создании статьи:', error)

        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                return {
                    error: {
                        status: 409,
                        code: "ARTICLE_ALREADY_EXISTS",
                        message: "Такая статья уже отправляется. Пожалуйста, подождите пару секунд и попробуйте снова."
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

export async function GetAllArticles() {
    await checkAdmin()

    const articles = await prisma.article.findMany()

    return articles
}

export async function DeleteArticle(articleId: string) {
    await checkAdmin()

    const articleDelete = await prisma.article.delete({
        where: {
            id: articleId
        }
    })

    revalidatePath('/admin/articles')
    revalidatePath('/blog/[article]', 'layout')
    revalidatePath('/blog')
    return articleDelete
}