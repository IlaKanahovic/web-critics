import { areasWebdevelopmentInterface } from "@/constants/constants-services/whatCanWeCheck";

export function InterfaceNeed() {
    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Типы интерфейсов</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    <div className="lg:col-span-5">
                        <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-tight">
                            Интерфейс для любой цифровой задачи
                        </h2>
                    </div>

                    <div className="lg:col-span-7 space-y-5">
                        <p className="text-white/80 text-font-inter text-lg md:text-xl leading-relaxed">
                            Интерфейс всегда зависит от того, кто им пользуется и что ему нужно сделать. Поэтому один и тот же подход не может одинаково хорошо работать для CRM, личного кабинета клиента и аналитической панели.
                        </p>
                    </div>
                </div>

                <div className="mt-16 md:mt-20 border-t border-white/10">
                    {areasWebdevelopmentInterface.map((area, i) => (
                        <div
                            key={i}
                            className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-6 md:py-8 border-b border-white/10 hover:border-white/25 transition-colors duration-300"
                        >
                            <span className="md:col-span-1 text-white/25 font-mono text-sm group-hover:text-white/50 transition-colors duration-300">
                                {String(i + 1).padStart(2, "0")}
                            </span>

                            <h3 className="md:col-span-4 text-white text-lg md:text-xl font-semibold leading-snug">
                                {area.title}
                            </h3>

                            <p className="md:col-span-7 text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                                {area.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 md:mt-20 max-w-2xl mx-auto text-center">
                    <p className="text-white/60 text-font-inter text-sm md:text-base leading-relaxed">
                        Это не каталог ограниченных форматов. Если вашему продукту нужен другой тип интерфейса - разбираемся с задачей и проектируем необходимое решение.
                    </p>
                </div>
            </div>
        </div>
    )
}