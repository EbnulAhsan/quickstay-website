'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-primary">QuickStay</div>
          
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#home" className="text-foreground hover:text-primary transition">Home</a>
            <a href="#properties" className="text-foreground hover:text-primary transition">Properties</a>
            <a href="#offers" className="text-foreground hover:text-primary transition">Offers</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition">Reviews</a>
          </nav>

          <div className="hidden md:flex gap-4">
            <button className="px-6 py-2 text-primary font-medium hover:bg-secondary rounded-lg transition">
              Sign In
            </button>
            <button className="px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition">
              Book Now
            </button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#home" className="text-foreground hover:text-primary">Home</a>
            <a href="#properties" className="text-foreground hover:text-primary">Properties</a>
            <a href="#offers" className="text-foreground hover:text-primary">Offers</a>
            <a href="#testimonials" className="text-foreground hover:text-primary">Reviews</a>
            <button className="w-full px-4 py-2 bg-primary text-white font-medium rounded-lg">
              Book Now
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
