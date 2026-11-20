import { BlogBackground } from "./BlogBackground";
import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { MainPageBlog } from "./MainPageBlog";
import { Footer } from "@/components/layout/footer/Footer";
import { dbGetArticlesEverything } from "@/lib/db/blog/dbGetArticles";

export const dynamic = 'force-dynamic'

export default async function Blog() {
    const rawArticles = await dbGetArticlesEverything()
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
                <MainPageBlog articles={articles} />
                <Footer />
            </div>
        </div>
    )
}