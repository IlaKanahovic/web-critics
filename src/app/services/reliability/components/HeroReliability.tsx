import Link from "next/link"

export function HeroReliability() {
    return (
        <div className="container">
            <div className="pt-10 md:pt-42 max-w-6xl">
                <span className="text-white/40 text-xs uppercase tracking-widest">RELIABILITY</span>

                <h1 className="text-font-cormorant text-[#f0f0f0] text-5xl md:text-7xl lg:text-[96px] mt-6">
                    Делаем цифровые продукты стабильными, безопасными и готовыми к росту
                </h1>

                <div className="mt-8 space-y-4 max-w-2xl">
                    <p className="text-white/70 text-font-inter text-base md:text-lg leading-relaxed">
                        Сайт или сервис должен не просто работать сегодня - он должен оставаться надёжным при росте нагрузки, изменении функциональности и появлении новых пользователей.
                    </p>
                    <p className="text-white/50 text-font-inter text-sm md:text-base leading-relaxed">
                        Проверяем, где продукт может сломаться, найти уязвимость, потерять данные или начать работать нестабильно, а затем устраняем проблемы и создаём основу для дальнейшего развития.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-8">
                    <Link href="/contacts">
                        <button className="button-main-styles">
                            Проверить продукт
                        </button>
                    </Link>
                </div>

                <p className="text-white/40 text-font-inter text-sm mt-8 max-w-xl">
                    Безопасность · Тестирование · Архитектура · Производительность · Надёжность
                </p>
            </div>
        </div>
    )
}