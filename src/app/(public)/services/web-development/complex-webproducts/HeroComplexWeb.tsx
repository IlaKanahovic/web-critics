import Link from "next/link";

export function HeroComplexWeb() {
    return (
        <div className="container">
            <div className="pt-10 md:pt-42 max-w-5xl">
                <span className="text-white/40 text-xs uppercase tracking-widest">Комплексные веб-решения</span>

                <h1 className="text-font-cormorant text-[#f0f0f0] text-5xl md:text-7xl lg:text-[96px] leading-24 mt-6">
                    Сложные веб-продукты под реальные задачи бизнеса
                </h1>

                <div className="mt-8 space-y-4 max-w-2xl">
                    <p className="text-white/70 text-font-inter text-base md:text-lg leading-relaxed">
                        Не каждый цифровой продукт можно собрать из готовых страниц и стандартных функций. Иногда бизнесу нужен собственный сервис, клиентский портал, платформа, система с несколькими типами пользователей или продукт, для которого вообще нет готового решения.
                    </p>
                    <p className="text-white/50 text-font-inter text-sm md:text-base leading-relaxed">
                        Мы проектируем и разрабатываем такие веб-продукты с нуля: разбираемся в задаче, продумываем логику, интерфейсы и взаимодействие всех частей системы, а затем собираем всё в единый работающий продукт.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-10">
                    <Link href="/contacts">
                        <button className="button-main-styles">
                            Обсудить комплексный продукт
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}