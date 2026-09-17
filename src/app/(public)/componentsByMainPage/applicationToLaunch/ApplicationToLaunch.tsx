
export function ApplicationToLaunch() {
    return (
        <div className="mt-20 relative">
            <div className="hidden md:block absolute top-5 left-0 right-0 border-t border-dashed border-white/20" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
                <div className="relative flex md:flex-col items-center">
                    <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border border-white/30 bg-black text-white/80 text-sm font-medium">
                        01
                    </div>
                    <div className="mt-3 md:mt-6 text-left md:text-center">
                        <span className="text-white text-lg font-semibold">Рассказываете, что не работает</span>
                        <p className="text-white/60 mt-1">Коротко описываете задачу, проблему или идею. Уже на этом этапе пытаемся понять, где находится настоящая точка роста.</p>
                    </div>
                </div>
                <div className="relative flex md:flex-col items-center">
                    <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border border-white/30 bg-black text-white/80 text-sm font-medium">
                        02
                    </div>
                    <div className="mt-3 md:mt-6 text-left md:text-center">
                        <span className="text-white text-lg font-semibold">Разбираемся в задаче</span>
                        <p className="text-white/60 mt-8">Обсуждаем бизнес, цели и ограничения. Задаём неудобные вопросы, если они помогают найти решение лучше первоначальной идеи.</p>
                    </div>
                </div>
                <div className="relative flex md:flex-col items-center">
                    <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border border-white/30 bg-black text-white/80 text-sm font-medium">
                        03
                    </div>
                    <div className="mt-3 md:mt-6 text-left md:text-center">
                        <span className="text-white text-lg font-semibold">Показываем, как это будет работать</span>
                        <p className="text-white/60 mt-1">Собираем концепцию, прототип или демо, чтобы вы увидели решение ещё до основной разработки.</p>
                    </div>
                </div>
                <div className="relative flex md:flex-col items-center">
                    <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border border-white/30 bg-black text-white/80 text-sm font-medium">
                        04
                    </div>
                    <div className="mt-3 md:mt-6 text-left md:text-center">
                        <span className="text-white text-lg font-semibold">Собираем и проверяем</span>
                        <p className="text-white/60 mt-7.5">Превращаем согласованное решение в работающий продукт, проверяем сценарии, исправляем ошибки и доводим всё до готовности.</p>
                    </div>
                </div>
                <div className="relative flex md:flex-col items-center">
                    <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border border-white/30 bg-black text-white/80 text-sm font-medium">
                        05
                    </div>
                    <div className="mt-3 md:mt-6 text-left md:text-center">
                        <span className="text-white text-lg font-semibold">Запускаем и остаёмся рядом</span>
                        <p className="text-white/60 mt-1">Запускаем проект в работу и, при необходимости, продолжаем его развивать, оптимизировать и поддерживать.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

