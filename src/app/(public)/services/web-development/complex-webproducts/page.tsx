import { WebDevelopmentBackground } from "../components/WebDevelopmentBackground";
import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { HeroComplexWeb } from "./HeroComplexWeb";
import { MainIdeaComplexWeb } from "./MainIdeaComplexWeb";
import { WhatIsComplexWeb } from "./WhatIsComplexWeb";
import { WhatSuchProductMadeComplexWeb } from "./WhatSuchProductMadeComplexWeb";
import { WhatExactlyToBuildComplexWeb } from "./WhatExactlyToBuildComplexWeb";
import { ExistingOrNewProduct } from "./ExistingOrNewProduct";
import { WhatBusinessGetComplexWeb } from "./WhatBusinessGetComplexWeb";
import { FAQandCTAbyComplexWeb } from "./FAQandCTAbyComplexWeb";
import { Footer } from "@/components/layout/footer/Footer";

export default function WebDevelopmentSites() {
    return (
        <div className="relative min-h-screen bg-[#050505] light:bg-canvas overflow-hidden" style={{ isolation: "isolate" }}>
            <WebDevelopmentBackground />

            <div className="relative z-10 pt-18">
                <div className="mobile-only">
                    <HeaderMobile />
                </div>
                <div className="desktop-only">
                    <HeaderDesktop />
                </div>
                <HeroComplexWeb />
                <MainIdeaComplexWeb />
                <WhatIsComplexWeb />
                <WhatSuchProductMadeComplexWeb />
                <WhatExactlyToBuildComplexWeb />
                <ExistingOrNewProduct />
                <WhatBusinessGetComplexWeb />
                <FAQandCTAbyComplexWeb />
                <Footer />
            </div>
        </div>
    )
}