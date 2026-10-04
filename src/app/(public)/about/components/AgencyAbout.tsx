

export function AgencyAbout() {
    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Почему не «агентство»</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
                    <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                        У нас нет желания продавать клиенту то, что мы умеем делать
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
                    <p className="text-white/85 text-font-inter text-base md:text-lg leading-relaxed">
                        Обычная модель цифровой разработки довольно понятна:
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 py-6">
                        {["Сайт", "Дизайн", "Разработка", "Запуск"].map((step, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <span className="text-white/70 font-mono text-sm tracking-wide uppercase">
                                    {step}
                                </span>
                                {i < 3 && (
                                    <span className="text-violet-400/50">→</span>
                                )}
                            </div>
                        ))}
                    </div>

                    <p className="text-white/65 text-font-inter text-base md:text-lg leading-relaxed mt-2">
                        И в определённых проектах этого достаточно.
                    </p>
                    <p className="text-white text-font-inter text-base md:text-lg leading-relaxed font-medium mt-4">
                        Но такая модель плохо работает, когда сам клиент ещё не знает, какое решение ему нужно.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto mb-20 md:mb-28">
                    <p className="text-white text-font-space text-2xl md:text-3xl leading-[1.3] mb-3">
                        Представим бизнес,
                    </p>
                    <p className="text-white/55 text-font-inter text-base md:text-lg leading-relaxed">
                        в котором менеджеры ежедневно вручную переносят заявки между несколькими системами.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20 md:mb-28">
                    {[
                        {
                            num: "01",
                            suggestion: "Разработаем корпоративный сайт",
                            problem: "Но сайт вообще может не иметь отношения к проблеме",
                        },
                        {
                            num: "02",
                            suggestion: "Внедрим CRM",
                            problem: "Но, возможно, существующей CRM уже достаточно - проблема просто в отсутствии интеграции",
                        },
                        {
                            num: "03",
                            suggestion: "Сделаем Telegram-бота",
                            problem: "Но если процесс внутри компании не выстроен, бот лишь добавит ещё один канал, который кому-то придётся обслуживать",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="group relative bg-[#111111] border border-white/10 rounded-2xl p-6 md:p-7 transition-all duration-500 hover:border-white/25 hover:bg-[#151515] flex flex-col min-h-60 overflow-hidden"
                        >
                            <span className="absolute -top-4 -right-2 text-[100px] font-bold leading-none text-white/3 group-hover:text-violet-400/8 transition-colors duration-500 select-none pointer-events-none font-mono">
                                {item.num}
                            </span>

                            <span className="relative text-white/35 text-[10px] uppercase tracking-[0.35em] font-mono mb-5">
                                Можно сразу продать
                            </span>

                            <p className="relative text-white text-lg md:text-xl font-semibold leading-snug line-through decoration-white/20 decoration-1">
                                «{item.suggestion}»
                            </p>

                            <p className="relative text-white/50 text-sm leading-relaxed mt-5 pt-5 border-t border-white/8 flex-1">
                                {item.problem}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 md:mb-20">
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <span className="text-violet-300/50 text-[10px] uppercase tracking-[0.35em] font-mono">
                            Поэтому в KILLCRITIC
                        </span>

                        <p className="text-white text-font-space text-3xl md:text-4xl leading-[1.15] mt-6">
                            Исходный запрос не считается окончательным техническим заданием.
                        </p>
                    </div>

                    <div className="lg:col-span-7 order-1 lg:order-2 max-w-2xl space-y-6">
                        {[
                            {
                                type: "Запрос",
                                text: "«Нужен сайт»",
                                desc: "Форма, за которой может стоять что угодно.",
                            },
                            {
                                type: "Задача",
                                text: "«Нужно получать больше обращений с текущего трафика»",
                                desc: "Уже понятно, к чему стремимся.",
                            },
                            {
                                type: "Проблема",
                                text: "«Нужно убрать ручную передачу данных между тремя системами»",
                                desc: "Конкретная точка, где можно работать.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="group flex items-start gap-6 pb-6 border-b border-white/8 hover:border-white/25 transition-colors duration-500">
                                <span className="shrink-0 w-20 md:w-28 pt-1 text-violet-200/60 text-[10px] uppercase tracking-[0.25em] font-mono group-hover:text-violet-200 transition-colors duration-500">
                                    {item.type}
                                </span>

                                <div className="flex-1">
                                    <p className="text-white text-lg md:text-xl font-medium leading-snug">
                                        {item.text}
                                    </p>
                                    <p className="text-white/45 text-sm leading-relaxed mt-2 group-hover:text-white/65 transition-colors duration-500">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-white text-font-space text-3xl md:text-4xl lg:text-5xl leading-[1.15]">
                        Разница между этими формулировками
                    </p>
                    <p className="text-white/40 text-font-space text-3xl md:text-4xl lg:text-5xl leading-[1.15] mt-2">
                        определяет практически всё дальнейшее решение.
                    </p>
                </div>
            </div>
        </div>
    )
}