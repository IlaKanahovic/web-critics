import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { Footer } from "@/components/layout/footer/Footer";
import { dbGetArticle } from "@/lib/db/blog/dbGetArticle";
import { MainArticleComponent } from "./MainArticleComponent";
import { BlogBackground } from "../BlogBackground";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cache } from "react";

type ArticlePageProps = { params: Promise<{ article: string }> };

const getArticle = cache(dbGetArticle);

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
    const { article: slug } = await params;
    const article = await getArticle(slug);

    if (!article) return { title: "Статья не найдена" };

    const { title, description, previewBg } = article;
    const canonical = `/blog/${encodeURIComponent(article.slug)}`;

    return {
        title,
        description,
        alternates: { canonical },
        openGraph: {
            type: "article",
            locale: "ru_RU",
            siteName: "WebCRitics",
            url: canonical,
            title,
            description,
            images: [{ url: previewBg, alt: title }],
        },
    };
}

export default async function Article({ params }: ArticlePageProps) {
    const { article } = await params
    const articleSlug = await getArticle(article)

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
