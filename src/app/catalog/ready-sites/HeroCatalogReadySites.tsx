import { CardProductCatalogReadySites } from "./CardProductCatalogReadySites"

export function HeroCatalogReadySites() {
    const dataReadySites = [
        {
            id: 1,
            title: "Сайт для студии красоты",
            description: "Для салонов и частных мастеров",
            features: ["Онлайн-запись", "Каталог услуг", "Адаптивная версия"],
            price: 15000,
            priceMounth: '3 990₽/мес.',
            descPrice: "за готовый сайт с адаптацией",
            previewBg: "bg-gradient-to-br from-pink-500/20 to-purple-500/20",
        },
        {
            id: 2,
            title: "Лендинг для ресторана",
            description: "Для ресторанов, кафе и доставки",
            features: ["Меню", "Бронирование", "Интеграция с доставкой"],
            price: 15000,
            priceMounth: '3 990₽/мес.',
            descPrice: "за готовый сайт с адаптацией",
            previewBg: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
        },
    ]

    const forWhowArray = ["Все", "Услуги", "Красота", "Рестораны", "Специалисты", "Медицина", "E-commerce", "Другое"]
    const opportunitiesArray = ["Все", "Форма заявки", "Онлайн-запись", "Каталог", "Интернет-магазин", "Блог", "Интеграции"]
    const priceArray = ["Все", "До 10 000 ₽", "10 000–20 000 ₽", "20 000–30 000 ₽", "30 000 ₽+"]
    const quantityArray = ["Все", "5", "10", "25", "50"]
    const sortingArray = ["По популярности", "По цене ↑", "По цене ↓", "По новизне"]

    return (
        <div className="container">
            <div className="pt-42">
                <h1 className="text-font-cormorant text-[#f0f0f0] text-center text-[96px] leading-24 mt-8">Сайт уже готов. Осталось сделать его вашим.</h1>
                <h2 className="text-font-inter text-[#bcbebe] text-[18px] text-center mt-2">
                    Выберите подходящий вариант,
                    <br />
                    адаптируйте его под свой бизнес и запустите быстрее, чем индивидуальную разработку.
                </h2>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                    <div className="flex flex-wrap items-center gap-4 flex-1">
                        <span className="text-white/60 text-sm whitespace-nowrap">Найдено 2 решений</span>
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
                    {dataReadySites.map((site) => (
                        <CardProductCatalogReadySites key={site.id} {...site} />
                    ))}
                </div>
            </div>
        </div>
    )
}

