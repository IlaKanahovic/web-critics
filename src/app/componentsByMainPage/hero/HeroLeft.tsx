import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"
import { FaStar } from "react-icons/fa"

export function HeroLeft() {
    return (
        <div className="pt-32">
            <div className="relative p-px rounded-2xl bg-linear-to-r from-[#0a126f] via-[#ffb52b] to-[#6502b6] max-w-max cursor-pointer transition-shadow duration-400 hover:shadow-[0_0_15px_rgba(2,252,239,0.35),0_0_30px_rgba(255,181,43,0.25),0_0_45px_rgba(160,43,254,0.15)]">
                <div className="flex items-center justify-around px-3 py-1.25 rounded-2xl bg-[#171716]">
                    <span className="text-btn-hero-offers">Выгодные предложения</span>
                    <IoIosArrowForward className="text-white size-3 mt-0.75 ml-1.5" />
                </div>
            </div>
            <h1 className="text-font-cormorant text-[#f0f0f0] text-5xl md:text-7xl lg:text-[96px] leading-tight mt-8">
                Ваша проблема. <br />Наше решение.
            </h1>
            <h2 className="text-font-inter text-[#a1a4a5] text-base md:text-lg mt-6">
                Находим, что мешает вашему бизнесу расти,
                <br />
                и создаём цифровое решение под конкретную задачу.
            </h2>
            <div className="flex flex-wrap items-center gap-6 pt-8">
                <Link href="/catalog">
                    <button className="button-main-styles">
                        Каталог
                    </button>
                </Link>
                <Link href="/contacts">
                    <button className="text-font-inter text-[#a1a4a5] text-lg md:text-xl duration-300 hover:text-white cursor-pointer button-main-styles">
                        Анализ вашей проблемы
                    </button>
                </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-8 text-sm">
                <div className="flex items-center gap-2 text-white/50">
                    <span className="text-white/70 font-medium">Более 100</span>
                    <span>выполненных работ</span>
                </div>
                <div className="hidden sm:block w-px h-5 bg-white/10" />
                <div className="flex items-center gap-3 text-white/50">
                    <span className="text-white/70 font-medium">4.8 / 5</span>
                    <span>Средняя оценка</span>
                    <div className="flex text-yellow-400 text-sm gap-0.5">
                        {[...Array(4)].map((_, i) => (
                            <FaStar key={i} size={14} />
                        ))}
                        <div className="relative w-3.5 h-3.5 overflow-hidden">
                            <FaStar className="absolute inset-0 text-yellow-400" style={{ clipPath: 'inset(0 20% 0 0)' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}