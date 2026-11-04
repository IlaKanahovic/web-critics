import { prisma } from "@/lib/db/prisma";
import { MainPage } from "./componentsByMainPage/MainPage";

export default async function Home() {
  const projectsLength = await prisma.case.findMany()

  return (
    <div className="">
      <MainPage projectsLength={projectsLength.length}/>
    </div>
  )
}
