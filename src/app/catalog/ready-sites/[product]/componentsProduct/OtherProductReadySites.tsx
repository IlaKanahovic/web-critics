

export function OtherProductReadySites() {
    return (
        <div className="container">
            <div className="pt-12">
                {/* Заголовок и шаги */}
                <div className="text-center">
                    <h2 className="text-white text-font-space text-3xl md:text-4xl">Как проходит запуск</h2>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
                    {[
                        { num: "01", title: "Выбираете решение", desc: "Смотрите демо и определяете, подходит ли вам продукт." },
                        { num: "02", title: "Определяем изменения", desc: "Обсуждаем контент, дизайн, структуру и дополнительные функции." },
                        { num: "03", title: "Настраиваем", desc: "Адаптируем готовое решение под ваш бизнес." },
                        { num: "04", title: "Запускаем", desc: "Проверяем всё и передаём готовый продукт." },
                    ].map((step, idx) => (
                        <div
                            key={idx}
                            className="bg-[#111111] border border-white/10 rounded-xl p-4 transition-all hover:border-white/20 flex items-start gap-3"
                        >
                            <span className="text-white/20 text-2xl font-bold leading-none min-w-8">{step.num}</span>
                            <div>
                                <h3 className="text-white text-xl font-semibold">{step.title}</h3>
                                <p className="text-white/60 text-lg leading-relaxed mt-0.5">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Разделитель */}
                <div className="my-12 h-px bg-linear-to-r from-transparent via-white/10 to-transparent max-w-3xl mx-auto" />

                {/* Что потребуется от вас */}
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-white text-font-space text-3xl md:text-4xl text-center">Что потребуется от вас</h2>
                    <p className="text-white/70 text-font-inter text-center text-sm mt-3 leading-relaxed">
                        {/* ДИНАМИЧЕСКИЙ ТЕКСТ: описание требований */}
                        (свои требования)
                    </p>
                    <p className="text-white/50 text-font-inter text-center text-xs mt-1">
                        Если каких-то материалов нет - поможем подготовить их.
                    </p>

                    <div className="mt-5 bg-[#111111] border border-white/10 rounded-xl p-4">
                        <p className="text-white/70 text-font-inter text-center text-sm mb-2 leading-relaxed">
                            Требования
                        </p>
                        <ul className="flex flex-wrap gap-2 justify-center text-white/80 text-sm">
                            {/* ДИНАМИЧЕСКИЙ СПИСОК: конкретные требования (например, API, доступы и т.д.) */}
                            <li className="px-3 py-1 rounded-full bg-white/5 border border-white/10">(свои данные)</li>
                            <li className="px-3 py-1 rounded-full bg-white/5 border border-white/10">(свои данные)</li>
                            <li className="px-3 py-1 rounded-full bg-white/5 border border-white/10">(свои данные)</li>
                            <li className="px-3 py-1 rounded-full bg-white/5 border border-white/10">(свои данные)</li>
                            <li className="px-3 py-1 rounded-full bg-white/5 border border-white/10">(свои данные)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}