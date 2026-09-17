'use client'

import { IoIosArrowForward } from "react-icons/io"
import { FaCheck, FaPlus } from "react-icons/fa"
import { useParams } from "next/navigation"
import Link from "next/link"
import { StarRating } from "@/lib/utils/StarRating"

export function HeroProductReadyModels() {
    const params = useParams()

    return (
        <div className="container">
            <div className="pt-22">
                <div className="mb-4 md:mb-8 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Готовый инструмент</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <h1 className="text-font-cormorant text-[#f0f0f0] text-center text-[80px]">"Название инструмента"</h1>

                <div className="bg-[#111111] border border-white/10 rounded-2xl overflow-hidden shadow-inner shadow-white/5 transition-all duration-300 hover:shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
                        <div>
                            <span className="inline-block px-4 py-1 rounded-full border border-white/20 text-white/50 text-[10px] uppercase tracking-wider font-medium mb-4">
                                инструмент
                            </span>
                            <h1 className="text-white text-font-space text-3xl md:text-4xl font-semibold">
                                Инструмент для [категория/ниша]
                            </h1>
                            <p className="text-white/70 text-font-inter text-sm md:text-base mt-3 leading-relaxed">
                                (ОПИСАНИЕ ПРОДУКТА)
                            </p>
                            <button className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 mt-4 group">
                                <span>Посмотреть демо</span>
                                <IoIosArrowForward className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                            </button>
                            <div className="w-full h-100 flex items-center mt-6 justify-center border border-white/10 rounded-2xl">
                                <span className="text-white/30 text-sm font-medium">Превью инструмента</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 mt-6 text-white/40 text-xs uppercase tracking-wider">
                                <div className="flex items-center gap-3 text-white/50">
                                    <span>Средняя оценка</span>
                                    <span className="text-white/70 font-medium">'ОЦЕНКА'</span>
                                    <StarRating ratingValue={'5/5'} />
                                </div>
                                <span className="w-px h-4 bg-white/10" />
                                <span>(ПЛЮС)</span>
                                <span className="w-px h-4 bg-white/10" />
                                <span>(ПЛЮС)</span>
                                <span className="w-px h-4 bg-white/10" />
                                <span>(ПЛЮС)</span>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col gap-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 transition hover:border-white/30">
                                        <span className="text-white/40 text-xs uppercase tracking-wider">Разово</span>
                                        <div className="mt-1">
                                            <span className="text-white text-3xl font-bold">цена</span>
                                            <span className="text-white/40 text-sm ml-1">/ запуск</span>
                                        </div>
                                        <p className="text-white/40 text-[10px] mt-0.5">запуск от (количество) дней</p>
                                        <Link href={`/catalog/ready-models/${params.product}/payproduct`}>
                                            <button className="button-main-styles w-full mt-3 justify-center">
                                                Купить
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 transition hover:border-white/30">
                                        <span className="text-white/40 text-xs uppercase tracking-wider">Подписка</span>
                                        <div className="mt-1">
                                            <span className="text-white text-3xl font-bold">цена</span>
                                            <span className="text-white/40 text-sm ml-1">/ месяц</span>
                                        </div>
                                        <p className="text-white/40 text-[10px] mt-0.5">ежемесячно, без скрытых платежей</p>
                                        <Link href={`/catalog/ready-models/${params.product}/payproduct`}>
                                            <button className="button-main-styles w-full mt-3 justify-center">
                                                Оформить
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <button className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 group inline-flex items-center gap-1 self-center">
                                    <span>Посмотреть демо</span>
                                    <IoIosArrowForward className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                                </button>
                            </div>
                            <div className="mt-6">
                                <h4 className="text-white/40 text-xs uppercase tracking-wider font-medium">В комплект входит</h4>
                                <ul className="mt-3 space-y-1.5">
                                    {[
                                        "ЧТО ВХОДИТ: ПЕРЕЧЕСЛЕНИЕ"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-white/70 text-sm">
                                            <FaCheck className="text-green-400 size-3.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-6 pt-6 border-t border-white/5">
                                <h4 className="text-white/40 text-xs uppercase tracking-wider font-medium">Можно изменить</h4>
                                <ul className="mt-3 space-y-1.5">
                                    {[
                                        "ВОЗМОЖНЫЕ НАСТРОЙКИ"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-white/50 text-sm">
                                            <FaPlus className="text-white/20 size-3.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-6 pt-6 border-t border-white/5">
                                <h4 className="text-white/40 text-xs uppercase tracking-wider font-medium">Дополнительно</h4>
                                <ul className="mt-3 space-y-1.5">
                                    {[
                                        "ДОП НАСТРОЙКИ"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-white/40 text-sm">
                                            <span className="text-white/20 text-lg leading-none">+</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}