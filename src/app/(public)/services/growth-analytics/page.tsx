import type { Metadata } from "next";
import GrowthAnalyticsContent from "./GrowthAnalyticsContent";

export const metadata: Metadata = {
    title: "Аналитика и рост цифровых продуктов",
    description: "Анализируем сайт и путь пользователя, чтобы найти точки роста. Помогаем выявить проблемы с конверсией и поисковой видимостью.",
    alternates: { canonical: "/services/growth-analytics" },
};

export default function GrowthAnalytics() {
    return <GrowthAnalyticsContent />;
}
