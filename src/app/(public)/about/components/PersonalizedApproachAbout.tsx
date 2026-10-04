

export function PersonalizedApproachAbout() {
    const flow = [
        "какую проблему принесли",
        "что оказалось настоящей причиной",
        "какое решение сработало",
        "сколько ресурсов потребовало",
        "повторяется ли задача",
    ]

    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Персональный подход</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20 md:mb-28">
                    <div className="lg:col-span-5">
                        <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                            На раннем этапе WEBCRITIC - это действительно личная работа
                        </h2>
                    </div>

                    <div className="lg:col-span-7 space-y-5">
                        <p className="text-white/85 text-font-inter text-base md:text-lg leading-relaxed">
                            На первом этапе WEBCRITIC я лично участвую в каждом проекте - от первого разговора до реализации.
                        </p>
                        <p className="text-white/55 text-font-inter text-base md:text-lg leading-relaxed">
                            Здесь нечего скрывать: студия находится в начале пути, и это не мешает делать работу качественно - наоборот, задаёт правильный тон на будущее.
                        </p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto text-center mb-20 md:mb-28">
                    <p className="text-white text-font-space text-3xl md:text-4xl lg:text-5xl leading-[1.15]">
                        Почему это важно?
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto mb-20 md:mb-28">
                    <p className="text-white/70 text-font-inter text-base md:text-lg leading-relaxed">
                        Когда между клиентом и разработкой нет нескольких уровней менеджеров, информация не проходит через несколько пересказов.
                    </p>

                    <p className="text-white/70 text-font-inter text-base md:text-lg leading-relaxed">
                        Клиент объясняет проблему напрямую человеку, который будет её разбирать и реализовывать.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
                    <p className="text-white/65 text-font-inter text-base md:text-lg leading-relaxed">
                        Это позволяет быстрее уточнять детали, менять решение по ходу работы и не терять контекст между обсуждением и разработкой.
                    </p>
                </div>

                <div className="mb-20 md:mb-28">
                    <div className="relative rounded-2xl border border-white/10 bg-white/1.5 p-8 md:p-12 overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-violet-500/8 blur-3xl pointer-events-none" />
                        <div className="absolute top-0 left-12 right-12 h-px bg-linear-to-r from-transparent via-violet-400/40 to-transparent" />

                        <div className="relative flex items-center gap-3 mb-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.8)]" />
                            <span className="text-violet-200/70 text-[10px] uppercase tracking-[0.35em] font-mono">
                                И есть ещё одна причина
                            </span>
                        </div>

                        <p className="relative text-white text-xl md:text-2xl lg:text-3xl leading-[1.3] font-medium max-w-3xl">
                            WEBCRITIC сейчас строится не вокруг большого штата специалистов, а вокруг накопления собственной практики.
                        </p>

                        <div className="relative mt-10 pt-8 border-t border-white/10">
                            <span className="text-white/35 text-[10px] uppercase tracking-[0.35em] font-mono">
                                Каждый проект даёт новую информацию
                            </span>

                            <div className="mt-6 space-y-1">
                                {flow.map((item, i) => (
                                    <div
                                        key={i}
                                        className="group flex items-center gap-6 py-3 border-b border-white/8 hover:border-white/25 transition-colors duration-500"
                                    >
                                        <span className="text-white/20 font-mono text-sm w-8 shrink-0 group-hover:text-violet-300/60 transition-colors duration-500">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <span className="text-white/65 text-base md:text-lg group-hover:text-white group-hover:translate-x-0.5 transition-all duration-500">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-white text-font-space text-3xl md:text-4xl lg:text-5xl leading-[1.15]">
                        Именно эта информация со временем должна определять,
                    </p>
                    <p className="text-white/40 text-font-space text-3xl md:text-4xl lg:text-5xl leading-[1.15] mt-2">
                        какие решения станут стандартными продуктами студии.
                    </p>
                </div>
            </div>
        </div>
    )
}