import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop"
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile"
import { Footer } from "@/components/layout/footer/Footer"
import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"
import { documents } from "@/constants/documents"

export default function DocumentsLegal() {
    return (
        <div className="relative min-h-screen bg-[#050505] overflow-hidden" style={{ isolation: "isolate" }}>
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute inset-0 docs-lines-base"
                    style={{
                        backgroundImage: `
                            repeating-linear-gradient(
                                0deg,
                                transparent 0,
                                transparent 47px,
                                rgba(167,139,250,0.06) 47px,
                                rgba(167,139,250,0.06) 48px
                            )
                        `,
                    }}
                />

                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            repeating-linear-gradient(
                                0deg,
                                transparent 0,
                                transparent 239px,
                                rgba(122,162,255,0.12) 239px,
                                rgba(122,162,255,0.12) 240px
                            )
                        `,
                    }}
                />

                <div
                    className="absolute inset-x-0 top-0 h-125 pointer-events-none"
                    style={{
                        background: "radial-gradient(ellipse at 50% 0%, rgba(167,139,250,0.08), transparent 70%)",
                    }}
                />

                <div className="docs-glow-1 absolute top-[30%] -left-1/4 w-225 h-225 rounded-full" />
                <div className="docs-glow-2 absolute bottom-[10%] -right-1/4 w-225 h-225 rounded-full" />
            </div>
            <style>{`
                @keyframes docsLinesPulse {
                    0%, 100% { opacity: 0.8; }
                    50% { opacity: 1; }
                }
                @keyframes docsGlow1 {
                    0%, 100% { transform: translate(0, 0); opacity: 0.3; }
                    50% { transform: translate(100px, 60px); opacity: 0.5; }
                }
                @keyframes docsGlow2 {
                    0%, 100% { transform: translate(0, 0); opacity: 0.25; }
                    50% { transform: translate(-100px, -60px); opacity: 0.45; }
                }
                .docs-lines-base {
                    animation: docsLinesPulse 14s ease-in-out infinite;
                }
                .docs-glow-1 {
                    background: radial-gradient(circle, rgba(167,139,250,0.08), transparent 70%);
                    animation: docsGlow1 26s ease-in-out infinite;
                }
                .docs-glow-2 {
                    background: radial-gradient(circle, rgba(122,162,255,0.07), transparent 70%);
                    animation: docsGlow2 30s ease-in-out infinite;
                }
            `}</style>

            <div className="relative z-10 pt-18">
                <div className="mobile-only">
                    <HeaderMobile />
                </div>
                <div className="desktop-only">
                    <HeaderDesktop />
                </div>

                <div className="container pt-24 md:pt-40">
                    <h1 className="text-font-cormorant text-[#f0f0f0] text-5xl md:text-7xl lg:text-[96px] leading-tight">
                        Документы
                    </h1>

                    <div className="flex flex-wrap gap-3 mt-8">
                        <Link
                            href="/documents/legal"
                            className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]"
                        >
                            Юридические документы
                        </Link>
                        <Link
                            href="/documents/guides"
                            className="px-6 py-3 rounded-full border border-white/20 bg-white/5 text-white/80 text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:text-white"
                        >
                            Памятки
                        </Link>
                    </div>

                    <div className="mt-16 md:mt-20 space-y-3">
                        {documents.map((doc, idx) => (
                            <Link key={idx} href={doc.href}>
                                <div className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-6 md:py-8 border-b border-white/8 hover:border-white/20 transition-colors duration-300 cursor-pointer">
                                    <span className="md:col-span-1 text-white/30 font-mono text-sm">
                                        {doc.num}
                                    </span>

                                    <h2 className="md:col-span-5 text-white text-lg md:text-xl font-semibold transition-colors duration-300 group-hover:text-violet-300">
                                        {doc.title}
                                    </h2>

                                    <p className="md:col-span-5 text-white/50 text-sm leading-relaxed">
                                        {doc.desc}
                                    </p>

                                    <span className="md:col-span-1 flex md:justify-end items-center gap-2 text-white/50 group-hover:text-white text-sm font-medium transition-colors duration-200">
                                        Читать
                                        <IoIosArrowForward className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="pb-20" />

                <Footer />
            </div>
        </div>
    )
}