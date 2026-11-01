import { prisma } from "../prisma"

interface IProductId {
    product: string
}

export const dbCatalogProductId = async (props: IProductId) => {
    const product = await prisma.product.findUnique({
        where: {
            slug: props.product
        }
    })

    return product
}