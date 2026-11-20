export function ReviewsModalStyles() {
    // The review dialog and its status popup render inside the reviews page.
    return (
        <style>{`
            .light .reviews-page .z-9999 {
                [class~="bg-black/80"] {
                    background-color: rgb(15 23 42 / 40%);
                }

                [class~="bg-[#111111]"] {
                    background-color: #fff;
                    box-shadow: var(--shadow-card-hover);
                }

                [class~="bg-violet-500/10"] {
                    background-color: rgb(37 99 235 / 10%);
                }

                :is([class~="bg-white/5"], [class~="bg-black/40"]) {
                    background-color: var(--color-canvas);
                }

                :is([class~="border-white/10"], [class~="border-white/20"]) {
                    border-color: var(--color-line);
                }

                [class~="text-white"] {
                    color: var(--color-ink);
                }

                :is([class~="text-white/50"], [class~="text-white/60"], [class~="text-white/70"]) {
                    color: var(--color-ink-secondary);
                }

                :is([class~="text-white/30"], [class~="text-white/40"]),
                input::placeholder,
                textarea::placeholder {
                    color: var(--color-ink-muted);
                }

                [class~="text-yellow-400"] {
                    color: var(--color-rating);
                }

                [class~="text-white/15"] {
                    color: var(--color-ink-muted);
                }

                p[class~="text-red-400"] {
                    color: var(--color-ink);
                }

                a[class~="text-white/80"] {
                    color: var(--color-accent);
                }

                [class~="hover:text-white"]:hover,
                .group:hover :is([class~="group-hover:text-violet-300"], [class~="group-hover:text-white/60"],
                    [class~="group-hover:text-white/70"]) {
                    color: var(--color-accent-hover);
                }

                :is([class~="hover:border-white/25"], [class~="hover:border-white/30"],
                    [class~="hover:border-violet-400/50"]):hover,
                [class~="focus:border-white/30"]:focus {
                    border-color: var(--color-accent);
                }

                :is([class~="hover:bg-white/5"], [class~="hover:bg-white/10"]):hover {
                    background-color: rgb(37 99 235 / 5%);
                }

                input[type="checkbox"] {
                    accent-color: var(--color-accent);
                }

                input[type="checkbox"]:checked,
                button[type="button"][class~="bg-white"] {
                    background-color: var(--color-accent);
                    border-color: var(--color-accent);
                    color: #fff;
                }

                button[type="submit"] {
                    --review-button-sheen: linear-gradient(180deg, rgb(255 255 255 / 18%), transparent 48%, rgb(15 23 42 / 16%));
                    --review-button-highlight: inset 0 1px 0 rgb(255 255 255 / 38%), inset 0 -1px 1px rgb(15 23 42 / 28%);

                    color: #fff;
                    background-color: var(--color-accent);
                    background-image: var(--review-button-sheen);
                    text-shadow: 0 1px 2px rgb(15 23 42 / 24%);
                    box-shadow: var(--review-button-highlight), 0 1px 2px rgb(15 23 42 / 18%), 0 4px 10px rgb(37 99 235 / 23%);
                }

                button[type="submit"]:hover:not(:disabled) {
                    background-color: var(--color-accent-hover);
                    box-shadow: var(--review-button-highlight), 0 8px 18px rgb(37 99 235 / 30%), 0 0 24px rgb(37 99 235 / 16%);
                }

                button[type="submit"]:active:not(:disabled) {
                    box-shadow: inset 0 2px 4px rgb(15 23 42 / 24%), 0 2px 4px rgb(37 99 235 / 20%);
                }

                button[type="submit"] [class~="from-gray-200"] {
                    background: var(--review-button-sheen), var(--color-accent-hover);
                }
            }
        `}</style>
    )
}
