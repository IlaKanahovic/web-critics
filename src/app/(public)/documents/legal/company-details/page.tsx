import { Footer } from "@/components/layout/footer/Footer";
import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";

export default function CompanyDetails() {
    return (
        <div className="relative z-10 pt-30">
            <div className="mobile-only">
                <HeaderMobile />
            </div>
            <div className="desktop-only">
                <HeaderDesktop />
            </div>

            <main className="container pt-30 md:pt-42 pb-24">
                <article className="max-w-3xl mx-auto text-white/75 text-font-inter text-sm md:text-base leading-relaxed">

                    <h1 className="text-white text-font-space text-3xl md:text-4xl lg:text-5xl mb-10">
                        Реквизиты компании
                    </h1>

                    <dl className="space-y-4">

                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                            <dt className="text-white/50 text-xs uppercase tracking-wider sm:w-44 shrink-0">
                                ФИО
                            </dt>
                            <dd className="text-white">Канахович Илья Александрович</dd>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                            <dt className="text-white/50 text-xs uppercase tracking-wider sm:w-44 shrink-0">
                                ИНН
                            </dt>
                            <dd className="text-white">384900802148</dd>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                            <dt className="text-white/50 text-xs uppercase tracking-wider sm:w-44 shrink-0">
                                Статус
                            </dt>
                            <dd className="text-white">
                                Самозанятый (Плательщик налога на профессиональный доход)
                            </dd>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                            <dt className="text-white/50 text-xs uppercase tracking-wider sm:w-44 shrink-0">
                                Email для связи
                            </dt>
                            <dd>
                                <a
                                    href="mailto:webcritic.company@gmail.com"
                                    className="text-white/90 hover:text-white underline underline-offset-2"
                                >
                                    webcritic.company@gmail.com
                                </a>
                            </dd>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                            <dt className="text-white/50 text-xs uppercase tracking-wider sm:w-44 shrink-0">
                                Телефон
                            </dt>
                            <dd>
                                <a
                                    href="tel:+79249965191"
                                    className="text-white/90 hover:text-white underline underline-offset-2"
                                >
                                    +7 (924) 996 51-91
                                </a>
                            </dd>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                            <dt className="text-white/50 text-xs uppercase tracking-wider sm:w-44 shrink-0">
                                ОГРНИП
                            </dt>
                            <dd>
                                отсутствует (применяется специальный налоговый режим «Налог на профессиональный доход»)
                            </dd>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                            <dt className="text-white/50 text-xs uppercase tracking-wider sm:w-44 shrink-0">
                                НДС
                            </dt>
                            <dd>
                                не облагается (в соответствии с п. 2 ст. 346.43 НК РФ / 422-ФЗ)
                            </dd>
                        </div>

                    </dl>

                </article>
            </main>

            <Footer />
        </div>
    )
}