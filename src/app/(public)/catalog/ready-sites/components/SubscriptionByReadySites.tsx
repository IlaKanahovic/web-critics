import { includedItemsReadySites, tableRowsReadySites } from "@/constants/subscription"
import { FaCheck } from "react-icons/fa"

export function SubscriptionByReadySites() {
    return (
        <div className="container">
            <div className="pt-42">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Подписка</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-white text-font-space text-4xl md:text-5xl">Сайт работает - мы следим за ним</h2>
                    <p className="text-white/60 text-font-inter text-base mt-3">
                        Подписка позволяет запустить готовый сайт без самостоятельной настройки хостинга, домена и технического
                        обслуживания.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-[#111111] border border-white/10 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                        <h3 className="text-white text-lg font-semibold">Домен</h3>
                        <p className="text-white/60 text-sm mt-2 leading-relaxed">Поможем выбрать доменное имя, оформим его и подключим к сайту.</p>
                    </div>
                    <div className="bg-[#111111] border border-white/10 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                        <h3 className="text-white text-lg font-semibold">Хостинг</h3>
                        <p className="text-white/60 text-sm mt-2 leading-relaxed">Разместим сайт на нашей инфраструктуре и будем следить за его работоспособностью.</p>
                    </div>
                    <div className="bg-[#111111] border border-white/10 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                        <h3 className="text-white text-lg font-semibold">SSL</h3>
                        <p className="text-white/60 text-sm mt-2 leading-relaxed">Настроим SSL-сертификат и необходимые параметры безопасности для работы сайта по HTTPS.</p>
                    </div>
                    <div className="bg-[#111111] border border-white/10 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                        <h3 className="text-white text-lg font-semibold">Поддержка</h3>
                        <p className="text-white/60 text-sm mt-2 leading-relaxed">Если сайт перестал работать или возникла техническая проблема, мы найдём причину и восстановим его работоспособность.</p>
                    </div>
                </div>

                <div className="my-8 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

                <div className="max-w-3xl mx-auto">
                    <h2 className="text-white text-font-space text-3xl md:text-4xl text-center">Что входит в подписку</h2>
                    <div className="mt-8 bg-[#111111] border border-white/10 rounded-xl p-6">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5">
                            {includedItemsReadySites.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-white/80 text-sm">
                                    <FaCheck className="text-green-400 size-4 mt-0.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-10 overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="text-white/60 text-xs uppercase tracking-wider font-medium py-3 pr-4 w-1/2">
                                    &nbsp;
                                </th>
                                <th className="text-center text-white/60 text-xs uppercase tracking-wider font-medium py-3 px-4 w-1/4">
                                    Разовая покупка
                                </th>
                                <th className="text-center text-white/60 text-xs uppercase tracking-wider font-medium py-3 px-4 w-1/4">
                                    Подписка
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableRowsReadySites.map((row, idx) => (
                                <tr
                                    key={idx}
                                    className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200"
                                >
                                    <td className="text-white/90 text-sm py-3 pr-4">{row.label}</td>
                                    <td className="text-center py-3 px-4">
                                        {typeof row.oneTime === "boolean" ? (
                                            row.oneTime ? (
                                                <FaCheck className="inline text-green-400 size-4" />
                                            ) : (
                                                <span className="text-white/30">—</span>
                                            )
                                        ) : (
                                            <span className="text-white/60 text-sm">{row.oneTime}</span>
                                        )}
                                    </td>
                                    <td className="text-center py-3 px-4">
                                        {typeof row.subscription === "boolean" ? (
                                            row.subscription ? (
                                                <FaCheck className="inline text-green-400 size-4" />
                                            ) : (
                                                <span className="text-white/30">—</span>
                                            )
                                        ) : (
                                            <span className="text-white/60 text-sm">{row.subscription}</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="my-8 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-white text-font-space text-3xl md:text-4xl">А что после подписки?</h2>
                    <p className="text-white/60 text-font-inter text-base mt-3">
                        Подписку можно прекратить в любой момент. После её окончания мы прекращаем оплачивать и обслуживать
                        инфраструктуру, которую предоставляли в рамках подписки.
                    </p>
                    <p className="text-white font-medium mt-4">Сайт при этом остаётся у вас.</p>

                    <p className="text-white/60 text-font-inter text-sm mt-6">
                        В обоих вариантах вы получаете готовый сайт. Разница в том, кто занимается его технической стороной после запуска.
                    </p>

                    <p className="text-white/60 text-font-inter text-sm mt-6">
                        Хотите продолжить пользоваться сайтом без самостоятельной настройки?
                        <br />
                        Просто продлите подписку - мы продолжим его размещать и сопровождать.
                    </p>
                </div>
            </div>
        </div>
    )
}