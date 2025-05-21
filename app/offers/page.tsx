import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, Percent, Tag, Check } from "lucide-react"
import CouponVoucher from "@/components/coupon-voucher"

export default function OffersPage() {
  const currentOffers = [
    {
      id: "1",
      title: "Bridal Package Special",
      description: "Complete bridal makeup, hair styling, and pre-wedding skincare treatments",
      discount: "20% OFF",
      originalPrice: "₹30,000",
      discountedPrice: "₹24,000",
      validUntil: "June 30, 2025",
      image: "/placeholder.svg?height=300&width=600",
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
      id: "2",
      title: "Monsoon Hair Spa Offer",
      description: "Revitalize your hair with our premium hair spa treatment",
      discount: "15% OFF",
      originalPrice: "₹3,500",
      discountedPrice: "₹2,975",
      validUntil: "July 15, 2025",
      image: "/placeholder.svg?height=300&width=600",
      features: [
        "Deep conditioning treatment",
        "Scalp massage",
        "Hair mask application",
        "Steam therapy",
        "Blow dry styling",
      ],
      popular: false,
    },
    {
      id: "3",
      title: "Party Ready Package",
      description: "Look your best for any special occasion with our complete makeover",
      discount: "25% OFF",
      originalPrice: "₹6,500",
      discountedPrice: "₹4,875",
      validUntil: "May 31, 2025",
      image: "/placeholder.svg?height=300&width=600",
      features: [
        "Professional makeup",
        "Hairstyling",
        "Mini facial",
        "Nail polish application",
        "Complimentary touch-up kit",
      ],
      popular: false,
    },
    {
      id: "4",
      title: "Summer Glow Facial",
      description: "Hydrating and brightening facial perfect for summer",
      discount: "10% OFF",
      originalPrice: "₹2,500",
      discountedPrice: "₹2,250",
      validUntil: "June 15, 2025",
      image: "/placeholder.svg?height=300&width=600",
      features: ["Deep cleansing", "Exfoliation", "Hydrating mask", "Vitamin C serum application", "SPF protection"],
      popular: false,
    },
    {
      id: "5",
      title: "First-Time Client Special",
      description: "Special discount for first-time clients",
      discount: "30% OFF",
      originalPrice: "Varies",
      discountedPrice: "30% off any service",
      validUntil: "Ongoing",
      image: "/placeholder.svg?height=300&width=600",
      features: [
        "Valid on any service",
        "One-time use only",
        "Cannot be combined with other offers",
        "Must mention offer when booking",
      ],
      popular: true,
    },
    {
      id: "6",
      title: "Mani-Pedi Combo",
      description: "Treat your hands and feet to our luxurious manicure and pedicure combo",
      discount: "15% OFF",
      originalPrice: "₹2,000",
      discountedPrice: "₹1,700",
      validUntil: "June 30, 2025",
      image: "/placeholder.svg?height=300&width=600",
      features: [
        "Classic manicure",
        "Classic pedicure",
        "Hand and foot massage",
        "Nail polish application",
        "Paraffin wax treatment",
      ],
      popular: false,
    },
  ]

  const membershipOffers = [
    {
      id: "m1",
      title: "Silver Membership",
      description: "Perfect for occasional salon visits",
      price: "₹5,000/year",
      image: "/placeholder.svg?height=200&width=400",
      benefits: ["10% off all services", "5% off all products", "Priority booking", "Complimentary birthday treatment"],
    },
    {
      id: "m2",
      title: "Gold Membership",
      description: "Ideal for regular salon goers",
      price: "₹10,000/year",
      image: "/placeholder.svg?height=200&width=400",
      benefits: [
        "15% off all services",
        "10% off all products",
        "Priority booking",
        "Complimentary birthday treatment",
        "Quarterly hair treatment",
      ],
    },
    {
      id: "m3",
      title: "Platinum Membership",
      description: "The ultimate salon experience",
      price: "₹15,000/year",
      image: "/placeholder.svg?height=200&width=400",
      benefits: [
        "25% off all services",
        "15% off all products",
        "VIP priority booking",
        "Complimentary birthday makeover",
        "Monthly hair treatment",
        "Quarterly facial",
        "Exclusive event invitations",
      ],
    },
  ]

  // Premium Membership Card benefits
  const benefits = [
    "Priority booking for all services",
    "Exclusive access to new products and services",
    "Complimentary birthday and anniverasy makeover",
    "birthday and anniversary extra 5% discount",
    "Quarterly skin and hair consultation",
    "Personalized beauty plan",
  ]

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-4">Special Offers</h1>
      <p className="text-lg text-center text-txtcol mb-12 max-w-3xl mx-auto">
        Take advantage of our limited-time offers and exclusive deals to save on your favorite beauty services
      </p>

      {/* Premium Membership Card */}
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
                  Our Premium Membership Card gives you access to exclusive benefits and significant savings on our
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
                  <span className="text-rose-600/80 dark:text-rose-400/80">2/year</span>
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

      {/* Coupon Voucher Section */}
      <CouponVoucher />

      {/* Current Offers */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Current Promotions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentOffers.map((offer) => (
            <Card key={offer.id} className={`overflow-hidden ${offer.popular ? "border-primary" : ""}`}>
              <div className="relative h-48 w-full">
                <Image src={offer.image || "/placeholder.svg"} alt={offer.title} fill className="object-cover" />
                <div className="absolute top-4 right-4">
                  <Badge variant="destructive" className="text-sm font-bold px-3 py-1 bg-red-600">
                    {offer.discount}
                  </Badge>
                </div>
                {offer.popular && (
                  <div className="absolute top-4 left-4">
                    <Badge className="text-sm font-bold px-3 py-1 bg-primary">Popular</Badge>
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle>{offer.title}</CardTitle>
                <CardDescription>{offer.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-4">
                  <Tag className="h-4 w-4 mr-2 text-txtcol" />
                  <div>
                    <span className="text-2xl font-bold">{offer.discountedPrice}</span>
                    <span className="text-txtcol line-through ml-2">{offer.originalPrice}</span>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <CalendarDays className="h-4 w-4 mr-2 text-txtcol" />
                  <span className="text-sm text-txtcol">Valid until: {offer.validUntil}</span>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">What's Included:</h4>
                  <ul className="space-y-1">
                    {offer.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 mr-2 text-primary shrink-0 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full">Book Now</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Membership Offers */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Membership Plans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {membershipOffers.map((membership) => (
            <Card key={membership.id} className="overflow-hidden">
              <div className="relative h-40 w-full">
                <Image
                  src={membership.image || "/placeholder.svg"}
                  alt={membership.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{membership.title}</CardTitle>
                <CardDescription>{membership.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-2xl font-bold">{membership.price}</span>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Membership Benefits:</h4>
                  <ul className="space-y-1">
                    {membership.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 mr-2 text-primary shrink-0 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full" variant={membership.id === "m3" ? "default" : "outline"}>
                    Join Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Seasonal Offers */}
      <div className="mb-20">
        <div className="bg rounded-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Summer Special Package</h2>
              <p className="text-txtcol mb-6">
                Get ready for summer with our special package designed to give you that perfect summer glow. Limited
                time offer!
              </p>
              <div className="flex items-center mb-4">
                <Percent className="h-5 w-5 mr-2 text-primary" />
                <span className="text-xl font-bold">40% OFF on the complete package</span>
              </div>
              <div className="flex items-center mb-6">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                <span>Valid until June 30, 2025</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Summer Glow Facial
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Full Body Polishing
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Pedicure with Foot Massage
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Hair Spa Treatment
                </li>
              </ul>
              <div className="flex items-center">
                <span className="text-2xl font-bold mr-4">₹7,999</span>
                <span className="text-xl text-txtcol line-through">₹13,500</span>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button size="lg">Book This Offer</Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Summer Special Package"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Referral Program */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Refer a Friend</h2>
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-rose-700 dark:text-rose-300">
            Refer a Friend and Both Get 20% OFF
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto text-rose-700/90 dark:text-rose-300/90">
            Love your experience at Pihu Makeup Studio and Salon? Refer a friend and you'll both receive 20% off your
            next service!
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/80 dark:bg-black/20 p-6 rounded-lg">
              <div className="text-3xl font-bold text-rose-600 dark:text-rose-400 mb-4">1</div>
              <h4 className="text-xl font-semibold mb-2 text-rose-700 dark:text-rose-300">Refer a Friend</h4>
              <p className="text-rose-700/90 dark:text-rose-300/90">Share your referral code with friends and family</p>
            </div>
            <div className="bg-white/80 dark:bg-black/20 p-6 rounded-lg">
              <div className="text-3xl font-bold text-rose-600 dark:text-rose-400 mb-4">2</div>
              <h4 className="text-xl font-semibold mb-2 text-rose-700 dark:text-rose-300">Friend Books</h4>
              <p className="text-rose-700/90 dark:text-rose-300/90">They book and mention your name or referral code</p>
            </div>
            <div className="bg-white/80 dark:bg-black/20 p-6 rounded-lg">
              <div className="text-3xl font-bold text-rose-600 dark:text-rose-400 mb-4">3</div>
              <h4 className="text-xl font-semibold mb-2 text-rose-700 dark:text-rose-300">Both Save</h4>
              <p className="text-rose-700/90 dark:text-rose-300/90">You both receive 20% off your next service</p>
            </div>
          </div>
          <Link href="/contact">
            <Button className="bg-rose-600 hover:bg-rose-700 text-white">Get Your Referral Code</Button>
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Book Your Appointment?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Don't miss out on these limited-time offers. Contact us today to book your appointment and take advantage of
          these special deals.
        </p>
        <Link href="/contact">
          <Button size="lg">Book Now</Button>
        </Link>
      </div>
    </div>
  )
}
