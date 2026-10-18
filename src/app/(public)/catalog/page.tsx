import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { HeroCatalogMainPage } from "./catalogMainPage/HeroCatalogMainPage";
import { TableCatalog } from "./catalogMainPage/TableCatalog";
import { DontFindCatalog } from "./catalogMainPage/DontFindCatalog";
import { ReviewsCatalog } from "./catalogMainPage/ReviewsCatalog";
import { Footer } from "@/components/layout/footer/Footer";
import { dbGetReviewsByCatalog } from "@/lib/db/review/dbGetReviewsByCatalog";

export default async function Catalog() {
    const rawReviews = await dbGetReviewsByCatalog()
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
                <HeroCatalogMainPage />
                <TableCatalog />
                <DontFindCatalog />
                <ReviewsCatalog reviews={reviews}/>
                <Footer />
            </div>
        </div>
    )
}

