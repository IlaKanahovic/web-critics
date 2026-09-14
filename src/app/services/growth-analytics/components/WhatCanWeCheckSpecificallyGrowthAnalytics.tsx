import {
    FaSearch,
    FaMousePointer,
    FaBullseye,
    FaFilter,
    FaFileAlt,
    FaCog,
    FaChartBar,
    FaFunnelDollar,
} from "react-icons/fa"

const areas = [
    {
        title: "Поисковый трафик",
        desc: "Видимость сайта, поисковый спрос, структура страниц, точки роста и причины, по которым сайт получает меньше органического трафика, чем мог бы.",
        icon: FaSearch,
    },
    {
        title: "Поведение пользователей",
        desc: "Какие страницы посещают, где задерживаются, куда переходят и на каком этапе прекращают взаимодействие с сайтом.",
        icon: FaMousePointer,
    },
    {
        title: "Конверсия",
        desc: "Формы, заявки, покупки и другие целевые действия. Ищем места, где пользователи теряются между посещением и результатом.",
        icon: FaBullseye,
    },
    {
        title: "Источники трафика",
        desc: "Сравниваем каналы привлечения и смотрим не только на количество посетителей, но и на качество трафика и его вклад в реальные обращения.",
        icon: FaFilter,
    },
    {
        title: "Структура и содержание",
        desc: "Анализируем, насколько страницы соответствуют намерению пользователя, понятно ли предложение и помогает ли контент человеку принять решение.",
        icon: FaFileAlt,
    },
    {
        title: "Техническая сторона",
        desc: "Скорость, индексация, ошибки, мобильная версия и другие технические факторы, которые могут влиять на видимость и пользовательский опыт.",
        icon: FaCog,
    },
    {
        title: "Аналитика",
        desc: "Настройка и проверка системы сбора данных, целей, событий и других показателей, необходимых для нормального принятия решений.",
        icon: FaChartBar,
    },
    {
        title: "Воронка",
        desc: "Смотрим на путь от первого посещения до целевого действия и определяем, где возникает наибольшая потеря пользователей.",
        icon: FaFunnelDollar,
    },
]

export function WhatCanWeCheckSpecificallyGrowthAnalytics() {
    return (
        <div className="container">
            <div className="pt-42">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Что можно анализировать и улучшать</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-white text-font-space text-4xl md:text-5xl">Смотрим на весь путь от первого контакта до результата</h2>
                    <p className="text-white/60 text-font-inter text-base mt-4 leading-relaxed">
                        Не обязательно разбираться, какой именно анализ вам нужен. Опишите проблему - мы определим, какие данные помогут её решить.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
                    {areas.map((area, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-[#0a0a0a] p-6 transition-colors duration-500 hover:bg-[#111111] flex flex-col"
                        >
                            <div className="flex items-start justify-between mb-5">
                                <area.icon className="text-white/30 group-hover:text-violet-300 transition-colors duration-500 size-6" />
                                <span className="text-white/15 text-xs font-mono tracking-widest">
                                    {String(idx + 1).padStart(2, "0")}
                                </span>
                            </div>
                            <h3 className="text-white text-lg font-semibold">{area.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed mt-2 flex-1">{area.desc}</p>
                            <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-linear-to-r from-violet-400/60 to-transparent transition-all duration-700" />
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex items-center gap-4 max-w-3xl mx-auto">
                    <span className="h-px flex-1 bg-linear-to-r from-transparent to-white/10" />
                    <p className="text-white/40 text-xs md:text-sm text-center leading-relaxed">
                        Конкретный набор проверок определяется после анализа продукта
                        <br />
                        и зависит от поставленной задачи.
                    </p>
                    <span className="h-px flex-1 bg-linear-to-l from-transparent to-white/10" />
                </div>
            </div>
        </div>
    )
}