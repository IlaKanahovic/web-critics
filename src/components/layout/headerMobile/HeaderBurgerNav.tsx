'use client'

import { useState } from "react"
import { FaArrowRightLong, FaChevronDown } from "react-icons/fa6"
import { HeaderMobileConnection } from "./HeaderMobileConnection"

const services = [
    {
        title: "Веб-разработка",
        href: "/services/web-development",
        items: [
            { label: "Сайты", href: "/services/web-development/sites" },
            { label: "Веб-приложения", href: "/services/web-development/web-application" },
            { label: "Интерфейсы", href: "/services/web-development/interfaces" },
            { label: "Интернет-магазины", href: "/services/web-development/online-stores" },
            { label: "Сложные веб-продукты", href: "/services/web-development/complex-webproducts" },
        ],
    },
    {
        title: "Автоматизация",
        href: "/services/automation",
        items: [
            { label: "Автоматизация процессов", href: "/services/automation/process-automation" },
            { label: "Интеграции", href: "/services/automation/integrations" },
            { label: "CRM", href: "/services/automation/crm" },
            { label: "Боты", href: "/services/automation/bots" },
            { label: "Уведомления", href: "/services/automation/notifications" },
            { label: "Внутренние инструменты", href: "/services/automation/internal-tools" },
        ],
    },
    {
        title: "Рост и аналитика",
        href: "/services/growth-analytics",
        items: [
            { label: "SEO", href: "/services/growth-analytics/seo" },
            { label: "Аналитика", href: "/services/growth-analytics/analytics" },
        ],
    },
    {
        title: "Надёжность и масштабирование",
        href: "/services/reliability",
        items: [
            { label: "Безопасность", href: "/services/reliability/security" },
            { label: "Тестирование", href: "/services/reliability/testing" },
            { label: "Архитектура", href: "/services/reliability/architecture" },
        ],
    },
    {
        title: "AI",
        href: "/services/ai",
        items: [
            { label: "AI-ассистенты", href: "/services/ai/ai-assistants" },
            { label: "AI-боты", href: "/services/ai/ai-bots" },
            { label: "Интеграция моделей", href: "/services/ai/model-integration" },
            { label: "Обработка данных", href: "/services/ai/data-processing" },
            { label: "AI-автоматизация", href: "/services/ai/ai-automation" },
        ],
    },
]

export function HeaderBurgerNav() {
    const [open, setOpen] = useState(false)
    const [openCategory, setOpenCategory] = useState<number | null>(null)

    const toggleCategory = (idx: number) => {
        setOpenCategory(openCategory === idx ? null : idx)
    }

    return (
        <div className="bg-black min-h-screen pt-8">
            <div className="container-mobile">
                <HeaderMobileConnection />
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
                        <FaArrowRightLong
                            className={`size-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                        />
                    </button>
                    <div
                        className={`grid transition-all duration-500 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                        <div className="overflow-hidden">
                            <div className="pb-4">
                                {services.map((cat, idx) => {
                                    const isOpen = openCategory === idx
                                    return (
                                        <div key={idx} className="border-l border-white/5 ml-2">
                                            <button
                                                type="button"
                                                onClick={() => toggleCategory(idx)}
                                                className="w-full flex items-center justify-between py-3 px-4 text-left text-white/70 hover:text-white text-sm transition-colors cursor-pointer"
                                            >
                                                <span>{cat.title}</span>
                                                <FaArrowRightLong
                                                    className={`size-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                                />
                                            </button>

                                            <div
                                                className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                                            >
                                                <div className="overflow-hidden">
                                                    <ul className="pb-2 pl-4 space-y-1.5">
                                                        {cat.items.map((item, i) => (
                                                            <li key={i}>
                                                                <a
                                                                    href={item.href}
                                                                    className="block py-1.5 text-white/45 hover:text-white text-sm transition-colors"
                                                                >
                                                                    {item.label}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
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