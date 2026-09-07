import { CardProductCatalogBots } from "./CardProductCatalogBots"


export function HeroCatalogBots() {
    const dataBots = [
        {
            id: 1,
            title: "Бот для обработки заявок",
            description: "Собирает обращения клиентов, задаёт необходимые вопросы и передаёт готовую заявку вам или в CRM.",
            features: ["Сбор заявок", "Уведомления", "Интеграция с CRM"],
            price: 13000,
            priceMounth: '2 990₽/мес.',
            previewBg: "bg-gradient-to-br from-pink-500/20 to-purple-500/20",
        },
        {
            id: 2,
            title: "Автоуведомления клентам",
            description: "Telegram-бот, который сам напоминает клиентам о записи, подтверждает визит и снижает неявки.",
            features: ["Уведомления", "Автоматические вопросы", "Telegram-бот"],
            price: 13000,
            priceMounth: '2 990₽/мес.',
            previewBg: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
        },
    ]

    const forWhowArray = ["Все", "Продажи", "Запись", "Уведомления", "Автоматизация", "Внутренние задачи"]
    const opportunitiesArray = ["Все", "Диалог", "Формы", "Уведомления", "Каталог", "Заявки", "Работа с данными", "AI"]
    const priceArray = ["Все", "До 5 000 ₽", "5 000–10 000 ₽", "10 000–20 000 ₽", "20 000-35 000 ₽", "35 000+ ₽"]
    const quantityArray = ["Все", "5", "10", "25", "50"]
    const sortingArray = ["По популярности", "По цене ↑", "По цене ↓", "По новизне"]

    return (
        <div className="container">
            <div className="pt-24">
                <h1 className="text-font-cormorant text-[#f0f0f0] text-center text-[80px] leading-24 mt-8">Бот уже готов. Осталось настроить его под ваши задачи.</h1>
                <h2 className="text-font-inter text-[#bcbebe] text-[18px] text-center mt-2">
                    Выберите готовое решение, адаптируйте сценарии под свой бизнес
                    <br />
                    и запустите автоматизацию без разработки с нуля. Для Telegram, сайтов, внутренних процессов и других задач.
                </h2>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                    <div className="flex flex-wrap items-center gap-4 flex-1">
                        <span className="text-white/60 text-sm whitespace-nowrap">Найдено решений: 2</span>
                        <details className="relative group">
                            <summary className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm font-medium cursor-pointer hover:bg-white/10 hover:border-white/30 transition-all duration-300 list-none">
                                Тип бизнеса: Все
                                <svg className="w-3 h-3 ml-1 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="absolute left-0 top-full mt-2 z-50 bg-[#111111] border border-white/10 rounded-xl shadow-2xl p-2 min-w-40 backdrop-blur-sm">
                                {forWhowArray.map((item) => (
                                    <div key={item} className="px-3 py-1.5 text-white/80 hover:text-white hover:bg-white/5 rounded-lg text-sm cursor-pointer transition-colors">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </details>
                        <details className="relative group">
                            <summary className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm font-medium cursor-pointer hover:bg-white/10 hover:border-white/30 transition-all duration-300 list-none">
                                Возможности: Все
                                <svg className="w-3 h-3 ml-1 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="absolute left-0 top-full mt-2 z-50 bg-[#111111] border border-white/10 rounded-xl shadow-2xl p-2 min-w-45 backdrop-blur-sm">
                                {opportunitiesArray.map((item) => (
                                    <div key={item} className="px-3 py-1.5 text-white/80 hover:text-white hover:bg-white/5 rounded-lg text-sm cursor-pointer transition-colors">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </details>
                        <details className="relative group">
                            <summary className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm font-medium cursor-pointer hover:bg-white/10 hover:border-white/30 transition-all duration-300 list-none">
                                Цена: Все
                                <svg className="w-3 h-3 ml-1 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="absolute left-0 top-full mt-2 z-50 bg-[#111111] border border-white/10 rounded-xl shadow-2xl p-2 min-w-40 backdrop-blur-sm">
                                {priceArray.map((item) => (
                                    <div key={item} className="px-3 py-1.5 text-white/80 hover:text-white hover:bg-white/5 rounded-lg text-sm cursor-pointer transition-colors">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </details>
                        <details className="relative group">
                            <summary className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm font-medium cursor-pointer hover:bg-white/10 hover:border-white/30 transition-all duration-300 list-none">
                                Количество: Все
                                <svg className="w-3 h-3 ml-1 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="absolute left-0 top-full mt-2 z-50 bg-[#111111] border border-white/10 rounded-xl shadow-2xl p-2 min-w-40 backdrop-blur-sm">
                                {quantityArray.map((item) => (
                                    <div key={item} className="px-3 py-1.5 text-white/80 hover:text-white hover:bg-white/5 rounded-lg text-sm cursor-pointer transition-colors">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </details>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-white/40 text-xs uppercase tracking-wider">Сортировка:</span>
                        <details className="relative group">
                            <summary className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm font-medium cursor-pointer hover:bg-white/10 hover:border-white/30 transition-all duration-300 list-none">
                                По популярности
                                <svg className="w-3 h-3 ml-1 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="absolute right-0 top-full mt-2 z-50 bg-[#111111] border border-white/10 rounded-xl shadow-2xl p-2 min-w-40 backdrop-blur-sm">
                                {sortingArray.map((item) => (
                                    <div key={item} className="px-3 py-1.5 text-white/80 hover:text-white hover:bg-white/5 rounded-lg text-sm cursor-pointer transition-colors">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </details>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {dataBots.map((bot) => (
                        <CardProductCatalogBots key={bot.id} {...bot} />
                    ))}
                </div>
            </div>
        </div>
    )
}

