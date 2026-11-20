import { itemsWebDevelopmentSites } from "@/constants/constants-services/developed"

export function CanIncludedInSite() {
    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 light:via-line to-transparent" />
                    <span className="text-white/40 light:text-ink-muted text-xs uppercase tracking-widest">Возможности</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 light:via-line to-transparent" />
                </div>

                <div className="max-w-3xl">
                    <h2 className="text-white light:text-ink text-font-space text-4xl md:text-5xl lg:text-6xl leading-tight">
                        Сайт собирается вокруг задачи
                    </h2>

                    <div className="mt-8 space-y-4">
                        <p className="text-white/70 light:text-ink-secondary text-font-inter text-base md:text-lg leading-relaxed">
                            У каждого проекта свой набор требований. Поэтому мы не предлагаем всем одинаковый набор функций и не заставляем выбирать возможности, которые вам не нужны.
                        </p>
                        <p className="text-white/50 light:text-ink-secondary text-font-inter text-sm md:text-base leading-relaxed">
                            В зависимости от задачи сайт может включать только необходимое или постепенно превратиться в полноценный цифровой инструмент для бизнеса.
                        </p>
                    </div>
                </div>

                <div className="mt-16 md:mt-20 border-t border-white/10 light:border-line">
                    {itemsWebDevelopmentSites.map((item, i) => (
                        <div
                            key={i}
                            className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-6 md:py-8 border-b border-white/10 light:border-line hover:border-white/25 light:hover:border-accent/40 transition-colors duration-300 cursor-default"
                        >
                            <span className="md:col-span-1 text-white/25 light:text-ink-muted font-mono text-sm group-hover:text-white/50 light:group-hover:text-accent transition-colors duration-300">
                                {item.num}
                            </span>

                            <div className="md:col-span-1">
                                <item.icon className="text-white/40 light:text-ink-muted group-hover:text-white light:group-hover:text-accent-hover size-5 transition-colors duration-300" />
                            </div>

                            <h3 className="md:col-span-3 text-white light:text-ink text-lg md:text-xl font-semibold leading-snug">
                                {item.title}
                            </h3>

                            <p className="md:col-span-7 text-white/50 light:text-ink-secondary text-sm leading-relaxed group-hover:text-white/70 light:group-hover:text-ink transition-colors duration-300">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 md:mt-20 max-w-2xl mx-auto text-center">
                    <p className="text-white/60 light:text-ink-secondary text-font-inter text-sm md:text-base leading-relaxed">
                        Это не фиксированный список возможностей. Мы определяем состав сайта исходя из того, какую задачу он должен решить и как должен работать ваш бизнес.
                    </p>
                </div>
            </div>
        </div>
    )
}