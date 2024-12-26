import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Soundboks Udlejning Guide 2025 | Officiel Guide',
  description: 'Din komplette guide til Soundboks udlejning i 2025. Find de bedste priser og book nemt gennem Moveboks\' officielle app.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}

