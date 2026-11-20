'use client'

import { useState, useEffect } from 'react'
import { BrandIdentityLogo } from "@/components/ui/logo/BrandIdentityLogo"
import { HeaderDesktopNav } from "./HeaderDesktopNav"
import { HeaderDesktopСonnection } from "./HeaderDesktopСonnection"
import { ChangeThemeButton } from '@/components/ui/buttons/ChangeThemeButton'

export function HeaderDesktop() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 30
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [scrolled])

    return (
        <header
            className={`
        fixed top-0 left-0 w-full z-1000 pt-3 pb-3
        transition-all duration-300 ease-in-out
        ${scrolled
                    ? 'bg-black/30 light:bg-white/30 backdrop-blur-lg border-b border-white/5 light:border-line/60'
                    : 'bg-transparent backdrop-blur-none border-transparent'
                }
        `}
        >
            <div className="container flex justify-between items-center">
                <BrandIdentityLogo />
                <HeaderDesktopNav />
                <div className="flex items-center gap-4">
                    <ChangeThemeButton />
                    <HeaderDesktopСonnection />
                </div>
            </div>
        </header>
    )
}
