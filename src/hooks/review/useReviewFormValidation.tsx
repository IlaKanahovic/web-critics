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
    consent?: string
}

export function useReviewFormValidation() {
    const [form, setForm] = useState<ReviewFormState>({
        name: '',
        nameCompany: '',
        estimation: '0',
        category: 'Готовые сайты',
        description: '',
        caseHref: '',
        avatar: '',
        consent: false
    })

    const [errors, setErrors] = useState<Errors>({})

    const validateField = useCallback((field: keyof ReviewFormState, value: string | boolean): string | undefined => {
        if (field === 'name' && typeof value === 'string') {
            if (!value.trim()) return 'Пожалуйста, укажите ваше имя'
            if (value.trim().split(/\s+/).length < 2) return 'Введите имя и фамилию'
            return undefined
        }

        if (field === 'estimation' && typeof value === 'string') {
            if (value === '0') return 'Пожалуйста, поставьте оценку'
            return undefined
        }

        if (field === 'description' && typeof value === 'string') {
            if (!value.trim()) return 'Напишите хотя бы пару слов'
            if (value.trim().length < 10) return 'Отзыв слишком короткий (минимум 10 символов)'
            return undefined
        }

        if (field === 'caseHref' && typeof value === 'string') {
            if (value.trim()) {
                try {
                    const url = new URL(value.trim())
                    if (!['http:', 'https:'].includes(url.protocol)) {
                        return 'Введите корректную ссылку (например, https://site.ru)'
                    }
                } catch {
                    return 'Введите корректную ссылку (например, https://site.ru)'
                }
            }
            return undefined
        }

        if (field === 'avatar' && typeof value === 'string') {
            if (value && !value.startsWith('data:image/')) {
                return 'Загрузите изображение'
            }
            return undefined
        }

        if (field === 'consent' && typeof value === 'boolean') {
            if (!value) return 'Необходимо согласие на обработку данных'
            return undefined
        }

        return undefined
    }, [])

    const handleChange = useCallback(<K extends keyof ReviewFormState>(field: K, value: ReviewFormState[K]) => {
        setForm((prev) => ({ ...prev, [field]: value }))
        setErrors((prev) => ({ ...prev, [field]: undefined }))
    }, [])

    const validateForm = useCallback((): boolean => {
        const newErrors: Errors = {}
        let isValid = true

        const fieldsToValidate: Array<keyof Errors> = ['name', 'estimation', 'description', 'caseHref', 'avatar', 'consent']

        fieldsToValidate.forEach((field) => {
            const error = validateField(field, form[field as keyof ReviewFormState])
            if (error) {
                newErrors[field] = error
                isValid = false
            }
        })

        setErrors(newErrors)
        return isValid
    }, [form, validateField])

    const resetForm = useCallback(() => {
        setForm({
            name: '',
            nameCompany: '',
            estimation: '0',
            category: 'Готовые сайты',
            description: '',
            caseHref: '',
            avatar: '',
            consent: false
        })
        setErrors({})
    }, [])

    return {
        form,
        errors,
        handleChange,
        validateForm,
        resetForm,
        setErrors,
    }
}
