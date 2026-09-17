import { principlesReliability } from "@/constants/constants-services/howWeWork";


export function HowWeWorkReliability() {
    return (
        <section className="relative py-20 md:py-32 lg:py-40">
            <div className="container px-4 md:px-10 lg:px-35">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">КАК МЫ РАБОТАЕМ</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    <div className="lg:col-span-5">
                        <div className="lg:sticky lg:top-32">

                            <h2 className="text-white text-3xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
                                Надёжность - это не один раз проверить сайт
                            </h2>

                            <p className="text-white/55 text-sm md:text-base leading-relaxed mb-6">
                                Нельзя сделать продукт надёжным одной проверкой перед запуском. Система меняется: появляются новые функции, пользователи, интеграции и данные.
                            </p>
                            <p className="text-white/55 text-sm md:text-base leading-relaxed mb-10">
                                Поэтому наша задача - не просто найти несколько ошибок, а помочь сделать работу продукта более предсказуемой и управляемой.
                            </p>

                            <div className="hidden lg:flex items-center gap-4 text-white/30 text-xs uppercase tracking-widest">
                                <span className="w-12 h-px bg-white/20" />
                                <span>5 принципов работы</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="border-t border-white/8">
                            {principlesReliability.map((item, i) => (
                                <div
                                    key={i}
                                    className="group relative border-b border-white/8 py-7 md:py-9 transition-colors duration-500 hover:bg-white/2"
                                >
                                    <div className="flex items-start gap-6 md:gap-10 px-1 md:px-3">
                                        <span className="shrink-0 text-white/25 text-xs tracking-[0.3em] pt-1.5 md:pt-2 transition-colors duration-500 group-hover:text-white/60">
                                            {item.num}
                                        </span>

                                        <div className="flex-1">
                                            <h3 className="text-white text-lg md:text-2xl mb-3 transition-transform duration-500 group-hover:translate-x-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-xl transition-colors duration-500 group-hover:text-white/70">
                                                {item.text}
                                            </p>
                                        </div>

                                        <span className="hidden md:block shrink-0 self-center text-white/10 transition-all duration-500 group-hover:text-white/40 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </div>

                                    <span className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}