'use client'

import { Heart, MapPin } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'

export default function ExclusiveOffers() {
  const [likes, setLikes] = useState({})
  const router = useRouter()
  const containerRef = useRef(null)
  const cardsRef = useRef([])

  const offers = [
    {
      id: 1,
      name: 'Tropical Paradise Resort',
      location: 'Thailand',
      originalPrice: '$280',
      discountedPrice: '$189',
      discount: '32% OFF',
      imageUrl: '/tropical.jpg',
      amenities: ['WiFi', 'Pool', 'Spa', 'Gym']
    },
    {
      id: 2,
      name: 'Heritage Manor',
      location: 'Scotland',
      originalPrice: '$220',
      discountedPrice: '$149',
      discount: '32% OFF',
      imageUrl: '/heritage.jpg',
      amenities: ['Restaurant', 'Library', 'Fireplace', 'Garden']
    },
    {
      id: 3,
      name: 'Modern Loft',
      location: 'Paris',
      originalPrice: '$310',
      discountedPrice: '$210',
      discount: '32% OFF',
      imageUrl: '/moder.jpg',
      amenities: ['Kitchen', 'Balcony', 'Museum', 'Café']
    }
  ]

  const toggleLike = (id) => {
    setLikes(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  // GSAP animations on mount
  useEffect(() => {
    if (cardsRef.current.length > 0) {
      // Animate cards in with stagger effect
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
        }
      )

      // Add hover animation to each card
      cardsRef.current.forEach((card) => {
        if (card) {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -10,
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
              duration: 0.3,
              ease: 'power2.out',
            })
          })

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              duration: 0.3,
              ease: 'power2.out',
            })
          })
        }
      })
    }
  }, [])

  return (
    <section id="offers" className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-2">Exclusive Offers</h2>
          <p className="text-muted-foreground">Limited time deals on premium properties</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={containerRef}>
          {offers.map((offer, idx) => (
            <div
              key={offer.id}
              ref={(el) => {
                cardsRef.current[idx] = el
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer"
            >
              <div className="h-48 relative">
                <img src={offer.imageUrl} alt={offer.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  {offer.discount}
                </div>
                <button
                  onClick={() => toggleLike(offer.id)}
                  className="absolute bottom-4 right-4 bg-white rounded-full p-3 shadow-md hover:shadow-lg transition"
                >
                  <Heart
                    size={20}
                    className={likes[offer.id] ? 'fill-red-500 text-red-500' : 'text-gray-400'}
                  />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{offer.name}</h3>
                <div className="flex items-center gap-1 text-muted-foreground mb-4">
                  <MapPin size={16} />
                  {offer.location}
                </div>

                <div className="flex gap-3 mb-4">
                  <span className="text-2xl font-bold text-primary">{offer.discountedPrice}</span>
                  <span className="text-lg text-muted-foreground line-through">{offer.originalPrice}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {offer.amenities.map((amenity, idx) => (
                    <span key={idx} className="text-xs bg-secondary text-foreground px-3 py-1 rounded-full">
                      {amenity}
                    </span>
                  ))}
                </div>

                <button onClick={() => router.push(`/exclusive-offer/${offer.id}`)} className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
