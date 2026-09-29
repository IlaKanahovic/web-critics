const catalogItems = ["категории", "поиск", "фильтры"]
const productsItems = ["характеристики", "варианты", "цены / остатки"]
const adminItems = ["товары", "заказы", "клиенты", "контент"]

function Block({ title, items, wide = false }: { title: string; items?: string[]; wide?: boolean }) {
    return (
        <div
            className={`relative rounded-xl border border-white/15 bg-white/2 px-5 py-4 ${wide ? "min-w-60" : "min-w-40"}`}
        >
            <span className="block text-white text-xs font-mono tracking-[0.3em] text-center">
                {title}
            </span>
            {items && (
                <div className="mt-3 pt-3 border-t border-white/8 space-y-1">
                    {items.map((item, i) => (
                        <span key={i} className="block text-white/45 text-[11px] font-mono text-center">
                            {item}
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
}

function DownArrow() {
    return <div className="w-px h-6 bg-white/15 mx-auto" />
}

export function ConsistsOfOnlineStore() {
    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Фундамент</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
                    <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-tight">
                        Из чего состоит интернет-магазин
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col items-center">
                        <div className="px-6 py-4 rounded-xl border border-white/25 bg-white/3">
                            <span className="text-white text-sm font-mono tracking-[0.4em]">
                                ИНТЕРНЕТ-МАГАЗИН
                            </span>
                        </div>

                        <DownArrow />

                        <div className="w-full flex items-start justify-center gap-8 md:gap-16">
                            <div className="flex flex-col items-center flex-1 max-w-55">
                                <Block title="КАТАЛОГ" items={catalogItems} wide />
                                <DownArrow />
                            </div>

                            <div className="flex flex-col items-center flex-1 max-w-55">
                                <Block title="ТОВАРЫ" items={productsItems} wide />
                                <DownArrow />
                            </div>
                        </div>

                        <div className="w-full max-w-140 h-px bg-white/15 relative">
                            <div className="absolute left-0 top-0 w-px h-4 bg-white/15" />
                            <div className="absolute right-0 top-0 w-px h-4 bg-white/15" />
                            <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-px h-6 bg-white/15" />
                        </div>

                        <div className="mt-6">
                            <Block title="КОРЗИНА" />
                        </div>

                        <DownArrow />

                        <Block title="ОФОРМЛЕНИЕ ЗАКАЗА" wide />

                        <DownArrow />

                        <div className="w-full max-w-140 flex items-start justify-center gap-8 md:gap-16">
                            <div className="flex flex-col items-center flex-1 max-w-55">
                                <Block title="ОПЛАТА" wide />
                                <DownArrow />
                            </div>

                            <div className="flex flex-col items-center flex-1 max-w-55">
                                <Block title="ДОСТАВКА" wide />
                                <DownArrow />
                            </div>
                        </div>

                        <div className="w-full max-w-140 h-px bg-white/15 relative">
                            <div className="absolute left-0 top-0 w-px h-4 bg-white/15" />
                            <div className="absolute right-0 top-0 w-px h-4 bg-white/15" />
                            <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-px h-6 bg-white/15" />
                        </div>

                        <div className="mt-6">
                            <Block title="ЗАКАЗ" />
                        </div>

                        <DownArrow />

                        <Block title="АДМИНИСТРИРОВАНИЕ" items={adminItems} wide />
                    </div>
                </div>

                <div className="mt-12 md:mt-16 max-w-2xl mx-auto text-center">
                    <p className="text-white/60 text-font-inter text-sm md:text-base leading-relaxed">
                        Это базовый фундамент магазина. В зависимости от бизнеса к нему добавляются личные кабинеты, промокоды, сложные варианты товаров, B2B-функции, интеграции, автоматизация и другие сценарии.
                    </p>
                </div>
            </div>
        </div>
    )
}