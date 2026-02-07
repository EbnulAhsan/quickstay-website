'use client'

import { Heart, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function ExclusiveOffers() {
  const [likes, setLikes] = useState({})

  const offers = [
    {
      id: 1,
      name: 'Tropical Paradise Resort',
      location: 'Thailand',
      originalPrice: '$280',
      discountedPrice: '$189',
      discount: '32% OFF',
      image: 'bg-gradient-to-br from-green-200 to-emerald-200',
      amenities: ['WiFi', 'Pool', 'Spa', 'Gym']
    },
    {
      id: 2,
      name: 'Heritage Manor',
      location: 'Scotland',
      originalPrice: '$220',
      discountedPrice: '$149',
      discount: '32% OFF',
      image: 'bg-gradient-to-br from-purple-200 to-pink-200',
      amenities: ['Restaurant', 'Library', 'Fireplace', 'Garden']
    },
    {
      id: 3,
      name: 'Modern Loft',
      location: 'Paris',
      originalPrice: '$310',
      discountedPrice: '$210',
      discount: '32% OFF',
      image: 'bg-gradient-to-br from-amber-200 to-orange-200',
      amenities: ['Kitchen', 'Balcony', 'Museum', 'Café']
    }
  ]

  const toggleLike = (id) => {
    setLikes(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <section id="offers" className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-2">Exclusive Offers</h2>
          <p className="text-muted-foreground">Limited time deals on premium properties</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className={`h-48 ${offer.image} relative`}>
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

                <button className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition">
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
