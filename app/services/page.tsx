import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
      <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
        Discover our comprehensive range of beauty and salon services designed to enhance your natural beauty
      </p>

      <Tabs defaultValue="makeup" className="w-full mb-16">
        <TabsList className="grid w-full h-auto grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="makeup">Makeup</TabsTrigger>
          <TabsTrigger value="hair">Hair</TabsTrigger>
          <TabsTrigger value="skincare">Skincare</TabsTrigger>
          <TabsTrigger value="nails">Nails</TabsTrigger>
        </TabsList>

        <TabsContent value="makeup" className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              title="Bridal Makeup"
              description="Complete bridal makeup package including trials, day-of makeup, and touch-ups"
              price="₹10,000-₹15,000"
              image="/placeholder.svg?height=200&width=300"
            />
            <ServiceCard
              title="Party Makeup"
              description="Glamorous makeup for special events and parties"
              price="₹3,500"
              image="/placeholder.svg?height=200&width=300"
            />
            <ServiceCard
              title="Natural Everyday Look"
              description="Subtle enhancement for a polished everyday appearance"
              price="₹2,000"
              image="/placeholder.svg?height=200&width=300"
            />
            <ServiceCard
              title="HD Makeup"
              description="Camera-ready makeup using HD techniques and products"
              price="₹4,500"
              image="/placeholder.svg?height=200&width=300"
            />
            <ServiceCard
              title="Airbrush Makeup"
              description="Flawless, long-lasting makeup application using airbrush technology"
              price="₹5,000"
              image="/placeholder.svg?height=200&width=300"
            />
            <ServiceCard
              title="Eye Makeup"
              description="Focused eye makeup service including lashes"
              price="₹1,500"
              image="/placeholder.svg?height=200&width=300"
            />
          </div>
        </TabsContent>

        <TabsContent value="hair" className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              title="Haircut & Styling"
              description="Professional haircut and styling tailored to your face shape and preferences"
              price="₹1,200"
              image="/placeholder.svg?height=200&width=300"
            />
            <ServiceCard
              title="Hair Coloring"
              description="Full hair coloring services including highlights, balayage, and ombre"
              price="₹3,500"
              image="/placeholder.svg?height=200&width=300"
            />
            <ServiceCard
              title="Bridal Hair"
              description="Elaborate bridal hairstyling including trials"
              price="₹8,000"
              image="/placeholder.svg?height=200&width=300"
            />
            <ServiceCard
              title="Hair Treatments"
              description="Nourishing treatments for damaged hair"
              price="₹2,500"
              image="/placeholder.svg?height=200&width=300"
            />
            <ServiceCard
              title="Hair Extensions"
              description="Professional application of high-quality hair extensions"
              price="₹10,000"
              image="/placeholder.svg?height=200&width=300"
            />
            <ServiceCard
              title="Blowout"
              description="Professional blow dry and styling"
              price="₹800"
              image="/placeholder.svg?height=200&width=300"
            />
          </div>
        </TabsContent>

        <TabsContent value="skincare" className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              title="Facial"
              description="Deep cleansing facial customized for your skin type"
              price="₹2,000"
              image="/placeholder.svg?height=200&width=300"
            />
            <ServiceCard
              title="Chemical Peel"
              description="Exfoliating treatment to improve skin texture and tone"
              price="₹3,500"
              image="/placeholder.svg?height=200&width=300"
            />
            <ServiceCard
              title="Microdermabrasion"
              description="Non-invasive exfoliation for smoother, brighter skin"
              price="₹3,000"
              image="/placeholder.svg?height=200&width=300"
            />
            <ServiceCard
              title="Hydrafacial"
              description="Multi-step treatment for deep hydration and cleansing"
              price="₹4,500"
              image="/placeholder.svg?height=200&width=300"
            />
            <ServiceCard
              title="Anti-Aging Treatment"
              description="Specialized treatment targeting fine lines and wrinkles"
              price="₹5,000"
              image="/placeholder.svg?height=200&width=300"
            />
            <ServiceCard
              title="Bridal Skincare Package"
              description="Series of treatments to prepare skin for the big day"
              price="₹12,000"
              image="/placeholder.svg?height=200&width=300"
            />
          </div>
        </TabsContent>

        <TabsContent value="nails" className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              title="Manicure"
              description="Classic manicure with nail shaping, cuticle care, and polish"
              price="₹800"
              image="/placeholder.svg?height=200&width=300"
            />
            <ServiceCard
              title="Pedicure"
              description="Relaxing pedicure with foot soak, exfoliation, and polish"
              price="₹1,200"
              image="/placeholder.svg?height=200&width=300"
            />
            <ServiceCard
              title="Gel Nails"
              description="Long-lasting gel nail application"
              price="₹1,500"
              image="/placeholder.svg?height=200&width=300"
            />
            <ServiceCard
              title="Nail Art"
              description="Creative nail designs and embellishments"
              price="₹500+"
              image="/placeholder.svg?height=200&width=300"
            />
            <ServiceCard
              title="Acrylic Extensions"
              description="Full set of acrylic nail extensions"
              price="₹2,500"
              image="/placeholder.svg?height=200&width=300"
            />
            <ServiceCard
              title="Bridal Nail Package"
              description="Complete nail preparation for bride and bridal party"
              price="₹5,000"
              image="/placeholder.svg?height=200&width=300"
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-muted p-8 rounded-lg text-center mb-16">
        <h2 className="text-2xl font-semibold mb-4">Looking for a Custom Package?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          We offer personalized service packages tailored to your specific needs and preferences. Contact us to discuss
          your requirements and create your perfect beauty package.
        </p>
        {/*<Link href="/contact">
          <Button size="lg">Contact Us</Button>
        </Link>*/}
        <a size="lg" href="tel:+919861749625"><Button size="lg">Contact Us</Button></a>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Book Your Appointment?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Experience the Pihu difference today. Our team of professionals is ready to help you look and feel your best.
        </p>
        <Link href="/contact">
          <Button size="lg">Book Now</Button>
        </Link>
      </div>
    </div>
  )
}

function ServiceCard({
  title,
  description,
  price,
  image,
}: {
  title: string
  description: string
  price: string
  image: string
}) {
  return (
    <Card>
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover rounded-t-lg" />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{price}</p>
      </CardContent>
      <CardFooter>
        <Link href="/contact" className="w-full">
          <Button className="w-full">Book Now</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
