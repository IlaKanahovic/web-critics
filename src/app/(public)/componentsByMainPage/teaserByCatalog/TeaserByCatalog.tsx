import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export function TeaserByCatalog() {
    return (
        <div>
            <div className="flex flex-col gap-6 mt-10">
                <div className="relative flex items-center w-full h-86">
                    <div className="group absolute inset-y-0 left-0 w-170 max-[1150px]:w-110 bg-[#111111] border border-white/30 rounded-tr-2xl rounded-br-2xl shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-[width,box-shadow] duration-500 ease-in-out hover:w-full hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] z-10 cursor-pointer will-change-[width] overflow-hidden flex">
                        <div className="flex-1 flex items-center">
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
                        </div>
                        <div className="w-0 group-hover:w-96 transition-all duration-500 ease-in-out bg-[#111111] overflow-hidden flex items-center">
                            <div className="text-white p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 whitespace-nowrap">
                                <p className="text-3xl font-bold mb-2">Готовый лендинг <br /> для салона красоты</p>
                                <p className="text-2xl font-semibold text-white/90 mb-6"> от 12 000 ₽ / 3 дня </p>
                                <div className="flex flex-col gap-3">
                                    <button className="group/btn1 relative px-6 py-2 bg-white text-black rounded-lg font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] cursor-pointer">
                                        <span className="relative z-10">Подробнее</span>
                                        <span className="absolute inset-0 bg-linear-to-r from-gray-200 to-white transform -translate-x-full group-hover/btn1:translate-x-0 transition-transform duration-500"></span>
                                    </button>
                                    <button className="group/btn2 relative px-6 py-2 border border-white text-white rounded-lg font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer">
                                        <span className="relative z-10 group-hover/btn2:text-black transition-colors duration-300">Заказать</span>
                                        <span className="absolute inset-0 bg-white transform -translate-x-full group-hover/btn2:translate-x-0 transition-transform duration-500"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-5 h-full bg-white flex items-center justify-center shrink-0 rounded-tr-2xl rounded-br-2xl">
                            <IoIosArrowForward className="text-black size-6 transition-transform duration-500 ease-in-out group-hover:rotate-180" />
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center pl-186 max-[1150px]:pl-126">
                        <span className="text-white text-font-inter text-[clamp(1.6rem,2.5vw,1.8rem)] font-semibold">
                            Готовый лендинг для салона красоты
                        </span>
                        <span className="text-white/80 text-font-inter text-[clamp(1.1rem,1.8vw,1.2rem)] mt-1 block">
                            Готовый лендинг с онлайн-записью, галереей работ и блоком услуг. Адаптивный, быстрый, запуск за 2 дня.
                        </span>
                    </div>
                </div>
                <div className="relative flex items-center w-full h-86">
                    <div className="flex-1 flex flex-col justify-start pr-60 max-[1150px]:pr-8">
                        <span className="text-white text-font-inter text-[clamp(1.6rem,2.5vw,1.8rem)] font-semibold">
                            Автоуведомления клиентам
                        </span>
                        <span className="text-white/80 text-font-inter text-[clamp(1.1rem,1.8vw,1.2rem)] mt-1 block">
                            Telegram-бот, который сам напоминает клиентам
                            <br />
                            о записи, подтверждает визит и снижает неявки.
                        </span>
                    </div>
                    <div className="group absolute inset-y-0 right-0 w-170 max-[1150px]:w-110 bg-[#111111] border border-white/30 rounded-tl-2xl rounded-bl-2xl shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 ease-in-out hover:w-full hover:max-[1150px]:w-full hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] z-10 cursor-pointer overflow-hidden flex">
                        <div className="w-5 h-full bg-white flex items-center justify-center shrink-0 rounded-tl-2xl rounded-bl-2xl">
                            <IoIosArrowForward className="text-black size-6 rotate-180 transition-transform duration-300 ease-in-out group-hover:rotate-0" />
                        </div>
                        <div className="w-0 group-hover:w-96 transition-all duration-300 ease-in-out bg-[#111111] overflow-hidden flex items-center">
                            <div className="text-white p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 whitespace-nowrap">
                                <p className="text-3xl font-bold mb-2">Автоуведомления</p>
                                <p className="text-2xl font-semibold text-white/90 mb-6">от 5 000 ₽ / мес.</p>
                                <div className="flex flex-col gap-3">
                                    <button className="group/btn3 relative px-6 py-2 bg-white text-black rounded-lg font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] cursor-pointer">
                                        <span className="relative z-10">Подробнее</span>
                                        <span className="absolute inset-0 bg-linear-to-r from-gray-200 to-white transform -translate-x-full group-hover/btn3:translate-x-0 transition-transform duration-500"></span>
                                    </button>
                                    <button className="group/btn4 relative px-6 py-2 border border-white text-white rounded-lg font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer">
                                        <span className="relative z-10 group-hover/btn4:text-black transition-colors duration-300">Заказать</span>
                                        <span className="absolute inset-0 bg-white transform -translate-x-full group-hover/btn4:translate-x-0 transition-transform duration-500"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex items-center">
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
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mt-10">
                <Link href="/catalog">
                    <button className="button-main-styles">Перейти в каталог</button>
                </Link>
            </div>
        </div>
    )
}