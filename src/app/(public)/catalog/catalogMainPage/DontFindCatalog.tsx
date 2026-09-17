'use client'

import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"
import { IoArrowDown } from "react-icons/io5"

export function DontFindCatalog() {
    return (
        <div className="container">
            <div className="pt-42">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Индивидуальные решения</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-white text-font-space text-4xl md:text-5xl">Не нашли подходящее решение?</h2>
                    <p className="text-white/70 text-font-inter text-lg mt-4">
                        Это не значит, что вашу задачу нельзя решить.
                    </p>
                    <p className="text-white/50 text-font-inter text-base mt-4">
                        Если среди готовых продуктов нет подходящего варианта, разработаем решение с нуля или адаптируем существующее под ваши процессы, требования и задачи.
                    </p>
                </div>
                <div className="mt-12 flex flex-col items-center gap-3 max-w-xs mx-auto">
                    <div className="w-full bg-[#111111] border border-white/10 rounded-xl py-3 px-4 text-center">
                        <span className="text-white/70 text-sm font-medium">Готовые решения</span>
                    </div>
                    <IoArrowDown className="text-white/20 size-5" />
                    <div className="w-full bg-[#111111] border border-white/10 rounded-xl py-3 px-4 text-center">
                        <span className="text-white/70 text-sm font-medium">Нет подходящего</span>
                    </div>
                    <IoArrowDown className="text-white/20 size-5" />
                    <div className="w-full bg-white/5 border border-white/30 rounded-xl py-4 px-4 text-center shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                        <span className="text-white font-semibold text-base">Индивидуальная разработка</span>
                    </div>
                </div>
                <div className="mt-10 flex justify-center">
                    <Link href="/contacts">
                        <button className="button-main-styles flex items-center gap-2">
                            Обсудить индивидуальное решение
                            <IoIosArrowForward className="size-5 mt-0.5" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

