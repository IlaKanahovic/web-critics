import { stagesWebDevelopmentComplexWeb } from "@/constants/constants-services/developmentStages";


export function WhatExactlyToBuildComplexWeb() {
    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Что нужно понять до разработки</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 md:mb-24">
                    <div className="lg:col-span-7">
                        <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                            До разработки нужно понять не только «что сделать», но и «как это должно работать»
                        </h2>
                    </div>

                    <div className="lg:col-span-5 lg:pt-3 space-y-5">
                        <p className="text-white/85 text-font-inter text-base md:text-lg leading-relaxed">
                            В сложном продукте ошибка на уровне логики обходится гораздо дороже, чем ошибка в отдельном экране.
                        </p>
                        <p className="text-white/65 text-font-inter text-sm md:text-base leading-relaxed">
                            Если неправильно продумать пользовательский сценарий, придётся переделывать интерфейс. Если неправильно определить структуру данных - изменения затронут уже разработанные части системы. Если не учесть роль одного из пользователей - проблема проявится только тогда, когда продукт начнут использовать в реальной работе.
                        </p>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
                    <p className="text-white text-font-space text-2xl md:text-3xl lg:text-4xl leading-tight">
                        Поэтому мы не начинаем с фразы «давайте сначала сверстаем главную страницу».
                    </p>
                    <p className="text-violet-200/70 text-font-space text-2xl md:text-3xl lg:text-4xl leading-tight mt-2">
                        Сначала разбираемся в самом процессе.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {stagesWebDevelopmentComplexWeb.map((stage, i) => (
                        <div
                            key={i}
                            className="group relative bg-[#0d0d0d] border border-white/10 rounded-2xl p-7 md:p-8 transition-all duration-500 hover:border-white/30 hover:bg-[#131313] flex flex-col min-h-70 overflow-hidden"
                        >
                            <span className="absolute -top-4 -right-2 text-[140px] font-bold leading-none text-white/3 group-hover:text-violet-400/8 transition-colors duration-500 select-none pointer-events-none font-mono">
                                {stage.num}
                            </span>

                            <div className="relative flex items-center gap-3 mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-violet-400/60 group-hover:bg-violet-400 group-hover:shadow-[0_0_10px_rgba(167,139,250,0.8)] transition-all duration-500" />
                                <span className="text-white/35 font-mono text-[10px] tracking-[0.3em] group-hover:text-white/60 transition-colors duration-500">
                                    Этап {stage.num}
                                </span>
                            </div>

                            <h3 className="relative text-white text-xl md:text-2xl font-semibold leading-snug">
                                {stage.title}
                            </h3>

                            <div className="relative mt-5 pt-5 border-t border-white/8 flex-1">
                                <ul className="space-y-2.5">
                                    {stage.questions.map((question, j) => (
                                        <li key={j} className="flex items-start gap-2.5">
                                            <span className="mt-2 w-1 h-1 rounded-full bg-white/25 shrink-0 group-hover:bg-violet-400/60 transition-colors duration-500" />
                                            <span className="text-white/55 text-xs md:text-sm leading-relaxed group-hover:text-white/75 transition-colors duration-500">
                                                {question}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}