import type { ReactNode } from 'react'
import Link from 'next/link'
import { logout } from '@/lib/auth/logout'
import { Users, FileText, Briefcase, LogOut } from 'lucide-react'

export function AdminShell({ children }: { children: ReactNode }) {
    return (
        <div className="flex h-screen overflow-hidden">
            <aside className="w-64 border-r border-[#222] bg-[#050505] flex flex-col shrink-0 z-20 relative">
                <div className="p-6 border-b border-[#222]">
                    <Link href="/" target="_blank" className="text-white tracking-widest uppercase text-sm hover:text-violet-400 transition-colors">
                        WebCRitic / Admin
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    <Link href="/admin/leads" className="flex items-center gap-3 px-3 py-2.5 text-sm text-[#888] hover:text-white hover:bg-[#111] rounded transition-all group">
                        <Users size={16} className="group-hover:text-violet-400 transition-colors" />
                        Заявки (Лиды)
                    </Link>
                    <Link href="/admin/articles" className="flex items-center gap-3 px-3 py-2.5 text-sm text-[#888] hover:text-white hover:bg-[#111] rounded transition-all group">
                        <FileText size={16} className="group-hover:text-violet-400 transition-colors" />
                        Статьи
                    </Link>
                    <Link href="/admin/cases" className="flex items-center gap-3 px-3 py-2.5 text-sm text-[#888] hover:text-white hover:bg-[#111] rounded transition-all group">
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
            <main className="flex-1 overflow-y-auto relative">
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(167,139,250,0.03) 0%, transparent 50%)' }} />
                <div className="relative z-10 p-8">
                    {children}
                </div>
            </main>
        </div>
    )
}