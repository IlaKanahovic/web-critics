import { businessFlowWebDevelopmentOnlineStore, stagesWebDevelopmentOnlineStore } from "@/constants/constants-services/developmentStages";

export function PurchaseGoesOnlineStores() {
    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Путь покупателя</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20 md:mb-28">
                    <div className="lg:col-span-5">
                        <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-tight">
                            От товара до заказа - один понятный путь
                        </h2>
                    </div>

                    <div className="lg:col-span-7">
                        <p className="text-white/60 text-font-inter text-base md:text-lg leading-relaxed">
                            Пользователь видит семь понятных шагов от первого знакомства с товаром до получения заказа. Каждый шаг либо помогает принять решение, либо упрощает следующее действие.
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <div className="hidden lg:block absolute top-10.5 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-3">
                        {stagesWebDevelopmentOnlineStore.map((stage, i) => (
                            <div key={i} className="group relative flex flex-col">
                                <div className="flex items-center gap-4 lg:flex-col lg:gap-0 lg:items-center">
                                    <span className="text-white/20 font-mono text-3xl lg:text-4xl leading-none transition-colors duration-500 group-hover:text-white/60 lg:bg-[#050505] lg:px-3 lg:py-2 lg:relative lg:z-10">
                                        {stage.num}
                                    </span>

                                    <div className="lg:hidden flex-1 h-px bg-white/10" />
                                </div>

                                <h3 className="text-white text-base md:text-lg font-semibold leading-snug mt-3 lg:text-center lg:mt-4">
                                    {stage.title}
                                </h3>

                                <p className="text-white/45 text-xs leading-relaxed mt-1 lg:text-center group-hover:text-white/70 transition-colors duration-500">
                                    {stage.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 md:mt-28">
                    <div className="mb-10 flex items-center gap-4">
                        <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                        <span className="text-white/40 text-xs uppercase tracking-widest">Внутри бизнеса</span>
                        <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-5">
                        {businessFlowWebDevelopmentOnlineStore.map((step, i) => (
                            <div
                                key={i}
                                className="relative bg-white/2 border border-white/10 rounded-xl p-5 md:p-6 transition-all duration-500 hover:border-white/25 hover:bg-white/4"
                            >
                                <span className="text-white/25 font-mono text-[10px] tracking-[0.3em]">
                                    {String(i + 1).padStart(2, "0")}
                                </span>

                                <h3 className="text-white text-base font-semibold leading-snug mt-3">
                                    {step.title}
                                </h3>

                                <p className="text-white/45 text-xs leading-relaxed mt-2">
                                    {step.desc}
                                </p>

                                {i < businessFlowWebDevelopmentOnlineStore.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-2.5 lg:-right-3 -translate-y-1/2 z-10">
                                        <div className="w-1 h-1 rounded-full bg-white/30" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}