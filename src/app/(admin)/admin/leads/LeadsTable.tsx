'use client'

import { useState, useTransition, useMemo, useEffect } from 'react'
import type { Lead, User } from "../../../../../prisma/generated/prisma"
import { changeStatusLead, getUser } from "@/lib/actions/admin/leads"

interface ILeadsTable {
    leads: (Lead & { owner: User })[] | null 
}

const STATUS_OPTIONS = [
    { value: 'NEW', label: 'Новый', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
    { value: 'IN_PROGRESS', label: 'В работе', color: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' },
    { value: 'WON', label: 'Успешно', color: 'bg-green-500/10 text-green-400 border-green-500/20' },
    { value: 'LOST', label: 'Отказ', color: 'bg-red-500/10 text-red-400 border-red-500/20' },
]

function StatusSelect({ leadId, initialStatus }: { leadId: string, initialStatus: string }) {
    const [isPending, startTransition] = useTransition()
    const [status, setStatus] = useState(initialStatus)

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = e.target.value as "NEW" | "IN_PROGRESS" | "WON" | "LOST"
        const oldStatus = status
        setStatus(newStatus)

        startTransition(async () => {
            const res = await changeStatusLead({ leadId, newStatus })
            if (res?.error) {
                setStatus(oldStatus)
                alert(res.error.message)
            }
        })
    }

    const currentOption = STATUS_OPTIONS.find(o => o.value === status)

    return (
        <div className="relative inline-flex items-center">
            <select
                value={status}
                onChange={handleStatusChange}
                disabled={isPending}
                className={`appearance-none px-3 py-1.5 pr-8 rounded border text-xs font-medium cursor-pointer focus:outline-none transition-colors disabled:opacity-50 ${currentOption?.color || 'bg-white/5 text-white/70 border-white/10'
                    }`}
            >
                {STATUS_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value} className="bg-[#111] text-white">
                        {opt.label}
                    </option>
                ))}
            </select>

            <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2">
                {isPending ? (
                    <span className="block w-3 h-3 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
                ) : (
                    <svg className="w-3 h-3 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                )}
            </div>
        </div>
    )
}

function UserDetailsModal({ ownerId, onClose }: { ownerId: string, onClose: () => void }) {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        let isMounted = true
        const fetchUser = async () => {
            setIsLoading(true)
            try {
                const data = await getUser(ownerId)
                if (data && 'error' in data) {
                    setError(data.error.message)
                } else if (data) {
                    setUser(data)
                } else {
                    setError('Пользователь не найден')
                }
            } catch (err) {
                setError('Ошибка при загрузке данных')
            } finally {
                if (isMounted) setIsLoading(false)
            }
        }
        fetchUser()
        return () => { isMounted = false }
    }, [ownerId])

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
        window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [onClose])

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-md bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/20">
                    <h3 className="text-white font-medium">Информация о клиенте</h3>
                    <button
                        onClick={onClose}
                        className="text-white/40 hover:text-white transition-colors cursor-pointer"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="p-6">
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-8 text-white/40">
                            <span className="w-6 h-6 border-2 border-white/20 border-t-white/80 rounded-full animate-spin mb-3" />
                            <p className="text-sm">Загрузка данных...</p>
                        </div>
                    ) : error ? (
                        <div className="text-red-400 text-center py-4 text-sm">{error}</div>
                    ) : user ? (
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 pb-4 border-b border-white/5">
                                <div>
                                    <div className="text-white font-medium text-lg">
                                        {user.name || 'Без имени'}
                                    </div>
                                    <div className="text-white/40 text-xs mt-0.5">
                                        ID: {user.id.slice(-8)}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-3 text-sm">
                                <div className="flex justify-between items-center py-1">
                                    <span className="text-white/40">Email:</span>
                                    <a href={`mailto:${user.email}`} className="text-white/90 hover:text-white underline decoration-white/20 underline-offset-2">
                                        {user.email}
                                    </a>
                                </div>
                                <div className="flex justify-between items-center py-1">
                                    <span className="text-white/40">Телефон:</span>
                                    <a href={`tel:${user.phone}`} className="text-white/90 hover:text-white underline decoration-white/20 underline-offset-2">
                                        {user.phone || '—'}
                                    </a>
                                </div>
                                <div className="flex justify-between items-center py-1">
                                    <span className="text-white/40">Роль:</span>
                                    <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-xs text-white/70">
                                        {user.role || 'USER'}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-1">
                                    <span className="text-white/40">Регистрация:</span>
                                    <span className="text-white/70">
                                        {new Date(user.createdAt).toLocaleDateString('ru-RU')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export function LeadsTable({ leads }: ILeadsTable) {
    const [statusFilter, setStatusFilter] = useState<string>('ALL')
    const [dateSort, setDateSort] = useState<'newest' | 'oldest'>('newest')
    const [selectedOwnerId, setSelectedOwnerId] = useState<string | null>(null)

    const filteredLeads = useMemo(() => {
        if (!leads) return []

        let result = [...leads]
        if (statusFilter !== 'ALL') {
            result = result.filter(lead => lead.status === statusFilter)
        }

        result.sort((a, b) => {
            const dateA = new Date(a.createdAt).getTime()
            const dateB = new Date(b.createdAt).getTime()
            return dateSort === 'newest' ? dateB - dateA : dateA - dateB
        })

        return result
    }, [leads, statusFilter, dateSort])

    if (!leads || leads.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-white/40 bg-[#111] border border-white/10 rounded-xl">
                <svg className="w-12 h-12 mb-4 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <p className="text-sm">Заявок пока нет</p>
                <p className="text-xs text-white/20 mt-1">Как только кто-то оставит заявку, она появится здесь</p>
            </div>
        )
    }

    return (
        <>
            <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#111] p-3 border border-white/10 rounded-xl">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="appearance-none bg-black/40 border border-white/10 text-white/80 text-xs rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:border-white/30 cursor-pointer"
                            >
                                <option value="ALL">Все статусы</option>
                                {STATUS_OPTIONS.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                            <svg className="w-3 h-3 text-white/40 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <div className="relative">
                            <select
                                value={dateSort}
                                onChange={(e) => setDateSort(e.target.value as 'newest' | 'oldest')}
                                className="appearance-none bg-black/40 border border-white/10 text-white/80 text-xs rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:border-white/30 cursor-pointer"
                            >
                                <option value="newest">Сначала новые</option>
                                <option value="oldest">Сначала старые</option>
                            </select>
                            <svg className="w-3 h-3 text-white/40 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                    <div className="text-[11px] text-white/40 font-mono">
                        Найдено: {filteredLeads.length} из {leads.length}
                    </div>
                </div>

                <div className="w-full overflow-x-auto bg-[#111] border border-white/10 rounded-xl shadow-xl">
                    <table className="w-full text-left border-collapse whitespace-nowrap">
                        <thead>
                            <tr className="border-b border-white/10 bg-black/40 text-[11px] uppercase tracking-wider text-white/40">
                                <th className="px-5 py-4 font-medium">ID / Дата</th>
                                <th className="px-5 py-4 font-medium">Клиент</th>
                                <th className="px-5 py-4 font-medium">Бюджет</th>
                                <th className="px-5 py-4 font-medium">Услуги</th>
                                <th className="px-5 py-4 font-medium w-full">Описание</th>
                                <th className="px-5 py-4 font-medium">Статус</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-white/70 divide-y divide-white/5">
                            {filteredLeads.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-5 py-12 text-center text-white/40">
                                        По выбранным фильтрам заявок не найдено
                                    </td>
                                </tr>
                            ) : (
                                filteredLeads.map((lead) => (
                                    <tr key={lead.id} className="hover:bg-white/2 transition-colors group">
                                        <td className="px-5 py-4">
                                            <div className="font-mono text-xs text-white/50 group-hover:text-white/80 transition-colors">
                                                {lead.id.slice(-6)}...
                                            </div>
                                            <div className="text-[11px] text-white/40 mt-1">
                                                {new Date(lead.createdAt).toLocaleString('ru-RU', {
                                                    day: '2-digit', month: '2-digit', year: '2-digit',
                                                    hour: '2-digit', minute: '2-digit'
                                                })}
                                            </div>
                                        </td>

                                        <td className="px-5 py-4">
                                            <button
                                                onClick={() => setSelectedOwnerId(lead.ownerId)}
                                                className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white/70 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all cursor-pointer"
                                                title="Посмотреть данные клиента"
                                            >
                                                <svg className="w-3.5 h-3.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                                Клиент
                                            </button>
                                        </td>

                                        <td className="px-5 py-4">
                                            <span className="text-white/90 font-medium">
                                                {lead.budgetFrom.toLocaleString('ru-RU')} — {lead.budgetTo.toLocaleString('ru-RU')} ₽
                                            </span>
                                        </td>

                                        <td className="px-5 py-4">
                                            <div className="flex flex-wrap gap-1 max-w-50">
                                                {lead.services.length > 0 ? (
                                                    lead.services.map(s => (
                                                        <span key={s} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] text-white/60">
                                                            {s}
                                                        </span>
                                                    ))
                                                ) : (
                                                    <span className="text-white/30 text-xs">—</span>
                                                )}
                                            </div>
                                        </td>

                                        <td className="px-5 py-4 max-w-75 truncate" title={lead.description || ''}>
                                            {lead.description ? (
                                                <span className="text-white/60">{lead.description}</span>
                                            ) : (
                                                <span className="text-white/30 text-xs italic">Без описания</span>
                                            )}
                                        </td>

                                        <td className="px-5 py-4">
                                            <StatusSelect leadId={lead.id} initialStatus={lead.status} />
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {selectedOwnerId && (
                <UserDetailsModal
                    ownerId={selectedOwnerId}
                    onClose={() => setSelectedOwnerId(null)}
                />
            )}
        </>
    )
}