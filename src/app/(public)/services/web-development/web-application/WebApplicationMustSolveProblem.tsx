import { solvWebDevelopmentWebApplication } from "@/constants/constants-services/solvingProblems";

export function WebApplicationMustSolveProblem() {
    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Задачи</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    <div className="lg:col-span-5">
                        <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-tight">
                            От автоматизации одного процесса до собственного цифрового продукта
                        </h2>
                    </div>

                    <div className="lg:col-span-7 space-y-5">
                        <p className="text-white/70 text-font-inter text-base md:text-lg leading-relaxed">
                            У веб-приложений нет одной стандартной задачи. Для одного бизнеса это может быть небольшая внутренняя система, которая экономит сотрудникам несколько часов каждую неделю. Для другого - клиентский портал, который снимает часть нагрузки с менеджеров. Для третьего - полноценный онлайн-сервис, на котором строится отдельное направление бизнеса.
                        </p>
                        <p className="text-white/50 text-font-inter text-sm md:text-base leading-relaxed">
                            Поэтому мы не предлагаем заранее определённый набор функций. Сначала определяем, что именно сейчас мешает бизнесу работать эффективнее, а затем подбираем под эту проблему необходимый набор инструментов.
                        </p>
                    </div>
                </div>

                <div className="mt-16 md:mt-20 flex flex-wrap justify-center gap-5">
                    {solvWebDevelopmentWebApplication.map((solv, i) => (
                        <div
                            key={i}
                            className="group relative bg-[#111111] border border-white/10 rounded-2xl p-6 md:p-7 transition-all duration-300 hover:border-white/25 hover:-translate-y-1 flex flex-col w-full md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)] min-h-65"
                        >
                            <span className="text-white/20 font-mono text-xs tracking-[0.3em] transition-colors duration-300 group-hover:text-white/40">
                                {solv.num}
                            </span>

                            <h3 className="text-white text-lg md:text-xl font-semibold leading-snug mt-4">
                                {solv.title}
                            </h3>

                            <p className="text-white/50 text-sm leading-relaxed mt-3 flex-1 group-hover:text-white/70 transition-colors duration-300">
                                {solv.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 md:mt-20 max-w-3xl mx-auto text-center">
                    <p className="text-white/60 text-font-inter text-sm md:text-base leading-relaxed">
                        Это только несколько примеров. Веб-приложение может решать совершенно другую задачу, которой нет в этом списке. Мы не ограничиваем решение заранее заданным набором сценариев - его определяет ваша проблема.
                    </p>
                </div>
            </div>
        </div>
    )
}