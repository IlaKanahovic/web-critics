import type { Metadata } from "next"
import { WebDevelopmentBackground } from "../components/WebDevelopmentBackground"
import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop"
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile"
import { HeroInterfaces } from "./HeroInterfaces"
import { WhatIsInInterface } from "./WhatIsInInterface"
import { InterfaceNeed } from "./InterfaceNeed"
import { UserSpecificIntareface } from "./UserSpecificIntareface"
import { CanIncludedInInterface } from "./CanIncludedInInterface"
import { FromStructureToFinishedInterface } from "./FromStructureToFinishedInterface"
import { FAQandCTAinteraface } from "./FAQandCTAinteraface"
import { Footer } from "@/components/layout/footer/Footer"

export const metadata: Metadata = {
    title: "Проектирование и разработка интерфейсов",
    description: "Проектируем интерфейсы для веб-продуктов. Сначала разбираемся в сценариях пользователей, затем прорабатываем структуру, прототип и готовые экраны.",
    alternates: { canonical: "/services/web-development/interfaces" },
}

export default function WebDevelopmentInterfaces() {
    return (
        <div className="relative min-h-screen bg-[#050505] light:bg-canvas overflow-hidden" style={{ isolation: "isolate" }}>
            <WebDevelopmentBackground />

            <div className="relative z-10 pt-18">
                <div className="mobile-only">
                    <HeaderMobile />
                </div>
                <div className="desktop-only">
                    <HeaderDesktop />
                </div>
                <HeroInterfaces />
                <WhatIsInInterface />
                <InterfaceNeed />
                <UserSpecificIntareface />
                <CanIncludedInInterface />
                <FromStructureToFinishedInterface />
                <FAQandCTAinteraface />
                <Footer />
            </div>
        </div>
    )
}