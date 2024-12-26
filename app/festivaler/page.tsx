import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function FestivalerPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-2">
          FESTIVALER 2025
        </h1>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-12" />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FestivalCard 
            name="ROSKILDE FESTIVAL"
            dates="29. juni - 6. juli 2025"
            description="Lej en SOUNDBOKS til Roskilde Festival 2025. Vi leverer direkte til festivalpladsen og henter igen når festivalen er slut."
            price="fra 999 kr."
            link="/festivaler/roskilde-festival"
          />
          
          <FestivalCard 
            name="SMUKFEST"
            dates="6. august - 10. august 2025"
            description="Få den ultimative Smukfest oplevelse med en SOUNDBOKS. Perfekt til camping og fest i Bøgeskoven."
            price="fra 899 kr."
            link="/festivaler/smukfest"
          />
        </div>
      </div>
    </main>
  )
}

function FestivalCard({ name, dates, description, price, link }: {
  name: string
  dates: string
  description: string
  price: string
  link: string
}) {
  return (
    <div className="bg-zinc-900 rounded-lg p-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-blue-500 font-semibold mb-4">{dates}</p>
      <p className="text-gray-400 mb-4 flex-grow">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold">{price}</span>
        <Button asChild>
          <Link href={link}>LÆS MERE</Link>
        </Button>
      </div>
    </div>
  )
}

