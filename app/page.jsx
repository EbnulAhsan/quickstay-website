import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Featured from '@/components/Featured'
import ExclusiveOffers from '@/components/ExclusiveOffers'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Featured />
      <ExclusiveOffers />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
