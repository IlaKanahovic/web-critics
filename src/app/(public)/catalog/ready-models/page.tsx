import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";

import { Footer } from "@/components/layout/footer/Footer";
import { HeroCatalogReadyModels } from "./components/HeroCatalogReadyModels";
import { SubscriptionByReadyModels } from "./components/SubscriptionByReadyModels";
import { PriceAssessmentReadyModels } from "./components/PriceAssessmentReadyModels";
import { FAQByReadyModels } from "./components/FAQByReadyModels";
import { ReviewsReadyModels } from "./components/ReviewsReadyModels";
import { CTAByFooterReadyModels } from "./components/CTAByFooterReadyModels";
import { dbCatalogProduct } from "@/lib/db/catalog/dbCatalogProduct";
import { dbGetReviewsByCatalogReadyModels } from "@/lib/db/review/dbGetReviewsByCatalog";

export const dynamic = 'force-dynamic'

export default async function ReadModelsCatalog() {
    const [, , readyModelsProducts] = await dbCatalogProduct()
    const rawReviews = await dbGetReviewsByCatalogReadyModels()
    const reviews = JSON.parse(JSON.stringify(rawReviews))

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
                <HeroCatalogReadyModels readyModelsProducts={readyModelsProducts} />
                <SubscriptionByReadyModels />
                <PriceAssessmentReadyModels />
                <FAQByReadyModels />
                <ReviewsReadyModels reviews={reviews}/>
                <CTAByFooterReadyModels />
                <Footer />
            </div>
        </div>
    )
}