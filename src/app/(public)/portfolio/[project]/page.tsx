import { PortfolioBackground } from "../PortfolioBackground";
import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { Footer } from "@/components/layout/footer/Footer";
import { PortfolioProjectComponent } from "./PortfolioProjectComponent";
import { dbGetProjectById } from "@/lib/db/portfolio/dbGetProjectById";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ project: string }> }): Promise<Metadata> {
    const { project } = await params
    const projectSlug = await dbGetProjectById(project)

    if (!projectSlug) return { title: 'Проект не найден' }

    return {
        title: projectSlug.title,
        description: `Кейс из портфолио WebCRitics: ${projectSlug.title}. Услуга: ${projectSlug.service}`,
    }
}

export default async function Project({ params }: { params: Promise<{ project: string }> }) {
    const { project } = await params
    const projectSlug = await dbGetProjectById(project)

    if (!projectSlug) {
        notFound()
    }

    return (
        <div className="relative min-h-screen bg-[#050505] light:bg-canvas overflow-hidden" style={{ isolation: "isolate" }}>
            <PortfolioBackground />

            <div className="relative z-10 pt-18">
                <div className="mobile-only">
                    <HeaderMobile />
                </div>
                <div className="desktop-only">
                    <HeaderDesktop />
                </div>
                <PortfolioProjectComponent project={projectSlug} />
                <Footer />
            </div>
        </div>
    )
}