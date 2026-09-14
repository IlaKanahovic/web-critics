

const items = [
    {
        num: '01',
        title: 'Начинаем с задачи, а не с разработки',
        text: 'Мы не предлагаем одинаковый набор функций каждому клиенту. Сначала разбираемся, какую проблему должен решить будущий продукт: привлечь больше обращений, упростить работу сотрудников, автоматизировать повторяющийся процесс, запустить новый сервис или сделать существующий инструмент удобнее. Это позволяет не перегружать проект ненужными функциями и сосредоточиться на том, что действительно влияет на результат.',
    },
    {
        num: '02',
        title: 'Проектируем решение до разработки',
        text: 'До написания основной части проекта определяем структуру, пользовательские сценарии и ключевые точки взаимодействия. Если речь идёт о сложном продукте, отдельно продумываем роли пользователей, данные, бизнес-логику и взаимодействие между системами. Чем лучше проработано решение до разработки, тем меньше неожиданных изменений появляется в процессе и тем понятнее становится конечный результат.',
    },
    {
        num: '03',
        title: 'Используем подходящий стек',
        text: 'Технологии должны подстраиваться под задачу, а не становиться самой задачей. Для простого сайта не всегда нужен сложный backend, а для полноценного сервиса недостаточно обычного шаблона. Мы подбираем архитектуру и технологии исходя из требований проекта: производительности, масштабирования, интеграций, безопасности и дальнейшего развития.',
    },
    {
        num: '04',
        title: 'Проверяем не только внешний вид',
        text: 'Работа над продуктом не заканчивается тогда, когда интерфейс выглядит готовым. Проверяем формы, сценарии, адаптивность, интеграции, корректность данных и другие важные части системы. Это позволяет обнаружить проблемы до запуска, а не после того, как с ними столкнутся реальные пользователи или сотрудники. На протяжении всей работы над проектом, его также сопровождает маркетолог, чтобы сайт был инструментом, который решит ваши бизнес-задачи. Также мы можем взять на себя управление контентом, ведь статичная информация, которая не меняется годами, не вызывает доверия к компании.',
    },
    {
        num: '05',
        title: 'Оставляем возможность развивать продукт',
        text: 'Бизнес редко остаётся в том же состоянии, в котором находился во время запуска проекта. Появляются новые задачи, пользователи, интеграции и процессы. Поэтому мы стараемся не просто запустить решение, а сделать его основой, которую можно расширять и адаптировать по мере развития бизнеса.',
    },
]

export function SolvingBusninessProblemsWebDevelopment() {
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
                    <span className="text-white/40 text-xs uppercase tracking-widest">Почему мы</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 md:mb-24">
                    <div className="lg:col-span-7">
                        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl leading-[1.05]">
                            Почему наши веб-решения решают ваши бизнес-задачи?
                        </h2>
                    </div>
                    <div className="lg:col-span-5 lg:pt-6 flex flex-col gap-4">
                        <p className="text-white/55 text-sm md:text-base leading-relaxed">
                            Веб-разработка начинается не с выбора технологии и не с создания первого экрана. Сначала нужно понять, зачем бизнесу нужен продукт, кто будет им пользоваться и какой результат он должен приносить.
                        </p>
                        <p className="text-white/55 text-sm md:text-base leading-relaxed">
                            Красивый сайт сам по себе не решает задачу, если клиент не понимает предложение, нужное действие сложно найти, а сотрудники продолжают выполнять всё вручную. Поэтому перед разработкой мы разбираемся в самой проблеме: изучаем бизнес, аудиторию, процессы и ограничения.
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
                                        <p className="lg:col-span-7 text-white/55 text-sm md:text-base leading-relaxed relative">
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
                                            <p className="text-white/55 text-sm leading-relaxed">
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