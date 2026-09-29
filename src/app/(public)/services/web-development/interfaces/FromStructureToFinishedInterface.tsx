import { stagesWebDevelopmentInterface } from "@/constants/constants-services/developmentStages";


export function FromStructureToFinishedInterface() {
    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Процесс</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 md:mb-20">
                    <div className="lg:col-span-5">
                        <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-tight">
                            Проектируем интерфейс от задачи до реализации
                        </h2>
                    </div>

                    <div className="lg:col-span-7">
                        <p className="text-white/60 text-font-inter text-base md:text-lg leading-relaxed">
                            Можно начать с уже существующего продукта, который неудобно использовать, с готового дизайна, который нужно реализовать, или вообще с идеи, где пока нет ни одного экрана.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {stagesWebDevelopmentInterface.map((stage, i) => (
                        <div
                            key={i}
                            className="group relative bg-[#0d0d0d] border border-white/10 rounded-xl p-6 md:p-8 transition-all duration-500 hover:border-white/30 hover:bg-[#131313] flex items-start gap-5 md:gap-6 min-h-47.5 md:min-h-50"
                        >
                            <span className="text-white/12 font-mono text-6xl md:text-7xl leading-none transition-colors duration-500 group-hover:text-white/30 shrink-0">
                                {stage.num}
                            </span>

                            <div className="flex-1 pt-1">
                                <h3 className="text-white text-lg md:text-xl font-semibold leading-snug">
                                    {stage.title}
                                </h3>
                                <p className="text-white/50 text-sm leading-relaxed mt-3 group-hover:text-white/75 transition-colors duration-500">
                                    {stage.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}