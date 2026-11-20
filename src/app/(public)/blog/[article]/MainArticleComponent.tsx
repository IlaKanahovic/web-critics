import Link from "next/link"
import Image from "next/image"
import { FaRegClock, FaUser } from "react-icons/fa"
import { IoIosArrowBack } from "react-icons/io"
import { articleStyleText } from "@/constants/styles/article"
import { formatContent, type MainArticleComponentProps } from "@/lib/utils/ArticleUtils"
import { ARTICLE_TYPE_LABELS } from "@/constants/blogCategories/articles"

const articleLightStyles = `
    .light .article-rich-text,
    .light .article-rich-text :is(p, li) {
        color: var(--color-ink-secondary) !important;
    }

    .light .article-rich-text :is(strong, h2, h3, blockquote, blockquote p) {
        color: var(--color-ink) !important;
    }

    .light .article-rich-text li::marker,
    .light .article-rich-text :is(a, code) {
        color: var(--color-accent) !important;
    }

    .light .article-rich-text blockquote {
        border-left-color: var(--color-accent) !important;
        background: linear-gradient(90deg, rgb(37 99 235 / 8%), transparent) !important;
    }

    .light .article-rich-text :is(img, pre) {
        border-color: var(--color-line) !important;
    }

    .light .article-rich-text a {
        text-decoration-color: rgb(37 99 235 / 40%) !important;
    }

    .light .article-rich-text a:hover {
        color: var(--color-accent-hover) !important;
        text-decoration-color: var(--color-accent-hover) !important;
    }

    .light .article-rich-text code {
        background-color: rgb(37 99 235 / 8%) !important;
    }

    .light .article-rich-text pre {
        background-color: var(--color-white) !important;
    }

    .light .article-rich-text pre code {
        background-color: transparent !important;
        color: var(--color-ink-secondary) !important;
    }

    .light .article-rich-text ::selection {
        background-color: rgb(37 99 235 / 18%) !important;
        color: var(--color-ink) !important;
    }
`

export function MainArticleComponent({ article }: MainArticleComponentProps) {
    if (!article) return null

    const formattedDate = new Date(article.date).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
    })

    return (
        <div className="container">
            <div className="pt-10 md:pt-18 pb-20 md:pb-32">

                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-white/50 light:text-accent hover:text-white light:hover:text-accent-hover transition-colors duration-300 mb-10 group"
                    >
                        <IoIosArrowBack className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
                        <span className="text-sm font-medium">Назад в блог</span>
                    </Link>

                    <div className="mb-8">
                        <span className="inline-block px-3 py-1 rounded-full border border-white/15 light:border-line bg-white/5 light:bg-white text-white/60 light:text-accent text-[10px] uppercase tracking-widest mb-6">
                            {ARTICLE_TYPE_LABELS[article.type] ?? article.type}
                        </span>

                        <h1 className="text-white light:text-ink text-font-space text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
                            {article.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 mt-8 pb-8 border-b border-white/10 light:border-line">
                            <div className="flex items-center gap-3">
                                <div className="relative w-10 h-10 rounded-full bg-white/5 light:bg-canvas border border-white/10 light:border-line flex items-center justify-center overflow-hidden shrink-0">
                                    {article.avatar ? (
                                        <Image
                                            src={article.avatar}
                                            alt={article.nameAuthor || ''}
                                            fill
                                            sizes="40px"
                                            className="object-cover"
                                        />
                                    ) : (
                                        <FaUser className="text-white/40 light:text-ink-muted size-4" />
                                    )}
                                </div>
                                <span className="text-white/80 light:text-ink text-sm font-medium">
                                    {article.nameAuthor}
                                </span>
                            </div>

                            <span className="text-white/20 light:text-ink-muted hidden sm:block">·</span>

                            <span className="text-white/50 light:text-ink-secondary text-sm">
                                {formattedDate}
                            </span>

                            <span className="text-white/20 light:text-ink-muted hidden sm:block">·</span>

                            <div className="inline-flex items-center gap-1.5 text-white/50 light:text-ink-secondary text-sm">
                                <FaRegClock className="size-3.5" />
                                {article.readingTime}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto mb-14">
                    <div className="relative w-full aspect-21/9 md:aspect-2.5/1 rounded-2xl overflow-hidden border border-white/10 light:border-line bg-[#111111] light:bg-white light:shadow-card">
                        <div className="absolute inset-0 opacity-25 z-0 blog-cover-grid" />
                        <div className="absolute inset-0 z-10">
                            {article.previewBg && (
                                <Image
                                    src={article.previewBg}
                                    alt={article.title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 896px"
                                    className="object-cover"
                                    priority
                                />
                            )}
                        </div>
                    </div>
                </div>

                <div className="max-w-190 mx-auto">
                    <div
                        className="article-rich-text"
                        dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
                    />
                </div>

                <div className="max-w-4xl mx-auto mt-24 pt-8 border-t border-white/10 light:border-line flex justify-center">
                    <Link
                        href="/blog"
                        className="button-main-styles button-primary inline-flex items-center gap-2"
                    >
                        Читать другие статьи
                        <IoIosArrowBack className="size-4 rotate-180" />
                    </Link>
                </div>
            </div>

            <style>{articleStyleText + articleLightStyles}</style>
        </div>
    )
}
