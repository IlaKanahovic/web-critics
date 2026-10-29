import { Footer } from "@/components/layout/footer/Footer";
import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";

export default function CookiePolicy() {
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
                        Политика использования файлов cookie
                    </h1>

                    <p className="text-white/50 text-xs md:text-sm mb-10">
                        Дата вступления в силу: 29 октября 2026 г.
                    </p>

                    <section className="mt-10">
                        <h2 className="text-white text-font-space text-xl md:text-2xl mb-4">1. Введение</h2>

                        <p className="mb-3">
                            1.1. Настоящая Политика использования файлов cookie (далее — «Политика») объясняет, как WebCRitic (далее — «Мы», «Наш», «Компания») использует файлы cookie и аналогичные технологии на нашем веб-сайте{' '}
                            <a href="https://web-critics.ru" className="text-white/90 hover:text-white underline underline-offset-2">
                                https://web-critics.ru
                            </a>
                            .
                        </p>
                        <p>
                            1.2. Использование файлов cookie осуществляется с вашего согласия, которое вы даете путем нажатия кнопки «Принять» в специальном баннере на нашем сайте. Вы можете отозвать согласие в любой момент, изменив настройки вашего браузера.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-white text-font-space text-xl md:text-2xl mb-4">2. Что такое файлы cookie?</h2>

                        <p>
                            2.1. Файлы cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве (компьютере, смартфоне, планшете) при посещении веб-сайтов, а также аналогичные технологии. Они помогают сайтам запоминать информацию о вашем посещении, что делает следующий визит проще и удобнее.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-white text-font-space text-xl md:text-2xl mb-4">3. Типы используемых файлов cookie</h2>

                        <p className="mb-2">3.1. Мы используем следующие типы файлов cookie на нашем сайте:</p>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                            <li>Необходимые;</li>
                            <li>Аналитические.</li>
                        </ul>

                        <p className="mb-2">3.2. Описание типов файлов cookie:</p>
                        <ul className="list-disc pl-5 space-y-3">
                            <li>
                                <span className="text-white">Необходимые:</span> эти файлы cookie необходимы для работы сайта и не могут быть отключены. Они обеспечивают базовые функции, такие как безопасность и управление сессиями.
                            </li>
                            <li>
                                <span className="text-white">Аналитические:</span> эти файлы cookie помогают нам понять, как посетители взаимодействуют с сайтом. Для этого мы используем сервис Яндекс.Метрика (ООО «ЯНДЕКС»), который собирает обезличенные данные о посещениях (IP-адрес, действия на сайте, тип устройства).
                            </li>
                        </ul>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-white text-font-space text-xl md:text-2xl mb-4">4. Управление файлами cookie</h2>

                        <p className="mb-3">
                            4.1. Вы можете управлять файлами cookie через настройки вашего браузера. Обратите внимание, что отключение некоторых типов cookie может повлиять на работу сайта.
                        </p>

                        <p className="mb-2">4.2. Инструкции по управлению файлами cookie в популярных браузерах:</p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>
                                <span className="text-white">Chrome:</span>{' '}
                                <a
                                    href="https://support.google.com/chrome/answer/95647"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/90 hover:text-white underline underline-offset-2 break-all"
                                >
                                    https://support.google.com/chrome/answer/95647
                                </a>
                            </li>
                            <li>
                                <span className="text-white">Firefox:</span>{' '}
                                <a
                                    href="https://support.mozilla.org/ru/kb/kuki-informaciya-kotoruyu-veb-sajty-hranyat-na-v"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/90 hover:text-white underline underline-offset-2 break-all"
                                >
                                    https://support.mozilla.org/ru/kb/kuki-informaciya-kotoruyu-veb-sajty-hranyat-na-v
                                </a>
                            </li>
                            <li>
                                <span className="text-white">Safari:</span>{' '}
                                <a
                                    href="https://support.apple.com/ru-ru/guide/safari/sfri11471/mac"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/90 hover:text-white underline underline-offset-2 break-all"
                                >
                                    https://support.apple.com/ru-ru/guide/safari/sfri11471/mac
                                </a>
                            </li>
                            <li>
                                <span className="text-white">Edge:</span>{' '}
                                <a
                                    href="https://support.microsoft.com/ru-ru/microsoft-edge/удаление-файлов-cookie-в-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/90 hover:text-white underline underline-offset-2 break-all"
                                >
                                    https://support.microsoft.com/ru-ru/microsoft-edge/удаление-файлов-cookie-в-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09
                                </a>
                            </li>
                        </ul>

                        <p>
                            4.3. Для управления согласием на использование файлов cookie мы используем инструмент «Собственный менеджер cookie».
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-white text-font-space text-xl md:text-2xl mb-4">5. Изменения в Политике</h2>

                        <p>
                            5.1. Мы можем периодически обновлять эту Политику. Любые изменения вступят в силу с момента публикации обновленной Политики на нашем сайте.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-white text-font-space text-xl md:text-2xl mb-4">6. Контактная информация</h2>

                        <p className="mb-3">
                            6.1. Если у вас есть вопросы относительно нашей Политики использования файлов cookie, пожалуйста, свяжитесь с нами:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                Email:{' '}
                                <a
                                    href="mailto:webcritic.company@gmail.com"
                                    className="text-white/90 hover:text-white underline underline-offset-2"
                                >
                                    webcritic.company@gmail.com
                                </a>
                            </li>
                            <li>Телефон: +7 924 996 51 91</li>
                            <li>
                                Веб-сайт:{' '}
                                <a
                                    href="https://web-critics.ru"
                                    className="text-white/90 hover:text-white underline underline-offset-2"
                                >
                                    https://web-critics.ru
                                </a>
                            </li>
                        </ul>

                        <p className="mt-6 text-white/55 text-sm">
                            Оператор: Канахович Илья Александрович, ИНН: 384900802148
                        </p>
                    </section>

                </article>
            </main>

            <Footer />
        </div>
    )
}