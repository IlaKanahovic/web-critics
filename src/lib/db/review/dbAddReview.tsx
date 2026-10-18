'use server'

import { revalidatePath } from "next/cache";
import { prisma } from "../prisma";

interface IdbAddReview {
    name: string
    nameCompany: string | null
    avatar: string
    estimation: string
    category: string
    description: string
    caseHref: string | null
}

export const dbAddReview = async (review: IdbAddReview) => {
    const newReview = await prisma.review.create({
        data: {
            name: review.name,
            nameCompany: review.nameCompany || "",
            avatar: review.avatar || "",
            date: new Date(),
            estimation: review.estimation,
            category: review.category,
            description: review.description,
            caseHref: review.caseHref || null
        }
    })

    revalidatePath('/reviews')

    return newReview
}