import { WebDevelopmentBackground } from "../components/WebDevelopmentBackground";
import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { HeroWebApplication } from "./HeroWebApplication";
import { RegularWebSiteIsNoLongerEnough } from "./RegularWebSiteIsNoLongerEnough";
import { MainIdeaThePage } from "./MainIdeaThePage";
import { WebApplicationMustSolveProblem } from "./WebApplicationMustSolveProblem";
import { CanIncludedInWebApplication } from "./CanIncludedInWebApplication";
import { ProcessWebApplication } from "./ProcessWebApplication";
import { FAQandCTAwebApplication } from "./FAQandCTAwebApplication";
import { Footer } from "@/components/layout/footer/Footer";

export default function WebDevelopmentSites() {
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
                <HeroWebApplication />
                <RegularWebSiteIsNoLongerEnough />
                <MainIdeaThePage />
                <WebApplicationMustSolveProblem />
                <CanIncludedInWebApplication />
                <ProcessWebApplication />
                <FAQandCTAwebApplication />
                <Footer />
            </div>
        </div>
    )
}