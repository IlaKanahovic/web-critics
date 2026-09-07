import { CardProductCatalogReadyModels } from "./CardProductCatalogReadyModels"



export function HeroCatalogReadyModels() {
    const dataReadyModels = [
        {
            id: 1,
            title: "Генератор отчётов",
            description: "Собирает данные из нескольких источников и автоматически формирует понятный отчёт по заданному шаблону.",
            features: ["Автоматические отчёты", "Экспорт данных", "Сбор данных"],
            price: 12000,
            priceMounth: '1 990₽/мес.',
            previewBg: "bg-gradient-to-br from-pink-500/20 to-purple-500/20",
        }
    ]

    const forWhowArray = ["Все", "Автоматизация", "Работа с данными", "Аналитика", "Интеграции", "Внутренние процессы", "Контроль и мониторинг", "Работа с контентом"]
    const opportunitiesArray = ["Все", "Обработка данных", "Сбор данных", "Генерация отчётов", "Уведомления", "Интеграции", "API", "AI", "Планирование"]
    const connectionArray = ["Все", "CRM", "Telegram", "Таблицы", "API", "Сайт", "Внешние сервисы", "Внутренняя система"]
    const priceArray = ["Все", "До 5 000 ₽", "5 000–10 000 ₽", "10 000–20 000 ₽", "20 000-35 000 ₽", "35 000+ ₽"]
    const quantityArray = ["Все", "5", "10", "25", "50"]
    const sortingArray = ["По популярности", "По цене ↑", "По цене ↓", "По новизне"]

    return (
        <div className="container">
            <div className="pt-24">
                <h1 className="text-font-cormorant text-[#f0f0f0] text-center text-[80px] leading-24 mt-8">Инструмент уже готов. Осталось встроить его в вашу работу.</h1>
                <h2 className="text-font-inter text-[#bcbebe] text-[18px] text-center mt-2">
                    Выберите готовое цифровое решение,
                    <br />
                    адаптируйте его под свой процесс и начните использовать без разработки с нуля.
                </h2>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                    <div className="flex flex-wrap items-center gap-4 flex-1">
                        <span className="text-white/60 text-sm whitespace-nowrap">Найдено решений: 1</span>
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
                                Подключение: Все
                                <svg className="w-3 h-3 ml-1 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="absolute left-0 top-full mt-2 z-50 bg-[#111111] border border-white/10 rounded-xl shadow-2xl p-2 min-w-45 backdrop-blur-sm">
                                {connectionArray.map((item) => (
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
                    {dataReadyModels.map((tool) => (
                        <CardProductCatalogReadyModels key={tool.id} {...tool} />
                    ))}
                </div>
            </div>
        </div>
    )
}

