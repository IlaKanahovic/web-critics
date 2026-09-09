import { BrandIdentityLogo } from '@/components/ui/logo/BrandIdentityLogo'
import { FaTelegram, FaWhatsapp, FaGithub, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export function Footer() {
    return (
        <footer className="text-white/60 text-sm pt-12">
            <div className="relative w-full h-px overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent blur-xl" />
            </div>

            <div className="container px-4 md:px-0">
                <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
                    <div className="col-span-2 md:col-span-1">
                        <div className="mb-6">
                            <BrandIdentityLogo />
                            <div className="flex items-center gap-2 mt-2">
                                <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                <span className="text-white/40 text-xs">Все разработанные сайты работают</span>
                            </div>
                        </div>
                        <ul className="space-y-2.5">
                            <li><a href="/" className="hover:text-white transition-colors duration-200">Главная</a></li>
                            <li><a href="/catalog" className="hover:text-white transition-colors duration-200">Каталог</a></li>
                            <li><a href="/portfolio" className="hover:text-white transition-colors duration-200">Кейсы</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-200">Услуги</a></li>
                            <li><a href="/contacts" className="hover:text-white transition-colors duration-200">Контакты</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white/30 text-[10px] uppercase tracking-[0.15em] mb-5 font-medium">Услуги</h4>
                        <ul className="space-y-2.5">
                            <li><a href="#" className="hover:text-white transition-colors duration-200">Веб-разработка</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-200">Автоматизация</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-200">Рост и аналитика</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-200">AI</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-200">Надёжность и масштабирование</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white/30 text-[10px] uppercase tracking-[0.15em] mb-5 font-medium">Продукты</h4>
                        <ul className="space-y-2.5">
                            <li><a href="/catalog/ready-sites" className="hover:text-white transition-colors duration-200">Готовые сайты</a></li>
                            <li><a href="/catalog/bots" className="hover:text-white transition-colors duration-200">Боты</a></li>
                            <li><a href="/catalog/ready-models" className="hover:text-white transition-colors duration-200">Готовые инструменты</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white/30 text-[10px] uppercase tracking-[0.15em] mb-5 font-medium">Компания</h4>
                        <ul className="space-y-2.5">
                            <li><a href="/about" className="hover:text-white transition-colors duration-200">О студии</a></li>
                            <li><a href="/portfolio" className="hover:text-white transition-colors duration-200">Портфолио</a></li>
                            <li><a href="/blog" className="hover:text-white transition-colors duration-200">Блог</a></li>
                            <li><a href="/privacy" className="hover:text-white transition-colors duration-200">Политика конфиденциальности</a></li>
                            <li><a href="/offer" className="hover:text-white transition-colors duration-200">Оферта</a></li>
                        </ul>
                    </div>

                    {/* доделать ссылки */}
                    <div>
                        <h4 className="text-white/30 text-[10px] uppercase tracking-[0.15em] mb-5 font-medium">Контакты</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="flex items-center gap-3 hover:text-white transition-colors duration-200">
                                    <FaTelegram className="text-white/30 group-hover:text-white transition-colors duration-200" size={18} />
                                    <span>Telegram</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 hover:text-white transition-colors duration-200">
                                    <FaWhatsapp className="text-white/30 group-hover:text-white transition-colors duration-200" size={18} />
                                    <span>WhatsApp</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@site.ru" className="flex items-center gap-3 hover:text-white transition-colors duration-200">
                                    <HiOutlineMail className="text-white/30 group-hover:text-white transition-colors duration-200" size={20} />
                                    <span>Email</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 hover:text-white transition-colors duration-200">
                                    <FaGithub className="text-white/30 group-hover:text-white transition-colors duration-200" size={18} />
                                    <span>GitHub</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 hover:text-white transition-colors duration-200">
                                    <FaInstagram className="text-white/30 group-hover:text-white transition-colors duration-200" size={18} />
                                    <span>Instagram</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 py-7 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-xs">WebCRitic: Ваша проблема — наше решение!</p>
                    <div className="flex gap-6 text-xs">
                        <a href="/privacy" className="text-white/30 hover:text-white transition-colors duration-200">Политика конфиденциальности</a>
                        <a href="/offer" className="text-white/30 hover:text-white transition-colors duration-200">Оферта</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}