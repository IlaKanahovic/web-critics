'use client'

import { FaChevronDown } from "react-icons/fa"
import { useState, useRef, useEffect } from "react"

const faqItems = [
    {
        question: "Чем готовый инструмент отличается от индивидуальной разработки?",
        answer:
            "В готовом инструменте основная логика и функциональность уже разработаны. Поэтому вместо создания решения с нуля мы адаптируем его под вашу задачу. Если готовой основы недостаточно - можем расширить её или разработать отдельное решение.",
    },
    {
        question: "Можно ли изменить инструмент под мой процесс?",
        answer:
            "Да. Можно изменить настройки, параметры, сценарии работы, подключить дополнительные источники данных и интеграции. Возможности адаптации зависят от конкретного инструмента.",
    },
    {
        question: "Можно ли подключить его к моей CRM или другому сервису?",
        answer:
            "Да, если сервис предоставляет необходимые возможности для интеграции. Мы можем подключить CRM, API, таблицы, сайт и другие внешние системы.",
    },
    {
        question: "Что происходит после покупки?",
        answer:
            "Мы связываемся с вами, уточняем необходимые изменения и подключения, адаптируем инструмент, проверяем его работу и запускаем. После этого вы можете пользоваться им самостоятельно или выбрать техническое сопровождение по подписке.",
    },
    {
        question: "Можно ли добавить AI?",
        answer:
            "Да, если AI действительно подходит для задачи. Например, можно добавить анализ данных, обработку текста, классификацию, генерацию информации или автоматическую обработку запросов.",
    },
    {
        question: "Что происходит после окончания подписки?",
        answer:
            "Сам инструмент не пропадает. После окончания подписки прекращается предоставление инфраструктуры и технического обслуживания, которые входили в неё. Вы можете самостоятельно разместить решение или продлить подписку.",
    },
    {
        question: "Нужно ли мне самому заниматься сервером и настройкой?",
        answer:
            "Нет, если вы выбираете запуск с нашей помощью. Мы можем взять на себя размещение, подключение сервисов, настройку интеграций и техническую часть.",
    },
    {
        question: "А если мне нужен бот, которого нет в каталоге?",
        answer:
            "Расскажите, какую задачу вы хотите решить. Мы посмотрим, можно ли адаптировать существующее решение, или предложим разработку нового инструмента с нуля.",
    },
]

function FaqItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if (contentRef.current) {
            setHeight(contentRef.current.scrollHeight)
        }
    }, [isOpen])

    return (
        <div className="bg-[#111111] border border-white/10 rounded-xl transition-all duration-300 hover:border-white/20">
            <button
                className="flex items-center justify-between w-full px-6 py-4 cursor-pointer select-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-white text-base font-medium pr-4 text-left">{question}</span>
                <FaChevronDown
                    className={`text-white/40 size-4 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>
            <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: isOpen ? height : 0 }}
            >
                <div ref={contentRef} className="px-6 pb-5 text-white/60 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {answer}
                </div>
            </div>
        </div>
    )
}

export function FAQByReadyModels() {
    return (
        <div className="container">
            <div className="pt-42">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">FAQ</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <h2 className="text-white text-font-space text-4xl md:text-5xl text-center">Часто задаваемые вопросы</h2>

                <div className="mt-10 max-w-3xl mx-auto space-y-3">
                    {faqItems.map((item, idx) => (
                        <FaqItem key={idx} question={item.question} answer={item.answer} />
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <p className="text-white/60 text-sm">
                        Остались вопросы? <a href="/contacts" className="text-white hover:underline underline-offset-2">Напишите нам</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

