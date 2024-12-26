import { TrustSignals } from './components/TrustSignals'
import { AppFeature } from './components/AppFeature'
import { FestivalCard } from './components/FestivalCard'
import roskilde from '../assets/roskilde.jpeg'
import smukfest from '../assets/smukfest.jpg'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/placeholder.svg?height=1080&width=1920)',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-blue-500">Moveboks:</span> Danmarks Bedste Udlejning af SOUNDBOKS
          </h1>
            <p className="text-xl text-gray-300 mb-8">
              Oplev hvorfor Moveboks er det foretrukne valg til festivaler, fester og events i hele Danmark.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://moveboks.dk/lej-soundboks-til-roskilde-festival" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
              >
                Roskilde festival
              </a>
              <a 
                href="https://moveboks.dk/lej-soundboks-til-smukfest"
                className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition"
              >
                Smukfest festival
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <TrustSignals />
        </div>
      </section>

      {/* Festivals Section */}
      <section id="festivaler" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Populære Festivaler</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Gør din næste festival uforglemmelig med en SOUNDBOKS fra Moveboks. Perfekt lyd, hver gang.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FestivalCard 
            name="Roskilde Festival 2025"
            date="29. juni - 6. juli"
            location="Roskilde"
            description="Roskilde Festival er en klassiker, og hvis du leder efter den bedste lyd til din camp, anbefaler vi Moveboks. De tilbyder lynhurtig levering tæt på festivalen og inkluderer både tyveri- og skadeforsikring i deres service. Deres app gør det desuden nemt at få hjælp eller svar på spørgsmål, hvis der skulle opstå behov under festivalen."
            image={roskilde}
            link="https://moveboks.dk/lej-soundboks-til-roskilde-festival"
          />
          <FestivalCard 
            name="Smukfest 2025"
            date="6. august - 10. august"
            location="Skanderborg"
            description="Skal du til Smukfest? Vi anbefaler Moveboks som den bedste løsning til at leje en SOUNDBOKS. De ligger tæt på festivalen, hvilket sikrer hurtig og nem levering. Derudover tilbyder de både tyveri- og skadeforsikring, så du kan slappe af og nyde festen. Deres app gør det nemt at komme i kontakt med dem, hvis du har spørgsmål undervejs."
            image={smukfest}
            link="https://moveboks.dk/lej-soundboks-til-smukfest"
          />
          </div>
        </div>
      </section>

      {/* App Section */}
      <section id="app" className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <AppFeature />
        </div>
      </section>
    </main>
  )
}
