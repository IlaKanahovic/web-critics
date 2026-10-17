'use client'

import { useState } from "react"
import { FaStar, FaRegStar, FaUser } from "react-icons/fa"
import { IoIosArrowForward } from "react-icons/io"

const ratingFilters = ["Все", "5", "4", "3 и ниже"]
const typeFilters = ["Все", "Сайты", "Боты", "Автоматизация", "Веб-приложения"]

const reviews = [
    {
        id: 1,
        name: "Имя автора",
        company: "Название компании, должность",
        rating: 5,
        date: "Дата отзыва",
        text: "Текст отзыва. Здесь будет развёрнутое впечатление клиента о сотрудничестве — что понравилось, как проходила работа, какой результат получился. Пара предложений, не больше.",
        type: "Сайты",
        caseHref: null,
    },
    {
        id: 2,
        name: "Имя автора",
        company: "Название компании, должность",
        rating: 5,
        date: "Дата отзыва",
        text: "Текст отзыва. Здесь будет развёрнутое впечатление клиента о сотрудничестве — что понравилось, как проходила работа, какой результат получился.",
        type: "Автоматизация",
        caseHref: "/blog/cases",
    },
    {
        id: 3,
        name: "Имя автора",
        company: "Название компании, должность",
        rating: 4,
        date: "Дата отзыва",
        text: "Текст отзыва. Здесь будет развёрнутое впечатление клиента о сотрудничестве — что понравилось, как проходила работа, какой результат получился. Пара предложений, не больше.",
        type: "Боты",
        caseHref: null,
    },
    {
        id: 4,
        name: "Имя автора",
        company: "Название компании, должность",
        rating: 5,
        date: "Дата отзыва",
        text: "Текст отзыва. Здесь будет развёрнутое впечатление клиента о сотрудничестве — что понравилось, как проходила работа, какой результат получился.",
        type: "Веб-приложения",
        caseHref: "/blog/cases",
    },
]

export function ReviewsList() {
    const [activeRating, setActiveRating] = useState("Все")
    const [activeType, setActiveType] = useState("Все")

    return (
        <div className="container">
            <div className="pt-16 md:pt-24 pb-20 md:pb-32">
                <div className="mb-10 md:mb-14 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Отзывы</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="mb-10 md:mb-14 flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                        <span className="text-white/40 text-[10px] uppercase tracking-[0.35em] font-mono shrink-0">
                            По оценке
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {ratingFilters.map((filter) => (
                                <button
                                    key={filter}
                                    type="button"
                                    onClick={() => setActiveRating(filter)}
                                    className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 cursor-pointer ${activeRating === filter
                                            ? "bg-white text-black border-white"
                                            : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:border-white/25"
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                        <span className="text-white/40 text-[10px] uppercase tracking-[0.35em] font-mono shrink-0">
                            По типу
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {typeFilters.map((filter) => (
                                <button
                                    key={filter}
                                    type="button"
                                    onClick={() => setActiveType(filter)}
                                    className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 cursor-pointer ${activeType === filter
                                            ? "bg-white text-black border-white"
                                            : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:border-white/25"
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="group relative bg-[#111111] border border-white/10 rounded-2xl p-6 md:p-7 transition-all duration-500 hover:border-white/25 hover:bg-[#151515] flex flex-col"
                        >
                            <div className="flex items-start gap-4 mb-5">
                                <div className="shrink-0 w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                    <FaUser className="text-white/40 size-4" />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <p className="text-white text-base font-semibold truncate">
                                        {review.name}
                                    </p>
                                    <p className="text-white/45 text-xs mt-0.5 truncate">
                                        {review.company}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 mb-5">
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map((s) =>
                                        s <= review.rating ? (
                                            <FaStar key={s} className="size-3.5 text-yellow-400" />
                                        ) : (
                                            <FaRegStar key={s} className="size-3.5 text-white/20" />
                                        )
                                    )}
                                </div>
                                <span className="text-white/25 text-xs">·</span>
                                <span className="text-white/40 text-xs">{review.date}</span>
                            </div>

                            <p className="text-white/65 text-sm md:text-base leading-relaxed flex-1">
                                {review.text}
                            </p>

                            <div className="mt-6 pt-5 border-t border-white/8 flex items-center justify-between gap-4">
                                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/55 text-[10px] uppercase tracking-widest">
                                    {review.type}
                                </span>

                                {review.caseHref && (
                                    <a
                                        href={review.caseHref}
                                        className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-xs font-medium transition-colors duration-300 group/link"
                                    >
                                        Смотреть кейс
                                        <IoIosArrowForward className="size-3 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <button
                        type="button"
                        className="px-8 py-3 rounded-full border border-white/15 bg-white/5 text-white/70 hover:text-white hover:border-white/30 hover:bg-white/10 text-sm font-medium transition-all duration-300 cursor-pointer"
                    >
                        Показать ещё
                    </button>
                </div>
            </div>
        </div>
    )
}