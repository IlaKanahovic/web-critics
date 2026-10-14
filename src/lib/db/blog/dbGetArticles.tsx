import { prisma } from "../prisma"

export const dbGetArticlesEverything = async () => {
    const articles = await prisma.article.findMany()

    return articles
}

export const dbGetArticlesTechnologies = async () => {
    const articlesTechnologies = await prisma.article.findMany({
        where: { 
            type: "technologies"
        }
    })

    return articlesTechnologies
}

export const dbGetArticlesStocks = async () => {
    const articlesStocks = await prisma.article.findMany({
        where: { 
            type: "stocks"
        }
    })

    return articlesStocks
}

export const dbGetArticlesGuides = async () => {
    const articlesGuides = await prisma.article.findMany({
        where: { 
            type: "guides"
        }
    })

    return articlesGuides
}

export const dbGetArticlesCases = async () => {
    const articlesCases = await prisma.article.findMany({
        where: { 
            type: "cases"
        }
    })

    return articlesCases
}

export const dbGetArticlesBusinessSolutions = async () => {
    const articlesBusinessSolution = await prisma.article.findMany({
        where: { 
            type: "business-solutions"
        }
    })

    return articlesBusinessSolution
}