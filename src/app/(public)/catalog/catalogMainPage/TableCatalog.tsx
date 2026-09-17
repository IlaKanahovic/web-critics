'use client'

import { rows } from "@/constants/catalog"
import { FaCheck } from "react-icons/fa"

export function TableCatalog() {
    return (
        <div className="container">
            <div className="pt-42">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Сравнение</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <h1 className="text-font-space text-[#f0f0f0] text-center text-[60px] mt-8">Готовое решение или разработка под вас?</h1>
                <h2 className="text-font-inter text-[#bcbebe] text-center text-[18px]">
                    Готовый продукт подходит не каждой задаче. Иногда быстрее и выгоднее взять готовую основу.
                    <br />
                    Иногда разработка с нуля действительно оправдана.
                </h2>
                <div className="mt-10 overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="text-left text-white/60 text-xs uppercase tracking-wider font-medium py-4 pr-4 w-2/5">
                                    Критерий
                                </th>
                                <th className="text-center text-white/60 text-xs uppercase tracking-wider font-medium py-4 px-4 w-1/5">
                                    Готовое решение
                                </th>
                                <th className="text-center text-white/60 text-xs uppercase tracking-wider font-medium py-4 px-4 w-1/5">
                                    Индивидуальная разработка
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, idx) => (
                                <tr
                                    key={idx}
                                    className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200"
                                >
                                    <td className="text-white/90 text-font-inter text-sm py-4 pr-4">
                                        {row.label}
                                    </td>
                                    <td className="text-center py-4 px-4">
                                        {row.ready ? (
                                            <FaCheck className="inline text-green-400 size-5" />
                                        ) : (
                                            <span className="text-white/30">—</span>
                                        )}
                                    </td>
                                    <td className="text-center py-4 px-4">
                                        {row.custom ? (
                                            <FaCheck className="inline text-green-400 size-5" />
                                        ) : (
                                            <span className="text-white/30">—</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-10 max-w-2xl mx-auto text-center border border-white/30 rounded-xl p-8">
                    <p className="text-white text-lg font-semibold mb-2">Не уверены, какой вариант подойдёт?</p>
                    <p className="text-white/60 text-font-inter text-sm leading-relaxed">
                        Расскажите о задаче - мы разберёмся, какое решение будет рациональнее: готовое, адаптированное или разработанное с нуля.
                    </p>
                    <button className="button-main-styles mt-8">Обсудить задачу</button>
                </div>
            </div>
        </div>
    )
}