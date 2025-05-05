import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Bride",
      content:
        "Pihu and her team did an amazing job for my wedding. My makeup lasted the entire day and looked flawless in photos. Highly recommend their bridal services!",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      name: "Neha Gupta",
      role: "Regular Client",
      content:
        "I've been coming to Pihu Makeup Studio for over a year now. Their hair stylists are incredibly talented and always give me exactly what I want. The atmosphere is welcoming and professional.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      name: "Anjali Patel",
      role: "Event Attendee",
      content:
        "Got my makeup done for a friend's wedding and received so many compliments! The makeup artist understood exactly what I wanted and executed it perfectly.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4,
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Don't just take our word for it - hear from our satisfied clients
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                  />
                ))}
              </div>
              <p className="text-center mb-6">"{testimonial.content}"</p>
            </CardContent>
            <CardFooter className="flex flex-col items-center pb-6">
              <div className="relative h-16 w-16 rounded-full overflow-hidden mb-2">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
