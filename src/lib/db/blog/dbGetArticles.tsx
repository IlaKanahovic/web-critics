import { prisma } from "../prisma"

export const dbGetArticlesEverything = async () => {
    const articles = await prisma.article.findMany({
        select: {
            id: true,
            slug: true,
            title: true,
            description: true,
            type: true,
            nameAuthor: true,
            date: true,
            readingTime: true,
            previewBg: true,
        }
    })

    return articles
}

export const dbGetArticlesTechnologies = async () => {
    const articlesTechnologies = await prisma.article.findMany({
        where: {
            type: "technologies"
        },
        select: {
            id: true,
            slug: true,
            title: true,
            description: true,
            type: true,
            nameAuthor: true,
            date: true,
            readingTime: true,
            previewBg: true,
        }
    })

    return articlesTechnologies
}

export const dbGetArticlesStocks = async () => {
    const articlesStocks = await prisma.article.findMany({
        where: {
            type: "stocks"
        },
        select: {
            id: true,
            slug: true,
            title: true,
            description: true,
            type: true,
            nameAuthor: true,
            date: true,
            readingTime: true,
            previewBg: true,
        }
    })

    return articlesStocks
}

export const dbGetArticlesGuides = async () => {
    const articlesGuides = await prisma.article.findMany({
        where: {
            type: "guides"
        },
        select: {
            id: true,
            slug: true,
            title: true,
            description: true,
            type: true,
            nameAuthor: true,
            date: true,
            readingTime: true,
            previewBg: true,
        }
    })

    return articlesGuides
}

export const dbGetArticlesCases = async () => {
    const articlesCases = await prisma.article.findMany({
        where: {
            type: "cases"
        },
        select: {
            id: true,
            slug: true,
            title: true,
            description: true,
            type: true,
            nameAuthor: true,
            date: true,
            readingTime: true,
            previewBg: true,
        }
    })

    return articlesCases
}

export const dbGetArticlesBusinessSolutions = async () => {
    const articlesBusinessSolution = await prisma.article.findMany({
        where: {
            type: "business-solutions"
        },
        select: {
            id: true,
            slug: true,
            title: true,
            description: true,
            type: true,
            nameAuthor: true,
            date: true,
            readingTime: true,
            previewBg: true,
        }
    })

    return articlesBusinessSolution
}