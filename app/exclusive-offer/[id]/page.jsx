'use client'

import Link from 'next/link'
import { Star, MapPin, Check } from 'lucide-react'
import { useRef, useEffect, use } from 'react'
import gsap from 'gsap'

export default function ExclusiveOfferPage({ params }) {
    const contentRef = useRef(null)
    const sidebarRef = useRef(null)
    const { id } = use(params)

    const offers = [
        {
            id: 1,
            name: 'Tropical Paradise Resort',
            location: 'Thailand',
            originalPrice: 280,
            discountedPrice: 189,
            discount: '32% OFF',
            imageUrl: '/tropical.jpg',
            amenities: ['WiFi', 'Pool', 'Spa', 'Gym'],
            rating: 4.8,
            reviews: 156,
            description: 'Experience paradise at our tropical resort nestled in the heart of Thailand. Enjoy pristine beaches, crystal clear waters, and world-class amenities. Perfect for couples and families seeking an unforgettable tropical getaway.',
            highlights: [
                'Beachfront private access',
                'All-inclusive meals',
                'Free airport transfer',
                'Sunset spa packages',
                '24/7 concierge service'
            ],
            validUntil: 'Feb 28, 2026'
        },
        {
            id: 2,
            name: 'Heritage Manor',
            location: 'Scotland',
            originalPrice: 220,
            discountedPrice: 149,
            discount: '32% OFF',
            imageUrl: '/heritage.jpg',
            amenities: ['Restaurant', 'Library', 'Fireplace', 'Garden'],
            rating: 4.7,
            reviews: 98,
            description: 'Step back in time at this stunning heritage manor in the Scottish Highlands. Experience luxury in historic settings with modern comforts. Ideal for those seeking elegance and tranquility.',
            highlights: [
                'Guided estate tours',
                'Fine dining restaurant',
                'Historic library access',
                'Garden walks',
                'Whisky tasting sessions'
            ],
            validUntil: 'Feb 28, 2026'
        },
        {
            id: 3,
            name: 'Modern Loft',
            location: 'Paris',
            originalPrice: 310,
            discountedPrice: 210,
            discount: '32% OFF',
            imageUrl: '/moder.jpg',
            amenities: ['Kitchen', 'Balcony', 'Museum', 'Café'],
            rating: 4.9,
            reviews: 203,
            description: 'Discover modern luxury in the heart of Paris. Our contemporary loft offers stunning city views, designer furnishings, and proximity to world-renowned museums and cafés.',
            highlights: [
                'City view balcony',
                'Fully-equipped kitchen',
                'Museum access passes',
                'Local café coupons',
                'Metro card included'
            ],
            validUntil: 'Feb 28, 2026'
        }
    ]

    const offer = offers.find((o) => String(o.id) === String(id))

    // GSAP animations on mount
    useEffect(() => {
        if (contentRef.current && sidebarRef.current) {
            // Animate main content from left with fade
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }
            )

            // Animate sidebar from right with fade
            gsap.fromTo(
                sidebarRef.current,
                { opacity: 0, x: 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    delay: 0.2
                }
            )
        }
    }, [])

    if (!offer) {
        return (
            <main className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Offer not found</h1>
                    <Link href="/" className="text-primary mt-4 inline-block">
                        Back to Home
                    </Link>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Hero */}
                <div className="relative h-96">
                    <img src={offer.imageUrl} alt={offer.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/20" />
                    <Link href="/" className="absolute top-6 left-6 px-4 py-2 bg-white text-foreground rounded-lg hover:bg-gray-100">
                        ← Back
                    </Link>
                </div>

                {/* Content */}
                <div className="px-4 py-12">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="md:col-span-2" ref={contentRef}>
                            <div className="bg-white rounded-lg p-8 shadow-sm">
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <h1 className="text-4xl font-bold text-foreground mb-2">{offer.name}</h1>
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <MapPin size={18} />
                                            <span className="text-lg">{offer.location}</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-semibold text-red-500 bg-red-50 px-3 py-1 rounded-full inline-block">
                                            {offer.discount}
                                        </div>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-3 mb-8 pb-8 border-b">
                                    <div className="flex items-center gap-1">
                                        <Star size={18} className="fill-yellow-400 text-yellow-400" />
                                        <span className="font-semibold">{offer.rating}</span>
                                    </div>
                                    <span className="text-muted-foreground">({offer.reviews} reviews)</span>
                                </div>

                                {/* Description */}
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold mb-4">About this offer</h2>
                                    <p className="text-muted-foreground leading-relaxed text-lg">{offer.description}</p>
                                </div>

                                {/* Amenities */}
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold mb-4">Amenities</h2>
                                    <div className="grid grid-cols-2 gap-3">
                                        {offer.amenities.map((amenity, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-foreground">
                                                <div className="w-2 h-2 bg-primary rounded-full" />
                                                <span>{amenity}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Highlights */}
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold mb-4">Why guests love this offer</h2>
                                    <div className="space-y-3">
                                        {offer.highlights.map((highlight, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <Check size={20} className="text-green-500 flex-shrink-0" />
                                                <span className="text-foreground">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar - Booking Card */}
                        <div ref={sidebarRef}>
                            <div className="bg-white rounded-lg p-8 shadow-sm sticky top-8">
                                <div className="mb-6">
                                    <div className="text-muted-foreground text-sm mb-2">Total price</div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold text-primary">${offer.discountedPrice}</span>
                                        <span className="text-lg text-muted-foreground line-through">${offer.originalPrice}</span>
                                    </div>
                                    <p className="text-sm text-red-500 font-semibold mt-2">You save ${offer.originalPrice - offer.discountedPrice}</p>
                                </div>

                                <div className="mb-6 pb-6 border-b space-y-3">
                                    <div>
                                        <p className="text-sm text-muted-foreground">Per night</p>
                                        <p className="text-lg font-semibold">${offer.discountedPrice}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Valid until</p>
                                        <p className="text-lg font-semibold">{offer.validUntil}</p>
                                    </div>
                                </div>

                                <Link href={`/booking/exclusive-${offer.id}`} className="w-full py-3 bg-primary text-white rounded-lg font-semibold text-center hover:bg-blue-700 transition block mb-3">
                                    Reserve Now
                                </Link>

                                <Link href="/" className="w-full py-3 bg-gray-100 text-foreground rounded-lg font-semibold text-center hover:bg-gray-200 transition block">
                                    Continue browsing
                                </Link>

                                <p className="text-xs text-muted-foreground text-center mt-4">Limited availability at this price</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
