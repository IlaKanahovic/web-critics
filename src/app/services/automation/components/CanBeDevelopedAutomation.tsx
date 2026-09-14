const items = [
    {
        num: '01',
        title: 'Заявки и обращения',
        desc: 'Получение заявок с сайта, их обработка, распределение между сотрудниками, уведомления и передача данных в CRM.',
    },
    {
        num: '02',
        title: 'Работа с данными',
        desc: 'Перенос информации между таблицами, CRM, сайтами и другими сервисами без постоянного ручного копирования.',
    },
    {
        num: '03',
        title: 'Повторяющиеся действия',
        desc: 'Создание документов, отправка сообщений, изменение статусов, формирование отчётов и другие операции, которые регулярно выполняются по одному сценарию.',
    },
    {
        num: '04',
        title: 'Уведомления',
        desc: 'Автоматические сообщения клиентам и сотрудникам о новых заявках, изменениях, событиях, оплатах и других важных действиях.',
    },
    {
        num: '05',
        title: 'Внутренние процессы',
        desc: 'Согласования, постановка задач, сбор информации, контроль этапов и другие процессы, которые сейчас держатся на сотрудниках и ручном контроле.',
    },
    {
        num: '06',
        title: 'Работа нескольких систем',
        desc: 'Связываем сервисы между собой, чтобы информация автоматически передавалась туда, где она нужна, без участия человека.',
    },
    {
        num: '07',
        title: 'Боты',
        desc: 'Автоматизируем общение с клиентами и сотрудниками: сбор информации, ответы на типовые вопросы, уведомления, запись и обработку обращений.',
    },
    {
        num: '08',
        title: 'Отчёты и контроль',
        desc: 'Собираем данные из разных источников и приводим их к удобному виду, чтобы не тратить время на ручную подготовку отчётности.',
    },
]

export function CanBeDevelopedAutomation() {
    return (
        <section className="relative py-20 md:py-32 lg:py-40">
            <div className="container px-4 md:px-10 lg:px-35">
                <div className="mt-14 md:mt-20 flex items-center gap-4 mb-10">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
                    <span className="text-white/30 text-xs uppercase tracking-widest">Что можно оптимизировать</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
                </div>
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 md:mb-20">
                    <div>
                        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
                            Что можно перестать<br className="hidden md:block" /> делать вручную
                        </h2>
                    </div>
                    <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-md lg:pb-3">
                        Не обязательно знать, что такое «workflow automation» или «интеграция API». Достаточно понимать, какой процесс сейчас отнимает время - дальше разберёмся вместе.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="group relative border-t border-white/8 py-7 md:py-8 transition-colors duration-500 hover:border-white/25"
                        >
                            <div className="flex items-start gap-5 md:gap-8">
                                <span className="shrink-0 text-white/25 text-xs tracking-[0.3em] pt-1.5 transition-colors duration-500 group-hover:text-white/70">
                                    {item.num}
                                </span>

                                <div className="flex-1">
                                    <h3 className="text-white text-lg md:text-xl lg:text-2xl mb-3 transition-transform duration-500 group-hover:translate-x-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/50 text-sm leading-relaxed max-w-md transition-colors duration-500 group-hover:text-white/70">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>

                            <span className="absolute left-0 top-0 h-px w-0 bg-linear-to-r from-white/60 to-transparent transition-all duration-700 group-hover:w-full" />
                        </div>
                    ))}
                </div>

                <p className="text-center text-white/50 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mt-6">
                    Расскажите, какой процесс хотите автоматизировать - предложим подходящий вариант, даже если его нет в этом списке.
                </p>
            </div>
        </section>
    )
}