import { NextResponse, type NextRequest } from "next/server"
import { jwtVerify } from "jose"

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET!)

export const config = {
    matcher: ['/admin/:path*'],
}

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl

    if (pathname.startsWith('/admin/login89825012228ila')) {
        return NextResponse.next()
    }

    const token = req.cookies.get('session_token')?.value

    if (!token) {
        return NextResponse.redirect(new URL('/admin/login89825012228ila', req.url))
    }

    try {
        const { payload } = await jwtVerify(token, JWT_SECRET)

        if (payload.role !== 'ADMIN') {
            return NextResponse.redirect(new URL('/admin/login89825012228ila', req.url))
        }

        return NextResponse.next()
    } catch {
        return NextResponse.redirect(new URL('/admin/login89825012228ila', req.url))
    }
}