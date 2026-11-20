'use client'

import { WebDevelopmentBackground } from "./components/WebDevelopmentBackground";
import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { HeroWebDevelopment } from "./components/HeroWebDevelopment";
import { CanBeDevelopedWebDevelopment } from "./components/CanBeDevelopedWebDevelopment";
import { SolvingBusninessProblemsWebDevelopment } from "./components/SolvingBusninessProblemsWebDevelopment";
import { DevelopmentStagesWebDevelopment } from "./components/DevelopmentStagesWebDevelopment";
import { HowWeWorkWebDevelopment } from "./components/HowWeWorkWebDevelopment";
import { FAQandCTAByWebDevelopment } from "./components/FAQandCTAByWebDevelopment";
import { Footer } from "@/components/layout/footer/Footer";

export default function servicesWebDevelopment() {
    return (
        <div className="relative min-h-screen bg-[#050505] light:bg-canvas overflow-hidden" style={{ isolation: "isolate" }}>
            <WebDevelopmentBackground showCode />

            <div className="relative z-10 pt-18">
                <div className="mobile-only">
                    <HeaderMobile />
                </div>
                <div className="desktop-only">
                    <HeaderDesktop />
                </div>
                <HeroWebDevelopment />
                <CanBeDevelopedWebDevelopment />
                <SolvingBusninessProblemsWebDevelopment />
                <DevelopmentStagesWebDevelopment />
                <HowWeWorkWebDevelopment />
                <FAQandCTAByWebDevelopment />
                <Footer />
            </div>
        </div>
    )
}