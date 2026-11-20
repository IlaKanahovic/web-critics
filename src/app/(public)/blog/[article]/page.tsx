import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { Footer } from "@/components/layout/footer/Footer";
import { dbGetArticle } from "@/lib/db/blog/dbGetArticle";
import { MainArticleComponent } from "./MainArticleComponent";
import { BlogBackground } from "../BlogBackground";
import { notFound } from "next/navigation";

export default async function Article({ params }: { params: Promise<{ article: string }> }) {
    const { article } = await params
    const articleSlug = await dbGetArticle(article)

    if (!article) {
        notFound()
    }

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
                <MainArticleComponent article={articleSlug} />
                <Footer />
            </div>
        </div>
    )
}