import type { Metadata } from "next";
import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { MainPageBlog } from "../MainPageBlog";
import { Footer } from "@/components/layout/footer/Footer";
import { prisma } from "@/lib/db/prisma";
import { BlogBackground } from "../BlogBackground";

export const metadata: Metadata = {
    title: "Акции и специальные предложения",
    description: "Рубрика WebCRitics с публикациями об акциях и специальных предложениях. Условия и сроки приводятся в соответствующих публикациях.",
    alternates: { canonical: "/blog/stocks" },
};

export const dynamic = 'force-dynamic'

export default async function CasesPage() {
    const rawArticles = await prisma.article.findMany({
        where: { type: 'stocks' },
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
                <MainPageBlog articles={articles} title="Акции" />
                <Footer />
            </div>
        </div>
    )
}