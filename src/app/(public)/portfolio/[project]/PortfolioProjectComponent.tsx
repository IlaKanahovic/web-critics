'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { IoIosArrowForward, IoMdClose } from "react-icons/io"
import { FaCheck, FaCode, FaPaintBrush, FaMobile, FaSearch, FaBullhorn, FaCog, FaRocket } from "react-icons/fa"
import type { Case } from "../../../../../prisma/generated/prisma"

export const dynamic = 'force-dynamic'

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

                <h1 className="text-font-space text-white text-4xl md:text-5xl lg:text-6xl mt-6 max-w-4xl">
                    {project.title}
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mt-12">
                    <div className="lg:col-span-8 space-y-4">
                        <div
                            className="relative w-full aspect-4/5 rounded-xl bg-[#0a0a0a] border border-white/10 overflow-hidden flex items-center justify-center p-2 group cursor-zoom-in"
                            onClick={() => currentImage && setIsLightboxOpen(true)}
                        >
                            {currentImage ? (
                                <>
                                    <img
                                        src={currentImage}
                                        alt={`${project.title} - изображение ${activeIndex + 1}`}
                                        className="w-full h-full object-contain"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                        <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
                                            <FaSearch className="text-white text-xl" />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <span className="text-white/20 text-xs uppercase tracking-widest font-mono">
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
                                            ? 'border-violet-500 opacity-100 shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                                            : 'border-white/10 opacity-50 hover:opacity-100 hover:border-white/30'
                                            }`}
                                    >
                                        <img
                                            src={img}
                                            alt={`Миниатюра ${idx + 1}`}
                                            className="w-full h-full object-cover"
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
                                    className="block text-white/50 hover:text-white text-sm font-mono underline underline-offset-4 decoration-white/20 transition-colors"
                                >
                                    Ссылка на проект
                                </a>
                            )}

                            <div>
                                <h2 className="text-white text-2xl font-semibold">Какая была задача?</h2>
                                <p className="text-white/80 text-sm mt-2 leading-relaxed">
                                    {project.clientsObjective}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-white text-2xl font-semibold">Какие велись работы?</h2>
                                <ul className="mt-5 space-y-3">
                                    {project.tasks.map((i: string) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="shrink-0 w-5 h-5 rounded-full bg-violet-400/15 flex items-center justify-center mt-0.5">
                                                <FaCheck className="text-violet-400/80 size-2.5" />
                                            </span>
                                            <span className="text-white/60 text-sm leading-relaxed">
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
                                                className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/50 hover:bg-white/10 hover:border-violet-400/40 hover:text-violet-300 transition-all duration-300"
                                            >
                                                <Icon className="size-4" />
                                            </a>
                                            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none">
                                                <div className="bg-[#111111] border border-white/10 rounded-lg shadow-2xl px-3 py-2 min-w-max">
                                                    <span className="text-white/70 text-xs whitespace-nowrap">
                                                        {popup}
                                                    </span>
                                                </div>
                                                <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 bg-[#111111] border-r border-b border-white/10 rotate-45 -mt-1" />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="pt-6 border-t border-white/8">
                                <h3 className="text-white text-xl font-semibold leading-snug">
                                    Понравилось?
                                </h3>
                                <p className="text-white/50 text-sm mt-2 leading-relaxed">
                                    Закажите подобное решение
                                </p>
                                <Link href="/contacts">
                                    <button className="button-main-styles mt-6">
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
                    className="fixed inset-0 z-100 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-200"
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-all cursor-pointer"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <IoMdClose size={28} />
                    </button>

                    <img
                        src={currentImage}
                        alt={`${project.title} - увеличенное изображение`}
                        className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    )
}