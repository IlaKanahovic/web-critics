const items = [
    {
        num: '01',
        title: 'Смотрим на бизнес, а не только на сайт',
        text: 'Один и тот же показатель может означать совершенно разные вещи для разных компаний. Поэтому учитываем, что именно продаёт бизнес, кто принимает решение о покупке, сколько стоит клиент и как устроен путь от первого контакта до сделки.',
    },
    {
        num: '02',
        title: 'Ищем причину, а не красивое объяснение',
        text: 'Если конверсия упала, недостаточно сказать, что она упала. Нужно понять, что изменилось: источник трафика, аудитория, страница, предложение, техническая часть сайта или сам пользовательский сценарий. Чем точнее найдена причина, тем меньше приходится менять вслепую.',
    },
    {
        num: '03',
        title: 'Смотрим на путь пользователя целиком',
        text: 'Пользователь не существует только на одной странице. Он увидел рекламу, перешёл на сайт, посмотрел предложение, сравнил варианты, вернулся позже и только потом оставил заявку. Поэтому анализируем не отдельные цифры, а весь путь, на котором бизнес может терять потенциального клиента.',
    },
    {
        num: '04',
        title: 'Не предлагаем изменения ради изменений',
        text: 'Не каждая проблема требует нового дизайна, десятков SEO-страниц или увеличения рекламного бюджета. Иногда достаточно изменить один экран, убрать лишний шаг, переработать предложение или правильно настроить сбор данных. Сначала ищем точку воздействия - потом предлагаем изменение.',
    },
    {
        num: '05',
        title: 'В конце должен появиться следующий шаг',
        text: 'Хороший анализ заканчивается не графиком, а решением. Вы должны понимать, что происходит сейчас, где находится основная проблема, что имеет смысл изменить и почему именно это стоит делать в первую очередь.',
    },
]

export function SolvingBusninessProblemsGrowthAnalytics() {
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
                    <span className="text-white/40 text-xs uppercase tracking-widest">ПОЧЕМУ МЫ НАЧИНАЕМ НЕ С ОТЧЁТА</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 md:mb-24">
                    <div className="lg:col-span-7">
                        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl leading-[1.05]">
                            Цифры сами по себе ничего не меняют
                        </h2>
                    </div>
                    <div className="lg:col-span-5 lg:pt-6 flex flex-col gap-4">
                        <p className="text-white/55 text-sm md:text-base leading-relaxed">
                            Можно собрать сотни показателей, построить красивые графики и каждый месяц отправлять отчёт на несколько десятков страниц.
                        </p>
                        <p className="text-white/55 text-sm md:text-base leading-relaxed">
                            Но если после его прочтения остаётся только вопрос «и что теперь с этим делать?», значит аналитика не выполнила свою задачу.
                        </p>
                        <p className="text-white/55 text-sm md:text-base leading-relaxed">
                            Мы смотрим на данные как на инструмент для принятия решений. Нам важно не просто показать, сколько человек пришло на сайт, а понять, почему они пришли, что сделали дальше, где остановились и что можно изменить.
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