import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";


export function CTAByFooterBots() {
    return (
        <div className="container">
            <div className="pt-42">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Индивидуальные решения</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-white text-font-space text-4xl md:text-5xl">Не нашли подходящего бота?</h2>
                    <p className="text-white/70 text-font-inter text-lg mt-4">
                        Это не значит, что вашу задачу нельзя решить.
                    </p>
                    <p className="text-white/50 text-font-inter text-base mt-4">
                        Расскажите, что должен делать бот и с чем ему нужно работать. Мы предложим готовое решение, адаптируем существующее или разработаем новое.
                    </p>
                </div>
                <div className="mt-10 flex justify-center">
                    <Link href="/contacts">
                        <button className="button-main-styles flex items-center gap-2">
                            Обсудить индивидуальное решение
                            <IoIosArrowForward className="size-5 mt-0.5" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}