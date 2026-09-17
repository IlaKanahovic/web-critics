import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { Footer } from "@/components/layout/footer/Footer";
import { HeroCatalogBots } from "./components/HeroCatalogBots";
import { SubscriptionByBots } from "./components/SubscriptionByBots";
import { PriceAssessmentBots } from "./components/PriceAssessmentBots";
import { ReviewsBots } from "./components/ReviewsBots";
import { CTAByFooterBots } from "./components/CTAByFooterBots";
import { FAQByBots } from "./components/FAQByBots";


export default function BotsCatalog() {
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
                <HeroCatalogBots />
                <SubscriptionByBots />
                <PriceAssessmentBots />
                <FAQByBots />
                <ReviewsBots />
                <CTAByFooterBots />
                <Footer />
            </div>
        </div>
    )
}