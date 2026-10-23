import * as z from "zod"

export const Purchases = z.object({
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

    description: z
        .string()
        .trim()
        .max(2000)
        .optional()
        .default(''),

    nameProduct: z
        .string()
        .min(1)
        .trim(),

    price: z
        .number()
        .int()
        .positive(),

    format: z
        .enum(['ONE_TIME', 'SUBSCRIPTION']),

    offer: z
        .literal(true),

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

})

export type PurchaseInput = z.infer<typeof Purchases>