import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"

export function AlsoOnTheSiteAbout() {
    const links = [
        {
            num: "01",
            title: "Как всё начиналось",
            desc: "История развития KILLCRITIC",
            href: "/about/history-webcritics",
        },
        {
            num: "02",
            title: "Что мы создаём",
            desc: "Направления и услуги студии",
            href: "/#services",
        },
        {
            num: "03",
            title: "Наш блог",
            desc: "О нашем бизнесе: клиенты, кейсы, гайды, акции",
            href: "/blog",
        },
        {
            num: "04",
            title: "Что уже сделали",
            desc: "Кейсы и реализованные проекты",
            href: "/blog/cases",
        },
        {
            num: "05",
            title: "С чем работаем",
            desc: "Технологии и инструменты",
            href: "/blog/technologies",
        },
        {
            num: "06",
            title: "Готовые решения",
            desc: "Каталог продуктов студии",
            href: "/catalog",
        },
    ]

    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Что ещё есть на сайте</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16 md:mb-20">
                    <div className="lg:col-span-7">
                        <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                            Хотите узнать больше?
                        </h2>
                    </div>

                    <div className="lg:col-span-5 lg:pb-2">
                        <p className="text-white/50 text-font-inter text-sm md:text-base leading-relaxed">
                            Здесь - только самое главное о студии. Остальное удобнее смотреть в отдельных разделах сайта.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
                    {links.map((item, i) => (
                        <Link key={i} href={item.href}>
                            <div className="group relative bg-[#0a0a0a] hover:bg-[#131313] p-7 md:p-8 transition-colors duration-500 flex flex-col min-h-55 overflow-hidden cursor-pointer">
                                <span className="absolute -top-4 -right-2 text-[100px] font-bold leading-none text-white/3 group-hover:text-violet-400/8 transition-colors duration-500 select-none pointer-events-none font-mono">
                                    {item.num}
                                </span>

                                <div className="relative flex items-center justify-between mb-6">
                                    <span className="text-white/25 font-mono text-xs tracking-[0.3em] group-hover:text-violet-300/60 transition-colors duration-500">
                                        {item.num}
                                    </span>

                                    <IoIosArrowForward className="size-4 text-white/20 group-hover:text-violet-300 group-hover:translate-x-0.5 transition-all duration-500" />
                                </div>

                                <h3 className="relative text-white text-xl md:text-2xl font-semibold leading-snug flex-1">
                                    {item.title}
                                </h3>

                                <p className="relative text-white/45 text-sm leading-relaxed mt-3 group-hover:text-white/70 transition-colors duration-500">
                                    {item.desc}
                                </p>

                                <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-linear-to-r from-violet-400/60 to-transparent transition-all duration-700" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}