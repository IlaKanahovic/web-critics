import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { HeroProductReadySites } from "./componentsProduct/HeroProductReadySites";
import { DescriptionProductReadySites } from "./componentsProduct/DescriptionProductReadySites";
import { OtherProductReadySites } from "./componentsProduct/OtherProductReadySites";
import { Footer } from "@/components/layout/footer/Footer";
import { CTAProductReadySites } from "./componentsProduct/CTAProductReadySites";

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
                <HeroProductReadySites />
                <DescriptionProductReadySites />
                <OtherProductReadySites />
                <CTAProductReadySites />
                <Footer />
            </div>
        </div>
    )
}
