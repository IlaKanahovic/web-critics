import Link from "next/link"

export function HeroAi() {
    return (
        <div className="container">
            <div className="pt-10 md:pt-42 max-w-6xl">
                <span className="text-white/40 text-xs uppercase tracking-widest">AI</span>

                <h1 className="text-font-cormorant text-[#f0f0f0] text-5xl md:text-7xl lg:text-[96px] mt-6">
                    Используем AI там, где он действительно помогает бизнесу
                </h1>

                <div className="mt-8 space-y-4 max-w-2xl">
                    <p className="text-white/70 text-font-inter text-base md:text-lg leading-relaxed">
                        Искусственный интеллект может отвечать клиентам, обрабатывать документы, анализировать данные, помогать сотрудникам, работать с большим объёмом информации и автоматизировать задачи, которые раньше выполнялись вручную.
                    </p>
                    <p className="text-white/50 text-font-inter text-sm md:text-base leading-relaxed">
                        Мы не внедряем AI ради самого AI. Сначала разбираемся, где он действительно способен сэкономить время, улучшить процесс или дать бизнесу новый инструмент.
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
                    AI-ассистенты · AI-боты · Интеграция моделей · Обработка данных · AI-автоматизация
                </p>
            </div>
        </div>
    )
}