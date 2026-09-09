'use client'

import { VscDeveloperTools } from "react-icons/vsc";
import { SiTextpattern } from "react-icons/si";
import { FaRobot } from "react-icons/fa";
import { IoAnalyticsOutline } from "react-icons/io5";
import { GiArtificialIntelligence } from "react-icons/gi"
import CodeIcon3D from "@/components/ui/3d/CodeIcon3D";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const cardClass = "relative rounded-xl bg-[#111111] border border-white/10 shadow-inner shadow-white/5 before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-12 before:h-12 before:bg-white/20 before:rounded-full before:blur-2xl before:pointer-events-none after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent after:pointer-events-none transition-all duration-300 hover:shadow-2xl flex flex-col items-center p-6 min-h-[460px] cursor-pointer"

const services = [
    {
        href: "/services/web-development",
        title: "Нужен новый цифровой продукт?",
        description: "От сайта до собственного сервиса или веб-приложения. Разберём задачу, спроектируем решение и доведём его до запуска.",
        btnDesc: "Разберём задачу",
        icon: SiTextpattern,
    },
    {
        href: "/services/automation",
        title: "Слишком много ручной работы?",
        description: "Сотрудники тратят время на то, что давно можно автоматизировать? Свяжем сервисы, уберём повторяющиеся действия и освободим время для работы, которая действительно важна.",
        btnDesc: "Найти точки автоматизации",
        icon: FaRobot,
    },
    {
        href: "/services/reliability",
        title: "Проект работает нестабильно?",
        description: "Медленно загружается, падает под нагрузкой или постоянно появляются ошибки? Находим причину и устраняем её - от кода до архитектуры.",
        btnDesc: "Провести диагностику",
        icon: VscDeveloperTools,
    },
    {
        href: "/services/growt-analytics",
        title: "Есть трафик, но мало клиентов?",
        description: "Посетители приходят, но не покупают? Разберём путь пользователя, найдём точки потери и исправим то, что мешает конверсии.",
        btnDesc: "Найти причину",
        icon: IoAnalyticsOutline,
    },
    {
        href: "/services/ai",
        title: "Хотим использовать AI?",
        description: "Есть процесс, который хочется ускорить с помощью AI? Разберём задачу и определим, где технология действительно даст результат - а где будет просто дорогой игрушкой.",
        btnDesc: "Обсудить внедрение",
        icon: GiArtificialIntelligence,
    },
]

export function OverviewOfServices() {
    return (
        <div className="mt-81.5 relative rounded-xl p-px overflow-visible">
            <div className="relative rounded-xl p-6 container">
                <div className="absolute top-32 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none z-10"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-linear-to-r from-transparent via-white/40 to-transparent pointer-events-none z-10"></div>
                <div>
                    <div className="w-full h-auto pt-6">
                        <CodeIcon3D />
                    </div>
                    <h1 className="text-white text-center text-font-space text-6xl">Услуги</h1>
                    <h2 className="text-[#a1a4a5] text-font-inter text-center text-2xl pt-4">Какая задача стоит перед вами?</h2>
                    <div className="pt-8">
                        <div className="flex flex-wrap gap-6 justify-center">
                            {services.map((service, index) => (
                                <Link key={index} href={service.href} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] shrink-0">
                                    <div className={cardClass}>
                                        <span className="text-white text-font-inter text-[clamp(1.6rem,2.5vw,1.8rem)] text-center font-semibold h-14 flex items-start justify-center">
                                            {service.title}
                                        </span>
                                        <hr className="w-full border-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent mt-8" />
                                        <span className="text-white/80 text-font-inter text-[clamp(1.1rem,1.8vw,1.2rem)] text-left mt-4 flex-1">
                                            {service.description}
                                        </span>
                                        <service.icon className="text-white size-10 max-sm:size-12 mb-2" />
                                        <button className="mt-2 px-6 py-4 cursor-pointer rounded-full bg-white/5 border border-white/20 text-white text-[18px] max-sm:text-base font-medium transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] self-center">
                                            {service.btnDesc}
                                        </button>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <p className="text-white text-font-inter text-2xl mt-30">Не нашли свою задачу?</p>
                    <p className="text-[#a1a4a5] text-font-inter text-2xl pt-4">
                        Это нормально. <br />
                        Вам не нужно заранее знать, какой инструмент вам нужен. Расскажите о проблеме - мы разберёмся, что можно сделать.
                    </p>
                    <Link href="/contacts">
                        <button className="button-main-styles mt-6 flex">
                            Обсудить задачу
                            <IoIosArrowForward className="size-5 mt-[6.5px] ml-2" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}