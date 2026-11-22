import { dbGetPortfolioProjects } from "@/lib/db/portfolio/dbGetPortfolioProjects"
import Link from "next/link"
import Image from "next/image"
import { IoIosArrowForward } from "react-icons/io"
import type { Case } from "../../../../prisma/generated/prisma"

export const dynamic = 'force-dynamic'

const services = [
    "Все", "Веб-разработка", "Автоматизация", "AI", "Аналитика", "Надёжность",
]

const filters = [
    "Все", "Сайты", "Веб-приложения", "Магазины", "Боты", "Интеграции",
]

export async function PortfolioComponent() {
    const projects = await dbGetPortfolioProjects()

    return (
        <div className="container">
            <div className="pt-10 md:pt-24">
                <span className="text-white/40 light:text-ink-muted text-xs uppercase tracking-widest">Портфолио</span>
                <h1 className="text-font-cormorant text-[#f0f0f0] light:text-ink text-5xl md:text-7xl lg:text-[96px] leading-tight mt-6">
                    То, что мы уже сделали.
                </h1>
                <div className="mt-8 space-y-4 max-w-2xl">
                    <p className="text-white/70 light:text-ink-secondary text-font-inter text-base md:text-lg leading-relaxed">
                        Здесь - проекты, которые мы разрабатывали, запускали и улучшали: от сайтов и цифровых продуктов до автоматизации, интеграций и AI-решений.
                    </p>
                    <p className="text-white/50 light:text-ink-secondary text-font-inter text-sm md:text-base leading-relaxed">
                        У каждого проекта была своя задача. Иногда нужно было создать что-то с нуля. Иногда - разобраться с тем, что уже работает, и сделать это лучше.
                    </p>
                </div>
                <div className="mt-10 md:mt-14">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {projects.map((project: Case) => (
                            <Link key={project.id} href={`/portfolio/${project.slug}`}>
                                <div className="group relative rounded-xl bg-[#111111] light:bg-white light:shadow-card border border-white/10 light:border-line overflow-hidden transition-all duration-300 hover:border-white/25 light:hover:border-accent/40 hover:shadow-2xl light:hover:shadow-card-hover cursor-pointer">
                                    <div className="relative w-full h-60 bg-linear-to-br from-violet-500/10 light:from-accent/10 via-blue-500/5 light:via-accent/5 to-transparent border-b border-white/5 light:border-line overflow-hidden">

                                        <Image
                                            src={project.previewBg}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover relative z-10"
                                        />

                                        <div className="absolute inset-0 opacity-30 z-20 pointer-events-none portfolio-preview-grid" />
                                    </div>

                                    <div className="p-5 relative z-30">
                                        <h2 className="text-white light:text-ink text-lg font-semibold">{project.title}</h2>
                                        <div className="flex">
                                            <p className="text-white/50 light:text-ink-muted text-sm mt-1 mr-2">{project.service}</p>
                                            <p className="text-white/50 light:text-ink-muted text-sm mt-1 mr-2">•</p>
                                            <p className="text-white/50 light:text-ink-muted text-sm mt-1 mr-2">{project.type}</p>
                                        </div>

                                        <span className="inline-flex items-center gap-1 text-white/50 light:text-accent group-hover:text-white light:group-hover:text-accent-hover text-sm font-medium transition-colors duration-200 mt-4">
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
                    <h2 className="text-white light:text-ink text-font-space text-4xl md:text-5xl">
                        У вас другая задача?
                    </h2>
                    <div className="mt-4 space-y-3">
                        <p className="text-white/60 light:text-ink-secondary text-font-inter text-sm md:text-base leading-relaxed">
                            Не обязательно искать среди готовых решений что-то похожее.
                        </p>
                        <p className="text-white/50 light:text-ink-secondary text-font-inter text-sm md:text-base leading-relaxed">
                            Расскажите, что нужно сделать, что сейчас не работает или что хочется изменить. Разберёмся с задачей и подберём способ её решить.
                        </p>
                    </div>

                    <Link href="/contacts">
                        <button className="button-main-styles button-primary inline-flex items-center gap-2 mt-8">
                            Обсудить задачу
                            <IoIosArrowForward className="size-5" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
