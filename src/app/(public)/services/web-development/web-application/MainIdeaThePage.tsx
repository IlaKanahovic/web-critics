import { principleWebdevelopmentWebApplication } from "@/constants/constants-services/howWeWork";


export function MainIdeaThePage() {
    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Главная мысль</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    <div className="lg:col-span-5 lg:sticky lg:top-32">
                        <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-tight">
                            Красиво - не значит удобно
                        </h2>

                        <div className="mt-8 space-y-5">
                            <p className="text-white/60 text-font-inter text-base leading-relaxed">
                                Веб-приложение может выглядеть идеально на презентации и при этом плохо работать в реальной жизни.
                            </p>
                            <p className="text-white/60 text-font-inter text-base leading-relaxed">
                                Красивый интерфейс не поможет сотруднику, если для простого действия ему приходится проходить пять экранов. Анимации не сделают систему удобнее, если пользователь не понимает, где находится нужная функция.
                            </p>
                            <p className="text-white text-font-inter text-base leading-relaxed font-medium">
                                Поэтому мы не начинаем разработку с вопроса «как это должно выглядеть?». Сначала разбираемся, что человек должен сделать и какой результат он должен получить.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-4">
                        {principleWebdevelopmentWebApplication.map((p, i) => (
                            <div
                                key={i}
                                className="group relative bg-[#111111] border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-500 hover:border-white/30 hover:bg-[#151515]"
                            >
                                <div className="flex items-start gap-5 md:gap-6">
                                    <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/15 flex items-center justify-center transition-all duration-500 group-hover:border-white/40">
                                        <span className="text-white/40 font-mono text-base md:text-lg group-hover:text-white transition-colors duration-500">
                                            {p.num}
                                        </span>
                                    </div>

                                    <div className="flex-1 pt-1">
                                        <h3 className="text-white text-xl md:text-2xl font-semibold leading-snug">
                                            {p.title}
                                        </h3>
                                        <p className="text-white/50 text-sm md:text-base leading-relaxed mt-2 group-hover:text-white/75 transition-colors duration-500">
                                            {p.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-24 md:mt-32 max-w-4xl mx-auto text-center">
                    <p className="text-white text-font-space text-3xl md:text-4xl lg:text-5xl leading-[1.2]">
                        Хорошее веб-приложение - это не то, на которое хочется смотреть.
                    </p>
                    <p className="text-white/40 text-font-space text-3xl md:text-4xl lg:text-5xl leading-[1.2] mt-2">
                        Это то, с которым удобно работать.
                    </p>
                </div>
            </div>
        </div>
    )
}