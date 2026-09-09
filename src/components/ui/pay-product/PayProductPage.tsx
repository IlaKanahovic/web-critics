import { HeaderDesktop } from "@/components/layout/headerDesktop/HeaderDesktop";
import { HeaderMobile } from "@/components/layout/headerMobile/HeaderMobile";
import { PayProductComponent } from "./PayProductComponent";
import { Footer } from "@/components/layout/footer/Footer";

export function PayProductPage({ group, product }: { group: string; product: string }) {
    return (
        <div className="relative min-h-screen bg-black">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-linear-to-br from-[#0a0a0a] via-[#141414] to-[#0a0a0a]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-purple-500/10 blur-3xl" />
                <div className="absolute top-0 right-0 w-100 h-100 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-100 h-100 rounded-full bg-rose-500/10 blur-3xl" />
                <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-orange-500/10 blur-3xl" />
                <div className="absolute top-1/3 right-1/4 w-60 h-60 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="absolute bottom-1/3 left-1/4 w-60 h-60 rounded-full bg-yellow-500/10 blur-3xl" />
            </div>
            <div className="relative z-10 pt-18">
                <div className="mobile-only">
                    <HeaderMobile />
                </div>
                <div className="desktop-only">
                    <HeaderDesktop />
                </div>
                <PayProductComponent />
                <Footer />
            </div>
        </div>
    )
}