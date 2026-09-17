import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { Footer } from "@/components/layout/footer/Footer";
import { PortfolioProjectComponent } from "./PortfolioProjectComponent";

export default function Portfolio() {
    return (
        <div className="relative min-h-screen bg-[#050505] overflow-hidden" style={{ isolation: "isolate" }}>
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute inset-0 portfolio-lines-base"
                    style={{
                        backgroundImage: `
                            repeating-linear-gradient(
                                115deg,
                                transparent 0,
                                transparent 38px,
                                rgba(167,139,250,0.1) 38px,
                                rgba(167,139,250,0.1) 39px
                            )
                        `,
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            repeating-linear-gradient(
                                115deg,
                                transparent 0,
                                transparent 190px,
                                rgba(122,162,255,0.16) 190px,
                                rgba(122,162,255,0.16) 191px
                            )
                        `,
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(90deg, transparent 0%, rgba(5,5,5,0) 30%, rgba(5,5,5,0.4) 100%)
                        `,
                    }}
                />
                <div className="portfolio-glow-1 absolute -top-1/4 -left-1/4 w-225 h-225 rounded-full" />
                <div className="portfolio-glow-2 absolute top-1/3 -right-1/4 w-225 h-225 rounded-full" />
                <div className="portfolio-glow-3 absolute -bottom-1/4 left-1/4 w-225 h-225 rounded-full" />
            </div>
            <style>{`
                @keyframes portfolioLinesPulse {
                    0%, 100% { opacity: 0.8; }
                    50% { opacity: 1; }
                }
                @keyframes portfolioGlow1 {
                    0%, 100% { transform: translate(0, 0); opacity: 0.3; }
                    50% { transform: translate(100px, 60px); opacity: 0.5; }
                }
                @keyframes portfolioGlow2 {
                    0%, 100% { transform: translate(0, 0); opacity: 0.25; }
                    50% { transform: translate(-100px, -60px); opacity: 0.45; }
                }
                @keyframes portfolioGlow3 {
                    0%, 100% { transform: translate(0, 0); opacity: 0.2; }
                    50% { transform: translate(60px, -80px); opacity: 0.4; }
                }
                .portfolio-lines-base {
                    animation: portfolioLinesPulse 12s ease-in-out infinite;
                }
                .portfolio-glow-1 {
                    background: radial-gradient(circle, rgba(167,139,250,0.08), transparent 70%);
                    animation: portfolioGlow1 26s ease-in-out infinite;
                }
                .portfolio-glow-2 {
                    background: radial-gradient(circle, rgba(122,162,255,0.07), transparent 70%);
                    animation: portfolioGlow2 30s ease-in-out infinite;
                }
                .portfolio-glow-3 {
                    background: radial-gradient(circle, rgba(196,181,253,0.06), transparent 70%);
                    animation: portfolioGlow3 34s ease-in-out infinite;
                }
            `}</style>

            <div className="relative z-10 pt-18">
                <div className="mobile-only">
                    <HeaderMobile />
                </div>
                <div className="desktop-only">
                    <HeaderDesktop />
                </div>
                <PortfolioProjectComponent />
                <Footer />
            </div>
        </div>
    )
}