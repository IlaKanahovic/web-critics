import { Footer } from "@/components/layout/footer/Footer";
import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { HeroAi } from "./components/HeroAi";
import { CanBeDevelopedAi } from "./components/CanBeDevelopedAi";
import { SolvingBusninessProblemsAi } from "./components/SolvingBusninessProblemsAi";
import { DevelopmentStagesAi } from "./components/DevelopmentStagesAi";
import { HowWeWorkAi } from "./components/HowWeWorkAi";
import { WhatCanWeCheckSpecificallyAi } from "./components/WhatCanWeCheckSpecificallyAi";
import { FAQandCTAByAi } from "./components/FAQandCTAByAi";

const hubs = [
    { cx: 340, cy: 700, r: 180, layers: 4 },
    { cx: 1120, cy: 1200, r: 220, layers: 5 },
    { cx: 400, cy: 1900, r: 200, layers: 4 },
    { cx: 1100, cy: 2600, r: 240, layers: 5 },
    { cx: 360, cy: 3400, r: 200, layers: 4 },
    { cx: 1080, cy: 4100, r: 220, layers: 5 },
    { cx: 420, cy: 4800, r: 200, layers: 4 },
    { cx: 1080, cy: 5500, r: 220, layers: 5 },
]

const topNeurons = [
    { x: 720, y: 260 },
    { x: 560, y: 340 }, { x: 880, y: 340 },
    { x: 420, y: 420 }, { x: 720, y: 440 }, { x: 1020, y: 420 },
    { x: 300, y: 520 }, { x: 540, y: 560 }, { x: 900, y: 560 }, { x: 1140, y: 520 },
    { x: 220, y: 640 }, { x: 460, y: 700 }, { x: 720, y: 720 }, { x: 980, y: 700 }, { x: 1220, y: 640 },
    { x: 340, y: 820 }, { x: 620, y: 860 }, { x: 820, y: 860 }, { x: 1100, y: 820 },
]

const topSynapses: [number, number][] = [
    [0, 1], [0, 2],
    [1, 3], [1, 4], [2, 4], [2, 5],
    [3, 6], [3, 7], [4, 7], [4, 8], [5, 8], [5, 9],
    [6, 10], [6, 11], [7, 11], [7, 12], [8, 12], [8, 13], [9, 13], [9, 14],
    [10, 15], [11, 15], [11, 16], [12, 16], [12, 17], [13, 17], [13, 18], [14, 18],
    [15, 16], [16, 17], [17, 18],
]

export default function servicesAI() {
    return (
        <div className="relative min-h-screen bg-[#050505]">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 1440 6000"
                    preserveAspectRatio="xMidYMin slice"
                    style={{ opacity: 0.8 }}
                >
                    <defs>
                        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.7" />
                            <stop offset="40%" stopColor="#a78bfa" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="coreGlowBlue" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#a5c0ff" stopOpacity="0.6" />
                            <stop offset="40%" stopColor="#7aa2ff" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#7aa2ff" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="topCoreGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
                            <stop offset="30%" stopColor="#c4b5fd" stopOpacity="0.35" />
                            <stop offset="70%" stopColor="#a78bfa" stopOpacity="0.12" />
                            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                        </radialGradient>
                        <filter id="bigBlur">
                            <feGaussianBlur stdDeviation="4" />
                        </filter>
                        <filter id="midBlur">
                            <feGaussianBlur stdDeviation="2" />
                        </filter>
                        <filter id="topBlur">
                            <feGaussianBlur stdDeviation="6" />
                        </filter>
                    </defs>

                    <g opacity="0.9">
                        <circle cx="720" cy="440" r="340" fill="url(#topCoreGlow)" filter="url(#topBlur)" />

                        {[120, 180, 240, 300, 360, 420].map((r, i) => (
                            <circle
                                key={`top-ring-${i}`}
                                cx="720"
                                cy="440"
                                r={r}
                                fill="none"
                                stroke={i % 2 === 0 ? "#a78bfa" : "#7aa2ff"}
                                strokeOpacity={0.18 - i * 0.02}
                                strokeWidth="0.8"
                                strokeDasharray={i % 2 === 0 ? "0" : "4 8"}
                            >
                                <animate
                                    attributeName="r"
                                    values={`${r};${r + 8};${r}`}
                                    dur={`${10 + i * 2}s`}
                                    repeatCount="indefinite"
                                />
                            </circle>
                        ))}

                        {Array.from({ length: 36 }).map((_, i) => {
                            const angle = (i / 36) * Math.PI * 2
                            return (
                                <line
                                    key={`top-ray-${i}`}
                                    x1={720 + Math.cos(angle) * 60}
                                    y1={440 + Math.sin(angle) * 60}
                                    x2={720 + Math.cos(angle) * 400}
                                    y2={440 + Math.sin(angle) * 400}
                                    stroke="#a78bfa"
                                    strokeOpacity="0.05"
                                    strokeWidth="0.6"
                                />
                            )
                        })}

                        {Array.from({ length: 60 }).map((_, i) => {
                            const angle = (i / 60) * Math.PI * 2
                            const radius = 120 + (i % 4) * 70
                            return (
                                <circle
                                    key={`top-dot-${i}`}
                                    cx={720 + Math.cos(angle) * radius}
                                    cy={440 + Math.sin(angle) * radius}
                                    r={i % 3 === 0 ? 1.5 : 1}
                                    fill={i % 2 === 0 ? "#c4b5fd" : "#a5c0ff"}
                                    fillOpacity="0.4"
                                >
                                    <animate
                                        attributeName="opacity"
                                        values="0.4;0.8;0.4"
                                        dur={`${3 + (i % 5)}s`}
                                        begin={`${(i * 0.08) % 4}s`}
                                        repeatCount="indefinite"
                                    />
                                </circle>
                            )
                        })}

                        {topSynapses.map(([a, b], i) => (
                            <line
                                key={`top-syn-${i}`}
                                x1={topNeurons[a].x}
                                y1={topNeurons[a].y}
                                x2={topNeurons[b].x}
                                y2={topNeurons[b].y}
                                stroke="#a78bfa"
                                strokeOpacity="0.08"
                                strokeWidth="0.8"
                            />
                        ))}

                        {topNeurons.map((n, i) => (
                            <g key={`top-n-${i}`}>
                                <circle cx={n.x} cy={n.y} r="20" fill="url(#coreGlow)" opacity="0.4" />
                                <circle cx={n.x} cy={n.y} r="2" fill="#c4b5fd" fillOpacity="0.7" />
                                <circle cx={n.x} cy={n.y} r="2" fill="#c4b5fd" opacity="0">
                                    <animate
                                        attributeName="opacity"
                                        values="0;0.5;0"
                                        dur="4s"
                                        begin={`${i * 0.15}s`}
                                        repeatCount="indefinite"
                                    />
                                    <animate
                                        attributeName="r"
                                        values="2;7;2"
                                        dur="4s"
                                        begin={`${i * 0.15}s`}
                                        repeatCount="indefinite"
                                    />
                                </circle>
                            </g>
                        ))}

                        {topNeurons.map((n, i) => {
                            if (i % 3 !== 0) return null
                            return (
                                <circle key={`top-p-${i}`} r="2.5" fill="#c4b5fd" filter="url(#midBlur)">
                                    <animateMotion
                                        dur={`${4 + (i % 4)}s`}
                                        begin={`${i * 0.3}s`}
                                        repeatCount="indefinite"
                                        path={`M ${n.x} ${n.y} L 720 440`}
                                    />
                                    <animate
                                        attributeName="opacity"
                                        values="0;0.9;0"
                                        dur={`${4 + (i % 4)}s`}
                                        begin={`${i * 0.3}s`}
                                        repeatCount="indefinite"
                                    />
                                </circle>
                            )
                        })}
                    </g>

                    {[
                        "M -100 200 C 300 100, 600 340, 900 200 S 1300 60, 1600 220",
                        "M -100 500 C 250 400, 550 620, 850 480 S 1250 340, 1600 500",
                        "M -100 800 C 300 700, 600 920, 900 780 S 1300 640, 1600 820",
                        "M -100 1100 C 250 1000, 550 1220, 850 1080 S 1250 940, 1600 1120",
                        "M -100 1400 C 300 1300, 600 1520, 900 1380 S 1300 1240, 1600 1420",
                        "M -100 1700 C 250 1600, 550 1820, 850 1680 S 1250 1540, 1600 1720",
                        "M -100 2000 C 300 1900, 600 2120, 900 1980 S 1300 1840, 1600 2020",
                        "M -100 2300 C 250 2200, 550 2420, 850 2280 S 1250 2140, 1600 2320",
                        "M -100 2600 C 300 2500, 600 2720, 900 2580 S 1300 2440, 1600 2620",
                        "M -100 2900 C 250 2800, 550 3020, 850 2880 S 1250 2740, 1600 2920",
                        "M -100 3200 C 300 3100, 600 3320, 900 3180 S 1300 3040, 1600 3220",
                        "M -100 3500 C 250 3400, 550 3620, 850 3480 S 1250 3340, 1600 3520",
                        "M -100 3800 C 300 3700, 600 3920, 900 3780 S 1300 3640, 1600 3820",
                        "M -100 4100 C 250 4000, 550 4220, 850 4080 S 1250 3940, 1600 4120",
                        "M -100 4400 C 300 4300, 600 4520, 900 4380 S 1300 4240, 1600 4420",
                        "M -100 4700 C 250 4600, 550 4820, 850 4680 S 1250 4540, 1600 4720",
                        "M -100 5000 C 300 4900, 600 5120, 900 4980 S 1300 4840, 1600 5020",
                        "M -100 5300 C 250 5200, 550 5420, 850 5280 S 1250 5140, 1600 5320",
                        "M -100 5600 C 300 5500, 600 5720, 900 5580 S 1300 5440, 1600 5620",
                        "M -100 5900 C 250 5800, 550 6020, 850 5880 S 1250 5740, 1600 5920",
                    ].map((d, i) => (
                        <path
                            key={`wave-${i}`}
                            d={d}
                            stroke={i % 3 === 0 ? "#a78bfa" : i % 3 === 1 ? "#7aa2ff" : "#c4b5fd"}
                            strokeOpacity="0.08"
                            strokeWidth="1"
                            fill="none"
                            strokeLinecap="round"
                        />
                    ))}

                    {hubs.map((hub, hi) => (
                        <g key={`hub-${hi}`}>
                            {Array.from({ length: hub.layers }).map((_, li) => (
                                <circle
                                    key={li}
                                    cx={hub.cx}
                                    cy={hub.cy}
                                    r={hub.r - li * (hub.r / hub.layers / 1.2)}
                                    fill="none"
                                    stroke={hi % 2 === 0 ? "#a78bfa" : "#7aa2ff"}
                                    strokeOpacity={0.12 - li * 0.015}
                                    strokeWidth="0.8"
                                    strokeDasharray={li % 2 === 0 ? "0" : "3 6"}
                                >
                                    <animate
                                        attributeName="r"
                                        values={`${hub.r - li * (hub.r / hub.layers / 1.2)};${hub.r - li * (hub.r / hub.layers / 1.2) + 6};${hub.r - li * (hub.r / hub.layers / 1.2)}`}
                                        dur={`${8 + li * 2}s`}
                                        repeatCount="indefinite"
                                    />
                                </circle>
                            ))}

                            <circle cx={hub.cx} cy={hub.cy} r="45" fill={hi % 2 === 0 ? "url(#coreGlow)" : "url(#coreGlowBlue)"} />
                            <circle cx={hub.cx} cy={hub.cy} r="3" fill="#c4b5fd" fillOpacity="0.85" filter="url(#midBlur)" />
                            <circle cx={hub.cx} cy={hub.cy} r="3" fill="#ffffff" fillOpacity="0.6">
                                <animate
                                    attributeName="r"
                                    values="3;7;3"
                                    dur="3s"
                                    begin={`${hi * 0.4}s`}
                                    repeatCount="indefinite"
                                />
                                <animate
                                    attributeName="opacity"
                                    values="0.6;0;0.6"
                                    dur="3s"
                                    begin={`${hi * 0.4}s`}
                                    repeatCount="indefinite"
                                />
                            </circle>

                            {Array.from({ length: 12 }).map((_, si) => {
                                const angle = (si / 12) * Math.PI * 2 + hi * 0.3
                                const r1 = 60
                                const r2 = hub.r * 0.9
                                return (
                                    <line
                                        key={si}
                                        x1={hub.cx + Math.cos(angle) * r1}
                                        y1={hub.cy + Math.sin(angle) * r1}
                                        x2={hub.cx + Math.cos(angle) * r2}
                                        y2={hub.cy + Math.sin(angle) * r2}
                                        stroke={hi % 2 === 0 ? "#a78bfa" : "#7aa2ff"}
                                        strokeOpacity="0.06"
                                        strokeWidth="0.8"
                                    />
                                )
                            })}

                            {Array.from({ length: 24 }).map((_, ai) => {
                                const angle = (ai / 24) * Math.PI * 2
                                const radius = hub.r * (0.85 + (ai % 3) * 0.05)
                                return (
                                    <circle
                                        key={ai}
                                        cx={hub.cx + Math.cos(angle) * radius}
                                        cy={hub.cy + Math.sin(angle) * radius}
                                        r="1.2"
                                        fill={hi % 2 === 0 ? "#c4b5fd" : "#a5c0ff"}
                                        fillOpacity="0.35"
                                    >
                                        <animate
                                            attributeName="opacity"
                                            values="0.35;0.7;0.35"
                                            dur={`${3 + (ai % 4)}s`}
                                            begin={`${(ai * 0.1) % 3}s`}
                                            repeatCount="indefinite"
                                        />
                                    </circle>
                                )
                            })}

                            {Array.from({ length: 6 }).map((_, pi) => {
                                const angle = (pi / 6) * Math.PI * 2
                                const targetX = hub.cx + Math.cos(angle) * hub.r * 0.85
                                const targetY = hub.cy + Math.sin(angle) * hub.r * 0.85
                                return (
                                    <circle key={`pulse-${pi}`} r="2.2" fill="#c4b5fd" filter="url(#midBlur)">
                                        <animateMotion
                                            dur={`${5 + pi}s`}
                                            begin={`${pi * 0.4}s`}
                                            repeatCount="indefinite"
                                            path={`M ${targetX} ${targetY} L ${hub.cx} ${hub.cy}`}
                                        />
                                        <animate
                                            attributeName="opacity"
                                            values="0;0.8;0"
                                            dur={`${5 + pi}s`}
                                            begin={`${pi * 0.4}s`}
                                            repeatCount="indefinite"
                                        />
                                    </circle>
                                )
                            })}
                        </g>
                    ))}

                    {Array.from({ length: 400 }).map((_, i) => {
                        const x = (i * 97) % 1440
                        const y = (i * 137) % 6000
                        const size = (i % 3) * 0.4 + 0.6
                        const isViolet = i % 2 === 0
                        return (
                            <circle
                                key={`particle-${i}`}
                                cx={x}
                                cy={y}
                                r={size}
                                fill={isViolet ? "#a78bfa" : "#7aa2ff"}
                                fillOpacity="0.15"
                            >
                                <animate
                                    attributeName="opacity"
                                    values="0.15;0.4;0.15"
                                    dur={`${4 + (i % 6)}s`}
                                    begin={`${(i * 0.05) % 4}s`}
                                    repeatCount="indefinite"
                                />
                            </circle>
                        )
                    })}
                </svg>

                <div className="absolute top-[3%] -left-1/4 w-275 h-275 rounded-full ai-glow-3" />
                <div className="absolute top-[8%] -right-1/4 w-275 h-275 rounded-full ai-glow-1" />
                <div className="absolute top-[30%] -left-1/4 w-250 h-250 rounded-full ai-glow-2" />
                <div className="absolute top-[55%] -right-1/4 w-275 h-275 rounded-full ai-glow-1" />
                <div className="absolute top-[78%] -left-1/4 w-250 h-250 rounded-full ai-glow-2" />
                <div className="absolute bottom-[2%] -right-1/4 w-275 h-275 rounded-full ai-glow-1" />
            </div>
            <style>{`
                @keyframes aiGlow1 {
                    0%, 100% { opacity: 0.3; transform: translate(0, 0); }
                    50% { opacity: 0.55; transform: translate(-60px, 40px); }
                }
                @keyframes aiGlow2 {
                    0%, 100% { opacity: 0.25; transform: translate(0, 0); }
                    50% { opacity: 0.45; transform: translate(60px, -40px); }
                }
                @keyframes aiGlow3 {
                    0%, 100% { opacity: 0.35; transform: translate(0, 0) scale(1); }
                    50% { opacity: 0.6; transform: translate(40px, 30px) scale(1.08); }
                }
                .ai-glow-1 {
                    background: radial-gradient(circle, rgba(167,139,250,0.1), transparent 70%);
                    animation: aiGlow1 22s ease-in-out infinite;
                }
                .ai-glow-2 {
                    background: radial-gradient(circle, rgba(122,162,255,0.08), transparent 70%);
                    animation: aiGlow2 26s ease-in-out infinite;
                }
                .ai-glow-3 {
                    background: radial-gradient(circle, rgba(196,181,253,0.12), transparent 70%);
                    animation: aiGlow3 20s ease-in-out infinite;
                }
            `}</style>
            <div className="relative z-10 pt-18">
                <div className="mobile-only">
                    <HeaderMobile />
                </div>
                <div className="desktop-only">
                    <HeaderDesktop />
                </div>
                <HeroAi />
                <CanBeDevelopedAi />
                <SolvingBusninessProblemsAi />
                <DevelopmentStagesAi />
                <HowWeWorkAi />
                <WhatCanWeCheckSpecificallyAi />
                <FAQandCTAByAi />
                <Footer />
            </div>
        </div>
    )
}