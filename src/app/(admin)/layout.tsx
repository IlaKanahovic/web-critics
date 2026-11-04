import type { ReactNode } from 'react'
import '../../globals.css'

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru" className="h-full">
            <body className="h-full m-0 p-0 overflow-hidden bg-black text-white antialiased">
                {children}
            </body>
        </html>
    )
}