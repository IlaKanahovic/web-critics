import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"
import { FaStar } from "react-icons/fa"
import type { IProjectsLength } from "../MainPage"

export function HeroLeft({ projectsLength }: IProjectsLength) {
    return (
        <div className="pt-12 md:pt-32">
            <div className="relative p-px rounded-2xl bg-linear-to-r from-[#0a126f] light:from-accent via-[#ffb52b] light:via-line to-[#6502b6] light:to-accent max-w-max cursor-pointer transition-shadow duration-400 hover:shadow-[0_0_15px_rgba(2,252,239,0.35),0_0_30px_rgba(255,181,43,0.25),0_0_45px_rgba(160,43,254,0.15)] light:hover:shadow-sm">
                <div className="flex items-center justify-around px-3 py-1.25 rounded-2xl bg-[#171716] light:bg-white">
                    <a href="/blog/stocks"><span className="text-btn-hero-offers">Выгодные предложения</span></a>
                    <IoIosArrowForward className="text-white light:text-accent size-3 mt-0.75 ml-1.5" />
                </div>
            </div>
            <h1 className="text-font-cormorant text-[#f0f0f0] light:text-ink text-5xl md:text-7xl lg:text-[96px] leading-tight mt-8">
                Ваша проблема. <br />Наше решение.
            </h1>
            <h2 className="text-font-inter text-[#a1a4a5] light:text-ink-secondary text-base md:text-lg mt-6">
                Находим, что мешает вашему бизнесу расти,
                <br />
                и создаём цифровое решение под конкретную задачу.
            </h2>
            <div className="flex flex-wrap items-center gap-6 pt-8">
                <Link href="/contacts">
                    <button className="text-font-inter text-[#a1a4a5] text-lg md:text-xl duration-300 hover:text-white cursor-pointer button-main-styles button-primary">
                        Анализ вашей проблемы
                    </button>
                </Link>
                <Link href="/portfolio">
                    <button className="button-main-styles button-secondary">
                        Портфолио
                    </button>
                </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-8 text-sm">
                {/* <Link
                    href="/portfolio"
                    className="relative z-10 pointer-events-auto group inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 cursor-pointer"
                    aria-label="Перейти к выполненным работам"
                >
                    <span className="text-white/90 font-semibold group-hover:text-white transition-colors duration-300">
                        Более {projectsLength}
                    </span>
                    <span className="text-sm">выполненных работ</span>
                    <IoIosArrowForward className="size-3.5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
                </Link>

                <div className="hidden sm:block w-px h-5 bg-white/10" /> */}

                <Link
                    href="/reviews"
                    className="relative z-10 pointer-events-auto group inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 light:bg-white light:shadow-card border border-white/10 light:border-line text-white/50 light:text-ink-secondary hover:text-white light:hover:text-accent-hover hover:bg-white/10 light:hover:bg-canvas hover:border-white/30 light:hover:border-accent/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] light:hover:shadow-sm transition-all duration-300 cursor-pointer"
                    aria-label="Перейти к отзывам клиентов"
                >
                    <span className="text-white/90 light:text-ink font-semibold group-hover:text-white light:group-hover:text-accent-hover transition-colors duration-300">
                        4.8 / 5
                    </span>
                    <span className="text-sm">Средняя оценка</span>

                    <div className="flex text-yellow-400 light:text-rating text-sm gap-0.5">
                        {[...Array(4)].map((_, i) => (
                            <FaStar key={i} size={14} />
                        ))}
                        <div className="relative w-3.5 h-3.5 overflow-hidden">
                            <FaStar
                                className="absolute inset-0 text-yellow-400 light:text-rating"
                                style={{ clipPath: 'inset(0 20% 0 0)' }}
                            />
                        </div>
                    </div>

                    <IoIosArrowForward className="size-3.5 text-white/40 light:text-ink-muted group-hover:text-white light:group-hover:text-accent-hover group-hover:translate-x-0.5 transition-all duration-300" />
                </Link>
            </div>
        </div>
    )
}
