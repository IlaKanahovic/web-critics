import { prisma } from "../prisma"

export const dbGetReviewsAll = async () => {
    const reviews = await prisma.review.findMany()

    return reviews
} 