import type { Article } from "../../../prisma/generated/prisma"

export const letters = [
    { char: "B", top: "6%", left: "4%", size: 420, rotate: -8, delay: 0 },
    { char: "L", top: "18%", left: "76%", size: 360, rotate: 6, delay: 2 },
    { char: "O", top: "34%", left: "10%", size: 480, rotate: -3, delay: 4 },
    { char: "G", top: "50%", left: "78%", size: 400, rotate: 4, delay: 1 },
    { char: "B", top: "64%", left: "6%", size: 340, rotate: -6, delay: 3 },
    { char: "L", top: "78%", left: "72%", size: 460, rotate: 3, delay: 5 },
    { char: "O", top: "92%", left: "14%", size: 380, rotate: -4, delay: 2.5 },
]

export interface MainArticleComponentProps {
    article: Article | null
}

export const formatContent = (content: string) => {
    if (content.includes("<p>") || content.includes("<br")) {
        return content
    }
    return content
        .split("\n")
        .filter((paragraph) => paragraph.trim() !== "")
        .map((paragraph) => `<p>${paragraph.trim()}</p>`)
        .join("")
}

