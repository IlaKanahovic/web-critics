import { items } from "@/constants/heroRight";

export function HeroRight() {
    return (
        <div className="h-full flex items-cente pt-6 md:pt-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-[#111111] light:bg-white light:shadow-card border border-white/10 light:border-line rounded-xl p-5 transition-colors hover:border-white/30 light:hover:border-accent/40"
                    >
                        <div className="flex items-start gap-3">
                            <div>
                                <p className="text-white light:text-ink text-sm md:text-base font-semibold">{item.title}</p>
                                <p className="text-white light:text-ink text-sm md:text-base">{item.subtitle}</p>
                                <p className="text-white/50 light:text-ink-secondary text-xs md:text-sm leading-relaxed mt-1">{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}