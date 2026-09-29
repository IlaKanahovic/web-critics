import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop"
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile"
import { HeroInterfaces } from "./HeroInterfaces"
import { WhatIsInInterface } from "./WhatIsInInterface"
import { InterfaceNeed } from "./InterfaceNeed"
import { UserSpecificIntareface } from "./UserSpecificIntareface"
import { CanIncludedInInterface } from "./CanIncludedInInterface"
import { FromStructureToFinishedInterface } from "./FromStructureToFinishedInterface"
import { FAQandCTAinteraface } from "./FAQandCTAinteraface"
import { Footer } from "@/components/layout/footer/Footer"
import { bgWebDevelopment } from "@/constants/bg"

export default function WebDevelopmentInterfaces() {
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

                <div className="webdev-glow-1 absolute -top-1/4 -left-1/4 w-225 h-225 rounded-full" />
                <div className="webdev-glow-2 absolute -bottom-1/4 -right-1/4 w-225 h-225 rounded-full" />
            </div>
            <style>{`
                       @keyframes webdevFloat {
                           0%, 100% { transform: translateY(0); opacity: 0.55; }
                           50% { transform: translateY(-12px); opacity: 0.85; }
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
                <HeroInterfaces />
                <WhatIsInInterface />
                <InterfaceNeed />
                <UserSpecificIntareface />
                <CanIncludedInInterface />
                <FromStructureToFinishedInterface />
                <FAQandCTAinteraface />
                <Footer />
            </div>
        </div>
    )
}