import { useState } from "react"


export function useStatesContacts() {
    const [minBudget, setMinBudget] = useState(5000)
    const [maxBudget, setMaxBudget] = useState(100000)
    const [description, setDescription] = useState('')
    const [advertising, setAdvertising] = useState(false)
    const [selectedFormat, setSelectedFormat] = useState<'one-time' | 'subscription'>('one-time')

    const [popup, setPopup] = useState<{ isOpen: boolean; type: 'success' | 'error' }>({
        isOpen: false,
        type: 'success'
    })

    const [selectedServices, setSelectedServices] = useState<string[]>([])

    return {
        minBudget, setMinBudget,
        maxBudget, setMaxBudget,
        description, setDescription,
        advertising, setAdvertising,
        popup, setPopup,
        selectedServices, setSelectedServices,
        selectedFormat, setSelectedFormat
    }

}