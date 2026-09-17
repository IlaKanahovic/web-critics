import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"
import { FaCheck, FaCode, FaPaintBrush, FaMobile, FaSearch, FaBullhorn, FaCog, FaRocket } from "react-icons/fa"

export function PortfolioProjectComponent() {
    return (
        <div className="container">
            <div className="pt-10 md:pt-20">

                <h1 className="text-font-space text-white text-4xl md:text-5xl lg:text-6xl mt-6 max-w-4xl">
                    Название проекта
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mt-12">
                    <div className="lg:col-span-8 space-y-6">
                        <div className="relative w-full aspect-4/5 rounded-xl bg-linear-to-br from-violet-500/10 via-blue-500/5 to-transparent border border-white/10 overflow-hidden">
                            <div
                                className="absolute inset-0 opacity-20"
                                style={{
                                    backgroundImage: `
                                        linear-gradient(rgba(167,139,250,0.15) 1px, transparent 1px),
                                        linear-gradient(90deg, rgba(167,139,250,0.15) 1px, transparent 1px)
                                    `,
                                    backgroundSize: "40px 40px",
                                }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white/20 text-xs uppercase tracking-widest font-mono">
                                    Главный превью
                                </span>
                            </div>
                        </div>

                        <div className="relative w-full aspect-4/5 rounded-xl bg-linear-to-br from-blue-500/10 via-violet-500/5 to-transparent border border-white/10 overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white/20 text-xs uppercase tracking-widest font-mono">
                                    Превью 02
                                </span>
                            </div>
                        </div>

                        <div className="relative w-full aspect-4/5 rounded-xl bg-linear-to-br from-violet-500/5 via-blue-500/10 to-transparent border border-white/10 overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white/20 text-xs uppercase tracking-widest font-mono">
                                    Превью 03
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-24 space-y-8">
                            <a
                                href="#"
                                className="block text-white/50 hover:text-white text-sm font-mono underline underline-offset-4 decoration-white/20 transition-colors"
                            >
                                Ссылка на проект
                            </a>

                            <div>
                                <h2 className="text-white text-2xl font-semibold">Какие велись работы?</h2>
                                <ul className="mt-5 space-y-3">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="shrink-0 w-5 h-5 rounded-full bg-violet-400/15 flex items-center justify-center mt-0.5">
                                                <FaCheck className="text-violet-400/80 size-2.5" />
                                            </span>
                                            <span className="text-white/60 text-sm leading-relaxed">
                                                Пункт задачи {i}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {[FaCode, FaPaintBrush, FaMobile, FaSearch, FaBullhorn, FaCog, FaRocket].map((Icon, i) => (
                                    <div key={i} className="relative group">
                                        <a
                                            href="#"
                                            className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/50 hover:bg-white/10 hover:border-violet-400/40 hover:text-violet-300 transition-all duration-300"
                                        >
                                            <Icon className="size-4" />
                                        </a>
                                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none">
                                            <div className="bg-[#111111] border border-white/10 rounded-lg shadow-2xl px-3 py-2 min-w-max">
                                                <span className="text-white/70 text-xs whitespace-nowrap">
                                                    Текст попапа {i + 1}
                                                </span>
                                            </div>
                                            <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 bg-[#111111] border-r border-b border-white/10 rotate-45 -mt-1" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-white/8">
                                <h3 className="text-white text-xl font-semibold leading-snug">
                                    Понравилось?
                                </h3>
                                <p className="text-white/50 text-sm mt-2 leading-relaxed">
                                    Закажите подобное решение
                                </p>
                                <Link href="/contacts">
                                    <button className="button-main-styles mt-6">
                                        Обсудить решение
                                    </button>
                                </Link>
                            </div>

                            <div className="pt-6 border-t border-white/8">
                                <h3 className="text-white text-xl font-semibold">Может быть интересно</h3>
                                <ul className="mt-5 space-y-2">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <li key={i}>
                                            <Link
                                                href="#"
                                                className="group flex items-center gap-3 px-4 py-3 rounded-lg bg-white/3 border border-white/5 hover:bg-white/6 hover:border-white/15 transition-all duration-200"
                                            >
                                                <span className="shrink-0 w-2 h-2 rounded-full bg-white/20 group-hover:bg-violet-400/60 transition-colors" />
                                                <span className="text-white/60 group-hover:text-white text-sm transition-colors">
                                                    Связанный проект {i}
                                                </span>
                                                <IoIosArrowForward className="ml-auto size-3.5 text-white/20 group-hover:text-white/60 transition-all duration-200 group-hover:translate-x-0.5" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}