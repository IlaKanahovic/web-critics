'use client'

import { useState } from "react"
import { FaArrowRightLong, FaChevronDown } from "react-icons/fa6"

const webDevelopment = {
    title: "Веб-разработка",
    href: "/services/web-development",
    items: [
        { label: "Сайты", href: "/services/web-development/sites" },
        { label: "Веб-приложения", href: "/services/web-development/web-application" },
        { label: "Интерфейсы", href: "/services/web-development/interfaces" },
        { label: "Интернет-магазины", href: "/services/web-development/online-stores" },
        { label: "Сложные веб-продукты", href: "/services/web-development/complex-webproducts" },
    ],
}

const otherServices = [
    { title: "Автоматизация", href: "/services/automation" },
    { title: "Рост и аналитика", href: "/services/growth-analytics" },
    { title: "Надёжность и масштабирование", href: "/services/reliability" },
    { title: "AI", href: "/services/ai" },
]

export function HeaderBurgerNav() {
    const [open, setOpen] = useState(false)
    const [openWebDev, setOpenWebDev] = useState(false)

    return (
        <div className="bg-black min-h-screen pt-8">
            <div className="container-mobile">
                <a href="/" className="text-mobile-nav">
                    <div>Главная</div>
                    <FaArrowRightLong className="size-5" />
                </a>
                <hr className="border border-[#111111]" />

                <div>
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="text-mobile-nav w-full cursor-pointer"
                    >
                        <span>Услуги</span>
                        <FaChevronDown
                            className={`size-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                        />
                    </button>

                    <div
                        className={`grid transition-all duration-500 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                        <div className="overflow-hidden">
                            <div className="pb-4 pl-2">
                                <div className="border-l border-white/10">
                                    <button
                                        type="button"
                                        onClick={() => setOpenWebDev(!openWebDev)}
                                        className="w-full flex items-center justify-between py-3 px-4 text-left text-white hover:text-violet-300 text-sm font-medium transition-colors cursor-pointer"
                                    >
                                        <span>Веб-разработка</span>
                                        <FaChevronDown
                                            className={`size-3 transition-transform duration-300 ${openWebDev ? "rotate-180" : ""}`}
                                        />
                                    </button>

                                    <div
                                        className={`grid transition-all duration-300 ease-out ${openWebDev ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                                    >
                                        <div className="overflow-hidden">
                                            <ul className="pb-2 pl-4 space-y-1.5">
                                                {webDevelopment.items.map((item, i) => (
                                                    <li key={i}>
                                                        <a
                                                            href={item.href}
                                                            className="flex items-center gap-3 py-1.5 text-white/50 hover:text-white text-sm transition-colors"
                                                        >
                                                            <span className="text-white/20 font-mono text-[10px] w-5">
                                                                {String(i + 1).padStart(2, "0")}
                                                            </span>
                                                            <span>{item.label}</span>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-l border-white/10">
                                    {otherServices.map((service, i) => (
                                        <a
                                            key={i}
                                            href={service.href}
                                            className="flex items-center justify-between py-3 px-4 text-white/70 hover:text-white text-sm transition-colors"
                                        >
                                            <span>{service.title}</span>
                                            <FaArrowRightLong className="size-3.5 text-white/25" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="border border-[#111111]" />
                <a href="/catalog" className="text-mobile-nav">
                    <div>Каталог</div>
                    <FaArrowRightLong className="size-5" />
                </a>
                <hr className="border border-[#111111]" />
                <a href="/portfolio" className="text-mobile-nav">
                    <div>Портфолио</div>
                    <FaArrowRightLong className="size-5" />
                </a>
                <hr className="border border-[#111111]" />
                <a href="/about" className="text-mobile-nav">
                    <div>О нас</div>
                    <FaArrowRightLong className="size-5" />
                </a>
                <hr className="border border-[#111111]" />
                <a href="/contacts" className="text-mobile-nav">
                    <div>Контакты</div>
                    <FaArrowRightLong className="size-5" />
                </a>
            </div>
        </div>
    )
}