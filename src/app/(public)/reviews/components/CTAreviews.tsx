import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"

export function CTAreviews() {
    return (
        <div className="container">
            <div className="pt-20 md:pt-32 pb-20 md:pb-32">
                <div className="relative rounded-3xl border border-white/8 bg-linear-to-br from-white/4 via-white/2 to-transparent overflow-hidden">
                    <div className="absolute -top-1/3 -right-1/4 w-175 h-175 rounded-full bg-violet-500/10 blur-[140px] pointer-events-none" />
                    <div className="absolute -bottom-1/3 -left-1/4 w-150 h-150 rounded-full bg-blue-500/8 blur-[140px] pointer-events-none" />

                    <span className="absolute -top-8 -left-4 text-[200px] md:text-[320px] font-bold text-white/2.5 leading-none select-none pointer-events-none">
                        ★
                    </span>

                    <div className="relative p-8 md:p-16 lg:p-24">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-px w-8 bg-white/30" />
                                <span className="text-white/40 text-xs uppercase tracking-widest">Финальный шаг</span>
                            </div>

                            <h2 className="text-white text-3xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
                                Хотите поделиться опытом или обсудить свой проект?
                            </h2>

                            <p className="text-white/60 text-sm md:text-lg leading-relaxed max-w-2xl">
                                Если мы уже работали вместе - оставьте отзыв. Если только выбираете исполнителя - расскажите, какую задачу нужно решить, и мы обсудим подходящий вариант.
                            </p>

                            <div className="flex flex-wrap items-center gap-4 mt-10">
                                <button
                                    type="button"
                                    className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-black font-medium text-base md:text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-95 cursor-pointer"
                                >
                                    <span className="relative z-10">Оставить отзыв</span>
                                    <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                                    <span className="absolute inset-0 bg-linear-to-br from-gray-200 to-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                                </button>

                                <Link href="/contacts">
                                    <button
                                        type="button"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-5 rounded-full border border-white/20 bg-white/5 text-white/85 text-base md:text-lg font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:text-white cursor-pointer"
                                    >
                                        Обсудить задачу
                                        <IoIosArrowForward className="size-4 transition-transform duration-300" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}