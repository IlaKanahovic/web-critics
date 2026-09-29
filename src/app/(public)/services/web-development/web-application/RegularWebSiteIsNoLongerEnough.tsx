import { areasWebDevelopmentWebApplication } from "@/constants/constants-services/whatCanWeCheck";

export function RegularWebSiteIsNoLongerEnough() {
    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Примеры</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    <div className="lg:col-span-5">
                        <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-tight">
                            Когда обычного сайта уже недостаточно
                        </h2>
                    </div>

                    <div className="lg:col-span-7 space-y-5">
                        <p className="text-white/70 text-font-inter text-base md:text-lg leading-relaxed">
                            Обычный сайт хорошо работает, когда пользователю нужно получить информацию: узнать об услуге, посмотреть каталог, познакомиться с компанией или оставить заявку.
                        </p>
                        <p className="text-white/50 text-font-inter text-sm md:text-base leading-relaxed">
                            Но как только пользователю необходимо регулярно что-то делать внутри системы, одного набора страниц становится мало. Нужно хранить данные, управлять ими, учитывать разные сценарии, разграничивать доступ, автоматически выполнять действия и связывать приложение с другими системами.
                        </p>
                        <p className="text-white text-font-inter text-base md:text-lg leading-relaxed font-medium">
                            В этот момент сайт превращается в инструмент, с которым человек работает, а не просто страницу, которую он просматривает.
                        </p>
                    </div>
                </div>

                <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {areasWebDevelopmentWebApplication.map((area, i) => (
                        <div
                            key={i}
                            className="group relative bg-[#111111] border border-white/10 rounded-2xl p-6 md:p-7 transition-all duration-500 hover:border-white/25 overflow-hidden flex flex-col min-h-65"
                        >
                            <span className="absolute -top-6 -right-2 text-[120px] font-bold leading-none text-white/3 group-hover:text-violet-400/8 transition-colors duration-500 select-none pointer-events-none font-mono">
                                {area.num}
                            </span>

                            <div className="relative flex-1 flex flex-col">
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400/50 group-hover:bg-violet-400 transition-colors duration-300" />
                                    <span className="text-white/30 font-mono text-[10px] tracking-[0.3em] group-hover:text-white/50 transition-colors duration-300">
                                        {area.num}
                                    </span>
                                </div>

                                <h3 className="text-white text-xl md:text-2xl font-semibold leading-snug">
                                    {area.title}
                                </h3>

                                <p className="text-white/50 text-sm leading-relaxed mt-3 flex-1 group-hover:text-white/70 transition-colors duration-300">
                                    {area.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 md:mt-20 max-w-3xl mx-auto text-center">
                    <p className="text-white/60 text-font-inter text-base md:text-lg leading-relaxed">
                        Необязательно заранее знать, нужен ли вам именно веб-сервис, личный кабинет или внутренняя система. Если вы понимаете проблему, но не знаете, как её правильно решить технически - это как раз тот случай, когда сначала стоит обсудить задачу.
                    </p>
                </div>
            </div>
        </div>
    )
}