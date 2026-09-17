import { FiFileText, FiZap, FiEye, FiUser } from 'react-icons/fi';

export function AboutMyWork() {
    return (
        <div className="pt-10 md:pt-60.5">
            <div className="container">
                <div className="mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Принципы</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>
                <h1 className="text-white text-center text-font-space text-4xl md:text-5xl">
                    Разбираемся в проблеме. Создаём решение.
                </h1>
                <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-y-8 md:gap-y-0 md:divide-x divide-white/10">
                    <div className="group flex flex-col items-start px-4 text-left">
                        <div className="flex items-center gap-3 mb-4">
                            <FiFileText className="text-white/60 text-2xl group-hover:text-white transition-colors duration-300" />
                            <span className="text-white text-font-inter text-lg font-semibold">Не прячемся за формальностями</span>
                        </div>
                        <p className="text-white/70 text-font-inter">Договор, чеки и понятные условия - с самого начала. Вы знаете, с кем работаете, за что платите и что получите в результате.</p>
                    </div>
                    <div className="group flex flex-col items-start px-4 text-left">
                        <div className="flex items-center gap-3 mb-4">
                            <FiZap className="text-white/60 text-2xl group-hover:text-white transition-colors duration-300" />
                            <span className="text-white text-font-inter text-lg font-semibold">Не растягиваем работу без причины</span>
                        </div>
                        <p className="text-white/70 text-font-inter">Не обещаем невозможного, но и не заставляем ждать месяцами. Подбираем способ решения под задачу и заранее обозначаем реальные сроки.</p>
                    </div>
                    <div className="group flex flex-col items-start px-4 text-left">
                        <div className="flex items-center gap-3 mb-4">
                            <FiEye className="text-white/60 text-2xl group-hover:text-white transition-colors duration-300" />
                            <span className="text-white text-font-inter text-lg font-semibold">Не продаём то, что вам не нужно</span>
                        </div>
                        <p className="text-white/70 text-font-inter">Сначала разбираемся в задаче, потом предлагаем решение. Никаких ненужных услуг, внезапных доплат и «обязательных» работ ради увеличения счёта.</p>
                    </div>
                    <div className="group flex flex-col items-start px-4 text-left">
                        <div className="flex items-center gap-3 mb-4">
                            <FiUser className="text-white/60 text-2xl group-hover:text-white transition-colors duration-300" />
                            <span className="text-white text-font-inter text-lg font-semibold">Вы говорите с тем, кто решает задачу</span>
                        </div>
                        <p className="text-white/70 text-font-inter">Без бесконечной цепочки менеджеров и потерянного контекста. Обсуждаем задачу напрямую, быстро принимаем решения и отвечаем за результат.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
