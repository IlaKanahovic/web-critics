import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"

export default function NotFound() {
    return (
        <div className="relative min-h-screen bg-[#050505] overflow-hidden" style={{ isolation: "isolate" }}>
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute inset-0 nf-lines"
                    style={{
                        backgroundImage: `
                            repeating-linear-gradient(
                                90deg,
                                transparent 0,
                                transparent 79px,
                                rgba(167,139,250,0.06) 79px,
                                rgba(167,139,250,0.06) 80px
                            )
                        `,
                    }}
                />
                <div className="nf-glow-1 absolute top-0 left-1/4 w-225 h-225 rounded-full" />
                <div className="nf-glow-2 absolute bottom-0 right-1/4 w-225 h-225 rounded-full" />
            </div>

            <style>{`
                @keyframes nfGlow1 {
                    0%, 100% { opacity: 0.2; transform: translate(0, 0); }
                    50% { opacity: 0.4; transform: translate(80px, 40px); }
                }
                @keyframes nfGlow2 {
                    0%, 100% { opacity: 0.15; transform: translate(0, 0); }
                    50% { opacity: 0.35; transform: translate(-80px, -40px); }
                }
                @keyframes nfLineSweep {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                @keyframes nfDotBlink {
                    0%, 45% { opacity: 1; }
                    50%, 100% { opacity: 0.15; }
                }
                .nf-lines { animation: none; }
                .nf-glow-1 {
                    background: radial-gradient(circle, rgba(167,139,250,0.08), transparent 70%);
                    animation: nfGlow1 22s ease-in-out infinite;
                }
                .nf-glow-2 {
                    background: radial-gradient(circle, rgba(122,162,255,0.06), transparent 70%);
                    animation: nfGlow2 26s ease-in-out infinite;
                }
            `}</style>

            <div className="relative z-10 min-h-screen flex flex-col">
                <div className="container flex-1 flex items-center">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7">
                            <div className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-violet-400 nf-dot" />
                                <span className="text-white/40 text-xs uppercase tracking-[0.3em] font-mono">
                                    page not found
                                </span>
                            </div>

                            <h1 className="text-font-cormorant text-[#f0f0f0] text-[120px] md:text-[180px] lg:text-[220px] leading-[0.9] mt-6">
                                4<span className="text-white/15">0</span>4
                            </h1>

                            <div className="mt-8 max-w-lg">
                                <p className="text-white/70 text-font-inter text-base md:text-lg leading-relaxed">
                                    Мы потеряли эту страницу.
                                </p>
                                <p className="text-white/45 text-font-inter text-sm md:text-base leading-relaxed mt-2">
                                    Возможно, ссылка устарела, страница была перемещена или адрес введён неверно. Попробуйте вернуться назад или начать с главной.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="relative rounded-2xl border border-white/10 bg-[#0a0a12]/60 p-8 backdrop-blur-[2px]">
                                <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-violet-400/30 to-transparent" />

                                <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-mono">
                                    возможные действия
                                </span>

                                <div className="mt-6 space-y-3">
                                    <Link href="/" className="group flex items-center justify-between py-3 border-b border-white/5 hover:border-white/15 transition-colors">
                                        <span className="text-white/80 group-hover:text-white text-sm transition-colors">
                                            Вернуться на главную
                                        </span>
                                        <IoIosArrowForward className="size-4 text-white/30 group-hover:text-violet-300 group-hover:translate-x-0.5 transition-all duration-200" />
                                    </Link>

                                    <Link href="/catalog" className="group flex items-center justify-between py-3 border-b border-white/5 hover:border-white/15 transition-colors">
                                        <span className="text-white/80 group-hover:text-white text-sm transition-colors">
                                            Посмотреть каталог
                                        </span>
                                        <IoIosArrowForward className="size-4 text-white/30 group-hover:text-violet-300 group-hover:translate-x-0.5 transition-all duration-200" />
                                    </Link>

                                    <Link href="/portfolio" className="group flex items-center justify-between py-3 border-b border-white/5 hover:border-white/15 transition-colors">
                                        <span className="text-white/80 group-hover:text-white text-sm transition-colors">
                                            Изучить портфолио
                                        </span>
                                        <IoIosArrowForward className="size-4 text-white/30 group-hover:text-violet-300 group-hover:translate-x-0.5 transition-all duration-200" />
                                    </Link>

                                    <Link href="/contacts" className="group flex items-center justify-between py-3 border-b border-white/5 hover:border-white/15 transition-colors">
                                        <span className="text-white/80 group-hover:text-white text-sm transition-colors">
                                            Написать нам
                                        </span>
                                        <IoIosArrowForward className="size-4 text-white/30 group-hover:text-violet-300 group-hover:translate-x-0.5 transition-all duration-200" />
                                    </Link>
                                </div>

                                <p className="text-white/25 text-[10px] font-mono mt-6">
                                    err_code · 404 · page_not_found
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container pb-12">
                    <div className="flex items-center gap-4 text-white/20 text-[10px] uppercase tracking-[0.3em] font-mono">
                        <span className="w-12 h-px bg-white/15" />
                        <span>not found</span>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes nfDotBlink {
                    0%, 45% { opacity: 1; }
                    50%, 100% { opacity: 0.15; }
                }
                .nf-dot {
                    animation: nfDotBlink 1.5s ease-in-out infinite;
                }
            `}</style>
        </div>
    )
}