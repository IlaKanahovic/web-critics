import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { HeroProductReadySites } from "./componentsProduct/HeroProductReadySites";
import { DescriptionProductReadySites } from "./componentsProduct/DescriptionProductReadySites";
import { OtherProductReadySites } from "./componentsProduct/OtherProductReadySites";
import { Footer } from "@/components/layout/footer/Footer";
import { CTAProductReadySites } from "./componentsProduct/CTAProductReadySites";
import { dbCatalogProductId } from "@/lib/db/catalog/dbCatalogProductId";

type SearchParams = { id: string }
interface IProductParamsProps {
    searchParams: Promise<SearchParams>
}

export default async function Product({ searchParams }: IProductParamsProps) {
    const { id } = await searchParams
    const siteProduct = await dbCatalogProductId({ id })

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
                <HeroProductReadySites product={siteProduct}/>
                <DescriptionProductReadySites product={siteProduct}/>
                <OtherProductReadySites product={siteProduct}/>
                <CTAProductReadySites />
                <Footer />
            </div>
        </div>
    )
}
