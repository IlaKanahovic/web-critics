'use client'

import Link from 'next/link'
import { useState } from 'react'

const faq = [
    {
        q: 'Можно обратиться без технического задания?',
        a: 'Да. Не обязательно заранее разбираться в технологиях или формулировать задачу языком разработчиков. Расскажите, что вы хотите получить или какую проблему нужно решить - дальше вместе определим необходимый формат.',
    },
    {
        q: 'Вы делаете только сайты?',
        a: 'Нет. Мы разрабатываем сайты, веб-приложения, интернет-магазины, интерфейсы и сложные веб-продукты.',
    },
    {
        q: 'Можно доработать уже существующий сайт?',
        a: 'Да. Мы можем изменить отдельные элементы, добавить необходимую функциональность или полностью переработать существующий проект.',
    },
    {
        q: 'Можно подключить CRM, оплату или другие сервисы?',
        a: 'Да. В зависимости от задачи подключаем CRM, платёжные системы, аналитику, внешние API и другие необходимые сервисы.',
    },
    {
        q: 'Сколько стоит разработка?',
        a: 'Стоимость зависит от формата продукта, его функциональности, количества интеграций и объёма работ. После обсуждения задачи определяем состав проекта и рассчитываем стоимость.',
    },
    {
        q: 'Сколько занимает разработка?',
        a: 'Срок зависит от сложности проекта. Небольшой сайт можно запустить значительно быстрее полноценного веб-продукта с backend, личными кабинетами и интеграциями. Точные сроки определяем после согласования состава работ.',
    },
    {
        q: 'Можно ли начать с небольшой версии продукта?',
        a: 'Да. Для сложных проектов можно определить минимальный набор функций, необходимый для первого запуска, а остальные возможности добавить позже.',
    },
    {
        q: 'Что будет после запуска?',
        a: 'Мы передаём готовый проект и необходимые доступы. После запуска можно продолжить работу с нами: заниматься поддержкой, развитием, оптимизацией и добавлением новых функций.',
    },
]

export function FAQandCTAByWebDevelopment() {
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
                            N
                        </span>

                        <div className="relative p-8 md:p-16 lg:p-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                            <div className="lg:col-span-7">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="h-px w-8 bg-white/30" />
                                    <span className="text-white/40 text-xs uppercase tracking-widest">Финальный шаг</span>
                                </div>

                                <h2 className="text-white text-3xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
                                    Есть задача - разберёмся, как её решить
                                </h2>

                                <p className="text-white/60 text-sm md:text-lg leading-relaxed max-w-xl mb-4">
                                    Необязательно заранее знать, нужен вам сайт, веб-приложение или что-то совершенно другое.
                                </p>
                                <p className="text-white/45 text-sm md:text-base leading-relaxed max-w-xl">
                                    Расскажите, что сейчас не работает, какой процесс хочется изменить или какой продукт вы хотите запустить. Мы разберём задачу и предложим подходящий вариант решения.
                                </p>
                            </div>

                            <div className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-white/8">
                                <Link href="/contacts">
                                    <button
                                        type="button"
                                        className="group relative w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-black font-medium text-base md:text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-95 cursor-pointer"
                                    >
                                        <span className="relative z-10">Обсудить задачу</span>
                                        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                                        <span className="absolute inset-0 bg-linear-to-br from-gray-200 to-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                                    </button>
                                </Link>

                                <p className="text-white/40 text-xs md:text-sm leading-relaxed mt-5 max-w-sm">
                                    Ответим на вопросы, оценим задачу и расскажем, с чего лучше начать.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}