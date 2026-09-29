import Link from "next/link";

export function HeroWebApplication() {
    return (
        <div className="container">
            <div className="pt-10 md:pt-42 max-w-5xl">
                <span className="text-white/40 text-xs uppercase tracking-widest">Веб-приложения</span>

                <h1 className="text-font-cormorant text-[#f0f0f0] text-5xl md:text-7xl lg:text-[96px] leading-tight mt-6">
                    Веб-приложения, которые решают задачи бизнеса
                </h1>

                <div className="mt-8 space-y-4 max-w-2xl">
                    <p className="text-white/70 text-font-inter text-base md:text-lg leading-relaxed">
                        Веб-приложение - это не просто набор страниц с красивым интерфейсом. Это рабочий инструмент, который должен помогать пользователям выполнять конкретные действия, а бизнесу - быстрее и эффективнее решать свои задачи.
                    </p>
                    <p className="text-white/50 text-font-inter text-sm md:text-base leading-relaxed">
                        Разрабатываем личные кабинеты, онлайн-сервисы, внутренние системы, клиентские порталы и нестандартные веб-продукты. Разбираемся в задаче, проектируем необходимую логику и создаём приложение под реальный процесс работы.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-10">
                    <Link href="/contacts">
                        <button className="button-main-styles">
                            Заказать веб-приложение
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}