import { areasReliability } from "@/constants/constants-services/whatCanWeCheck";


export function WhatCanWeCheckSpecifically() {
    return (
        <div className="container">
            <div className="pt-42">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 light:via-line to-transparent" />
                    <span className="text-white/40 light:text-ink-muted text-xs uppercase tracking-widest">Области проверки</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 light:via-line to-transparent" />
                </div>

                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-white light:text-ink text-font-space text-4xl md:text-5xl">На что можем обратить внимание</h2>
                    <p className="text-white/60 light:text-ink-secondary text-font-inter text-base mt-4 leading-relaxed">
                        Надёжность складывается из множества факторов. Ниже — основные области, которые мы проверяем в зависимости от задачи.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 light:bg-line border border-white/5 light:border-line rounded-2xl overflow-hidden">
                    {areasReliability.map((area, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-[#0a0a0a] light:bg-white p-6 transition-colors duration-500 hover:bg-[#111111] light:hover:bg-accent/5 flex flex-col"
                        >
                            <div className="flex items-start justify-between mb-5">
                                <area.icon className="text-white/30 light:text-ink-muted group-hover:text-violet-300 light:group-hover:text-accent transition-colors duration-500 size-6" />
                                <span className="text-white/15 light:text-ink-muted text-xs font-mono tracking-widest">
                                    {String(idx + 1).padStart(2, "0")}
                                </span>
                            </div>
                            <h3 className="text-white light:text-ink text-lg font-semibold">{area.title}</h3>
                            <p className="text-white/50 light:text-ink-secondary text-sm leading-relaxed mt-2 flex-1">{area.desc}</p>
                            <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-linear-to-r from-violet-400/60 light:from-accent/60 to-transparent transition-all duration-700" />
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex items-center gap-4 max-w-3xl mx-auto">
                    <span className="h-px flex-1 bg-linear-to-r from-transparent to-white/10 light:to-line/40" />
                    <p className="text-white/40 light:text-ink-muted text-xs md:text-sm text-center leading-relaxed">
                        Конкретный набор проверок определяется после анализа продукта
                        <br />
                        и зависит от поставленной задачи.
                    </p>
                    <span className="h-px flex-1 bg-linear-to-l from-transparent to-white/10 light:to-line/40" />
                </div>
            </div>
        </div>
    )
}