import { FaStar, FaStarHalf } from 'react-icons/fa';

interface StarRatingProps {
    ratingValue: string
}

export const StarRating = ({ ratingValue }: StarRatingProps) => {
    const parts = ratingValue.split('/').map((p) => Number(p.trim()))
    const [num, den] = parts
    if (!num || !den || Number.isNaN(num) || Number.isNaN(den) || den <= 0) {
        return null
    }
    let rating = (num / den) * 5
    rating = Math.max(0, Math.min(5, rating))
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 > 0.001
    return (
        <div className="flex text-yellow-400 text-sm gap-0.5" role="img" aria-label={`Рейтинг: ${ratingValue}`}>
            {Array.from({ length: 5 }, (_, i) => {
                if (i < fullStars) {
                    return <FaStar key={i} size={14} aria-hidden />
                }
                if (i === fullStars && hasHalfStar) {
                    return <FaStarHalf key={i} size={14} aria-hidden />
                }
                return null
            })}
        </div>
    )
}
