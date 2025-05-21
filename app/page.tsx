import Hero from "@/components/hero"
import OurExpertise from "@/components/our-expertise"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import SpecialOffers from "@/components/special-offers"
import PremiumCard from "@/components/premium-card"
import OurStudio from "@/components/our-studio"
import BookingCta from "@/components/booking-cta"
import HomeFAQ from "@/components/home-faq"
import ServicesList from "@/components/services-list"
import CouponVoucher from "@/components/coupon-voucher"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      <Hero />
      <OurExpertise />
      <Services />
      <ServicesList />
      <Gallery />
      <OurStudio />
      <SpecialOffers />
      <CouponVoucher />
      <PremiumCard />
      <Testimonials />
      <HomeFAQ />
      <BookingCta />
    </div>
  )
}
