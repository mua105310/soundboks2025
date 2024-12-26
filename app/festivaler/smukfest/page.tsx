import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function SmukfestPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-2">
          SMUKFEST 2025
        </h1>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-12" />
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-zinc-900 border-none text-white mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Lej en SOUNDBOKS til Smukfest</h2>
              <p className="text-gray-400 mb-6">
                Vi anbefaler at leje en SOUNDBOKS til Smukfest 2025 gennem Moveboks. 
                Deres service inkluderer levering direkte til festivalpladsen og afhentning efter festivalen, så du kan fokusere på at nyde musikken og festen i Bøgeskoven.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-bold mb-2">INKLUDERET I LEJEN</h3>
                  <ul className="list-disc list-inside text-gray-400">
                    <li>SOUNDBOKS højttaler</li>
                    <li>1 batteri</li>
                    <li>Oplader</li>
                    <li>Levering til festivalpladsen</li>
                    <li>Afhentning efter festivalen</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">ANBEFALEDE PRISPAKKER</h3>
                  <ul className="list-disc list-inside text-gray-400">
                    <li>Basis: 1.400 kr. – Én SOUNDBOKS, ét batteri</li>
                    <li>Plus: 1.599 kr. – Én SOUNDBOKS, ét batteri og skadesforsikring</li>
                    <li>Premium: 1.999 kr. – Én SOUNDBOKS, ét batteri, skade- og tyveriforsikring, lås-jordanker og 24/7 overvågning</li>
                  </ul>
                </div>
              </div>
              <Button size="lg" className="w-full md:w-auto">
                <a href="https://moveboks.dk/lej-soundboks-til-smukfest" target="_blank" rel="noopener noreferrer">
                  BOOK NU HOS MOVEBOKS
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <div className="text-center">
            <Link href="/festivaler" className="text-blue-500 hover:underline">
              ← Tilbage til festivaler
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
