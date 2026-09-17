import { stagesReliability } from "@/constants/constants-services/developmentStages";


export function DevelopmentStagesReliability() {
    return (
        <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
            <div className="container px-4 md:px-10 lg:px-35">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">ЭТАПЫ РАБОТЫ</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 md:mb-24">
                    <div>
                        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl leading-[1.05] max-w-2xl">
                            От проблемы к стабильному продукту
                        </h2>
                    </div>
                    <div className="hidden lg:flex items-center gap-3 text-white/30 text-xs uppercase tracking-widest">
                        <span>05 этапов</span>
                        <span className="w-8 h-px bg-white/20" />
                        <span>полный цикл</span>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute left-4.75 md:left-6.75 top-2 bottom-2 w-px bg-linear-to-b from-white/25 via-white/10 to-transparent" />

                    <div className="space-y-4 md:space-y-6">
                        {stagesReliability.map((stage, i) => (
                            <div key={i} className="group relative flex gap-6 md:gap-10">
                                <div className="relative shrink-0 pt-6 md:pt-8">
                                    <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/15 bg-[#050505] flex items-center justify-center transition-all duration-500 group-hover:border-white/40 group-hover:scale-105">
                                        <span className="text-white/70 text-xs md:text-sm font-medium tracking-wider transition-colors duration-500 group-hover:text-white">
                                            {stage.num}
                                        </span>
                                        <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/4 transition-colors duration-500" />
                                    </div>
                                </div>

                                <div className="flex-1 relative rounded-2xl border border-white/6 bg-linear-to-b from-white/3 to-transparent p-6 md:p-8 lg:p-10 transition-all duration-500 group-hover:border-white/12 group-hover:from-white/5">
                                    <span className="absolute top-4 right-5 md:top-6 md:right-8 text-[80px] md:text-[120px] lg:text-[160px] font-bold text-white/2.5 leading-none select-none pointer-events-none">
                                        {stage.num}
                                    </span>

                                    <h3 className="relative text-white text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6">
                                        {stage.title}
                                    </h3>

                                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                        {stage.paragraphs.map((p, j) => (
                                            <p key={j} className="text-white/55 text-sm md:text-base leading-relaxed">
                                                {p}
                                            </p>
                                        ))}
                                    </div>

                                    <div className="absolute bottom-0 left-6 md:left-10 right-6 md:right-10 h-px bg-linear-to-b from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}