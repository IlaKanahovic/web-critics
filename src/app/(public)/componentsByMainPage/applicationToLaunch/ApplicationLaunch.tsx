import { ApplicationToLaunch } from "./ApplicationToLaunch";
import { ApplicationToLaunchMobile } from "./ApplicationToLaunchMobile";


export function ApplicationLaunch() {
    return (
        <div className="pt-60.5">
            <div className="container">
                <div className="mb-16 flex items-center gap-4">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-white/40 text-xs uppercase tracking-widest">Процесс</span>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </div>
                <h1 className="text-white text-center text-font-space text-4xl md:text-5xl">
                    От проблемы до работающего решения
                </h1>
                <div className="mobile-only">
                    <ApplicationToLaunchMobile />
                </div>
                <div className="desktop-only">
                    <ApplicationToLaunch />
                </div>
            </div>
        </div>
    )
}
