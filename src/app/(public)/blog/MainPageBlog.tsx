'use client'

import Link from "next/link"
import Image from "next/image" // <--- Добавили
import { FaRegClock, FaSearch, FaUser } from "react-icons/fa"
import { IoIosArrowForward } from "react-icons/io"
import type { Article } from "../../../../prisma/generated/prisma"
import { searchWithinTheTextBlog } from "@/lib/utils/SearchWithinTheTextBlog"
import { useState, useMemo } from "react"
import { ARTICLE_TYPE_LABELS } from "@/constants/blogCategories/articles"

interface IMainPageBlog {
    articles: Article[] | null
    title?: string
}

const ARTICLE_TYPES = [
    { value: "cases", label: "Кейсы клиентов" },
    { value: "business-solutions", label: "Бизнес-решения" },
    { value: "technologies", label: "Технологии WebCRitics" },
    { value: "stocks", label: "Акции" },
    { value: "guides", label: "Руководства" }
] as const


export function MainPageBlog({ articles, title = "Самое новое" }: IMainPageBlog) {
    const [searchText, setSearchText] = useState("")

    const counts = useMemo(() => {
        const result: Record<string, number> = { all: articles?.length || 0 }
        if (articles) {
            for (const article of articles) {
                result[article.type] = (result[article.type] || 0) + 1
            }
        }
        return result
    }, [articles])

    const categories = [
        { num: "01", label: "Самое новое", href: "/blog", type: "all" },
        { num: "02", label: "Кейсы клиентов", href: "/blog/cases", type: "cases" },
        { num: "03", label: "Бизнес-решения", href: "/blog/business-solutions", type: "business-solutions" },
        { num: "04", label: "Технологии WebCRitics", href: "/blog/technologies", type: "technologies" },
        { num: "05", label: "Акции", href: "/blog/stocks", type: "stocks" },
        { num: "06", label: "Руководства", href: "/blog/guides", type: "guides" },
    ]

    if (!articles) return (
        <div className="container">
            <div className="pt-10 md:pt-18 pb-20 md:pb-32">
                <div className="mb-4 md:mb-10 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 light:via-line to-transparent" />
                    <span className="text-white/40 light:text-ink-muted text-xs uppercase tracking-widest">Блог</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 light:via-line to-transparent" />
                </div>

                <h1 className="text-white light:text-ink text-font-space text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-10 md:mb-18">
                    Самое новое
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    <div className="lg:col-span-8 order-2 lg:order-1">
                        <div className="relative mb-10 md:mb-12">
                            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 light:text-ink-muted size-4 pointer-events-none" />
                            <input
                                type="text"
                                placeholder="Поиск по блогу"
                                className="w-full pl-12 pr-5 py-4 bg-[#111111] light:bg-white light:shadow-card border border-white/10 light:border-line rounded-full text-white light:text-ink text-sm placeholder:text-white/30 light:placeholder:text-ink-muted focus:outline-none focus:border-white/30 light:focus:border-accent transition-colors"
                            />
                        </div>
                    </div>

                    <aside className="lg:col-span-4 order-1 lg:order-2">
                        <div className="lg:sticky lg:top-24">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="w-1.5 h-1.5 rounded-full bg-violet-400/60 light:bg-accent" />
                                <span className="text-white/40 light:text-ink-muted text-[10px] uppercase tracking-[0.35em] font-mono">
                                    Разделы
                                </span>
                            </div>

                            <ul>
                                {categories.map((cat, i) => (
                                    <li key={i}>
                                        <Link href={cat.href}>
                                            <div className="group flex items-center gap-4 py-4 border-b border-white/8 light:border-line hover:border-white/30 light:hover:border-accent/40 transition-colors duration-500 cursor-pointer">
                                                <span className="text-white/25 light:text-ink-muted font-mono text-xs w-6 group-hover:text-violet-300/60 light:group-hover:text-accent transition-colors duration-500">
                                                    {cat.num}
                                                </span>

                                                <span className="flex-1 text-white/70 light:text-ink-secondary group-hover:text-white light:group-hover:text-accent-hover text-sm md:text-base transition-all duration-500 group-hover:translate-x-0.5">
                                                    {cat.label}
                                                </span>

                                                <span className="text-white/25 light:text-ink-muted group-hover:text-white/60 light:group-hover:text-accent text-xs font-mono transition-colors duration-500">
                                                    {String(counts[cat.type] || 0).padStart(2, "0")}
                                                </span>

                                                <IoIosArrowForward className="size-3 text-white/15 light:text-ink-muted group-hover:text-white/60 light:group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-500" />
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )

    const filteredArticles = searchWithinTheTextBlog(searchText, articles) || []

    return (
        <div className="container">
            <div className="pt-10 md:pt-18 pb-20 md:pb-32">
                <div className="mb-4 md:mb-10 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 light:via-line to-transparent" />
                    <span className="text-white/40 light:text-ink-muted text-xs uppercase tracking-widest">Блог</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 light:via-line to-transparent" />
                </div>

                <h1 className="text-white light:text-ink text-font-space text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-10 md:mb-18">
                    {title}
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    <div className="lg:col-span-8 order-2 lg:order-1">
                        <div className="relative mb-10 md:mb-12">
                            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 light:text-ink-muted size-4 pointer-events-none" />
                            <input
                                type="text"
                                placeholder="Поиск по блогу"
                                className="w-full pl-12 pr-5 py-4 bg-[#111111] light:bg-white light:shadow-card border border-white/10 light:border-line rounded-full text-white light:text-ink text-sm placeholder:text-white/30 light:placeholder:text-ink-muted focus:outline-none focus:border-white/30 light:focus:border-accent transition-colors"
                                value={searchText}
                                onChange={(event) => setSearchText(event.target.value)}
                            />
                        </div>

                        <div className="space-y-6">
                            {filteredArticles.map((article: Article) => (
                                <Link
                                    key={article.id}
                                    href={`/blog/${article.slug}`}
                                >
                                    <article className="group relative bg-[#111111] light:bg-white light:shadow-card border mt-6 border-white/10 light:border-line rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/25 light:hover:border-accent/40 hover:-translate-y-1 hover:shadow-2xl light:hover:shadow-card-hover cursor-pointer">
                                        <div className="relative h-56 md:h-64 bg-linear-to-br from-violet-500/10 light:from-accent/10 via-blue-500/5 light:via-accent/5 to-transparent border-b border-white/5 light:border-line overflow-hidden">
                                            <div className="absolute inset-0 opacity-25 z-0 blog-cover-grid" />
                                            <div className="absolute inset-0 z-10">
                                                {article.previewBg && (
                                                    <Image
                                                        src={article.previewBg}
                                                        alt={article.title}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                                                        className="object-cover"
                                                    />
                                                )}
                                            </div>

                                            <span className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/70 light:bg-white/95 backdrop-blur-sm border border-white/10 light:border-line text-white/80 light:text-accent-hover text-[10px] uppercase tracking-widest z-20">
                                                {ARTICLE_TYPE_LABELS[article.type] ?? article.type}
                                            </span>
                                        </div>

                                        <div className="p-6 md:p-8">
                                            <h2 className="text-white light:text-ink text-xl md:text-2xl lg:text-3xl font-semibold leading-snug group-hover:text-violet-300 light:group-hover:text-accent-hover transition-colors duration-500">
                                                {article.title}
                                            </h2>

                                            <p className="text-white/50 light:text-ink-secondary text-sm md:text-base leading-relaxed mt-4 group-hover:text-white/70 light:group-hover:text-ink transition-colors duration-500">
                                                {article.description}
                                            </p>

                                            <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-white/8 light:border-line">
                                                <div className="relative w-8 h-8 rounded-full bg-white/5 light:bg-canvas border border-white/10 light:border-line shrink-0 overflow-hidden">
                                                    {article.avatar && (
                                                        <Image
                                                            src={article.avatar}
                                                            alt={article.nameAuthor || ''}
                                                            fill
                                                            sizes="32px"
                                                            className="object-cover"
                                                        />
                                                    )}
                                                </div>
                                                <span className="text-white/65 light:text-ink-secondary text-xs md:text-sm">{article.nameAuthor}</span>
                                                <span className="text-white/15 light:text-ink-muted text-xs">·</span>
                                                <span className="text-white/40 light:text-ink-muted text-xs md:text-sm">
                                                    {new Date(article.date as unknown as string).toLocaleDateString('ru-RU')}
                                                </span>
                                                <span className="text-white/15 light:text-ink-muted text-xs">·</span>
                                                <span className="inline-flex items-center gap-1.5 text-white/40 light:text-ink-muted text-xs md:text-sm">
                                                    <FaRegClock className="size-3" />
                                                    {article.readingTime}
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                            {filteredArticles.length === 0 && (
                                <p className="text-white/50 light:text-ink-secondary text-center py-10">
                                    По запросу «{searchText}» ничего не найдено.
                                </p>
                            )}
                        </div>
                    </div>

                    <aside className="lg:col-span-4 order-1 lg:order-2">
                        <div className="lg:sticky lg:top-24">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="w-1.5 h-1.5 rounded-full bg-violet-400/60 light:bg-accent" />
                                <span className="text-white/40 light:text-ink-muted text-[10px] uppercase tracking-[0.35em] font-mono">
                                    Разделы
                                </span>
                            </div>
                            <ul>
                                {categories.map((cat, i) => (
                                    <li key={i}>
                                        <Link href={cat.href}>
                                            <div className="group flex items-center gap-4 py-4 border-b border-white/8 light:border-line hover:border-white/30 light:hover:border-accent/40 transition-colors duration-500 cursor-pointer">
                                                <span className="text-white/25 light:text-ink-muted font-mono text-xs w-6 group-hover:text-violet-300/60 light:group-hover:text-accent transition-colors duration-500">
                                                    {cat.num}
                                                </span>

                                                <span className="flex-1 text-white/70 light:text-ink-secondary group-hover:text-white light:group-hover:text-accent-hover text-sm md:text-base transition-all duration-500 group-hover:translate-x-0.5">
                                                    {cat.label}
                                                </span>

                                                <span className="text-white/25 light:text-ink-muted group-hover:text-white/60 light:group-hover:text-accent text-xs font-mono transition-colors duration-500">
                                                    {String(counts[cat.type] || 0).padStart(2, "0")}
                                                </span>

                                                <IoIosArrowForward className="size-3 text-white/15 light:text-ink-muted group-hover:text-white/60 light:group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-500" />
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div >
    )
}