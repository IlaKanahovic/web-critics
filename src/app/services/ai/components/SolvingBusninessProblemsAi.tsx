const items = [
    {
        num: '01',
        title: 'Сначала ищем задачу для AI',
        text: 'Не начинаем с выбора модели. Сначала определяем, какую конкретно работу должен выполнять AI, что считается хорошим результатом и где сейчас возникает основная нагрузка на сотрудников.',
    },
    {
        num: '02',
        title: 'Подбираем AI под задачу',
        text: 'Иногда достаточно обычной интеграции с готовой моделью. В другом случае нужен RAG, собственная база знаний, обработка документов, классификация, цепочка действий или отдельный AI-сервис. Не используем более сложное решение там, где можно обойтись простым.',
    },
    {
        num: '03',
        title: 'Даём AI правильный контекст',
        text: 'Даже хорошая модель бесполезна, если она не знает, на основе каких данных должна работать. Подключаем необходимые источники информации, документы, базы знаний, API и другие данные, чтобы AI отвечал не только красиво, но и по существу.',
    },
    {
        num: '04',
        title: 'Оставляем человека там, где он нужен',
        text: 'Не каждая операция должна выполняться автоматически. В важных процессах AI может подготовить результат, предложить действие или собрать необходимую информацию, а окончательное решение останется за сотрудником.',
    },
    {
        num: '05',
        title: 'Проверяем, а не доверяем на слово',
        text: 'AI может ошибаться. Поэтому особенно важно понимать, где ошибка допустима, а где она может привести к реальным последствиям. Проверяем сценарии, качество ответов, источники данных и поведение системы на разных запросах до того, как решение начинает использоваться в работе.',
    },
]

export function SolvingBusninessProblemsAi() {
    const spans = [
        'lg:col-span-3',
        'lg:col-span-3',
        'lg:col-span-2',
        'lg:col-span-4',
        'lg:col-span-6',
    ]

    return (
        <section className="relative py-20 md:py-32 lg:py-40">
            <div className="container px-4 md:px-10 lg:px-35">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">ПОЧЕМУ AI НЕ ДОЛЖЕН БЫТЬ «РАДИ AI»</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 md:mb-24">
                    <div className="lg:col-span-7">
                        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl leading-[1.05]">
                            AI не решает проблему просто потому, что он AI
                        </h2>
                    </div>
                    <div className="lg:col-span-5 lg:pt-6 flex flex-col gap-4">
                        <p className="text-white/55 text-sm md:text-base leading-relaxed">
                            Сейчас почти любую задачу можно описать словами «сюда можно добавить искусственный интеллект». Но наличие модели само по себе не делает процесс лучше.
                        </p>
                        <p className="text-white/55 text-sm md:text-base leading-relaxed">
                            Если сотрудник и так быстро выполняет задачу вручную, AI может только добавить лишнюю сложность. Если данные плохого качества, модель не исправит их автоматически. Если процесс построен неправильно, AI может сделать его быстрее - но не обязательно лучше.
                        </p>
                        <p className="text-white/55 text-sm md:text-base leading-relaxed">
                            Поэтому мы начинаем с самого бизнеса: смотрим на задачу, оцениваем процесс, данные и ожидаемый результат, а уже потом решаем, действительно ли здесь нужен AI и в каком виде.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 md:gap-5">
                    {items.map((item, i) => {
                        const isLast = i === items.length - 1
                        return (
                            <div
                                key={i}
                                className={`group relative ${spans[i]} rounded-2xl border border-white/8 bg-linear-to-br from-white/3 to-transparent overflow-hidden transition-all duration-500 hover:border-white/20 hover:from-white/5`}
                            >
                                {isLast ? (
                                    <div className="relative p-6 md:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                                        <span className="absolute -top-6 -right-2 text-[120px] md:text-[180px] font-bold text-white/[0.035] leading-none select-none pointer-events-none">
                                            {item.num}
                                        </span>
                                        <div className="lg:col-span-5 relative">
                                            <span className="text-white/30 text-xs tracking-[0.3em] mb-3 block">{item.num}</span>
                                            <h3 className="text-white text-xl md:text-2xl lg:text-3xl leading-tight">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p className="lg:col-span-7 text-white/55 text-sm md:text-base leading-relaxed relative whitespace-pre-line">
                                            {item.text}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="relative p-6 md:p-8 h-full">
                                        <span className="absolute -top-6 -right-2 text-[100px] md:text-[140px] font-bold text-white/[0.035] leading-none select-none pointer-events-none">
                                            {item.num}
                                        </span>
                                        <div className="relative flex flex-col h-full">
                                            <span className="text-white/30 text-xs tracking-[0.3em] mb-4 block">{item.num}</span>
                                            <h3 className="text-white text-lg md:text-xl lg:text-2xl leading-tight mb-4">
                                                {item.title}
                                            </h3>
                                            <p className="text-white/55 text-sm leading-relaxed whitespace-pre-line">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                )}
                                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}