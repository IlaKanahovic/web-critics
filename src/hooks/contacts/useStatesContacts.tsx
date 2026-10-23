import { useState } from "react"


export function useStatesContacts() {
    const [budgetFrom, setBudgetFrom] = useState(5000)
    const [budgetTo, setBudgetTo] = useState(100000)
    const [description, setDescription] = useState('')
    const [advertisingConsent, setAdvertisingConsent] = useState(false)
    const [format, setFormat] = useState<'one-time' | 'subscription'>('one-time')
    const [offer, serOffer] = useState(false)

    const [popup, setPopup] = useState<{
        isOpen: boolean;
        type: 'success' | 'error';
        title?: string;
        description?: string;
    }>({
        isOpen: false,
        type: 'success'
    })

    const [services, setServices] = useState<string[]>([])

    const [isSubmitting, setIsSubmitting] = useState(false)

    return {
        budgetFrom, setBudgetFrom,
        budgetTo, setBudgetTo,
        description, setDescription,
        advertisingConsent, setAdvertisingConsent,
        popup, setPopup,
        services, setServices,
        format, setFormat,
        isSubmitting, setIsSubmitting,
        offer, serOffer
    }

}