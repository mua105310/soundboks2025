import { CheckCircle, Star, Trophy, Users } from 'lucide-react'

export function TrustSignals() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
      <div className="text-center">
        <div className="w-12 h-12 mx-auto mb-3 bg-blue-500/10 rounded-full flex items-center justify-center">
          <Star className="w-6 h-6 text-blue-500" />
        </div>
        <h3 className="font-semibold mb-1">4.9/5 Rating</h3>
        <p className="text-sm text-gray-400">På Trustpilot</p>
      </div>
      <div className="text-center">
        <div className="w-12 h-12 mx-auto mb-3 bg-blue-500/10 rounded-full flex items-center justify-center">
          <Users className="w-6 h-6 text-blue-500" />
        </div>
        <h3 className="font-semibold mb-1">10.000+</h3>
        <p className="text-sm text-gray-400">Tilfredse kunder</p>
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
          <CheckCircle className="w-6 h-6 text-blue-500" />
        </div>
        <h3 className="font-semibold mb-1">Officiel App</h3>
        <p className="text-sm text-gray-400">Nem booking</p>
      </div>
    </div>
  )
}

