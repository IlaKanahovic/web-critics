import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { HeroCatalogReadyModels } from "./HeroCatalogReadyModels";
import { SubscriptionByReadyModels } from "./SubscriptionByReadyModels";
import { PriceAssessmentReadyModels } from "./PriceAssessmentReadyModels";
import { FAQByReadyModels } from "./FAQByReadyModels";
import { ReviewsReadyModels } from "./ReviewsReadyModels";
import { CTAByFooterReadyModels } from "./CTAByFooterReadyModels";
import { Footer } from "@/components/layout/footer/Footer";


export default function ReadModelsCatalog() {
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
                <HeroCatalogReadyModels />
                <SubscriptionByReadyModels />
                <PriceAssessmentReadyModels />
                <FAQByReadyModels />
                <ReviewsReadyModels />
                <CTAByFooterReadyModels />
                <Footer />
            </div>
        </div>
    )
}