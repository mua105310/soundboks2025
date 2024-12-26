import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from 'lucide-react'
import Image from "next/image"

interface FestivalCardProps {
  name: string
  date: string
  location: string
  description: string
  price: string
  image: string
  link: string
}

export function FestivalCard({
  name,
  date,
  location,
  description,
  price,
  image,
  link
}: FestivalCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-zinc-900">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {date}
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </div>
        </div>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-400">Fra</div>
            <div className="text-xl font-bold">{price}</div>
          </div>
          <Button asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Book Nu
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

