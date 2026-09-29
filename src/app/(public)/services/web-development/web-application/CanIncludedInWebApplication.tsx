import { itemsWebDevelopmentWebApplication } from "@/constants/constants-services/developed";


export function CanIncludedInWebApplication() {
    return (
        <div className="container">
            <div className="pt-20 md:pt-32">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Возможности</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="max-w-3xl">
                    <h2 className="text-white text-font-space text-4xl md:text-5xl lg:text-6xl leading-tight">
                        Собираем систему под ваш процесс
                    </h2>

                    <div className="mt-8 space-y-4">
                        <p className="text-white/70 text-font-inter text-base md:text-lg leading-relaxed">
                            Нет смысла добавлять в приложение функции только потому, что они есть в похожих продуктах. Одному проекту нужен простой интерфейс для нескольких сотрудников, другому - сложная система с разными ролями, данными, интеграциями и автоматическими действиями.
                        </p>
                        <p className="text-white/50 text-font-inter text-sm md:text-base leading-relaxed">
                            Поэтому функциональность формируется вокруг конкретного процесса. Мы определяем, кто будет пользоваться системой, какие действия ему доступны, какие данные он получает и что должно происходить после каждого действия.
                        </p>
                    </div>
                </div>

                <div className="mt-16 md:mt-20 border-t border-white/10">
                    {itemsWebDevelopmentWebApplication.map((item, i) => (
                        <div
                            key={i}
                            className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-6 md:py-8 border-b border-white/10 hover:border-white/25 transition-colors duration-300 cursor-default"
                        >
                            <span className="md:col-span-1 text-white/25 font-mono text-sm group-hover:text-white/50 transition-colors duration-300">
                                {item.num}
                            </span>

                            <div className="md:col-span-1">
                                <item.icon className="text-white/40 group-hover:text-white size-5 transition-colors duration-300" />
                            </div>

                            <h3 className="md:col-span-3 text-white text-lg md:text-xl font-semibold leading-snug">
                                {item.title}
                            </h3>

                            <p className="md:col-span-7 text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 md:mt-20 max-w-2xl mx-auto text-center">
                    <p className="text-white/60 text-font-inter text-sm md:text-base leading-relaxed">
                        Это не фиксированный список возможностей. Мы не заставляем ваш бизнес подстраиваться под готовую систему. Наоборот - определяем, какой должна быть система, чтобы она нормально работала внутри вашего процесса.
                    </p>
                </div>
            </div>
        </div>
    )
}