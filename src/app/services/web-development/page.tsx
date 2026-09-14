'use client'

import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { HeroWebDevelopment } from "./components/HeroWebDevelopment";
import { CanBeDevelopedWebDevelopment } from "./components/CanBeDevelopedWebDevelopment";
import { SolvingBusninessProblemsWebDevelopment } from "./components/SolvingBusninessProblemsWebDevelopment";
import { DevelopmentStagesWebDevelopment } from "./components/DevelopmentStagesWebDevelopment";
import { HowWeWorkWebDevelopment } from "./components/HowWeWorkWebDevelopment";
import { FAQandCTAByWebDevelopment } from "./components/FAQandCTAByWebDevelopment";
import { Footer } from "@/components/layout/footer/Footer";

const codeLines = [
    { w: 130, indent: 0, color: "#c4b5fd" },
    { w: 200, indent: 1, color: "#7aa2ff" },
    { w: 90, indent: 2, color: "#c4b5fd" },
    { w: 160, indent: 2, color: "#a78bfa" },
    { w: 110, indent: 1, color: "#c4b5fd" },
    { w: 180, indent: 0, color: "#7aa2ff" },
    { w: 140, indent: 1, color: "#a78bfa" },
    { w: 70, indent: 2, color: "#c4b5fd" },
    { w: 190, indent: 2, color: "#7aa2ff" },
    { w: 120, indent: 1, color: "#c4b5fd" },
    { w: 160, indent: 0, color: "#a78bfa" },
    { w: 100, indent: 1, color: "#c4b5fd" },
    { w: 80, indent: 0, color: "#7aa2ff" },
]

const fileTree = [
    { label: "src", depth: 0 },
    { label: "components", depth: 1 },
    { label: "Header.tsx", depth: 2 },
    { label: "Hero.tsx", depth: 2 },
    { label: "Footer.tsx", depth: 2 },
    { label: "app", depth: 1 },
    { label: "page.tsx", depth: 2 },
    { label: "layout.tsx", depth: 2 },
    { label: "styles", depth: 1 },
]

const floatingCards = [
    { x: 240, y: 900, w: 180, h: 44, delay: "0s" },
    { x: 200, y: 1400, w: 220, h: 56, delay: "1.2s" },
    { x: 1180, y: 1200, w: 200, h: 48, delay: "2.4s" },
    { x: 160, y: 2100, w: 240, h: 60, delay: "0.6s" },
    { x: 1220, y: 2200, w: 180, h: 44, delay: "1.8s" },
]

export default function servicesWebDevelopment() {
    return (
        <div className="relative min-h-screen bg-[#050505] overflow-hidden" style={{ isolation: "isolate" }}>
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute inset-0 webdev-plus-base"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M20 14 L20 26 M14 20 L26 20' stroke='%23a78bfa' stroke-opacity='0.14' stroke-width='1' stroke-linecap='round'/%3E%3C/svg%3E")`,
                        backgroundSize: "40px 40px",
                    }}
                />

                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cpath d='M100 90 L100 110 M90 100 L110 100' stroke='%237aa2ff' stroke-opacity='0.12' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                        backgroundSize: "200px 200px",
                    }}
                />

                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(167,139,250,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(167,139,250,0.04) 1px, transparent 1px)
                        `,
                        backgroundSize: "200px 200px",
                    }}
                />

                {floatingCards.map((c, i) => (
                    <div
                        key={`card-${i}`}
                        className="absolute webdev-float"
                        style={{
                            left: `${c.x}px`,
                            top: `${c.y}px`,
                            width: `${c.w}px`,
                            height: `${c.h}px`,
                            animationDelay: c.delay,
                        }}
                    >
                        <div className="w-full h-full rounded-lg border border-white/8 bg-[#0a0a12]/60 backdrop-blur-[1px]">
                            <div className="flex items-center gap-2 p-3 h-full">
                                <div className="w-2 h-2 rounded-full bg-violet-400/40" />
                                <div className="flex-1 space-y-1.5">
                                    <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
                                    <div className="h-1.5 w-3/4 rounded-full bg-white/6" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div
                    className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none"
                    style={{
                        top: "480px",
                        width: "760px",
                        height: "500px",
                        opacity: 0.75,
                    }}
                >
                    <div className="w-full h-full rounded-xl bg-[#0a0a12]/70 border border-white/8 backdrop-blur-[1px] shadow-2xl shadow-black/50">
                        <div className="flex items-center justify-between px-4 h-9 border-b border-white/6">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/70" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/70" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]/70" />
                            </div>
                            <div className="flex-1 mx-4 h-5 rounded-md bg-white/4 border border-white/6 flex items-center px-2.5">
                                <span className="text-[9px] text-white/30 font-mono tracking-wide">
                                    localhost:3000 / services
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-4 h-4 rounded border border-white/8" />
                                <div className="w-4 h-4 rounded border border-white/8" />
                            </div>
                        </div>

                        <div className="flex h-[calc(100%-36px)]">
                            <div className="w-40 border-r border-white/6 p-3">
                                <span className="text-[8px] text-white/25 uppercase tracking-widest font-mono">
                                    files
                                </span>
                                <div className="mt-2 space-y-1.5">
                                    {fileTree.map((f, i) => (
                                        <div
                                            key={`f-${i}`}
                                            className="flex items-center gap-1.5"
                                            style={{ paddingLeft: `${f.depth * 8}px` }}
                                        >
                                            <div
                                                className={`w-1.5 h-1.5 rounded-sm ${
                                                    f.depth === 0
                                                        ? "bg-violet-400/60"
                                                        : f.depth === 1
                                                        ? "bg-blue-400/50"
                                                        : "bg-white/20"
                                                }`}
                                            />
                                            <span
                                                className={`text-[9px] font-mono ${
                                                    f.depth === 0
                                                        ? "text-white/50"
                                                        : f.depth === 1
                                                        ? "text-white/35"
                                                        : "text-white/25"
                                                }`}
                                            >
                                                {f.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex-1 p-4 overflow-hidden">
                                <div className="flex gap-4 mb-3 border-b border-white/6 pb-2">
                                    <span className="text-[9px] font-mono text-white/40">page.tsx</span>
                                    <span className="text-[9px] font-mono text-white/20">layout.tsx</span>
                                    <span className="text-[9px] font-mono text-white/20">globals.css</span>
                                </div>

                                <div className="space-y-2">
                                    {codeLines.map((line, i) => (
                                        <div
                                            key={`line-${i}`}
                                            className="flex items-center gap-2"
                                            style={{ paddingLeft: `${line.indent * 14}px` }}
                                        >
                                            <span className="text-[8px] text-white/15 font-mono w-4 text-right">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <div
                                                className="h-2 rounded-full webdev-code-line"
                                                style={{
                                                    width: `${line.w}px`,
                                                    background: `linear-gradient(90deg, ${line.color}80, ${line.color}30)`,
                                                    animationDelay: `${i * 0.15}s`,
                                                }}
                                            />
                                        </div>
                                    ))}

                                    <div className="flex items-center gap-2" style={{ paddingLeft: "0px" }}>
                                        <span className="text-[8px] text-white/15 font-mono w-4 text-right">
                                            {String(codeLines.length + 1).padStart(2, "0")}
                                        </span>
                                        <div className="w-1.5 h-3 bg-violet-300/70 webdev-cursor" />
                                    </div>
                                </div>
                            </div>

                            <div className="w-50 border-l border-white/6 p-3">
                                <span className="text-[8px] text-white/25 uppercase tracking-widest font-mono">
                                    preview
                                </span>
                                <div className="mt-3 space-y-2">
                                    <div className="h-3 w-full rounded bg-violet-400/20" />
                                    <div className="h-1.5 w-3/4 rounded bg-white/10" />
                                    <div className="h-1.5 w-2/3 rounded bg-white/8" />
                                    <div className="mt-3 h-20 w-full rounded-md bg-linear-to-br from-violet-500/15 to-blue-500/10 border border-white/6" />
                                    <div className="flex gap-1.5 mt-2">
                                        <div className="h-4 w-14 rounded bg-white/10" />
                                        <div className="h-4 w-14 rounded border border-white/10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="webdev-glow-1 absolute -top-1/4 -left-1/4 w-225 h-225 rounded-full" />
                <div className="webdev-glow-2 absolute -bottom-1/4 -right-1/4 w-225 h-225 rounded-full" />
            </div>

            <style>{`
                @keyframes webdevFloat {
                    0%, 100% { transform: translateY(0); opacity: 0.55; }
                    50% { transform: translateY(-12px); opacity: 0.85; }
                }
                @keyframes webdevCursor {
                    0%, 45% { opacity: 1; }
                    50%, 95% { opacity: 0; }
                    100% { opacity: 1; }
                }
                @keyframes webdevCodeLine {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 0.9; }
                }
                @keyframes webdevGlow1 {
                    0%, 100% { transform: translate(0, 0); opacity: 0.25; }
                    50% { transform: translate(120px, 80px); opacity: 0.45; }
                }
                @keyframes webdevGlow2 {
                    0%, 100% { transform: translate(0, 0); opacity: 0.2; }
                    50% { transform: translate(-120px, -80px); opacity: 0.4; }
                }
                @keyframes webdevPlusPulse {
                    0%, 100% { opacity: 0.65; }
                    50% { opacity: 0.9; }
                }
                .webdev-plus-base {
                    animation: webdevPlusPulse 10s ease-in-out infinite;
                }
                .webdev-float {
                    animation: webdevFloat 6s ease-in-out infinite;
                }
                .webdev-cursor {
                    animation: webdevCursor 1.2s ease-in-out infinite;
                }
                .webdev-code-line {
                    animation: webdevCodeLine 3s ease-in-out infinite;
                }
                .webdev-glow-1 {
                    background: radial-gradient(circle, rgba(167,139,250,0.06), transparent 65%);
                    animation: webdevGlow1 22s ease-in-out infinite;
                }
                .webdev-glow-2 {
                    background: radial-gradient(circle, rgba(122,162,255,0.04), transparent 65%);
                    animation: webdevGlow2 26s ease-in-out infinite;
                }
            `}</style>

            <div className="relative z-10 pt-18">
                <div className="mobile-only">
                    <HeaderMobile />
                </div>
                <div className="desktop-only">
                    <HeaderDesktop />
                </div>
                <HeroWebDevelopment />
                <CanBeDevelopedWebDevelopment />
                <SolvingBusninessProblemsWebDevelopment />
                <DevelopmentStagesWebDevelopment />
                <HowWeWorkWebDevelopment />
                <FAQandCTAByWebDevelopment />
                <Footer />
            </div>
        </div>
    )
}