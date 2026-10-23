interface IRateLimitEntry {
    count: number
    resetTime: number
}

const globalRateLimit = globalThis as unknown as {
    rateLimitStore?: Map<string, IRateLimitEntry>
}

const store = globalRateLimit.rateLimitStore ?? new Map<string, IRateLimitEntry>()
if (process.env.NODE_ENV !== 'production') globalRateLimit.rateLimitStore = store

export function rateLimit(
    key: string,
    limit: number = 5,
    windowMs: number = 60 * 60 * 1000 
): { success: boolean; remaining: number; resetTime: number } {
    const now = Date.now()
    const entry = store.get(key)

    if (!entry || now > entry.resetTime) {
        const resetTime = now + windowMs
        store.set(key, { count: 1, resetTime })
        return { success: true, remaining: limit - 1, resetTime }
    }

    if (entry.count >= limit) {
        return { success: false, remaining: 0, resetTime: entry.resetTime }
    }

    entry.count += 1
    store.set(key, entry)
    return { success: true, remaining: limit - entry.count, resetTime: entry.resetTime }
}