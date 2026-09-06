import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { HeroCatalogReadySites } from "./HeroCatalogReadySites";
import { PriceAssessment } from "./PriceAssessment";
import { FAQByReadySites } from "./FAQByReadySites";
import { ReviewsReadySites } from "./ReviewsReadySites";
import { Footer } from "@/components/layout/footer/Footer";
import { SubscriptionByReadySites } from "./SubscriptionByReadySites";


export default function ReadySitesCatalog() {
    return (
        <div className="relative min-h-screen bg-black">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #222222 1px, transparent 1px)",
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
                <PriceAssessment />
                <FAQByReadySites />
                <ReviewsReadySites />
                <Footer />
            </div>
        </div>
    )
}
