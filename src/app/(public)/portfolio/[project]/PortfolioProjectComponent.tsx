'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from "next/image"
import { IoIosArrowForward, IoMdClose } from "react-icons/io"
import { FaCheck, FaCode, FaPaintBrush, FaMobile, FaSearch, FaBullhorn, FaCog, FaRocket } from "react-icons/fa"
import type { Case } from "../../../../../prisma/generated/prisma"

interface IPortfolioProjectComponent {
    project: Case | null
}

export function PortfolioProjectComponent({ project }: IPortfolioProjectComponent) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)

    useEffect(() => {
        if (isLightboxOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isLightboxOpen])

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsLightboxOpen(false)
        }
        window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [])

    if (!project) return null

    const icons = [FaCode, FaPaintBrush, FaMobile, FaSearch, FaBullhorn, FaCog, FaRocket]

    const allImages = [project.previewBg, ...(project.previewProject || [])].filter(Boolean)
    const currentImage = allImages[activeIndex] || null

    return (
        <div className="container">
            <div className="pt-10 md:pt-20">

                <h1 className="text-font-space text-white light:text-ink text-4xl md:text-5xl lg:text-6xl mt-6 max-w-4xl">
                    {project.title}
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mt-12">
                    <div className="lg:col-span-8 space-y-4">
                        <div
                            className="relative w-full aspect-4/5 rounded-xl bg-[#0a0a0a] light:bg-white light:shadow-card border border-white/10 light:border-line overflow-hidden flex items-center justify-center group cursor-zoom-in"
                            onClick={() => currentImage && setIsLightboxOpen(true)}
                        >
                            {currentImage ? (
                                <>
                                    <Image
                                        src={currentImage}
                                        alt={`${project.title} - изображение ${activeIndex + 1}`}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 66vw"
                                        className="object-contain"
                                        priority // Загружаем главную картинку сразу
                                    />
                                    <div className="absolute inset-0 bg-black/40 light:bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-10">
                                        <div className="w-14 h-14 rounded-full bg-white/10 light:bg-white/90 backdrop-blur-md border border-white/20 light:border-line flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-2xl light:shadow-card">
                                            <FaSearch className="text-white light:text-accent text-xl" />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <span className="text-white/20 light:text-ink-muted text-xs uppercase tracking-widest font-mono">
                                    Нет изображения
                                </span>
                            )}
                        </div>

                        {allImages.length > 1 && (
                            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                                {allImages.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`relative shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer ${activeIndex === idx
                                                ? 'border-violet-500 light:border-accent opacity-100 shadow-[0_0_15px_rgba(139,92,246,0.3)] light:shadow-accent/25'
                                                : 'border-white/10 light:border-line opacity-50 hover:opacity-100 hover:border-white/30 light:hover:border-accent/40'
                                            }`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`Миниатюра ${idx + 1}`}
                                            fill
                                            sizes="80px"
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-24 space-y-8">
                            {project.url && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-white/50 light:text-accent hover:text-white light:hover:text-accent-hover text-sm font-mono underline underline-offset-4 decoration-white/20 light:decoration-accent/40 transition-colors"
                                >
                                    Ссылка на проект
                                </a>
                            )}

                            <div>
                                <h2 className="text-white light:text-ink text-2xl font-semibold">Какая была задача?</h2>
                                <p className="text-white/80 light:text-ink-secondary text-sm mt-2 leading-relaxed">
                                    {project.clientsObjective}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-white light:text-ink text-2xl font-semibold">Какие велись работы?</h2>
                                <ul className="mt-5 space-y-3">
                                    {project.tasks.map((i: string) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="shrink-0 w-5 h-5 rounded-full bg-violet-400/15 light:bg-accent/10 flex items-center justify-center mt-0.5">
                                                <FaCheck className="text-violet-400/80 light:text-accent size-2.5" />
                                            </span>
                                            <span className="text-white/60 light:text-ink-secondary text-sm leading-relaxed">
                                                {i}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {project.popups.map((popup, i) => {
                                    const Icon = icons[i % icons.length]
                                    return (
                                        <div key={i} className="relative group">
                                            <a
                                                href="#"
                                                className="w-9 h-9 rounded-full bg-white/5 light:bg-white border border-white/15 light:border-line flex items-center justify-center text-white/50 light:text-ink-secondary hover:bg-white/10 light:hover:bg-accent/5 hover:border-violet-400/40 light:hover:border-accent/40 hover:text-violet-300 light:hover:text-accent-hover transition-all duration-300"
                                            >
                                                <Icon className="size-4" />
                                            </a>
                                            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none">
                                                <div className="bg-[#111111] light:bg-white border border-white/10 light:border-line rounded-lg shadow-2xl light:shadow-card px-3 py-2 min-w-max">
                                                    <span className="text-white/70 light:text-ink-secondary text-xs whitespace-nowrap">
                                                        {popup}
                                                    </span>
                                                </div>
                                                <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 bg-[#111111] light:bg-white border-r border-b border-white/10 light:border-line rotate-45 -mt-1" />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="pt-6 border-t border-white/8 light:border-line">
                                <h3 className="text-white light:text-ink text-xl font-semibold leading-snug">
                                    Понравилось?
                                </h3>
                                <p className="text-white/50 light:text-ink-secondary text-sm mt-2 leading-relaxed">
                                    Закажите подобное решение
                                </p>
                                <Link href="/contacts">
                                    <button className="button-main-styles button-primary mt-6">
                                        Обсудить решение
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isLightboxOpen && currentImage && (
                <div
                    className="fixed inset-0 z-100 bg-black/95 light:bg-canvas/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-200"
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/50 light:text-ink-secondary hover:text-white light:hover:text-accent-hover bg-white/5 light:bg-white hover:bg-white/10 light:hover:bg-canvas light:shadow-card rounded-full p-2 transition-all cursor-pointer z-50"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <IoMdClose size={28} />
                    </button>

                    <div className="relative w-full h-full">
                        <Image
                            src={currentImage}
                            alt={`${project.title} - увеличенное изображение`}
                            fill
                            className="object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
