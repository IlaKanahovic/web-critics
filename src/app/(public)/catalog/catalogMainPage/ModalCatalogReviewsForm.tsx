'use client'

import { IoClose } from "react-icons/io5"
import { FaStar } from "react-icons/fa"
import { IoIosArrowForward } from "react-icons/io"

interface Props {
    isOpen: boolean
    onClose: () => void
}

export function ModalReviewsCatalogForm() {
    return (
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            <div
                className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl bg-[#111111] border border-white/10 shadow-2xl p-6 md:p-8"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors duration-200"
                >
                    <IoClose size={28} />
                </button>

                <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                    <h2 className="text-white text-font-space text-2xl md:text-3xl text-center">Оставить отзыв</h2>
                    <p className="text-white/60 text-font-inter text-center text-sm mt-2">
                        Расскажите о своём опыте — это поможет другим клиентам.
                    </p>

                    <div className="mt-6 space-y-4">
                        <div>
                            <label className="text-white/80 text-font-inter text-sm font-medium block mb-1.5">Ваше имя</label>
                            <input
                                type="text"
                                placeholder="Иван Иванов"
                                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                            />
                        </div>

                        <div>
                            <label className="text-white/80 text-font-inter text-sm font-medium block mb-1.5">Компания / ссылка</label>
                            <input
                                type="text"
                                placeholder="Название компании / ссылка"
                                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                            />
                        </div>

                        <div>
                            <label className="text-white/80 text-font-inter text-sm font-medium block mb-1.5">Какое решение вы использовали?</label>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    type="button"
                                    className="px-4 py-1.5 rounded-full border text-sm font-medium bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                                >
                                    Сайты
                                </button>
                                <button
                                    type="button"
                                    className="px-4 py-1.5 rounded-full border text-sm font-medium bg-white/5 text-white/80 border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                                >
                                    Боты
                                </button>
                                <button
                                    type="button"
                                    className="px-4 py-1.5 rounded-full border text-sm font-medium bg-white/5 text-white/80 border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                                >
                                    Инструменты
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="text-white/80 text-font-inter text-sm font-medium block mb-1.5">Оценка</label>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button key={star} type="button" className="text-2xl transition-colors duration-200 focus:outline-none">
                                        <FaStar className={star <= 0 ? "text-yellow-400" : "text-white/20"} />
                                    </button>
                                ))}
                                <span className="text-white/40 text-sm ml-2 self-center">0 из 5</span>
                            </div>
                        </div>

                        <div>
                            <label className="text-white/80 text-font-inter text-sm font-medium block mb-1.5">Ваш отзыв</label>
                            <textarea
                                rows={4}
                                placeholder="Расскажите, как прошло сотрудничество, что понравилось, что получилось..."
                                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors resize-y"
                            />
                        </div>

                        <label className="flex items-start gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                className="mt-0.5 w-4 h-4 bg-black/40 border border-white/20 rounded checked:bg-white checked:border-white focus:ring-0 focus:ring-offset-0 accent-white cursor-pointer"
                            />
                            <span className="text-white/70 text-font-inter text-xs leading-relaxed">
                                Я даю согласие на обработку персональных данных на условиях{' '}
                                <a href="/personal-data-processing-policy" className="text-white/90 hover:text-white underline underline-offset-2">
                                    Политики обработки персональных данных
                                </a>
                                {' '}и публикацию отзыва на сайте.
                            </span>
                        </label>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <button
                            type="submit"
                            className="relative px-8 py-3 bg-white text-black rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-95 cursor-pointer group"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Отправить отзыв
                                <IoIosArrowForward className="size-4" />
                            </span>
                            <span className="absolute inset-0 bg-linear-to-r from-gray-200 to-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}