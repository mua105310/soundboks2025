import { MapPin, ShieldCheck, Trophy, Smartphone, Star } from 'lucide-react'

export function TrustSignals() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Overbevisende overskrift */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Derfor anbefaler vi Moveboks</h2>
        <p className="text-gray-400 mt-2">
          Med unik nærhed, forsikring og en brugervenlig app er Moveboks det oplagte valg til din næste festival. Vi giver dem en score på <span className="text-blue-500 font-bold">5 ud af 5</span>, og på <span className="text-green-500 font-bold">Trustpilot</span> har de fået <span className="text-green-500 font-bold">4.5 ud af 5 stjerner</span>!
        </p>
      </div>

      {/* Trust Signals Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-3 bg-blue-500/10 rounded-full flex items-center justify-center">
            <MapPin className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="font-semibold mb-1">Tæt på dig</h3>
          <p className="text-sm text-gray-400">Hurtig levering</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-3 bg-blue-500/10 rounded-full flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="font-semibold mb-1">Inkl. forsikring</h3>
          <p className="text-sm text-gray-400">Tyveri & skade</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-3 bg-blue-500/10 rounded-full flex items-center justify-center">
            <Trophy className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="font-semibold mb-1">#1 Udlejer</h3>
          <p className="text-sm text-gray-400">I Danmark</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-3 bg-blue-500/10 rounded-full flex items-center justify-center">
            <Smartphone className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="font-semibold mb-1">Officiel App</h3>
          <p className="text-sm text-gray-400">Nem kontakt</p>
        </div>
      </div>

      {/* Rating Section */}
      <div className="text-center mt-8">
        <div className="inline-flex items-center gap-2">
          <Star className="w-6 h-6 text-green-500" />
          <Star className="w-6 h-6 text-green-500" />
          <Star className="w-6 h-6 text-green-500" />
          <Star className="w-6 h-6 text-green-500" />
          <Star className="w-6 h-6 text-green-300" /> {/* Halv stjerne */}
        </div>
        <p className="text-sm text-gray-400 mt-2">
          Trustpilot vurdering: <span className="text-green-500 font-bold">4.5/5</span>
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Se flere anmeldelser på <a href="https://dk.trustpilot.com/review/moveboks.dk" target="_blank" rel="noopener noreferrer" className="text-green-500 underline">Trustpilot</a>.
        </p>
      </div>
    </div>
  )
}
