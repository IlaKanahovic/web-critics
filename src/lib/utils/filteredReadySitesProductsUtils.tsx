import type { Product } from "../../../prisma/generated/prisma";

export function filteredReadySitesProductsUtils(products: Product[] | null, itemFilter: string): Product[] {
    if (!products) return []

    const sorted = [...products]

    if (itemFilter === "По цене ↑") {
        return sorted.sort((a, b) => Number(a.singlePrice) - Number(b.singlePrice))
    }

    if (itemFilter === "По цене ↓") {
        return sorted.sort((a, b) => Number(b.singlePrice) - Number(a.singlePrice))
    }

    return sorted
}