import Link from "next/link"

export function HeroInterfaces() {
    return (
        <div className="container">
            <div className="pt-10 md:pt-42 max-w-5xl">
                <span className="text-white/40 text-xs uppercase tracking-widest">Интерфейсы</span>

                <h1 className="text-font-cormorant text-[#f0f0f0] text-5xl md:text-7xl lg:text-[96px] leading-tight mt-6">
                    Интерфейсы, с которыми удобно работать
                </h1>

                <div className="mt-8 space-y-4 max-w-2xl">
                    <p className="text-white/70 text-font-inter text-base md:text-lg leading-relaxed">
                        Проектируем и разрабатываем интерфейсы для веб-сервисов, личных кабинетов, внутренних систем, SaaS-продуктов и других цифровых решений.
                    </p>
                    <p className="text-white/50 text-font-inter text-sm md:text-base leading-relaxed">
                        Продумываем структуру, пользовательские сценарии, визуальную систему и интерактивные элементы так, чтобы человек быстро понимал интерфейс и мог без лишних действий выполнить нужную задачу.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-10">
                    <Link href="/contacts">
                        <button className="button-main-styles">
                            Заказать интерфейс
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}