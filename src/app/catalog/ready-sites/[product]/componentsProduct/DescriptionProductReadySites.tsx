

export function DescriptionProductReadySites() {
    return (
        <div className="container">
            <div className="pt-12">
                <div className="max-w-4xl mx-auto">
                    <p className="text-white/80 text-font-inter text-center text-base md:text-lg leading-relaxed">
                        {/* ДИНАМИЧЕСКИЙ ТЕКСТ: описание назначения сайта */}
                        Сайт предназначен для компаний, которым нужно представить продукцию, показать направления работы и получать заявки.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Блок 1: Подойдёт / не подойдёт */}
                    <div className="bg-[#111111] border border-white/10 rounded-xl p-5 transition-all hover:border-white/20">
                        <div className="space-y-3">
                            <div>
                                <h3 className="text-white/50 text-xs uppercase tracking-wider font-medium mb-2">Подойдёт</h3>
                                <ul className="space-y-1.5 text-white/80 text-sm">
                                    {/* ДИНАМИЧЕСКИЙ СПИСОК: подходит */}
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 text-sm">✓</span>
                                        <span>(свои данные)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 text-sm">✓</span>
                                        <span>(свои данные)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 text-sm">✓</span>
                                        <span>(свои данные)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="pt-3 border-t border-white/5">
                                <h3 className="text-white/50 text-xs uppercase tracking-wider font-medium mb-2">Не подойдёт</h3>
                                <ul className="space-y-1.5 text-white/80 text-sm">
                                    {/* ДИНАМИЧЕСКИЙ СПИСОК: не подходит */}
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 text-sm">✗</span>
                                        <span>(свои данные)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 text-sm">✗</span>
                                        <span>(свои данные)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 text-sm">✗</span>
                                        <span>(свои данные)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Блок 2: Структура */}
                    <div className="bg-[#111111] border border-white/10 rounded-xl p-5 transition-all hover:border-white/20">
                        <h3 className="text-white/50 text-xs uppercase tracking-wider font-medium mb-3">Как работает сайт</h3>
                        <div className="text-white/80 text-sm font-mono leading-relaxed">
                            {/* ДИНАМИЧЕСКАЯ СТРУКТУРА: дерево страниц */}
                            <div className="pl-4 space-y-0.5">
                                <div>(как работает сайт)</div>
                            </div>
                        </div>
                    </div>

                    {/* Блок 3: Характеристики */}
                    <div className="bg-[#111111] border border-white/10 rounded-xl p-5 transition-all hover:border-white/20">
                        <h3 className="text-white/50 text-xs uppercase tracking-wider font-medium mb-3">Характеристики</h3>
                        <table className="w-full text-sm">
                            <tbody>
                                {[
                                    { label: "характеристика", value: "(свои данные)" },
                                    { label: "характеристика", value: "(свои данные)" },
                                    { label: "характеристика", value: "(свои данные)" },
                                    { label: "характеристика", value: "(свои данные)" },
                                    { label: "характеристика", value: "(свои данные)" },
                                    { label: "характеристика", value: "(свои данные)" },
                                    { label: "характеристика", value: "(свои данные)" },
                                ].map((item, idx) => (
                                    <tr key={idx} className="border-b border-white/5 last:border-0">
                                        <td className="text-white/40 py-1.5 pr-4 whitespace-nowrap">{item.label}</td>
                                        <td className="text-white/80 py-1.5">
                                            {/* ДИНАМИЧЕСКОЕ ЗНАЧЕНИЕ: характеристика */}
                                            {item.value}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}