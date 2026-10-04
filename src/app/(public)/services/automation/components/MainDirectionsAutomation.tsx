import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"
import { FaCogs, FaPlug, FaUsers, FaRobot, FaBell, FaTools } from "react-icons/fa"

const directions = [
    {
        icon: FaCogs,
        title: "Автоматизация процессов",
        desc: "Убираем повторяющиеся действия и выстраиваем процесс так, чтобы система сама выполняла нужные шаги - от получения данных до передачи результата следующему участнику.",
        href: "/services/automation/process-automation",
    },
    {
        icon: FaPlug,
        title: "Интеграции",
        desc: "Связываем сервисы, которыми вы уже пользуетесь, чтобы данные автоматически передавались между ними. Без постоянного копирования, выгрузок и ручной синхронизации.",
        href: "/services/automation/integrations",
    },
    {
        icon: FaUsers,
        title: "CRM",
        desc: "Настраиваем работу с клиентами, заявками и сделками под реальный процесс вашего бизнеса. Если возможностей готовой CRM недостаточно, дополняем её собственными решениями.",
        href: "/services/automation/crm",
    },
    {
        icon: FaRobot,
        title: "Боты",
        desc: "Создаём ботов для заявок, поддержки, записи, уведомлений и других сценариев, где не требуется постоянное участие сотрудника.",
        href: "/services/automation/bots",
    },
    {
        icon: FaBell,
        title: "Уведомления",
        desc: "Автоматизируем отправку сообщений, напоминаний, статусов и результатов действий. Система сама сообщает нужному человеку, что произошло и что нужно сделать дальше.",
        href: "/services/automation/notifications",
    },
    {
        icon: FaTools,
        title: "Внутренние инструменты",
        desc: "Создаём цифровые инструменты для сотрудников - от рабочих панелей и обработчиков данных до небольших внутренних систем под конкретный процесс.",
        href: "/services/automation/internal-tools",
    },
]

export function MainDirectionsAutomation() {
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
                        Отдельная автоматизация редко решает проблему целиком. Поэтому смотрим на процесс от начала до конца: где появляются данные, какие действия повторяются, какие системы используются и где действительно можно убрать ручную работу.
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