import type { Metadata } from "next";
import WebDevelopmentContent from "./WebDevelopmentContent";

export const metadata: Metadata = {
    title: "Веб-разработка под задачи бизнеса",
    description: "Проектируем и разрабатываем сайты, интернет-магазины, веб-приложения и интерфейсы. Подбираем решение под процессы и цели бизнеса.",
    alternates: { canonical: "/services/web-development" },
};

export default function WebDevelopment() {
    return <WebDevelopmentContent />;
}
