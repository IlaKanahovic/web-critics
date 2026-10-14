import { prisma } from "../prisma"


export const dbGetProjectById = async (id: string) => {
    const project = await prisma.case.findUnique({
        where: {
            id: id
        }
    })

    return project
}