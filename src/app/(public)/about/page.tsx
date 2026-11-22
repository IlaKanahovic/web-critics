import type { Metadata } from "next"
import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop"
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile"
import { AboutHero } from "./components/AboutHero"
import { AllBeganAbout } from "./components/AllBeganAbout"
import { AgencyAbout } from "./components/AgencyAbout"
import { SolutionsAbout } from "./components/SolutionsAbout"
import { ToolsAbout } from "./components/ToolsAbout"
import { PersonalizedApproachAbout } from "./components/PersonalizedApproachAbout"
import { DevelopmentAbout } from "./components/DevelopmentAbout"
import { GoodSolutionAbout } from "./components/GoodSolutionAbout"
import { BeforeAfterAbout } from "./components/BeforeAfterAbout"
import { AlsoOnTheSiteAbout } from "./components/AlsoOnTheSiteAbout"
import { CTAabout } from "./components/CTAabout"
import { Footer } from "@/components/layout/footer/Footer"

export const metadata: Metadata = {
    title: "О команде и подходе к разработке",
    description: "Как WebCRitics разбирается в задачах бизнеса, выбирает решение и доводит разработку до запуска. Узнайте о команде, инструментах и подходе к работе.",
    alternates: { canonical: "/about" },
}

export default function About() {
    return (
        <div className="relative min-h-screen bg-[#050505] light:bg-canvas overflow-hidden" style={{ isolation: "isolate" }}>
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="about-blob about-blob-1" />
                <div className="about-blob about-blob-2" />
                <div className="about-blob about-blob-3" />
                <div className="about-blob about-blob-4" />
                <div className="about-blob about-blob-5" />

                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 6000" preserveAspectRatio="xMidYMin slice">
                    <defs>
                        <linearGradient id="aboutArc" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0" />
                            <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    <ellipse cx="720" cy="800" rx="700" ry="200" fill="none" stroke="url(#aboutArc)" strokeWidth="0.8" strokeDasharray="3 12" />
                    <ellipse cx="720" cy="800" rx="500" ry="140" fill="none" stroke="url(#aboutArc)" strokeWidth="0.8" strokeDasharray="3 12" />

                    <ellipse cx="400" cy="2400" rx="600" ry="180" fill="none" stroke="url(#aboutArc)" strokeWidth="0.8" strokeDasharray="3 12" />
                    <ellipse cx="400" cy="2400" rx="400" ry="120" fill="none" stroke="url(#aboutArc)" strokeWidth="0.8" strokeDasharray="3 12" />

                    <ellipse cx="1100" cy="4200" rx="650" ry="190" fill="none" stroke="url(#aboutArc)" strokeWidth="0.8" strokeDasharray="3 12" />
                    <ellipse cx="1100" cy="4200" rx="450" ry="130" fill="none" stroke="url(#aboutArc)" strokeWidth="0.8" strokeDasharray="3 12" />
                </svg>

                <div
                    className="absolute inset-0 about-grain"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                        backgroundSize: "220px 220px",
                    }}
                />

                <div className="absolute inset-0 about-vignette" />
            </div>
            <style>{`
                @keyframes aboutBlob1 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(120px, 80px) scale(1.15); }
                }
                @keyframes aboutBlob2 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-140px, 100px) scale(1.1); }
                }
                @keyframes aboutBlob3 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(80px, -120px) scale(1.2); }
                }
                @keyframes aboutBlob4 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-100px, -80px) scale(1.08); }
                }
                @keyframes aboutBlob5 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(60px, 140px) scale(1.12); }
                }
                .about-blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(120px);
                    will-change: transform;
                }
                .about-blob-1 {
                    top: 5%;
                    left: 10%;
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(167,139,250,0.35), transparent 65%);
                    animation: aboutBlob1 28s ease-in-out infinite;
                }
                .about-blob-2 {
                    top: 25%;
                    right: 5%;
                    width: 700px;
                    height: 700px;
                    background: radial-gradient(circle, rgba(122,162,255,0.3), transparent 65%);
                    animation: aboutBlob2 34s ease-in-out infinite;
                }
                .about-blob-3 {
                    top: 55%;
                    left: 20%;
                    width: 550px;
                    height: 550px;
                    background: radial-gradient(circle, rgba(196,181,253,0.28), transparent 65%);
                    animation: aboutBlob3 30s ease-in-out infinite;
                }
                .about-blob-4 {
                    top: 75%;
                    right: 15%;
                    width: 650px;
                    height: 650px;
                    background: radial-gradient(circle, rgba(167,139,250,0.3), transparent 65%);
                    animation: aboutBlob4 36s ease-in-out infinite;
                }
                .about-blob-5 {
                    top: 40%;
                    right: 40%;
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(122,162,255,0.22), transparent 65%);
                    animation: aboutBlob5 32s ease-in-out infinite;
                }
                .about-grain {
                    opacity: 0.15;
                    mix-blend-mode: overlay;
                }
                .about-vignette {
                    background: radial-gradient(ellipse at 50% 40%, transparent 25%, #050505 90%);
                }
                .light #aboutArc stop {
                    stop-color: #6d28d9;
                }
                .light #aboutArc stop[offset="50%"] {
                    stop-color: #8b5cf6;
                    stop-opacity: 0.45;
                }
                .light .about-vignette {
                    background: radial-gradient(ellipse at 50% 40%, transparent 50%, rgba(240,244,248,0.7) 100%);
                }
                .light .about-blob {
                    filter: blur(100px);
                }
                .light .about-blob-1 {
                    background: radial-gradient(circle, rgba(124,58,237,0.65), rgba(124,58,237,0.15) 45%, transparent 75%);
                }
                .light .about-blob-2 {
                    background: radial-gradient(circle, rgba(37,99,235,0.60), rgba(37,99,235,0.15) 45%, transparent 75%);
                }
                .light .about-blob-3 {
                    background: radial-gradient(circle, rgba(139,92,246,0.55), rgba(139,92,246,0.12) 45%, transparent 75%);
                }
                .light .about-blob-4 {
                    background: radial-gradient(circle, rgba(124,58,237,0.60), rgba(124,58,237,0.15) 45%, transparent 75%);
                }
                .light .about-blob-5 {
                    background: radial-gradient(circle, rgba(37,99,235,0.50), rgba(37,99,235,0.10) 45%, transparent 75%);
                }
                .light .about-grain {
                    opacity: 0.06;
                    mix-blend-mode: multiply;
                }
            `}</style>
            <div className="relative z-10 pt-18">
                <div className="mobile-only">
                    <HeaderMobile />
                </div>
                <div className="desktop-only">
                    <HeaderDesktop />
                </div>
                <AboutHero />
                <AllBeganAbout />
                <AgencyAbout />
                <SolutionsAbout />
                <ToolsAbout />
                <PersonalizedApproachAbout />
                <DevelopmentAbout />
                <GoodSolutionAbout />
                <BeforeAfterAbout />
                <AlsoOnTheSiteAbout />
                <CTAabout />
                <Footer />
            </div>
        </div>
    )
}
