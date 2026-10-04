import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"
import { FaSearch, FaChartLine } from "react-icons/fa"

const directions = [
    {
        icon: FaSearch,
        title: "SEO",
        desc: "Помогаем сайту получать больше целевого трафика из поисковых систем. Анализируем техническую часть, структуру и содержание сайта, находим проблемы и определяем, что мешает страницам расти в поиске.",
        href: "/services/growth-analytics/seo",
    },
    {
        icon: FaChartLine,
        title: "Аналитика",
        desc: "Помогаем понять, что происходит с пользователями после перехода на сайт: откуда они приходят, какие страницы смотрят, где останавливаются и на каком этапе теряются потенциальные клиенты.",
        href: "/services/growth-analytics/analytics",
    },
]

export function MainDirectionsGrowthAnalytics() {
    return (
        <div className="container">
            <div className="pt-42">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Основные направления</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-white text-font-space text-4xl md:text-5xl">Основные направления</h2>
                    <p className="text-white/60 text-font-inter text-base mt-4 leading-relaxed">
                        Недостаточно просто привести больше людей на сайт или собрать красивые отчёты. Важно понять, откуда приходит аудитория, что она делает дальше и на каком этапе бизнес теряет потенциальных клиентов.
                    </p>
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-6">
                    {directions.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(50%-0.75rem)] max-w-md"
                        >
                            <div className="group h-full bg-[#111111] border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-white/25 hover:shadow-2xl flex flex-col cursor-pointer">
                                <item.icon className="text-white/50 group-hover:text-white transition-colors m-auto duration-300 size-8 mb-4" />
                                <h3 className="text-white text-xl font-semibold text-center">{item.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed mt-2 flex-1 text-center">{item.desc}</p>
                                <span className="inline-flex items-center gap-1 text-white/50 group-hover:text-white text-sm font-medium transition-colors duration-200 mt-4 justify-center">
                                    Подробнее
                                    <IoIosArrowForward className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}