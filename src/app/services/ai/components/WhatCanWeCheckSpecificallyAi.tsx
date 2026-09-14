import {
    FaComments,
    FaFileAlt,
    FaBrain,
    FaMagic,
    FaSearch,
    FaChartBar,
    FaBolt,
    FaDatabase,
} from "react-icons/fa"

const areas = [
    {
        title: "Отвечать",
        desc: "Общаться с клиентами или сотрудниками, отвечать на вопросы и помогать находить нужную информацию.",
        icon: FaComments,
    },
    {
        title: "Читать",
        desc: "Анализировать документы, письма, сообщения, обращения и другие текстовые данные.",
        icon: FaFileAlt,
    },
    {
        title: "Понимать",
        desc: "Определять смысл запроса, классифицировать информацию, извлекать важные данные и находить связи между ними.",
        icon: FaBrain,
    },
    {
        title: "Генерировать",
        desc: "Создавать тексты, ответы, описания, документы и другие материалы по заданным правилам.",
        icon: FaMagic,
    },
    {
        title: "Искать",
        desc: "Находить информацию в базе знаний, внутренних документах или подключённых источниках.",
        icon: FaSearch,
    },
    {
        title: "Анализировать",
        desc: "Сравнивать данные, находить закономерности, формировать выводы и помогать принимать решения.",
        icon: FaChartBar,
    },
    {
        title: "Действовать",
        desc: "Запускать действия в других системах: создавать записи, отправлять уведомления, обновлять данные или передавать результат дальше по процессу.",
        icon: FaBolt,
    },
    {
        title: "Учиться на контексте",
        desc: "Работать с информацией конкретной компании, учитывать внутренние документы, правила и особенности процессов.",
        icon: FaDatabase,
    },
]

export function WhatCanWeCheckSpecificallyAi() {
    return (
        <div className="container">
            <div className="pt-42">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Что может делать AI-решение</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-white text-font-space text-4xl md:text-5xl">Что можно передать AI</h2>
                    <p className="text-white/60 text-font-inter text-base mt-4 leading-relaxed">
                        Не обязательно заранее знать, какая именно технология вам нужна. Сначала определяем задачу - потом подбираем подходящий способ её решить.
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
                        Не обязательно заранее знать, какая именно технология вам нужна.
                        <br />
                        Сначала определяем задачу - потом подбираем подходящий способ её решить.
                    </p>
                    <span className="h-px flex-1 bg-linear-to-l from-transparent to-white/10" />
                </div>
            </div>
        </div>
    )
}