import { solvWebDevelopmentComplexWeb } from "@/constants/constants-services/solvingProblems";


export function MainIdeaComplexWeb() {
    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Когда это оправдано</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="max-w-5xl mb-16 md:mb-24">
                    <h2 className="text-white text-font-space text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
                        Не всё стоит разрабатывать с нуля. Но иногда другого нормального варианта нет.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-20 md:mb-28">
                    <div className="space-y-5">
                        <p className="text-white/85 text-font-inter text-base md:text-lg leading-relaxed">
                            Собственная разработка - это не самоцель.
                        </p>
                        <p className="text-white/65 text-font-inter text-base md:text-lg leading-relaxed">
                            Если готовый сервис полностью закрывает задачу, умеет работать с вашими процессами и не создаёт ограничений для роста, нет смысла делать собственную систему только ради того, чтобы она была собственной.
                        </p>
                    </div>

                    <div className="space-y-5">
                        <p className="text-white/85 text-font-inter text-base md:text-lg leading-relaxed">
                            Проблема начинается тогда, когда бизнесу приходится постоянно подстраиваться под возможности готового продукта.
                        </p>
                        <p className="text-white/65 text-font-inter text-base md:text-lg leading-relaxed">
                            Вы используете сразу несколько сервисов, вручную переносите данные между ними, отказываетесь от нужных сценариев, придумываете обходные решения или объясняете сотрудникам, почему определённый процесс «просто здесь так не работает».
                        </p>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
                    <p className="text-white text-font-space text-2xl md:text-3xl lg:text-4xl leading-tight">
                        В какой-то момент стоимость этих ограничений становится выше, чем разработка собственного решения.
                    </p>
                </div>

                <div className="border-t border-white/10">
                    <div className="py-5 md:py-6 border-b border-white/10 flex items-center gap-4">
                        <span className="text-white/40 text-xs uppercase tracking-[0.3em] font-mono">
                            Возможно, вам нужен собственный продукт, если
                        </span>
                    </div>

                    {solvWebDevelopmentComplexWeb.map((solv, i) => (
                        <div
                            key={i}
                            className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-6 md:py-8 border-b border-white/10 hover:border-white/25 transition-colors duration-300 cursor-default"
                        >
                            <span className="md:col-span-1 text-white/25 font-mono text-sm group-hover:text-white/50 transition-colors duration-300">
                                {solv.num}
                            </span>

                            <h3 className="md:col-span-5 text-white text-lg md:text-xl font-semibold leading-snug">
                                {solv.title}
                            </h3>

                            <p className="md:col-span-6 text-white/55 text-sm md:text-base leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                                {solv.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 md:mt-20 max-w-3xl mx-auto text-center">
                    <p className="text-white/65 text-font-inter text-sm md:text-base leading-relaxed">
                        Если вы узнали в этом свой процесс, это ещё не означает, что обязательно нужно писать всё с нуля. Сначала мы разбираемся, какую часть задачи действительно стоит решать собственной разработкой.
                    </p>
                </div>
            </div>
        </div>
    )
}