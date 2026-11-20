'use client'

import { BrandIdentityLogo } from "@/components/ui/logo/BrandIdentityLogo"
import { useEffect, useState } from "react"
import { HeaderBurgerMenu } from "./HeaderBurgerMenu"
import { HeaderBurgerNav } from "./HeaderBurgerNav"
import { ChangeThemeButton } from "@/components/ui/buttons/ChangeThemeButton"


export function HeaderMobile() {
    const [scrolled, setScrolled] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)

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
            <div className="container-mobile flex justify-between items-center">
                <BrandIdentityLogo />
                <div className="flex items-center gap-3">
                    <ChangeThemeButton />
                    <HeaderBurgerMenu openMenu={openMenu} setOpenMenu={() => setOpenMenu(!openMenu)} />
                </div>
            </div>

            {openMenu ? <HeaderBurgerNav /> : <div></div>}
        </header>
    )
}
