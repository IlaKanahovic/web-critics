'use client'

import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"
import { FaCheck } from "react-icons/fa"
import { useState } from 'react'
import { useFormValidation } from '@/hooks/useFormValidation'

export function PayProductComponent() {
    const [selectedFormat, setSelectedFormat] = useState<'one-time' | 'subscription'>('one-time')

    const { form, errors, handleChange, validateForm } = useFormValidation()

    const handleFormatSelect = (format: 'one-time' | 'subscription') => {
        setSelectedFormat(format)
    }

    const handlePay = () => {
        if (validateForm()) {
            console.log('Сбор данных для оплаты:', { format: selectedFormat, ...form })
        }
    }

    return (
        <div className="container">
            <div className="pt-12">
                <div className="mb-8 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Оформление</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="flex items-start justify-between bg-[#111111] border border-white/10 rounded-xl p-6">
                    <div>
                        <h1 className="text-white text-font-space text-3xl md:text-4xl">Оформление решения</h1>
                        <p className="text-white/70 text-font-inter text-sm mt-2">
                            Название продукта
                        </p>
                        <p className="text-white/50 text-font-inter text-sm mt-1">
                            Вы выбрали готовое решение. Осталось определить формат и оставить контактные данные.
                        </p>
                    </div>
                    <button className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 group inline-flex items-center gap-1">
                        <span>Посмотреть демо</span>
                        <IoIosArrowForward className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </button>
                </div>

                <div className="mt-8">
                    <h2 className="text-white text-font-space text-2xl md:text-3xl text-center">Выберите формат</h2>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div
                            onClick={() => handleFormatSelect('one-time')}
                            className={`bg-[#111111] border rounded-xl p-6 transition-all duration-300 flex flex-col cursor-pointer ${selectedFormat === 'one-time'
                                ? 'border-white/30 bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]'
                                : 'border-white/10 hover:border-white/20'
                                }`}
                        >
                            <h3 className="text-white text-xl font-semibold">Разовая покупка</h3>
                            <p className="text-white text-3xl font-bold mt-2">цена ₽</p>
                            <p className="text-white/50 text-sm mt-1">Вы оплачиваете готовое решение и его адаптацию под вашу задачу. После запуска продукт остаётся у вас.</p>
                            <p className="text-white/70 text-sm mt-4 font-medium">В стоимость входит:</p>
                            <ul className="mt-2 space-y-1.5">
                                {["Динамический пункт", "Динамический пункт", "Динамический пункт", "Динамический пункт", "Динамический пункт"].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-white/60 text-sm">
                                        <FaCheck className="text-green-400 size-3.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div
                            onClick={() => handleFormatSelect('subscription')}
                            className={`bg-[#111111] border rounded-xl p-6 transition-all duration-300 flex flex-col cursor-pointer ${selectedFormat === 'subscription'
                                ? 'border-white/30 bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]'
                                : 'border-white/10 hover:border-white/20'
                                }`}
                        >
                            <h3 className="text-white text-xl font-semibold">Подписка</h3>
                            <p className="text-white text-3xl font-bold mt-2">цена ₽ <span className="text-white/40 text-lg font-normal">/ месяц</span></p>
                            <p className="text-white/50 text-sm mt-1">Решение работает как сервис: инфраструктура и техническое обслуживание включены в подписку.</p>
                            <p className="text-white/70 text-sm mt-4 font-medium">В подписку входит:</p>
                            <ul className="mt-2 space-y-1.5">
                                {["Динамический пункт", "Динамический пункт", "Динамический пункт", "Динамический пункт", "Динамический пункт"].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-white/60 text-sm">
                                        <FaCheck className="text-green-400 size-3.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-white text-font-space text-2xl md:text-3xl text-center">Что выбрать?</h2>
                    <div className="mt-6 overflow-x-auto">
                        <table className="w-full border-collapse max-w-2xl mx-auto">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left text-white/40 text-xs uppercase tracking-wider font-medium py-3 pr-4">&nbsp;</th>
                                    <th className="text-center text-white/60 text-xs uppercase tracking-wider font-medium py-3 px-4 w-1/4">Разовая покупка</th>
                                    <th className="text-center text-white/60 text-xs uppercase tracking-wider font-medium py-3 px-4 w-1/4">Подписка</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { label: "Оплата", one: "Один раз", sub: "Каждый месяц" },
                                    { label: "Готовое решение", one: "✓", sub: "✓" },
                                    { label: "Адаптация", one: "✓", sub: "✓" },
                                    { label: "Запуск", one: "✓", sub: "✓" },
                                    { label: "Инфраструктура", one: "Динамически", sub: "Динамически" },
                                    { label: "Техническая поддержка", one: "Динамически", sub: "Динамически" },
                                    { label: "Обновления", one: "Динамически", sub: "Динамически" },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-b border-white/5">
                                        <td className="text-white/80 text-sm py-3 pr-4">{row.label}</td>
                                        <td className="text-center text-white/60 text-sm py-3 px-4">{row.one}</td>
                                        <td className="text-center text-white/60 text-sm py-3 px-4">{row.sub}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-12 max-w-2xl mx-auto bg-[#111111] border border-white/10 rounded-xl p-6">
                    <h2 className="text-white text-font-space text-2xl md:text-3xl text-center">Вы заказываете</h2>
                    <div className="mt-4 text-center">
                        <p className="text-white text-xl font-semibold">Название продукта</p>
                        <p className="text-white/50 text-sm">Тип продукта</p>
                        <p className="text-white/60 text-sm mt-1">
                            {selectedFormat === 'one-time' ? 'Разовая покупка' : 'Подписка'}
                        </p>
                        <p className="text-white text-3xl font-bold mt-4">цена ₽</p>
                    </div>
                    <button className="text-white/50 hover:text-white text-sm transition-colors duration-200 block mx-auto mt-4">Изменить вариант</button>
                </div>

                <div className="mt-12 max-w-2xl mx-auto">
                    <h2 className="text-white text-font-space text-2xl md:text-3xl text-center">Расскажите, как с вами связаться</h2>
                    <p className="text-white/50 text-font-inter text-center text-sm mt-2">После оплаты мы свяжемся с вами, уточним детали и согласуем дальнейшие шаги.</p>
                    <div className="mt-6 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-white/70 text-sm font-medium block mb-1.5">ФИО</label>
                                <input
                                    type="text"
                                    value={form.name}
                                    onChange={(e) => handleChange('name', e.target.value)}
                                    className={`w-full px-4 py-3 bg-black/40 border rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors ${errors.name ? 'border-red-500' : 'border-white/10'}`}
                                />
                                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label className="text-white/70 text-sm font-medium block mb-1.5">Телефон</label>
                                <input
                                    type="tel"
                                    value={form.phone}
                                    onChange={(e) => handleChange('phone', e.target.value)}
                                    className={`w-full px-4 py-3 bg-black/40 border rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors ${errors.phone ? 'border-red-500' : 'border-white/10'}`}
                                    placeholder="+7 900 000-00-00"
                                />
                                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                            </div>
                            <div className="md:col-span-2">
                                <label className="text-white/70 text-sm font-medium block mb-1.5">E-mail</label>
                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    className={`w-full px-4 py-3 bg-black/40 border rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors ${errors.email ? 'border-red-500' : 'border-white/10'}`}
                                    placeholder="E-mail"
                                />
                                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                            </div>
                            <div className="md:col-span-2">
                                <label className="text-white/70 text-sm font-medium block mb-1.5">Сфера бизнеса, регион работы, адрес действующего сайта и витрины</label>
                                <textarea
                                    rows={3}
                                    placeholder="Например: интернет-магазин, Москва, site.ru"
                                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors resize-y"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-start gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={form.consent}
                                    onChange={(e) => handleChange('consent', e.target.checked)}
                                    className="mt-0.5 w-4 h-4 bg-black/40 border border-white/20 rounded checked:bg-white checked:border-white focus:ring-0 focus:ring-offset-0 accent-white cursor-pointer"
                                />
                                <span className="text-white/60 text-xs leading-relaxed">
                                    Я даю согласие на обработку персональных данных на условиях{' '}
                                    <a href="/personal-data-processing-policy" className="text-white/90 hover:text-white underline underline-offset-2">Политики обработки персональных данных</a>.
                                </span>
                            </label>
                            {errors.consent && <p className="text-red-400 text-xs mt-1">{errors.consent}</p>}
                            <label className="flex items-start gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={form.offer}
                                    onChange={(e) => handleChange('offer', e.target.checked)}
                                    className="mt-0.5 w-4 h-4 bg-black/40 border border-white/20 rounded checked:bg-white checked:border-white focus:ring-0 focus:ring-offset-0 accent-white cursor-pointer"
                                />
                                <span className="text-white/60 text-xs leading-relaxed">
                                    Я принимаю условия{' '}
                                    <a href="/offer" className="text-white/90 hover:text-white underline underline-offset-2">публичной оферты</a>.
                                </span>
                            </label>
                            {errors.offer && <p className="text-red-400 text-xs mt-1">{errors.offer}</p>}
                            <label className="flex items-start gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    className="mt-0.5 w-4 h-4 bg-black/40 border border-white/20 rounded checked:bg-white checked:border-white focus:ring-0 focus:ring-offset-0 accent-white cursor-pointer"
                                />
                                <span className="text-white/60 text-xs leading-relaxed">
                                    Я даю <a href="/consent-receive-advertising" className="text-white/90 hover:text-white underline underline-offset-2">согласие</a> получать рекламные и информационные материалы.
                                </span>
                            </label>
                        </div>

                        <p className="text-white/30 text-xs text-center mt-2">*Если вы пока не знаете, какое решение вам нужно — это нормально. Начнём с проблемы.</p>
                    </div>
                </div>

                <div className="mt-12 max-w-2xl mx-auto bg-[#111111] border border-white/10 rounded-xl p-6">
                    <h2 className="text-white text-font-space text-2xl md:text-3xl text-center">Проверьте заказ</h2>
                    <div className="mt-4 text-center">
                        <p className="text-white text-xl font-semibold">Название продукта</p>
                        <p className="text-white/50 text-sm">{selectedFormat === 'one-time' ? 'Разовая покупка' : 'Подписка'}</p>
                        <p className="text-white text-3xl font-bold mt-2">цена ₽</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-white/70 text-sm font-medium">В стоимость входит</p>
                        <ul className="mt-2 space-y-1.5">
                            {["Динамический пункт", "Динамический пункт", "Динамический пункт"].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-white/60 text-sm">
                                    <FaCheck className="text-green-400 size-3.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="text-white/40 text-xs text-center mt-4">Дополнительные работы. Если во время обсуждения потребуется что-то сверх выбранной комплектации, мы согласуем стоимость до начала работ.</p>
                    <button
                        onClick={handlePay}
                        className="button-main-styles w-full justify-center mt-4"
                    >
                        Оплатить
                    </button>
                </div>

                <div className="mt-12">
                    <h2 className="text-white text-font-space text-2xl md:text-3xl text-center">Что будет после заказа?</h2>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { num: "01", title: "Получим ваши данные", desc: "Заявка поступит к нам вместе с выбранным решением и вашими пожеланиями." },
                            { num: "02", title: "Свяжемся с вами", desc: "Уточним детали, необходимые материалы и изменения." },
                            { num: "03", title: "Подтвердим условия", desc: "Согласуем стоимость, сроки и дополнительные работы, если они понадобятся." },
                            { num: "04", title: "Запустим решение", desc: "Настроим, проверим и запустим готовый продукт." },
                        ].map((step, idx) => (
                            <div key={idx} className="bg-[#111111] border border-white/10 rounded-xl p-4 transition hover:border-white/20">
                                <span className="text-white/20 text-xl font-bold">{step.num}</span>
                                <h3 className="text-white text-sm font-semibold mt-1">{step.title}</h3>
                                <p className="text-white/50 text-xs mt-1 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 max-w-2xl mx-auto bg-[#111111] border border-white/10 rounded-xl p-6">
                    <h2 className="text-white text-font-space text-2xl text-center">Перед оформлением</h2>
                    <ul className="mt-4 space-y-2 text-white/60 text-sm">
                        <li>• Цена указана за базовую комплектацию. Дополнительные функции, интеграции и работы оплачиваются отдельно.</li>
                        <li>• Срок запуска зависит от объёма адаптации. Точный срок согласуем после обсуждения задачи.</li>
                        <li>• Дополнительные работы согласуются заранее. Мы не начинаем дополнительные работы без вашего подтверждения.</li>
                        <li>• Условия подписки зависят от конкретного продукта. Состав инфраструктуры, поддержки и дополнительных услуг указан в описании выбранного решения.</li>
                    </ul>
                </div>

                <div className="mt-12 max-w-3xl mx-auto text-center">
                    <h2 className="text-white text-font-space text-2xl md:text-3xl">Остались вопросы?</h2>
                    <p className="text-white/60 text-font-inter text-sm mt-2">Не уверены, какой вариант выбрать?</p>
                    <p className="text-white/50 text-font-inter text-sm">Опишите задачу — поможем выбрать подходящий формат и расскажем, что потребуется для запуска.</p>
                    <Link href="/contacts">
                        <button className="button-main-styles inline-flex items-center gap-2 mt-4">Обсудить задачу</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}