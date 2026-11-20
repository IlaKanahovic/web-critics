import { bgWebDevelopment, codeLinesWebDevelopment, fileTreeWebDevelopment } from "@/constants/bg"

export function WebDevelopmentBackground({ showCode = false }: { showCode?: boolean }) {
    return (
        <>
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden webdev-background">
                <div
                    className="absolute inset-0 webdev-plus-base"
                    style={{
                        backgroundImage: "var(--webdev-plus-small)",
                        backgroundSize: "40px 40px",
                    }}
                />

                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "var(--webdev-plus-large)",
                        backgroundSize: "200px 200px",
                    }}
                />

                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(var(--webdev-grid-color) 1px, transparent 1px),
                            linear-gradient(90deg, var(--webdev-grid-color) 1px, transparent 1px)
                        `,
                        backgroundSize: "200px 200px",
                    }}
                />

                {bgWebDevelopment.map((c, i) => (
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
                        <div className="w-full h-full rounded-lg border border-white/8 bg-[#0a0a12]/60 backdrop-blur-[1px] light:border-line/50 light:bg-white/60 light:shadow-card">
                            <div className="flex items-center gap-2 p-3 h-full">
                                <div className="w-2 h-2 rounded-full bg-violet-400/40 light:bg-[#94A3B8]/60" />
                                <div className="flex-1 space-y-1.5">
                                    <div className="h-1.5 w-1/2 rounded-full bg-white/10 light:bg-[#94A3B8]/30" />
                                    <div className="h-1.5 w-3/4 rounded-full bg-white/6 light:bg-line/40" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {showCode && (
                    <div
                        className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none"
                        style={{
                            top: "480px",
                            width: "760px",
                            height: "500px",
                            opacity: "var(--webdev-panel-opacity)",
                        }}
                    >
                        <div className="w-full h-full rounded-xl bg-[#0a0a12]/70 border border-white/8 backdrop-blur-[1px] shadow-2xl shadow-black/50 light:bg-white/90 light:border-line light:backdrop-blur-md light:shadow-[0_20px_50px_rgba(15,23,42,0.08)] light:shadow-ink/8">
                            <div className="flex items-center justify-between px-4 h-9 border-b border-white/6 light:border-[#E2E8F0]">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/70 light:bg-[#ff5f57]/80" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/70 light:bg-[#febc2e]/80" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]/70 light:bg-[#28c840]/80" />
                                </div>
                                <div className="flex-1 mx-4 h-5 rounded-md bg-white/4 border border-white/6 flex items-center px-2.5 light:bg-[#F1F5F9] light:border-[#E2E8F0]">
                                    <span className="text-[9px] text-white/30 font-mono tracking-wide light:text-ink-muted">
                                        localhost:3000 / services
                                    </span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-4 h-4 rounded border border-white/8 light:border-line" />
                                    <div className="w-4 h-4 rounded border border-white/8 light:border-line" />
                                </div>
                            </div>

                            <div className="flex h-[calc(100%-36px)]">
                                <div className="w-40 border-r border-white/6 p-3 light:border-[#E2E8F0]">
                                    <span className="text-[8px] text-white/25 uppercase tracking-widest font-mono light:text-[#94A3B8]">
                                        files
                                    </span>
                                    <div className="mt-2 space-y-1.5">
                                        {fileTreeWebDevelopment.map((f, i) => (
                                            <div
                                                key={`f-${i}`}
                                                className="flex items-center gap-1.5"
                                                style={{ paddingLeft: `${f.depth * 8}px` }}
                                            >
                                                <div
                                                    className={`w-1.5 h-1.5 rounded-sm ${
                                                        f.depth === 0
                                                            ? "bg-violet-400/60 light:bg-ink-muted"
                                                            : f.depth === 1
                                                            ? "bg-blue-400/50 light:bg-[#94A3B8]"
                                                            : "bg-white/20 light:bg-line"
                                                    }`}
                                                />
                                                <span
                                                    className={`text-[9px] font-mono ${
                                                        f.depth === 0
                                                            ? "text-white/50 light:text-[#334155]"
                                                            : f.depth === 1
                                                            ? "text-white/35 light:text-ink-muted"
                                                            : "text-white/25 light:text-[#94A3B8]"
                                                    }`}
                                                >
                                                    {f.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex-1 p-4 overflow-hidden">
                                    <div className="flex gap-4 mb-3 border-b border-white/6 pb-2 light:border-[#E2E8F0]">
                                        <span className="text-[9px] font-mono text-white/40 light:text-[#334155]">page.tsx</span>
                                        <span className="text-[9px] font-mono text-white/20 light:text-[#94A3B8]">layout.tsx</span>
                                        <span className="text-[9px] font-mono text-white/20 light:text-[#94A3B8]">globals.css</span>
                                    </div>

                                    <div className="space-y-2">
                                        {codeLinesWebDevelopment.map((line, i) => (
                                            <div
                                                key={`line-${i}`}
                                                className="flex items-center gap-2"
                                                style={{ paddingLeft: `${line.indent * 14}px` }}
                                            >
                                                <span className="text-[8px] text-white/15 font-mono w-4 text-right light:text-line">
                                                    {String(i + 1).padStart(2, "0")}
                                                </span>
                                                <div
                                                    className="h-2 rounded-full webdev-code-line"
                                                    style={{
                                                        width: `${line.w}px`,
                                                        background: `var(--webdev-code-color, linear-gradient(90deg, ${line.color}80, ${line.color}30))`,
                                                        animationDelay: `${i * 0.15}s`,
                                                    }}
                                                />
                                            </div>
                                        ))}

                                        <div className="flex items-center gap-2" style={{ paddingLeft: "0px" }}>
                                            <span className="text-[8px] text-white/15 font-mono w-4 text-right light:text-line">
                                                {String(codeLinesWebDevelopment.length + 1).padStart(2, "0")}
                                            </span>
                                            <div className="w-1.5 h-3 bg-violet-300/70 webdev-cursor light:bg-ink-muted" />
                                        </div>
                                    </div>
                                </div>

                                <div className="w-50 border-l border-white/6 p-3 light:border-[#E2E8F0]">
                                    <span className="text-[8px] text-white/25 uppercase tracking-widest font-mono light:text-[#94A3B8]">
                                        preview
                                    </span>
                                    <div className="mt-3 space-y-2">
                                        <div className="h-3 w-full rounded bg-violet-400/20 light:bg-[#94A3B8]/20" />
                                        <div className="h-1.5 w-3/4 rounded bg-white/10 light:bg-line/50" />
                                        <div className="h-1.5 w-2/3 rounded bg-white/8 light:bg-line/40" />
                                        <div className="mt-3 h-20 w-full rounded-md bg-linear-to-br from-violet-500/15 to-blue-500/10 border border-white/6 light:from-[#E2E8F0]/50 light:to-[#F1F5F9]/50 light:border-[#E2E8F0]" />
                                        <div className="flex gap-1.5 mt-2">
                                            <div className="h-4 w-14 rounded bg-white/10 light:bg-[#E2E8F0]" />
                                            <div className="h-4 w-14 rounded border border-white/10 light:border-line" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="webdev-glow-1 absolute -top-1/4 -left-1/4 w-225 h-225 rounded-full" />
                <div className="webdev-glow-2 absolute -bottom-1/4 -right-1/4 w-225 h-225 rounded-full" />
            </div>
            <style>{`
                .webdev-background {
                    --webdev-plus-small: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M20 14 L20 26 M14 20 L26 20' stroke='%23a78bfa' stroke-opacity='0.14' stroke-width='1' stroke-linecap='round'/%3E%3C/svg%3E");
                    --webdev-plus-large: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cpath d='M100 90 L100 110 M90 100 L110 100' stroke='%237aa2ff' stroke-opacity='0.12' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
                    --webdev-grid-color: rgba(167,139,250,0.04);
                    --webdev-panel-opacity: 0.75;
                    --webdev-float-rest: 0.55;
                    --webdev-float-peak: 0.85;
                    --webdev-code-line-rest: 0.5;
                    --webdev-code-line-peak: 0.9;
                    --webdev-glow1-rest: 0.25;
                    --webdev-glow1-peak: 0.45;
                    --webdev-glow2-rest: 0.2;
                    --webdev-glow2-peak: 0.4;
                    --webdev-plus-pulse-peak: 0.9;
                    --webdev-glow-one: radial-gradient(circle, rgba(167,139,250,0.06), transparent 65%);
                    --webdev-glow-two: radial-gradient(circle, rgba(122,162,255,0.04), transparent 65%);
                }
                .light .webdev-background {
                    --webdev-plus-small: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M20 14 L20 26 M14 20 L26 20' stroke='%2394A3B8' stroke-opacity='0.3' stroke-width='1' stroke-linecap='round'/%3E%3C/svg%3E");
                    --webdev-plus-large: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cpath d='M100 90 L100 110 M90 100 L110 100' stroke='%23CBD5E1' stroke-opacity='0.3' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
                    --webdev-grid-color: rgba(148,163,184,0.12);
                    --webdev-panel-opacity: 0.9;
                    --webdev-code-color: linear-gradient(90deg, #94A3B8 0%, #CBD5E1 100%);
                    --webdev-float-rest: 0.7;
                    --webdev-float-peak: 1;
                    --webdev-code-line-rest: 0.6;
                    --webdev-code-line-peak: 1;
                    --webdev-glow1-rest: 0.5;
                    --webdev-glow1-peak: 0.8;
                    --webdev-glow2-rest: 0.4;
                    --webdev-glow2-peak: 0.7;
                    --webdev-plus-pulse-peak: 1;
                    --webdev-glow-one: radial-gradient(circle, rgba(255,255,255,0.7), rgba(226,232,240,0.2) 45%, transparent 65%);
                    --webdev-glow-two: radial-gradient(circle, rgba(203,213,225,0.4), transparent 65%);
                }
                @keyframes webdevFloat {
                    0%, 100% { transform: translateY(0); opacity: var(--webdev-float-rest); }
                    50% { transform: translateY(-12px); opacity: var(--webdev-float-peak); }
                }
                @keyframes webdevCursor {
                    0%, 45% { opacity: 1; }
                    50%, 95% { opacity: 0; }
                    100% { opacity: 1; }
                }
                @keyframes webdevCodeLine {
                    0%, 100% { opacity: var(--webdev-code-line-rest); }
                    50% { opacity: var(--webdev-code-line-peak); }
                }
                @keyframes webdevGlow1 {
                    0%, 100% { transform: translate(0, 0); opacity: var(--webdev-glow1-rest); }
                    50% { transform: translate(120px, 80px); opacity: var(--webdev-glow1-peak); }
                }
                @keyframes webdevGlow2 {
                    0%, 100% { transform: translate(0, 0); opacity: var(--webdev-glow2-rest); }
                    50% { transform: translate(-120px, -80px); opacity: var(--webdev-glow2-peak); }
                }
                @keyframes webdevPlusPulse {
                    0%, 100% { opacity: 0.65; }
                    50% { opacity: var(--webdev-plus-pulse-peak); }
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
                    background: var(--webdev-glow-one);
                    animation: webdevGlow1 22s ease-in-out infinite;
                }
                .webdev-glow-2 {
                    background: var(--webdev-glow-two);
                    animation: webdevGlow2 26s ease-in-out infinite;
                }
            `}</style>
        </>
    )
}
