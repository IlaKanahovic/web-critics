import { FaCube, FaPaintBrush, FaRocket, FaPlus, FaCheck } from "react-icons/fa"

const includedItems = [
    "готовый сайт",
    "адаптация под ваш бизнес",
    "замена контента",
    "базовая настройка SEO",
    "адаптивная версия",
]

const addonItems = [
    "дополнительные страницы",
    "интеграции",
    "подключение домена",
    "размещение сайта",
    "тестирование перед запуском",
    "онлайн-оплату",
    "CRM",
    "аналитику",
    "постоянную поддержку",
    "дополнительные функции",
]

export function PriceAssessment() {
    return (
        <div className="container">
            <div className="pt-42">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Стоимость</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>
                <div>
                    <h2 className="text-white text-font-space text-4xl md:text-5xl text-center">За что вы платите</h2>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-[#111111] border border-white/10 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                            <FaCube className="text-white/60 size-8 mb-4" />
                            <h3 className="text-white text-lg font-semibold">Основа</h3>
                            <p className="text-white/60 text-sm mt-2 leading-relaxed">
                                Готовый дизайн, структура и функциональность выбранного решения.
                            </p>
                        </div>
                        <div className="bg-[#111111] border border-white/10 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                            <FaPaintBrush className="text-white/60 size-8 mb-4" />
                            <h3 className="text-white text-lg font-semibold">Адаптация</h3>
                            <p className="text-white/60 text-sm mt-2 leading-relaxed">
                                Логотип, цвета, контент, контакты и другие элементы под ваш бизнес.
                            </p>
                        </div>
                        <div className="bg-[#111111] border border-white/10 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                            <FaRocket className="text-white/60 size-8 mb-4" />
                            <h3 className="text-white text-lg font-semibold">Запуск</h3>
                            <p className="text-white/60 text-sm mt-2 leading-relaxed">
                                Настройка, подключение домена и размещение сайта.
                            </p>
                        </div>
                        <div className="bg-[#111111] border border-white/10 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                            <FaPlus className="text-white/60 size-8 mb-4" />
                            <h3 className="text-white text-lg font-semibold">Дополнения</h3>
                            <p className="text-white/60 text-sm mt-2 leading-relaxed">
                                Дополнительные функции и интеграции - только если они действительно нужны.
                            </p>
                        </div>
                    </div>
                    <p className="text-white/80 text-font-inter text-center text-lg mt-8">
                        Вы не платите за разработку того, что уже готово.
                    </p>
                </div>
                <div className="my-16 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
                <div>
                    <h2 className="text-white text-font-space text-4xl md:text-5xl text-center">Что вы получаете</h2>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[#111111] border border-white/10 rounded-xl p-6">
                            <h3 className="text-white text-lg font-semibold mb-4">Что входит в базовую стоимость:</h3>
                            <ul className="space-y-2.5">
                                {includedItems.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-white/80 text-sm">
                                        <FaCheck className="text-green-400 size-4 mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-[#111111] border border-white/10 rounded-xl p-6">
                            <h3 className="text-white text-lg font-semibold mb-4">Можно добавить</h3>
                            <ul className="space-y-2.5">
                                {addonItems.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-white/60 text-sm">
                                        <span className="text-white/30 text-lg leading-none">+</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 max-w-2xl mx-auto text-center bg-[#111111] border border-white/10 rounded-xl p-6">
                        <p className="text-white/80 text-font-inter text-sm leading-relaxed">
                            После запуска сайт можно оставить на самостоятельном обслуживании или подключить сопровождение.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

