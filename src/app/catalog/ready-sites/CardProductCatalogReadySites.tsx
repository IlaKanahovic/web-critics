import { IoIosArrowForward } from "react-icons/io"
import { FaCheck } from "react-icons/fa"

interface CardData {
    id: number
    title: string
    description: string
    features: string[]
    price: number
    priceMounth: string
    descPrice: string
    previewBg?: string
}

export function CardProductCatalogReadySites({ title, description, features, price, priceMounth, descPrice, previewBg }: CardData) {
    return (
        <div className="group relative rounded-xl bg-[#111111] border border-white/10 shadow-inner shadow-white/5 transition-all duration-300 hover:shadow-2xl hover:border-white/10 overflow-hidden flex flex-col">
            <div className={`w-full h-48 flex items-center justify-center ${previewBg || "bg-white/5"} border-b border-white/5`}>
                <span className="text-white/30 text-sm font-medium">Превью сайта</span>
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
                <div className="mt-5 flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="">
                        <span className="text-white font-semibold text-lg">{priceMounth}</span><span className="text-white/50 font-semibold text-sm"> / {price.toLocaleString()} ₽</span>
                        <p className="text-white font-semibold text-sm">{descPrice}</p>
                    </div>
                    <button className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 group/btn cursor-pointer">
                        Посмотреть
                        <IoIosArrowForward className="size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                    </button>
                </div>
            </div>
        </div>
    )
}