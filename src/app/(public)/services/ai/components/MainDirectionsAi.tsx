import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"
import { FaRobot, FaComments, FaPlug, FaDatabase, FaCogs } from "react-icons/fa"
import { GiArtificialIntelligence } from "react-icons/gi"

const directions = [
    {
        icon: FaRobot,
        title: "AI-ассистенты",
        desc: "Создаём AI-инструменты, которые помогают сотрудникам и клиентам находить информацию, работать с задачами и получать нужный результат без постоянного участия специалиста.",
        href: "/services/ai/ai-assistants",
    },
    {
        icon: FaComments,
        title: "AI-боты",
        desc: "Встраиваем AI в ботов для поддержки, консультаций, заявок и других сценариев общения. Бот понимает запрос пользователя, работает с контекстом и при необходимости передаёт результат дальше.",
        href: "/services/ai/ai-bots",
    },
    {
        icon: FaPlug,
        title: "Интеграция AI-моделей",
        desc: "Подключаем AI к существующим сайтам, приложениям и внутренним системам. Модель становится частью вашего продукта и выполняет конкретную функцию внутри рабочего процесса.",
        href: "/services/ai/model-integration",
    },
    {
        icon: FaDatabase,
        title: "Обработка данных",
        desc: "Используем AI для работы с большими объёмами информации: классификации, структурирования, анализа, извлечения нужных данных и подготовки результата для дальнейшей работы.",
        href: "/services/ai/data-processing",
    },
    {
        icon: GiArtificialIntelligence,
        title: "AI-автоматизация",
        desc: "Встраиваем AI непосредственно в бизнес-процессы - там, где он может взять на себя часть ручной работы, обработку информации или выполнение типовых операций.",
        href: "/services/ai/ai-automation",
    },
]

export function MainDirectionsAi() {
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
                        Не добавляем AI ради самого AI. Сначала смотрим на задачу, данные и существующий процесс, а затем определяем, где технология действительно может сэкономить время, упростить работу или дать пользователю новый способ взаимодействия с продуктом.
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