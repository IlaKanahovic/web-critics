import { AiBackground } from "./components/AiBackground";
import { Footer } from "@/components/layout/footer/Footer";
import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { HeroAi } from "./components/HeroAi";
import { CanBeDevelopedAi } from "./components/CanBeDevelopedAi";
import { SolvingBusninessProblemsAi } from "./components/SolvingBusninessProblemsAi";
import { DevelopmentStagesAi } from "./components/DevelopmentStagesAi";
import { HowWeWorkAi } from "./components/HowWeWorkAi";
import { WhatCanWeCheckSpecificallyAi } from "./components/WhatCanWeCheckSpecificallyAi";
import { FAQandCTAByAi } from "./components/FAQandCTAByAi";
import { MainDirectionsAi } from "./components/MainDirectionsAi";

export default function servicesAI() {
    return (
        <div className="relative min-h-screen bg-[#050505] light:bg-canvas">
            <AiBackground />
            <div className="relative z-10 pt-18">
                <div className="mobile-only">
                    <HeaderMobile />
                </div>
                <div className="desktop-only">
                    <HeaderDesktop />
                </div>
                <HeroAi />
                {/* <MainDirectionsAi /> */}
                <CanBeDevelopedAi />
                <SolvingBusninessProblemsAi />
                <DevelopmentStagesAi />
                <HowWeWorkAi />
                <WhatCanWeCheckSpecificallyAi />
                <FAQandCTAByAi />
                <Footer />
            </div>
        </div>
    )
}