"use client"

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

const YM_ID = 113698334

function Tracker() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        if (typeof window === 'undefined') return
        const ym = (window as any).ym
        if (typeof ym !== 'function') return

        const url =
            pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "")
        ym(YM_ID, 'hit', url)
    }, [pathname, searchParams])

    return null
}

export default function YandexMetrikaTracker() {
    return (
        <Suspense fallback={null}>
            <Tracker />
        </Suspense>
    )
}