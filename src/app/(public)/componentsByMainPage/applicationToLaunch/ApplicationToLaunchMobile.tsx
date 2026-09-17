
export function ApplicationToLaunchMobile() {
    return (
        <div className="mt-10 flex flex-col gap-6">
            <div className="flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80 text-sm">
                    01
                </div>
                <div>
                    <span className="text-white text-lg font-semibold">Рассказываете, что не работает</span>
                    <p className="text-white/60 mt-1">Коротко описываете задачу, проблему или идею. Уже на этом этапе пытаемся понять, где находится настоящая точка роста.</p>
                </div>
            </div>
            <div className="flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80 text-sm">
                    02
                </div>
                <div>
                    <span className="text-white text-lg font-semibold">Разбираемся в задаче</span>
                    <p className="text-white/60 mt-1">Обсуждаем бизнес, цели и ограничения. Задаём неудобные вопросы, если они помогают найти решение лучше первоначальной идеи.</p>
                </div>
            </div>
            <div className="flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80 text-sm">
                    03
                </div>
                <div>
                    <span className="text-white text-lg font-semibold">Показываем, как это будет работать</span>
                    <p className="text-white/60 mt-1">Собираем концепцию, прототип или демо, чтобы вы увидели решение ещё до основной разработки.</p>
                </div>
            </div>
            <div className="flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80 text-sm">
                    04
                </div>
                <div>
                    <span className="text-white text-lg font-semibold">Собираем и проверяем</span>
                    <p className="text-white/60 mt-1">Превращаем согласованное решение в работающий продукт, проверяем сценарии, исправляем ошибки и доводим всё до готовности.</p>
                </div>
            </div>
            <div className="flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80 text-sm">
                    05
                </div>
                <div>
                    <span className="text-white text-lg font-semibold">Запускаем и остаёмся рядом</span>
                    <p className="text-white/60 mt-1">Запускаем проект в работу и, при необходимости, продолжаем его развивать, оптимизировать и поддерживать.</p>
                </div>
            </div>
        </div>
    )
}