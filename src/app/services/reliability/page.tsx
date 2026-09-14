'use client'

import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { HeroReliability } from "./components/HeroReliability";
import { CanBeDevelopedReliability } from "./components/CanBeDevelopedReliability";
import { SolvingBusninessProblemsReliability } from "./components/SolvingBusninessProblemsReliability";
import { DevelopmentStagesReliability } from "./components/DevelopmentStagesReliability";
import { HowWeWorkReliability } from "./components/HowWeWorkReliability";
import { FAQandCTAByReliability } from "./components/FAQandCTAByReliability";
import { Footer } from "@/components/layout/footer/Footer";
import { WhatCanWeCheckSpecifically } from "./components/WhatCanWeCheckSpecifically";

export default function servicesReliability() {
    return (
        <div className="relative min-h-screen bg-[#050505]">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute inset-0 reliability-grid-base"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(167,139,250,0.06) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(167,139,250,0.06) 1px, transparent 1px)
                        `,
                        backgroundSize: "70px 70px",
                    }}
                />

                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(167,139,250,0.12) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(167,139,250,0.12) 1px, transparent 1px)
                        `,
                        backgroundSize: "350px 350px",
                    }}
                />

                <div className="reliability-glow-1 absolute -top-1/4 -left-1/4 w-225 h-225 rounded-full" />
                <div className="reliability-glow-2 absolute -bottom-1/4 -right-1/4 w-225 h-225 rounded-full" />
                <div className="reliability-glow-3 absolute top-1/2 left-1/2 w-300 h-300 rounded-full -translate-x-1/2 -translate-y-1/2" />

                <div className="reliability-scan reliability-scan-1 absolute inset-x-0 h-100" />
                <div className="reliability-scan reliability-scan-2 absolute inset-x-0 h-100" />
                <div className="reliability-scan reliability-scan-3 absolute inset-x-0 h-100" />
                <div className="reliability-scan reliability-scan-4 absolute inset-x-0 h-100" />
            </div>
            <style>{`
                @keyframes reliabilityGlow1 {
                    0%, 100% { transform: translate(0, 0); opacity: 0.5; }
                    50% { transform: translate(120px, 80px); opacity: 0.9; }
                }
                @keyframes reliabilityGlow2 {
                    0%, 100% { transform: translate(0, 0); opacity: 0.5; }
                    50% { transform: translate(-120px, -80px); opacity: 0.9; }
                }
                @keyframes reliabilityGlow3 {
                    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
                    50% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.7; }
                }
                @keyframes reliabilityScan {
                    0% { top: -400px; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
                @keyframes reliabilityGridPulse {
                    0%, 100% { opacity: 0.85; }
                    50% { opacity: 1; }
                }
                .reliability-grid-base {
                    animation: reliabilityGridPulse 8s ease-in-out infinite;
                }
                .reliability-glow-1 {
                    background: radial-gradient(circle, rgba(167,139,250,0.10), transparent 65%);
                    animation: reliabilityGlow1 18s ease-in-out infinite;
                }
                .reliability-glow-2 {
                    background: radial-gradient(circle, rgba(122,162,255,0.08), transparent 65%);
                    animation: reliabilityGlow2 22s ease-in-out infinite;
                }
                .reliability-glow-3 {
                    background: radial-gradient(circle, rgba(167,139,250,0.05), transparent 60%);
                    animation: reliabilityGlow3 14s ease-in-out infinite;
                }
                .reliability-scan {
                    top: -400px;
                    opacity: 0;
                    background: linear-gradient(
                        to bottom,
                        transparent,
                        rgba(167,139,250,0.04),
                        rgba(167,139,250,0.08),
                        rgba(167,139,250,0.04),
                        transparent
                    );
                    animation: reliabilityScan 14s linear infinite;
                }
                .reliability-scan-1 { animation-delay: 0s; }
                .reliability-scan-2 { animation-delay: 3.5s; }
                .reliability-scan-3 { animation-delay: 7s; }
                .reliability-scan-4 { animation-delay: 10.5s; }
            `}</style>
            <div className="relative z-10 pt-18">
                <div className="mobile-only">
                    <HeaderMobile />
                </div>
                <div className="desktop-only">
                    <HeaderDesktop />
                </div>
                <HeroReliability />
                <CanBeDevelopedReliability />
                <SolvingBusninessProblemsReliability />
                <DevelopmentStagesReliability />
                <HowWeWorkReliability />
                <WhatCanWeCheckSpecifically />
                <FAQandCTAByReliability />
                <Footer />
            </div>
        </div>
    )
}