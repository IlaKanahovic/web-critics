import { FaStar } from "react-icons/fa"

export function SummaryReviews() {
    const averageRating = 4.8
    const totalReviews = 24

    const distribution = [
        { stars: 5, count: 18 },
        { stars: 4, count: 4 },
        { stars: 3, count: 2 },
        { stars: 2, count: 0 },
        { stars: 1, count: 0 },
    ]

    const maxCount = Math.max(...distribution.map((d) => d.count))

    return (
        <div className="container">
            <div className="pt-16 md:pt-24">
                <div className="mb-10 md:mb-14 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Сводка</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="relative rounded-2xl border border-white/10 bg-white/1.5 p-8 md:p-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

                        <div className="flex flex-col items-center text-center">
                            <div className="flex items-baseline gap-2">
                                <span className="text-white text-6xl md:text-7xl font-semibold leading-none tracking-tight">
                                    {averageRating.toFixed(1)}
                                </span>
                                <span className="text-white/40 text-xl md:text-2xl font-mono">
                                    / 5
                                </span>
                            </div>

                            <div className="flex items-center gap-1.5 mt-4">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <FaStar
                                        key={s}
                                        className={`size-5 md:size-6 ${s <= Math.round(averageRating)
                                                ? "text-yellow-400"
                                                : "text-white/15"
                                            }`}
                                    />
                                ))}
                            </div>

                            <span className="text-white/45 text-sm mt-3">
                                на основе {totalReviews} отзывов
                            </span>
                        </div>

                        <div className="mt-10 pt-8 border-t border-white/8 space-y-3">
                            {distribution.map((row, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="flex items-center gap-1.5 w-12 shrink-0 justify-end">
                                        <span className="text-white/60 text-sm font-medium">
                                            {row.stars}
                                        </span>
                                        <FaStar className="size-3 text-white/30" />
                                    </div>

                                    <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-linear-to-r from-yellow-400/80 to-yellow-300/60 rounded-full transition-all duration-500"
                                            style={{
                                                width: `${maxCount > 0 ? (row.count / maxCount) * 100 : 0}%`,
                                            }}
                                        />
                                    </div>

                                    <span className="w-8 text-left text-white/40 text-xs font-mono shrink-0">
                                        {row.count}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}