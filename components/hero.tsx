import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Enhance Your Natural Glow at Pihu Salon</h1>
            <p className="text-xl text-txtcol">
              Professional makeup and salon services to enhance your unique beauty. Experience the beauty and care at Pihu Makeup Studio and Salon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button size="lg">Our Services</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Book Appointment
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-background">
                    <Image
                      src={`/placeholder.svg?height=40&width=40&text=${i}`}
                      alt={`Customer ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="font-medium">Trusted by 1000+ clients</div>
                <div className="text-sm text-txtcol">5-star rated services</div>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/pihu.webp?height=500&width=600"
              alt="Makeup artist at work"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
