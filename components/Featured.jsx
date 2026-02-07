'use client'

import { Star, MapPin } from 'lucide-react'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from './ui/dialog'
import { useRouter } from 'next/navigation'

export default function Featured() {
  const router = useRouter()
  const containerRef = useRef(null)
  const cardsRef = useRef([])
  const properties = [
    {
      id: 1,
      name: 'Luxury Ocean Villa',
      location: 'Maldives',
      rating: 4.9,
      reviews: 128,
      price: '$450/night',
      imageUrl:
        '/ocean.png',
      featured: true,
      description: 'A private villa with direct ocean access, infinity pool and personal chef.'
    },
    {
      id: 2,
      name: 'Mountain Lodge',
      location: 'Swiss Alps',
      rating: 4.8,
      reviews: 95,
      price: '$320/night',
      imageUrl:
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      description: 'Cozy lodge with ski-in/ski-out access and panoramic alpine views.'
    },
    {
      id: 3,
      name: 'Beach Cottage',
      location: 'Santorini',
      rating: 4.9,
      reviews: 112,
      price: '$280/night',
      imageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      description: 'Whitewashed cottage steps from the beach and cliffside sunsets.'
    },
    {
      id: 4,
      name: 'Urban Penthouse',
      location: 'New York',
      rating: 4.7,
      reviews: 87,
      price: '$520/night',
      imageUrl:
        'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      description: 'Modern penthouse in the heart of the city with skyline terrace.'
    },
    {
      id: 5,
      name: 'Countryside Farmhouse',
      location: 'Tuscany',
      rating: 4.8,
      reviews: 64,
      price: '$190/night',
      imageUrl:
        '/countryside.jpg',
      description: 'Charming farmhouse surrounded by vineyards and olive groves.'
    },
    {
      id: 6,
      name: 'Desert Retreat',
      location: 'Marrakech',
      rating: 4.6,
      reviews: 48,
      price: '$210/night',
      imageUrl:
        '/desert.jpg',
      description: 'Secluded riad with courtyard, pool and traditional Moroccan decor.'
    },
    {
      id: 7,
      name: 'Rainforest Bungalow',
      location: 'Costa Rica',
      rating: 4.9,
      reviews: 73,
      price: '$240/night',
      imageUrl:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      description: 'Eco-friendly bungalow immersed in jungle with guided nature walks.'
    },
    {
      id: 8,
      name: 'Historic Castle',
      location: 'Scotland',
      rating: 4.8,
      reviews: 39,
      price: '$610/night',
      imageUrl:
        'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80',
      description: 'Stay like royalty in a restored castle with large grounds and loch views.'
    }
  ]

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean)
    if (cards.length === 0) return

    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out' }
    )

    const listeners = []
    cards.forEach((card) => {
      const onEnter = () => {
        gsap.to(card, { y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.12)', duration: 0.28, ease: 'power2.out' })
      }
      const onLeave = () => {
        gsap.to(card, { y: 0, boxShadow: '0 10px 30px rgba(0,0,0,0.06)', duration: 0.28, ease: 'power2.out' })
      }

      card.addEventListener('mouseenter', onEnter)
      card.addEventListener('mouseleave', onLeave)
      listeners.push({ card, onEnter, onLeave })
    })

    return () => {
      listeners.forEach(({ card, onEnter, onLeave }) => {
        card.removeEventListener('mouseenter', onEnter)
        card.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <section id="properties" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-2">Featured Hotels</h2>
            <p className="text-muted-foreground">Handpicked selections from around the world</p>
          </div>
          <button className="hidden md:block text-primary font-semibold hover:underline">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" ref={containerRef}>
          {properties.map((property, idx) => (
            <div
              key={property.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
            >
              <div className="h-40 relative">
                <img src={property.imageUrl} alt={property.name} className="object-cover w-full h-full" />
                {property.featured && (
                  <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg text-foreground mb-1">{property.name}</h3>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                  <MapPin size={16} />
                  {property.location}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-foreground">{property.rating}</span>
                    <span className="text-muted-foreground text-sm">({property.reviews})</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{property.price}</span>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium">
                        Book
                      </button>
                    </DialogTrigger>

                    <DialogContent>
                      <DialogTitle>{property.name}</DialogTitle>
                      <DialogDescription>{property.location} • {property.price}</DialogDescription>

                      <div className="mt-4">
                        <img src={property.imageUrl} alt={property.name} className="h-40 w-full object-cover rounded-md mb-4" />
                        <p className="text-sm text-muted-foreground">{property.description}</p>
                        <div className="mt-3 flex items-center gap-2 text-sm">
                          <Star size={16} className="fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{property.rating}</span>
                          <span className="text-muted-foreground">({property.reviews} reviews)</span>
                        </div>
                      </div>

                      <DialogFooter className="mt-6">
                        <DialogClose asChild>
                          <button className="px-4 py-2 bg-gray-100 rounded-md text-sm">Close</button>
                        </DialogClose>
                        <button
                          onClick={() => router.push(`/booking/${property.id}`)}
                          className="px-4 py-2 bg-primary text-white rounded-md text-sm"
                        >
                          Confirm Booking
                        </button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Add animations after component definition (client-side only)
// Note: useEffect cannot be used outside component; keep animation setup inside component
