import { verifySession } from "../auth/session"

export async function checkAdmin() {
    const session = await verifySession()
    if (!session || session.role !== 'ADMIN') {
        throw new Error("Доступ запрещен")
    }
}