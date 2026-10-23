'use client'

import { acceptConsent, hasConsent } from "@/store/cookieStore";
import { useEffect, useState } from "react";

export function CookieBanner() {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => setIsMounted(true), [])

    const consent = hasConsent()

    if (!isMounted) return null
    if (consent) return null

    return (
        <div
            role="dialog"
            aria-label="Согласие на использование файлов cookie"
            className="fixed bottom-5 left-5 z-50 w-[calc(100%-2.5rem)] max-w-sm"
        >
            <div className="rounded-2xl bg-[#0d0d0d]/95 backdrop-blur-md border border-white/10 shadow-xl shadow-black/40 p-5">
                <div className="flex items-center gap-2.5">
                    <span className="shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 text-white/80"
                        >
                            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                            <circle cx="8.5" cy="10.5" r="0.8" fill="currentColor" stroke="none" />
                            <circle cx="12" cy="15" r="0.8" fill="currentColor" stroke="none" />
                            <circle cx="15.5" cy="12" r="0.8" fill="currentColor" stroke="none" />
                        </svg>
                    </span>
                    <h3 className="text-white text-font-inter text-sm font-semibold">
                        Мы используем cookie
                    </h3>
                </div>

                <p className="text-white/60 text-font-inter text-xs mt-3 leading-relaxed">
                    Чтобы сайт работал корректно и мы понимали, что улучшить. Продолжая пользоваться сайтом, вы соглашаетесь с{' '}
                    <a
                        href="/personal-data-processing-policy"
                        className="text-white/90 hover:text-white underline underline-offset-2 transition-colors"
                    >
                        политикой обработки данных
                    </a>
                    .
                </p>

                <div className="flex items-center gap-2 mt-4">
                    <button
                        type="button"
                        onClick={() => acceptConsent()}
                        className="flex-1 px-4 py-2 rounded-lg bg-white text-black text-xs font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-95 cursor-pointer"
                    >
                        Принять
                    </button>
                </div>
            </div>
        </div>
    )
}