'use client'

import { useThemeStore } from "@/store/targetThemeStore"

export default function Offer() {
    const isLight = useThemeStore((state) => state.targetTheme === 'Light')

    return (
        <div className={isLight ? "min-h-screen bg-canvas" : "min-h-screen bg-black"}></div>
    )
}
