import Link from "next/link"

export function HeroGrowthAnalytics() {
    return (
        <div className="container">
            <div className="pt-10 md:pt-42 max-w-6xl">
                <span className="text-white/40 text-xs uppercase tracking-widest">GROWTH & ANALYTICS</span>

                <h1 className="text-font-cormorant text-[#f0f0f0] text-5xl md:text-7xl lg:text-[96px] mt-6">
                    Находим, что мешает бизнесу расти
                </h1>

                <div className="mt-8 space-y-4 max-w-2xl">
                    <p className="text-white/70 text-font-inter text-base md:text-lg leading-relaxed">
                        Трафик есть, сайт работает, реклама запускается - но клиентов всё равно меньше, чем хотелось бы.
                    </p>
                    <p className="text-white/50 text-font-inter text-sm md:text-base leading-relaxed">
                        Анализируем сайт, поведение пользователей, поисковый трафик и данные бизнеса, чтобы найти точки роста и понять, какие изменения действительно могут повлиять на результат.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-8">
                    <Link href="/contacts">
                        <button className="button-main-styles">
                            Найти точки роста
                        </button>
                    </Link>
                </div>

                <p className="text-white/40 text-font-inter text-sm mt-8 max-w-xl">
                    Аналитика · SEO · Конверсия · Поведение пользователей · Поисковый трафик · Оптимизация
                </p>
            </div>
        </div>
    )
}