import { AdminShell } from "../../../components/admin/AdminShell";

export default function AdminDashboard() {
    return (
        <AdminShell>
            <div className="flex flex-col items-center justify-center h-full min-h-[60vh] text-center">
                <h1 className="text-2xl text-white uppercase tracking-widest mb-4">Система управления</h1>
                <p className="text-[#888] text-sm max-w-md">
                    Добро пожаловать в панель администратора. Выберите нужный раздел в меню слева, чтобы начать работу с заявками или контентом.
                </p>
            </div>
        </AdminShell>
    )
}