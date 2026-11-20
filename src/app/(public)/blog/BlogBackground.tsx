import { letters } from "@/lib/utils/ArticleUtils"

export function BlogBackground() {
    return (
        <>
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 blog-radial" />
                <div className="absolute inset-0 blog-edges" />
                <div className="blog-center-light" />
                <div className="absolute inset-0 blog-grid" />
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
                .blog-radial {
                    background: radial-gradient(ellipse at 50% 0%, #0e0e14 0%, #08080c 40%, #050505 100%);
                }
                .blog-edges {
                    background: linear-gradient(90deg, #050505 0%, transparent 25%, transparent 75%, #050505 100%);
                }
                .blog-grid, .blog-cover-grid {
                    background-image:
                        linear-gradient(var(--blog-grid-color) 1px, transparent 1px),
                        linear-gradient(90deg, var(--blog-grid-color) 1px, transparent 1px);
                }
                .blog-grid {
                    --blog-grid-color: rgba(167,139,250,0.05);
                    background-size: 80px 80px;
                    -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 30%, black 70%, transparent 100%);
                    mask-image: linear-gradient(90deg, transparent 0%, black 30%, black 70%, transparent 100%);
                }
                .blog-cover-grid {
                    --blog-grid-color: rgba(167,139,250,0.15);
                    background-size: 40px 40px;
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
                        rgba(120,90,220,0.04) 20%,
                        rgba(140,110,240,0.12) 45%,
                        rgba(160,130,255,0.18) 50%,
                        rgba(140,110,240,0.12) 55%,
                        rgba(120,90,220,0.04) 80%,
                        transparent 100%
                    );
                    filter: blur(60px);
                    animation: blogCenterPulse 8s ease-in-out infinite;
                }
                .light .blog-radial {
                    background: radial-gradient(ellipse at 50% 0%, #E4EBF3 0%, #ECF1F6 40%, var(--color-canvas) 100%);
                }
                .light .blog-edges {
                    background: linear-gradient(90deg, var(--color-canvas) 0%, transparent 25%, transparent 75%, var(--color-canvas) 100%);
                }
                .light .blog-grid {
                    --blog-grid-color: rgba(124,58,237,0.08);
                }
                .light .blog-cover-grid {
                    --blog-grid-color: rgba(37,99,235,0.15);
                }
                .light .blog-letter {
                    color: #7c3aed;
                    opacity: 0.13;
                }
                .light .blog-center-light {
                    background: linear-gradient(
                        90deg,
                        transparent 0%,
                        rgba(124,58,237,0.05) 20%,
                        rgba(139,92,246,0.10) 45%,
                        rgba(37,99,235,0.12) 50%,
                        rgba(139,92,246,0.10) 55%,
                        rgba(124,58,237,0.05) 80%,
                        transparent 100%
                    );
                }
            `}</style>
        </>
    )
}
