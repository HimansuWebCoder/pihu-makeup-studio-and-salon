import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OurStudio() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Studio</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Experience beauty in our elegant and comfortable studio environment
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-semibold mb-4">A Space Designed for Beauty</h3>
          <p className="text-muted-foreground mb-4">
            Our studio is designed to provide a relaxing and luxurious experience. With state-of-the-art equipment and a
            comfortable atmosphere, we ensure that your time with us is as enjoyable as the results.
          </p>
          <p className="text-muted-foreground mb-6">
            Located in the heart of the city, Pihu Makeup Studio and Salon offers a tranquil escape from the hustle and
            bustle. Our team of professionals is dedicated to providing you with exceptional service in a welcoming
            environment.
          </p>
          <Link href="/gallery">
            <Button>View Studio Gallery</Button>
          </Link>
        </div>
        <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=200&width=300" alt="Studio interior" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=300&width=300" alt="Makeup station" fill className="object-cover" />
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Hair styling area"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=200&width=300" alt="Reception area" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">13+</div>
          <p className="text-muted-foreground">Years of Experience</p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">2+</div>
          <p className="text-muted-foreground">Professional Artists</p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">500+</div>
          <p className="text-muted-foreground">Happy Clients</p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">50+</div>
          <p className="text-muted-foreground">Bridal Makeovers</p>
        </div>
      </div>
    </section>
  )
}
