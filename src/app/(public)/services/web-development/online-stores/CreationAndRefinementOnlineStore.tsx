import { createItemswebDevelopmentOnlineStore, refineItemswebDevelopmentOnlineStore } from "@/constants/constants-services/developed";

export function CreationAndRefinementOnlineStore() {
    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 light:via-line to-transparent" />
                    <span className="text-white/40 light:text-ink-muted text-xs uppercase tracking-widest">Два пути</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 light:via-line to-transparent" />
                </div>

                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
                    <h2 className="text-white light:text-ink text-font-space text-4xl md:text-5xl lg:text-6xl leading-tight">
                        Магазин с нуля или работа с существующим
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    <div className="group relative bg-[#0a0a0a] light:bg-white border border-white/10 light:border-line rounded-3xl p-8 md:p-10 lg:p-12 transition-all duration-500 hover:border-white/25 light:hover:border-accent/40 flex flex-col">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-2 h-2 rounded-full bg-white group-hover:shadow-[0_0_12px_rgba(255,255,255,0.6)] light:group-hover:shadow-accent/30 transition-shadow duration-500" />
                            <span className="text-white/70 light:text-ink-secondary text-[10px] uppercase tracking-[0.35em] font-mono">
                                Создать с нуля
                            </span>
                        </div>

                        <h3 className="text-white light:text-ink text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1]">
                            Если интернет-магазина ещё нет
                        </h3>

                        <p className="text-white/85 light:text-ink text-base md:text-lg leading-relaxed mt-6">
                            Начинаем с того, как устроены ваши продажи. Определяем структуру каталога, путь покупателя, способы оплаты и доставки, административную часть и необходимые интеграции.
                        </p>

                        <p className="text-white/85 light:text-ink text-base md:text-lg leading-relaxed mt-4">
                            После этого проектируем и разрабатываем магазин, подключаем сервисы, проверяем основные сценарии и запускаем.
                        </p>

                        <div className="mt-10 pt-8 border-t border-white/15 light:border-line">
                            <span className="text-white/70 light:text-ink-secondary text-[10px] uppercase tracking-[0.35em] font-mono">
                                Что входит в работу
                            </span>

                            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5">
                                {createItemswebDevelopmentOnlineStore.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-white/90 light:text-ink text-sm">
                                        <span className="mt-2 w-1 h-1 rounded-full bg-white/60 light:bg-accent shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="group relative bg-[#0a0a0a] light:bg-white border border-white/10 light:border-line rounded-3xl p-8 md:p-10 lg:p-12 transition-all duration-500 hover:border-white/25 light:hover:border-accent/40 flex flex-col">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-2 h-2 rounded-full bg-white group-hover:shadow-[0_0_12px_rgba(255,255,255,0.6)] light:group-hover:shadow-accent/30 transition-shadow duration-500" />
                            <span className="text-white/70 light:text-ink-secondary text-[10px] uppercase tracking-[0.35em] font-mono">
                                Доработать существующий
                            </span>
                        </div>

                        <h3 className="text-white light:text-ink text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1]">
                            Если магазин уже работает
                        </h3>

                        <p className="text-white/85 light:text-ink text-base md:text-lg leading-relaxed mt-6">
                            Необязательно начинать всё сначала. Сначала смотрим, что в текущей системе уже работает, где возникают проблемы и каких возможностей не хватает.
                        </p>

                        <p className="text-white/85 light:text-ink text-base md:text-lg leading-relaxed mt-4">
                            После этого можно доработать отдельную часть, добавить новую функциональность, подключить интеграцию или переработать магазин глубже, если текущий фундамент действительно мешает развитию.
                        </p>

                        <div className="mt-10 pt-8 border-t border-white/15 light:border-line">
                            <span className="text-white/70 light:text-ink-secondary text-[10px] uppercase tracking-[0.35em] font-mono">
                                Что можно изменить
                            </span>

                            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5">
                                {refineItemswebDevelopmentOnlineStore.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-white/90 light:text-ink text-sm">
                                        <span className="mt-2 w-1 h-1 rounded-full bg-white/60 light:bg-accent shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 md:mt-24 max-w-3xl mx-auto text-center">
                    <p className="text-white light:text-ink text-font-space text-2xl md:text-3xl lg:text-4xl leading-tight">
                        Не предлагаем переделывать магазин целиком, если проблему можно решить точечной доработкой.
                    </p>
                </div>
            </div>
        </div>
    )
}