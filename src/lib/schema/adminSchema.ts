import * as z from "zod"

export const Admin = z.object({
    email: z
        .email()
        .toLowerCase()
        .trim(),

    password: z
        .string(),

    website: z
        .string()
        .optional(),
})