import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PremiumCard() {
  const benefits = [
    "Priority booking for all services",
    "Exclusive access to new products and services",
    "Complimentary birthday makeover",
    "25% discount on all regular services",
    "Quarterly makeup or hair consultation",
    "Personalized beauty plan",
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Card className="overflow-hidden bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 border-rose-200 dark:border-rose-800">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-rose-700 dark:text-rose-300">Premium Beauty Card</CardTitle>
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
                  <span className="text-4xl font-bold text-rose-600 dark:text-rose-400">₹15,000</span>
                  <span className="text-rose-600/80 dark:text-rose-400/80">/year</span>
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
              Terms and conditions apply. Membership is valid for 12 months from the date of purchase.
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
