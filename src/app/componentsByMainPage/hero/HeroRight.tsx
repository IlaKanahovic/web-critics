

export function HeroRight() {
    const items = [
        {
            title: "Связь",
            subtitle: "Ответ за 30 минут",
            desc: "На связи 24/7. Если не успеем ответить вовремя - скидка на работу.",
        },
        {
            title: "Бюджет",
            subtitle: "От 5 000 до 1 000 000 ₽",
            desc: "От небольших готовых решений до сложных цифровых продуктов. Бюджет обсуждаем под задачу.",
        },
        {
            title: "Сложность",
            subtitle: "Не ограничиваемся форматом",
            desc: "Сайты, боты, автоматизация, AI и веб-продукты - выбираем инструмент под задачу.",
        },
        {
            title: "Скорость",
            subtitle: "Быстрый запуск",
            desc: "Готовые решения - от нескольких дней. Индивидуальная разработка - от 2 недель.",
        },
    ]

    return (
        <div className="h-full flex items-cente pt-6 md:pt-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-[#111111] border border-white/10 rounded-xl p-5 transition-colors hover:border-white/30"
                    >
                        <div className="flex items-start gap-3">
                            <div>
                                <p className="text-white text-sm md:text-base font-semibold">{item.title}</p>
                                <h3 className="text-white text-sm md:text-base">{item.subtitle}</h3>
                                <p className="text-white/50 text-xs md:text-sm leading-relaxed mt-1">{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}