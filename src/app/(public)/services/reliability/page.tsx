import type { Metadata } from "next";
import ReliabilityContent from "./ReliabilityContent";

export const metadata: Metadata = {
    title: "Аудит надёжности цифровых продуктов",
    description: "Проверяем стабильность, безопасность и архитектуру цифровых продуктов. Помогаем выявить слабые места и подготовить систему к росту нагрузки.",
    alternates: { canonical: "/services/reliability" },
};

export default function Reliability() {
    return <ReliabilityContent />;
}
