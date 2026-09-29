import { stagesWebDevelopmentWebApplication } from "@/constants/constants-services/developmentStages";

export function ProcessWebApplication() {
    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Процесс</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    <div className="lg:col-span-5">
                        <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-tight">
                            Сначала разбираемся в процессе. Потом создаём систему.
                        </h2>
                    </div>

                    <div className="lg:col-span-7 space-y-5">
                        <p className="text-white/80 text-font-inter text-lg md:text-xl leading-relaxed">
                            В сложном цифровом продукте ошибка на этапе постановки задачи может стоить гораздо дороже, чем ошибка в дизайне. Если неправильно определить роли пользователей, порядок действий или логику процесса, можно получить технически рабочее приложение, которое всё равно неудобно использовать.
                        </p>
                        <p className="text-white/60 text-font-inter text-base md:text-lg leading-relaxed">
                            Поэтому до разработки мы стараемся разобраться не только в том, что вы хотите получить, но и в том, как сейчас работает ваш бизнес и что именно в нём нужно изменить.
                        </p>
                    </div>
                </div>

                <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {stagesWebDevelopmentWebApplication.map((stage, i) => (
                        <div key={i} className="group relative">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="relative w-12 h-12 rounded-full bg-[#050505] border border-white/15 flex items-center justify-center transition-all duration-300 group-hover:border-white/40 shrink-0">
                                    <span className="relative text-white/50 font-mono text-sm group-hover:text-white transition-colors duration-300">
                                        {stage.num}
                                    </span>
                                </div>

                                <div className="flex-1 h-px bg-linear-to-r from-white/15 to-transparent" />
                            </div>

                            <h3 className="text-white text-xl md:text-2xl font-semibold leading-snug">
                                {stage.title}
                            </h3>
                            <p className="text-white/50 text-sm leading-relaxed mt-3 group-hover:text-white/70 transition-colors duration-300">
                                {stage.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}