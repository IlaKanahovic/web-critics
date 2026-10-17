import type { Article } from "../../../prisma/generated/prisma";

export function searchWithinTheTextBlog(text: string, articles: Article[] | null): Article[] {
    if (!articles) return []
    if (!text.trim()) return articles

    const lowerText = text.toLowerCase()

    return articles.filter((article) => {
        const matchTitle = article.title?.toLowerCase().includes(lowerText)
        const matchDesc = article.description?.toLowerCase().includes(lowerText)

        return matchTitle || matchDesc
    })
}