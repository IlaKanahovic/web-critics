import Link from "next/link"

export function HeroOnlineStores() {
    return (
        <div className="container">
            <div className="pt-10 md:pt-42 max-w-5xl">
                <span className="text-white/40 text-xs uppercase tracking-widest">Интернет-магазины</span>

                <h1 className="text-font-cormorant text-[#f0f0f0] text-5xl md:text-7xl lg:text-[96px] leading-24 mt-6">
                    Интернет-магазины для продажи товаров и управления заказами
                </h1>

                <div className="mt-8 space-y-4 max-w-2xl">
                    <p className="text-white/70 text-font-inter text-base md:text-lg leading-relaxed">
                        Создаём интернет-магазины с нуля и дорабатываем существующие. Проектируем каталог, карточки товаров, корзину, оформление заказа, оплату, доставку и административную часть, а при необходимости связываем магазин с CRM, учётом и другими сервисами.
                    </p>
                    <p className="text-white/50 text-font-inter text-sm md:text-base leading-relaxed">
                        Можно начать с готового решения для запуска нового магазина или разобраться с уже работающим, если он перестал справляться с задачами бизнеса.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-10">
                    <Link href="/contacts">
                        <button className="button-main-styles">
                            Создать магазин
                        </button>
                    </Link>
                    <Link href="/contacts">
                        <button className="button-main-styles">
                            Доработать существующий
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}