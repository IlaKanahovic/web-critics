'use client'

import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop"
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile"
import { Hero } from "./hero/Hero"
import { OverviewOfServices } from "./overviewOfServices/OverviewOfServices"
import { AboutMyWork } from "./aboutMyWork/AboutMyWork"
import { Portfolio } from "./portfolio/Portfolio"
import { ContactsMainPage } from "./contactsMainPage/ContactsMainPage"
import { Footer } from "@/components/layout/footer/Footer"
import { TeaserCatalog } from "./teaserByCatalog/TeaserCatalog"
import { ApplicationLaunch } from "./applicationToLaunch/ApplicationLaunch"
import { DesktopOnlyLightRays } from "@/lib/utils/DesktopOnlyLightRays"

export interface IProjectsLength {
    projectsLength: number
}

export async function MainPage({ projectsLength }: IProjectsLength) {
    return (
        <div className="relative pt-18">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundColor: "#000000",
                    backgroundImage: `
                        repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 40px,
                            rgba(255, 255, 255, 0.04) 40px,
                            rgba(255, 255, 255, 0.04) 41px
                        ),
                        repeating-linear-gradient(
                            -45deg,
                            transparent,
                            transparent 40px,
                            rgba(255, 255, 255, 0.04) 40px,
                            rgba(255, 255, 255, 0.04) 41px
                        )
                    `,
                    zIndex: -2,
                }}
            />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.03) 0%, transparent 70%)",
                    zIndex: -1,
                }}
            />
            <DesktopOnlyLightRays />
            <div className="mobile-only">e
                <HeaderMobile />
            </div>
            <div className="desktop-only">
                <HeaderDesktop />
            </div>
            <Hero projectsLength={projectsLength} />
            <OverviewOfServices />
            <AboutMyWork />
            {/* <TeaserCatalog /> */}
            <ApplicationLaunch />
            {/* <Portfolio /> */}
            <ContactsMainPage />
            <Footer />
        </div>
    )
}