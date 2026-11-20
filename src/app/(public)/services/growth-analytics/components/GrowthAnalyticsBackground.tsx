'use client'

import { useThemeStore } from "@/store/targetThemeStore"

const darkColors = {
    svg: { opacity: 0.75 },
    areaStart: { stopColor: "#a78bfa", stopOpacity: 0.1 },
    areaEnd: { stopColor: "#a78bfa" },
    secondAreaStart: { stopColor: "#7aa2ff", stopOpacity: 0.08 },
    secondAreaEnd: { stopColor: "#7aa2ff" },
    lineStart: { stopColor: "#a78bfa" },
    lineMiddle: { stopColor: "#c4b5fd", stopOpacity: 0.35 },
    lineEnd: { stopColor: "#a78bfa" },
    secondLineStart: { stopColor: "#7aa2ff" },
    secondLineMiddle: { stopColor: "#7aa2ff", stopOpacity: 0.25 },
    secondLineEnd: { stopColor: "#7aa2ff" },
    dashboardGlowStart: { stopColor: "#c4b5fd", stopOpacity: 0.18 },
    dashboardGlowMiddle: { stopColor: "#a78bfa", stopOpacity: 0.05 },
    dashboardGlowEnd: { stopColor: "#a78bfa" },
    dashboardAreaStart: { stopColor: "#a78bfa", stopOpacity: 0.05 },
    dashboardAreaEnd: { stopColor: "#a78bfa" },
    dashboardLineStart: { stopColor: "#7aa2ff", stopOpacity: 0.18 },
    dashboardLineEnd: { stopColor: "#c4b5fd", stopOpacity: 0.3 },
    barStart: { stopColor: "#a78bfa", stopOpacity: 0.5 },
    barEnd: { stopColor: "#a78bfa", stopOpacity: 0.05 },
    axis: { stroke: "#a78bfa", strokeOpacity: 0.25 },
    verticalAxis: { stroke: "#a78bfa", strokeOpacity: 0.15 },
    grid: { stroke: "#a78bfa", strokeOpacity: 0.05 },
    dashboardBar: { opacity: 0.4 },
    dashboardBarPulse: { values: "0.4;0.6;0.4" },
    trendDotGlow: { fill: "#c4b5fd", opacity: 0.08 },
    trendDot: { fill: "#c4b5fd", fillOpacity: 0.4 },
    trendPulseDot: { fill: "#c4b5fd" },
    trendPulse: { values: "0.3;0;0.3" },
    trendArrow: { fill: "#c4b5fd", fillOpacity: 0.35 },
    gaugeTrack: { stroke: "#a78bfa", strokeOpacity: 0.12 },
    gaugeValue: { stroke: "#c4b5fd", strokeOpacity: 0.55 },
    outerGaugeRing: { stroke: "#7aa2ff", strokeOpacity: 0.1 },
    innerGaugeRing: { stroke: "#7aa2ff", strokeOpacity: 0.15 },
    gaugeCenter: { fill: "#c4b5fd", fillOpacity: 0.7 },
    dashboardParticle: { fill: "#c4b5fd", fillOpacity: 0.2 },
    dashboardParticlePulse: { values: "0.2;0.5;0.2" },
    dashboardTravelDot: { r: 2, fill: "#c4b5fd", opacity: 0.5 },
    dashboardTravelPulse: { values: "0;0.5;0.5;0" },
    horizontalGrid: { stroke: "#a78bfa", strokeOpacity: 0.035 },
    verticalGrid: { stroke: "#a78bfa", strokeOpacity: 0.025 },
    mainPointGlow: { fill: "#c4b5fd", opacity: 0.1 },
    mainPoint: { fill: "#c4b5fd", fillOpacity: 0.55 },
    firstBar: { fill: "#a78bfa", fillOpacity: 0.12 },
    secondBar: { fill: "#7aa2ff", fillOpacity: 0.1 },
    firstTrend: { stroke: "#c4b5fd", strokeOpacity: 0.18 },
    secondTrend: { stroke: "#c4b5fd", strokeOpacity: 0.12 },
    secondPointGlow: { fill: "#a78bfa", opacity: 0.08 },
    secondPoint: { fill: "#c4b5fd", fillOpacity: 0.5 },
    sparkline: { stroke: ["#7aa2ff","#a78bfa"], strokeOpacity: 0.28 },
    sparklinePoint: { fill: ["#7aa2ff","#c4b5fd"], fillOpacity: 0.6 },
    miniBar: { fill: "#7aa2ff", fillOpacity: 0.1 },
    firstDonut: { color: "#a78bfa" },
    secondDonut: { color: "#7aa2ff" },
    thirdDonut: { color: "#c4b5fd" },
    donutTrack: { stroke: "#a78bfa", strokeOpacity: 0.06 },
    donutValue: { strokeOpacity: 0.25 },
    outerDonutRing: { stroke: "#a78bfa", strokeOpacity: 0.04 },
    innerDonutRing: { stroke: "#a78bfa", strokeOpacity: 0.06 },
    firstTravelDot: { fill: "#c4b5fd", opacity: 0.65 },
    firstTravelPulse: { values: "0;0.65;0.65;0" },
    secondTravelDot: { fill: "#a5c0ff", opacity: 0.5 },
    sideTravelPulse: { values: "0;0.5;0.5;0" },
    thirdTravelDot: { fill: "#c4b5fd", opacity: 0.5 },
    firstGlowStart: { opacity: 0.25 },
    firstGlowPeak: { opacity: 0.45 },
    secondGlowStart: { opacity: 0.2 },
    secondGlowPeak: { opacity: 0.4 },
    firstGlow: { background: "radial-gradient(circle, rgba(167,139,250,0.08), transparent 70%)" },
    secondGlow: { background: "radial-gradient(circle, rgba(122,162,255,0.06), transparent 70%)" },
} as const

const lightColors = {
    svg: { opacity: 0.8 },
    areaStart: { stopColor: "#94A3B8", stopOpacity: 0.25 },
    areaEnd: { stopColor: "#94A3B8" },
    secondAreaStart: { stopColor: "#CBD5E1", stopOpacity: 0.2 },
    secondAreaEnd: { stopColor: "#CBD5E1" },
    lineStart: { stopColor: "#94A3B8" },
    lineMiddle: { stopColor: "#94A3B8", stopOpacity: 0.6 },
    lineEnd: { stopColor: "#94A3B8" },
    secondLineStart: { stopColor: "#CBD5E1" },
    secondLineMiddle: { stopColor: "#CBD5E1", stopOpacity: 0.5 },
    secondLineEnd: { stopColor: "#CBD5E1" },
    dashboardGlowStart: { stopColor: "#FFFFFF", stopOpacity: 0.4 },
    dashboardGlowMiddle: { stopColor: "#E2E8F0", stopOpacity: 0.15 },
    dashboardGlowEnd: { stopColor: "#E2E8F0" },
    dashboardAreaStart: { stopColor: "#94A3B8", stopOpacity: 0.15 },
    dashboardAreaEnd: { stopColor: "#94A3B8" },
    dashboardLineStart: { stopColor: "#CBD5E1", stopOpacity: 0.4 },
    dashboardLineEnd: { stopColor: "#FFFFFF", stopOpacity: 0.7 },
    barStart: { stopColor: "#94A3B8", stopOpacity: 0.7 },
    barEnd: { stopColor: "#94A3B8", stopOpacity: 0.1 },
    axis: { stroke: "#94A3B8", strokeOpacity: 0.4 },
    verticalAxis: { stroke: "#94A3B8", strokeOpacity: 0.3 },
    grid: { stroke: "#94A3B8", strokeOpacity: 0.15 },
    dashboardBar: { opacity: 0.6 },
    dashboardBarPulse: { values: "0.6;0.8;0.6" },
    trendDotGlow: { fill: "#FFFFFF", opacity: 0.25 },
    trendDot: { fill: "#FFFFFF", fillOpacity: 0.9 },
    trendPulseDot: { fill: "#CBD5E1" },
    trendPulse: { values: "0.6;0;0.6" },
    trendArrow: { fill: "#FFFFFF", fillOpacity: 0.8 },
    gaugeTrack: { stroke: "#94A3B8", strokeOpacity: 0.25 },
    gaugeValue: { stroke: "#FFFFFF", strokeOpacity: 0.9 },
    outerGaugeRing: { stroke: "#94A3B8", strokeOpacity: 0.2 },
    innerGaugeRing: { stroke: "#94A3B8", strokeOpacity: 0.3 },
    gaugeCenter: { fill: "#FFFFFF", fillOpacity: 0.9 },
    dashboardParticle: { fill: "#94A3B8", fillOpacity: 0.4 },
    dashboardParticlePulse: { values: "0.4;0.8;0.4" },
    dashboardTravelDot: { r: 2.5, fill: "#FFFFFF", opacity: 0.9 },
    dashboardTravelPulse: { values: "0;0.9;0.9;0" },
    horizontalGrid: { stroke: "#94A3B8", strokeOpacity: 0.08 },
    verticalGrid: { stroke: "#94A3B8", strokeOpacity: 0.06 },
    mainPointGlow: { fill: "#FFFFFF", opacity: 0.2 },
    mainPoint: { fill: "#FFFFFF", fillOpacity: 0.8 },
    firstBar: { fill: "#94A3B8", fillOpacity: 0.3 },
    secondBar: { fill: "#CBD5E1", fillOpacity: 0.2 },
    firstTrend: { stroke: "#94A3B8", strokeOpacity: 0.4 },
    secondTrend: { stroke: "#CBD5E1", strokeOpacity: 0.3 },
    secondPointGlow: { fill: "#FFFFFF", opacity: 0.2 },
    secondPoint: { fill: "#FFFFFF", fillOpacity: 0.8 },
    sparkline: { stroke: ["#CBD5E1","#94A3B8"], strokeOpacity: 0.5 },
    sparklinePoint: { fill: ["#CBD5E1","#FFFFFF"], fillOpacity: 0.9 },
    miniBar: { fill: "#94A3B8", fillOpacity: 0.25 },
    firstDonut: { color: "#94A3B8" },
    secondDonut: { color: "#FFFFFF" },
    thirdDonut: { color: "#CBD5E1" },
    donutTrack: { stroke: "#94A3B8", strokeOpacity: 0.15 },
    donutValue: { strokeOpacity: 0.6 },
    outerDonutRing: { stroke: "#94A3B8", strokeOpacity: 0.1 },
    innerDonutRing: { stroke: "#94A3B8", strokeOpacity: 0.15 },
    firstTravelDot: { fill: "#FFFFFF", opacity: 0.9 },
    firstTravelPulse: { values: "0;0.9;0.9;0" },
    secondTravelDot: { fill: "#CBD5E1", opacity: 0.8 },
    sideTravelPulse: { values: "0;0.8;0.8;0" },
    thirdTravelDot: { fill: "#FFFFFF", opacity: 0.8 },
    firstGlowStart: { opacity: 0.5 },
    firstGlowPeak: { opacity: 0.8 },
    secondGlowStart: { opacity: 0.4 },
    secondGlowPeak: { opacity: 0.7 },
    firstGlow: { background: "radial-gradient(circle, rgba(255,255,255,0.6), rgba(226,232,240,0.2) 45%, transparent 70%)" },
    secondGlow: { background: "radial-gradient(circle, rgba(203,213,225,0.4), transparent 70%)" },
} as const

export function GrowthAnalyticsBackground() {
    const isLight = useThemeStore((state) => state.targetTheme === 'Light')
    const colors = isLight ? lightColors : darkColors

    return (
        <>
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 1440 6000"
                    preserveAspectRatio="xMidYMin slice"
                    style={{ opacity: colors.svg.opacity }}
                >
                    <defs>
                        <linearGradient id="areaSoft" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={colors.areaStart.stopColor} stopOpacity={colors.areaStart.stopOpacity} />
                            <stop offset="100%" stopColor={colors.areaEnd.stopColor} stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="areaSoft2" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={colors.secondAreaStart.stopColor} stopOpacity={colors.secondAreaStart.stopOpacity} />
                            <stop offset="100%" stopColor={colors.secondAreaEnd.stopColor} stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="lineSoft" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor={colors.lineStart.stopColor} stopOpacity="0" />
                            <stop offset="50%" stopColor={colors.lineMiddle.stopColor} stopOpacity={colors.lineMiddle.stopOpacity} />
                            <stop offset="100%" stopColor={colors.lineEnd.stopColor} stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="lineSoftBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor={colors.secondLineStart.stopColor} stopOpacity="0" />
                            <stop offset="50%" stopColor={colors.secondLineMiddle.stopColor} stopOpacity={colors.secondLineMiddle.stopOpacity} />
                            <stop offset="100%" stopColor={colors.secondLineEnd.stopColor} stopOpacity="0" />
                        </linearGradient>
                        <radialGradient id="dashGlow">
                            <stop offset="0%" stopColor={colors.dashboardGlowStart.stopColor} stopOpacity={colors.dashboardGlowStart.stopOpacity} />
                            <stop offset="60%" stopColor={colors.dashboardGlowMiddle.stopColor} stopOpacity={colors.dashboardGlowMiddle.stopOpacity} />
                            <stop offset="100%" stopColor={colors.dashboardGlowEnd.stopColor} stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="dashArea" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={colors.dashboardAreaStart.stopColor} stopOpacity={colors.dashboardAreaStart.stopOpacity} />
                            <stop offset="100%" stopColor={colors.dashboardAreaEnd.stopColor} stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="dashLine" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor={colors.dashboardLineStart.stopColor} stopOpacity={colors.dashboardLineStart.stopOpacity} />
                            <stop offset="100%" stopColor={colors.dashboardLineEnd.stopColor} stopOpacity={colors.dashboardLineEnd.stopOpacity} />
                        </linearGradient>
                        <linearGradient id="barGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={colors.barStart.stopColor} stopOpacity={colors.barStart.stopOpacity} />
                            <stop offset="100%" stopColor={colors.barEnd.stopColor} stopOpacity={colors.barEnd.stopOpacity} />
                        </linearGradient>
                        <filter id="glowBg">
                            <feGaussianBlur stdDeviation="2.5" />
                        </filter>
                        <filter id="blurBig">
                            <feGaussianBlur stdDeviation="6" />
                        </filter>
                    </defs>

                    <g>
                        <ellipse cx="640" cy="400" rx="480" ry="240" fill="url(#dashGlow)" filter="url(#blurBig)" />

                        <line x1="240" y1="600" x2="1040" y2="600" stroke={colors.axis.stroke} strokeOpacity={colors.axis.strokeOpacity} strokeWidth="1" />
                        <line x1="240" y1="200" x2="240" y2="600" stroke={colors.verticalAxis.stroke} strokeOpacity={colors.verticalAxis.strokeOpacity} strokeWidth="1" />

                        {[280, 360, 440, 520].map((y, i) => (
                            <line key={`yt-${i}`} x1="232" y1={y} x2="248" y2={y} stroke={colors.axis.stroke} strokeOpacity={colors.axis.strokeOpacity} strokeWidth="1" />
                        ))}
                        {[340, 440, 540, 640, 740, 840, 940].map((x, i) => (
                            <line key={`xt-${i}`} x1={x} y1="600" x2={x} y2="612" stroke={colors.axis.stroke} strokeOpacity={colors.axis.strokeOpacity} strokeWidth="1" />
                        ))}

                        {[280, 360, 440, 520].map((y, i) => (
                            <line key={`hg-${i}`} x1="240" y1={y} x2="1040" y2={y} stroke={colors.grid.stroke} strokeOpacity={colors.grid.strokeOpacity} strokeWidth="0.8" strokeDasharray="2 6" />
                        ))}
                        {[340, 440, 540, 640, 740, 840, 940].map((x, i) => (
                            <line key={`vg-${i}`} x1={x} y1="200" x2={x} y2="600" stroke={colors.grid.stroke} strokeOpacity={colors.grid.strokeOpacity} strokeWidth="0.8" strokeDasharray="2 6" />
                        ))}

                        {[
                            { x: 280, h: 60 },
                            { x: 380, h: 105 },
                            { x: 480, h: 135 },
                            { x: 580, h: 170 },
                            { x: 680, h: 200 },
                            { x: 780, h: 240 },
                            { x: 880, h: 280 },
                            { x: 980, h: 320 },
                        ].map((bar, i) => (
                            <rect
                                key={`b-${i}`}
                                x={bar.x - 16}
                                y={600 - bar.h}
                                width="32"
                                height={bar.h}
                                rx="3"
                                fill="url(#barGrad)"
                                opacity={colors.dashboardBar.opacity}
                            >
                                <animate
                                    attributeName="opacity"
                                    values={colors.dashboardBarPulse.values}
                                    dur={`${3 + (i % 3)}s`}
                                    begin={`${i * 0.3}s`}
                                    repeatCount="indefinite"
                                />
                            </rect>
                        ))}

                        <path
                            d="M 240 520 L 340 480 L 440 440 L 540 380 L 640 340 L 740 280 L 840 240 L 940 200 L 1040 160 L 1040 600 L 240 600 Z"
                            fill="url(#dashArea)"
                        />

                        <path
                            d="M 240 520 L 340 480 L 440 440 L 540 380 L 640 340 L 740 280 L 840 240 L 940 200 L 1040 160"
                            stroke="url(#dashLine)"
                            strokeWidth="1.6"
                            fill="none"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        />

                        {[
                            { x: 340, y: 480, d: "0s" },
                            { x: 540, y: 380, d: "0.5s" },
                            { x: 740, y: 280, d: "1s" },
                            { x: 940, y: 200, d: "1.5s" },
                        ].map((p, i) => (
                            <g key={`dot-${i}`}>
                                <circle cx={p.x} cy={p.y} r="9" fill={colors.trendDotGlow.fill} opacity={colors.trendDotGlow.opacity} filter="url(#glowBg)" />
                                <circle cx={p.x} cy={p.y} r="2.5" fill={colors.trendDot.fill} fillOpacity={colors.trendDot.fillOpacity} />
                                <circle cx={p.x} cy={p.y} r="2.5" fill={colors.trendPulseDot.fill} opacity="0">
                                    <animate attributeName="r" values="2.5;9;2.5" dur="3s" begin={p.d} repeatCount="indefinite" />
                                    <animate attributeName="opacity" values={colors.trendPulse.values} dur="3s" begin={p.d} repeatCount="indefinite" />
                                </circle>
                            </g>
                        ))}

                        <g transform="translate(1050 148) rotate(-25)">
                            <path
                                d="M 0 0 L 22 -14 L 22 -6 L 42 -14 L 22 -22 L 22 -14 Z"
                                fill={colors.trendArrow.fill}
                                fillOpacity={colors.trendArrow.fillOpacity}
                            />
                        </g>

                        <g transform="translate(1160 340)">
                            <circle r="70" fill="none" stroke={colors.gaugeTrack.stroke} strokeOpacity={colors.gaugeTrack.strokeOpacity} strokeWidth="8" />
                            <circle
                                r="70"
                                fill="none"
                                stroke={colors.gaugeValue.stroke}
                                strokeOpacity={colors.gaugeValue.strokeOpacity}
                                strokeWidth="8"
                                strokeDasharray="180 440"
                                strokeLinecap="round"
                                transform="rotate(-90)"
                            >
                                <animate attributeName="stroke-dasharray" values="80 440;300 440;80 440" dur="6s" repeatCount="indefinite" />
                            </circle>
                            <circle r="48" fill="none" stroke={colors.outerGaugeRing.stroke} strokeOpacity={colors.outerGaugeRing.strokeOpacity} strokeWidth="1" />
                            <circle r="24" fill="none" stroke={colors.innerGaugeRing.stroke} strokeOpacity={colors.innerGaugeRing.strokeOpacity} strokeWidth="1" />
                            <circle r="5" fill={colors.gaugeCenter.fill} fillOpacity={colors.gaugeCenter.fillOpacity}>
                                <animate attributeName="r" values="5;8;5" dur="3s" repeatCount="indefinite" />
                            </circle>
                        </g>

                        {[
                            { x: 180, y: 300 }, { x: 380, y: 200 }, { x: 600, y: 250 },
                            { x: 800, y: 180 }, { x: 980, y: 380 }, { x: 200, y: 500 },
                        ].map((p, i) => (
                            <circle key={`f-${i}`} cx={p.x} cy={p.y} r="1.5" fill={colors.dashboardParticle.fill} fillOpacity={colors.dashboardParticle.fillOpacity}>
                                <animate attributeName="opacity" values={colors.dashboardParticlePulse.values} dur={`${3 + i}s`} begin={`${i * 0.4}s`} repeatCount="indefinite" />
                            </circle>
                        ))}

                        <circle r={colors.dashboardTravelDot.r} fill={colors.dashboardTravelDot.fill} filter="url(#glowBg)" opacity={colors.dashboardTravelDot.opacity}>
                            <animateMotion
                                dur="8s"
                                repeatCount="indefinite"
                                path="M 240 520 L 340 480 L 440 440 L 540 380 L 640 340 L 740 280 L 840 240 L 940 200 L 1040 160"
                            />
                            <animate attributeName="opacity" values={colors.dashboardTravelPulse.values} dur="8s" repeatCount="indefinite" />
                        </circle>
                    </g>

                    {Array.from({ length: 20 }).map((_, i) => (
                        <line key={`h-${i}`} x1="0" y1={i * 300} x2="1440" y2={i * 300} stroke={colors.horizontalGrid.stroke} strokeOpacity={colors.horizontalGrid.strokeOpacity} strokeWidth="1" />
                    ))}
                    {[200, 440, 680, 920, 1160, 1400].map((x, i) => (
                        <line key={`v-${i}`} x1={x} y1="0" x2={x} y2="6000" stroke={colors.verticalGrid.stroke} strokeOpacity={colors.verticalGrid.strokeOpacity} strokeWidth="1" />
                    ))}

                    <path
                        d="M -50 900 L 180 780 L 400 700 L 620 620 L 840 520 L 1060 440 L 1280 340 L 1500 280 L 1500 1200 L -50 1200 Z"
                        fill="url(#areaSoft)"
                    />
                    <path
                        d="M -50 900 L 180 780 L 400 700 L 620 620 L 840 520 L 1060 440 L 1280 340 L 1500 280"
                        stroke="url(#lineSoft)"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M -50 1050 L 200 1000 L 420 940 L 660 860 L 880 800 L 1100 720 L 1320 660 L 1500 620"
                        stroke="url(#lineSoftBlue)"
                        strokeWidth="1.2"
                        fill="none"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M -50 1120 L 220 1080 L 460 1020 L 700 980 L 940 900 L 1180 860 L 1420 800 L 1500 780"
                        stroke="url(#lineSoft)"
                        strokeWidth="1"
                        fill="none"
                        strokeLinejoin="round"
                        opacity="0.7"
                    />

                    {[
                        { x: 400, y: 700 }, { x: 620, y: 620 }, { x: 840, y: 520 },
                        { x: 1060, y: 440 }, { x: 1280, y: 340 },
                    ].map((p, i) => (
                        <g key={`p1-${i}`}>
                            <circle cx={p.x} cy={p.y} r="12" fill={colors.mainPointGlow.fill} opacity={colors.mainPointGlow.opacity} filter="url(#glowBg)" />
                            <circle cx={p.x} cy={p.y} r="2.2" fill={colors.mainPoint.fill} fillOpacity={colors.mainPoint.fillOpacity} />
                        </g>
                    ))}

                    <g opacity="0.7">
                        {Array.from({ length: 18 }).map((_, i) => {
                            const x = 30 + i * 80
                            const h1 = [140, 180, 160, 220, 200, 260, 240, 280, 260, 320, 300, 340, 320, 380, 360, 400, 380, 420][i]
                            const h2 = [100, 120, 110, 150, 140, 180, 170, 210, 200, 240, 220, 260, 250, 290, 280, 320, 310, 340][i]
                            return (
                                <g key={i}>
                                    <rect x={x} y={1950 - h1} width="20" height={h1} rx="2" fill={colors.firstBar.fill} fillOpacity={colors.firstBar.fillOpacity} />
                                    <rect x={x + 24} y={1950 - h2} width="20" height={h2} rx="2" fill={colors.secondBar.fill} fillOpacity={colors.secondBar.fillOpacity} />
                                </g>
                            )
                        })}
                    </g>

                    <path
                        d="M 30 1810 L 190 1770 L 350 1790 L 510 1730 L 670 1750 L 830 1690 L 990 1710 L 1150 1650 L 1310 1670 L 1450 1610"
                        stroke={colors.firstTrend.stroke}
                        strokeOpacity={colors.firstTrend.strokeOpacity}
                        strokeWidth="1.2"
                        fill="none"
                        strokeLinejoin="round"
                    />

                    <path
                        d="M -50 2500 L 150 2420 L 380 2560 L 620 2380 L 860 2520 L 1100 2340 L 1340 2460 L 1500 2380"
                        stroke="url(#lineSoft)"
                        strokeWidth="1.3"
                        fill="none"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M -50 2900 L 180 2960 L 420 2840 L 660 2920 L 900 2780 L 1140 2860 L 1380 2740 L 1500 2780"
                        stroke="url(#lineSoftBlue)"
                        strokeWidth="1.2"
                        fill="none"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M -50 3200 L 200 3130 L 460 3220 L 720 3080 L 980 3170 L 1240 3040 L 1500 3120"
                        stroke={colors.secondTrend.stroke}
                        strokeOpacity={colors.secondTrend.strokeOpacity}
                        strokeWidth="1"
                        fill="none"
                        strokeLinejoin="round"
                    />

                    {[200, 480, 760, 1040, 1320].map((x, i) => (
                        <line
                            key={`mk-${i}`}
                            x1={x}
                            y1="2300"
                            x2={x}
                            y2="3300"
                            stroke={colors.grid.stroke}
                            strokeOpacity={colors.grid.strokeOpacity}
                            strokeWidth="1"
                            strokeDasharray="2 8"
                        />
                    ))}

                    {[
                        { x: 380, y: 2560 }, { x: 860, y: 2520 }, { x: 1340, y: 2460 },
                        { x: 420, y: 2840 }, { x: 900, y: 2780 }, { x: 1380, y: 2740 },
                    ].map((p, i) => (
                        <g key={`x-${i}`}>
                            <circle cx={p.x} cy={p.y} r="10" fill={colors.secondPointGlow.fill} opacity={colors.secondPointGlow.opacity} filter="url(#glowBg)" />
                            <circle cx={p.x} cy={p.y} r="1.8" fill={colors.secondPoint.fill} fillOpacity={colors.secondPoint.fillOpacity} />
                        </g>
                    ))}

                    {[
                        { ox: 80, d: "M 0 200 L 40 180 L 80 190 L 120 160 L 160 170 L 200 130 L 240 150 L 280 110 L 320 120 L 360 80 L 400 90 L 440 50" },
                        { ox: 560, d: "M 0 180 L 40 195 L 80 170 L 120 185 L 160 150 L 200 165 L 240 130 L 280 145 L 320 100 L 360 115 L 400 80 L 440 95" },
                        { ox: 1040, d: "M 0 190 L 40 175 L 80 185 L 120 165 L 160 180 L 200 145 L 240 155 L 280 120 L 320 130 L 360 95 L 400 110 L 440 70" },
                    ].map((chart, i) => (
                        <g key={i} transform={`translate(${chart.ox}, 3700)`}>
                            <path
                                d={chart.d}
                                stroke={colors.sparkline.stroke[i === 1 ? 0 : 1]}
                                strokeOpacity={colors.sparkline.strokeOpacity}
                                strokeWidth="1.2"
                                fill="none"
                                strokeLinejoin="round"
                            />
                            <circle cx="440" cy={parseInt(chart.d.split(" ").slice(-1)[0])} r="2.5" fill={colors.sparklinePoint.fill[i === 1 ? 0 : 1]} fillOpacity={colors.sparklinePoint.fillOpacity} />
                        </g>
                    ))}

                    <g opacity="0.6">
                        {Array.from({ length: 12 }).map((_, i) => {
                            const x = 100 + i * 105
                            const h = [60, 90, 70, 110, 85, 130, 100, 150, 120, 170, 140, 190][i]
                            return (
                                <rect key={i} x={x} y={4350 - h} width="18" height={h} rx="2" fill={colors.miniBar.fill} fillOpacity={colors.miniBar.fillOpacity} />
                            )
                        })}
                    </g>

                    {[
                        { cx: 240, cy: 5100, dash: "180 377", color: colors.firstDonut.color },
                        { cx: 720, cy: 5100, dash: "220 377", color: colors.secondDonut.color },
                        { cx: 1200, cy: 5100, dash: "140 377", color: colors.thirdDonut.color },
                    ].map((c, i) => (
                        <g key={i}>
                            <circle cx={c.cx} cy={c.cy} r="70" fill="none" stroke={colors.donutTrack.stroke} strokeOpacity={colors.donutTrack.strokeOpacity} strokeWidth="10" />
                            <circle
                                cx={c.cx}
                                cy={c.cy}
                                r="70"
                                fill="none"
                                stroke={c.color}
                                strokeOpacity={colors.donutValue.strokeOpacity}
                                strokeWidth="10"
                                strokeDasharray={c.dash}
                                strokeLinecap="round"
                                transform={`rotate(-90 ${c.cx} ${c.cy})`}
                            />
                            <circle cx={c.cx} cy={c.cy} r="50" fill="none" stroke={colors.outerDonutRing.stroke} strokeOpacity={colors.outerDonutRing.strokeOpacity} strokeWidth="1" />
                            <circle cx={c.cx} cy={c.cy} r="30" fill="none" stroke={colors.innerDonutRing.stroke} strokeOpacity={colors.innerDonutRing.strokeOpacity} strokeWidth="1" />
                        </g>
                    ))}

                    <path
                        d="M -50 5600 L 200 5520 L 480 5580 L 760 5480 L 1040 5540 L 1320 5460 L 1500 5500"
                        stroke="url(#lineSoft)"
                        strokeWidth="1.2"
                        fill="none"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M -50 5800 L 240 5760 L 480 5790 L 720 5720 L 960 5750 L 1200 5680 L 1440 5700 L 1500 5690"
                        stroke="url(#lineSoftBlue)"
                        strokeWidth="1.2"
                        fill="none"
                        strokeLinejoin="round"
                    />

                    <circle r="2.5" fill={colors.firstTravelDot.fill} opacity={colors.firstTravelDot.opacity} filter="url(#glowBg)">
                        <animateMotion
                            dur="14s"
                            repeatCount="indefinite"
                            path="M -50 900 L 180 780 L 400 700 L 620 620 L 840 520 L 1060 440 L 1280 340 L 1500 280"
                        />
                        <animate attributeName="opacity" values={colors.firstTravelPulse.values} dur="14s" repeatCount="indefinite" />
                    </circle>
                    <circle r="2" fill={colors.secondTravelDot.fill} opacity={colors.secondTravelDot.opacity} filter="url(#glowBg)">
                        <animateMotion
                            dur="22s"
                            repeatCount="indefinite"
                            begin="4s"
                            path="M -50 2500 L 150 2420 L 380 2560 L 620 2380 L 860 2520 L 1100 2340 L 1340 2460 L 1500 2380"
                        />
                        <animate attributeName="opacity" values={colors.sideTravelPulse.values} dur="22s" begin="4s" repeatCount="indefinite" />
                    </circle>
                    <circle r="2" fill={colors.thirdTravelDot.fill} opacity={colors.thirdTravelDot.opacity} filter="url(#glowBg)">
                        <animateMotion
                            dur="28s"
                            repeatCount="indefinite"
                            begin="8s"
                            path="M -50 5600 L 200 5520 L 480 5580 L 760 5480 L 1040 5540 L 1320 5460 L 1500 5500"
                        />
                        <animate attributeName="opacity" values={colors.sideTravelPulse.values} dur="28s" begin="8s" repeatCount="indefinite" />
                    </circle>
                </svg>

                <div className="absolute top-[10%] -right-1/4 w-250 h-250 rounded-full growth-glow" />
                <div className="absolute top-[40%] -left-1/4 w-225 h-225 rounded-full growth-glow-2" />
                <div className="absolute top-[70%] -right-1/4 w-250 h-250 rounded-full growth-glow" />
                <div className="absolute bottom-[5%] -left-1/4 w-225 h-225 rounded-full growth-glow-2" />
            </div>
            <style>{`
                @keyframes growthGlow {
                    0%, 100% { opacity: ${colors.firstGlowStart.opacity}; transform: translate(0, 0); }
                    50% { opacity: ${colors.firstGlowPeak.opacity}; transform: translate(-60px, 40px); }
                }
                @keyframes growthGlow2 {
                    0%, 100% { opacity: ${colors.secondGlowStart.opacity}; transform: translate(0, 0); }
                    50% { opacity: ${colors.secondGlowPeak.opacity}; transform: translate(60px, -40px); }
                }
                .growth-glow {
                    background: ${colors.firstGlow.background};
                    animation: growthGlow 24s ease-in-out infinite;
                }
                .growth-glow-2 {
                    background: ${colors.secondGlow.background};
                    animation: growthGlow2 28s ease-in-out infinite;
                }
            `}</style>
        </>
    )
}
