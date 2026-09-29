import { solvWebDevelopmentInterface } from "@/constants/constants-services/solvingProblems"


export function WhatIsInInterface() {
    const levels = solvWebDevelopmentInterface

    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Понятие</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    <div className="lg:col-span-5">
                        <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-tight">
                            Интерфейс - это не просто дизайн экранов
                        </h2>
                    </div>

                    <div className="lg:col-span-7 space-y-5">
                        <p className="text-white/80 text-font-inter text-lg md:text-xl leading-relaxed">
                            Интерфейс - это способ, которым человек взаимодействует с цифровым продуктом.
                        </p>
                        <p className="text-white/60 text-font-inter text-base md:text-lg leading-relaxed">
                            Это не только цвета, шрифты и расположение кнопок. В хорошем интерфейсе заранее продумано, какую информацию пользователь увидит, какие действия сможет выполнить, что произойдёт после каждого действия и как система поможет ему получить нужный результат.
                        </p>
                        <p className="text-white text-font-inter text-base md:text-lg leading-relaxed font-medium">
                            Поэтому мы работаем не только с внешним видом отдельных экранов. Мы собираем целостную систему взаимодействия - от структуры и навигации до состояний элементов и поведения интерфейса.
                        </p>
                    </div>
                </div>

                <div className="mt-20 md:mt-28">
                    <div className="mb-12 flex items-center gap-4">
                        <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                        <span className="text-white/40 text-xs uppercase tracking-widest">Визуальное сравнение</span>
                        <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative rounded-2xl border border-white/10 p-6 md:p-8 bg-white/1">
                            <div className="absolute -top-3 left-6 px-3 py-0.5 bg-[#050505] text-white/40 text-[10px] uppercase tracking-[0.3em] font-mono">
                                {levels[3].title}
                            </div>
                            <p className="text-white/40 text-xs md:text-sm leading-relaxed max-w-md mb-6">
                                {levels[3].desc}
                            </p>

                            <div className="relative rounded-2xl border border-white/15 p-6 md:p-8 bg-white/2">
                                <div className="absolute -top-3 left-6 px-3 py-0.5 bg-[#050505] text-white/50 text-[10px] uppercase tracking-[0.3em] font-mono">
                                    {levels[2].title}
                                </div>
                                <p className="text-white/50 text-xs md:text-sm leading-relaxed max-w-md mb-6">
                                    {levels[2].desc}
                                </p>

                                <div className="relative rounded-2xl border border-white/20 p-6 md:p-8 bg-white/3">
                                    <div className="absolute -top-3 left-6 px-3 py-0.5 bg-[#050505] text-white/60 text-[10px] uppercase tracking-[0.3em] font-mono">
                                        {levels[1].title}
                                    </div>
                                    <p className="text-white/60 text-xs md:text-sm leading-relaxed max-w-md mb-6">
                                        {levels[1].desc}
                                    </p>

                                    <div className="relative rounded-2xl border border-white/25 p-6 md:p-8 bg-white/4">
                                        <div className="absolute -top-3 left-6 px-3 py-0.5 bg-[#050505] text-white/80 text-[10px] uppercase tracking-[0.3em] font-mono">
                                            {levels[0].title}
                                        </div>
                                        <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-md">
                                            {levels[0].desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 md:mt-20 max-w-2xl mx-auto text-center">
                    <p className="text-white/60 text-font-inter text-sm md:text-base leading-relaxed">
                        Именно поэтому мы можем работать как с отдельным интерфейсом, так и с интерфейсом внутри полноценного веб-продукта.
                    </p>
                </div>
            </div>
        </div>
    )
}