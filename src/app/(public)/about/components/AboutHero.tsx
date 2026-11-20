
export function AboutHero() {
    return (
        <div className="container">
            <div className="pt-10 md:pt-42 max-w-5xl">
                <span className="text-white/40 light:text-ink-muted text-xs uppercase tracking-widest">
                    О студии
                </span>

                <h1 className="text-font-cormorant text-[#f0f0f0] light:text-ink text-5xl md:text-7xl lg:text-[96px] leading-[1.05] mt-6">
                    WebCRitics — это не студия разработки сайтов
                </h1>

                <div className="mt-10 max-w-2xl pl-6 border-l-2 border-violet-400/40 light:border-accent">
                    <p className="text-white light:text-ink text-font-inter text-lg md:text-xl leading-[1.4] font-medium">
                        Мы создаём цифровые решения вокруг конкретных задач бизнеса.
                    </p>
                </div>

                <div className="mt-12 max-w-3xl space-y-5">
                    <p className="text-white/70 light:text-ink-secondary text-font-inter text-base md:text-lg leading-relaxed">
                        WebCRitics появилась из довольно простой идеи: у бизнеса редко возникает проблема в формулировке «нам нужен React-приложение» или «нам нужна автоматизация на Python». Обычно проблема выглядит иначе - теряются заявки, сотрудники делают одну и ту же работу вручную, существующий сайт не даёт нужного результата, данные находятся в нескольких системах или готовый сервис просто не подходит под конкретный процесс.
                    </p>

                    <p className="text-white/55 light:text-ink-secondary text-font-inter text-base md:text-lg leading-relaxed">
                        Поэтому мы не хотим начинать работу с продажи заранее определённого набора услуг. Сначала разбираемся, что именно происходит сейчас, что должно измениться и каким способом это разумнее всего сделать.
                    </p>
                </div>

                <div className="mt-16 max-w-3xl">
                    <div className="relative rounded-2xl border border-white/10 light:border-line bg-white/2 light:bg-white light:shadow-card p-6 md:p-8">
                        <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-violet-400/40 light:via-accent/40 to-transparent" />

                        <p className="text-white light:text-ink text-font-inter text-lg md:text-xl leading-normal">
                            WebCRitics — это попытка построить студию, в которой цифровой инструмент выбирается{" "}
                            <span className="text-violet-300 light:text-accent">под проблему</span>, а не проблема подгоняется под услугу.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}