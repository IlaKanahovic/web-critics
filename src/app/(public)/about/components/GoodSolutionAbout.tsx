

export function GoodSolutionAbout() {
    const principles = [
        {
            num: "01",
            title: "Решение должно быть обоснованным",
            desc: "Мы должны понимать, зачем существует каждая существенная часть проекта и какую задачу она решает.",
        },
        {
            num: "02",
            title: "Решение должно работать в реальном процессе",
            desc: "Продукт может прекрасно выглядеть в макете и совершенно неудобно использоваться каждый день. Поэтому реальный сценарий использования важнее красивой демонстрации.",
        },
        {
            num: "03",
            title: "Решение не должно создавать новую проблему",
            desc: "Автоматизация, которая требует постоянного ручного контроля, не всегда является автоматизацией. Новая система, которую никто не понимает, не обязательно лучше старой.",
        },
        {
            num: "04",
            title: "Решение должно иметь возможность развиваться",
            desc: "Если бизнес растёт, цифровой продукт не должен превращаться в ограничение только потому, что его изначально сделали под слишком узкий сценарий.",
        },
    ]

    const scale = [
        { label: "Изменить существующий процесс" },
        { label: "Добавить одну интеграцию" },
        { label: "Переработать интерфейс" },
        { label: "Система с нуля" },
    ]

    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 light:via-line to-transparent" />
                    <span className="text-white/40 light:text-ink-muted text-xs uppercase tracking-widest">Что мы считаем хорошим решением</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 light:via-line to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20 md:mb-28">
                    <div className="lg:col-span-7">
                        <h2 className="text-white light:text-ink text-font-space text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                            Не «качество», «сроки» и «индивидуальный подход»
                        </h2>
                    </div>

                    <div className="lg:col-span-5 lg:pt-4">
                        <p className="text-white/55 light:text-ink-secondary text-font-inter text-base md:text-lg leading-relaxed">
                            Эти слова ничего не говорят о том, как на самом деле принимаются решения. Вместо них - четыре принципа, по которым мы проверяем каждый проект.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 light:bg-line border border-white/5 light:border-line rounded-2xl overflow-hidden mb-20 md:mb-28">
                    {principles.map((item, i) => (
                        <div
                            key={i}
                            className="group relative bg-[#0a0a0a] light:bg-white hover:bg-[#131313] light:hover:bg-canvas p-7 md:p-9 transition-colors duration-500 flex flex-col min-h-65 overflow-hidden"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-white/15 light:text-ink-muted font-mono text-3xl md:text-4xl leading-none transition-colors duration-500 group-hover:text-violet-300/50 light:group-hover:text-accent">
                                    {item.num}
                                </span>
                                <span className="w-1.5 h-1.5 rounded-full bg-white/15 light:bg-line group-hover:bg-violet-400 light:group-hover:bg-accent transition-colors duration-500" />
                            </div>

                            <h3 className="text-white light:text-ink text-xl md:text-2xl font-semibold leading-snug flex-1">
                                {item.title}
                            </h3>

                            <p className="text-white/50 light:text-ink-secondary text-sm md:text-base leading-relaxed mt-5 pt-5 border-t border-white/8 light:border-line group-hover:text-white/75 light:group-hover:text-ink group-hover:border-white/15 light:group-hover:border-accent/40 transition-all duration-500">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mb-20 md:mb-28">
                    <div className="relative rounded-3xl border border-white/10 light:border-line bg-[#0a0a0a] light:bg-white light:shadow-card p-8 md:p-12 lg:p-16 overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-violet-400/50 light:via-accent/50 to-transparent" />
                        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-violet-500/8 light:bg-accent/8 blur-3xl pointer-events-none" />

                        <div className="relative max-w-4xl">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 light:bg-accent shadow-[0_0_10px_rgba(167,139,250,0.8)] light:shadow-accent/30" />
                                <span className="text-violet-200/70 light:text-accent text-[10px] uppercase tracking-[0.35em] font-mono">
                                    И главное
                                </span>
                            </div>

                            <h3 className="text-white light:text-ink text-3xl md:text-4xl lg:text-5xl font-space leading-[1.1]">
                                Решение должно соответствовать масштабу проблемы
                            </h3>

                            <p className="text-white/55 light:text-ink-secondary text-base md:text-lg leading-relaxed mt-8 max-w-2xl">
                                Не каждую задачу нужно решать разработкой отдельного продукта. Иногда достаточно меньшего вмешательства - и это тоже хорошее решение.
                            </p>
                        </div>

                        <div className="relative mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                            {scale.map((item, i) => (
                                <div
                                    key={i}
                                    className="group relative flex flex-col gap-4 p-5 rounded-2xl border border-white/8 light:border-line bg-white/1.5 light:bg-white light:shadow-card hover:border-white/25 light:hover:border-accent/40 hover:bg-white/3 light:hover:bg-canvas transition-all duration-500"
                                >
                                    <span className="text-white/20 light:text-ink-muted font-mono text-xs tracking-[0.3em] group-hover:text-violet-300/60 light:group-hover:text-accent transition-colors duration-500">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>

                                    <span className="text-white/70 light:text-ink-secondary text-sm md:text-base leading-snug group-hover:text-white light:group-hover:text-ink transition-colors duration-500">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-white/40 light:text-ink-muted text-font-space text-3xl md:text-4xl lg:text-5xl leading-[1.15]">
                        Мы не считаем разработку самоцелью.
                    </p>
                </div>
            </div>
        </div>
    )
}