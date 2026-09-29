const columns = [
    {
        label: "Покупатель",
        num: "01",
        items: [
            "понятный каталог",
            "удобный поиск",
            "карточки товаров",
            "корзина",
            "оформление заказа",
            "оплата",
            "информация о заказе",
        ],
    },
    {
        label: "Ваша команда",
        num: "02",
        items: [
            "управление товарами",
            "управление заказами",
            "работа с клиентами",
            "изменение статусов",
            "управление контентом",
            "необходимые рабочие инструменты",
        ],
    },
    {
        label: "Бизнес",
        num: "03",
        items: [
            "единый процесс продаж",
            "подключённые сервисы",
            "автоматическая передача данных",
            "аналитика",
            "возможность дальнейшего развития",
        ],
    },
]

export function WhatYouGetOnlineStores() {
    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Результат</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
                    <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-tight">
                        Что будет готово после запуска
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {columns.map((column, i) => (
                        <div
                            key={i}
                            className="group relative flex flex-col"
                        >
                            <div className="flex items-center gap-3 pb-6 border-b border-white/15 group-hover:border-white/35 transition-colors duration-500">
                                <span className="text-white/25 font-mono text-sm tracking-[0.2em] group-hover:text-white/50 transition-colors duration-500">
                                    {column.num}
                                </span>

                                <span className="text-white text-xs uppercase tracking-[0.35em] font-mono">
                                    {column.label}
                                </span>

                                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors duration-500" />
                            </div>

                            <ul className="mt-6 space-y-3">
                                {column.items.map((item, j) => (
                                    <li
                                        key={j}
                                        className="flex items-start gap-3 text-white/70 text-sm md:text-base leading-relaxed"
                                    >
                                        <span className="mt-2 w-1 h-1 rounded-full bg-white/40 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16 md:mt-24 max-w-3xl mx-auto text-center">
                    <p className="text-white/70 text-font-inter text-sm md:text-base leading-relaxed">
                        Состав конкретного магазина зависит от вашего процесса продаж. Мы определяем необходимый набор функций до разработки, а не добавляем возможности просто потому, что они есть в типовом интернет-магазине.
                    </p>
                </div>
            </div>
        </div>
    )
}