import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Mysti Fy",
      role: "",
      content:
        "Got a pedicure and i must say. I had a great experience. The massage. The thorough focus on each foot. The cleanups and scrubbing did an amazing job. I totally recommend.",
      avatar: "/images/feedbackuser.png",
      rating: 5,
      service: "Pedicure",
    },
    {
      name: "Prakash Chandra Dash",
      role: "",
      content:
        `Very nice makeup studio& salon .👌
Behavior 👌price is also👍 good . Affordable price of packages for all service 👍😊 .
Madam and her team also very nice .😎 Owoo Outstanding 👌👍 result 👍 specialist in all services .
Thank you so much madam ji 😎`,
      avatar: "/images/feedbackuser2.png",
      rating: 5,
      service: "Makeup",
    },
    {
      name: "Shriti Singh",
      role: "",
      content:
        "Went for this salon before some days for hair cut and I must say one of the best salon of the area..👍👏 highly recommended 😊😊",
      avatar: "/images/feedbackuser3.png",
      rating: 5,
      service: "Hair Styling",
    },
    {
      name: "Mousumi Jena",
      role: "",
      content:
        "Wowooo extremely grateful for the best service providing . I am so happy now... 😍😍 & a thank you so much pihu makeup studio....♥️",
      avatar: "/images/feedbackuser4.png",
      rating: 5,
      service: "Facial, Eyebrow Threading",
    },
    {
      name: "Renubala Pradhan",
      role: "",
      content:
        "Best salon in sundarpada bhubaneswar great haircut thank u pihu makeup studio and salon",
      avatar: "/images/feedbackuser5.png",
      rating: 5,
      service: "Hair Cut",
    },
    {
      name: "Saraswati Das",
      role: "",
      content:
        "VERY GOOD sarvice thank u pihu make up studio & salon",
      avatar: "/images/feedbackuser6.png",
      rating: 5,
      service: "All Services",
    },
    {
      name: "Binay Kumar Sahoo",
      role: "",
      content:
        "All service was very good. It's awesome 🥰",
      avatar: "/images/feedbackuser7.png",
      rating: 5,
      service: "All Services",
    },
    {
      name: "Soumyasudha Behera",
      role: "",
      content:
        "Good service 👍 U must come for good services",
      avatar: "/images/feedbackuser8.png",
      rating: 5,
      service: "All Services",
    },
    {
      name: "Sarmistha Mishra",
      role: "Bride",
      content:
        "",
      avatar: "/images/feedbackuser9.png",
      rating: 5,
      service: "",
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
                <p className="text-sm text-txtcol">{testimonial.role}</p>
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
