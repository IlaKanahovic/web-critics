import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"

const services = [
    "Все",
    "Веб-разработка",
    "Автоматизация",
    "AI",
    "Аналитика",
    "Надёжность",
]

const sorting = [
    "По популярности",
    "По дате ↑",
    "По дате ↓",
]

const filters = [
    "Все",
    "Сайты",
    "Веб-приложения",
    "Магазины",
    "Боты",
    "Интеграции",
]

const projects = [
    {
        id: 1,
        title: "Название проекта",
        category: "услуга · тип",
        slug: "/project-1",
    },
]

export function PortfolioComponent() {
    return (
        <div className="container">
            <div className="pt-10 md:pt-24">
                <span className="text-white/40 text-xs uppercase tracking-widest">Портфолио</span>

                <h1 className="text-font-cormorant text-[#f0f0f0] text-5xl md:text-7xl lg:text-[96px] leading-tight mt-6">
                    То, что мы уже сделали.
                </h1>

                <div className="mt-8 space-y-4 max-w-2xl">
                    <p className="text-white/70 text-font-inter text-base md:text-lg leading-relaxed">
                        Здесь - проекты, которые мы разрабатывали, запускали и улучшали: от сайтов и цифровых продуктов до автоматизации, интеграций и AI-решений.
                    </p>
                    <p className="text-white/50 text-font-inter text-sm md:text-base leading-relaxed">
                        У каждого проекта была своя задача. Иногда нужно было создать что-то с нуля. Иногда - разобраться с тем, что уже работает, и сделать это лучше.
                    </p>
                </div>

                <div className="mt-10 md:mt-14">

                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <details className="relative group">
                            <summary className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm font-medium cursor-pointer hover:bg-white/10 hover:border-white/30 transition-all duration-300 list-none">
                                Услуга: Все
                                <svg className="w-3 h-3 ml-1 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="absolute left-0 top-full mt-2 z-50 bg-[#111111] border border-white/10 rounded-xl shadow-2xl p-2 min-w-45 backdrop-blur-sm">
                                {services.map((item) => (
                                    <div key={item} className="px-3 py-1.5 text-white/80 hover:text-white hover:bg-white/5 rounded-lg text-sm cursor-pointer transition-colors">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </details>

                        <details className="relative group">
                            <summary className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm font-medium cursor-pointer hover:bg-white/10 hover:border-white/30 transition-all duration-300 list-none">
                                Тип: Все
                                <svg className="w-3 h-3 ml-1 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="absolute left-0 top-full mt-2 z-50 bg-[#111111] border border-white/10 rounded-xl shadow-2xl p-2 min-w-45 backdrop-blur-sm">
                                {filters.map((item) => (
                                    <div key={item} className="px-3 py-1.5 text-white/80 hover:text-white hover:bg-white/5 rounded-lg text-sm cursor-pointer transition-colors">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </details>

                        <div className="ml-auto flex items-center gap-2">
                            <span className="text-white/40 text-xs uppercase tracking-wider">Сортировка:</span>
                            <details className="relative group">
                                <summary className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm font-medium cursor-pointer hover:bg-white/10 hover:border-white/30 transition-all duration-300 list-none">
                                    По популярности
                                    <svg className="w-3 h-3 ml-1 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <div className="absolute right-0 top-full mt-2 z-50 bg-[#111111] border border-white/10 rounded-xl shadow-2xl p-2 min-w-45 backdrop-blur-sm">
                                    {sorting.map((item) => (
                                        <div key={item} className="px-3 py-1.5 text-white/80 hover:text-white hover:bg-white/5 rounded-lg text-sm cursor-pointer transition-colors">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </details>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {projects.map((project) => (
                            <Link key={project.id} href={`/portfolio/${project.slug}`}>
                                <div className="group relative rounded-xl bg-[#111111] border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/25 hover:shadow-2xl cursor-pointer">
                                    <div className="relative w-full h-60 bg-linear-to-br from-violet-500/10 via-blue-500/5 to-transparent border-b border-white/5 overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-white/20 text-xs uppercase tracking-widest font-mono">
                                                preview / video
                                            </span>
                                        </div>
                                        <div
                                            className="absolute inset-0 opacity-30"
                                            style={{
                                                backgroundImage: `
                                                    linear-gradient(rgba(167,139,250,0.15) 1px, transparent 1px),
                                                    linear-gradient(90deg, rgba(167,139,250,0.15) 1px, transparent 1px)
                                                `,
                                                backgroundSize: "30px 30px",
                                            }}
                                        />
                                    </div>

                                    <div className="p-5">
                                        <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                                        <p className="text-white/50 text-sm mt-1">{project.category}</p>

                                        <span className="inline-flex items-center gap-1 text-white/50 group-hover:text-white text-sm font-medium transition-colors duration-200 mt-4">
                                            Открыть проект
                                            <IoIosArrowForward className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="mt-20 md:mt-28 max-w-3xl mx-auto text-center">
                    <h2 className="text-white text-font-space text-4xl md:text-5xl">
                        У вас другая задача?
                    </h2>
                    <div className="mt-4 space-y-3">
                        <p className="text-white/60 text-font-inter text-sm md:text-base leading-relaxed">
                            Не обязательно искать среди готовых решений что-то похожее.
                        </p>
                        <p className="text-white/50 text-font-inter text-sm md:text-base leading-relaxed">
                            Расскажите, что нужно сделать, что сейчас не работает или что хочется изменить. Разберёмся с задачей и подберём способ её решить.
                        </p>
                    </div>

                    <Link href="/contacts">
                        <button className="button-main-styles inline-flex items-center gap-2 mt-8">
                            Обсудить задачу
                            <IoIosArrowForward className="size-5" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}