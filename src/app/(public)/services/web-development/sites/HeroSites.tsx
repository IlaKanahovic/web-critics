import Link from "next/link"

export function HeroSites() {
    return (
        <div className="container">
            <div className="pt-10 md:pt-42 max-w-5xl">
                <span className="text-white/40 text-xs uppercase tracking-widest">Сайты</span>

                <h1 className="text-font-cormorant text-[#f0f0f0] text-5xl md:text-7xl lg:text-[96px] leading-tight mt-6">
                    Сайты, которые решают задачи бизнеса
                </h1>

                <div className="mt-8 space-y-4 max-w-2xl">
                    <p className="text-white/70 text-font-inter text-base md:text-lg leading-relaxed">
                        Разрабатываем сайты не ради самого сайта. Сначала разбираемся, какую задачу он должен решить: привлечь больше трафика, увеличить количество обращений и продаж, представить компанию, автоматизировать часть работы или дать клиенту удобный способ взаимодействия с бизнесом.
                    </p>
                    <p className="text-white/50 text-font-inter text-sm md:text-base leading-relaxed">
                        Под задачу определяем структуру, функциональность и формат сайта - от простой страницы до сложного веб-продукта.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-10">
                    <Link href="/contacts">
                        <button className="button-main-styles">
                            Заказать сайт
                        </button>
                    </Link>
                    <Link href="/catalog/ready-sites">
                        <button className="button-main-styles">
                            Готовые сайты
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}