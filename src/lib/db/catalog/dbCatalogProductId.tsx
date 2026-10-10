import { prisma } from "../prisma"

interface IProductId {
    id: string
}

export const dbCatalogProductId = async (props: IProductId) => {
    const product = await prisma.product.findUnique({
        where: {
            id: props.id
        }
    })

    console.log(props.id, product)

    return product
}