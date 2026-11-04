import { AdminShell } from "@/components/admin/AdminShell"
import { GetAllCases } from "@/lib/actions/admin/case"
import { verifySession } from "@/lib/auth/session"
import { redirect } from "next/navigation"
import { AddCaseForm } from "./AddCaseForm"
import { AllCases } from "./AllCases"


export default async function Cases() {
    const session = await verifySession()
    if (!session || session.role !== 'ADMIN') redirect('/admin/login89825012228ila')

    const cases = await GetAllCases()

    return (
        <AdminShell>
            <AddCaseForm />
            <AllCases cases={cases} />
        </AdminShell>
    )
}