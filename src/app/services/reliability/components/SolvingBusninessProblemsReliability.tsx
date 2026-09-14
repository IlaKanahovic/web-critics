

const items = [
    {
        num: '01',
        title: 'Ищем реальные точки риска',
        text: 'Не ограничиваемся поверхностной проверкой отдельных страниц или функций. Смотрим, где в продукте могут возникать ошибки, проблемы с данными, доступами, нагрузкой или взаимодействием между отдельными частями системы.\n\nВ результате можно сосредоточиться не на десятках мелких замечаний, а на проблемах, которые действительно способны повлиять на работу продукта.',
    },
    {
        num: '02',
        title: 'Проверяем продукт глазами пользователя и системы',
        text: 'Проблемы могут возникать как в интерфейсе, так и внутри самого продукта. Пользователь может столкнуться с неправильным сценарием, а система — с ошибкой обработки данных или неожиданным поведением отдельного компонента.\n\nПоэтому проверяем не только то, что видит пользователь, но и то, что происходит за интерфейсом.',
    },
    {
        num: '03',
        title: 'Не создаём сложность ради сложности',
        text: 'Иногда проблема действительно требует серьёзной переработки архитектуры. Но не каждый старый участок кода необходимо переписывать с нуля.\n\nСначала определяем причину проблемы и её влияние на продукт, а затем выбираем необходимое решение — от небольшой доработки и автоматического теста до изменения отдельной части архитектуры.',
    },
    {
        num: '04',
        title: 'Думаем о последствиях изменений',
        text: 'Любой развивающийся продукт со временем становится сложнее. Новая функция может повлиять на старую, изменение базы данных — на существующие процессы, а подключение нового сервиса — на несколько частей системы одновременно.\n\nПоэтому при работе учитываем не только текущую проблему, но и то, как решение повлияет на продукт в дальнейшем.',
    },
    {
        num: '05',
        title: 'Говорим о проблемах понятным языком',
        text: 'Технический отчёт сам по себе не помогает бизнесу принять решение. Если мы находим проблему, важно объяснить, чем она опасна, насколько срочно её нужно исправлять и что произойдёт, если ничего не менять.\n\nВы должны понимать не только что сломано, но и почему это важно для бизнеса.',
    },
]

export function SolvingBusninessProblemsReliability() {
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
                    <span className="text-white/40 text-xs uppercase tracking-widest">ПОЧЕМУ НАДЁЖНОСТЬ НУЖНО ПРОДУМЫВАТЬ ЗАРАНЕЕ</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 md:mb-24">
                    <div className="lg:col-span-7">
                        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl leading-[1.05]">
                            Почему надёжность продукта - это не то, о чём стоит вспоминать после поломки
                        </h2>
                    </div>
                    <div className="lg:col-span-5 lg:pt-6 flex flex-col gap-4">
                        <p className="text-white/55 text-sm md:text-base leading-relaxed">
                            Ошибка на сайте может выглядеть как небольшая техническая проблема, пока она не начинает влиять на бизнес. Недоступная форма может означать потерянную заявку, ошибка в оплате — потерянного клиента, а уязвимость - серьёзные последствия для компании и пользователей.
                        </p>
                        <p className="text-white/55 text-sm md:text-base leading-relaxed">
                            При этом далеко не все проблемы можно заметить снаружи. Система может работать нормально при обычной нагрузке и начать сбоить, когда пользователей станет больше. Или функция может корректно работать сегодня, но перестать работать после следующего изменения.
                        </p>
                        <p className="text-white/55 text-sm md:text-base leading-relaxed">
                            Поэтому мы смотрим на продукт не только с позиции «работает ли он сейчас», но и пытаемся понять, насколько предсказуемо, безопасно и устойчиво он будет работать дальше.
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