import type { Metadata } from "next";
import { prisma } from "@/lib/db/prisma";
import { MainPage } from "./componentsByMainPage/MainPage";

export const metadata: Metadata = {
    title: "Разработка сайтов и IT-решений для бизнеса",
    description: "Разрабатываем сайты, веб-приложения и цифровые продукты для бизнеса. Помогаем автоматизировать процессы, внедрить ИИ и найти точки роста.",
    alternates: { canonical: "/" },
};

export default async function Home() {
  const projectsLength = await prisma.case.findMany()

  return (
    <div className="">
      <MainPage projectsLength={projectsLength.length}/>
    </div>
  )
}
