import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { HeroCatalogBots } from "./HeroCatalogBots";
import { SubscriptionByBots } from "./SubscriptionByBots";
import { PriceAssessmentBots } from "./PriceAssessmentBots";
import { FAQByBots } from "./FAQByBots";
import { ReviewsBots } from "./ReviewsBots";
import { Footer } from "@/components/layout/footer/Footer";
import { CTAByFooterBots } from "./CTAByFooterBots";


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