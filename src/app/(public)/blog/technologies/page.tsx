import type { Metadata } from "next";
import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { MainPageBlog } from "../MainPageBlog";
import { Footer } from "@/components/layout/footer/Footer";
import { prisma } from "@/lib/db/prisma";
import { BlogBackground } from "../BlogBackground";

export const metadata: Metadata = {
    title: "Технологии и инструменты разработки",
    description: "Статьи команды WebCRitics о технологиях веб-разработки, архитектуре и инструментах. Объясняем, как они применяются в цифровых проектах.",
    alternates: { canonical: "/blog/technologies" },
};

export const dynamic = 'force-dynamic'

export default async function CasesPage() {
    const rawArticles = await prisma.article.findMany({
        where: { type: 'technologies' },
        orderBy: { date: 'desc' }
    })
    const articles = JSON.parse(JSON.stringify(rawArticles))

    return (
        <div className="relative min-h-screen overflow-hidden light:bg-canvas" style={{ isolation: "isolate" }}>
            <BlogBackground />

            <div className="relative z-10 pt-18">
                <div className="mobile-only">
                    <HeaderMobile />
                </div>
                <div className="desktop-only">
                    <HeaderDesktop />
                </div>
                <MainPageBlog articles={articles} title="Технологии WebCRitics" />
                <Footer />
            </div>
        </div>
    )
}