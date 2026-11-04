import { AdminShell } from "@/components/admin/AdminShell";
import { verifySession } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import { AddArticleForm } from "./AddArticleForm";
import { GetAllArticles } from "@/lib/actions/admin/article";
import { AllArticles } from "./AllArticles";


export default async function Articles() {
    const session = await verifySession()
    if (!session || session.role !== 'ADMIN') redirect('/admin/login89825012228ila')

    const articles = await GetAllArticles()

    return (
        <AdminShell>
            <AddArticleForm />
            <AllArticles articles={articles}/>
        </AdminShell>
    )
}