const examples = [
    {
        num: "01",
        title: "Онлайн-платформа",
        desc: "Пользователи взаимодействуют между собой или получают доступ к разным возможностям системы.",
    },
    {
        num: "02",
        title: "Клиентский портал",
        desc: "Клиент самостоятельно работает с данными, документами, заказами, заявками или услугами.",
    },
    {
        num: "03",
        title: "SaaS-продукт",
        desc: "Сервис, которым разные пользователи или компании регулярно пользуются через интернет.",
    },
    {
        num: "04",
        title: "Маркетплейс",
        desc: "Несколько сторон работают внутри одной системы: продавцы, покупатели, администрация.",
    },
    {
        num: "05",
        title: "Внутренняя бизнес-система",
        desc: "Собственный инструмент для процессов, которые не получается нормально закрыть готовыми решениями.",
    },
    {
        num: "06",
        title: "Цифровой сервис",
        desc: "Онлайн-продукт, который выполняет конкретную функцию или предоставляет пользователю определённую услугу.",
    },
]

export function WhatIsComplexWeb() {
    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Что считается сложным продуктом</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="max-w-5xl mb-16 md:mb-24">
                    <h2 className="text-white text-font-space text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
                        Сложный продукт - это не обязательно огромный сайт
                    </h2>

                    <div className="mt-12 pl-6 md:pl-10 border-l-2 border-violet-400/40">
                        <p className="text-white text-font-inter text-xl md:text-2xl lg:text-3xl leading-[1.35] font-medium">
                            Сложность определяется не количеством страниц.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-20 md:mb-28">
                    <p className="text-white/65 text-font-inter text-base md:text-lg leading-relaxed">
                        Небольшой по интерфейсу сервис может быть намного сложнее обычного многостраничного сайта, если внутри него есть разные роли пользователей, данные, расчёты, автоматические действия, интеграции и собственная бизнес-логика.
                    </p>

                    <p className="text-white/85 text-font-inter text-base md:text-lg leading-relaxed">
                        Поэтому мы не привязываемся к конкретному формату. Сначала смотрим на задачу и только потом определяем, каким должен быть сам продукт.
                    </p>
                </div>

                <div className="border-t border-white/10">
                    {examples.map((item, i) => (
                        <div
                            key={i}
                            className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-6 md:py-8 border-b border-white/10 hover:border-white/25 transition-colors duration-300 cursor-default"
                        >
                            <span className="md:col-span-1 text-white/25 font-mono text-sm group-hover:text-white/50 transition-colors duration-300">
                                {item.num}
                            </span>

                            <h3 className="md:col-span-4 text-white text-lg md:text-xl font-semibold leading-snug">
                                {item.title}
                            </h3>

                            <p className="md:col-span-7 text-white/55 text-sm md:text-base leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 md:mt-20 max-w-3xl mx-auto text-center">
                    <p className="text-white/65 text-font-inter text-sm md:text-base leading-relaxed">
                        Это только примеры. Если ваш продукт не подходит ни под один из этих форматов - это не проблема. Формат определяется задачей, а не наоборот.
                    </p>
                </div>
            </div>
        </div>
    )
}