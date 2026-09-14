import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"
import { FaGlobe, FaLaptopCode, FaLayerGroup, FaShoppingCart, FaCubes } from "react-icons/fa"

const items = [
    {
        title: "Сайты",
        desc: "Корпоративные сайты, сайты услуг, каталоги и другие веб-сайты для представления бизнеса в интернете. Продумываем структуру, интерфейс, контентные блоки, формы взаимодействия и всё необходимое для дальнейшего развития сайта.",
        href: "/services/web-development/sites",
        icon: FaGlobe,
    },
    {
        title: "Веб-приложения",
        desc: "Онлайн-сервисы, личные кабинеты и приложения, в которых пользователь взаимодействует с данными, функциями и бизнес-логикой. Разрабатываем как клиентскую, так и серверную часть продукта.",
        href: "/services/web-development/web-application",
        icon: FaLaptopCode,
    },
    {
        title: "Интерфейсы",
        desc: "Пользовательские и внутренние интерфейсы для цифровых продуктов и рабочих процессов. Прорабатываем структуру экранов, сценарии взаимодействия и удобство работы с системой.",
        href: "/services/web-development/interfaces",
        icon: FaLayerGroup,
    },
    {
        title: "Интернет-магазины",
        desc: "Онлайн-магазины с каталогом, фильтрацией, корзиной, оформлением заказов, оплатой и интеграциями с необходимыми сервисами. Строим магазин вокруг реального процесса продаж, а не только вокруг каталога товаров.",
        href: "/services/web-development/online-stores",
        icon: FaShoppingCart,
    },
    {
        title: "Сложные веб-продукты",
        desc: "Платформы, SaaS-сервисы, внутренние системы и другие нестандартные веб-продукты. Здесь может потребоваться собственная бизнес-логика, несколько ролей пользователей, API, базы данных, интеграции и отдельная архитектура продукта.",
        href: "/services/web-development/complex-webproducts",
        icon: FaCubes,
    },
]

export function CanBeDevelopedWebDevelopment() {
    return (
        <div className="container">
            <div className="pt-42">
                <div className="mb-10 md:mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Что можно разработать</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-white text-font-space text-4xl md:text-5xl">Выбираем формат под задачу</h2>
                    <p className="text-white/60 text-font-inter text-base mt-4 leading-relaxed">
                        Не каждая бизнес-задача требует сложного продукта, как и не каждый процесс можно решить обычным сайтом. Поэтому мы не привязываем задачу к одному формату - сначала разбираемся, что должно работать в результате, а затем выбираем подходящий вариант разработки.
                    </p>
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-6">
                    {items.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                        >
                            <div className="group h-full bg-[#111111] border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-white/25 hover:shadow-2xl flex flex-col cursor-pointer">
                                <item.icon className="text-white/50 group-hover:text-white transition-colors m-auto duration-300 size-8 mb-4" />
                                <h3 className="text-white text-xl font-semibold text-center">{item.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed mt-2 flex-1 text-center">{item.desc}</p>
                                <span className="inline-flex items-center gap-1 text-white/50 group-hover:text-white text-sm font-medium transition-colors duration-200 mt-4">
                                    Подробнее
                                    <IoIosArrowForward className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}