'use client'
import { useLinkStatus } from 'next/link'

export function LoadingHint() {
    const { pending } = useLinkStatus()
    if (!pending) return null

    return (
        <span className="ml-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
    )
}