import { solvWebDevelopmentOnlineStore } from "@/constants/constants-services/solvingProblems";


export function CanBeDoneInOnlineStore() {
    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Возможности</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
                    <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-tight">
                        Базовая система плюс нужные именно вам возможности
                    </h2>

                    <p className="text-white/60 text-font-inter text-base md:text-lg leading-relaxed mt-6">
                        Каждый магазин начинается с базовой системы, но собирается под конкретный бизнес. Что-то остаётся в минимальной версии, что-то добавляется или меняется под процесс.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-0">
                    {solvWebDevelopmentOnlineStore.map((solv, i) => (
                        <div
                            key={i}
                            className="group relative flex items-start gap-6 md:gap-8 py-7 md:py-9 border-t border-white/10 hover:border-white/30 transition-colors duration-500"
                        >
                            <span className="shrink-0 text-white/15 font-mono text-3xl md:text-4xl leading-none transition-colors duration-500 group-hover:text-white/40">
                                {solv.num}
                            </span>

                            <div className="flex-1 min-w-0">
                                <h3 className="text-white text-xl md:text-2xl font-semibold leading-snug">
                                    {solv.title}
                                </h3>

                                <p className="text-white/50 text-sm md:text-base leading-relaxed mt-2 group-hover:text-white/75 transition-colors duration-500">
                                    {solv.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 md:mt-16 max-w-3xl mx-auto text-center">
                    <p className="text-white/55 text-font-inter text-sm md:text-base leading-relaxed">
                        Для B2B, сложных товаров и нестандартных процессов функциональность магазина можно расширить: разные цены для клиентов, конфигураторы, сложные характеристики, автоматизация заказов и другие сценарии.
                    </p>
                </div>
            </div>
        </div>
    )
}