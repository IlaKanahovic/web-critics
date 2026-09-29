const audiences = [
    {
        num: "01",
        title: "Пользователь",
        desc: "Получает понятный интерфейс и конкретный набор возможностей, необходимых для его сценария.",
    },
    {
        num: "02",
        title: "Команда",
        desc: "Работает с данными и процессами в единой системе, а не собирает информацию вручную из разных источников.",
    },
    {
        num: "03",
        title: "Бизнес",
        desc: "Получает собственный цифровой инструмент, который можно контролировать, развивать и адаптировать под новые задачи.",
    },
]

export function WhatBusinessGetComplexWeb() {
    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Результат</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
                    <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                        В итоге появляется инструмент, который работает именно на ваш процесс
                    </h2>
                </div>

                <div className="max-w-2xl mx-auto text-center mb-20 md:mb-28">
                    <p className="text-white/65 text-font-inter text-base md:text-lg leading-relaxed">
                        Собственный веб-продукт нужен не ради количества функций. Его ценность в том, что система выстраивается вокруг вашей модели работы - и работает на неё, а не против.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-white/10 border-y border-white/10">
                    {audiences.map((item, i) => (
                        <div
                            key={i}
                            className="group relative py-10 md:py-14 px-0 md:px-10 lg:px-14 first:md:pl-0 last:md:pr-0 flex flex-col"
                        >
                            <span className="text-white/15 font-mono text-7xl md:text-8xl lg:text-[110px] leading-[0.85] transition-colors duration-500 group-hover:text-violet-300/40">
                                {item.num}
                            </span>

                            <h3 className="text-white text-2xl md:text-3xl font-semibold leading-snug mt-8">
                                {item.title}
                            </h3>

                            <p className="text-white/55 text-sm md:text-base leading-relaxed mt-4 group-hover:text-white/85 transition-colors duration-500">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 md:mt-28 max-w-4xl mx-auto text-center">
                    <p className="text-white text-font-space text-2xl md:text-4xl lg:text-5xl leading-[1.15]">
                        Хороший цифровой продукт не просто автоматизирует то, что вы уже делаете.
                    </p>
                    <p className="text-white/40 text-font-space text-2xl md:text-4xl lg:text-5xl leading-[1.15] mt-3">
                        Он позволяет по-другому организовать сам процесс.
                    </p>
                </div>
            </div>
        </div>
    )
}