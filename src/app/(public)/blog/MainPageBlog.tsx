'use client'

import Link from "next/link"
import { FaSearch, FaUser } from "react-icons/fa"
import { IoIosArrowForward } from "react-icons/io"
import { articles, categories } from "@/components/ui/blogCategories/categoryBlog"

export function MainPageBlog() {
    return (
        <div className="container">
            <div className="pt-10 md:pt-18 pb-20 md:pb-32">
                <div className="mb-4 md:mb-10 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Блог</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <h1 className="text-white text-font-space text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-10 md:mb-18">
                    Самое новое
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    <div className="lg:col-span-8">
                        <div className="relative mb-10 md:mb-12">
                            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 size-4 pointer-events-none" />
                            <input
                                type="text"
                                placeholder="Поиск по блогу"
                                className="w-full pl-12 pr-5 py-4 bg-[#111111] border border-white/10 rounded-full text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                            />
                        </div>

                        <div className="space-y-6">
                            {articles.map((article) => (
                                <Link key={article.id} href={`/blog/${article.slug}`}>
                                    <article className="group relative bg-[#111111] border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/25 hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
                                        <div className="relative h-56 md:h-64 bg-linear-to-br from-violet-500/10 via-blue-500/5 to-transparent border-b border-white/5 overflow-hidden">
                                            <div
                                                className="absolute inset-0 opacity-25"
                                                style={{
                                                    backgroundImage: `
                                                        linear-gradient(rgba(167,139,250,0.15) 1px, transparent 1px),
                                                        linear-gradient(90deg, rgba(167,139,250,0.15) 1px, transparent 1px)
                                                    `,
                                                    backgroundSize: "40px 40px",
                                                }}
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-white/15 text-xs uppercase tracking-widest font-mono">
                                                    {article.preview}
                                                </span>
                                            </div>

                                            <span className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-sm border border-white/10 text-white/80 text-[10px] uppercase tracking-widest">
                                                {article.category}
                                            </span>
                                        </div>

                                        <div className="p-6 md:p-8">
                                            <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold leading-snug group-hover:text-violet-300 transition-colors duration-500">
                                                {article.title}
                                            </h3>

                                            <p className="text-white/50 text-sm md:text-base leading-relaxed mt-4 group-hover:text-white/70 transition-colors duration-500">
                                                {article.excerpt}
                                            </p>

                                            <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-white/8">
                                                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                                    <FaUser className="text-white/40 size-3" />
                                                </div>
                                                <span className="text-white/65 text-xs md:text-sm">{article.author}</span>
                                                <span className="text-white/15 text-xs">·</span>
                                                <span className="text-white/40 text-xs md:text-sm">{article.date}</span>
                                                <span className="text-white/15 text-xs">·</span>
                                                <span className="text-white/40 text-xs md:text-sm">{article.readTime}</span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <aside className="lg:col-span-4">
                        <div className="lg:sticky lg:top-24">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="w-1.5 h-1.5 rounded-full bg-violet-400/60" />
                                <span className="text-white/40 text-[10px] uppercase tracking-[0.35em] font-mono">
                                    Разделы
                                </span>
                            </div>

                            <ul>
                                {categories.map((cat, i) => (
                                    <li key={i}>
                                        <Link href={cat.href}>
                                            <div className="group flex items-center gap-4 py-4 border-b border-white/8 hover:border-white/30 transition-colors duration-500 cursor-pointer">
                                                <span className="text-white/25 font-mono text-xs w-6 group-hover:text-violet-300/60 transition-colors duration-500">
                                                    {cat.num}
                                                </span>

                                                <span className="flex-1 text-white/70 group-hover:text-white text-sm md:text-base transition-all duration-500 group-hover:translate-x-0.5">
                                                    {cat.label}
                                                </span>

                                                <span className="text-white/25 group-hover:text-white/60 text-xs font-mono transition-colors duration-500">
                                                    {String(cat.count).padStart(2, "0")}
                                                </span>

                                                <IoIosArrowForward className="size-3 text-white/15 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all duration-500" />
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
}