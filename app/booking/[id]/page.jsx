import Link from 'next/link'
import { Star, MapPin } from 'lucide-react'
import BookingForm from '@/components/BookingForm'

export default async function BookingPage({ params }) {
    const { id } = await params

    const properties = [
        { id: 1, name: 'Luxury Ocean Villa', location: 'Maldives', price: 450, rating: 4.9, reviews: 128, imageUrl: 'https://images.unsplash.com/photo-1501117716987-c8e5a3b8d6c9?auto=format&fit=crop&w=1200&q=80' },
        { id: 2, name: 'Mountain Lodge', location: 'Swiss Alps', price: 320, rating: 4.8, reviews: 95, imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80' },
        { id: 3, name: 'Beach Cottage', location: 'Santorini', price: 280, rating: 4.9, reviews: 112, imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80' },
        { id: 4, name: 'Urban Penthouse', location: 'New York', price: 520, rating: 4.7, reviews: 87, imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80' },
    ]

    const property = properties.find((p) => String(p.id) === String(id)) || {
        id,
        name: `Property #${id}`,
        location: 'Unknown',
        price: 200,
        rating: 4.5,
        reviews: 0,
        imageUrl: 'https://images.unsplash.com/photo-1501117716987-c8e5a3b8d6c9?auto=format&fit=crop&w=1200&q=80',
    }

    const nights = 1
    const subtotal = property.price * nights
    const taxes = Math.round(subtotal * 0.1)
    const total = subtotal + taxes

    return (
        <main className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="md:grid md:grid-cols-2">
                        <div className="p-8">
                            <h1 className="text-2xl font-bold mb-1">Confirm your booking</h1>
                            <p className="text-sm text-muted-foreground mb-6">You're booking <span className="font-semibold">{property.name}</span> — please provide traveler details to continue.</p>

                            {/* Booking form (client) */}
                            <BookingForm property={property} total={total} />
                        </div>

                        <aside className="border-l hidden md:block">
                            <div className="p-6">
                                <div className="rounded-md overflow-hidden">
                                    <img src={property.imageUrl} alt={property.name} className="w-full h-48 object-cover" />
                                </div>

                                <div className="mt-4">
                                    <h2 className="text-lg font-semibold">{property.name}</h2>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                        <MapPin size={14} /> <span>{property.location}</span>
                                    </div>

                                    <div className="flex items-center gap-2 mt-3">
                                        <Star size={16} className="fill-yellow-400 text-yellow-400" />
                                        <span className="font-semibold">{property.rating}</span>
                                        <span className="text-muted-foreground">({property.reviews} reviews)</span>
                                    </div>

                                    <div className="mt-6 bg-gray-50 rounded-lg p-4">
                                        <div className="flex justify-between text-sm">
                                            <span>Price</span>
                                            <span>${property.price}/night</span>
                                        </div>
                                        <div className="flex justify-between text-sm mt-2">
                                            <span>Nights</span>
                                            <span>{nights}</span>
                                        </div>
                                        <div className="flex justify-between text-sm mt-2 font-semibold">
                                            <span>Subtotal</span>
                                            <span>${subtotal}</span>
                                        </div>
                                        <div className="flex justify-between text-sm mt-2">
                                            <span>Taxes & fees</span>
                                            <span>${taxes}</span>
                                        </div>

                                        <div className="flex justify-between text-lg mt-4 font-bold">
                                            <span>Total</span>
                                            <span>${total}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </main>
    )
}
