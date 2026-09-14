const items = [
    {
        num: '01',
        title: 'Отвечать на типовые вопросы',
        desc: 'AI-ассистент может отвечать клиентам и сотрудникам, находить нужную информацию и вести диалог вместо ручной обработки каждого обращения.',
    },
    {
        num: '02',
        title: 'Обрабатывать документы и тексты',
        desc: 'Извлекать информацию из документов, классифицировать обращения, находить нужные данные и преобразовывать неструктурированную информацию в удобный формат.',
    },
    {
        num: '03',
        title: 'Работать с большими объёмами данных',
        desc: 'Анализировать массивы информации, искать закономерности, делать выводы и помогать быстро находить нужные сведения.',
    },
    {
        num: '04',
        title: 'Помогать сотрудникам',
        desc: 'Создавать внутреннего AI-помощника, который работает с корпоративной информацией, подсказывает решения, помогает искать документы и ускоряет повседневную работу.',
    },
    {
        num: '05',
        title: 'Автоматизировать обработку обращений',
        desc: 'Определять тему сообщения, извлекать важные данные, распределять обращения, формировать ответы и передавать результат дальше по процессу.',
    },
    {
        num: '06',
        title: 'Создавать контент',
        desc: 'Помогать с подготовкой текстов, описаний, ответов, документов и других материалов, если их создание можно частично автоматизировать.',
    },
    {
        num: '07',
        title: 'Работать внутри существующих процессов',
        desc: 'AI не обязательно должен жить в отдельном приложении. Его можно встроить в CRM, сайт, бота, внутренний сервис или автоматизированный процесс.',
    },
    {
        num: '08',
        title: 'Создавать новые цифровые продукты',
        desc: 'AI может стать частью отдельного сервиса: помощника, аналитического инструмента, генератора, поисковой системы или другого продукта с интеллектуальной логикой.',
    },
]

export function CanBeDevelopedAi() {
    return (
        <section className="relative py-20 md:py-32 lg:py-40">
            <div className="container px-4 md:px-10 lg:px-35">
                <div className="mt-14 md:mt-20 flex items-center gap-4 mb-10">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
                    <span className="text-white/30 text-xs uppercase tracking-widest">С КАКИМИ ЗАДАЧАМИ ПОМОГАЕМ</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
                </div>
                <h2 className="text-white text-3xl md:text-5xl lg:text-6xl leading-[1.05] text-center">
                    Где AI может взять<br className="hidden md:block" /> на себя часть работы
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 mt-12">
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
            </div>
        </section>
    )
}