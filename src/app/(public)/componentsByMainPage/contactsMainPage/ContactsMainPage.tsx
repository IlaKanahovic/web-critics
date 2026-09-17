'use client'

import { useState } from 'react'
import { useFormValidation } from '@/hooks/useFormValidation'

export function ContactsMainPage() {
    const [minBudget, setMinBudget] = useState(5000)
    const [maxBudget, setMaxBudget] = useState(100000)

    const handleMinChange = (value: number) => {
        if (value <= maxBudget) setMinBudget(value)
    }

    const handleMaxChange = (value: number) => {
        if (value >= minBudget) setMaxBudget(value)
    }

    const services = [
        'Готовые сайты',
        'Боты',
        'Индивидуальная разработка',
        'SEO-продвижение',
        'AI',
        'Оптимизация',
        'Аналитика',
        'Безопасность',
        'Веб-сервисы',
        'Автоматизация',
        'Тестирование',
        'Микросервисы'
    ]

    const [selectedServices, setSelectedServices] = useState<string[]>([])

    const toggleService = (service: string) => {
        setSelectedServices((prev) =>
            prev.includes(service)
                ? prev.filter((s) => s !== service)
                : [...prev, service]
        )
    }

    const { form, errors, handleChange, validateForm } = useFormValidation()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (validateForm()) {
            console.log('Форма валидна', { ...form, minBudget, maxBudget, selectedServices })
        }
    }

    return (
        <div className="pt-30 md:pt-60">
            <div className="container px-4 md:px-0">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Контакты</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="lg:px-35 md:px-10">
                    <div className="relative rounded-xl bg-[#111111] border border-white/10 shadow-inner shadow-white/5 before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-12 before:h-12 before:bg-white/20 before:rounded-full before:blur-2xl before:pointer-events-none after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-px after:bg-linear-to-r after:from-transparent after:via-white/30 after:to-transparent after:pointer-events-none transition-all duration-300 hover:shadow-2xl flex flex-col items-center p-6 md:p-8 lg:p-10">
                        <form className="w-full max-w-3xl" onSubmit={handleSubmit}>
                            <h1 className="text-white text-font-space text-3xl md:text-3xl lg:text-4xl text-center">
                                Есть проблема? Давайте разберёмся
                            </h1>
                            <p className="text-white/70 text-font-inter text-center text-sm md:text-base mt-2">
                                Не обязательно знать, какой именно инструмент вам нужен. Расскажите о задаче — мы разберёмся в ситуации и предложим подходящее решение.
                            </p>

                            <div className="mt-8">
                                <label className="text-white/80 text-font-inter text-sm font-medium block mb-2">
                                    Бюджет проекта
                                </label>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <span className="text-white/60 text-sm w-16">от</span>
                                        <input
                                            type="range"
                                            min="5000"
                                            max="1000000"
                                            step="1000"
                                            value={minBudget}
                                            onChange={(e) => handleMinChange(Number(e.target.value))}
                                            className="flex-1 h-1 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:scale-110"
                                        />
                                        <span className="text-white/60 text-sm w-24 text-right">
                                            {minBudget.toLocaleString()} ₽
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <span className="text-white/60 text-sm w-16">до</span>
                                        <input
                                            type="range"
                                            min="5000"
                                            max="1000000"
                                            step="1000"
                                            value={maxBudget}
                                            onChange={(e) => handleMaxChange(Number(e.target.value))}
                                            className="flex-1 h-1 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:scale-110"
                                        />
                                        <span className="text-white/60 text-sm w-24 text-right">
                                            {maxBudget.toLocaleString()} ₽
                                        </span>
                                    </div>
                                </div>

                                <div className="text-white/80 text-font-inter text-sm text-center mt-3">
                                    от {minBudget.toLocaleString()} ₽ до {maxBudget.toLocaleString()} ₽
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                                <div>
                                    <label className="text-white/80 text-font-inter text-sm font-medium block mb-1.5">ФИО</label>
                                    <input
                                        type="text"
                                        value={form.name}
                                        onChange={(e) => handleChange('name', e.target.value)}
                                        className={`w-full px-4 py-3 bg-black/40 border rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors ${errors.name ? 'border-red-500' : 'border-white/10'
                                            }`}
                                    />
                                    {errors.name && (
                                        <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="text-white/80 text-font-inter text-sm font-medium block mb-1.5">Телефон</label>
                                    <input
                                        type="tel"
                                        value={form.phone}
                                        onChange={(e) => handleChange('phone', e.target.value)}
                                        className={`w-full px-4 py-3 bg-black/40 border rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors ${errors.phone ? 'border-red-500' : 'border-white/10'
                                            }`}
                                        placeholder="+7 900 000-00-00"
                                    />
                                    {errors.phone && (
                                        <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                                    )}
                                </div>
                                <div className="md:col-span-2">
                                    <label className="text-white/80 text-font-inter text-sm font-medium block mb-1.5">E-mail</label>
                                    <input
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => handleChange('email', e.target.value)}
                                        className={`w-full px-4 py-3 bg-black/40 border rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors ${errors.email ? 'border-red-500' : 'border-white/10'
                                            }`}
                                        placeholder="E-mail"
                                    />
                                    {errors.email && (
                                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                                    )}
                                </div>
                                <div className="md:col-span-2">
                                    <label className="text-white/80 text-font-inter text-sm font-medium block mb-1.5">
                                        Сфера бизнеса, регион работы, адрес действующего сайта и витрины
                                    </label>
                                    <textarea
                                        rows={3}
                                        placeholder="Например: интернет-магазин, Москва, site.ru"
                                        className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors resize-y"
                                    />
                                </div>
                            </div>

                            <div className="mt-8">
                                <span className="text-white/80 text-font-inter text-sm font-medium block mb-3">
                                    Расскажите, где нужна помощь (необязательно)
                                </span>
                                <div className="flex flex-wrap gap-3">
                                    {services.map((service) => (
                                        <button
                                            key={service}
                                            type="button"
                                            onClick={() => toggleService(service)}
                                            className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${selectedServices.includes(service)
                                                ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                                                : 'bg-white/5 text-white/80 border-white/20 hover:bg-white/10 hover:border-white/40'
                                                }`}
                                        >
                                            {service}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 space-y-3">
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={form.consent}
                                        onChange={(e) => handleChange('consent', e.target.checked)}
                                        className="mt-0.5 w-4 h-4 bg-black/40 border border-white/20 rounded checked:bg-white checked:border-white focus:ring-0 focus:ring-offset-0 accent-white cursor-pointer"
                                    />
                                    <span className="text-white/70 text-font-inter text-xs leading-relaxed">
                                        Я даю согласие на обработку персональных данных на условиях{' '}
                                        <a href="/personal-data-processing-policy" className="text-white/90 hover:text-white underline underline-offset-2">
                                            Политики обработки персональных данных
                                        </a>
                                        .
                                    </span>
                                </label>
                                {errors.consent && (
                                    <p className="text-red-400 text-xs mt-1">{errors.consent}</p>
                                )}

                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        className="mt-0.5 w-4 h-4 bg-black/40 border border-white/20 rounded checked:bg-white checked:border-white focus:ring-0 focus:ring-offset-0 accent-white cursor-pointer"
                                    />
                                    <span className="text-white/70 text-font-inter text-xs leading-relaxed">
                                        Я даю
                                        <a href="/consent-receive-advertising" className="text-white/90 hover:text-white underline underline-offset-2"> согласие </a>
                                        получать рекламные и информационные материалы.
                                    </span>
                                </label>
                            </div>

                            <div className="mt-10 flex justify-center">
                                <button
                                    type="submit"
                                    className="relative px-10 py-3 bg-white text-black rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-95 cursor-pointer group"
                                >
                                    <span className="relative z-10">Разобрать задачу</span>
                                    <span className="absolute inset-0 bg-linear-to-r from-gray-200 to-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                                </button>
                            </div>
                            <p className="text-white/70 text-font-inter text-center text-[12px] mt-2">
                                *Если вы пока не знаете, какое решение вам нужно — это нормально. Начнём с проблемы.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}