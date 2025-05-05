import Hero from "@/components/hero"
import OurExpertise from "@/components/our-expertise"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import SpecialOffers from "@/components/special-offers"
import PremiumCard from "@/components/premium-card"
import OurStudio from "@/components/our-studio"
import BookingCta from "@/components/booking-cta"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      <Hero />
      <OurExpertise />
      <Services />
      <Gallery />
      <OurStudio />
      <SpecialOffers />
      <PremiumCard />
      <Testimonials />
      <BookingCta />
    </div>
  )
}
