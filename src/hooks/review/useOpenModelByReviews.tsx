'use client'
import { useState } from "react"

export function useOpenModalByReviews() {
    const [openModal, setOpenModal] = useState(false)

    return { openModal, setOpenModal }
}