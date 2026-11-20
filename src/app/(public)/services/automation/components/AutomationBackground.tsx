'use client'

import { useThemeStore } from "@/store/targetThemeStore"

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
    { angle: -90, r: 200, size: 44 },
    { angle: 0, r: 240, size: 38 },
    { angle: 90, r: 200, size: 44 },
    { angle: 180, r: 240, size: 38 },
]

const darkColors = {
    glow: [["0%", "#7aa2ff", 0.3], ["100%", "#7aa2ff", 0]],
    hubSoft: [["0%", "#c4b5fd", 0.18], ["60%", "#a78bfa", 0.05], ["100%", "#a78bfa", 0]],
    satGlow: [["0%", "#a78bfa", 0.25], ["100%", "#a78bfa", 0]],
    satGlowBlue: [["0%", "#7aa2ff", 0.22], ["100%", "#7aa2ff", 0]],
    violetOrbit: "#a78bfa",
    blueOrbit: "#7aa2ff",
    outerOrbitOpacity: 0.15,
    dashedOrbitOpacity: 0.1,
    innerOrbitOpacity: 0.08,
    coreColor: "#c4b5fd",
    coreRingOpacity: 0.25,
    coreOpacity: 0.45,
    corePulse: "0.45;0.2;0.45",
    satelliteColors: ["#a78bfa", "#7aa2ff"],
    satelliteGlows: ["satGlow", "satGlowBlue"],
    satelliteFill: "#0a0a0a",
    satelliteLinkOpacity: 0.18,
    satelliteOutlineOpacity: 0.35,
    satelliteInsetOpacity: 0.15,
    satelliteDotOpacity: 0.6,
    travelPulse: "0;0.7;0",
    returnPulse: "0;0.5;0",
    arcOpacity: 0.08,
    blueArcOpacity: 0.08,
    arcParticle: "#c4b5fd",
    blueArcPulse: "0;0.6;0",
    edgeColor: "#ffffff",
    edgeOpacity: 0.05,
    edgeParticle: "#7aa2ff",
    edgeParticleOpacity: 0.7,
    nodeGlowOpacity: 0.15,
    nodeDotOpacity: 0.2,
} as const

const lightColors = {
    glow: [["0%", "#94A3B8", 0.35], ["100%", "#94A3B8", 0]],
    hubSoft: [["0%", "#F8FAFC", 0.6], ["60%", "#E2E8F0", 0.25], ["100%", "#E2E8F0", 0]],
    satGlow: [["0%", "#CBD5E1", 0.35], ["100%", "#CBD5E1", 0]],
    satGlowBlue: [["0%", "#94A3B8", 0.3], ["100%", "#94A3B8", 0]],
    violetOrbit: "#94A3B8",
    blueOrbit: "#CBD5E1",
    outerOrbitOpacity: 0.25,
    dashedOrbitOpacity: 0.18,
    innerOrbitOpacity: 0.25,
    coreColor: "#FFFFFF",
    coreRingOpacity: 0.9,
    coreOpacity: 0.95,
    corePulse: "0.95;0.6;0.95",
    satelliteColors: ["#94A3B8", "#CBD5E1"],
    satelliteGlows: ["satGlowBlue", "satGlow"],
    satelliteFill: "#F8FAFC",
    satelliteLinkOpacity: 0.35,
    satelliteOutlineOpacity: 0.6,
    satelliteInsetOpacity: 0.3,
    satelliteDotOpacity: 0.85,
    travelPulse: "0;0.9;0",
    returnPulse: "0;0.7;0",
    arcOpacity: 0.18,
    blueArcOpacity: 0.22,
    arcParticle: "#94A3B8",
    blueArcPulse: "0;0.8;0",
    edgeColor: "#94A3B8",
    edgeOpacity: 0.18,
    edgeParticle: "#94A3B8",
    edgeParticleOpacity: 0.85,
    nodeGlowOpacity: 0.5,
    nodeDotOpacity: 0.95,
} as const

export function AutomationBackground() {
    const isLight = useThemeStore((state) => state.targetTheme === 'Light')
    const colors = isLight ? lightColors : darkColors

    return (
        <>
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 1280 3600"
                    preserveAspectRatio="xMidYMin slice"
                    style={{ opacity: 0.65 }}
                >
                    <defs>
                        <radialGradient id="glow">
                            {colors.glow.map(([offset, stopColor, stopOpacity]) => (
                                <stop key={offset} offset={offset} stopColor={stopColor} stopOpacity={stopOpacity} />
                            ))}
                        </radialGradient>
                        <radialGradient id="hubSoft">
                            {colors.hubSoft.map(([offset, stopColor, stopOpacity]) => (
                                <stop key={offset} offset={offset} stopColor={stopColor} stopOpacity={stopOpacity} />
                            ))}
                        </radialGradient>
                        <radialGradient id="satGlow">
                            {colors.satGlow.map(([offset, stopColor, stopOpacity]) => (
                                <stop key={offset} offset={offset} stopColor={stopColor} stopOpacity={stopOpacity} />
                            ))}
                        </radialGradient>
                        <radialGradient id="satGlowBlue">
                            {colors.satGlowBlue.map(([offset, stopColor, stopOpacity]) => (
                                <stop key={offset} offset={offset} stopColor={stopColor} stopOpacity={stopOpacity} />
                            ))}
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

                        <circle cx={cx} cy={cy} r="130" fill="none" stroke={colors.violetOrbit} strokeOpacity={colors.outerOrbitOpacity} strokeWidth="1" />
                        <circle cx={cx} cy={cy} r="170" fill="none" stroke={colors.violetOrbit} strokeOpacity={colors.dashedOrbitOpacity} strokeWidth="0.8" strokeDasharray="2 8" />
                        <circle cx={cx} cy={cy} r="90" fill="none" stroke={colors.blueOrbit} strokeOpacity={colors.innerOrbitOpacity} strokeWidth="0.6" />

                        <circle cx={cx} cy={cy} r="20" fill="none" stroke={colors.coreColor} strokeOpacity={colors.coreRingOpacity} strokeWidth="1" />
                        <circle cx={cx} cy={cy} r="6" fill={colors.coreColor} fillOpacity={colors.coreOpacity}>
                            <animate attributeName="r" values="6;9;6" dur="4s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values={colors.corePulse} dur="4s" repeatCount="indefinite" />
                        </circle>

                        {satellites.map((sat, i) => {
                            const rad = (sat.angle * Math.PI) / 180
                            const x = cx + Math.cos(rad) * sat.r
                            const y = cy + Math.sin(rad) * sat.r
                            const color = colors.satelliteColors[i % 2]
                            const glowId = colors.satelliteGlows[i % 2]
                            return (
                                <g key={`sat-${i}`}>
                                    <line
                                        x1={cx + Math.cos(rad) * 30}
                                        y1={cy + Math.sin(rad) * 30}
                                        x2={x - Math.cos(rad) * (sat.size / 2)}
                                        y2={y - Math.sin(rad) * (sat.size / 2)}
                                        stroke={color}
                                        strokeOpacity={colors.satelliteLinkOpacity}
                                        strokeWidth="1"
                                        strokeDasharray="3 5"
                                    />
                                    <circle cx={x} cy={y} r={sat.size * 0.9} fill={`url(#${glowId})`} filter="url(#blurSoft)" />
                                    <circle cx={x} cy={y} r={sat.size / 2} fill={colors.satelliteFill} stroke={color} strokeOpacity={colors.satelliteOutlineOpacity} strokeWidth="1" />
                                    <circle cx={x} cy={y} r={sat.size / 2 - 6} fill="none" stroke={color} strokeOpacity={colors.satelliteInsetOpacity} strokeWidth="0.6" />
                                    <circle cx={x} cy={y} r="3" fill={color} fillOpacity={colors.satelliteDotOpacity} />
                                    <circle r="2" fill={color} filter="url(#blur)">
                                        <animateMotion
                                            dur={`${4 + i}s`}
                                            begin={`${i * 0.6}s`}
                                            repeatCount="indefinite"
                                            path={`M ${x} ${y} L ${cx} ${cy}`}
                                        />
                                        <animate
                                            attributeName="opacity"
                                            values={colors.travelPulse}
                                            dur={`${4 + i}s`}
                                            begin={`${i * 0.6}s`}
                                            repeatCount="indefinite"
                                        />
                                    </circle>
                                    <circle r="1.8" fill={color} filter="url(#blur)">
                                        <animateMotion
                                            dur={`${5 + i}s`}
                                            begin={`${i * 0.8}s`}
                                            repeatCount="indefinite"
                                            path={`M ${cx} ${cy} L ${x} ${y}`}
                                        />
                                        <animate
                                            attributeName="opacity"
                                            values={colors.returnPulse}
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
                            stroke={colors.violetOrbit}
                            strokeOpacity={colors.arcOpacity}
                            strokeWidth="0.8"
                        />
                        <path
                            d={`M ${cx - 240} ${cy} Q ${cx} ${cy + 90} ${cx + 240} ${cy}`}
                            fill="none"
                            stroke={colors.blueOrbit}
                            strokeOpacity={colors.blueArcOpacity}
                            strokeWidth="0.8"
                        />

                        <circle r="2.5" fill={colors.arcParticle} filter="url(#blur)">
                            <animateMotion
                                dur="10s"
                                repeatCount="indefinite"
                                path={`M ${cx - 240} ${cy} Q ${cx} ${cy - 90} ${cx + 240} ${cy}`}
                            />
                            <animate attributeName="opacity" values={colors.travelPulse} dur="10s" repeatCount="indefinite" />
                        </circle>
                        <circle r="2.5" fill={colors.blueOrbit} filter="url(#blur)">
                            <animateMotion
                                dur="12s"
                                begin="2s"
                                repeatCount="indefinite"
                                path={`M ${cx + 240} ${cy} Q ${cx} ${cy + 90} ${cx - 240} ${cy}`}
                            />
                            <animate attributeName="opacity" values={colors.blueArcPulse} dur="12s" begin="2s" repeatCount="indefinite" />
                        </circle>
                    </g>

                    {edges.map(([a, b], i) => (
                        <line
                            key={i}
                            x1={nodes[a].x}
                            y1={nodes[a].y}
                            x2={nodes[b].x}
                            y2={nodes[b].y}
                            stroke={colors.edgeColor}
                            strokeOpacity={colors.edgeOpacity}
                            strokeWidth="1"
                        />
                    ))}
                    {edges.map(([a, b], i) => {
                        const x1 = nodes[a].x
                        const y1 = nodes[a].y
                        const x2 = nodes[b].x
                        const y2 = nodes[b].y
                        return (
                            <circle key={`p-${i}`} r="1.8" fill={colors.edgeParticle} filter="url(#blur)" opacity={colors.edgeParticleOpacity}>
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
                                    values={colors.travelPulse}
                                    dur={`${3 + (i % 4)}s`}
                                    begin={`${(i * 0.4) % 6}s`}
                                    repeatCount="indefinite"
                                />
                            </circle>
                        )
                    })}
                    {nodes.map((node, i) => (
                        <g key={i}>
                            <circle cx={node.x} cy={node.y} r="14" fill="url(#glow)" opacity={colors.nodeGlowOpacity} />
                            <circle cx={node.x} cy={node.y} r="1.6" fill="#ffffff" fillOpacity={colors.nodeDotOpacity} />
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
                    0%, 100% { opacity: var(--auto-glow-rest); transform: translate(0, 0); }
                    50% { opacity: var(--auto-glow-peak); transform: translate(-60px, 40px); }
                }
                @keyframes autoGlow2 {
                    0%, 100% { opacity: var(--auto-glow-rest); transform: translate(0, 0); }
                    50% { opacity: var(--auto-glow-peak); transform: translate(60px, -40px); }
                }
                .auto-glow-1 {
                    --auto-glow-rest: 0.2;
                    --auto-glow-peak: 0.35;
                    background: radial-gradient(circle, rgba(167,139,250,0.07), transparent 70%);
                    animation: autoGlow1 24s ease-in-out infinite;
                }
                .auto-glow-2 {
                    --auto-glow-rest: 0.15;
                    --auto-glow-peak: 0.3;
                    background: radial-gradient(circle, rgba(122,162,255,0.05), transparent 70%);
                    animation: autoGlow2 28s ease-in-out infinite;
                }
                .light .auto-glow-1 {
                    --auto-glow-rest: 0.5;
                    --auto-glow-peak: 0.75;
                    background: radial-gradient(circle, rgba(255,255,255,0.55), rgba(226,232,240,0.15) 45%, transparent 70%);
                }
                .light .auto-glow-2 {
                    --auto-glow-rest: 0.45;
                    --auto-glow-peak: 0.7;
                    background: radial-gradient(circle, rgba(203,213,225,0.35), transparent 70%);
                }
            `}</style>
        </>
    )
}
