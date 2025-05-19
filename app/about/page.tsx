import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1  className="text-4xl font-bold text-center mb-8">About Pihu Makeup Studio and Salon</h1>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg mb-4">
            Since 2023, Pihu Makeup Studio and Salon has been committed to delivering high-quality, luxurious beauty experiences that are safe, long-lasting, and enhance your natural elegance — all with no side effects. Step into a world of peace, care, and timeless beauty.
          </p>
         {/* <p className="text-lg mb-4">
            Our founder, Anjali, started with a small studio and a big dream - to create a space where clients could
            transform and feel their absolute best.
          </p>*/}
          
          <Link href="/contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
        </div>
        <div className="relative h-[500px] rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=500&width=600" alt="Pihu Makeup Studio" fill className="object-cover" />
        </div>
      </div>

      <div className="bg-muted p-8 rounded-lg mb-16">
        <h2 className="text-3xl text-muted-foreground font-semibold text-center mb-8">Our Mission</h2>
        <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
          "At Pihu Makeup Studio and Salon, we believe beauty should be timeless. Our mission is to offer premium, gentle, and transformative services that make you feel confidently beautiful inside and out."
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Quality Products</h3>
          <p>
            We use only high-quality, premium and organic products that deliver exceptional results while being kind to your skin
            and the environment.
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
          <p>
            Our stylists and makeup artists are continuously trained in the latest techniques and trends to provide you
            with cutting-edge services.
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Personalized Service</h3>
          <p>We believe in customized beauty solutions that complement your unique features, style, and personality.</p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Visit Us Today</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Experience the Pihu difference for yourself. Whether you're preparing for a special occasion or treating
          yourself to some well-deserved self-care, we're here to make you look and feel amazing.
        </p>
        <Link href="/services">
          <Button size="lg" variant="secondary" className="mb-2 mr-2">
            Explore Services
          </Button>
        </Link>
        <Link href="/contact">
          <Button size="lg">Book Appointment</Button>
        </Link>
      </div>
    </div>
  )
}
