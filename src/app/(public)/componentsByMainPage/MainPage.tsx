'use client'

import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop"
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile"
import { Hero } from "./hero/Hero"
import { OverviewOfServices } from "./overviewOfServices/OverviewOfServices"
import { AboutMyWork } from "./aboutMyWork/AboutMyWork"
import { Portfolio } from "./portfolio/Portfolio"
import { ContactsMainPage } from "./contactsMainPage/ContactsMainPage"
import { Footer } from "@/components/layout/footer/Footer"
import { TeaserCatalog } from "./teaserByCatalog/TeaserCatalog"
import { ApplicationLaunch } from "./applicationToLaunch/ApplicationLaunch"
import dynamic from "next/dynamic"

const LightRays = dynamic(() => import('@/components/LightRays'), {
    ssr: false,
    loading: () => null,
})

export function MainPage() {
    return (
        <div className="relative pt-18">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundColor: "#000000",
                    backgroundImage: `
                        repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 40px,
                            rgba(255, 255, 255, 0.04) 40px,
                            rgba(255, 255, 255, 0.04) 41px
                        ),
                        repeating-linear-gradient(
                            -45deg,
                            transparent,
                            transparent 40px,
                            rgba(255, 255, 255, 0.04) 40px,
                            rgba(255, 255, 255, 0.04) 41px
                        )
                    `,
                    zIndex: -2,
                }}
            />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.03) 0%, transparent 70%)",
                    zIndex: -1,
                }}
            />
            <div
                className="desktop-only"
                style={{
                    width: '100%',
                    height: '1024px',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    zIndex: 0,
                }}
            >
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
            <div className="mobile-only">
                <HeaderMobile />
            </div>
            <div className="desktop-only">
                <HeaderDesktop />
            </div>
            <Hero />
            <OverviewOfServices />
            <AboutMyWork />
            <TeaserCatalog />
            <ApplicationLaunch />
            <Portfolio />
            <ContactsMainPage />
            <Footer />
        </div>
    )
}