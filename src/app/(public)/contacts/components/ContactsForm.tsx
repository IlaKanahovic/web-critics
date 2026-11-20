'use client'

import { ContactsMainPage as ThemedLeadForm } from "../../componentsByMainPage/contactsMainPage/ContactsMainPage"

export function ContactsForm() {

    return (
        <>
            <h1 className="text-font-cormorant text-center text-[#f0f0f0] light:text-ink text-5xl md:text-7xl lg:text-[96px] mt-8">Контакты</h1>
            <ThemedLeadForm />
        </>
    )
}
