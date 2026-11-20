import { AutomationBackground } from "./components/AutomationBackground";
import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { HeroAutomation } from "./components/HeroAutomation";
import { CanBeDevelopedAutomation } from "./components/CanBeDevelopedAutomation";
import { SolvingBusninessProblemsAutomation } from "./components/SolvingBusninessProblemsAutomation";
import { DevelopmentStagesAutomation } from "./components/DevelopmentStagesAutomation";
import { HowWeWorkAutomation } from "./components/HowWeWorkAutomation";
import { FAQandCTAByAutomation } from "./components/FAQandCTAByAutomation";
import { Footer } from "@/components/layout/footer/Footer";
import { MainDirectionsAutomation } from "./components/MainDirectionsAutomation";

export default function servicesAutomation() {
    return (
        <div className="relative min-h-screen bg-[#050505] light:bg-canvas overflow-hidden" style={{ isolation: "isolate" }}>
            <AutomationBackground />

            <div className="relative z-10 pt-18">
                <div className="mobile-only">
                    <HeaderMobile />
                </div>
                <div className="desktop-only">
                    <HeaderDesktop />
                </div>
                <HeroAutomation />
                {/* <MainDirectionsAutomation /> */}
                <CanBeDevelopedAutomation />
                <SolvingBusninessProblemsAutomation />
                <DevelopmentStagesAutomation />
                <HowWeWorkAutomation />
                <FAQandCTAByAutomation />
                <Footer />
            </div>
        </div>
    )
}