import { principlesWebDevelopmentInterface } from "@/constants/constants-services/howWeWork";

export function UserSpecificIntareface() {
    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Интерфейс под задачу пользователя</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    <div className="lg:col-span-5">
                        <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-tight">
                            Хороший интерфейс помогает сделать работу проще
                        </h2>
                    </div>

                    <div className="lg:col-span-7 space-y-5">
                        <p className="text-white/80 text-font-inter text-lg md:text-xl leading-relaxed">
                            Пользователь приходит в интерфейс не для того, чтобы рассматривать его дизайн. Он приходит выполнить определённое действие.
                        </p>
                        <p className="text-white/60 text-font-inter text-base md:text-lg leading-relaxed">
                            Купить, создать заявку, найти документ, обработать заказ, посмотреть отчёт, настроить сервис, внести данные, проверить статус - у каждого интерфейса есть своя задача.
                        </p>
                        <p className="text-white text-font-inter text-base md:text-lg leading-relaxed font-medium">
                            Поэтому перед проектированием важно понять не только, что должно быть на экране, но и что пользователь должен сделать с помощью этого экрана.
                        </p>
                    </div>
                </div>

                <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-5">
                    {principlesWebDevelopmentInterface.map((p, i) => (
                        <div
                            key={i}
                            className="group relative bg-[#111111] border border-white/10 rounded-2xl p-8 md:p-10 transition-all duration-500 hover:border-white/30 hover:bg-[#151515] flex flex-col min-h-70 md:min-h-80"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white transition-colors duration-500" />
                                <span className="text-white/30 font-mono text-xs tracking-[0.3em] group-hover:text-white/60 transition-colors duration-500">
                                    {p.num}
                                </span>
                            </div>

                            <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold leading-[1.15] max-w-md">
                                {p.title}
                            </h3>

                            <p className="text-white/50 text-sm md:text-base leading-relaxed mt-5 flex-1 group-hover:text-white/75 transition-colors duration-500">
                                {p.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-24 md:mt-32 max-w-4xl mx-auto text-center">
                    <p className="text-white text-font-space text-3xl md:text-4xl lg:text-5xl leading-[1.2]">
                        Мы проектируем интерфейс не вокруг отдельных экранов, а вокруг действий человека внутри продукта.
                    </p>
                </div>
            </div>
        </div>
    )
}