'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { ArticleInput } from '@/lib/schema/articleSchema'
import { AddArticle } from '@/lib/actions/admin/article'

const ARTICLE_TYPES = [
    "Кейсы клиентов",
    "Бизнес-решения",
    "Технологии WebCRitic",
    "Акции",
    "Руководства"
] as const

const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result as string)
        reader.onerror = (error) => reject(error)
    })
}

export function AddArticleForm() {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState<Record<string, string[] | undefined>>({})

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        setIsSubmitting(true)
        setErrors({})

        const formData = new FormData(form)
        const avatarFile = formData.get('avatar') as File
        const previewBgFile = formData.get('previewBg') as File

        try {
            let avatarBase64 = ''
            let previewBgBase64 = ''

            if (avatarFile && avatarFile.size > 0) {
                avatarBase64 = await fileToBase64(avatarFile)
            }
            if (previewBgFile && previewBgFile.size > 0) {
                previewBgBase64 = await fileToBase64(previewBgFile)
            }

            const payload: ArticleInput = {
                title: formData.get('title') as string,
                type: formData.get('type') as typeof ARTICLE_TYPES[number],
                description: formData.get('description') as string,
                content: formData.get('content') as string,
                nameAuthor: formData.get('nameAuthor') as string,
                readingTime: formData.get('readingTime') as string,
                avatar: avatarBase64 as any,
                previewBg: previewBgBase64 as any,
            }

            const res = await AddArticle(payload)

            if (res.error) {
                if (res.error.fields) {
                    setErrors(res.error.fields)
                } else {
                    alert(res.error.message)
                }
            } else if (res.data) {
                form.reset()
                router.push('/admin/articles')
                router.refresh()
            }
        } catch (err) {
            console.error(err)
            alert('Произошла ошибка при отправке формы')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto space-y-6 bg-[#111] border border-white/10 p-6 md:p-8 rounded-2xl shadow-xl overflow-hidden">
            <h2 className="text-white text-font-space text-2xl mb-6">Добавление новой статьи</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                    <label className="block text-white/70 text-sm mb-1.5">Заголовок статьи</label>
                    <input
                        name="title"
                        type="text"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 bg-black/40 border rounded-lg text-white focus:outline-none transition-colors ${errors.title ? 'border-red-500' : 'border-white/10 focus:border-white/30'}`}
                        placeholder="Например: Как мы увеличили конверсию в 2 раза"
                    />
                    {errors.title && <p className="text-red-400 text-xs mt-1">{errors.title[0]}</p>}
                </div>

                <div>
                    <label className="block text-white/70 text-sm mb-1.5">Тип статьи</label>
                    <div className="relative">
                        <select
                            name="type"
                            disabled={isSubmitting}
                            defaultValue=""
                            className={`w-full appearance-none px-4 py-3 bg-black/40 border rounded-lg text-white focus:outline-none transition-colors cursor-pointer ${errors.type ? 'border-red-500' : 'border-white/10 focus:border-white/30'}`}
                        >
                            <option value="" disabled>Выберите тип...</option>
                            {ARTICLE_TYPES.map(t => (
                                <option key={t} value={t} className="bg-[#111]">{t}</option>
                            ))}
                        </select>
                        <svg className="w-4 h-4 text-white/40 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    {errors.type && <p className="text-red-400 text-xs mt-1">{errors.type[0]}</p>}
                </div>

                <div>
                    <label className="block text-white/70 text-sm mb-1.5">Имя автора</label>
                    <input
                        name="nameAuthor"
                        type="text"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 bg-black/40 border rounded-lg text-white focus:outline-none transition-colors ${errors.nameAuthor ? 'border-red-500' : 'border-white/10 focus:border-white/30'}`}
                        placeholder="Иван Иванов"
                    />
                    {errors.nameAuthor && <p className="text-red-400 text-xs mt-1">{errors.nameAuthor[0]}</p>}
                </div>

                <div>
                    <label className="block text-white/70 text-sm mb-1.5">Время чтения (мин)</label>
                    <input
                        name="readingTime"
                        type="number"
                        min={1}
                        max={300}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 bg-black/40 border rounded-lg text-white focus:outline-none transition-colors ${errors.readingTime ? 'border-red-500' : 'border-white/10 focus:border-white/30'}`}
                        placeholder="5"
                    />
                    {errors.readingTime && <p className="text-red-400 text-xs mt-1">{errors.readingTime[0]}</p>}
                </div>

                <div>
                    <label className="block text-white/70 text-sm mb-1.5">Аватар автора (JPEG, PNG, WebP)</label>
                    <input
                        name="avatar"
                        type="file"
                        accept="image/jpeg, image/png, image/webp"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-2.5 bg-black/40 border rounded-lg text-white/60 text-sm file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-medium file:bg-white/10 file:text-white hover:file:bg-white/20 transition-colors ${errors.avatar ? 'border-red-500' : 'border-white/10 focus:border-white/30'}`}
                    />
                    {errors.avatar && <p className="text-red-400 text-xs mt-1">{errors.avatar[0]}</p>}
                </div>

                <div className="md:col-span-2">
                    <label className="block text-white/70 text-sm mb-1.5">Фоновое изображение статьи (JPEG, PNG, WebP)</label>
                    <input
                        name="previewBg"
                        type="file"
                        accept="image/jpeg, image/png, image/webp"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-2.5 bg-black/40 border rounded-lg text-white/60 text-sm file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-medium file:bg-white/10 file:text-white hover:file:bg-white/20 transition-colors ${errors.previewBg ? 'border-red-500' : 'border-white/10 focus:border-white/30'}`}
                    />
                    {errors.previewBg && <p className="text-red-400 text-xs mt-1">{errors.previewBg[0]}</p>}
                </div>

                <div className="md:col-span-2">
                    <label className="block text-white/70 text-sm mb-1.5">Краткое описание</label>
                    <textarea
                        name="description"
                        rows={2}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 bg-black/40 border rounded-lg text-white focus:outline-none transition-colors resize-y ${errors.description ? 'border-red-500' : 'border-white/10 focus:border-white/30'}`}
                        placeholder="Короткое описание для превью (до 500 символов)..."
                    />
                    {errors.description && <p className="text-red-400 text-xs mt-1">{errors.description[0]}</p>}
                </div>

                <div className="md:col-span-2">
                    <label className="block text-white/70 text-sm mb-1.5">Текст статьи</label>
                    <textarea
                        name="content"
                        rows={12}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 bg-black/40 border rounded-lg text-white focus:outline-none transition-colors font-mono text-sm resize-y ${errors.content ? 'border-red-500' : 'border-white/10 focus:border-white/30'}`}
                        placeholder="<p>Полный текст статьи...</p>"
                    />
                    {errors.content && <p className="text-red-400 text-xs mt-1">{errors.content[0]}</p>}
                </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-white text-black font-medium rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                    {isSubmitting ? 'Сохранение...' : 'Опубликовать статью'}
                </button>
            </div>
        </form>
    )
}