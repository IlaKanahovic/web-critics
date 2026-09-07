'use client'

import { FaChevronDown } from "react-icons/fa"
import { useState, useRef, useEffect } from "react"

const faqItems = [
    {
        question: "Чем готовый бот отличается от разработки под заказ?",
        answer:
            "Готовый бот уже содержит основную логику и функциональность. Мы адаптируем его под ваш бизнес, поэтому не нужно разрабатывать всё с нуля. Если готового решения недостаточно, можем расширить его или разработать отдельное решение.",
    },
    {
        question: "Можно ли изменить сценарий работы бота?",
        answer:
            "Да. Можно изменить тексты, вопросы, команды, последовательность действий и другие элементы сценария. Объём изменений зависит от конкретного бота.",
    },
    {
        question: "Можно ли подключить бота к моей CRM?",
        answer:
            "Да, если CRM предоставляет необходимые возможности для интеграции. Мы можем подключить бота к CRM, сайту, API, таблицам и другим сервисам.",
    },
    {
        question: "Что происходит после покупки?",
        answer:
            "После выбора решения мы согласовываем необходимые изменения, получаем материалы, адаптируем сайт, тестируем его и запускаем.",
    },
    {
        question: "Можно ли добавить AI?",
        answer:
            "Да. В подходящих решениях можно добавить AI-функции: ответы на вопросы, обработку текста, классификацию обращений, работу с данными и другие сценарии.",
    },
    {
        question: "Что происходит после окончания подписки?",
        answer:
            "Сам бот остаётся у вас. После окончания подписки прекращается предоставление инфраструктуры и технического сопровождения с нашей стороны. Вы можете разместить бота самостоятельно или продлить подписку.",
    },
    {
        question: "Нужно ли мне самому заниматься сервером и настройкой?",
        answer:
            "Нет, если вы выбираете запуск с нашей помощью. Мы можем взять размещение, подключение и техническую настройку на себя.",
    },
    {
        question: "А если мне нужен бот, которого нет в каталоге?",
        answer:
            "Расскажите, что должен делать бот. Мы посмотрим, можно ли адаптировать существующее решение, или разработаем новое под вашу задачу.",
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

export function FAQByBots() {
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

