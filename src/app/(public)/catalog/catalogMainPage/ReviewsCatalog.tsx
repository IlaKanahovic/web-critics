'use client'

import { FaUser, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"
import type { Review } from "../../../../../prisma/generated/prisma"
import { useState } from "react"

interface IReviewsCatalog {
    reviews: Review[] | null
}

export function ReviewsCatalog({ reviews }: IReviewsCatalog) {
    const [active, setActive] = useState("Все")

    if (!reviews) return null

    const filters = [
        { label: "Все", value: "Все" },
        { label: "Сайты", value: "Готовые сайты" },
        { label: "Боты", value: "Боты" },
        { label: "Инструменты", value: "Готовые инструменты" },
    ]

    const filteredReviews = active === "Все"
        ? reviews
        : reviews.filter(review => review.category === active)

    return (
        <div className="container">
            <div className="pt-42">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Отзывы</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-white text-font-space text-4xl md:text-5xl">Что говорят те, кто уже запустился</h2>
                    <p className="text-white/60 text-font-inter text-base mt-3">
                        Реальные впечатления клиентов о готовых решениях и результате после запуска.
                    </p>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {filters.map((filter) => (
                        <button
                            key={filter.value}
                            onClick={() => setActive(filter.value)}
                            className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300 cursor-pointer ${active === filter.value
                                ? "bg-white text-black border-white"
                                : "bg-white/5 text-white/80 border-white/20 hover:bg-white/10 hover:border-white/40"
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredReviews.length > 0 ? (
                        filteredReviews.map((review) => (
                            <div key={review.id} className="bg-[#111111] border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-white/25 hover:shadow-2xl flex flex-col">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <div className="shrink-0 w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                                            {review.avatar ? (
                                                <img
                                                    src={review.avatar}
                                                    alt={review.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <FaUser className="text-white/40 size-4" />
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                            <span className="text-white font-medium text-base truncate">{review.name}</span>
                                            <span className="text-white/40 text-xs">{review.nameCompany}</span>
                                        </div>
                                        <div className="flex items-center gap-2 mt-0.5">
                                            <div className="flex text-yellow-400 text-sm">
                                                {[...Array(5)].map((_, i) => {
                                                    if (i < Math.floor(Number(review.estimation))) return <FaStar key={i} />
                                                    if (i < Math.ceil(Number(review.estimation))) return <FaStarHalfAlt key={i} />
                                                    return <FaRegStar key={i} />
                                                })}
                                            </div>
                                            <span className="text-white/30 text-xs ml-1">
                                                {new Date(review.date as unknown as string).toLocaleDateString('ru-RU')}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="shrink-0 px-2.5 py-0.5 rounded-full border border-white/10 text-white/40 text-[10px] uppercase tracking-wider">
                                        {review.category}
                                    </span>
                                </div>
                                <p className="text-white/70 text-font-inter text-sm leading-relaxed mt-4 flex-1">
                                    {review.description}
                                </p>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center text-white/50 py-10">
                            Отзывов в этой категории пока нет.
                        </div>
                    )}
                </div>
                <div className="mt-10 flex justify-center">
                    <Link href="/reviews" className="button-main-styles inline-flex items-center">
                        Все отзывы
                        <IoIosArrowForward className="size-5 ml-2" />
                    </Link>
                </div>
                <div className="mt-12 max-w-2xl mx-auto text-center bg-[#111111] border border-white/10 rounded-xl p-8">
                    <p className="text-white text-base font-medium">Уже пользовались нашим решением?</p>
                    <p className="text-white/60 text-font-inter text-sm mt-1">
                        Расскажите, как всё прошло — ваш отзыв поможет другим быстрее принять решение.
                    </p>
                    <Link
                        href="/reviews"
                        className="inline-flex items-center gap-2 mt-4 text-white/80 hover:text-white transition-colors duration-200 group"
                    >
                        <span className="text-sm font-medium">Оставить отзыв</span>
                        <IoIosArrowForward className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                </div>
            </div>
        </div>
    )
}