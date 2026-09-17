import Link from "next/link"

export function HeroWebDevelopment() {
    return (
        <div className="container">
            <div className="pt-10 md:pt-42 max-w-4xl">
                <span className="text-white/40 text-xs uppercase tracking-widest">Web Development</span>

                <h1 className="text-font-cormorant text-[#f0f0f0] text-5xl md:text-7xl lg:text-[96px] mt-6">
                    Разрабатываем веб-решения под задачи бизнеса
                </h1>

                <div className="mt-8 space-y-4 max-w-2xl">
                    <p className="text-white/70 text-font-inter text-base md:text-lg leading-relaxed">
                        Сайты, веб-приложения, интернет-магазины и сложные цифровые продукты - разрабатываем не просто красивый интерфейс, а инструмент, который должен решать конкретную задачу бизнеса.
                    </p>
                    <p className="text-white/50 text-font-inter text-sm md:text-base leading-relaxed">
                        Изучаем, что вам нужно получить в результате, определяем подходящий формат и собираем решение от дизайна и аналитики до сложной логики, интеграций и запуска.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-8">
                    <Link href="/contacts">
                        <button className="button-main-styles">
                            Обсудить задачу
                        </button>
                    </Link>
                </div>

                <p className="text-white/40 text-font-inter text-sm mt-8 max-w-xl">
                    От готовой структуры сайта до полноценного веб-продукта с собственной логикой и инфраструктурой.
                </p>
            </div>
        </div>
    )
}