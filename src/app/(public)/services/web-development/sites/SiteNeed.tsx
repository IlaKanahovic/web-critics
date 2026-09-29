'use client'

import { useState } from "react"
import { IoIosArrowForward } from "react-icons/io"

const allTypes = [
    "Лендинги",
    "Сайты компаний",
    "Сайты услуг",
    "Корпоративные сайты",
    "Интернет-магазины",
    "Каталоги",
    "Промо-сайты",
    "Многостраничные сайты",
    "Личные кабинеты",
    "Онлайн-сервисы",
    "Веб-приложения",
    "Внутренние системы",
    "Клиентские порталы",
    "Сайты с интеграциями",
    "Сложные веб-продукты",
    "Нестандартные цифровые решения",
]

const visibleCount = 8

export function SiteNeed() {
    const [expanded, setExpanded] = useState(false)
    const visible = expanded ? allTypes : allTypes.slice(0, visibleCount)

    return (
        <div className="container">
            <div className="pt-20 md:pt-32 max-w-4xl mx-auto text-center">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Форматы</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl">
                    Сделаем сайт под вашу задачу
                </h2>

                <div className="mt-6 space-y-4 max-w-2xl mx-auto">
                    <p className="text-white/70 text-font-inter text-base md:text-lg leading-relaxed">
                        Неважно, нужен вам небольшой сайт услуг, полноценный интернет-магазин, корпоративный портал или нестандартный веб-продукт. Мы не ограничиваем разработку заранее заданным набором форматов.
                    </p>
                    <p className="text-white/50 text-font-inter text-sm md:text-base leading-relaxed">
                        Сначала смотрим на задачу и на то, как сейчас устроен ваш бизнес. Затем определяем, каким должен быть сайт, что он должен уметь и какую роль выполнять в вашей работе.
                    </p>
                </div>

                <div className="relative mt-12">
                    <div className="flex flex-wrap justify-center gap-3">
                        {visible.map((type, i) => (
                            <span
                                key={i}
                                className="px-5 py-2.5 rounded-full bg-[#111111] border border-white/10 text-white/70 text-sm font-medium transition-all duration-300 hover:border-white/25 hover:text-white cursor-default"
                            >
                                {type}
                            </span>
                        ))}
                    </div>

                    {!expanded && (
                        <div className="absolute inset-x-0 bottom-0 h-20 pointer-events-none bg-linear-to-t from-[#050505] to-transparent" />
                    )}

                    <div className="relative mt-6 flex justify-center">
                        <button
                            type="button"
                            onClick={() => setExpanded(!expanded)}
                            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm font-medium transition-colors duration-300 group"
                        >
                            <span>{expanded ? "Свернуть" : "Полный список"}</span>
                            <IoIosArrowForward
                                className={`size-4 transition-transform duration-300 ${expanded ? "-rotate-90" : "group-hover:translate-x-0.5"}`}
                            />
                        </button>
                    </div>
                </div>

                <div className="mt-12 max-w-2xl mx-auto">
                    <p className="text-white/60 text-font-inter text-sm md:text-base leading-relaxed">
                        Не нашли здесь свой вариант? Это не значит, что мы его не делаем.
                        <br />
                        Если для решения задачи нужен другой формат - разработаем его.
                    </p>
                </div>
            </div>
        </div>
    )
}