import { IoIosArrowForward } from "react-icons/io"
import { FaCheck, FaCalendarAlt, FaShoppingCart } from "react-icons/fa"

interface CardData {
    id: number
    title: string
    description: string
    features: string[]
    price: number
    priceMounth: string
    previewBg?: string
}

export function CardProductCatalogReadyModels({ title, description, features, price, priceMounth, previewBg }: CardData) {
    return (
        <div className="group relative rounded-xl bg-[#111111] border border-white/10 shadow-inner shadow-white/5 transition-all duration-300 hover:shadow-2xl hover:border-white/10 overflow-hidden flex flex-col">
            <div className={`w-full h-48 flex items-center justify-center ${previewBg || "bg-white/5"} border-b border-white/5`}>
                <span className="text-white/30 text-sm font-medium">Превью инструмента</span>
            </div>

            <div className="p-5 flex flex-col flex-1">
                <h3 className="text-white text-lg font-semibold">{title}</h3>
                <p className="text-white/60 text-sm mt-1">{description}</p>

                <ul className="mt-4 space-y-1.5">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-white/70 text-sm">
                            <FaCheck className="text-green-400 size-3.5 shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-5 pt-4 border-t border-white/5 grid grid-cols-2 gap-3">
                    <div className="bg-white/5 rounded-lg p-3 text-center transition-colors hover:bg-white/10">
                        <FaShoppingCart className="text-white/40 mx-auto mb-1.5 size-4" />
                        <span className="text-white/60 text-[10px] uppercase tracking-wider font-medium">Разово</span>
                        <p className="text-white font-semibold text-lg mt-0.5">{price.toLocaleString()} ₽</p>
                        <p className="text-white/40 text-[10px]">покупка инструмента</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-center transition-colors hover:bg-white/10">
                        <FaCalendarAlt className="text-white/40 mx-auto mb-1.5 size-4" />
                        <span className="text-white/60 text-[10px] uppercase tracking-wider font-medium">Подписка</span>
                        <p className="text-white font-semibold text-lg mt-0.5">{priceMounth}</p>
                        <p className="text-white/40 text-[10px]">подписка на инструмент</p>
                    </div>
                </div>
                <button className="mt-4 w-full inline-flex items-center justify-center gap-1 text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 group/btn cursor-pointer border border-white/10 rounded-full py-2 hover:bg-white/5">
                    Посмотреть
                    <IoIosArrowForward className="size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                </button>
            </div>
        </div>
    )
}