import { PayProductPage } from "@/components/ui/pay-product/PayProductPage";
import { dbCatalogProductId } from "@/lib/db/catalog/dbCatalogProductId";

type SearchParams = { id: string }
interface IProductParamsProps {
    searchParams: Promise<SearchParams>
}

export default async function PayPage({ searchParams }: IProductParamsProps) {
    const { id } = await searchParams
    const product = await dbCatalogProductId({ id })

    return <PayProductPage product={product} />
}