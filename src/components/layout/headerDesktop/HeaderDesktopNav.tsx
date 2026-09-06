'use client'

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export function HeaderDesktopNav() {
    return (
        <div className="flex gap-6">
            <div className="nav-desktop-only">
                <a className="link_nav-header group" href="/">
                    Главная
                </a>
            </div>

            <div className="relative group pb-2">
                <p className="link_nav-header  group flex items-center gap-0.5">
                    Услуги
                    <MdOutlineKeyboardArrowDown className="size-4 duration-300 group-hover:translate-y-0.5" />
                </p>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-[#111111] border border-white/10 rounded-xl shadow-2xl shadow-black/50 p-6 w-screen max-w-5xl backdrop-blur-sm">
                        <div className="grid grid-cols-5 gap-8 text-sm">

                            <div>
                                <a href="/services/web-development" className="text-white font-medium hover:text-white/80 transition-colors block mb-3">
                                    Веб-разработка
                                </a>
                                <ul className="space-y-2">
                                    <li><a href="/services/web-development/sites" className="text-white/50 hover:text-white transition-colors">Сайты</a></li>
                                    <li><a href="/services/web-development/web-application" className="text-white/50 hover:text-white transition-colors">Веб-приложения</a></li>
                                    <li><a href="/services/web-development/interfaces" className="text-white/50 hover:text-white transition-colors">Интерфейсы</a></li>
                                    <li><a href="/services/web-development/online-stores" className="text-white/50 hover:text-white transition-colors">Интернет-магазины</a></li>
                                    <li><a href="/services/web-development/complex-webproducts" className="text-white/50 hover:text-white transition-colors">Сложные веб-продукты</a></li>
                                </ul>
                            </div>

                            <div>
                                <a href="/services/automation" className="text-white font-medium hover:text-white/80 transition-colors block mb-3">
                                    Автоматизация
                                </a>
                                <ul className="space-y-2">
                                    <li><a href="/services/automation/process-automation" className="text-white/50 hover:text-white transition-colors">Автоматизация процессов</a></li>
                                    <li><a href="/services/automation/integrations" className="text-white/50 hover:text-white transition-colors">Интеграции</a></li>
                                    <li><a href="/services/automation/crm" className="text-white/50 hover:text-white transition-colors">CRM</a></li>
                                    <li><a href="/services/automation/bots" className="text-white/50 hover:text-white transition-colors">Боты</a></li>
                                    <li><a href="/services/automation/notifications" className="text-white/50 hover:text-white transition-colors">Уведомления</a></li>
                                    <li><a href="/services/automation/internal-tools" className="text-white/50 hover:text-white transition-colors">Внутренние инструменты</a></li>
                                </ul>
                            </div>

                            <div>
                                <a href="/services/growth-analytics" className="text-white font-medium hover:text-white/80 transition-colors block mb-3">
                                    Рост и аналитика
                                </a>
                                <ul className="space-y-2">
                                    <li><a href="/services/growth-analytics/seo" className="text-white/50 hover:text-white transition-colors">SEO</a></li>
                                    <li><a href="/services/growth-analytics/analytics" className="text-white/50 hover:text-white transition-colors">Аналитика</a></li>
                                </ul>
                            </div>

                            <div>
                                <a href="/services/reliability" className="text-white font-medium hover:text-white/80 transition-colors block mb-3">
                                    Надёжность и масштабирование
                                </a>
                                <ul className="space-y-2">
                                    <li><a href="/services/reliability/security" className="text-white/50 hover:text-white transition-colors">Безопасность</a></li>
                                    <li><a href="/services/reliability/testing" className="text-white/50 hover:text-white transition-colors">Тестирование</a></li>
                                    <li><a href="/services/reliability/architecture" className="text-white/50 hover:text-white transition-colors">Архитектура</a></li>
                                </ul>
                            </div>

                            <div>
                                <a href="/services/ai" className="text-white font-medium hover:text-white/80 transition-colors block mb-3">
                                    AI
                                </a>
                                <ul className="space-y-2">
                                    <li><a href="/services/ai/ai-assistants" className="text-white/50 hover:text-white transition-colors">AI-ассистенты</a></li>
                                    <li><a href="/services/ai/ai-bots" className="text-white/50 hover:text-white transition-colors">AI-боты</a></li>
                                    <li><a href="/services/ai/model-integration" className="text-white/50 hover:text-white transition-colors">Интеграция моделей</a></li>
                                    <li><a href="/services/ai/data-processing" className="text-white/50 hover:text-white transition-colors">Обработка данных</a></li>
                                    <li><a href="/services/ai/ai-automation" className="text-white/50 hover:text-white transition-colors">AI-автоматизация</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative group pb-2">
                <span className="link_nav-header group flex items-center gap-0.5">
                    Каталог
                    <MdOutlineKeyboardArrowDown className="size-4 duration-300 group-hover:translate-y-0.5" />
                </span>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-[#111111] border border-white/10 rounded-xl shadow-2xl shadow-black/50 p-6 w-screen max-w-5xl backdrop-blur-sm">
                        <div className="grid grid-cols-3 gap-8 text-sm">

                            <div>
                                <a href="/catalog/ready-sites" className="text-white font-medium hover:text-white/80 transition-colors block mb-3">
                                    Готовые сайты
                                </a>
                                <ul className="space-y-2">
                                    <li><a href="/services/web-development/sites" className="text-white/50 hover:text-white transition-colors"></a></li>
                                    <li><a href="/services/web-development/web-application" className="text-white/50 hover:text-white transition-colors"></a></li>
                                    <li><a href="/services/web-development/interfaces" className="text-white/50 hover:text-white transition-colors"></a></li>
                                    <li><a href="/services/web-development/online-stores" className="text-white/50 hover:text-white transition-colors"></a></li>
                                    <li><a href="/services/web-development/complex-webproducts" className="text-white/50 hover:text-white transition-colors"></a></li>
                                </ul>
                            </div>

                            <div>
                                <a href="/catalog/bots" className="text-white font-medium hover:text-white/80 transition-colors block mb-3">
                                    Боты
                                </a>
                                <ul className="space-y-2">
                                    <li><a href="/services/automation/process-automation" className="text-white/50 hover:text-white transition-colors"></a></li>
                                    <li><a href="/services/automation/integrations" className="text-white/50 hover:text-white transition-colors"></a></li>
                                    <li><a href="/services/automation/crm" className="text-white/50 hover:text-white transition-colors"></a></li>
                                    <li><a href="/services/automation/bots" className="text-white/50 hover:text-white transition-colors"></a></li>
                                    <li><a href="/services/automation/notifications" className="text-white/50 hover:text-white transition-colors"></a></li>
                                    <li><a href="/services/automation/internal-tools" className="text-white/50 hover:text-white transition-colors"></a></li>
                                </ul>
                            </div>

                            <div>
                                <a href="/catalog/ready-models" className="text-white font-medium hover:text-white/80 transition-colors block mb-3">
                                    Готовые инструменты
                                </a>
                                <ul className="space-y-2">
                                    <li><a href="/services/growth-analytics/seo" className="text-white/50 hover:text-white transition-colors"></a></li>
                                    <li><a href="/services/growth-analytics/analytics" className="text-white/50 hover:text-white transition-colors"></a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <a className="link_nav-header group" href="/portfolio">
                Портфолио
            </a>

            <div className="relative group pb-2">
                <a href="/about" className="link_nav-header group flex items-center gap-0.5">
                    О нас
                    <MdOutlineKeyboardArrowDown className="size-4 duration-300 group-hover:translate-y-0.5" />
                </a>
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-[#111111] border border-white/10 rounded-xl shadow-2xl shadow-black/50 p-6 min-w-65 backdrop-blur-sm">
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