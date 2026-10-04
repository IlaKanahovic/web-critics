

export function SolutionsAbout() {
    const questions = [
        {
            num: "01",
            question: "Что происходит сейчас?",
            desc: "Нам важно понять существующий процесс, а не только желаемый результат. Как пользователь взаимодействует с бизнесом? Как сотрудники обрабатывают данные? Где возникает ручная работа? Какие инструменты уже используются? Что приходится делать несколько раз?",
        },
        {
            num: "02",
            question: "Что именно не устраивает?",
            desc: "Проблема может находиться совсем не там, где её сначала видит клиент. Иногда причина действительно в сайте. Иногда - в интерфейсе, аналитике, структуре процесса, интеграциях или отсутствии автоматизации.",
        },
        {
            num: "03",
            question: "Что должно измениться?",
            desc: "Не «какие функции добавить», а какой результат должен появиться после решения проблемы.",
        },
        {
            num: "04",
            question: "Какое решение для этого достаточно?",
            desc: "Это принципиальный вопрос.",
            extra: [
                "Если проблему можно решить небольшой доработкой существующей системы, нет смысла заставлять бизнес создавать новую систему с нуля.",
                "Если готовый сервис ограничивает процесс, можно рассмотреть собственный инструмент.",
                "Если стандартный сайт не справляется с задачей, возможно, нужен уже веб-продукт.",
            ],
        },
    ]

    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Как мы принимаем решения</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-20 md:mb-28">
                    <div className="lg:col-span-7">
                        <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                            Не начинаем с вопроса «что мы можем вам продать?»
                        </h2>
                    </div>

                    <div className="lg:col-span-5 lg:pb-2">
                        <div className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-400/60" />
                            <span className="text-white/50 text-sm md:text-base leading-relaxed">
                                Начинаем с нескольких гораздо менее удобных вопросов
                            </span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10">
                    {questions.map((item, i) => (
                        <div
                            key={i}
                            className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 border-b border-white/10 hover:border-white/25 transition-colors duration-500"
                        >
                            <div className="md:col-span-1">
                                <span className="text-white/20 font-mono text-lg md:text-2xl leading-none transition-colors duration-500 group-hover:text-violet-300/60">
                                    {item.num}
                                </span>
                            </div>

                            <div className="md:col-span-4">
                                <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold leading-[1.15]">
                                    {item.question}
                                </h3>
                            </div>

                            <div className="md:col-span-7 space-y-4">
                                <p className="text-white/60 text-base md:text-lg leading-relaxed">
                                    {item.desc}
                                </p>

                                {item.extra && (
                                    <div className="pt-4 space-y-3 border-t border-white/8">
                                        {item.extra.map((line, j) => (
                                            <p key={j} className="text-white/50 text-sm md:text-base leading-relaxed flex items-start gap-3">
                                                <span className="mt-2.5 w-1 h-1 rounded-full bg-violet-400/60 shrink-0" />
                                                <span>{line}</span>
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 md:mt-28 max-w-4xl mx-auto text-center">
                    <p className="text-white text-font-space text-2xl md:text-3xl lg:text-4xl leading-tight">
                        Мы стараемся не делать больше, чем необходимо для решения задачи.
                    </p>
                    <p className="text-white/40 text-font-space text-2xl md:text-3xl lg:text-4xl leading-tight mt-2">
                        Но и не пытаемся решить сложную проблему инструментом, который для неё изначально не подходит.
                    </p>
                </div>
            </div>
        </div>
    )
}