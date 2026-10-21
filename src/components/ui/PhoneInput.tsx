'use client'

import type { ChangeEvent } from "react"

interface PhoneInputProps {
    value: string
    onChange: (value: string) => void
    error?: string
    label?: string
}

export function PhoneInput({ value, onChange, error, label }: PhoneInputProps) {
    const formatPhoneNumber = (input: string) => {
        let digits = input.replace(/\D/g, '')

        if (!digits) return ''

        // Если начинается с 8, меняем на 7. Если с 9, добавляем 7 в начало.
        if (digits.startsWith('8')) {
            digits = '7' + digits.slice(1)
        } else if (digits.startsWith('9')) {
            digits = '7' + digits
        }

        digits = digits.slice(0, 11)

        let formatted = '+7 '

        if (digits.length > 1) {
            formatted += `(${digits.slice(1, 4)}`
        }
        if (digits.length > 4) {
            formatted += `) ${digits.slice(4, 7)}`
        }
        if (digits.length > 7) {
            formatted += `-${digits.slice(7, 9)}`
        }
        if (digits.length > 9) {
            formatted += `-${digits.slice(9, 11)}`
        }

        return formatted
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPhoneNumber(e.target.value)
        onChange(formatted)
    }

    return (
        <div>
            <label className="text-white/80 text-font-inter text-sm font-medium block mb-1.5">
                {label || 'Телефон'}
            </label>
            <input
                type="tel"
                value={value}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-black/40 border rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors ${
                    error ? 'border-red-500' : 'border-white/10'
                }`}
                placeholder="+7 (900) 000-00-00"
            />
            {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
        </div>
    )
}