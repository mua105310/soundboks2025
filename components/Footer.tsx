import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Om Os</h3>
            <p className="text-gray-400 text-sm">
              Vi er din guide til at finde den bedste Soundboks udlejning i Danmark.
              Sammenlign priser og book nemt gennem Moveboks' officielle app.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Hurtige Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#festivaler">Festivaler</Link></li>
              <li><Link href="#fordele">Fordele</Link></li>
              <li><Link href="#app">Download App</Link></li>
              <li><Link href="https://moveboks.dk">Book Nu</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@moveboks.dk</li>
              <li>Telefon: +45 XX XX XX XX</li>
              <li>København, Danmark</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Følg Os</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© 2024 Soundboks Guide. Alle rettigheder forbeholdes.</p>
          <p className="mt-2">
            Dette er en uafhængig guide. Soundboks® er et registreret varemærke tilhørende Soundboks ApS.
          </p>
        </div>
      </div>
    </footer>
  )
}

