import { PortfolioBackground } from "./PortfolioBackground";
import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { PortfolioComponent } from "./PortfolioComponent";
import { Footer } from "@/components/layout/footer/Footer";

export const dynamic = 'force-dynamic'

export default function Portfolio() {
    return (
        <div className="relative min-h-screen bg-[#050505] light:bg-canvas overflow-hidden" style={{ isolation: "isolate" }}>
            <PortfolioBackground />

            <div className="relative z-10 pt-18">
                <div className="mobile-only">
                    <HeaderMobile />
                </div>
                <div className="desktop-only">
                    <HeaderDesktop />
                </div>
                <PortfolioComponent />
                <Footer />
            </div>
        </div>
    )
}