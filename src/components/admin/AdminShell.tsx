'use client'

import type { ReactNode } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { logout } from '@/lib/auth/logout'
import { Users, FileText, Briefcase, LogOut, Menu, X } from 'lucide-react'

export function AdminShell({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)

    const closeMenu = () => setIsOpen(false)

    return (
        <div className="flex h-screen overflow-hidden bg-black text-white relative">
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                    onClick={closeMenu}
                />
            )}

            <aside className={`fixed inset-y-0 left-0 z-50 w-64 border-r border-[#222] bg-[#050505] flex flex-col shrink-0 transform transition-transform duration-300 md:relative md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-6 border-b border-[#222] flex items-center justify-between">
                    <Link href="/" target="_blank" className="text-white tracking-widest uppercase text-sm hover:text-violet-400 transition-colors">
                        WebCRitic / Admin
                    </Link>
                    <button onClick={closeMenu} className="md:hidden text-[#888] hover:text-white transition-colors">
                        <X size={20} />
                    </button>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    <Link href="/admin/leads" onClick={closeMenu} className="flex items-center gap-3 px-3 py-2.5 text-sm text-[#888] hover:text-white hover:bg-[#111] rounded transition-all group">
                        <Users size={16} className="group-hover:text-violet-400 transition-colors" />
                        Заявки (Лиды)
                    </Link>
                    <Link href="/admin/articles" onClick={closeMenu} className="flex items-center gap-3 px-3 py-2.5 text-sm text-[#888] hover:text-white hover:bg-[#111] rounded transition-all group">
                        <FileText size={16} className="group-hover:text-violet-400 transition-colors" />
                        Статьи
                    </Link>
                    <Link href="/admin/cases" onClick={closeMenu} className="flex items-center gap-3 px-3 py-2.5 text-sm text-[#888] hover:text-white hover:bg-[#111] rounded transition-all group">
                        <Briefcase size={16} className="group-hover:text-violet-400 transition-colors" />
                        Кейсы
                    </Link>
                </nav>

                <div className="p-4 border-t border-[#222]">
                    <form action={logout}>
                        <button type="submit" className="flex items-center gap-3 px-3 py-2.5 text-sm text-[#f55] hover:bg-[#f55]/10 w-full text-left rounded transition-all group">
                            <LogOut size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Выйти
                        </button>
                    </form>
                </div>
            </aside>

            <div className="flex-1 flex flex-col overflow-hidden relative">
                <header className="md:hidden flex items-center justify-between p-4 border-b border-[#222] bg-[#050505] z-30 shrink-0">
                    <Link href="/" target="_blank" className="text-white tracking-widest uppercase text-sm">
                        WebCRitic / Admin
                    </Link>
                    <button onClick={() => setIsOpen(true)} className="text-[#888] hover:text-white transition-colors p-1">
                        <Menu size={24} />
                    </button>
                </header>

                <main className="flex-1 overflow-y-auto relative">
                    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(167,139,250,0.03) 0%, transparent 50%)' }} />
                    <div className="relative z-10 p-4 md:p-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}