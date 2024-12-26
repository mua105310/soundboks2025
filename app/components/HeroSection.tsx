'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function HeroSection() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 0.1))
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/placeholder.svg?height=1080&width=1920)',
          filter: 'brightness(0.6)'
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-4">
        <span className="text-sm mb-4">MOVEBOKS</span>
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          LEJ EN SOUNDBOKS
        </h1>
        <div className="w-20 h-1 bg-blue-500 mb-6" />
        <p className="max-w-2xl mb-8 text-sm md:text-base">
          Lej en SOUNDBOKS til bryllup, konfirmation, fødselsdag, firmafest eller anden fest. priser fra kun 249,- kr.
        </p>
        <Button 
          variant="outline" 
          className="bg-white text-black hover:bg-gray-100 font-semibold px-8"
        >
          LEJ SOUNDBOKS
        </Button>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-between items-center px-8">
        <Button 
          variant="ghost" 
          className="text-white hover:bg-white/20"
          size="lg"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> PREV
        </Button>
        <Button 
          variant="ghost" 
          className="text-white hover:bg-white/20"
          size="lg"
        >
          NEXT <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
        <div 
          className="h-full bg-blue-500 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

