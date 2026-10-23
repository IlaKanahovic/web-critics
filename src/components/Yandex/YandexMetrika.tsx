"use client"

import { hasConsent } from "@/store/cookieStore";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect, Suspense, useState } from "react";

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

function YandexMetrikaTracker() {
    return (
        <Suspense fallback={null}>
            <Tracker />
        </Suspense>
    )
}

export function YandexMetrika() {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => setIsMounted(true), [])

    const consent = hasConsent()

    if (!isMounted) return null
    if (!consent) return null

    return (
        <div>
            <Script id="yandex-metrika" strategy="afterInteractive">
                {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=113698334', 'ym');

            ym(113698334, 'init', {
                ssr: true,
                webvisor: true,
                clickmap: true,
                ecommerce: "dataLayer",
                accurateTrackBounce: true,
                trackLinks: true
            });
            `}
            </Script>
            <noscript>
                <div>
                    <img
                        src="https://mc.yandex.ru/watch/113698334"
                        style={{ position: 'absolute', left: '-9999px' }}
                        alt=""
                    />
                </div>
            </noscript>
            <YandexMetrikaTracker />
        </div>
    )
}