import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OurStudio() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Studio</h2>
        <p className="text-lg text-txtcol max-w-3xl mx-auto">
          Experience beauty in our elegant and comfortable studio environment
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-semibold mb-4">A Space Designed for Beauty</h3>
          <p className="text-txtcol mb-4">
            Our studio is designed to provide a relaxing and luxurious experience.
            At Pihu Makeup Studio and Salon, we want you to feel relaxed and special.
          </p>
          <p className="text-txtcol mb-6">
            We use the best tools and create a cozy, calm space so you can enjoy your time with us and leave feeling great.
            Our studio is right in the heart of the city, a peaceful spot where you can take a break from the busy world. We’re a small, friendly team of two, and we’re here to give you personal care and make sure you have a wonderful experience.
          </p>
          <Link href="/gallery">
            <Button>View Studio Gallery</Button>
          </Link>
        </div>
        <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image src="/images/studio.png" alt="Studio interior" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/images/studio.png" alt="Makeup station" fill className="object-cover" />
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/studio.png"
                alt="Hair styling area"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image src="/images/studio.png" alt="Reception area" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">13+</div>
          <p className="text-txtcol">Years of Experience</p>
        </div>
       {/* <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">2+</div>
          <p className="text-txtcol">Professional Artists</p>
        </div>*/}
        <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">500+</div>
          <p className="text-txtcol">Happy Clients</p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">500+</div>
          <p className="text-txtcol">Bridal Makeovers</p>
        </div>
      </div>
    </section>
  )
}
