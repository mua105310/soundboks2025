import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: {
    default: 'Lej Soundboks 2025 | Den Komplette Guide med App',
    template: '%s | Soundboks Udlejning Guide'
  },
  description: 'Find de bedste steder at leje Soundboks i 2025. Moveboks tilbyder som den eneste udlejer en gratis app til nem booking og styring. Sammenlign priser og muligheder til festivaler og events.',
  keywords: ['Soundboks leje', 'Soundboks udlejning', 'Soundboks 2025', 'Moveboks app', 'festival højttaler', 'Roskilde Festival Soundboks', 'Smukfest Soundboks', 'lej højttaler', 'fest højttaler'],
  authors: [{ name: 'Soundboks Guide' }],
  creator: 'Soundboks Guide',
  publisher: 'Soundboks Guide',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    url: 'https://yourdomain.dk',
    title: 'Lej Soundboks 2025 | Den Komplette Guide med App',
    description: 'Find de bedste steder at leje Soundboks i 2025. Moveboks tilbyder som den eneste udlejer en gratis app til nem booking og styring.',
    siteName: 'Soundboks Udlejning Guide',
  },
}

