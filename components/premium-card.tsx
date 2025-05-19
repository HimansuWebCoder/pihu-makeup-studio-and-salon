"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PremiumCard() {
  const benefits = [
    "Priority booking for all services",
    "Exclusive access to new products and services",
    "Complimentary birthday and anniverasy makeover",
    "birthday and anniversary extra 5% discount",
    "Quarterly skin and hair consultation",
    "Personalized beauty plan",
  ]

  // const productPartners = [
  //   "https://www.geetanjalisalon.com/wp-content/uploads/2023/09/brands-1-300x129.jpg",
  //   "https://www.geetanjalisalon.com/wp-content/uploads/2023/09/brands-2-300x129.jpg"
  // ]

  // First row of brands
  // const brandsRow1 = ["MAC Cosmetics", "Estée Lauder", "L'Oréal Professional", "Kérastase", "Dermalogica", "OPI"]
  const brandsRow1 = [
    "https://www.geetanjalisalon.com/wp-content/uploads/2023/09/brands-1-300x129.jpg", 
    "https://www.geetanjalisalon.com/wp-content/uploads/2023/09/brands-2-300x129.jpg",
    "https://www.geetanjalisalon.com/wp-content/uploads/2023/09/brands-2-300x129.jpg",
    "https://www.geetanjalisalon.com/wp-content/uploads/2023/09/brands-2-300x129.jpg",
    "https://www.geetanjalisalon.com/wp-content/uploads/2023/09/brands-2-300x129.jpg",
  ]

  // Second row of brands (for continuous animation effect)
  // const brandsRow2 = ["Wella", "Schwarzkopf", "Clinique", "Lakme", "Kryolan", "Forest Essentials"]
  const brandsRow2 = [
    "https://www.geetanjalisalon.com/wp-content/uploads/2023/09/brands-1-300x129.jpg", 
    "https://www.geetanjalisalon.com/wp-content/uploads/2023/09/brands-2-300x129.jpg",
    "https://www.geetanjalisalon.com/wp-content/uploads/2023/09/brands-2-300x129.jpg",
    "https://www.geetanjalisalon.com/wp-content/uploads/2023/09/brands-2-300x129.jpg",
    "https://www.geetanjalisalon.com/wp-content/uploads/2023/09/brands-2-300x129.jpg",
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto mb-20">
        <Card className="overflow-hidden bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 border-rose-200 dark:border-rose-800">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-rose-700 dark:text-rose-300">Premium Membership Card</CardTitle>
            <CardDescription className="text-lg text-rose-600/80 dark:text-rose-400/80">
              Join our exclusive membership program and enjoy premium benefits
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-6 text-rose-700/90 dark:text-rose-300/90">
                  Our Premium Beauty Card gives you access to exclusive benefits and significant savings on our
                  services. Perfect for clients who regularly enjoy our beauty treatments.
                </p>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                      <span className="text-rose-700/90 dark:text-rose-300/90">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/80 dark:bg-black/20 p-6 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-2 text-rose-700 dark:text-rose-300">Annual Membership</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-rose-600 dark:text-rose-400">15% Discount</span>
                  <span className="text-rose-600/80 dark:text-rose-400/80">/2year</span>
                </div>
                <p className="mb-6 text-rose-700/90 dark:text-rose-300/90">
                  Save up to ₹30,000 annually with our premium membership benefits
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">Join Now</Button>
                </Link>
              </div>
            </div>
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-sm text-rose-600/70 dark:text-rose-400/70">
              Terms and conditions apply. Membership is valid for 24 months from the date of purchase.
            </p>
          </CardFooter>
        </Card>
      </div>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Our Product Partners</h2>
        <p className="text-lg text-center text-txtcol mb-12 max-w-3xl mx-auto">
          We use only the highest quality products from trusted brands to ensure exceptional results
        </p>

        <div className="relative overflow-hidden py-4">
          {/* First row - moving from left to right */}
          <div className="flex animate-marquee whitespace-nowrap">
            {brandsRow1.map((brand, index) => (
              <div key={index} className="mx-4 flex-shrink-0">
                <BrandLogo  img={brand} />
              </div>
            ))}
            {/*{brandsRow1.map((brand, index) => (
              <div key={`${index}-duplicate`} className="mx-4 flex-shrink-0">
                <BrandLogo name={brand} />
              </div>
            ))}*/}
          </div>

          {/* Second row - moving from right to left (opposite direction) */}
          <div className="flex animate-marquee-reverse whitespace-nowrap mt-8">
            {brandsRow2.map((brand, index) => (
              <div key={index} className="mx-4 flex-shrink-0">
                <BrandLogo  img={brand} />
              </div>
            ))}
            {/*{brandsRow2.map((brand, index) => (
              <div key={`${index}-duplicate`} className="mx-4 flex-shrink-0">
                <BrandLogo name={brand} />
              </div>
            ))}*/}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>
    </section>
  )
}

function BrandLogo({ img }: { img: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-background rounded-lg border border-border hover:shadow-md transition-shadow w-40">
      {/*<div className="relative h-12 w-full mb-2">*/}
        {/*<div className="absolute inset-0 flex items-center justify-center">*/}
          {/*<div className="w-full h-full flex items-center justify-center">*/}
            {/* This would be replaced with an actual logo image */}
            {/*<div className="w-full h-full bg-muted  flex items-center justify-center">*/}
              {/*<span className="text-xs font-medium text-muted-foreground">{name.charAt(0)}</span>*/}
            {/*<img src="https://www.geetanjalisalon.com/wp-content/uploads/2023/09/brands-2-300x129.jpg"  />*/}
            <img src={img} alt="brand partners image" />
            {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}
      {/*</div>*/}
      {/*<span className="text-xs text-center font-medium">{name}</span>*/}
    </div>
  )
}
