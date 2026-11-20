'use client'

import { useThemeStore } from '@/store/targetThemeStore'
import { Moon, Sun } from 'lucide-react'
import { useEffect } from 'react'

export function ChangeThemeButton() {
    const { targetTheme, setTargetTheme } = useThemeStore()
    const isDark = targetTheme === 'Dark'

    useEffect(() => {
        const root = window.document.documentElement
        if (isDark) {
            root.classList.add('dark')
            root.classList.remove('light')
        } else {
            root.classList.add('light')
            root.classList.remove('dark')
        }
    }, [isDark])

    return (
        <button
            onClick={() => setTargetTheme(isDark ? 'Light' : 'Dark')}
            aria-label="Переключить тему"
            className={`relative flex items-center w-16 h-8.5 rounded-full p-1 cursor-pointer transition-colors duration-500 shadow-inner shrink-0 outline-none ${isDark
                ? 'bg-[#1a1a1a] border border-white/10 hover:border-white/20'
                : 'bg-[#e0e0e0] border border-black/5 hover:border-black/10'
                }`}
        >
            <div className="absolute inset-0 flex items-center justify-between px-2.5 pointer-events-none">
                <Moon
                    size={14}
                    className={`transition-colors duration-500 ${!isDark ? 'text-violet-500' : 'text-[#333]'}`}
                />
                <Sun
                    size={14}
                    className={`transition-colors duration-500 ${isDark ? 'text-yellow-500' : 'text-[#ccc]'}`}
                />
            </div>
            <div
                className={`relative z-10 flex items-center justify-center w-6.5 h-6.5 rounded-full shadow-md transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isDark ? 'translate-x-0 bg-[#222] border border-white/10' : 'translate-x-7.5 bg-white border border-black/10'
                    }`}
            >
                <div className={`absolute transition-all duration-500 ${!isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}>
                    <Sun size={14} className="text-yellow-500" />
                </div>
                <div className={`absolute transition-all duration-500 ${isDark ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'}`}>
                    <Moon size={14} className="text-white" />
                </div>
            </div>
        </button>
    )
}