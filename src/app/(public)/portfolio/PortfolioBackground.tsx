export function PortfolioBackground() {
    return (
        <>
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 portfolio-lines-base" />
                <div className="absolute inset-0 portfolio-lines-wide" />
                <div className="absolute inset-0 portfolio-fade" />
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
                    0%, 100% { transform: translate(0, 0); opacity: var(--portfolio-glow-rest); }
                    50% { transform: translate(100px, 60px); opacity: var(--portfolio-glow-peak); }
                }
                @keyframes portfolioGlow2 {
                    0%, 100% { transform: translate(0, 0); opacity: var(--portfolio-glow-rest); }
                    50% { transform: translate(-100px, -60px); opacity: var(--portfolio-glow-peak); }
                }
                @keyframes portfolioGlow3 {
                    0%, 100% { transform: translate(0, 0); opacity: var(--portfolio-glow-rest); }
                    50% { transform: translate(60px, -80px); opacity: var(--portfolio-glow-peak); }
                }
                .portfolio-lines-base {
                    --portfolio-line: rgba(167,139,250,0.10);
                    background-image: repeating-linear-gradient(115deg, transparent 0, transparent 38px, var(--portfolio-line) 38px, var(--portfolio-line) 39px);
                    animation: portfolioLinesPulse 12s ease-in-out infinite;
                }
                .portfolio-lines-wide {
                    --portfolio-line: rgba(122,162,255,0.16);
                    background-image: repeating-linear-gradient(115deg, transparent 0, transparent 190px, var(--portfolio-line) 190px, var(--portfolio-line) 191px);
                }
                .portfolio-fade {
                    background-image: linear-gradient(90deg, transparent 0%, rgba(5,5,5,0) 30%, rgba(5,5,5,0.4) 100%);
                }
                .portfolio-glow-1 {
                    --portfolio-glow-rest: 0.3;
                    --portfolio-glow-peak: 0.5;
                    background: radial-gradient(circle, rgba(167,139,250,0.08), transparent 70%);
                    animation: portfolioGlow1 26s ease-in-out infinite;
                }
                .portfolio-glow-2 {
                    --portfolio-glow-rest: 0.25;
                    --portfolio-glow-peak: 0.45;
                    background: radial-gradient(circle, rgba(122,162,255,0.07), transparent 70%);
                    animation: portfolioGlow2 30s ease-in-out infinite;
                }
                .portfolio-glow-3 {
                    --portfolio-glow-rest: 0.2;
                    --portfolio-glow-peak: 0.4;
                    background: radial-gradient(circle, rgba(196,181,253,0.06), transparent 70%);
                    animation: portfolioGlow3 34s ease-in-out infinite;
                }
                .portfolio-preview-grid {
                    --portfolio-line: rgba(167,139,250,0.15);
                    background-image:
                        linear-gradient(var(--portfolio-line) 1px, transparent 1px),
                        linear-gradient(90deg, var(--portfolio-line) 1px, transparent 1px);
                    background-size: 30px 30px;
                }
                .light .portfolio-lines-base {
                    --portfolio-line: rgba(124,58,237,0.10);
                }
                .light .portfolio-lines-wide {
                    --portfolio-line: rgba(37,99,235,0.16);
                }
                .light .portfolio-fade {
                    background-image: linear-gradient(90deg, transparent 0%, rgba(240,244,248,0) 30%, rgba(240,244,248,0.6) 100%);
                }
                .light .portfolio-glow-1 {
                    --portfolio-glow-rest: 0.5;
                    --portfolio-glow-peak: 0.75;
                    background: radial-gradient(circle, rgba(124,58,237,0.20), transparent 70%);
                }
                .light .portfolio-glow-2 {
                    --portfolio-glow-rest: 0.45;
                    --portfolio-glow-peak: 0.7;
                    background: radial-gradient(circle, rgba(37,99,235,0.18), transparent 70%);
                }
                .light .portfolio-glow-3 {
                    --portfolio-glow-rest: 0.4;
                    --portfolio-glow-peak: 0.65;
                    background: radial-gradient(circle, rgba(139,92,246,0.16), transparent 70%);
                }
                .light .portfolio-preview-grid {
                    --portfolio-line: rgba(37,99,235,0.15);
                }
            `}</style>
        </>
    )
}
