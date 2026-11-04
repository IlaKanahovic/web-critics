import { prisma } from "@/lib/db/prisma"
import { LeadsTable } from "./LeadsTable"
import { AdminShell } from "@/components/admin/AdminShell"
import { verifySession } from "@/lib/auth/session"
import { redirect } from "next/navigation"

export default async function Leads() {
    const session = await verifySession()
    if (!session || session.role !== 'ADMIN') redirect('/admin/login89825012228ila')

    const leads = await prisma.lead.findMany({ include: { owner: true }, orderBy: { createdAt: 'desc' } })

    return (
        <AdminShell>
            <LeadsTable leads={leads} />
        </AdminShell>
    )
}