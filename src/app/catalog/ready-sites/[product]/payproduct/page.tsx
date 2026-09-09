import { PayProductPage } from "@/components/ui/pay-product/PayProductPage";

export default function PayPage({ params }: { params: { product: string } }) {
    return <PayProductPage group="ready-sites" product={params.product} />
}