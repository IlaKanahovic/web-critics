import DOMPurify from "isomorphic-dompurify"
import * as z from "zod"

const categories = [
    "Готовые сайты",
    "Боты",
    "Готовые инструменты",
    "Автоматизация",
    "Веб-разработка",
    "Рост и аналитика",
    "AI",
    "Надежность и масштабирование"
] as const

const sanitizeText = (value: string) => DOMPurify.sanitize(value, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: []
}).trim()

const validImageDataUrl = (value: string) => {
    const match = value.match(/^data:(image\/(?:jpeg|png|webp));base64,([A-Za-z0-9+/]+={0,2})$/)
    if (!match) return false

    const [, mimeType, base64] = match
    const bytes = Buffer.from(base64, 'base64')

    if (bytes.length > 2 * 1024 * 1024) return false

    if (mimeType === 'image/jpeg') {
        return bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff
    }

    if (mimeType === 'image/png') {
        return Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]).equals(bytes.subarray(0, 8))
    }

    return bytes.subarray(0, 4).toString() === 'RIFF' && bytes.subarray(8, 12).toString() === 'WEBP'
}

export const Review = z.object({
    name: z
        .string()
        .max(200)
        .transform(sanitizeText)
        .refine((v) => v.split(/\s+/).filter(Boolean).length >= 2, {
            message: 'Поле должно содержать минимум два слова (ФИО)'
        }),

    nameCompany: z
        .string()
        .max(200)
        .transform((v) => sanitizeText(v) || null)
        .nullable()
        .optional()
        .default(null),

    avatar: z
        .union([
            z.literal(''),
            z.string()
                .max(3_000_000)
                .refine(validImageDataUrl, {
                    message: 'Допустимы только корректные изображения JPEG, PNG и WebP'
                })
        ])
        .transform((v) => v || null)
        .nullable()
        .optional()
        .default(null),

    estimation: z
        .coerce
        .number()
        .int()
        .min(1, { message: 'Оценка должна быть от 1 до 5' })
        .max(5, { message: 'Оценка должна быть от 1 до 5' })
        .transform(String),

    category: z
        .enum(categories),

    description: z
        .string()
        .max(2000)
        .trim()
        .min(10, { message: 'Отзыв слишком короткий (минимум 10 символов)' })
        .transform((v) => sanitizeText(v))
        .refine((v) => v.length >= 10, {
            message: 'Отзыв слишком короткий (минимум 10 символов)'
        }),

    caseHref: z
        .union([
            z.literal(''),
            z.url({ protocol: /^https?$/ })
        ])
        .transform((v) => v || null)
        .nullable()
        .optional()
        .default(null),

    consent: z
        .literal(true, { message: 'Необходимо согласие на обработку данных' }),

    website: z
        .string()
        .max(200)
        .optional()
        .default('')
})

export type ReviewInput = z.infer<typeof Review>
