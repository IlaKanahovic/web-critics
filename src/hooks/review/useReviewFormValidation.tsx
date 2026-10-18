'use client'

import { useState, useCallback } from 'react'

export interface ReviewFormState {
    name: string
    nameCompany: string
    estimation: string
    category: string
    description: string
    caseHref: string
    avatar: string
    consent: boolean
}

interface Errors {
    name?: string
    estimation?: string
    description?: string
    caseHref?: string
    avatar?: string
    consent?: boolean | string
}

export function useReviewFormValidation() {
    const [form, setForm] = useState<ReviewFormState>({
        name: '',
        nameCompany: '',
        estimation: '0',
        category: 'Сайты',
        description: '',
        caseHref: '',
        avatar: '',
        consent: false
    })

    const [errors, setErrors] = useState<Errors>({})

    const validateField = useCallback((field: keyof ReviewFormState, value: any): string | undefined => {
        if (field === 'name') {
            if (!value.trim()) return 'Пожалуйста, укажите ваше имя'
            if (value.trim().split(/\s+/).length < 2) return 'Введите имя и фамилию'
            return undefined
        }

        if (field === 'estimation') {
            if (value === 0) return 'Пожалуйста, поставьте оценку'
            return undefined
        }

        if (field === 'description') {
            if (!value.trim()) return 'Напишите хотя бы пару слов'
            if (value.trim().length < 10) return 'Отзыв слишком короткий (минимум 10 символов)'
            return undefined
        }

        if (field === 'caseHref') {
            if (value.trim()) {
                const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/
                if (!urlRegex.test(value.trim())) {
                    return 'Введите корректную ссылку (например, https://site.ru)'
                }
            }
            return undefined
        }

        if (field === 'avatar') {
            if (value && !value.startsWith('data:image/')) {
                return 'Загрузите изображение'
            }
            return undefined
        }

        if (field === 'consent') {
            if (!value) return 'Необходимо согласие на обработку данных'
            return undefined
        }

        return undefined
    }, [])

    const handleChange = useCallback((field: keyof ReviewFormState, value: any) => {
        setForm((prev) => ({ ...prev, [field]: value }))
        setErrors((prev) => ({ ...prev, [field]: undefined }))
    }, [])

    const validateForm = useCallback((): boolean => {
        const newErrors: Errors = {}
        let isValid = true

        const fieldsToValidate: (keyof Errors)[] = ['name', 'estimation', 'description', 'caseHref', 'avatar', 'consent']

        fieldsToValidate.forEach((field) => {
            const error = validateField(field as keyof ReviewFormState, form[field])
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