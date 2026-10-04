

export function AllBeganAbout() {
    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Откуда всё началось</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-24 md:mb-32">
                    <div className="lg:col-span-5">
                        <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                            Сначала была разработка. Потом появился вопрос: «А что именно мы решаем?»
                        </h2>
                    </div>

                    <div className="lg:col-span-7 space-y-5">
                        <p className="text-white/85 text-font-inter text-base md:text-lg leading-relaxed">
                            Более трёх лет я занимаюсь веб-разработкой и за это время работал далеко не с одним форматом задач.
                        </p>
                        <p className="text-white/65 text-font-inter text-base md:text-lg leading-relaxed">
                            Начиналось всё с создания сайтов и работы с конструкторами. Затем появились нативная разработка, полноценные fullstack-приложения, SaaS и микросервисы, автоматизация, SEO, веб-аналитика, тестирование цифровых продуктов, работа с AI и интеграция различных инструментов между собой.
                        </p>
                        <p className="text-white text-font-inter text-base md:text-lg leading-relaxed font-medium">
                            Постепенно стало очевидно, что все эти направления имеют одну общую черту: технология сама по себе редко является конечной целью.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-24 md:mb-32">
                    <div className="lg:col-span-3">
                        <span className="text-white/30 text-[10px] uppercase tracking-[0.35em] font-mono">
                            Наблюдение
                        </span>
                    </div>

                    <div className="lg:col-span-9 max-w-3xl">
                        <div className="space-y-5">
                            {[
                                "Сайт нужен не потому, что бизнесу нужен «сайт»",
                                "Бот нужен не потому, что сейчас модно использовать ботов",
                                "AI нужен не потому, что в каждом продукте должен быть AI",
                                "Автоматизация нужна не потому, что автоматизация хорошо выглядит в презентации",
                            ].map((line, i) => (
                                <p key={i} className="text-white/45 text-lg md:text-xl leading-relaxed">
                                    {line}
                                </p>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10">
                            <p className="text-white text-font-space text-3xl md:text-4xl lg:text-5xl leading-[1.15]">
                                За каждым таким запросом есть причина.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    <div className="lg:col-span-3">
                        <span className="text-violet-300/50 text-[10px] uppercase tracking-[0.35em] font-mono">
                            Идея KILLCRITIC
                        </span>
                    </div>

                    <div className="lg:col-span-9 max-w-3xl">
                        <p className="text-white text-font-inter text-xl md:text-2xl lg:text-3xl leading-[1.35]">
                            Не продолжать продавать навыки по отдельности, а{" "}
                            <span className="text-violet-300">собрать их вокруг другой модели работы</span>.
                        </p>

                        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3">
                            {[
                                "Найти проблему",
                                "Определить решение",
                                "Реализовать",
                                "Масштабировать",
                            ].map((step, i) => (
                                <div key={i} className="flex items-center gap-5">
                                    <span className="text-white/60 text-sm md:text-base font-mono tracking-wide whitespace-nowrap">
                                        {step}
                                    </span>
                                    {i < 3 && (
                                        <span className="text-violet-400/50 text-base">→</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}