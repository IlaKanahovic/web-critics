

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
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Сейчас и потом</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="max-w-4xl mx-auto text-center mb-20 md:mb-28">
                    <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                        Студия ещё не закончена -<br />
                        <span className="text-white/40">и в этом есть смысл</span>
                    </h2>

                    <p className="text-white/55 text-font-inter text-base md:text-lg leading-relaxed mt-8 max-w-2xl mx-auto">
                        KILLCRITIC не строится как компания, у которой заранее на пять лет расписано, какие продукты она будет продавать. Сейчас задача другая — работать с реальными задачами и наблюдать, что действительно нужно бизнесу.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-20 md:mb-28">
                    {stages.map((stage, i) => (
                        <div
                            key={i}
                            className={`group relative rounded-2xl border p-8 md:p-10 flex flex-col min-h-80 overflow-hidden transition-all duration-500 ${
                                stage.intensity === "full"
                                    ? "bg-[#0d0d12] border-violet-400/25 hover:border-violet-400/50"
                                    : stage.intensity === "medium"
                                    ? "bg-[#0a0a0a] border-white/15 hover:border-white/30"
                                    : "bg-[#080808] border-white/8 hover:border-white/20"
                            }`}
                        >
                            {stage.intensity === "full" && (
                                <>
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-linear-to-r from-transparent via-violet-400/60 to-transparent" />
                                    <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />
                                </>
                            )}

                            <div className="relative flex items-center justify-between mb-8">
                                <span
                                    className={`font-mono text-sm tracking-[0.3em] transition-colors duration-500 ${
                                        stage.intensity === "full"
                                            ? "text-violet-300/70"
                                            : stage.intensity === "medium"
                                            ? "text-white/40"
                                            : "text-white/25"
                                    }`}
                                >
                                    {stage.num}
                                </span>

                                <span
                                    className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                                        stage.intensity === "full"
                                            ? "bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.8)]"
                                            : stage.intensity === "medium"
                                            ? "bg-white/40"
                                            : "bg-white/20"
                                    }`}
                                />
                            </div>

                            <h3
                                className={`relative text-3xl md:text-4xl font-space leading-[1.1] ${
                                    stage.intensity === "full"
                                        ? "text-white"
                                        : stage.intensity === "medium"
                                        ? "text-white/85"
                                        : "text-white/60"
                                }`}
                            >
                                {stage.label}
                            </h3>

                            <p
                                className={`relative text-sm md:text-base leading-relaxed mt-6 pt-6 border-t flex-1 transition-colors duration-500 ${
                                    stage.intensity === "full"
                                        ? "text-white/65 border-white/12 group-hover:text-white/85"
                                        : stage.intensity === "medium"
                                        ? "text-white/50 border-white/8 group-hover:text-white/75"
                                        : "text-white/40 border-white/6 group-hover:text-white/65"
                                }`}
                            >
                                {stage.desc}
                            </p>

                            <span
                                className={`relative mt-6 text-[10px] uppercase tracking-[0.35em] font-mono ${
                                    stage.intensity === "full"
                                        ? "text-violet-200/60"
                                        : "text-white/25"
                                }`}
                            >
                                {i === 0 ? "Сейчас" : i === 1 ? "Ближайший этап" : "Долгосрочно"}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative pl-8 md:pl-12 border-l-2 border-violet-400/40">
                        <p className="text-white text-2xl md:text-3xl lg:text-4xl font-space leading-[1.2]">
                            Мы не хотим заранее решить, какой должна стать WEBCRITIC.
                        </p>
                        <p className="text-white/50 text-2xl md:text-3xl lg:text-4xl font-space leading-[1.2] mt-3">
                            Мы хотим построить её на основе реальных задач, которые действительно приходится решать.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}