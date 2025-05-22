import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // optional: specify weights you want
});

export default function BookingCta() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-muted rounded-lg p-8 md:p-12 text-center">
        <h2 className={`${playfair.className} text-3xl text-muted-foreground font-bold mb-4`}>Ready to Transform Your Look?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Book an appointment with our expert team and experience the Pihu difference. Whether it's for a special
          occasion or a regular beauty treatment, we're here to help you look and feel your best.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">Book Appointment</Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="outline">
              Explore Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
