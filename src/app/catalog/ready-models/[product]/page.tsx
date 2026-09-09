import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { HeroProductReadyModels } from "./componentsProduct/HeroProductReadyModels";
import { DescriptionProductReadyModels } from "./componentsProduct/DescriptionProductReadyModels";
import { OtherProductReadyModels } from "./componentsProduct/OtherProductReadyModels";
import { CTAProductReadyModels } from "./componentsProduct/CTAProductReadyModels";
import { Footer } from "@/components/layout/footer/Footer";

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
                <HeroProductReadyModels />
                <DescriptionProductReadyModels />
                <OtherProductReadyModels />
                <CTAProductReadyModels />
                <Footer />
            </div>
        </div>
    )
}
