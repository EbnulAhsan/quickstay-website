'use client'

import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Anderson',
      location: 'New York, USA',
      rating: 5,
      text: 'QuickStay made my vacation planning incredibly easy. The property exceeded all my expectations!',
      avatar: 'bg-gradient-to-br from-pink-300 to-rose-300'
    },
    {
      id: 2,
      name: 'Marco Rossi',
      location: 'Milan, Italy',
      rating: 5,
      text: 'Professional service, beautiful accommodations, and unbeatable prices. Highly recommended!',
      avatar: 'bg-gradient-to-br from-blue-300 to-indigo-300'
    },
    {
      id: 3,
      name: 'Emily Chen',
      location: 'Singapore',
      rating: 5,
      text: 'The customer support team was fantastic. They helped me with every detail of my stay.',
      avatar: 'bg-gradient-to-br from-purple-300 to-pink-300'
    }
  ]

  return (
    <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-2">What Our Guests Say</h2>
          <p className="text-muted-foreground text-lg">Trusted by thousands of travelers worldwide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-secondary rounded-xl p-8 shadow-md hover:shadow-lg transition">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-full ${testimonial.avatar}`} />
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
