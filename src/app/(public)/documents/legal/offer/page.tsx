import type { Metadata } from "next"
import OfferContent from "./OfferContent"

export const metadata: Metadata = {
    title: "Публичная оферта",
    description: "Раздел публичной оферты WebCRitics.",
    alternates: { canonical: "/documents/legal/offer" },
}

export default function Offer() {
    return <OfferContent />
}
