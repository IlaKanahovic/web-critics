import CatalogIcon3D from "@/components/ui/3d/CatalogIcon3D";
import { TeaserByCatalog } from "./TeaserByCatalog";
import { TeaserByCatalogMobile } from "./TeaserByCatalogMobile";


export function TeaserCatalog() {
    return (
        <div className="pt-60.5 ">
            <div className="container">
                <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Каталог</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>
                <div className=" text-white text-center mt-12">
                    <CatalogIcon3D />
                </div>
                <h1 className="text-white text-center text-font-space text-4xl md:text-6xl mt-10">
                    Уже готово к запуску
                </h1>
                <div className="mobile-only">
                    <TeaserByCatalogMobile />
                </div>
                <div className="desktop-only">
                    <TeaserByCatalog />
                </div>
            </div>
        </div>
    )
}