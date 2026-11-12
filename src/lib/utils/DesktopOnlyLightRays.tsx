'use client'

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const LightRays = dynamic(() => import('@/components/LightRays/LightRays'), {
    ssr: false,
    loading: () => <div className="w-full h-256" />,
})

export function DesktopOnlyLightRays() {
    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 768)
        checkIsDesktop()
        window.addEventListener('resize', checkIsDesktop)

        return () => window.removeEventListener('resize', checkIsDesktop)
    }, [])

    if (!isDesktop) {
        return null
    }

    return (
        <div className="w-full h-256 absolute top-0 left-0 z-0">
            <LightRays
                raysOrigin="top-center"
                raysColor="#ffffff"
                raysSpeed={0.8}
                lightSpread={0.5}
                rayLength={0.5}
                pulsating={false}
                fadeDistance={1}
                saturation={0.8}
                followMouse
                mouseInfluence={0.05}
                noiseAmount={0.1}
                distortion={0}
            />
        </div>
    )
}