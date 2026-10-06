import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { MainPageBlog } from "./MainPageBlog";
import { Footer } from "@/components/layout/footer/Footer";

export const letters = [
    { char: "B", top: "6%", left: "4%", size: 420, rotate: -8, delay: 0 },
    { char: "L", top: "18%", left: "76%", size: 360, rotate: 6, delay: 2 },
    { char: "O", top: "34%", left: "10%", size: 480, rotate: -3, delay: 4 },
    { char: "G", top: "50%", left: "78%", size: 400, rotate: 4, delay: 1 },
    { char: "B", top: "64%", left: "6%", size: 340, rotate: -6, delay: 3 },
    { char: "L", top: "78%", left: "72%", size: 460, rotate: 3, delay: 5 },
    { char: "O", top: "92%", left: "14%", size: 380, rotate: -4, delay: 2.5 },
]

export default function Blog() {
    return (
        <div className="relative min-h-screen overflow-hidden" style={{ isolation: "isolate" }}>
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        background: "radial-gradient(ellipse at 50% 0%, #0e0e14 0%, #08080c 40%, #050505 100%)",
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(90deg, #050505 0%, transparent 25%, transparent 75%, #050505 100%)",
                    }}
                />
                <div className="blog-center-light" />
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(167,139,250,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(167,139,250,0.05) 1px, transparent 1px)
                        `,
                        backgroundSize: "80px 80px",
                        maskImage: "linear-gradient(90deg, transparent 0%, black 30%, black 70%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 30%, black 70%, transparent 100%)",
                    }}
                />
                <div className="hidden md:block">
                    {letters.map((item, i) => (
                        <span
                            key={i}
                            className="blog-letter"
                            style={{
                                top: item.top,
                                left: item.left,
                                fontSize: `${item.size}px`,
                                transform: `rotate(${item.rotate}deg)`,
                                animationDelay: `${item.delay}s`,
                            }}
                        >
                            {item.char}
                        </span>
                    ))}
                </div>
            </div>
            <style>{`
                @keyframes blogLetterFloat {
                    0%, 100% { transform: translate(0, 0) rotate(var(--r, 0deg)); }
                    50% { transform: translate(15px, -25px) rotate(var(--r, 0deg)); }
                }
                @keyframes blogCenterPulse {
                    0%, 100% { opacity: 0.85; }
                    50% { opacity: 1; }
                }
                .blog-letter {
                    position: absolute;
                    font-family: 'Space Grotesk', system-ui, sans-serif;
                    font-weight: 700;
                    line-height: 0.85;
                    color: #a78bfa;
                    opacity: 0.1;
                    user-select: none;
                    pointer-events: none;
                    animation: blogLetterFloat 14s ease-in-out infinite;
                    letter-spacing: -0.04em;
                }
                .blog-center-light {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 900px;
                    background: linear-gradient(
                        90deg,
                        transparent 0%,
                        rgba(120, 90, 220, 0.04) 20%,
                        rgba(140, 110, 240, 0.12) 45%,
                        rgba(160, 130, 255, 0.18) 50%,
                        rgba(140, 110, 240, 0.12) 55%,
                        rgba(120, 90, 220, 0.04) 80%,
                        transparent 100%
                    );
                    filter: blur(60px);
                    animation: blogCenterPulse 8s ease-in-out infinite;
                }
            `}</style>

            <div className="relative z-10 pt-18">
                <div className="mobile-only">
                    <HeaderMobile />
                </div>
                <div className="desktop-only">
                    <HeaderDesktop />
                </div>
                <MainPageBlog />
                <Footer />
            </div>
        </div>
    )
}