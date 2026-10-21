'use client'

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IoClose } from "react-icons/io5"
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa"

interface StatusPopupProps {
    isOpen: boolean
    onClose: () => void
    type: 'success' | 'error'
    title?: string
    description?: string
}

export function StatusPopup({ isOpen, onClose, type, title, description }: StatusPopupProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const defaultTitle = type === 'success' ? 'Успешно отправлено' : 'Произошла ошибка'
    const defaultDesc = type === 'success'
        ? 'Ваши данные успешно сохранены. Мы свяжемся с вами в ближайшее время.'
        : 'Не удалось отправить данные. Пожалуйста, попробуйте еще раз или свяжитесь с нами напрямую.'

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-10000 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-sm bg-[#111111] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col items-center text-center overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-16 blur-2xl pointer-events-none ${type === 'success' ? 'bg-green-500/10' : 'bg-red-500/10'
                            }`} />

                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors duration-200 cursor-pointer"
                        >
                            <IoClose size={24} />
                        </button>

                        <div className={`mt-4 mb-5 flex items-center justify-center w-16 h-16 rounded-full ${type === 'success'
                                ? 'bg-green-500/10 text-green-400'
                                : 'bg-red-500/10 text-red-400'
                            }`}>
                            {type === 'success' ? (
                                <FaCheckCircle size={32} />
                            ) : (
                                <FaExclamationTriangle size={30} />
                            )}
                        </div>

                        <h2 className="text-white text-xl md:text-2xl font-space font-semibold">
                            {title || defaultTitle}
                        </h2>
                        <p className="text-white/50 text-sm leading-relaxed mt-2 mb-8">
                            {description || defaultDesc}
                        </p>

                        <button
                            onClick={onClose}
                            className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
                        >
                            Понятно
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}