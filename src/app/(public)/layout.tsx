import '../../globals.css'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Cormorant, Plus_Jakarta_Sans, Space_Grotesk, Inter } from 'next/font/google';
import Script from 'next/script';
import YandexMetrikaTracker from '@/components/Yandex/YandexMetrikaTracker';

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
    default: 'WebCRitics',
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
      <body>
        {children}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=113698334', 'ym');

            ym(113698334, 'init', {
              ssr: true,
              webvisor: true,
              clickmap: true,
              ecommerce: "dataLayer",
              accurateTrackBounce: true,
              trackLinks: true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/113698334"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
        <YandexMetrikaTracker />
      </body>
    </html>
  )
}