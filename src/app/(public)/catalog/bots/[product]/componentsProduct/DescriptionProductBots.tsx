

export function DescriptionProductBots({ product }: any) {
    return (
        <div className="container">
            <div className="pt-12">
                <div className="max-w-4xl mx-auto">
                    <p className="text-white/80 text-font-inter text-center text-base md:text-lg leading-relaxed">
                        {product.desciptionPurpose}
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#111111] border border-white/10 rounded-xl p-5 transition-all hover:border-white/20">
                        <div className="space-y-3">
                            <div>
                                <h3 className="text-white/50 text-xs uppercase tracking-wider font-medium mb-2">Подойдёт</h3>
                                <ul className="space-y-1.5 text-white/80 text-sm">
                                    {product.suitable.map((item: string, idx: string) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-green-400 text-sm">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="pt-3 border-t border-white/5">
                                <h3 className="text-white/50 text-xs uppercase tracking-wider font-medium mb-2">Не подойдёт</h3>
                                <ul className="space-y-1.5 text-white/80 text-sm">
                                    {product.notSuitable.map((item: string, idx: string) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-red-400 text-sm">✗</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#111111] border border-white/10 rounded-xl p-5 transition-all hover:border-white/20">
                        <h3 className="text-white/50 text-xs uppercase tracking-wider font-medium mb-3">Как работает бот</h3>
                        <div className="text-white/80 text-sm font-mono leading-relaxed">
                            <div className="pl-4 space-y-0.5">
                                <div>{product.howItWorks}</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#111111] border border-white/10 rounded-xl p-5 transition-all hover:border-white/20">
                        <h3 className="text-white/50 text-xs uppercase tracking-wider font-medium mb-3">Характеристики</h3>
                        <table className="w-full text-sm">
                            <tbody>
                                {product.specifications.map((item: string, idx: string) => {
                                    const [label, ...rest] = item.split(':')
                                    return (<tr key={idx} className="border-b border-white/5 last:border-0">
                                        <td className="text-white/40 py-1.5 pr-4 whitespace-nowrap">{label}</td>
                                        <td className="text-white/80 py-1.5">
                                            {rest.join(':')}
                                        </td>
                                    </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}