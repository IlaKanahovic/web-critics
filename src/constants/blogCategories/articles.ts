
export const ARTICLE_TYPES = [
    { value: "cases", label: "Кейсы клиентов" },
    { value: "business-solutions", label: "Бизнес-решения" },
    { value: "technologies", label: "Технологии WebCRitics" },
    { value: "stocks", label: "Акции" },
    { value: "guides", label: "Руководства" }
] as const

export const ARTICLE_TYPE_LABELS: Record<string, string> = Object.fromEntries(
    ARTICLE_TYPES.map((item) => [item.value, item.label])
)