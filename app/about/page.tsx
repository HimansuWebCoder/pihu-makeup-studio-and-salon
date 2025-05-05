import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">About Pihu Makeup Studio and Salon</h1>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg mb-4">
            Founded in 2015, Pihu Makeup Studio and Salon has been dedicated to bringing out the natural beauty in
            everyone who walks through our doors.
          </p>
          <p className="text-lg mb-4">
            Our founder, Pihu, started with a small studio and a big dream - to create a space where clients could
            transform and feel their absolute best.
          </p>
          <p className="text-lg mb-6">
            Today, we've grown into a full-service beauty destination with a team of talented professionals who share
            Pihu's passion for beauty, creativity, and exceptional client care.
          </p>
          <Link href="/contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
        </div>
        <div className="relative h-[500px] rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=500&width=600" alt="Pihu Makeup Studio" fill className="object-cover" />
        </div>
      </div>

      <div className="bg-muted p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Mission</h2>
        <p className="text-xl text-center max-w-3xl mx-auto">
          "To enhance natural beauty through artistic makeup and salon services, creating transformative experiences
          that empower our clients to look and feel their absolute best."
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Quality Products</h3>
          <p>
            We use only premium, cruelty-free products that deliver exceptional results while being kind to your skin
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
          <Button size="lg" variant="secondary" className="mr-4">
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
