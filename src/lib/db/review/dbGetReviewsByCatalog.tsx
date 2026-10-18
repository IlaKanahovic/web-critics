import { prisma } from "../prisma";


export async function dbGetReviewsByCatalog() {
    const reviews = await prisma.review.findMany({
        where: {
            category: {
                in: ["Готовые сайты", "Боты", "Готовые инструменты"]
            }
        }
    })

    return reviews
}

export async function dbGetReviewsByCatalogReadySites() {
    const reviews = await prisma.review.findMany({
        where: {
            category: "Готовые сайты"
        }
    })

    return reviews
}

export async function dbGetReviewsByCatalogReadyModels() {
    const reviews = await prisma.review.findMany({
        where: {
            category: "Готовые инструменты"
        }
    })

    return reviews
}

export async function dbGetReviewsByCatalogBots() {
    const reviews = await prisma.review.findMany({
        where: {
            category: "Боты"
        }
    })

    return reviews
}