'use server'

import { prisma } from "@/lib/db/prisma"
import { checkAdmin } from "@/lib/utils/checkAdmin"
import { revalidatePath } from "next/cache"

interface IChangeStatusLead {
    leadId: string
    newStatus: "NEW" | "IN_PROGRESS" | "WON" | "LOST"
}

export async function changeStatusLead(rawData: IChangeStatusLead) {
    try {
        await checkAdmin() 

        await prisma.lead.update({
            where: { id: rawData.leadId },
            data: { status: rawData.newStatus }
        })

        revalidatePath('/admin/leads')
        return { success: true }
    } catch (error) {
        return {
            error: {
                status: 500,
                code: "ERROR",
                message: "Не удалось обновить статус"
            }
        }
    }
}

export async function getUser(userId: string) {
    try {
        await checkAdmin()

        const user = await prisma.user.findUnique({
            where: { id: userId }
        })
        return user
    } catch (error) {
        return { error: { status: 500, message: "Ошибка загрузки" } }
    }
}