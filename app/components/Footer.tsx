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
              Vi er en uafhængig guide, der hjælper dig med at finde den bedste løsning til Soundboks-udlejning i Danmark. Vi anbefaler Moveboks som en førende udbyder til festivaler og events.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Hurtige Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#festivaler">Festivaler</Link></li>
              <li><Link href="#fordele">Fordele</Link></li>
              <li><Link href="#app">Hvordan det virker</Link></li>
              <li><a href="https://moveboks.dk" target="_blank" rel="noopener noreferrer">Besøg Moveboks</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Vigtig Information</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Moveboks tilbyder tyveri- og skadeforsikring.</li>
              <li>Deres app gør det nemt at booke og stille spørgsmål.</li>
              <li>Leverer hurtigt til festivaler og events i hele Danmark.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Følg Vores Guide</h3>
            <p className="text-gray-400 text-sm">
              Vi arbejder på at give dig de bedste anbefalinger og opdateringer inden for Soundboks-udlejning.
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 Soundboks Guide. Alle rettigheder forbeholdes.</p>
          <p className="mt-2">
            Dette er en uafhængig guide og anbefalingstjeneste. Soundboks® er et registreret varemærke tilhørende Soundboks ApS.
          </p>
        </div>
      </div>
    </footer>
  )
}
