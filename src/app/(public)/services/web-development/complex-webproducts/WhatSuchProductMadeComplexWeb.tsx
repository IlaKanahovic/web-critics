const layers = [
    { num: "01", title: "Пользователи", items: ["Клиент", "Сотрудник", "Партнёр", "Администратор"] },
    { num: "02", title: "Интерфейс", items: ["Личный кабинет", "Рабочее пространство", "Формы", "Таблицы", "Дашборды"] },
    { num: "03", title: "Логика продукта", items: ["Правила", "Статусы", "Расчёты", "Права доступа", "Сценарии"] },
    { num: "04", title: "Данные", items: ["Пользователи", "Заказы", "Документы", "Товары", "История", "Результаты"] },
    { num: "05", title: "Интеграции", items: ["CRM", "Платежи", "Учёт", "API", "Внешние сервисы"] },
    { num: "06", title: "Автоматизация", items: ["Уведомления", "Синхронизация", "Обработка данных", "Фоновые процессы"] },
]

export function WhatSuchProductMadeComplexWeb() {
    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Из чего состоит продукт</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 md:mb-24">
                    <div className="lg:col-span-7">

                        <h2 className="text-white text-font-space text-4xl mt-8 md:text-5xl lg:text-6xl leading-[1.05]">
                            За одним интерфейсом скрывается целая система
                        </h2>
                    </div>

                    <div className="lg:col-span-5 lg:pt-8">
                        <div className="relative rounded-2xl border border-white/10 bg-white/2 p-6 md:p-7">
                            <div className="absolute top-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-violet-400/40 to-transparent" />

                            <p className="text-white text-font-inter text-lg md:text-xl leading-relaxed font-medium">
                                Пользователь видит экран, кнопку, форму или таблицу. Но сам продукт работает значительно глубже.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-20 md:mb-28">
                    <p className="text-white/65 text-font-inter text-base md:text-lg leading-relaxed">
                        Когда человек нажимает кнопку, система должна понять, кто он, имеет ли он право выполнить действие, какие данные нужно изменить, что должно произойти дальше и кому нужно передать результат.
                    </p>

                    <p className="text-white/85 text-font-inter text-base md:text-lg leading-relaxed">
                        Поэтому сложный продукт нельзя спроектировать только как набор красивых экранов. Интерфейс, логика, данные и внешние системы должны быть связаны между собой ещё до того, как продукт попадёт к пользователю.
                    </p>
                </div>

                <div className="relative rounded-3xl border border-white/10 bg-[#0a0a0a] p-6 md:p-10 lg:p-14 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-violet-400/40 to-transparent" />
                    <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-violet-500/8 blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-blue-500/6 blur-3xl pointer-events-none" />

                    <div className="relative flex flex-col gap-3">
                        {layers.map((layer, i) => (
                            <div key={i} className="group">
                                <div className="relative rounded-xl border border-white/10 bg-white/1.5 px-5 md:px-7 py-5 md:py-6 transition-all duration-500 hover:border-white/30 hover:bg-white/3">
                                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                                        <div className="flex items-center gap-4 md:gap-6 md:w-70 shrink-0">
                                            <span className="text-white/15 font-mono text-3xl md:text-4xl leading-none transition-colors duration-500 group-hover:text-violet-300/50">
                                                {layer.num}
                                            </span>

                                            <h3 className="text-white text-lg md:text-xl font-semibold leading-snug">
                                                {layer.title}
                                            </h3>
                                        </div>

                                        <div className="flex-1 flex flex-wrap items-center gap-x-2 gap-y-1.5">
                                            {layer.items.map((item, j) => (
                                                <span key={j} className="flex items-center gap-2">
                                                    <span className="text-white/65 text-sm md:text-base">
                                                        {item}
                                                    </span>
                                                    {j < layer.items.length - 1 && (
                                                        <span className="text-white/20 text-sm">·</span>
                                                    )}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {i < layers.length - 1 && (
                                    <div className="flex justify-center py-1">
                                        <div className="w-px h-3 bg-white/10" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 md:mt-20 max-w-3xl mx-auto text-center">
                    <p className="text-white/65 text-font-inter text-sm md:text-base leading-relaxed">
                        Всё это не обязательно должно присутствовать в каждом проекте. Состав системы определяется задачей.
                    </p>
                    <p className="text-white/65 text-font-inter text-sm md:text-base leading-relaxed mt-3">
                        В одном продукте будет только несколько ролей и собственная бизнес-логика. В другом появятся платежи, интеграции, сложные расчёты, автоматические процессы и десятки связанных сценариев.
                    </p>
                    <p className="text-white text-font-inter text-sm md:text-base leading-relaxed mt-4 font-medium">
                        Мы не усложняем продукт ради сложности. Мы добавляем только то, что необходимо для его работы.
                    </p>
                </div>
            </div>
        </div>
    )
}