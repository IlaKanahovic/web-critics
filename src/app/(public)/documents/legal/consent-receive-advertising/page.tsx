import { Footer } from "@/components/layout/footer/Footer";
import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";

export default function MarketingConsern() {
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
                        Согласие на получение рекламных и информационных рассылок
                    </h1>

                    <p className="mb-3">
                        Я добровольно предоставляю согласие Оператору: Канаховичу Илье Александровичу (ИНН 384900802148) на получение рассылок по электронной почте, SMS, в мессенджерах (Telegram, WhatsApp).
                    </p>

                    <p className="mb-3">
                        В целях получения данных рассылок я даю согласие на обработку моих контактных данных (ФИО, email, номер телефона, ID в мессенджерах).
                    </p>

                    <p className="mb-3">
                        <span className="text-white">Темы:</span> акции, новые продукты, обновления систем.
                    </p>

                    <p className="mb-6">
                        <span className="text-white">Частота:</span> не чаще 4 раз в месяц.
                    </p>

                    <p className="mb-3">
                        Согласие даётся в соответствии со ст. 18 Федерального закона «О рекламе» и Федеральным законом № 152-ФЗ «О персональных данных».
                    </p>

                    <p>
                        Согласие необязательно для покупки и не связано с другими согласиями. Отказаться от рассылки можно в любой момент по ссылке «Отписаться» в каждом письме или направив письмо на{' '}
                        <a
                            href="mailto:webcritic.company@gmail.com"
                            className="text-white/90 hover:text-white underline underline-offset-2"
                        >
                            webcritic.company@gmail.com
                        </a>
                        .
                    </p>

                </article>
            </main>

            <Footer />
        </div>
    )
}