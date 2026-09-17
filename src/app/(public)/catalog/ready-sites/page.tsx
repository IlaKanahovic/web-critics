import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { Footer } from "@/components/layout/footer/Footer";
import { HeroCatalogReadySites } from "./components/HeroCatalogReadySites";
import { SubscriptionByReadySites } from "./components/SubscriptionByReadySites";
import { PriceAssessmentReadySites } from "./components/PriceAssessmentReadySites";
import { FAQByReadySites } from "./components/FAQByReadySites";
import { ReviewsReadySites } from "./components/ReviewsReadySites";
import { CTAByFooterReadySites } from "./components/CTAByFooterReadySites";


export default function ReadySitesCatalog() {
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
                <HeroCatalogReadySites />
                <SubscriptionByReadySites />
                <PriceAssessmentReadySites />
                <FAQByReadySites />
                <ReviewsReadySites />
                <CTAByFooterReadySites />
                <Footer />
            </div>
        </div>
    )
}
