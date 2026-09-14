'use client'

import Link from 'next/link'
import { useState } from 'react'

const faq = [
    {
        q: 'Нужно ли обращаться, если сайт сейчас работает нормально?',
        a: 'Необязательно ждать проблемы. Проверка может быть полезна перед запуском нового продукта, масштабными изменениями, увеличением нагрузки или передачей проекта другой команде.',
    },
    {
        q: 'Вы можете проверить чужой или уже существующий проект?',
        a: 'Да. Необязательно разрабатывать продукт с нуля вместе с нами. Мы можем подключиться к уже существующему сайту или сервису и разобраться в его текущем состоянии.',
    },
    {
        q: 'Можно проверить только безопасность?',
        a: 'Да. Если задача ограничивается определённой областью, можем сосредоточиться на ней. При этом заранее определяем объём проверки и её границы.',
    },
    {
        q: 'Можно проверить только отдельную функцию?',
        a: 'Да. Например, можно отдельно проверить процесс оформления заказа, личный кабинет, регистрацию, оплату или другую важную часть продукта.',
    },
    {
        q: 'Что будет, если вы найдёте много проблем?',
        a: 'Мы не просто передадим список ошибок. Опишем найденные проблемы, их приоритет и возможные последствия, после чего можно определить порядок исправления.',
    },
    {
        q: 'Нужно ли полностью переделывать проект, если архитектура плохая?',
        a: 'Не обязательно. Сначала определяем, какие именно проблемы создаёт текущая архитектура и можно ли решить их точечными изменениями. Полная переработка нужна только тогда, когда она действительно оправдана.',
    },
    {
        q: 'Можно ли после проверки исправить найденные проблемы?',
        a: 'Да. Мы можем как передать результаты проверки вашей команде, так и самостоятельно выполнить необходимые исправления.',
    },
    {
        q: 'Сколько стоит проверка?',
        a: 'Стоимость зависит от размера продукта, его сложности и глубины проверки. После знакомства с проектом определяем необходимый объём работ и рассчитываем стоимость.',
    },
    {
        q: 'Что делать, если я не знаю, что именно у нас не так?',
        a: 'Это нормально. Можно просто рассказать, что вас беспокоит: сайт периодически падает, пользователи сталкиваются с ошибками, система стала медленной или вы не уверены в её безопасности. Мы поможем определить, с чего начать.',
    },
]

export function FAQandCTAByReliability() {
    const [open, setOpen] = useState<number | null>(0)

    return (
        <section className="relative">
            <div className="relative py-20 md:py-32 lg:py-40">
                <div className="container px-4 md:px-10 lg:px-35">
                    <div className="mb-10 md:mb-16 flex items-center gap-4">
                        <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                        <span className="text-white/40 text-xs uppercase tracking-widest">FAQ</span>
                        <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                        <div className="lg:col-span-4">
                            <div className="lg:sticky lg:top-32">

                                <h2 className="text-white text-3xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
                                    Частые<br />вопросы
                                </h2>

                                <p className="text-white/55 text-sm md:text-base leading-relaxed max-w-md">
                                    Собрали то, что чаще всего спрашивают до начала работы. Если вашего вопроса здесь нет - задайте его напрямую.
                                </p>

                                <div className="hidden lg:flex items-center gap-4 mt-10 text-white/30 text-xs uppercase tracking-widest">
                                    <span className="w-12 h-px bg-white/20" />
                                    <span>{faq.length} вопросов</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-8">
                            <div className="border-t border-white/8">
                                {faq.map((item, i) => {
                                    const isOpen = open === i
                                    return (
                                        <div
                                            key={i}
                                            className="border-b border-white/8"
                                        >
                                            <button
                                                type="button"
                                                onClick={() => setOpen(isOpen ? null : i)}
                                                className="group w-full flex items-start justify-between gap-6 py-6 md:py-7 text-left transition-colors duration-300 cursor-pointer"
                                            >
                                                <div className="flex items-start gap-5 md:gap-8 flex-1">
                                                    <span className={`shrink-0 text-xs tracking-[0.3em] pt-1.5 transition-colors duration-500 ${isOpen ? 'text-white/60' : 'text-white/25 group-hover:text-white/50'}`}>
                                                        {String(i + 1).padStart(2, '0')}
                                                    </span>
                                                    <span className={`text-base md:text-xl leading-snug transition-colors duration-500 ${isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                                                        {item.q}
                                                    </span>
                                                </div>

                                                <span className="relative shrink-0 w-6 h-6 md:w-7 md:h-7 mt-0.5">
                                                    <span className={`absolute top-1/2 left-0 w-full h-px bg-white/60 transition-transform duration-500 ${isOpen ? 'rotate-0' : ''}`} />
                                                    <span className={`absolute top-0 left-1/2 w-px h-full bg-white/60 transition-transform duration-500 ${isOpen ? 'rotate-90 scale-y-0' : ''}`} />
                                                </span>
                                            </button>

                                            <div
                                                className={`grid transition-all duration-500 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                            >
                                                <div className="overflow-hidden">
                                                    <div className="pb-7 md:pb-9 pl-11 md:pl-16 pr-4 md:pr-12">
                                                        <p className="text-white/55 text-sm md:text-base leading-relaxed max-w-2xl">
                                                            {item.a}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative py-20 md:py-32 lg:py-40">
                <div className="container px-4 md:px-10 lg:px-35">
                    <div className="relative rounded-3xl border border-white/8 bg-linear-to-br from-white/4 via-white/2 to-transparent overflow-hidden">
                        <div className="absolute -top-1/3 -right-1/4 w-175 h-175 rounded-full bg-violet-500/10 blur-[140px] pointer-events-none" />
                        <div className="absolute -bottom-1/3 -left-1/4 w-150 h-150 rounded-full bg-blue-500/8 blur-[140px] pointer-events-none" />

                        <span className="absolute -top-8 -left-4 text-[200px] md:text-[320px] font-bold text-white/2.5 leading-none select-none pointer-events-none">
                            O
                        </span>

                        <div className="relative p-8 md:p-16 lg:p-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                            <div className="lg:col-span-7">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="h-px w-8 bg-white/30" />
                                    <span className="text-white/40 text-xs uppercase tracking-widest">Финальный шаг</span>
                                </div>

                                <h2 className="text-white text-3xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
                                    Не уверены, насколько надёжен ваш продукт?
                                </h2>

                                <p className="text-white/60 text-sm md:text-lg leading-relaxed max-w-xl mb-4">
                                    Необязательно самостоятельно искать техническую проблему или разбираться в терминах. Расскажите, что происходит с сайтом или сервисом, какие риски вас беспокоят или что планируется изменить.
                                </p>
                                <p className="text-white/45 text-sm md:text-base leading-relaxed max-w-xl">
                                    Мы разберёмся в ситуации и предложим, что имеет смысл проверить или исправить в первую очередь.
                                </p>
                            </div>

                            <div className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-white/8">
                                <Link href="/contacts">
                                    <button
                                        type="button"
                                        className="group relative w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-black font-medium text-base md:text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-95 cursor-pointer"
                                    >
                                        <span className="relative z-10">Обсудить проблему</span>
                                        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                                        <span className="absolute inset-0 bg-linear-to-br from-gray-200 to-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                                    </button>
                                </Link>

                                <p className="text-white/40 text-xs md:text-sm leading-relaxed mt-5 max-w-sm">
                                    Расскажите о ситуации своими словами - техническое задание не требуется.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}