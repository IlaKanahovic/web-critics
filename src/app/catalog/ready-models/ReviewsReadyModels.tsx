import Link from "next/link"
import { FaUser, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import { IoIosArrowForward } from "react-icons/io"

const reviews = [
    {
        id: 1,
        name: "Анна Смирнова",
        company: "Студия красоты «Lux»",
        avatar: null,
        rating: 5,
        text: "Заказали готовый инструмент для генерации отчетов — всё сделали за 3 дня, адаптировали под наш стиль. Бухгалтерия работает намного быстрее. Очень довольны результатом!",
        date: "15 августа 2026",
    }
]

export function ReviewsReadyModels() {
    return (
        <div className="container">
            <div className="pt-42">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Отзывы</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

            <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-white text-font-space text-4xl md:text-5xl">Что говорят те, кто уже автоматизировал свою работу</h2>
                    <p className="text-white/60 text-font-inter text-base mt-3">
                        Реальный опыт клиентов, которые использовали готовые инструменты для автоматизации процессов и решения рабочих задач.
                    </p>
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-[#111111] border border-white/10 rounded-xl p-6 transition-all duration-300 hover:shadow-2xl flex flex-col"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <FaUser className="text-white/40 size-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                        <span className="text-white font-medium text-base truncate">{review.name}</span>
                                        <span className="text-white/40 text-xs">{review.company}</span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-0.5">
                                        <div className="flex text-yellow-400 text-sm">
                                            {[...Array(5)].map((_, i) => {
                                                if (i < Math.floor(review.rating)) return <FaStar key={i} />
                                                if (i < Math.ceil(review.rating)) return <FaStarHalfAlt key={i} />
                                                return <FaRegStar key={i} />
                                            })}
                                        </div>
                                        <span className="text-white/30 text-xs ml-1">{review.date}</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-white/70 text-font-inter text-sm leading-relaxed mt-4 flex-1">
                                {review.text}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-10 flex justify-center">
                    <Link href="/reviews" className="button-main-styles inline-flex items-center">
                        Все отзывы
                        <IoIosArrowForward className="size-5 ml-2" />
                    </Link>
                </div>
                <div className="mt-12 max-w-2xl mx-auto text-center bg-[#111111] border border-white/10 rounded-xl p-8">
                    <p className="text-white text-base font-medium">Уже пользовались нашим инструментом?</p>
                    <p className="text-white/60 text-font-inter text-sm mt-1">
                        Расскажите, как всё прошло - ваш отзыв поможет другим быстрее принять решение.
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

