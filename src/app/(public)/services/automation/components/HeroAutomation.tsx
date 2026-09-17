import Link from "next/link"

export function HeroAutomation() {
    return (
        <div className="container">
            <div className="pt-10 md:pt-42 max-w-6xl">
                <span className="text-white/40 text-xs uppercase tracking-widest">AUTOMATION</span>

                <h1 className="text-font-cormorant text-[#f0f0f0] text-5xl md:text-7xl lg:text-[96px] mt-6">
                    Автоматизируем процессы, которые не должны выполняться вручную
                </h1>

                <div className="mt-8 space-y-4 max-w-2xl">
                    <p className="text-white/70 text-font-inter text-base md:text-lg leading-relaxed">
                        Если сотрудники постоянно переносят данные из одной системы в другую, обрабатывают одинаковые заявки, отправляют одни и те же сообщения или выполняют повторяющиеся действия - скорее всего, этот процесс можно автоматизировать.
                    </p>
                    <p className="text-white/50 text-font-inter text-sm md:text-base leading-relaxed">
                        Разбираемся, как устроена работа сейчас, находим лишние ручные операции и создаём решение, которое связывает сервисы, данные и действия в один понятный процесс.
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
                    CRM · Интеграции · Боты · Уведомления · Автоматизация процессов
                </p>
            </div>
        </div>
    )
}