'use server'

import { prisma } from "@/lib/db/prisma";
import { rateLimit } from "@/lib/rateLimit";
import { Admin } from "@/lib/schema/adminSchema";
import bcrypt from 'bcryptjs'
import { createSession } from "./session";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

type ActionResponse = {
    session?: { session: string },
    error?: {
        status: number,
        code: string,
        message: string,
        fields?: Record<string, string[]>
    }
}

export async function loginAdmin(rawData: unknown): Promise<ActionResponse> {
    const dataBot = rawData as Record<string, unknown>
    if (dataBot.website && typeof dataBot.website === 'string' && dataBot.website.length > 0) {
        return { session: { session: 'spam-detected' } }
    }

    const result = Admin.safeParse(rawData)
    if (!result.success) {
        return {
            error: {
                status: 400,
                code: "VALIDATION_ERROR",
                message: "Доступ запрещен",
            }
        }
    }

    const data = result.data

    const headersList = await headers()
    let ipHeader = headersList.get('x-forwarded-for') || 'unknown'
    let ipString = ipHeader.split(',')[0].trim()
    const ip = ipString || 'unknown'

    const checkRateLimit = rateLimit(`admin:${ip}`)

    if (!checkRateLimit.success) {
        return {
            error: {
                status: 429,
                code: "RATE_LIMITED_AND_ACCESS_DENIED",
                message: "Слишком много попыток. Доступ запрещен"
            }
        }
    }

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: data.email
            }
        })

        if (!user || !user.passwordHash) {
            return {
                error: {
                    status: 401,
                    code: "ACCESS_DENIED",
                    message: "Доступ запрещен"
                }
            }
        }

        const checkPassword = await bcrypt.compare(data.password, user.passwordHash)

        if (!checkPassword) {
            return {
                error: {
                    status: 401,
                    code: "ACCESS_DENIED",
                    message: "Доступ запрещен"
                }
            }
        }

        if (user.role !== 'ADMIN') {
            return {
                error: {
                    status: 401,
                    code: "ACCESS_DENIED",
                    message: "Доступ запрещен"
                }
            }
        }

        await createSession(user.id, user.role)
    } catch {
        return {
            error: {
                status: 500,
                code: "ACCESS_DENIED",
                message: "Доступ запрещен"
            }
        }
    }

    redirect('/admin')
}