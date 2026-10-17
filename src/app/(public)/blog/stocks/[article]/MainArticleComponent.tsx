import Link from "next/link"
import { FaRegClock, FaUser } from "react-icons/fa"
import { IoIosArrowBack } from "react-icons/io"
import { articleStyleText } from "@/constants/styles/article"
import { formatContent, type MainArticleComponentProps } from "@/lib/utils/ArticleUtils"


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
                        className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 mb-10 group"
                    >
                        <IoIosArrowBack className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
                        <span className="text-sm font-medium">Назад в блог</span>
                    </Link>

                    <div className="mb-8">
                        <span className="inline-block px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/60 text-[10px] uppercase tracking-widest mb-6">
                            {article.type}
                        </span>

                        <h1 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
                            {article.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 mt-8 pb-8 border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
                                    {article.avatar ? (
                                        <img src={article.avatar} alt={article.nameAuthor} className="w-full h-full object-cover" />
                                    ) : (
                                        <FaUser className="text-white/40 size-4" />
                                    )}
                                </div>
                                <span className="text-white/80 text-sm font-medium">
                                    {article.nameAuthor}
                                </span>
                            </div>

                            <span className="text-white/20 hidden sm:block">·</span>

                            <span className="text-white/50 text-sm">
                                {formattedDate}
                            </span>

                            <span className="text-white/20 hidden sm:block">·</span>

                            <div className="inline-flex items-center gap-1.5 text-white/50 text-sm">
                                <FaRegClock className="size-3.5" />
                                {article.readingTime}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto mb-14">
                    <div className="relative w-full aspect-21/9 md:aspect-2.5/1 rounded-2xl overflow-hidden border border-white/10 bg-[#111111]">
                        <div
                            className="absolute inset-0 opacity-25"
                            style={{
                                backgroundImage: `
                                    linear-gradient(rgba(167,139,250,0.15) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(167,139,250,0.15) 1px, transparent 1px)
                                `,
                                backgroundSize: "40px 40px",
                            }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white/20 text-sm uppercase tracking-widest font-mono">
                                {article.previewBg}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="max-w-190 mx-auto">
                    <div
                        className="article-rich-text"
                        dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
                    />
                </div>

                <div className="max-w-4xl mx-auto mt-24 pt-8 border-t border-white/10 flex justify-center">
                    <Link
                        href="/blog"
                        className="button-main-styles inline-flex items-center gap-2"
                    >
                        Читать другие статьи
                        <IoIosArrowBack className="size-4 rotate-180" />
                    </Link>
                </div>
            </div>

            <style>{articleStyleText}</style>
        </div>
    )
}