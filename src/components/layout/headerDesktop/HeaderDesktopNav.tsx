'use client'

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io"
import { FaCogs, FaChartLine, FaShieldAlt } from "react-icons/fa"
import { GiArtificialIntelligence } from "react-icons/gi"

export function HeaderDesktopNav() {
    return (
        <div className="flex gap-6">
            <div className="nav-desktop-only">
                <a className="link_nav-header group" href="/">
                    Главная
                </a>
            </div>

            <div className="relative group">
                <p className="link_nav-header group flex items-center gap-0.5">
                    Услуги
                    <MdOutlineKeyboardArrowDown className="size-4 duration-300 group-hover:translate-y-0.5" />
                </p>

                <div className="fixed left-1/2 -translate-x-1/2 top-17 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-[#111111] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 p-6 w-5xl max-w-[calc(100vw-2rem)] backdrop-blur-sm">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-5 relative rounded-xl border border-white/8 bg-white/1.5 p-5">
                                <a
                                    href="/services/web-development"
                                    className="block text-white text-xl font-semibold hover:text-violet-300 transition-colors duration-300 mb-5"
                                >
                                    Веб-разработка
                                </a>
                                <ul className="space-y-1">
                                    <li>
                                        <a href="/services/web-development/sites" className="group/link flex items-center gap-3 py-2 text-white/55 hover:text-white text-sm transition-all duration-300">
                                            <span className="text-white/20 font-mono text-[10px] group-hover/link:text-white/60 transition-colors duration-300 w-5">01</span>
                                            <span className="group-hover/link:translate-x-0.5 transition-transform duration-300">Сайты</span>
                                            <IoIosArrowForward className="size-3 text-white/15 ml-auto opacity-0 group-hover/link:opacity-100 group-hover/link:text-white/60 transition-all duration-300" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/services/web-development/web-application" className="group/link flex items-center gap-3 py-2 text-white/55 hover:text-white text-sm transition-all duration-300">
                                            <span className="text-white/20 font-mono text-[10px] group-hover/link:text-white/60 transition-colors duration-300 w-5">02</span>
                                            <span className="group-hover/link:translate-x-0.5 transition-transform duration-300">Веб-приложения</span>
                                            <IoIosArrowForward className="size-3 text-white/15 ml-auto opacity-0 group-hover/link:opacity-100 group-hover/link:text-white/60 transition-all duration-300" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/services/web-development/interfaces" className="group/link flex items-center gap-3 py-2 text-white/55 hover:text-white text-sm transition-all duration-300">
                                            <span className="text-white/20 font-mono text-[10px] group-hover/link:text-white/60 transition-colors duration-300 w-5">03</span>
                                            <span className="group-hover/link:translate-x-0.5 transition-transform duration-300">Интерфейсы</span>
                                            <IoIosArrowForward className="size-3 text-white/15 ml-auto opacity-0 group-hover/link:opacity-100 group-hover/link:text-white/60 transition-all duration-300" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/services/web-development/online-stores" className="group/link flex items-center gap-3 py-2 text-white/55 hover:text-white text-sm transition-all duration-300">
                                            <span className="text-white/20 font-mono text-[10px] group-hover/link:text-white/60 transition-colors duration-300 w-5">04</span>
                                            <span className="group-hover/link:translate-x-0.5 transition-transform duration-300">Интернет-магазины</span>
                                            <IoIosArrowForward className="size-3 text-white/15 ml-auto opacity-0 group-hover/link:opacity-100 group-hover/link:text-white/60 transition-all duration-300" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/services/web-development/complex-webproducts" className="group/link flex items-center gap-3 py-2 text-white/55 hover:text-white text-sm transition-all duration-300">
                                            <span className="text-white/20 font-mono text-[10px] group-hover/link:text-white/60 transition-colors duration-300 w-5">05</span>
                                            <span className="group-hover/link:translate-x-0.5 transition-transform duration-300">Сложные веб-продукты</span>
                                            <IoIosArrowForward className="size-3 text-white/15 ml-auto opacity-0 group-hover/link:opacity-100 group-hover/link:text-white/60 transition-all duration-300" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-7 grid grid-cols-2 gap-4">
                                <a href="/services/automation" className="group/svc relative rounded-xl border border-white/8 bg-white/1.5 hover:border-white/25 hover:bg-white/3 p-5 transition-all duration-500 flex flex-col min-h-32.5 overflow-hidden">
                                    <div className="flex items-start justify-between mb-4">
                                        <FaCogs className="text-white/30 group-hover/svc:text-white/60 size-5 transition-colors duration-500" />
                                        <IoIosArrowForward className="size-3.5 text-white/15 group-hover/svc:text-white/70 group-hover/svc:translate-x-0.5 transition-all duration-500" />
                                    </div>
                                    <span className="text-white text-base font-semibold leading-snug mt-auto">
                                        Автоматизация
                                    </span>
                                </a>
                                <a href="/services/growth-analytics" className="group/svc relative rounded-xl border border-white/8 bg-white/1.5 hover:border-white/25 hover:bg-white/3 p-5 transition-all duration-500 flex flex-col min-h-32.5 overflow-hidden">
                                    <div className="flex items-start justify-between mb-4">
                                        <FaChartLine className="text-white/30 group-hover/svc:text-white/60 size-5 transition-colors duration-500" />
                                        <IoIosArrowForward className="size-3.5 text-white/15 group-hover/svc:text-white/70 group-hover/svc:translate-x-0.5 transition-all duration-500" />
                                    </div>
                                    <span className="text-white text-base font-semibold leading-snug mt-auto">
                                        Рост и аналитика
                                    </span>
                                </a>
                                <a href="/services/reliability" className="group/svc relative rounded-xl border border-white/8 bg-white/1.5 hover:border-white/25 hover:bg-white/3 p-5 transition-all duration-500 flex flex-col min-h-32.5 overflow-hidden">
                                    <div className="flex items-start justify-between mb-4">
                                        <FaShieldAlt className="text-white/30 group-hover/svc:text-white/60 size-5 transition-colors duration-500" />
                                        <IoIosArrowForward className="size-3.5 text-white/15 group-hover/svc:text-white/70 group-hover/svc:translate-x-0.5 transition-all duration-500" />
                                    </div>
                                    <span className="text-white text-base font-semibold leading-snug mt-auto">
                                        Надёжность и масштабирование
                                    </span>
                                </a>
                                <a href="/services/ai" className="group/svc relative rounded-xl border border-white/8 bg-white/1.5 hover:border-white/25 hover:bg-white/3 p-5 transition-all duration-500 flex flex-col min-h-32.5 overflow-hidden">
                                    <div className="flex items-start justify-between mb-4">
                                        <GiArtificialIntelligence className="text-white/30 group-hover/svc:text-white/60 size-5 transition-colors duration-500" />
                                        <IoIosArrowForward className="size-3.5 text-white/15 group-hover/svc:text-white/70 group-hover/svc:translate-x-0.5 transition-all duration-500" />
                                    </div>
                                    <span className="text-white text-base font-semibold leading-snug mt-auto">
                                        AI
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative group">
                <a href="/catalog" className="link_nav-header group flex items-center gap-0.5">
                    Каталог
                    <MdOutlineKeyboardArrowDown className="size-4 duration-300 group-hover:translate-y-0.5" />
                </a>
                <div className="fixed left-1/2 -translate-x-1/2 top-17 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-[#111111] border border-white/10 rounded-xl shadow-2xl shadow-black/50 p-6 w-65 backdrop-blur-sm">
                        <ul className="space-y-2 text-sm">
                            <li><a href="/catalog/ready-sites" className="text-white/50 hover:text-white transition-colors block">Готовые сайты</a></li>
                            <li><a href="/catalog/bots" className="text-white/50 hover:text-white transition-colors block">Боты</a></li>
                            <li><a href="/catalog/ready-models" className="text-white/50 hover:text-white transition-colors block">Готовые инструменты</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <a className="link_nav-header group" href="/portfolio">
                Портфолио
            </a>

            <div className="relative group">
                <a href="/about" className="link_nav-header group flex items-center gap-0.5">
                    О нас
                    <MdOutlineKeyboardArrowDown className="size-4 duration-300 group-hover:translate-y-0.5" />
                </a>
                <div className="fixed left-1/2 -translate-x-1/2 top-17 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-[#111111] border border-white/10 rounded-xl shadow-2xl shadow-black/50 p-6 w-65 backdrop-blur-sm">
                        <ul className="space-y-2 text-sm">
                            <li><a href="/blog" className="text-white/50 hover:text-white transition-colors block">Блог</a></li>
                            <li><a href="/blog/stocks" className="text-white/50 hover:text-white transition-colors block">Акции</a></li>
                            <li><a href="/blog/cases" className="text-white/50 hover:text-white transition-colors block">Кейсы</a></li>
                            <li><a href="/blog/business-solutions" className="text-white/50 hover:text-white transition-colors block">Бизнес-решения</a></li>
                            <li><a href="/blog/technologies" className="text-white/50 hover:text-white transition-colors block">Технологии</a></li>
                            <li><a href="/blog/guides" className="text-white/50 hover:text-white transition-colors block">Гайды</a></li>
                            <li className="pt-2 border-t border-white/5 mt-2">
                                <a href="/about/history-webcritics" className="text-white/50 hover:text-white transition-colors block">История WebCRitic</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <a className="link_nav-header group" href="/contacts">
                Контакты
            </a>
        </div>
    )
}