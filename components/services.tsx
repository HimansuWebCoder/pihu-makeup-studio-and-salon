import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // optional: specify weights you want
});

export default function Services() {
  const services = [
    {
      title: "Bridal Makeup",
      description: "Complete bridal packages for your special day",
      image: "/images/bridal6.jpg",
      link: "/services",
      features: [
        "Traditional & Modern Bridal Makeup",
        "Pre-Wedding Makeup",
        "Reception Makeup",
        "Engagement Looks",
        "Family & Bridal Party Makeup",
        "On-location Services Available",
      ],
    },
    {
      title: "Party Makeup",
      description: "Glamorous looks for any event or celebration",
      image: "/images/party4.jpg",
      link: "/services",
      features: [
        "Evening & Cocktail Makeup",
        "HD & Airbrush Makeup",
        "Celebrity-inspired Looks",
        "Hairstyling Included",
        "Long-lasting Products",
      ],
    },
    {
      title: "Hair Styling",
      description: "Cuts, colors, and styling by expert stylists",
      image: "/images/hair34.jpg",
      link: "/services",
      features: [
            "Global Color & Highlights",
            "Hair Fall Control & Repair",
            "Hair Growth Treatments",
            "Root Touch-Up",
            "Botox",
            "Neoplex Treatments",
            "Keratin",
            "Ironing / Curls",
      ],
    },
    {
      title: "Skincare",
      description: "Facials and treatments for radiant skin",
      image: "images/skincare1.jpg",
      link: "/services",
      features: [
        "Customized Facials",
        "Hydra Facial",
        "D-Tan & Bleach",
        "Acne & Pigmentation Care",
        "Hydrating Treatments",
      ],
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className={`${playfair.className} text-3xl font-bold mb-4`}>Our Services</h2>
        <p className="text-lg text-txtcol max-w-3xl mx-auto">
          Discover our range of professional beauty services designed to enhance your natural beauty
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <div className="px-6 pb-4">
              <ul className="space-y-1 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <Check className="h-4 w-4 mr-2 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <CardFooter>
              <Link href={service.link} className="w-full">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/services">
          <Button size="lg">View All Services</Button>
        </Link>
      </div>
    </section>
  )
}
