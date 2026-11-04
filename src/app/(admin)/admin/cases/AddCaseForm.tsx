'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AddCase } from '@/lib/actions/admin/case'

const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result as string)
        reader.onerror = (error) => reject(error)
    })
}

export function AddCaseForm() {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState<Record<string, string[] | undefined>>({})

    const [tasks, setTasks] = useState<string[]>([''])
    const [popups, setPopups] = useState<string[]>([''])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setErrors({})

        const formData = new FormData(e.currentTarget)
        const previewBgFile = formData.get('previewBg') as File
        const previewProjectFiles = formData.getAll('previewProject') as File[]

        try {
            let previewBgBase64 = ''
            if (previewBgFile && previewBgFile.size > 0) {
                previewBgBase64 = await fileToBase64(previewBgFile)
            }

            const previewProjectBase64: string[] = []
            for (const file of previewProjectFiles) {
                if (file.size > 0) {
                    const base64 = await fileToBase64(file)
                    previewProjectBase64.push(base64)
                }
            }

            const payload: any = {
                title: formData.get('title') as string,
                service: formData.get('service') as string,
                type: formData.get('type') as string,
                previewBg: previewBgBase64,
                previewProject: previewProjectBase64,
                url: formData.get('url') as string,
                tasks: tasks.filter((t) => t.trim() !== ''),
                popups: popups.filter((p) => p.trim() !== ''),
                clientsObjective: formData.get('clientsObjective') as string,
            }

            const res = await AddCase(payload)

            if (res.error) {
                if (res.error.fields) {
                    setErrors(res.error.fields)
                } else {
                    alert(res.error.message)
                }
            } else if (res.data) {
                router.push('/admin/cases')
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
            <h2 className="text-white text-font-space text-2xl mb-6">Добавление нового кейса</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                    <label className="block text-white/70 text-sm mb-1.5">Заголовок кейса</label>
                    <input
                        name="title"
                        type="text"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 bg-black/40 border rounded-lg text-white focus:outline-none transition-colors ${errors.title ? 'border-red-500' : 'border-white/10 focus:border-white/30'}`}
                        placeholder="Например: Разработка интернет-магазина"
                    />
                    {errors.title && <p className="text-red-400 text-xs mt-1">{errors.title[0]}</p>}
                </div>

                <div>
                    <label className="block text-white/70 text-sm mb-1.5">Услуга</label>
                    <input
                        name="service"
                        type="text"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 bg-black/40 border rounded-lg text-white focus:outline-none transition-colors ${errors.service ? 'border-red-500' : 'border-white/10 focus:border-white/30'}`}
                        placeholder="Веб-разработка"
                    />
                    {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service[0]}</p>}
                </div>

                <div>
                    <label className="block text-white/70 text-sm mb-1.5">Тип кейса</label>
                    <input
                        name="type"
                        type="text"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 bg-black/40 border rounded-lg text-white focus:outline-none transition-colors ${errors.type ? 'border-red-500' : 'border-white/10 focus:border-white/30'}`}
                        placeholder="E-commerce"
                    />
                    {errors.type && <p className="text-red-400 text-xs mt-1">{errors.type[0]}</p>}
                </div>

                <div className="md:col-span-2">
                    <label className="block text-white/70 text-sm mb-1.5">Ссылка на проект (URL)</label>
                    <input
                        name="url"
                        type="url"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 bg-black/40 border rounded-lg text-white focus:outline-none transition-colors ${errors.url ? 'border-red-500' : 'border-white/10 focus:border-white/30'}`}
                        placeholder="https://example.com"
                    />
                    {errors.url && <p className="text-red-400 text-xs mt-1">{errors.url[0]}</p>}
                </div>

                <div className="md:col-span-2">
                    <label className="block text-white/70 text-sm mb-1.5">Фоновое изображение (JPEG, PNG, WebP)</label>
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
                    <label className="block text-white/70 text-sm mb-1.5">Изображения проекта (ровно 3 файла)</label>
                    <input
                        name="previewProject"
                        type="file"
                        multiple
                        accept="image/jpeg, image/png, image/webp"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-2.5 bg-black/40 border rounded-lg text-white/60 text-sm file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-medium file:bg-white/10 file:text-white hover:file:bg-white/20 transition-colors ${errors.previewProject ? 'border-red-500' : 'border-white/10 focus:border-white/30'}`}
                    />
                    {errors.previewProject && <p className="text-red-400 text-xs mt-1">{errors.previewProject[0]}</p>}
                </div>

                <div className="md:col-span-2">
                    <label className="block text-white/70 text-sm mb-1.5">Цель клиента</label>
                    <textarea
                        name="clientsObjective"
                        rows={3}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 bg-black/40 border rounded-lg text-white focus:outline-none transition-colors resize-y ${errors.clientsObjective ? 'border-red-500' : 'border-white/10 focus:border-white/30'}`}
                        placeholder="Описание задачи, которая стояла перед нами..."
                    />
                    {errors.clientsObjective && <p className="text-red-400 text-xs mt-1">{errors.clientsObjective[0]}</p>}
                </div>

                <div className="md:col-span-2">
                    <label className="block text-white/70 text-sm mb-1.5">Задачи (список)</label>
                    <div className="space-y-2">
                        {tasks.map((task, i) => (
                            <div key={i} className="flex gap-2">
                                <input
                                    value={task}
                                    onChange={(e) => {
                                        const newTasks = [...tasks]
                                        newTasks[i] = e.target.value
                                        setTasks(newTasks)
                                    }}
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-white/30"
                                    placeholder={`Задача ${i + 1}`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setTasks(tasks.filter((_, idx) => idx !== i))}
                                    className="px-3 py-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-lg hover:bg-red-500/20 transition-colors"
                                >
                                    X
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => setTasks([...tasks, ''])}
                            className="px-4 py-2 bg-white/5 border border-white/10 text-white/70 rounded-lg text-sm hover:bg-white/10 transition-colors"
                        >
                            + Добавить задачу
                        </button>
                    </div>
                    {errors.tasks && <p className="text-red-400 text-xs mt-1">{errors.tasks[0]}</p>}
                </div>

                <div className="md:col-span-2">
                    <label className="block text-white/70 text-sm mb-1.5">Теги / Попапы (короткие тексты)</label>
                    <div className="space-y-2">
                        {popups.map((popup, i) => (
                            <div key={i} className="flex gap-2">
                                <input
                                    value={popup}
                                    onChange={(e) => {
                                        const newPopups = [...popups]
                                        newPopups[i] = e.target.value
                                        setPopups(newPopups)
                                    }}
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-white/30"
                                    placeholder={`Тег ${i + 1}`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setPopups(popups.filter((_, idx) => idx !== i))}
                                    className="px-3 py-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-lg hover:bg-red-500/20 transition-colors"
                                >
                                    X
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => setPopups([...popups, ''])}
                            className="px-4 py-2 bg-white/5 border border-white/10 text-white/70 rounded-lg text-sm hover:bg-white/10 transition-colors"
                        >
                            + Добавить тег
                        </button>
                    </div>
                    {errors.popups && <p className="text-red-400 text-xs mt-1">{errors.popups[0]}</p>}
                </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-white text-black font-medium rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                    {isSubmitting ? 'Сохранение...' : 'Опубликовать кейс'}
                </button>
            </div>
        </form>
    )
}