'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Article } from "../../../../../prisma/generated/prisma"
import { DeleteArticle } from '@/lib/actions/admin/article'
import { searchWithinTheTextBlog } from '@/lib/utils/SearchWithinTheTextBlog'

interface IAllArticles {
    articles: Article[] | null
}

export function AllArticles({ articles }: IAllArticles) {
    const router = useRouter()
    const [searchText, setSearchText] = useState('')
    const [deleteId, setDeleteId] = useState<string | null>(null)
    const [isDeleting, setIsDeleting] = useState(false)

    const filteredArticles = searchWithinTheTextBlog(searchText, articles)

    const handleDelete = async () => {
        if (!deleteId) return
        setIsDeleting(true)
        try {
            await DeleteArticle(deleteId)
            setDeleteId(null)
            router.refresh()
        } catch (err) {
            console.error(err)
            alert('Ошибка при удалении статьи')
        } finally {
            setIsDeleting(false)
        }
    }

    return (
        <div className="w-full max-w-4xl mx-auto mt-12 mb-20 overflow-hidden">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2 className="text-white text-font-space text-2xl">Все статьи</h2>
                <input
                    type="text"
                    placeholder="Поиск по статьям..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="px-4 py-2.5 bg-[#111] border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-white/30 w-full sm:w-72 transition-colors"
                />
            </div>

            <div className="bg-[#111] border border-white/10 rounded-xl overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse whitespace-nowrap">
                        <thead>
                            <tr className="border-b border-white/10 bg-black/40 text-[11px] uppercase tracking-wider text-white/40">
                                <th className="px-5 py-4 font-medium w-full">Название</th>
                                <th className="px-5 py-4 font-medium">Тип</th>
                                <th className="px-5 py-4 font-medium">Дата</th>
                                <th className="px-5 py-4 font-medium">Автор</th>
                                <th className="px-5 py-4 font-medium text-right">Действия</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-white/70 divide-y divide-white/5">
                            {!filteredArticles || filteredArticles.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-5 py-12 text-center text-white/40">
                                        Статьи не найдены
                                    </td>
                                </tr>
                            ) : (
                                filteredArticles.map((article: Article) => (
                                    <tr key={article.id} className="hover:bg-white/2 transition-colors group">
                                        <td className="px-5 py-4 max-w-xs truncate" title={article.title}>
                                            <span className="text-white/90 font-medium">{article.title}</span>
                                        </td>
                                        <td className="px-5 py-4">
                                            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/60">
                                                {article.type}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-white/50 text-xs">
                                            {new Date(article.date).toLocaleDateString('ru-RU')}
                                        </td>
                                        <td className="px-5 py-4 text-white/80">
                                            {article.nameAuthor}
                                        </td>
                                        <td className="px-5 py-4 text-right">
                                            <button
                                                onClick={() => setDeleteId(article.id)}
                                                className="px-3 py-1.5 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-xs font-medium hover:bg-red-500/20 transition-all cursor-pointer"
                                            >
                                                Удалить
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {deleteId && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="relative w-full max-w-sm bg-[#111] border border-white/10 rounded-2xl shadow-2xl p-6">
                        <h3 className="text-white text-lg font-medium mb-2">Удалить статью?</h3>
                        <p className="text-white/50 text-sm mb-6">
                            Вы уверены, что хотите удалить эту статью? Это действие нельзя отменить.
                        </p>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setDeleteId(null)}
                                disabled={isDeleting}
                                className="px-4 py-2 rounded-lg text-white/70 hover:text-white border border-white/10 hover:bg-white/5 transition-all text-sm font-medium disabled:opacity-50 cursor-pointer"
                            >
                                Отмена
                            </button>
                            <button
                                onClick={handleDelete}
                                disabled={isDeleting}
                                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-all text-sm font-medium disabled:opacity-50 flex items-center gap-2 cursor-pointer"
                            >
                                {isDeleting ? (
                                    <>
                                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                        Удаление...
                                    </>
                                ) : (
                                    'Удалить'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}