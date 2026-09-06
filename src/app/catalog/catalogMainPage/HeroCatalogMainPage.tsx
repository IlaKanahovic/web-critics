'use client'

import { FaGlobe, FaRocket, FaCubes } from "react-icons/fa"
import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"

const cardClass = "group relative rounded-xl bg-[#111111] border border-white/10 shadow-inner shadow-white/5 transition-all duration-300 hover:border-white/20 flex flex-col items-start p-6 min-h-[340px] cursor-pointer"

const items = [
    {
        href: "/catalog/ready-sites",
        title: "Готовые сайты",
        desc: "Готовая основа для бизнеса, которую не нужно собирать с нуля. Выберите подходящий вариант, адаптируйте его под свой бизнес и запустите за несколько дней.",
        btn: "Посмотреть сайты",
        icon: FaGlobe,
    },
    {
        href: "/catalog/bots",
        title: "Боты",
        desc: "Готовые боты для общения с клиентами, автоматизации рутинных задач и обработки обращений. Выбираете сценарий - мы адаптируем его под ваш бизнес.",
        btn: "Посмотреть ботов",
        icon: FaRocket,
    },
    {
        href: "/catalog/ready-models",
        title: "Готовые инструменты",
        desc: "Отдельные цифровые решения, которые можно подключить к существующему бизнесу: автоматизация, интеграции, аналитика и другие готовые модули.",
        btn: "Посмотреть инструменты",
        icon: FaCubes,
    }
]

export function HeroCatalogMainPage() {
    return (
        <div className="container">
            <div className="pt-42">
                <h1 className="text-font-cormorant text-[#f0f0f0] text-[96px] leading-24 mt-8">Каталог</h1>
                <p className="text-font-cormorant text-[#f0f0f0] text-[40px] leading-8">Возможно, нужное решение уже готово</p>
                <h2 className="text-font-inter text-[#bcbebe] text-[18px] mt-5">
                    Сайты, боты и цифровые инструменты,
                    <br />
                    которые можно адаптировать под задачу и запустить значительно быстрее индивидуальной разработки.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {items.map((item, idx) => (
                        <Link key={idx} href={item.href}>
                            <div className={cardClass}>
                                <div className="mb-4 p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-white/30 transition-all duration-300">
                                    <item.icon className="text-white/70 size-6 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                                </div>
                                <span className="text-white text-font-inter text-xl font-semibold">{item.title}</span>
                                <p className="text-white/60 text-font-inter text-sm mt-2 flex-1">{item.desc}</p>
                                <button className="mt-4 cursor-pointer inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/20 text-white text-sm font-medium transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group/btn">
                                    {item.btn}
                                    <IoIosArrowForward className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
