import { PortfolioBackground } from "../PortfolioBackground";
import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { Footer } from "@/components/layout/footer/Footer";
import { PortfolioProjectComponent } from "./PortfolioProjectComponent";
import { dbGetProjectById } from "@/lib/db/portfolio/dbGetProjectById";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cache } from "react";

type ProjectPageProps = { params: Promise<{ project: string }> };

const getProject = cache(dbGetProjectById);

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { project: slug } = await params;
    const project = await getProject(slug);

    if (!project) return { title: "Проект не найден" };

    const { title, service, previewBg } = project;
    const description = `Кейс из портфолио WebCRitics: ${title}. Услуга: ${service}`;
    const canonical = `/portfolio/${encodeURIComponent(project.slug)}`;

    return {
        title,
        description,
        alternates: { canonical },
        openGraph: {
            type: "website",
            locale: "ru_RU",
            siteName: "WebCRitics",
            url: canonical,
            title,
            description,
            images: [{ url: previewBg, alt: title }],
        },
    };
}

export default async function Project({ params }: ProjectPageProps) {
    const { project } = await params
    const projectSlug = await getProject(project)

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
