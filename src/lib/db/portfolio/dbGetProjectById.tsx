import { prisma } from "../prisma"

export const dbGetProjectById = async (slug: string) => {
    const project = await prisma.case.findUnique({
        where: {
            slug: slug
        }
    })

    return project
}