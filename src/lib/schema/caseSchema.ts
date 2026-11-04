import DOMPurify from "isomorphic-dompurify"
import * as z from "zod"

const sanitizeText = (value: string) => DOMPurify.sanitize(value, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: []
}).trim()

const validImageDataUrl = (value: string) => {
    if (!value) return false
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

export const CaseSchema = z.object({
    title: z
        .string()
        .min(5, { message: 'Заголовок слишком короткий (минимум 5 символов)' })
        .max(200, { message: 'Заголовок слишком длинный (максимум 200 символов)' })
        .transform(sanitizeText),

    service: z
        .string()
        .min(2, { message: 'Укажите услугу' })
        .max(100)
        .transform(sanitizeText),

    type: z
        .string()
        .min(2, { message: 'Укажите тип' })
        .max(100)
        .transform(sanitizeText),

    previewBg: z
        .string({ error: 'Загрузите фоновое изображение' })
        .min(1, { message: 'Загрузите фоновое изображение' })
        .max(3_000_000, { message: 'Файл слишком большой' })
        .refine(validImageDataUrl, {
            message: 'Допустимы только корректные изображения JPEG, PNG и WebP до 2 МБ'
        }),

    previewProject: z
        .array(
            z.string().refine(validImageDataUrl, {
                message: 'Допустимы только корректные изображения JPEG, PNG и WebP до 2 МБ'
            })
        )
        .length(3, { message: 'Необходимо загрузить ровно 3 изображения проекта' }),

    url: z
        .union([
            z.literal(''),
            z.url({ protocol: /^https?$/ })
        ])
        .transform((v) => v || null)
        .nullable()
        .optional()
        .default(null),

    tasks: z
        .array(
            z.string()
                .min(2, { message: 'Задача слишком короткая' })
                .max(200, { message: 'Задача слишком длинная (максимум 200 символов)' })
                .transform(sanitizeText)
        )
        .min(1, { message: 'Добавьте хотя бы одну задачу' }),

    popups: z
        .array(
            z.string()
                .min(1, { message: 'Текст не может быть пустым' })
                .max(50, { message: 'Текст слишком длинный (максимум 50 символов)' })
                .transform(sanitizeText)
        )
        .default([]),

    clientsObjective: z
        .string()
        .min(10, { message: 'Цель клиента слишком короткая (минимум 10 символов)' })
        .max(2000, { message: 'Цель клиента слишком длинная (максимум 2000 символов)' })
        .transform(sanitizeText)
})

export type CaseInput = z.infer<typeof CaseSchema>