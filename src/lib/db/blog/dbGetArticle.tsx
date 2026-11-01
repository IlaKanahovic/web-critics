import { prisma } from "../prisma"


export const dbGetArticle = async (article: string) => {
    const articleSlug = await prisma.article.findUnique({
        where: {
            slug: article
        }
    })

    return articleSlug
}