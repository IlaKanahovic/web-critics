'use client'

import { loginAdmin } from '@/lib/auth/login'
import { useState } from 'react'

export default function AdminLoginPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errorText, setErrorText] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErrorText(null)
        setIsSubmitting(true)

        const formData = new FormData(e.currentTarget)
        const payload = {
            email: String(formData.get('email') ?? '').trim(),
            password: String(formData.get('password') ?? ''),
            website: String(formData.get('website') ?? ''),
        }

        try {
            const result = await loginAdmin(payload)

            if (result?.error) {
                setErrorText(result.error.message ?? 'ERR_DENIED')
                setIsSubmitting(false)
            }
        } catch (err) {
            if (
                err &&
                typeof err === 'object' &&
                'digest' in err &&
                typeof (err as { digest: unknown }).digest === 'string' &&
                (err as { digest: string }).digest.startsWith('NEXT_REDIRECT')
            ) {
                throw err
            }
            console.error(err)
            setErrorText('ERR_INTERNAL_SERVER')
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-4 font-mono">
            <div className="w-full max-w-sm border border-[#333] bg-[#111] p-6 text-sm text-[#888]">
                <div className="mb-6 pb-2 border-b border-[#333] text-[#555] text-xs tracking-widest uppercase">
                    System_Auth_Node_01
                </div>

                {errorText && (
                    <div className="mb-4 text-[#f55] border border-[#f55]/30 bg-[#f55]/5 p-2 text-xs">
                        [!] {errorText}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <input
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        className="hidden"
                    />

                    <div>
                        <label htmlFor="email" className="block text-[#555] mb-1 text-xs uppercase">
                            Identifier
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            disabled={isSubmitting}
                            className="w-full px-2 py-1.5 bg-[#0a0a0a] border border-[#333] text-[#ccc] focus:outline-none focus:border-[#666] transition-colors disabled:opacity-50"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-[#555] mb-1 text-xs uppercase">
                            Access_Key
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            disabled={isSubmitting}
                            className="w-full px-2 py-1.5 bg-[#0a0a0a] border border-[#333] text-[#ccc] focus:outline-none focus:border-[#666] transition-colors disabled:opacity-50"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-6 px-4 py-2 bg-[#222] border border-[#333] text-[#888] hover:text-[#ccc] hover:bg-[#2a2a2a] transition-colors disabled:opacity-50 uppercase text-xs tracking-wider"
                    >
                        {isSubmitting ? 'Processing...' : 'Execute'}
                    </button>
                </form>
            </div>

            <div className="mt-4 text-[#333] text-[10px] tracking-widest uppercase">
                Unauthorized access is prohibited
            </div>
        </div>
    )
}