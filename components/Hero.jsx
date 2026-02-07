'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const buttonsRef = useRef([])
  const boxRef = useRef(null)

  useEffect(() => {
    // Animate heading with character reveal effect
    if (headingRef.current) {
      const heading = headingRef.current
      const originalText = heading.textContent
      heading.textContent = ''

      gsap.fromTo(
        heading,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          onStart: () => {
            heading.textContent = originalText
          }
        }
      )
    }

    // Animate paragraph
    if (paragraphRef.current) {
      gsap.fromTo(
        paragraphRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          delay: 0.2
        }
      )
    }

    // Animate buttons with stagger
    if (buttonsRef.current.length > 0) {
      gsap.fromTo(
        buttonsRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'back.out',
          stagger: 0.1,
          delay: 0.4
        }
      )
    }

    // Animate featured box
    if (boxRef.current) {
      gsap.fromTo(
        boxRef.current,
        { opacity: 0, scale: 0.8, x: 50 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.3
        }
      )

      // Add floating animation
      gsap.to(boxRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    }
  }, [])
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 ref={headingRef} className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Discover Your Perfect Getaway Destination
            </h1>
            <p ref={paragraphRef} className="text-xl text-muted-foreground">
              Find and book beautiful accommodations worldwide. Experience comfort, elegance, and unforgettable memories.
            </p>
            <div className="flex gap-4">
              <button ref={(el) => buttonsRef.current[0] = el} className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-blue-700 transition shadow-lg">
                Start Exploring
              </button>
              <button ref={(el) => buttonsRef.current[1] = el} className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-blue-50 transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="hidden md:block" ref={boxRef}>
            <div className="relative rounded-2xl aspect-square overflow-hidden">
              <img src="/bali.jpg" alt="Bali" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-sm font-medium mb-2">Featured Destination</p>
                  <p className="text-4xl font-bold">Bali</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
