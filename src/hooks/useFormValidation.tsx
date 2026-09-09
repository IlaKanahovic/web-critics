'use client'

import { useState, useCallback } from 'react'

interface FormState {
    name: string
    phone: string
    email: string
    consent: boolean
    offer: boolean
}

interface Errors {
    name?: string
    phone?: string
    email?: string
    consent?: string
    offer?: string 
}

export function useFormValidation() {
    const [form, setForm] = useState<FormState>({
        name: '',
        phone: '',
        email: '',
        consent: false,
        offer: false
    })

    const [errors, setErrors] = useState<Errors>({})

    const validateField = useCallback((field: keyof FormState, value: any): string | undefined => {
        if (field === 'name') {
            if (!value.trim()) return 'это поле необходимо заполнить'
            if (value.trim().split(/\s+/).length < 2) return 'введите полное имя (минимум два слова)'
            return undefined
        }

        if (field === 'phone') {
            const cleaned = value.replace(/[\s\-()]/g, '')
            if (!cleaned) return 'это поле необходимо заполнить'
            const phoneRegex = /^(\+7|8)?\d{10}$/
            if (!phoneRegex.test(cleaned)) return 'введите корректный номер телефона'
            return undefined
        }

        if (field === 'email') {
            if (!value.trim()) return 'это поле необходимо заполнить'
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(value.trim())) return 'введите корректный email'
            return undefined
        }

        if (field === 'consent') {
            if (!value) return 'необходимо дать согласие на обработку персональных данных'
            return undefined
        }

        if (field === 'offer') {
            if (!value) return 'необходимо принять условия публичной оферты'
            return undefined
        }

        return undefined
    }, [])

    const handleChange = useCallback(
        (field: keyof FormState, value: any) => {
            setForm((prev) => ({ ...prev, [field]: value }))

            setErrors((prev) => ({ ...prev, [field]: undefined }))
        },
        []
    )

    const validateForm = useCallback((): boolean => {
        const newErrors: Errors = {}
        let isValid = true

            ; (Object.keys(form) as Array<keyof FormState>).forEach((field) => {
                const error = validateField(field, form[field])
                if (error) {
                    newErrors[field] = error
                    isValid = false
                }
            })

        setErrors(newErrors)
        return isValid
    }, [form, validateField])

    return {
        form,
        errors,
        handleChange,
        validateForm,
        setErrors,
    }
}