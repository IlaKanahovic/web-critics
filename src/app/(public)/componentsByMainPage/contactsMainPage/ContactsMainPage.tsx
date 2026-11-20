'use client'

import { LeadForm } from "@/components/ui/form/LeadForm"

export function ContactsMainPage() {

    return (
        <>
            <style data-home-contacts-theme>{`
                /* LeadForm shares its markup with /contacts. Apply these colors to its home instance. */
                .light :is(
                    [data-home-contacts-theme] + div,
                    [data-home-contacts-theme] + div + [class~="z-10000"]
                ) {
                    [class~="text-white"] {
                        color: var(--color-ink);
                    }

                    :is([class~="text-white/50"], [class~="text-white/60"], [class~="text-white/65"],
                        [class~="text-white/70"], [class~="text-white/80"]) {
                        color: var(--color-ink-secondary);
                    }

                    :is([class~="text-white/30"], [class~="text-white/40"]) {
                        color: var(--color-ink-muted);
                    }

                    :is([class~="text-red-400"], [class~="text-green-400"]) {
                        color: var(--color-ink);
                    }

                    [class~="bg-[#111111]"] {
                        background-color: #FFFFFF;
                        box-shadow: var(--shadow-card);
                    }

                    [class~="hover:shadow-2xl"]:hover {
                        box-shadow: var(--shadow-card-hover);
                    }

                    [class~="bg-white/5"] {
                        background-color: var(--color-canvas);
                    }

                    :is([class~="border-white/8"], [class~="border-white/10"], [class~="border-white/20"]) {
                        border-color: var(--color-line);
                    }

                    :is([class~="hover:border-white/25"], [class~="hover:border-white/30"],
                        [class~="hover:border-white/40"]):hover {
                        border-color: var(--color-accent);
                    }

                    [class~="hover:bg-white/10"]:hover {
                        background-color: #FFFFFF;
                    }

                    [class~="before:bg-white/20"]::before {
                        background-color: rgb(37 99 235 / 8%);
                    }

                    [class~="after:via-white/30"]::after,
                    [class~="via-violet-500/5"] {
                        background-image: linear-gradient(90deg, transparent, rgb(37 99 235 / 15%), transparent);
                    }

                    [class~="bg-white/40"],
                    input[type="range"]::-webkit-slider-thumb {
                        background-color: var(--color-accent);
                    }

                    input[type="range"] {
                        background-color: var(--color-line);
                        accent-color: var(--color-accent);
                    }

                    :is(input, textarea)[class~="bg-black/40"] {
                        background-color: var(--color-canvas);
                    }

                    :is(input, textarea)::placeholder {
                        color: var(--color-ink-muted);
                    }

                    :is(input, textarea)[class~="focus:border-white/30"]:focus {
                        border-color: var(--color-accent);
                    }

                    input[type="checkbox"] {
                        accent-color: var(--color-accent);
                    }

                    input[type="checkbox"]:checked {
                        background-color: var(--color-accent);
                        border-color: var(--color-accent);
                    }

                    a[class~="text-white/90"] {
                        color: var(--color-accent);
                    }

                    a[class~="text-white/90"]:hover,
                    .group:hover :is([class~="group-hover:text-white"], [class~="group-hover:text-white/90"],
                        [class~="group-hover:text-violet-300"]) {
                        color: var(--color-accent-hover);
                    }

                    .group:hover [class~="group-hover:border-violet-400/40"] {
                        border-color: var(--color-accent);
                    }

                    button[type="button"][class~="bg-white"] {
                        background-color: var(--color-accent);
                        border-color: var(--color-accent);
                        color: #FFFFFF;
                        box-shadow: 0 1px 3px rgb(15 23 42 / 10%);
                    }

                }
            `}</style>
            <LeadForm />
        </>
    )
}
