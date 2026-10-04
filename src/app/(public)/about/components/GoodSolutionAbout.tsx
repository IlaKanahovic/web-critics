

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
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Что мы считаем хорошим решением</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20 md:mb-28">
                    <div className="lg:col-span-7">
                        <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                            Не «качество», «сроки» и «индивидуальный подход»
                        </h2>
                    </div>

                    <div className="lg:col-span-5 lg:pt-4">
                        <p className="text-white/55 text-font-inter text-base md:text-lg leading-relaxed">
                            Эти слова ничего не говорят о том, как на самом деле принимаются решения. Вместо них - четыре принципа, по которым мы проверяем каждый проект.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden mb-20 md:mb-28">
                    {principles.map((item, i) => (
                        <div
                            key={i}
                            className="group relative bg-[#0a0a0a] hover:bg-[#131313] p-7 md:p-9 transition-colors duration-500 flex flex-col min-h-65 overflow-hidden"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-white/15 font-mono text-3xl md:text-4xl leading-none transition-colors duration-500 group-hover:text-violet-300/50">
                                    {item.num}
                                </span>
                                <span className="w-1.5 h-1.5 rounded-full bg-white/15 group-hover:bg-violet-400 transition-colors duration-500" />
                            </div>

                            <h3 className="text-white text-xl md:text-2xl font-semibold leading-snug flex-1">
                                {item.title}
                            </h3>

                            <p className="text-white/50 text-sm md:text-base leading-relaxed mt-5 pt-5 border-t border-white/8 group-hover:text-white/75 group-hover:border-white/15 transition-all duration-500">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mb-20 md:mb-28">
                    <div className="relative rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 md:p-12 lg:p-16 overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-violet-400/50 to-transparent" />
                        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-violet-500/8 blur-3xl pointer-events-none" />

                        <div className="relative max-w-4xl">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.8)]" />
                                <span className="text-violet-200/70 text-[10px] uppercase tracking-[0.35em] font-mono">
                                    И главное
                                </span>
                            </div>

                            <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-space leading-[1.1]">
                                Решение должно соответствовать масштабу проблемы
                            </h3>

                            <p className="text-white/55 text-base md:text-lg leading-relaxed mt-8 max-w-2xl">
                                Не каждую задачу нужно решать разработкой отдельного продукта. Иногда достаточно меньшего вмешательства - и это тоже хорошее решение.
                            </p>
                        </div>

                        <div className="relative mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                            {scale.map((item, i) => (
                                <div
                                    key={i}
                                    className="group relative flex flex-col gap-4 p-5 rounded-2xl border border-white/8 bg-white/1.5 hover:border-white/25 hover:bg-white/3 transition-all duration-500"
                                >
                                    <span className="text-white/20 font-mono text-xs tracking-[0.3em] group-hover:text-violet-300/60 transition-colors duration-500">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>

                                    <span className="text-white/70 text-sm md:text-base leading-snug group-hover:text-white transition-colors duration-500">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-white/40 text-font-space text-3xl md:text-4xl lg:text-5xl leading-[1.15]">
                        Мы не считаем разработку самоцелью.
                    </p>
                </div>
            </div>
        </div>
    )
}