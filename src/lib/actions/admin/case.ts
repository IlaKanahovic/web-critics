'use server'

import { prisma } from "@/lib/db/prisma"
import { checkAdmin } from "@/lib/utils/checkAdmin"
import { getRandomInt } from "@/lib/utils/getRandomInt"
import { generateSlug } from "@/lib/utils/slugify"
import { revalidatePath } from "next/cache"
import * as z from "zod"
import { Prisma } from "../../../../prisma/generated/prisma"
import { CaseSchema } from "@/lib/schema/caseSchema"

type ActionResponse = {
    data?: { caseId: string },
    error?: {
        status: number,
        code: string,
        message: string,
        fields?: Record<string, string[] | undefined>
    }
}

export async function AddCase(rawData: unknown): Promise<ActionResponse> {
    await checkAdmin()

    const result = CaseSchema.safeParse(rawData)
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

        const availabilityCheckArticle = await prisma.case.findUnique({
            where: {
                slug: newSlug
            }
        })

        const slug = availabilityCheckArticle !== null
            ? `${newSlug}-${getRandomInt(1000, 9999)}`
            : newSlug

        const newCase = await prisma.case.create({
            data: {
                type: data.type,
                slug: slug,
                title: data.title,
                service: data.service,
                previewBg: data.previewBg,
                previewProject: data.previewProject,
                url: data.url,
                tasks: data.tasks,
                popups: data.popups,
                clientsObjective: data.clientsObjective,
            }
        })

        revalidatePath('/admin/cases')
        revalidatePath('/portfolio/[project]', 'layout')
        revalidatePath('/portfolio')

        return {
            data: { caseId: newCase.id }
        }

    } catch (error) {
        console.error('Ошибка при создании статьи:', error)

        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                return {
                    error: {
                        status: 409,
                        code: "CASE_ALREADY_EXISTS",
                        message: "Такой кейс уже отправляется. Пожалуйста, подождите пару секунд и попробуйте снова."
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

export async function GetAllCases() {
    await checkAdmin()

    const cases = await prisma.case.findMany()

    return cases
}

export async function DeleteCase(caseId: string) {
    await checkAdmin()

    const caseDelete = await prisma.case.delete({
        where: {
            id: caseId
        }
    })

    revalidatePath('/admin/cases')
    revalidatePath('/portfolio/[project]', 'layout')
    revalidatePath('/portfolio')
    return caseDelete
}