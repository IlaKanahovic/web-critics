import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"

export function DevelopmentAbout() {
    const flow = [
        { num: "01", title: "Индивидуальная задача", desc: "Разработали решение под конкретный процесс" },
        { num: "02", title: "Повторяющаяся", desc: "Выделили общую логику между проектами" },
        { num: "03", title: "Стандартизация", desc: "Сделали готовое решение с базой" },
        { num: "04", title: "Каталог", desc: "Клиент получает быстрее и дешевле" },
        { num: "05", title: "Новые запросы", desc: "Снова ищем повторяющиеся проблемы" },
    ]

    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">От работы к продуктам</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="max-w-5xl mb-16 md:mb-20">
                    <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                        Мы хотим превращать повторяющиеся проблемы в продукты
                    </h2>

                    <p className="text-white/60 text-font-inter text-base md:text-lg leading-relaxed mt-8 max-w-2xl">
                        Сегодня клиент может прийти с уникальной задачей. Мы разбираем её и создаём индивидуальное решение. Но если через некоторое время приходит второй клиент с похожей проблемой, а затем третий и четвёртый - возникает другой вопрос:
                    </p>
                </div>

                <div className="max-w-4xl mx-auto mb-20 md:mb-28">
                    <div className="relative rounded-2xl border border-violet-400/20 bg-violet-500/3 p-8 md:p-10 overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />

                        <div className="relative flex items-center gap-3 mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.8)]" />
                            <span className="text-violet-200/70 text-[10px] uppercase tracking-[0.35em] font-mono">
                                Ключевой вопрос
                            </span>
                        </div>

                        <p className="relative text-white text-2xl md:text-3xl lg:text-4xl leading-[1.2] font-medium">
                            Можно ли больше не создавать это решение с нуля?
                        </p>
                    </div>
                </div>

                <div className="mb-20 md:mb-28">
                    <div className="border-t border-white/10">
                        {flow.map((item, i) => (
                            <div
                                key={i}
                                className="group grid grid-cols-12 gap-4 md:gap-8 items-baseline py-6 md:py-8 border-b border-white/10 hover:border-white/30 transition-colors duration-500"
                            >
                                <span className="col-span-2 md:col-span-1 text-white/20 font-mono text-lg md:text-2xl leading-none group-hover:text-violet-300/60 transition-colors duration-500">
                                    {item.num}
                                </span>

                                <h3 className="col-span-10 md:col-span-4 text-white text-xl md:text-2xl lg:text-3xl font-semibold leading-snug">
                                    {item.title}
                                </h3>

                                <p className="col-span-12 md:col-span-7 text-white/50 text-sm md:text-base leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20 md:mb-28">
                    <div className="lg:col-span-5">
                        <p className="text-white/70 text-font-inter text-base md:text-lg leading-relaxed">
                            Это одна из причин, почему на сайте существует каталог готовых сайтов, ботов и цифровых инструментов.
                        </p>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="pl-6 border-l-2 border-violet-400/40">
                            <p className="text-white text-font-inter text-lg md:text-xl leading-[1.4]">
                                Но каталог не должен определять, что WEBCRITIC умеет делать.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto text-center mb-12">
                    <p className="text-white text-font-space text-3xl md:text-4xl lg:text-5xl leading-[1.15]">
                        Наоборот: со временем именно реальные задачи клиентов
                    </p>
                    <p className="text-white/40 text-font-space text-3xl md:text-4xl lg:text-5xl leading-[1.15] mt-2">
                        должны определять, что в нём появляется.
                    </p>
                </div>

                <div className="flex justify-center">
                    <Link href="/catalog">
                        <button className="button-main-styles inline-flex items-center gap-2">
                            Посмотреть каталог
                            <IoIosArrowForward className="size-4" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}