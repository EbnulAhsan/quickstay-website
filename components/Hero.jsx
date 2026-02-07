'use client'

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Discover Your Perfect Getaway Destination
            </h1>
            <p className="text-xl text-muted-foreground">
              Find and book beautiful accommodations worldwide. Experience comfort, elegance, and unforgettable memories.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-blue-700 transition shadow-lg">
                Start Exploring
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-blue-50 transition">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-blue-200 to-blue-100 rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-sm font-medium mb-2">Featured Destination</p>
                <p className="text-4xl font-bold">Bali</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
