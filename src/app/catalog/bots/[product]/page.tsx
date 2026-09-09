import { Footer } from "@/components/layout/footer/Footer";
import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { HeroProductBots } from "./componentsProduct/HeroProductBots";
import { DescriptionProductBots } from "./componentsProduct/DescriptionProductBots";
import { OtherProductBots } from "./componentsProduct/OtherProductBots";
import { CTAProductBots } from "./componentsProduct/CTAProductBots";

export default function Product() {
    return (
        <div className="relative min-h-screen bg-black">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #303030 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />
            <div className="relative z-10 pt-18">
                <div className="mobile-only">
                    <HeaderMobile />
                </div>
                <div className="desktop-only">
                    <HeaderDesktop />
                </div>
                <HeroProductBots />
                <DescriptionProductBots />
                <OtherProductBots />
                <CTAProductBots />
                <Footer />
            </div>
        </div>
    )
}
