import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"
import { FaShieldAlt, FaVial, FaSitemap } from "react-icons/fa"

const directions = [
    {
        icon: FaShieldAlt,
        title: "Безопасность",
        desc: "Проверяем, насколько защищены сайт, сервис и данные пользователей: доступы, уязвимые места, хранение информации и сценарии, через которые система может быть скомпрометирована.",
        href: "/services/reliability/security",
    },
    {
        icon: FaVial,
        title: "Тестирование",
        desc: "Проверяем продукт не только по отдельным функциям, но и по реальным пользовательским сценариям. Ищем ошибки и проблемы, которые могут проявиться после запуска, обновления или изменения системы.",
        href: "/services/reliability/testing",
    },
    {
        icon: FaSitemap,
        title: "Архитектура",
        desc: "Разбираемся, как устроена система внутри, где возникают ограничения и почему разработка новых функций становится сложнее. Определяем, что нужно изменить, чтобы продукт можно было нормально развивать дальше.",
        href: "/services/reliability/architecture",
    },
]

export function MainDirectionsReliability() {
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
                        Ошибка, уязвимость или неудачное техническое решение редко появляются внезапно. Обычно проблема уже существует внутри продукта - просто ещё не проявилась. Находим такие места заранее или разбираемся с ними, когда они уже начали мешать работе.
                    </p>
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-6">
                    {directions.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
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