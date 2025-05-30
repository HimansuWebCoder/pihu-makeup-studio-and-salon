import Link from "next/link"
import Image from "next/image"
import { Playfair_Display } from 'next/font/google';
import { Button } from "@/components/ui/button"

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // optional: specify weights you want
});

export default function Hero() {

  const users = [
    "/images/feedbackuser.png",
    "/images/feedbackuser4.png",
    "/images/feedbackuser2.png",
    "/images/feedbackuser3.png",
  ]

  return (
    <div className="relative">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide`}>Enhance Your Natural Glow at Pihu Salon</h1>
            <p className="text-xl text-txtcol font-cormorant">
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
                {users.map((user, i) => (
                  <div key={i} className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-background">
                    <Image
                      // src={`/placeholder.svg?height=40&width=40&text=${i}`}
                      src={`${user}`}
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
              src="/images/studio.jpg"
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
