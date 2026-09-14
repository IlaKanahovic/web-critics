import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { HeroAutomation } from "./components/HeroAutomation";
import { CanBeDevelopedAutomation } from "./components/CanBeDevelopedAutomation";
import { SolvingBusninessProblemsAutomation } from "./components/SolvingBusninessProblemsAutomation";
import { DevelopmentStagesAutomation } from "./components/DevelopmentStagesAutomation";
import { HowWeWorkAutomation } from "./components/HowWeWorkAutomation";
import { FAQandCTAByAutomation } from "./components/FAQandCTAByAutomation";
import { Footer } from "@/components/layout/footer/Footer";

const nodes = [
    { x: 320, y: 950 }, { x: 480, y: 1030 }, { x: 640, y: 940 }, { x: 800, y: 1050 }, { x: 960, y: 970 },
    { x: 380, y: 1190 }, { x: 540, y: 1120 }, { x: 700, y: 1230 }, { x: 860, y: 1160 }, { x: 1020, y: 1250 },
    { x: 340, y: 1410 }, { x: 500, y: 1350 }, { x: 660, y: 1470 }, { x: 820, y: 1390 }, { x: 980, y: 1510 },
    { x: 400, y: 1670 }, { x: 560, y: 1600 }, { x: 720, y: 1730 }, { x: 880, y: 1640 },
    { x: 350, y: 1930 }, { x: 520, y: 1850 }, { x: 680, y: 1970 }, { x: 850, y: 1890 }, { x: 1000, y: 2010 },
    { x: 420, y: 2190 }, { x: 580, y: 2120 }, { x: 740, y: 2250 }, { x: 900, y: 2160 },
    { x: 380, y: 2450 }, { x: 560, y: 2370 }, { x: 720, y: 2490 }, { x: 880, y: 2410 },
    { x: 440, y: 2710 }, { x: 620, y: 2640 }, { x: 780, y: 2770 }, { x: 940, y: 2680 },
    { x: 360, y: 2970 }, { x: 540, y: 2890 }, { x: 700, y: 3010 }, { x: 860, y: 2930 },
    { x: 420, y: 3230 }, { x: 600, y: 3160 }, { x: 760, y: 3290 }, { x: 920, y: 3200 },
]

const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [0, 5], [1, 6], [2, 6], [3, 7], [4, 8], [4, 9],
    [5, 6], [6, 7], [7, 8], [8, 9],
    [5, 10], [6, 11], [7, 12], [8, 13], [9, 14],
    [10, 11], [11, 12], [12, 13], [13, 14],
    [10, 15], [11, 16], [12, 16], [13, 17], [14, 18],
    [15, 16], [16, 17], [17, 18],
    [15, 19], [16, 20], [17, 21], [18, 22],
    [19, 20], [20, 21], [21, 22], [22, 23],
    [19, 24], [20, 25], [21, 26], [22, 27], [23, 27],
    [24, 25], [25, 26], [26, 27],
    [24, 28], [25, 29], [26, 30], [27, 31],
    [28, 29], [29, 30], [30, 31],
    [28, 32], [29, 33], [30, 34], [31, 35],
    [32, 33], [33, 34], [34, 35],
    [32, 36], [33, 37], [34, 38], [35, 39],
    [36, 37], [37, 38], [38, 39],
    [36, 40], [37, 41], [38, 42], [39, 43],
    [40, 41], [41, 42], [42, 43],
]

const cx = 640
const cy = 380

const satellites = [
    { angle: -90, r: 200, size: 44, color: "#a78bfa" },
    { angle: 0, r: 240, size: 38, color: "#7aa2ff" },
    { angle: 90, r: 200, size: 44, color: "#a78bfa" },
    { angle: 180, r: 240, size: 38, color: "#7aa2ff" },
]

export default function servicesAutomation() {
    return (
        <div className="relative min-h-screen bg-[#050505] overflow-hidden" style={{ isolation: "isolate" }}>
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 1280 3600"
                    preserveAspectRatio="xMidYMin slice"
                    style={{ opacity: 0.65 }}
                >
                    <defs>
                        <radialGradient id="glow">
                            <stop offset="0%" stopColor="#7aa2ff" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#7aa2ff" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="hubSoft">
                            <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.18" />
                            <stop offset="60%" stopColor="#a78bfa" stopOpacity="0.05" />
                            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="satGlow">
                            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="satGlowBlue">
                            <stop offset="0%" stopColor="#7aa2ff" stopOpacity="0.22" />
                            <stop offset="100%" stopColor="#7aa2ff" stopOpacity="0" />
                        </radialGradient>
                        <filter id="blur">
                            <feGaussianBlur stdDeviation="1.5" />
                        </filter>
                        <filter id="blurSoft">
                            <feGaussianBlur stdDeviation="3" />
                        </filter>
                    </defs>

                    <g>
                        <circle cx={cx} cy={cy} r="260" fill="url(#hubSoft)" filter="url(#blurSoft)" />

                        <circle cx={cx} cy={cy} r="130" fill="none" stroke="#a78bfa" strokeOpacity="0.15" strokeWidth="1" />
                        <circle cx={cx} cy={cy} r="170" fill="none" stroke="#a78bfa" strokeOpacity="0.1" strokeWidth="0.8" strokeDasharray="2 8" />
                        <circle cx={cx} cy={cy} r="90" fill="none" stroke="#7aa2ff" strokeOpacity="0.08" strokeWidth="0.6" />

                        <circle cx={cx} cy={cy} r="20" fill="none" stroke="#c4b5fd" strokeOpacity="0.25" strokeWidth="1" />
                        <circle cx={cx} cy={cy} r="6" fill="#c4b5fd" fillOpacity="0.45">
                            <animate attributeName="r" values="6;9;6" dur="4s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.45;0.2;0.45" dur="4s" repeatCount="indefinite" />
                        </circle>

                        {satellites.map((sat, i) => {
                            const rad = (sat.angle * Math.PI) / 180
                            const x = cx + Math.cos(rad) * sat.r
                            const y = cy + Math.sin(rad) * sat.r
                            const glowId = sat.color === "#7aa2ff" ? "satGlowBlue" : "satGlow"
                            return (
                                <g key={`sat-${i}`}>
                                    <line
                                        x1={cx + Math.cos(rad) * 30}
                                        y1={cy + Math.sin(rad) * 30}
                                        x2={x - Math.cos(rad) * (sat.size / 2)}
                                        y2={y - Math.sin(rad) * (sat.size / 2)}
                                        stroke={sat.color}
                                        strokeOpacity="0.18"
                                        strokeWidth="1"
                                        strokeDasharray="3 5"
                                    />
                                    <circle cx={x} cy={y} r={sat.size * 0.9} fill={`url(#${glowId})`} filter="url(#blurSoft)" />
                                    <circle cx={x} cy={y} r={sat.size / 2} fill="#0a0a0a" stroke={sat.color} strokeOpacity="0.35" strokeWidth="1" />
                                    <circle cx={x} cy={y} r={sat.size / 2 - 6} fill="none" stroke={sat.color} strokeOpacity="0.15" strokeWidth="0.6" />
                                    <circle cx={x} cy={y} r="3" fill={sat.color} fillOpacity="0.6" />
                                    <circle r="2" fill={sat.color} filter="url(#blur)">
                                        <animateMotion
                                            dur={`${4 + i}s`}
                                            begin={`${i * 0.6}s`}
                                            repeatCount="indefinite"
                                            path={`M ${x} ${y} L ${cx} ${cy}`}
                                        />
                                        <animate
                                            attributeName="opacity"
                                            values="0;0.7;0"
                                            dur={`${4 + i}s`}
                                            begin={`${i * 0.6}s`}
                                            repeatCount="indefinite"
                                        />
                                    </circle>
                                    <circle r="1.8" fill={sat.color} filter="url(#blur)">
                                        <animateMotion
                                            dur={`${5 + i}s`}
                                            begin={`${i * 0.8}s`}
                                            repeatCount="indefinite"
                                            path={`M ${cx} ${cy} L ${x} ${y}`}
                                        />
                                        <animate
                                            attributeName="opacity"
                                            values="0;0.5;0"
                                            dur={`${5 + i}s`}
                                            begin={`${i * 0.8}s`}
                                            repeatCount="indefinite"
                                        />
                                    </circle>
                                </g>
                            )
                        })}

                        <path
                            d={`M ${cx - 240} ${cy} Q ${cx} ${cy - 90} ${cx + 240} ${cy}`}
                            fill="none"
                            stroke="#a78bfa"
                            strokeOpacity="0.08"
                            strokeWidth="0.8"
                        />
                        <path
                            d={`M ${cx - 240} ${cy} Q ${cx} ${cy + 90} ${cx + 240} ${cy}`}
                            fill="none"
                            stroke="#7aa2ff"
                            strokeOpacity="0.08"
                            strokeWidth="0.8"
                        />

                        <circle r="2.5" fill="#c4b5fd" filter="url(#blur)">
                            <animateMotion
                                dur="10s"
                                repeatCount="indefinite"
                                path={`M ${cx - 240} ${cy} Q ${cx} ${cy - 90} ${cx + 240} ${cy}`}
                            />
                            <animate attributeName="opacity" values="0;0.7;0" dur="10s" repeatCount="indefinite" />
                        </circle>
                        <circle r="2.5" fill="#7aa2ff" filter="url(#blur)">
                            <animateMotion
                                dur="12s"
                                begin="2s"
                                repeatCount="indefinite"
                                path={`M ${cx + 240} ${cy} Q ${cx} ${cy + 90} ${cx - 240} ${cy}`}
                            />
                            <animate attributeName="opacity" values="0;0.6;0" dur="12s" begin="2s" repeatCount="indefinite" />
                        </circle>
                    </g>

                    {edges.map(([a, b], i) => (
                        <line
                            key={i}
                            x1={nodes[a].x}
                            y1={nodes[a].y}
                            x2={nodes[b].x}
                            y2={nodes[b].y}
                            stroke="#ffffff"
                            strokeOpacity="0.05"
                            strokeWidth="1"
                        />
                    ))}
                    {edges.map(([a, b], i) => {
                        const x1 = nodes[a].x
                        const y1 = nodes[a].y
                        const x2 = nodes[b].x
                        const y2 = nodes[b].y
                        return (
                            <circle key={`p-${i}`} r="1.8" fill="#7aa2ff" filter="url(#blur)" opacity="0.7">
                                <animate
                                    attributeName="cx"
                                    from={x1}
                                    to={x2}
                                    dur={`${3 + (i % 4)}s`}
                                    begin={`${(i * 0.4) % 6}s`}
                                    repeatCount="indefinite"
                                />
                                <animate
                                    attributeName="cy"
                                    from={y1}
                                    to={y2}
                                    dur={`${3 + (i % 4)}s`}
                                    begin={`${(i * 0.4) % 6}s`}
                                    repeatCount="indefinite"
                                />
                                <animate
                                    attributeName="opacity"
                                    values="0;0.7;0"
                                    dur={`${3 + (i % 4)}s`}
                                    begin={`${(i * 0.4) % 6}s`}
                                    repeatCount="indefinite"
                                />
                            </circle>
                        )
                    })}
                    {nodes.map((node, i) => (
                        <g key={i}>
                            <circle cx={node.x} cy={node.y} r="14" fill="url(#glow)" opacity="0.15" />
                            <circle cx={node.x} cy={node.y} r="1.6" fill="#ffffff" fillOpacity="0.2" />
                        </g>
                    ))}
                </svg>

                <div className="absolute top-[3%] -left-1/4 w-250 h-250 rounded-full auto-glow-1" />
                <div className="absolute top-[5%] -right-1/4 w-250 h-250 rounded-full auto-glow-2" />
                <div className="absolute top-[55%] -left-1/4 w-225 h-225 rounded-full auto-glow-1" />
                <div className="absolute top-[80%] -right-1/4 w-225 h-225 rounded-full auto-glow-2" />
            </div>
            <style>{`
                @keyframes autoGlow1 {
                    0%, 100% { opacity: 0.2; transform: translate(0, 0); }
                    50% { opacity: 0.35; transform: translate(-60px, 40px); }
                }
                @keyframes autoGlow2 {
                    0%, 100% { opacity: 0.15; transform: translate(0, 0); }
                    50% { opacity: 0.3; transform: translate(60px, -40px); }
                }
                .auto-glow-1 {
                    background: radial-gradient(circle, rgba(167,139,250,0.07), transparent 70%);
                    animation: autoGlow1 24s ease-in-out infinite;
                }
                .auto-glow-2 {
                    background: radial-gradient(circle, rgba(122,162,255,0.05), transparent 70%);
                    animation: autoGlow2 28s ease-in-out infinite;
                }
            `}</style>

            <div className="relative z-10 pt-18">
                <div className="mobile-only">
                    <HeaderMobile />
                </div>
                <div className="desktop-only">
                    <HeaderDesktop />
                </div>
                <HeroAutomation />
                <CanBeDevelopedAutomation />
                <SolvingBusninessProblemsAutomation />
                <DevelopmentStagesAutomation />
                <HowWeWorkAutomation />
                <FAQandCTAByAutomation />
                <Footer />
            </div>
        </div>
    )
}