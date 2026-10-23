import * as z from "zod"

export const Lead = z.object({
    name: z
        .string()
        .trim()
        .refine((v) => v.split(/\s+/).filter(Boolean).length >= 2, {
            message: 'Поле должно содержать минимум два слова (ФИО)'
        }),

    phone: z
        .string()
        .transform((v) => v.replace(/[^\d]/g, ''))
        .refine((v) => v.length === 11, {
            message: "Номер телефона должен содержать 11 цифр"
        }),

    email: z
        .email({ message: 'Некорректный формат email' })
        .toLowerCase()
        .trim(),

    budgetFrom: z
        .number()
        .int()
        .min(5000, { message: "Минимальный бюджет 5000" }),

    budgetTo: z
        .number()
        .int()
        .max(1000000, { message: "Максимальный бюджет 1000000" }),

    description: z
        .string()
        .trim()
        .max(2000)
        .optional()
        .default(''),

    services: z
        .array(z.string()),

    consent: z
        .boolean()
        .refine((val) => val === true, {
            message: 'Необходимо согласие на обработку данных',
        }),

    advertisingConsent: z
        .boolean()
        .default(false),

    website: z
        .string()
        .optional()

}).refine(data => data.budgetFrom <= data.budgetTo, {
    message: "Минимальный бюджет не может быть больше максимального",
    path: ["budgetTo"]
})

export type LeadInput = z.infer<typeof Lead>