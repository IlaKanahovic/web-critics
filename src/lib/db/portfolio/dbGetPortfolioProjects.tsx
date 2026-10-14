import { prisma } from "../prisma"

export const dbGetPortfolioProjects = async () => {
    const projects = await prisma.case.findMany({
        take: 100,
        skip: 0,
    })

    return projects 
}