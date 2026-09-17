import { solvWeb } from "@/constants/constants-services/solvingProblems"


export function SolvingBusninessProblemsWebDevelopment() {
    const spans = [
        'lg:col-span-3',
        'lg:col-span-3',
        'lg:col-span-2',
        'lg:col-span-4',
        'lg:col-span-6',
    ]

    return (
        <section className="relative py-20 md:py-32 lg:py-40">
            <div className="container px-4 md:px-10 lg:px-35">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Почему мы</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 md:mb-24">
                    <div className="lg:col-span-7">
                        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl leading-[1.05]">
                            Почему наши веб-решения решают ваши бизнес-задачи?
                        </h2>
                    </div>
                    <div className="lg:col-span-5 lg:pt-6 flex flex-col gap-4">
                        <p className="text-white/55 text-sm md:text-base leading-relaxed">
                            Веб-разработка начинается не с выбора технологии и не с создания первого экрана. Сначала нужно понять, зачем бизнесу нужен продукт, кто будет им пользоваться и какой результат он должен приносить.
                        </p>
                        <p className="text-white/55 text-sm md:text-base leading-relaxed">
                            Красивый сайт сам по себе не решает задачу, если клиент не понимает предложение, нужное действие сложно найти, а сотрудники продолжают выполнять всё вручную. Поэтому перед разработкой мы разбираемся в самой проблеме: изучаем бизнес, аудиторию, процессы и ограничения.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 md:gap-5">
                    {solvWeb.map((item, i) => {
                        const isLast = i === solvWeb.length - 1
                        return (
                            <div
                                key={i}
                                className={`group relative ${spans[i]} rounded-2xl border border-white/8 bg-linear-to-br from-white/3 to-transparent overflow-hidden transition-all duration-500 hover:border-white/20 hover:from-white/5`}
                            >
                                {isLast ? (
                                    <div className="relative p-6 md:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                                        <span className="absolute -top-6 -right-2 text-[120px] md:text-[180px] font-bold text-white/[0.035] leading-none select-none pointer-events-none">
                                            {item.num}
                                        </span>
                                        <div className="lg:col-span-5 relative">
                                            <span className="text-white/30 text-xs tracking-[0.3em] mb-3 block">{item.num}</span>
                                            <h3 className="text-white text-xl md:text-2xl lg:text-3xl leading-tight">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p className="lg:col-span-7 text-white/55 text-sm md:text-base leading-relaxed relative">
                                            {item.text}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="relative p-6 md:p-8 h-full">
                                        <span className="absolute -top-6 -right-2 text-[100px] md:text-[140px] font-bold text-white/[0.035] leading-none select-none pointer-events-none">
                                            {item.num}
                                        </span>
                                        <div className="relative flex flex-col h-full">
                                            <span className="text-white/30 text-xs tracking-[0.3em] mb-4 block">{item.num}</span>
                                            <h3 className="text-white text-lg md:text-xl lg:text-2xl leading-tight mb-4">
                                                {item.title}
                                            </h3>
                                            <p className="text-white/55 text-sm leading-relaxed">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                )}
                                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}