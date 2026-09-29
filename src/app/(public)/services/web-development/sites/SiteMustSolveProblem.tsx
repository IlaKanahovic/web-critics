import { areasWebDevelopmentSites } from "@/constants/constants-services/whatCanWeCheck";

export function SiteMustSolveProblem() {
    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Задачи</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    <div className="lg:col-span-5">
                        <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-tight">
                            Сайт не должен быть просто красивым
                        </h2>
                    </div>

                    <div className="lg:col-span-7 space-y-5">
                        <p className="text-white/80 text-font-inter text-lg md:text-xl leading-relaxed">
                            Красивый интерфейс сам по себе не решает бизнес-задачу. Можно сделать современный дизайн, хорошую анимацию и аккуратную адаптивную версию - и при этом не получить больше клиентов, продаж или обращений.
                        </p>
                        <p className="text-white text-font-inter text-lg md:text-xl leading-relaxed font-medium">
                            Поэтому мы начинаем не с вопроса «какой сайт вам сделать?», а с вопроса «что должен изменить сайт в вашем бизнесе?»
                        </p>
                        <p className="text-white/60 text-font-inter text-base md:text-lg leading-relaxed">
                            Для одного проекта главной задачей будет увеличение органического трафика. Для другого - рост количества заявок. Где-то сайт должен продавать услуги или товары, где-то - понятно объяснять сложный продукт и формировать доверие. А иногда главная цель вообще не связана с продажами: сайт может автоматизировать работу сотрудников, собирать и передавать данные, заменить ручной процесс или стать интерфейсом полноценного цифрового сервиса.
                        </p>
                    </div>
                </div>

                <div className="mt-16 md:mt-20 flex flex-wrap justify-center gap-5">
                    {areasWebDevelopmentSites.map((area, i) => (
                        <div
                            key={i}
                            className="group relative bg-[#111111] border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-white/25 flex flex-col w-full md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
                        >
                            <area.icon className="text-white/50 group-hover:text-white size-5 mb-5 transition-colors duration-300" />

                            <h3 className="text-white text-lg font-semibold leading-snug">
                                {area.title}
                            </h3>

                            <p className="text-white/50 text-sm leading-relaxed mt-3 flex-1">
                                {area.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 md:mt-20 max-w-2xl mx-auto text-center">
                    <p className="text-white/60 text-font-inter text-sm md:text-base leading-relaxed">
                        Это только часть задач, которые может решать сайт. Если вашей задачи нет в списке - опишите её нам. Мы не ограничиваем решение готовым набором функций или форматов.
                    </p>
                </div>
            </div>
        </div>
    )
}