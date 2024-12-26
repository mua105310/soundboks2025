'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-white text-xl font-bold">SOUNDBOKS GUIDE</span>
            <span className="text-white/70 text-sm hidden sm:inline">2025</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#festivaler" className="text-white/90 hover:text-white transition">
              Festivaler
            </Link>
            <Link href="#fordele" className="text-white/90 hover:text-white transition">
              Fordele
            </Link>
            <Link href="#app" className="text-white/90 hover:text-white transition">
              App
            </Link>
            <Button asChild>
              <Link href="https://moveboks.dk" target="_blank" rel="noopener">
                Læs
              </Link>
            </Button>
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4">
                <Link href="#festivaler" className="text-lg">Festivaler</Link>
                <Link href="#fordele" className="text-lg">Fordele</Link>
                <Link href="#app" className="text-lg">App</Link>
                <Link href="https://moveboks.dk" className="text-lg text-blue-500">Book Nu</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

