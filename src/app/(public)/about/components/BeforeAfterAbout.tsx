

export function BeforeAfterAbout() {
    const stages = [
        {
            num: "01",
            label: "Сегодня",
            desc: "Индивидуальные решения, первые готовые продукты и работа напрямую с клиентами.",
            intensity: "full",
        },
        {
            num: "02",
            label: "Дальше",
            desc: "Повторяющиеся задачи превращаются в стандартизированные решения. Запуск становится быстрее, появляются новые продукты.",
            intensity: "medium",
        },
        {
            num: "03",
            label: "В перспективе",
            desc: "Студия с собственными цифровыми продуктами и накопленной системой решений, которая не зависит от одного заранее заданного формата разработки.",
            intensity: "low",
        },
    ]

    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 light:via-line to-transparent" />
                    <span className="text-white/40 light:text-ink-muted text-xs uppercase tracking-widest">Сейчас и потом</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 light:via-line to-transparent" />
                </div>

                <div className="max-w-4xl mx-auto text-center mb-20 md:mb-28">
                    <h2 className="text-white light:text-ink text-font-space text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                        Студия ещё не закончена -<br />
                        <span className="text-white/40 light:text-ink-muted">и в этом есть смысл</span>
                    </h2>

                    <p className="text-white/55 light:text-ink-secondary text-font-inter text-base md:text-lg leading-relaxed mt-8 max-w-2xl mx-auto">
                        KILLCRITIC не строится как компания, у которой заранее на пять лет расписано, какие продукты она будет продавать. Сейчас задача другая — работать с реальными задачами и наблюдать, что действительно нужно бизнесу.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-20 md:mb-28">
                    {stages.map((stage, i) => (
                        <div
                            key={i}
                            className={`group relative rounded-2xl border p-8 md:p-10 flex flex-col min-h-80 overflow-hidden transition-all duration-500 ${
                                stage.intensity === "full"
                                    ? "bg-[#0d0d12] light:bg-white light:shadow-card border-violet-400/25 light:border-accent/40 hover:border-violet-400/50 light:hover:border-accent"
                                    : stage.intensity === "medium"
                                    ? "bg-[#0a0a0a] light:bg-white light:shadow-card border-white/15 light:border-line hover:border-white/30 light:hover:border-accent/40"
                                    : "bg-[#080808] light:bg-white light:shadow-card border-white/8 light:border-line hover:border-white/20 light:hover:border-accent/40"
                            }`}
                        >
                            {stage.intensity === "full" && (
                                <>
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-linear-to-r from-transparent via-violet-400/60 light:via-accent/60 to-transparent" />
                                    <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-violet-500/10 light:bg-accent/8 blur-3xl pointer-events-none" />
                                </>
                            )}

                            <div className="relative flex items-center justify-between mb-8">
                                <span
                                    className={`font-mono text-sm tracking-[0.3em] transition-colors duration-500 ${
                                        stage.intensity === "full"
                                            ? "text-violet-300/70 light:text-accent"
                                            : stage.intensity === "medium"
                                            ? "text-white/40 light:text-ink-muted"
                                            : "text-white/25 light:text-ink-muted"
                                    }`}
                                >
                                    {stage.num}
                                </span>

                                <span
                                    className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                                        stage.intensity === "full"
                                            ? "bg-violet-400 light:bg-accent shadow-[0_0_10px_rgba(167,139,250,0.8)] light:shadow-accent/30"
                                            : stage.intensity === "medium"
                                            ? "bg-white/40 light:bg-ink-muted"
                                            : "bg-white/20 light:bg-line"
                                    }`}
                                />
                            </div>

                            <h3
                                className={`relative text-3xl md:text-4xl font-space leading-[1.1] ${
                                    stage.intensity === "full"
                                        ? "text-white light:text-ink"
                                        : stage.intensity === "medium"
                                        ? "text-white/85 light:text-ink-secondary"
                                        : "text-white/60 light:text-ink-secondary"
                                }`}
                            >
                                {stage.label}
                            </h3>

                            <p
                                className={`relative text-sm md:text-base leading-relaxed mt-6 pt-6 border-t flex-1 transition-colors duration-500 ${
                                    stage.intensity === "full"
                                        ? "text-white/65 light:text-ink-secondary border-white/12 light:border-line group-hover:text-white/85 light:group-hover:text-ink"
                                        : stage.intensity === "medium"
                                        ? "text-white/50 light:text-ink-secondary border-white/8 light:border-line group-hover:text-white/75 light:group-hover:text-ink"
                                        : "text-white/40 light:text-ink-muted border-white/6 light:border-line group-hover:text-white/65 light:group-hover:text-ink"
                                }`}
                            >
                                {stage.desc}
                            </p>

                            <span
                                className={`relative mt-6 text-[10px] uppercase tracking-[0.35em] font-mono ${
                                    stage.intensity === "full"
                                        ? "text-violet-200/60 light:text-accent"
                                        : "text-white/25 light:text-ink-muted"
                                }`}
                            >
                                {i === 0 ? "Сейчас" : i === 1 ? "Ближайший этап" : "Долгосрочно"}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative pl-8 md:pl-12 border-l-2 border-violet-400/40 light:border-accent">
                        <p className="text-white light:text-ink text-2xl md:text-3xl lg:text-4xl font-space leading-[1.2]">
                            Мы не хотим заранее решить, какой должна стать WebCRitics.
                        </p>
                        <p className="text-white/50 light:text-ink-secondary text-2xl md:text-3xl lg:text-4xl font-space leading-[1.2] mt-3">
                            Мы хотим построить её на основе реальных задач, которые действительно приходится решать.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}