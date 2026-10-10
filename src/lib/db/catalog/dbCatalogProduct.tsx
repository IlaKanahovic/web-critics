import { prisma } from "../prisma";

export interface CardData {
    id: string
    title: string
    type: string
    description: string
    features: string[]
    singlePrice: string
    mounthPrice: string
    previewBg: string
    slug: string
    demoUrl: string
    categoryDesc: string
    estimation: string
    positive: string[]
    included: string[]
    possibleSettings: string[]
    additionally: string[]
    desciptionPurpose: string
    suitable: string[]
    notSuitable: string[]
    howItWorks: string
    specifications: string[]
    requirements: string
    valuesRequirements: string[]
}

export const dbCatalogProduct = async () => {

    const [readySitesProducts, botsProducts, readyModelsProducts] = await Promise.all([
        prisma.product.findMany({ where: { type: 'ready-site' } }),
        prisma.product.findMany({ where: { type: 'bot' } }),
        prisma.product.findMany({ where: { type: 'ready-model' } })
    ])

    return [readySitesProducts, botsProducts, readyModelsProducts]
}