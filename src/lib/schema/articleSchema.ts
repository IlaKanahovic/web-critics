import DOMPurify from "isomorphic-dompurify"
import * as z from "zod"

const articleTypes = [
    "cases",
    "business-solutions",
    "technologies",
    "stocks",
    "guides"
] as const

const sanitizeText = (value: string) => DOMPurify.sanitize(value, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: []
}).trim()

const sanitizeHtml = (value: string) => DOMPurify.sanitize(value, {
    ALLOWED_TAGS: ['p', 'br', 'b', 'strong', 'i', 'em', 'u', 'h2', 'h3', 'ul', 'ol', 'li', 'blockquote', 'a'],
    ALLOWED_ATTR: ['href', 'target', 'rel', 'class']
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

export const Article = z.object({
    title: z
        .string()
        .min(5, { message: 'Заголовок слишком короткий (минимум 5 символов)' })
        .max(200, { message: 'Заголовок слишком длинный (максимум 200 символов)' })
        .transform(sanitizeText),

    type: z
        .enum(articleTypes),

    description: z
        .string()
        .min(10, { message: 'Краткое описание слишком короткое (минимум 10 символов)' })
        .max(500, { message: 'Описание не должно превышать 500 символов' })
        .transform(sanitizeText),

    content: z
        .string()
        .min(50, { message: 'Текст статьи слишком короткий (минимум 50 символов)' })
        .max(1_000_000, { message: 'Текст статьи слишком огромный' })
        .transform(sanitizeHtml)
        .refine((v) => v.length >= 50, {
            message: 'Текст статьи слишком короткий после очистки'
        }),

    avatar: z
        .string()
        .url({ message: 'Некорректная ссылка на аватар' }),

    previewBg: z
        .string()
        .url({ message: 'Некорректная ссылка на фон' }),

    nameAuthor: z
        .string()
        .max(200)
        .transform(sanitizeText)
        .refine((v) => v.split(/\s+/).filter(Boolean).length >= 2, {
            message: 'Поле должно содержать минимум два слова (Имя Фамилия)'
        }),

    readingTime: z
        .coerce
        .number()
        .int()
        .min(1, { message: 'Время чтения должно быть не менее 1 минуты' })
        .max(300, { message: 'Слишком большое время чтения' })
        .transform(String)
})

export type ArticleInput = z.infer<typeof Article>