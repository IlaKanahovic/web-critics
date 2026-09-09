import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"
import { dataReadyModels } from "../../components/HeroCatalogReadyModels"
import { CardProductCatalogReadyModels } from "../../components/CardProductCatalogReadyModels"

export function CTAProductReadyModels() {
    return (
        <div className="container">
            <div className="pt-12">
                {/* Блок: Другие решения */}
                <div>
                    <h2 className="text-white text-font-space text-3xl md:text-4xl text-center">Возможно, подойдёт ещё</h2>
                    {/* ДИНАМИЧЕСКИЕ КАРТОЧКИ: другие товары из той же категории */}
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {dataReadyModels.map((tool) => (
                            <CardProductCatalogReadyModels key={tool.id} {...tool} />
                        ))}
                    </div>
                </div>

                {/* Разделитель */}
                <div className="my-12 h-px bg-linear-to-r from-transparent via-white/10 to-transparent max-w-3xl mx-auto" />

                {/* Финальный CTA */}
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-white text-font-space text-3xl md:text-4xl">Не нашли подходящего решения?</h2>
                    <p className="text-white/70 text-font-inter text-sm mt-3 leading-relaxed">
                        Опишите задачу - мы посмотрим, можно ли адаптировать готовый продукт или лучше разработать решение с нуля.
                    </p>
                    <Link href="/contacts">
                        <button className="button-main-styles inline-flex items-center gap-2 mt-6">
                            Обсудить задачу
                            <IoIosArrowForward className="size-5" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}