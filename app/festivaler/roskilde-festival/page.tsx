import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function RoskildeFestivalPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-2">
          ROSKILDE FESTIVAL 2025
        </h1>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-12" />
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-zinc-900 border-none text-white mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Lej en SOUNDBOKS til Roskilde Festival</h2>
              <p className="text-gray-400 mb-6">
                Vi anbefaler at leje en SOUNDBOKS til Roskilde Festival 2025 gennem Moveboks. 
                Deres service inkluderer levering direkte til festivalpladsen og afhentning efter festivalen, hvilket gør din oplevelse nem og bekymringsfri.
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
                    <li>Basis (1 batteri): 3.099 kr.</li>
                    <li>Plus (inkl. skadeforsikring): 3.599 kr.</li>
                    <li>Premium (inkl. skade- og tyveriforsikring): 3.999 kr.</li>
                  </ul>
                </div>
              </div>
              <Button size="lg" className="w-full md:w-auto">
                <a href="https://moveboks.dk/lej-soundboks-til-roskilde-festival" target="_blank" rel="noopener noreferrer">
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
