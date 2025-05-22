import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // optional: specify weights you want
});

export default function SpecialOffers() {
  const offers = [
    {
      title: "Bridal Package",
      description: "Complete bridal makeup, hair styling, and pre-wedding skincare treatments",
      price: "₹25,000",
      originalPrice: "₹30,000",
      features: [
        "Pre-wedding consultation",
        "Trial makeup session",
        "Day-of bridal makeup",
        "Hairstyling",
        "Touch-up kit",
        "3 pre-wedding facials",
      ],
      popular: true,
    },
    {
      title: "Party Ready Package",
      description: "Look your best for any special occasion with our complete makeover",
      price: "₹5,000",
      originalPrice: "₹6,500",
      features: ["Professional makeup", "Hairstyling", "Mini facial", "Nail polish application"],
      popular: false,
    },
    {
      title: "Salon Membership",
      description: "Monthly membership with exclusive benefits and discounts",
      price: "₹2,500/month",
      originalPrice: "",
      features: [
        "1 facial per month",
        "1 haircut per month",
        "20% off all other services",
        "10% off products",
        "Priority booking",
      ],
      popular: false,
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className={`${playfair.className} text-3xl font-bold mb-4`}>Special Offers</h2>
        <p className="text-lg text-txtcol max-w-3xl mx-auto">
          Take advantage of our limited-time packages and special deals
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <Card key={index} className={`overflow-hidden ${offer.popular ? "border-primary" : ""}`}>
            <CardHeader>
              {offer.popular && <Badge className="absolute right-4 top-4">Popular</Badge>}
              <CardTitle>{offer.title}</CardTitle>
              <CardDescription>{offer.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-3xl font-bold">{offer.price}</span>
                {offer.originalPrice && (
                  <span className="text-muted-foreground line-through ml-2">{offer.originalPrice}</span>
                )}
              </div>
              <ul className="space-y-2">
                {offer.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 mr-2 text-primary shrink-0 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" className="w-full">
                <Button className="w-full" variant={offer.popular ? "default" : "outline"}>
                  Book Now
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/services">
          <Button size="lg">View All Packages</Button>
        </Link>
      </div>
    </section>
  )
}
