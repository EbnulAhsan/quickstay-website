'use client'

import { MessageCircle } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to Explore?
            </h2>
            <p className="text-xl text-blue-100">
              Get personalized recommendations and exclusive deals sent directly to your inbox. Our travel experts are here to help.
            </p>
            <button className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-blue-50 transition shadow-lg inline-block">
              Start Planning Today
            </button>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20">
            <div className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Destination</label>
                <select className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Select a destination...</option>
                  <option>Bali</option>
                  <option>Paris</option>
                  <option>Tokyo</option>
                  <option>New York</option>
                  <option>London</option>
                </select>
              </div>
              <button className="w-full py-3 bg-white text-primary font-bold rounded-lg hover:bg-blue-50 transition">
                Get Recommendations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
