import type { Metadata } from "next"
import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop"
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile"
import { Footer } from "@/components/layout/footer/Footer"
import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"
import { documents } from "@/constants/documents"

export const metadata: Metadata = {
    title: "Юридические документы компании",
    description: "Официальные документы WebCRitics. Политика конфиденциальности, правила использования cookie, условия согласия на рассылки и реквизиты исполнителя.",
    alternates: { canonical: "/documents/legal" },
}

export default function DocumentsLegal() {
    return (
        <div className="relative min-h-screen bg-[#050505] light:bg-canvas overflow-hidden" style={{ isolation: "isolate" }}>
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute inset-0 docs-lines-base"
                    style={{
                        backgroundImage: `
                            repeating-linear-gradient(
                                0deg,
                                transparent 0,
                                transparent 47px,
                                var(--docs-line-color) 47px,
                                var(--docs-line-color) 48px
                            )
                        `,
                    }}
                />

                <div
                    className="absolute inset-0 docs-lines-wide"
                    style={{
                        backgroundImage: `
                            repeating-linear-gradient(
                                0deg,
                                transparent 0,
                                transparent 239px,
                                var(--docs-line-color) 239px,
                                var(--docs-line-color) 240px
                            )
                        `,
                    }}
                />

                <div className="absolute inset-x-0 top-0 h-125 pointer-events-none docs-top-glow" />

                <div className="docs-glow-1 absolute top-[30%] -left-1/4 w-225 h-225 rounded-full" />
                <div className="docs-glow-2 absolute bottom-[10%] -right-1/4 w-225 h-225 rounded-full" />
            </div>
            <style>{`
                @keyframes docsLinesPulse {
                    0%, 100% { opacity: 0.8; }
                    50% { opacity: 1; }
                }
                @keyframes docsGlow1 {
                    0%, 100% { transform: translate(0, 0); opacity: var(--docs-glow-rest); }
                    50% { transform: translate(100px, 60px); opacity: var(--docs-glow-peak); }
                }
                @keyframes docsGlow2 {
                    0%, 100% { transform: translate(0, 0); opacity: var(--docs-glow-rest); }
                    50% { transform: translate(-100px, -60px); opacity: var(--docs-glow-peak); }
                }
                .docs-lines-base {
                    --docs-line-color: rgba(167,139,250,0.06);
                    animation: docsLinesPulse 14s ease-in-out infinite;
                }
                .docs-lines-wide {
                    --docs-line-color: rgba(122,162,255,0.12);
                }
                .docs-top-glow {
                    background: radial-gradient(ellipse at 50% 0%, rgba(167,139,250,0.08), transparent 70%);
                }
                .docs-glow-1 {
                    --docs-glow-rest: 0.3;
                    --docs-glow-peak: 0.5;
                    background: radial-gradient(circle, rgba(167,139,250,0.08), transparent 70%);
                    animation: docsGlow1 26s ease-in-out infinite;
                }
                .docs-glow-2 {
                    --docs-glow-rest: 0.25;
                    --docs-glow-peak: 0.45;
                    background: radial-gradient(circle, rgba(122,162,255,0.07), transparent 70%);
                    animation: docsGlow2 30s ease-in-out infinite;
                }
                .light .docs-lines-base {
                    --docs-line-color: rgba(124,58,237,0.10);
                }
                .light .docs-lines-wide {
                    --docs-line-color: rgba(37,99,235,0.16);
                }
                .light .docs-top-glow {
                    background: radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.15), transparent 70%);
                }
                .light .docs-glow-1 {
                    --docs-glow-rest: 0.5;
                    --docs-glow-peak: 0.75;
                    background: radial-gradient(circle, rgba(124,58,237,0.20), transparent 70%);
                }
                .light .docs-glow-2 {
                    --docs-glow-rest: 0.45;
                    --docs-glow-peak: 0.7;
                    background: radial-gradient(circle, rgba(37,99,235,0.18), transparent 70%);
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
                    <h1 className="text-font-cormorant text-[#f0f0f0] light:text-ink text-5xl md:text-7xl lg:text-[96px] leading-tight">
                        Документы
                    </h1>

                    {/* <div className="flex flex-wrap gap-3 mt-8">
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
                    </div> */}

                    <div className="mt-16 md:mt-20 space-y-3">
                        {documents.map((doc, idx) => (
                            <Link key={idx} href={doc.href}>
                                <div className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-6 md:py-8 border-b border-white/8 light:border-line hover:border-white/20 light:hover:border-accent/40 transition-colors duration-300 cursor-pointer">
                                    <span className="md:col-span-1 text-white/30 light:text-ink-muted font-mono text-sm">
                                        {doc.num}
                                    </span>

                                    <h2 className="md:col-span-5 text-white light:text-ink text-lg md:text-xl font-semibold transition-colors duration-300 group-hover:text-violet-300 light:group-hover:text-accent-hover">
                                        {doc.title}
                                    </h2>

                                    <p className="md:col-span-5 text-white/50 light:text-ink-secondary text-sm leading-relaxed">
                                        {doc.desc}
                                    </p>

                                    <span className="md:col-span-1 flex md:justify-end items-center gap-2 text-white/50 light:text-accent group-hover:text-white light:group-hover:text-accent-hover text-sm font-medium transition-colors duration-200">
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
