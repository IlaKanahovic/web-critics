import { prisma } from "../prisma"


export const dbGetArticle = async (id: string) => {
    const article = await prisma.article.findUnique({
        where: {
            id: id
        }
    })

    return article
}