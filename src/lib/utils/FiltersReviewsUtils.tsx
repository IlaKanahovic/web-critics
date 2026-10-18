import type { Review } from "../../../prisma/generated/prisma";

export function FiltersReviewsUtils(reviews: Review[] | null, rating: string, type: string): Review[] {
    if (!reviews) return []

    return reviews.filter((review) => {
        const matchRating = rating === 'Все'
            || (rating === '3 и ниже'
                ? Number(review.estimation) <= 3 : review.estimation === rating)

        const matchType = type === 'Все' || review.category.includes(type)

        return matchRating && matchType
    })
}