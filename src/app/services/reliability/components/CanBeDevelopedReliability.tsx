const items = [
    {
        num: '01',
        title: 'Сайт работает нестабильно',
        desc: 'Страницы долго загружаются, отдельные функции периодически перестают работать, возникают ошибки или сервис становится недоступен при увеличении нагрузки.',
    },
    {
        num: '02',
        title: 'Боимся за безопасность',
        desc: 'Есть сомнения в защите сайта, пользовательских данных, личных кабинетов или административной части. Не всегда понятно, насколько хорошо система защищена от типичных угроз.',
    },
    {
        num: '03',
        title: 'Пользователи находят ошибки',
        desc: 'Функции работают не так, как должны, отдельные сценарии ломаются после обновлений, а проверять всё вручную перед каждым релизом становится слишком сложно.',
    },
    {
        num: '04',
        title: 'Продукт становится сложнее',
        desc: 'Система развивалась постепенно, в ней накопилось много связей, временных решений и старого кода. Теперь любое изменение может затронуть несколько частей продукта.',
    },
    {
        num: '05',
        title: 'Планируется рост нагрузки',
        desc: 'Текущая версия справляется с небольшим количеством пользователей, но непонятно, как она поведёт себя при увеличении трафика, количества данных или операций.',
    },
    {
        num: '06',
        title: 'Нужно проверить существующий продукт',
        desc: 'Хотите понять, в каком состоянии находится сайт или сервис до запуска, масштабных изменений или передачи проекта другой команде.',
    },
    {
        num: '07',
        title: 'После изменений всё начинает ломаться',
        desc: 'Новая функция работает сама по себе, но неожиданно влияет на уже существующие части продукта. Нужно сделать процесс изменений более предсказуемым.',
    },
    {
        num: '08',
        title: 'Нет уверенности в том, что всё работает правильно',
        desc: 'Проект может выглядеть нормально снаружи, но внутри оставаться проблемы с данными, доступами, логикой или взаимодействием отдельных компонентов.',
    },
]

export function CanBeDevelopedReliability() {
    return (
        <section className="relative py-20 md:py-32 lg:py-40">
            <div className="container px-4 md:px-10 lg:px-35">
                <div className="mt-14 md:mt-20 flex items-center gap-4 mb-10">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
                    <span className="text-white/30 text-xs uppercase tracking-widest">С КАКИМИ ПРОБЛЕМАМИ ПОМОГАЕМ</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
                </div>
                <h2 className="text-white text-3xl md:text-5xl lg:text-6xl leading-[1.05] text-center">
                    Когда продукт<br className="hidden md:block" /> начинает создавать проблемы
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 mt-12">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="group relative border-t border-white/8 py-7 md:py-8 transition-colors duration-500 hover:border-white/25"
                        >
                            <div className="flex items-start gap-5 md:gap-8">
                                <span className="shrink-0 text-white/25 text-xs tracking-[0.3em] pt-1.5 transition-colors duration-500 group-hover:text-white/70">
                                    {item.num}
                                </span>

                                <div className="flex-1">
                                    <h3 className="text-white text-lg md:text-xl lg:text-2xl mb-3 transition-transform duration-500 group-hover:translate-x-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/50 text-sm leading-relaxed max-w-md transition-colors duration-500 group-hover:text-white/70">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>

                            <span className="absolute left-0 top-0 h-px w-0 bg-linear-to-r from-white/60 to-transparent transition-all duration-700 group-hover:w-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}