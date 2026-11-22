import type { Metadata } from "next";
import { WebDevelopmentBackground } from "../components/WebDevelopmentBackground";
import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { HeroSites } from "./HeroSites";
import { SiteNeed } from "./SiteNeed";
import { SiteMustSolveProblem } from "./SiteMustSolveProblem";
import { CanIncludedInSite } from "./CanIncludedInSite";
import { TaskToFinishedWebSite } from "./TaskToFinishedWebSite";
import { FAQandCTAsites } from "./FAQandCTAsites";
import { Footer } from "@/components/layout/footer/Footer";

export const metadata: Metadata = {
    title: "Разработка сайтов для бизнеса",
    description: "Разрабатываем сайты под задачи бизнеса. Продумываем структуру, пользовательский путь и подачу услуг, затем создаём и запускаем сайт.",
    alternates: { canonical: "/services/web-development/sites" },
};

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
                <HeroSites />
                <SiteNeed />
                <SiteMustSolveProblem />
                <CanIncludedInSite />
                <TaskToFinishedWebSite />
                <FAQandCTAsites />
                <Footer />
            </div>
        </div>
    )
}