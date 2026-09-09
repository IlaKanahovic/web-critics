import '../globals.css'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Cormorant, Plus_Jakarta_Sans, Space_Grotesk, Inter } from 'next/font/google';

const cormorant = Cormorant({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-title',
  weight: ['300', '400', '500', '600', '700'],
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'cyrillic-ext'],
  variable: '--font-logo-products',
  weight: ['400'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-logo-web',
  weight: ['700'],
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-text',
  weight: ['400', '500', '600'],
})

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  metadataBase: new URL('https://web-critics.ru'),
  title: {
    default: 'WebCRitics — решение проблем бизнеса',
    template: '%s | WebCRitics',
  },
  description: 'Находим, что мешает вашему бизнесу расти, и создаём цифровое решение под конкретную задачу.',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://web-critics.ru',
    siteName: 'WebCRitics',
    images: [
      {
        url: '/img/avatar.svg',
        width: 1200,
        height: 630,
        alt: 'WebCRitics: Ваша проблема - наше решение!',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  icons: {
    icon: '/img/avatar.svg',
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={cn(
        'font-sans',
        cormorant.variable,
        plusJakarta.variable,
        spaceGrotesk.variable,
        inter.variable
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'WebProducts',
              url: 'https://web-products.ru',
              logo: 'https://web-products.ru/img/avatar.svg',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}