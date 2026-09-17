
const cardStyle = "relative rounded-xl w-full transition-all duration-300 hover:shadow-2xl cursor-pointer overflow-hidden bg-gradient-to-b from-[#111111] to-black before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-b before:from-white/10 before:to-transparent before:pointer-events-none [&>*]:relative [&>*]:rounded-xl"

export function Portfolio() {
    return (
        <div className="pt-30 md:pt-60">
            <div className="container px-4 md:px-0">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Портфолио</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>
                <h1 className="text-white text-left text-font-space text-3xl sm:text-4xl md:text-5xl">То, что уже работает</h1>
                <h2 className="text-font-inter text-[#a1a4a5] text-[16px] sm:text-[18px] mt-2 md:mt-3">
                    Пара живых примеров - как продукты решают реальные задачи.
                    <br />
                    Превью, как сайты, боты и микросервисы закрывают конкретные проблемы.
                </h2>
                <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 md:gap-8 mt-8 md:mt-10">
                    <div className={cardStyle}>
                        <a href="#" className="block h-full">
                            <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-xl">
                                <video
                                    className="w-full h-full object-cover"
                                    src="/video/заглушка.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="none"
                                    poster="/img/avatar.svg"
                                />
                                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black" />
                            </div>
                            <div className="p-4 sm:p-5 md:p-6">
                                <span className="text-white text-lg sm:text-xl font-semibold text-font-inter">
                                    Название проекта: <span className="duration-300 hover:text-blue-200"> </span>
                                </span>
                                <p className="text-white/60 mt-2 text-font-inter text-sm sm:text-base">Задача: </p>
                                <p className="text-white/60 mt-1 sm:mt-2 text-font-inter text-sm sm:text-base">Результат: </p>
                            </div>
                        </a>
                    </div>
                    <div className={cardStyle}>
                        <a href="#" className="block h-full">
                            <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-xl">
                                <video
                                    className="w-full h-full object-cover"
                                    src="/video/заглушка.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="none"
                                    poster="/img/avatar.svg"
                                />
                                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black" />
                            </div>
                            <div className="p-4 sm:p-5 md:p-6">
                                <span className="text-white text-lg sm:text-xl font-semibold text-font-inter">
                                    Название проекта: <span className="duration-300 hover:text-blue-200"> </span>
                                </span>
                                <p className="text-white/60 mt-2 text-font-inter text-sm sm:text-base">Задача: </p>
                                <p className="text-white/60 mt-1 sm:mt-2 text-font-inter text-sm sm:text-base">Результат: </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}