import { Button } from "@/components/ui/button"
import { Apple, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import moveboksapp from '../../assets/moveboksapp.png'

export function AppFeature() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-black p-8 md:p-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 mb-4">
            <Apple className="w-4 h-4 mr-2" />
            Eksklusiv App
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book direkte fra din iPhone
          </h2>
          <p className="text-gray-400 mb-6">
            MOVEBOKS er den eneste udlejer med en dedikeret app. 
            Book nemt din SOUNDBOKS, hold styr på dine bookinger, 
            og få support direkte i appen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              asChild
            >
              <a 
                href="https://apps.apple.com/dk/app/moveboks/id6478084822" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Apple className="w-5 h-5 mr-2" />
                Download App
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
            >
              <a 
                href="https://moveboks.dk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                Læs mere
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>
        </div>
        <div className="relative">
          <Image
            src={moveboksapp}
            alt="Moveboks App Screenshot"
            width={300}
            height={600}
            className="rounded-2xl shadow-2xl mx-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
        </div>
      </div>
    </div>
  )
}

