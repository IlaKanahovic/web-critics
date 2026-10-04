

export function ToolsAbout() {
    const problems = [
        "структуры",
        "интерфейса",
        "производительности",
        "конверсии",
        "SEO",
        "аналитики",
        "бизнес-процесса",
    ]

    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Широкий набор навыков</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
                    <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                        Широкий набор навыков - не цель.
                        <br />
                        <span className="text-white/40">Это инструмент.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-24 md:mb-32 max-w-4xl mx-auto">
                    <p className="text-white/60 text-font-inter text-base md:text-lg leading-relaxed">
                        У студии есть несколько разных направлений не потому, что хочется разместить на сайте как можно больше услуг. Они появились из практики.
                    </p>

                    <p className="text-white/60 text-font-inter text-base md:text-lg leading-relaxed">
                        В рамках подготовки и разработки я работал с конструкторами, HTML/CSS/JS, fullstack-приложениями, SaaS и микросервисами, SEO, аналитикой, AI, автоматизацией и оптимизацией существующих продуктов.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20 md:mb-28">
                    <div className="lg:col-span-4 flex justify-center lg:justify-start">
                        <div className="relative">
                            <span className="block text-white font-mono text-[180px] md:text-[240px] lg:text-[300px] leading-[0.75] tracking-tighter">
                                7
                            </span>

                            <div className="mt-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-violet-400/60" />
                                <span className="text-white/40 text-xs uppercase tracking-[0.3em] font-mono whitespace-nowrap">
                                    возможных причин
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-8">
                        <p className="text-white text-font-space text-2xl md:text-3xl leading-tight mb-8">
                            Проблема с сайтом может оказаться совсем не тем, чем кажется.
                        </p>

                        <div className="border-t border-white/10">
                            {problems.map((item, i) => (
                                <div
                                    key={i}
                                    className="group flex items-center gap-6 py-3.5 border-b border-white/10 hover:border-white/30 transition-colors duration-500"
                                >
                                    <span className="text-white/20 font-mono text-sm w-8 shrink-0 group-hover:text-violet-300/60 transition-colors duration-500">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="text-white/55 text-base md:text-lg group-hover:text-white group-hover:translate-x-0.5 transition-all duration-500">
                                        проблемой {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
                    <p className="text-white/70 text-font-inter text-base md:text-lg leading-relaxed">
                        Полезно не просто уметь «сделать сайт», а иметь возможность проверить несколько возможных причин и выбрать между разными способами решения.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-white text-font-space text-3xl md:text-4xl lg:text-5xl leading-[1.15]">
                        Технологии в WEBCRITIC - не витрина.
                    </p>
                    <p className="text-white/40 text-font-space text-3xl md:text-4xl lg:text-5xl leading-[1.15] mt-2">
                        Это набор инструментов, из которого выбирается необходимый.
                    </p>

                    <p className="text-white/45 text-sm md:text-base leading-relaxed mt-10 max-w-xl mx-auto">
                        Подробно о конкретных направлениях и технологиях -{" "}
                        <a
                            href="/#services"
                            className="text-white/80 hover:text-white underline underline-offset-2 decoration-white/30 transition-colors"
                        >
                            сервисы
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    )
}