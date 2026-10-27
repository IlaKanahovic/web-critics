import { Footer } from "@/components/layout/footer/Footer";
import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { FaStar } from "react-icons/fa";
import { HeroReviews } from "./components/HeroReviews";
import { SummaryReviews } from "./components/SummaryReviews";
import { ReviewsList } from "./components/ReviewsList";
import { CTAreviews } from "./components/CTAreviews";
import { dbGetReviewsAll } from "@/lib/db/review/dbGetReviewsAll"

export const dynamic = 'force-dynamic'

export default async function Reviews() {
    const stars = [
        { top: "6%", right: "8%", size: 320, opacity: 0.06, delay: 0, rotate: -8, position: "right" },
        { top: "14%", left: "10%", size: 200, opacity: 0.05, delay: 1.5, rotate: 6, position: "left" },
        { top: "38%", right: "14%", size: 260, opacity: 0.05, delay: 3, rotate: -4, position: "right" },
        { top: "52%", left: "6%", size: 340, opacity: 0.06, delay: 0.8, rotate: 5, position: "left" },
        { top: "76%", right: "10%", size: 220, opacity: 0.05, delay: 2.2, rotate: -6, position: "right" },
        { top: "90%", left: "18%", size: 280, opacity: 0.06, delay: 1.2, rotate: 4, position: "left" },
    ]

    const rawReviews = await dbGetReviewsAll()
    const reviews = JSON.parse(JSON.stringify(rawReviews))
    const totalReviews = rawReviews.length

    const averageRating = totalReviews > 0
        ? rawReviews.reduce((sum, item) => sum + Number(item.estimation), 0) / totalReviews
        : 0

    const distribution = [
        { stars: 5, count: 0 },
        { stars: 4, count: 0 },
        { stars: 3, count: 0 },
        { stars: 2, count: 0 },
        { stars: 1, count: 0 },
    ]

    rawReviews.forEach(item => {
        const target = distribution.find(d => d.stars === Number(item.estimation))
        if (target) {
            target.count++
        }
    })

    return (
        <div className="relative min-h-screen overflow-hidden" style={{ isolation: "isolate" }}>
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(ellipse at 50% 30%, #131318 0%, #0a0a10 45%, #050505 100%)",
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(ellipse at 50% 40%, rgba(250, 204, 21, 0.05) 0%, transparent 55%)",
                    }}
                />
                <div className="hidden md:block">
                    {stars.map((star, i) => (
                        <div
                            key={i}
                            className="reviews-star"
                            style={{
                                top: star.top,
                                left: star.position === "left" ? star.left : "auto",
                                right: star.position === "right" ? star.right : "auto",
                                fontSize: `${star.size}px`,
                                opacity: star.opacity,
                                animationDelay: `${star.delay}s`,
                                transform: `rotate(${star.rotate}deg)`,
                            }}
                        >
                            <FaStar />
                        </div>
                    ))}
                </div>
                <div className="md:hidden">
                    <div
                        className="reviews-star-mobile"
                        style={{
                            top: "8%",
                            right: "5%",
                            fontSize: "140px",
                            opacity: 0.07,
                            transform: "rotate(-8deg)",
                        }}
                    >
                        <FaStar />
                    </div>
                    <div
                        className="reviews-star-mobile"
                        style={{
                            top: "55%",
                            left: "4%",
                            fontSize: "160px",
                            opacity: 0.06,
                            transform: "rotate(6deg)",
                            animationDelay: "2s",
                        }}
                    >
                        <FaStar />
                    </div>
                    <div
                        className="reviews-star-mobile"
                        style={{
                            bottom: "8%",
                            right: "8%",
                            fontSize: "120px",
                            opacity: 0.07,
                            transform: "rotate(-4deg)",
                            animationDelay: "4s",
                        }}
                    >
                        <FaStar />
                    </div>
                </div>
                <div
                    className="absolute inset-0"
                    style={{
                        background: "radial-gradient(ellipse at 50% 45%, transparent 40%, #050505 95%)",
                    }}
                />
            </div>
            <style>{`
                @keyframes reviewsStarFloat {
                    0%, 100% { transform: translate(0, 0) rotate(var(--r, 0deg)); }
                    50% { transform: translate(10px, -14px) rotate(var(--r, 0deg)); }
                }
                @keyframes reviewsStarFloatMobile {
                    0%, 100% { transform: translate(0, 0) rotate(var(--r, 0deg)); }
                    50% { transform: translate(6px, -10px) rotate(var(--r, 0deg)); }
                }
                .reviews-star,
                .reviews-star-mobile {
                    position: absolute;
                    color: #facc15;
                    line-height: 1;
                    user-select: none;
                    pointer-events: none;
                    filter: blur(0.5px);
                }
                .reviews-star {
                    animation: reviewsStarFloat 18s ease-in-out infinite;
                }
                .reviews-star-mobile {
                    animation: reviewsStarFloatMobile 14s ease-in-out infinite;
                }
            `}</style>

            <div className="relative z-10 pt-18">
                <div className="mobile-only">
                    <HeaderMobile />
                </div>
                <div className="desktop-only">
                    <HeaderDesktop />
                </div>
                <HeroReviews />
                <SummaryReviews
                    totalReviews={totalReviews}
                    averageRating={averageRating}
                    distribution={distribution}
                />
                <ReviewsList reviews={reviews} />
                <CTAreviews />
                <Footer />
            </div>
        </div>
    )
}