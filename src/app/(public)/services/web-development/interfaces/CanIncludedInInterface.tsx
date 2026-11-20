import { itemsWebDevelopmentInterface } from "@/constants/constants-services/developed";

export function CanIncludedInInterface() {
    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 light:via-line to-transparent" />
                    <span className="text-white/40 light:text-ink-muted text-xs uppercase tracking-widest">Что входит</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 light:via-line to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    <div className="lg:col-span-5">
                        <h2 className="text-white light:text-ink text-font-space text-4xl md:text-5xl lg:text-6xl leading-tight">
                            Продумываем не только внешний вид
                        </h2>
                    </div>

                    <div className="lg:col-span-7 space-y-5">
                        <p className="text-white/80 light:text-ink text-font-inter text-lg md:text-xl leading-relaxed">
                            Хороший интерфейс состоит из множества деталей, которые пользователь может даже не замечать. Именно они определяют, насколько легко пользоваться продуктом каждый день.
                        </p>
                    </div>
                </div>

                <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 light:bg-line border border-white/5 light:border-line rounded-2xl overflow-hidden">
                    {itemsWebDevelopmentInterface.map((item, i) => (
                        <div
                            key={i}
                            className="group relative bg-[#0a0a0a] light:bg-white p-6 transition-colors duration-500 hover:bg-[#111111] light:hover:bg-accent/5 flex flex-col min-h-60"
                        >
                            <span className="text-white/15 light:text-ink-muted font-mono text-xs tracking-[0.3em] group-hover:text-white/40 light:group-hover:text-accent transition-colors duration-500">
                                {String(i + 1).padStart(2, "0")}
                            </span>

                            <h3 className="text-white light:text-ink text-lg font-semibold leading-snug mt-4">
                                {item.title}
                            </h3>

                            <p className="text-white/50 light:text-ink-secondary text-sm leading-relaxed mt-3 flex-1 group-hover:text-white/75 light:group-hover:text-ink transition-colors duration-500">
                                {item.desc}
                            </p>

                            <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-linear-to-r from-white/60 light:from-accent/50 to-transparent transition-all duration-700" />
                        </div>
                    ))}
                </div>

                <div className="mt-16 md:mt-20 max-w-2xl mx-auto text-center">
                    <p className="text-white/60 light:text-ink-secondary text-font-inter text-sm md:text-base leading-relaxed">
                        Внешний вид - только одна часть работы. Остальное определяет, насколько интерфейс будет понятным и удобным в реальном использовании.
                    </p>
                </div>
            </div>
        </div>
    )
}