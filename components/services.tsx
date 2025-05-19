import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      title: "Bridal Makeup",
      description: "Complete bridal packages for your special day",
      image: "/placeholder.svg?height=300&width=400",
      link: "/services",
    },
    {
      title: "Party Makeup",
      description: "Glamorous looks for any event or celebration",
      image: "/placeholder.svg?height=300&width=400",
      link: "/services",
    },
    {
      title: "Hair Styling/Treatment",
      description: "Cuts, colors, treatments and styling by expert stylists",
      image: "/placeholder.svg?height=300&width=400",
      link: "/services",
    },
    {
      title: "Skincare",
      description: "Facials and treatments for radiant skin",
      image: "/placeholder.svg?height=300&width=400",
      link: "/services",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
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
