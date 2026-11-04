'use server'

import { jwtVerify, SignJWT } from 'jose'
import { cookies } from 'next/headers'

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET!)

export const createSession = async (userId: string, role: string): Promise<string> => {
    const cookieStore = await cookies()

    const token = await new SignJWT({ userId, role })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('24h')
        .sign(JWT_SECRET)

    cookieStore.set('session_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24,
        path: '/',
        sameSite: 'lax',
    })

    return token
}

export const verifySession = async () => {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get('session_token')
    if (!sessionCookie) return null

    const token = sessionCookie.value

    try {
        const { payload } = await jwtVerify(token, JWT_SECRET)
        return { isAuth: true, userId: payload.userId as string, role: payload.role as string }
    } catch {
        return null
    }
}

export const deleteSession = async () => {
    const cookieStore = await cookies()
    cookieStore.delete('session_token')
}