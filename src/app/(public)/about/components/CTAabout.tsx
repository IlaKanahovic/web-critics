import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"

export function CTAabout() {
    return (
        <div className="container">
            <div className="pt-20 md:pt-32 pb-20 md:pb-32">
                <div className="relative rounded-3xl border border-white/8 bg-linear-to-br from-white/4 via-white/2 to-transparent overflow-hidden">
                    <div className="absolute -top-1/3 -right-1/4 w-175 h-175 rounded-full bg-violet-500/10 blur-[140px] pointer-events-none" />
                    <div className="absolute -bottom-1/3 -left-1/4 w-150 h-150 rounded-full bg-blue-500/8 blur-[140px] pointer-events-none" />

                    <span className="absolute -top-8 -left-4 text-[200px] md:text-[320px] font-bold text-white/2.5 leading-none select-none pointer-events-none">
                        A
                    </span>

                    <div className="relative p-8 md:p-16 lg:p-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                        <div className="lg:col-span-7">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-px w-8 bg-white/30" />
                                <span className="text-white/40 text-xs uppercase tracking-widest">Финальный шаг</span>
                            </div>

                            <h2 className="text-white text-3xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
                                Есть проблема, которую нужно решить?
                            </h2>

                            <p className="text-white/60 text-sm md:text-lg leading-relaxed max-w-xl mb-4">
                                Необязательно знать, нужен ли вам сайт, бот, автоматизация, веб-приложение или что-то совершенно другое.
                            </p>
                            <p className="text-white/45 text-sm md:text-base leading-relaxed max-w-xl">
                                Расскажите, что сейчас не работает, что занимает слишком много времени или какой результат вы хотите получить. Мы разберём задачу и определим, какой вариант решения имеет смысл рассмотреть.
                            </p>
                        </div>

                        <div className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-white/8">
                            <Link href="/contacts">
                                <button
                                    type="button"
                                    className="group relative w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-black font-medium text-base md:text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-95 cursor-pointer"
                                >
                                    <span className="relative z-10">Обсудить задачу</span>
                                    <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                                    <span className="absolute inset-0 bg-linear-to-br from-gray-200 to-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                                </button>
                            </Link>

                            <p className="text-white/40 text-xs md:text-sm leading-relaxed mt-5 max-w-sm">
                                Разберём задачу и определим, с чего имеет смысл начать.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}