'use client'

import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IoClose } from "react-icons/io5"
import { FaStar, FaCloudUploadAlt, FaTrash } from "react-icons/fa"
import { useReviewFormValidation } from "@/hooks/review/useReviewFormValidation"
import { dbAddReview } from "@/lib/db/review/dbAddReview"

interface ModalAddReviewProps {
    isOpen: boolean
    onClose: () => void
}

const categories = ["Готовые сайты", "Боты", "Готовые инструменты", "Автоматизация", "Веб-разработка", "Рост и аналитика", "AI", "Надежность и масштабирование"]

export function ModalAddReview({ isOpen, onClose }: ModalAddReviewProps) {
    const { form, errors, handleChange, validateForm, setErrors } = useReviewFormValidation()
    const fileInputRef = useRef<HTMLInputElement>(null)

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

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        const validTypes = ['image/jpeg', 'image/png', 'image/webp']
        if (!validTypes.includes(file.type)) {
            setErrors(prev => ({ ...prev, avatar: 'Допустимы только форматы JPEG, PNG и WebP' }))
            if (fileInputRef.current) fileInputRef.current.value = ''
            return
        }

        if (file.size > 2 * 1024 * 1024) {
            setErrors(prev => ({ ...prev, avatar: 'Файл слишком большой (максимум 2 МБ)' }))
            if (fileInputRef.current) fileInputRef.current.value = ''
            return
        }

        const reader = new FileReader()
        reader.onloadend = () => {
            handleChange('avatar', reader.result as string)
        }
        reader.readAsDataURL(file)
    }

    const handleRemoveAvatar = () => {
        handleChange('avatar', '')
        if (fileInputRef.current) fileInputRef.current.value = ''
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (validateForm()) {
            try {
                const dbData = {
                    name: form.name,
                    nameCompany: form.nameCompany || null,
                    avatar: form.avatar || "",
                    estimation: String(form.estimation),
                    category: form.category,
                    description: form.description,
                    caseHref: form.caseHref || null,
                }

                await dbAddReview(dbData)
                onClose()
            } catch (error) {
                console.error("ошибка при добавлении отзыва:", error)
            }
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 sm:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-lg md:max-w-5xl max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-2xl bg-[#111111] border border-white/10 shadow-2xl p-6 md:p-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-violet-500/10 blur-2xl" />
                        </div>

                        <button
                            onClick={onClose}
                            className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors duration-200 cursor-pointer z-10"
                        >
                            <IoClose size={28} />
                        </button>

                        <form className="relative w-full mx-auto" onSubmit={handleSubmit}>
                            <h2 className="text-white text-font-space text-2xl md:text-4xl text-center">
                                Оставить отзыв
                            </h2>
                            <p className="text-white/50 text-font-inter text-center text-sm md:text-base mt-2">
                                Расскажите о вашем опыте работы с нами
                            </p>

                            <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

                                <div className="md:col-span-4 flex flex-col items-center">
                                    <label className="text-white/70 text-sm font-medium block self-start md:self-center">Ваше фото</label>
                                    <p className="mb-3 font-medium block self-start md:self-center"><span className="text-white/30 text-sm font-medium block self-start md:self-center">(необязательно)</span></p>

                                    <input
                                        type="file"
                                        accept="image/jpeg, image/png, image/webp"
                                        className="hidden"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                    />

                                    {form.avatar ? (
                                        <div className="relative group w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/20">
                                            <img src={form.avatar} alt="Аватар" className="w-full h-full object-cover" />
                                            <button
                                                type="button"
                                                onClick={handleRemoveAvatar}
                                                className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                                            >
                                                <FaTrash className="text-red-400 size-6" />
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={() => fileInputRef.current?.click()}
                                            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-dashed border-white/20 hover:border-violet-400/50 hover:bg-white/5 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group"
                                        >
                                            <FaCloudUploadAlt className="text-white/40 group-hover:text-violet-300 size-8 mb-2 transition-colors" />
                                            <span className="text-white/40 text-xs text-center px-4 group-hover:text-white/60 transition-colors">Загрузить</span>
                                        </button>
                                    )}
                                    <span className="text-white/30 text-[10px] text-center mt-3">JPEG, PNG, WebP до 2 МБ</span>
                                    {errors.avatar && <p className="text-red-400 text-xs mt-2 text-center">{errors.avatar}</p>}
                                </div>
                                <div className="md:col-span-8 space-y-5 md:space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                        <div>
                                            <label className="text-white/70 text-sm font-medium block mb-1.5">Ваше имя *</label>
                                            <input
                                                type="text"
                                                value={form.name}
                                                onChange={(e) => handleChange('name', e.target.value)}
                                                placeholder="Иван Иванов"
                                                className={`w-full px-4 py-3 bg-black/40 border rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none transition-colors ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-white/30'}`}
                                            />
                                            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <label className="text-white/70 text-sm font-medium block mb-1.5">Компания <span className="text-white/30 font-normal">(необязательно)</span></label>
                                            <input
                                                type="text"
                                                value={form.nameCompany}
                                                onChange={(e) => handleChange('nameCompany', e.target.value)}
                                                placeholder="Название компании"
                                                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-white/70 text-sm font-medium block mb-1.5">Направление</label>
                                        <div className="flex flex-wrap gap-2">
                                            {categories.map((cat) => (
                                                <button
                                                    key={cat}
                                                    type="button"
                                                    onClick={() => handleChange('category', cat)}
                                                    className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-all duration-300 cursor-pointer ${form.category === cat
                                                        ? "bg-white text-black border-white"
                                                        : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:border-white/25"
                                                        }`}
                                                >
                                                    {cat}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-white/70 text-sm font-medium block mb-1.5">Оценка *</label>
                                        <div className="flex items-center gap-1.5">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() => handleChange('estimation', star)}
                                                    className="cursor-pointer focus:outline-none transition-transform hover:scale-110"
                                                >
                                                    <FaStar
                                                        className={`size-8 md:size-9 transition-colors duration-200 ${Number(form.estimation) >= star ? "text-yellow-400" : "text-white/15"
                                                            }`}
                                                    />
                                                </button>
                                            ))}
                                            <span className="text-white/40 text-sm ml-3">
                                                {Number(form.estimation) > 0 ? `${form.estimation} из 5` : "Выберите оценку"}
                                            </span>
                                        </div>
                                        {errors.estimation && <p className="text-red-400 text-xs mt-1">{errors.estimation}</p>}
                                    </div>

                                    <div>
                                        <label className="text-white/70 text-sm font-medium block mb-1.5">Отзыв *</label>
                                        <textarea
                                            rows={4}
                                            value={form.description}
                                            onChange={(e) => handleChange('description', e.target.value)}
                                            placeholder="Расскажите, что понравилось, как проходила работа..."
                                            className={`w-full px-4 py-3 bg-black/40 border rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none transition-colors resize-y ${errors.description ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-white/30'}`}
                                        />
                                        {errors.description && <p className="text-red-400 text-xs mt-1">{errors.description}</p>}
                                    </div>

                                    <div>
                                        <label className="text-white/70 text-sm font-medium block mb-1.5">
                                            Ссылка на ваш проект <span className="text-white/30 font-normal">(необязательно)</span>
                                        </label>
                                        <input
                                            type="url"
                                            value={form.caseHref}
                                            onChange={(e) => handleChange('caseHref', e.target.value)}
                                            placeholder="https://..."
                                            className={`w-full px-4 py-3 bg-black/40 border rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none transition-colors ${errors.caseHref ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-white/30'}`}
                                        />
                                        {errors.caseHref && <p className="text-red-400 text-xs mt-1">{errors.caseHref}</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={form.consent}
                                        onChange={(e) => handleChange('consent', e.target.checked)}
                                        className="mt-0.5 w-4 h-4 bg-black/40 border border-white/20 rounded checked:bg-white checked:border-white focus:ring-0 focus:ring-offset-0 accent-white cursor-pointer"
                                    />
                                    <span className="text-white/50 text-xs md:text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                                        Я согласен на обработку персональных данных в соответствии с{" "}
                                        <a
                                            href="/personal-data-processing-policy"
                                            target="_blank"
                                            className="text-white/80 hover:text-white underline underline-offset-2 transition-colors"
                                        >
                                            Политикой обработки персональных данных
                                        </a>
                                        .
                                    </span>
                                </label>
                                {errors.consent && <p className="text-red-400 text-xs mt-1">{errors.consent}</p>}
                            </div>

                            <div className="mt-8 md:mt-10">
                                <button
                                    type="submit"
                                    className="group relative w-full inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-xl font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.01] active:scale-95 cursor-pointer"
                                >
                                    <span className="relative z-10 text-base">Отправить отзыв</span>
                                    <span className="absolute inset-0 bg-linear-to-r from-gray-200 to-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}