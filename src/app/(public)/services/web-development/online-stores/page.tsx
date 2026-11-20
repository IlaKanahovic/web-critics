import { WebDevelopmentBackground } from "../components/WebDevelopmentBackground"
import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop"
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile"
import { HeroOnlineStores } from "./HeroOnlineStores"
import { ConsistsOfOnlineStore } from "./ConsistsOfOnlineStore"
import { PurchaseGoesOnlineStores } from "./PurchaseGoesOnlineStores"
import { CanBeDoneInOnlineStore } from "./CanBeDoneInOnlineStore"
import { CreationAndRefinementOnlineStore } from "./CreationAndRefinementOnlineStore"
import { WhatYouGetOnlineStores } from "./WhatYouGetOnlineStores"
import { FAQandCTAonlineStores } from "./FAQandCTAonlineStores"
import { Footer } from "@/components/layout/footer/Footer"

export default function WebDevelopmentInterfaces() {
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
                <HeroOnlineStores />
                <ConsistsOfOnlineStore />
                <PurchaseGoesOnlineStores />
                <CanBeDoneInOnlineStore />
                <CreationAndRefinementOnlineStore />
                <WhatYouGetOnlineStores />
                <FAQandCTAonlineStores />
                <Footer />
            </div>
        </div>
    )
}