import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Bride",
      content:
        "Pihu and her team did an amazing job for my wedding. My makeup lasted the entire day and looked flawless in photos. Highly recommend their bridal services!",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      service: "Bridal Makeup",
    },
    {
      name: "Neha Gupta",
      role: "Regular Client",
      content:
        "I've been coming to Pihu Makeup Studio for over a year now. Their hair stylists are incredibly talented and always give me exactly what I want. The atmosphere is welcoming and professional.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      service: "Hair Styling",
    },
    {
      name: "Anjali Patel",
      role: "Event Attendee",
      content:
        "Got my makeup done for a friend's wedding and received so many compliments! The makeup artist understood exactly what I wanted and executed it perfectly.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4,
      service: "Party Makeup",
    },
    {
      name: "Ritu Desai",
      role: "Regular Client",
      content:
        "The skincare treatments at Pihu Makeup Studio have transformed my skin. I've struggled with acne for years, and after just a few sessions, I've seen a dramatic improvement. The staff is knowledgeable and caring.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      service: "Skincare",
    },
    {
      name: "Meera Kapoor",
      role: "Bride's Mother",
      content:
        "As the mother of the bride, I wanted to look my best without overshadowing my daughter. The team understood this perfectly and created an elegant, age-appropriate look that made me feel beautiful and confident.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      service: "Bridal Party Makeup",
    },
    {
      name: "Sanya Malhotra",
      role: "Model",
      content:
        "I've worked with many makeup artists throughout my modeling career, and Pihu's team stands out for their creativity and precision. They understand lighting and photography needs perfectly.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      service: "Professional Makeup",
    },
    {
      name: "Divya Joshi",
      role: "Student",
      content:
        "I came in for a simple haircut and got the best style I've ever had! They really listened to what I wanted and gave suggestions that worked perfectly for my face shape and lifestyle.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4,
      service: "Haircut & Styling",
    },
    {
      name: "Kavita Singh",
      role: "Business Professional",
      content:
        "Their nail services are exceptional. The nail art is creative and lasts much longer than any other salon I've tried. Perfect for when I need to look polished for important meetings.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      service: "Nail Art",
    },
    {
      name: "Tanvi Mehta",
      role: "Bride",
      content:
        "From the trial to the wedding day, the entire experience was perfect. They were punctual, professional, and created exactly the look I had envisioned. My makeup stayed flawless through tears and dancing!",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      service: "Bridal Makeup",
    },
  ]

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-4">Client Testimonials</h1>
      <p className="text-lg text-center text-txtcol mb-12 max-w-3xl mx-auto">
        Don't just take our word for it - hear from our satisfied clients about their experiences at Pihu Makeup Studio
        and Salon
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="overflow-hidden h-full">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <p className="text-center mb-6">"{testimonial.content}"</p>
              <div className="text-sm text-center text-muted-foreground mb-4">Service: {testimonial.service}</div>
            </CardContent>
            <CardFooter className="flex flex-col items-center pb-6 mt-auto">
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

      <div className="bg-muted p-8 rounded-lg text-center">
        <h2 className="text-2xl text-muted-foreground font-semibold mb-4">Share Your Experience</h2>
        <p className="mb-6 max-w-2xl text-muted-foreground mx-auto">
          We value your feedback! If you've recently visited Pihu Makeup Studio and Salon, we'd love to hear about your
          experience. Your testimonial helps us improve our services and helps others find the beauty services they
          need.
        </p>
        <div className="flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Submit Your Testimonial
          </a>
        </div>
      </div>
    </div>
  )
}
