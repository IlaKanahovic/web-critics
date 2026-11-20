'use client'
import { GrowthAnalyticsBackground } from "./components/GrowthAnalyticsBackground";

import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { FAQandCTAByGrowthAnalytics } from "./components/FAQandCTAByGrowthAnalytics";
import { WhatCanWeCheckSpecificallyGrowthAnalytics } from "./components/WhatCanWeCheckSpecificallyGrowthAnalytics";
import { HowWeWorkGrowthAnalytics } from "./components/HowWeWorkGrowthAnalytics";
import { DevelopmentStagesGrowthAnalytics } from "./components/DevelopmentStagesGrowthAnalytics";
import { SolvingBusninessProblemsGrowthAnalytics } from "./components/SolvingBusninessProblemsGrowthAnalytics";
import { CanBeDevelopedGrowthAnalytics } from "./components/CanBeDevelopedGrowthAnalytics";
import { HeroGrowthAnalytics } from "./components/HeroGrowthAnalytics";
import { Footer } from "@/components/layout/footer/Footer";
import { MainDirectionsGrowthAnalytics } from "./components/MainDirectionsGrowthAnalytics";

export default function servicesGrowthAnalytics() {
    return (
        <div className="relative min-h-screen bg-[#050505] light:bg-canvas overflow-hidden" style={{ isolation: "isolate" }}>
            <GrowthAnalyticsBackground />

            <div className="relative z-10 pt-18">
                <div className="mobile-only">
                    <HeaderMobile />
                </div>
                <div className="desktop-only">
                    <HeaderDesktop />
                </div>
                <HeroGrowthAnalytics />
                {/* <MainDirectionsGrowthAnalytics /> */}
                <CanBeDevelopedGrowthAnalytics />
                <SolvingBusninessProblemsGrowthAnalytics />
                <DevelopmentStagesGrowthAnalytics />
                <HowWeWorkGrowthAnalytics />
                <WhatCanWeCheckSpecificallyGrowthAnalytics />
                <FAQandCTAByGrowthAnalytics />
                <Footer />
            </div>
        </div>
    )
}