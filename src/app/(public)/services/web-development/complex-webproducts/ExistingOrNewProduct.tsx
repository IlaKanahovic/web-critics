const newProductFlow = [
    { num: "01", title: "Задача", desc: "Что должен решить продукт." },
    { num: "02", title: "Первая версия", desc: "Минимум, который уже закрывает основную задачу." },
    { num: "03", title: "Запуск", desc: "Начало реальной работы продукта." },
    { num: "04", title: "Реальные пользователи", desc: "Настоящие сценарии и данные." },
    { num: "05", title: "Обратная связь", desc: "Что работает, а что нужно изменить." },
    { num: "06", title: "Следующая версия", desc: "Развитие на основе реального опыта." },
]

const existingActions = [
    {
        title: "Добавить новый модуль",
        desc: "Не меняя работающую основу, добавить необходимую часть продукта.",
    },
    {
        title: "Переработать существующий сценарий",
        desc: "Изменить процесс, который больше не соответствует текущей модели бизнеса.",
    },
    {
        title: "Переделать интерфейс",
        desc: "Сделать работу с существующей системой понятнее и быстрее.",
    },
    {
        title: "Подключить новые системы",
        desc: "Добавить CRM, оплату, API, аналитику или другой внешний сервис.",
    },
    {
        title: "Автоматизировать ручную работу",
        desc: "Убрать повторяющиеся операции и передать их системе.",
    },
    {
        title: "Постепенно переработать архитектуру",
        desc: "Если ограничения глубоко внутри продукта, изменения проводятся поэтапно, без остановки системы.",
    },
]

export function ExistingOrNewProduct() {
    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Два подхода</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="max-w-4xl mb-16 md:mb-24">
                    <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-tight">
                        Создавать с нуля или развивать то, что уже работает
                    </h2>

                    <p className="text-white/65 text-font-inter text-base md:text-lg leading-relaxed mt-8 max-w-2xl">
                        У собственного продукта почти всегда возникает одна и та же проблема: идей становится больше, чем действительно нужно. А иногда наоборот - продукт уже существует, но перестал соответствовать реальности. Это две разные ситуации, и подход к ним отличается.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-y-0 mb-20 md:mb-28">
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/15 to-transparent" />

                    <div className="lg:pr-14 xl:pr-20">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="w-2 h-2 rounded-full bg-violet-400/70" />
                            <span className="text-white/40 text-[10px] uppercase tracking-[0.35em] font-mono">
                                Создаём с нуля
                            </span>
                        </div>

                        <h3 className="text-white text-2xl md:text-3xl font-semibold leading-snug">
                            Первый релиз должен решать задачу, а не содержать всё, что можно придумать
                        </h3>

                        <p className="text-white/60 text-sm md:text-base leading-relaxed mt-5">
                            Продукт становится большим ещё до того, как становится полезным. Поэтому мы предлагаем разделять разработку на этапы: сначала минимальная версия, которая уже решает основную задачу, потом запуск и развитие на основе реальных данных.
                        </p>

                        <div className="mt-8 space-y-3">
                            {newProductFlow.map((step, i) => (
                                <div key={i} className="group flex items-start gap-4">
                                    <span className="shrink-0 w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/35 font-mono text-[10px] group-hover:border-violet-400/50 group-hover:text-violet-200/80 transition-all duration-500">
                                        {step.num}
                                    </span>

                                    <div className="flex-1 pt-1">
                                        <div className="flex items-baseline gap-3">
                                            <span className="text-white text-sm md:text-base font-semibold leading-snug">
                                                {step.title}
                                            </span>
                                            <span className="hidden md:inline-block flex-1 h-px bg-white/8 group-hover:bg-white/20 transition-colors duration-500" />
                                        </div>
                                        <p className="text-white/45 text-xs md:text-sm leading-relaxed mt-1">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:pl-14 xl:pl-20">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="w-2 h-2 rounded-full bg-white/40" />
                            <span className="text-white/40 text-[10px] uppercase tracking-[0.35em] font-mono">
                                Развиваем существующий
                            </span>
                        </div>

                        <h3 className="text-white text-2xl md:text-3xl font-semibold leading-snug">
                            Можно развивать то, что уже работает
                        </h3>

                        <p className="text-white/60 text-sm md:text-base leading-relaxed mt-5">
                            Не каждый проект начинается с чистого листа. Продукт технически работает, но часть операций всё ещё выполняется вручную. Не хватает интеграций. Интерфейс стал слишком сложным. В таких ситуациях необязательно выбрасывать всё и начинать заново.
                        </p>

                        <div className="mt-8 space-y-4">
                            {existingActions.map((action, i) => (
                                <div key={i} className="group flex items-start gap-4">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/25 shrink-0 group-hover:bg-white/60 transition-colors duration-500" />

                                    <div className="flex-1">
                                        <span className="text-white/90 text-sm md:text-base font-medium leading-snug block">
                                            {action.title}
                                        </span>
                                        <p className="text-white/45 text-xs md:text-sm leading-relaxed mt-1 group-hover:text-white/65 transition-colors duration-500">
                                            {action.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-white text-font-space text-2xl md:text-3xl lg:text-4xl leading-tight">
                        Не всегда нужен новый продукт.
                    </p>
                    <p className="text-white/55 text-font-space text-2xl md:text-3xl lg:text-4xl leading-tight mt-2">
                        Иногда нужен следующий этап развития уже существующего.
                    </p>
                </div>
            </div>
        </div>
    )
}