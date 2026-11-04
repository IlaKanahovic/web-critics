import type { IProjectsLength } from "../MainPage"
import { HeroLeft } from "./HeroLeft"
import { HeroRight } from "./HeroRight"

export function Hero({ projectsLength }: IProjectsLength) {
    return (
        <div className="container grid grid-cols-1 lg:grid-cols-5 gap-8 pt-8">
            <div className="lg:col-span-3">
                <HeroLeft projectsLength={projectsLength}/>
            </div>
            <div className="lg:col-span-2">
                <HeroRight />
            </div>
        </div>
    )
}