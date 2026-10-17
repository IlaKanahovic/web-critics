import { IoIosArrowForward } from "react-icons/io"

export function HeroReviews() {
    return (
        <div className="container">
            <div className="pt-10 md:pt-42 max-w-4xl">
                <span className="text-white/40 text-xs uppercase tracking-widest">
                    Отзывы
                </span>

                <h1 className="text-font-cormorant text-[#f0f0f0] text-5xl md:text-7xl lg:text-[96px] leading-[1.05] mt-6">
                    Что говорят о нашей работе
                </h1>

                <div className="mt-10 max-w-2xl pl-6 border-l-2 border-violet-400/40">
                    <p className="text-white text-font-inter text-lg md:text-xl leading-[1.4] font-medium">
                        Для нас отзыв - не просто оценка. Это обратная связь о том, насколько решение помогло справиться с задачей.
                    </p>
                </div>

                <p className="text-white/55 text-font-inter text-base md:text-lg leading-relaxed mt-8 max-w-2xl">
                    Здесь собраны впечатления клиентов о сотрудничестве с WebCRitic.
                </p>

                <div className="mt-10">
                    <button className="button-main-styles inline-flex items-center gap-2">
                        Оставить отзыв
                        <IoIosArrowForward className="size-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}