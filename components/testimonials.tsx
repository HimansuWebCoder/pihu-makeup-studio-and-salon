import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function Testimonials() {
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
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-lg text-txtcol max-w-3xl mx-auto">
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
                <p className="text-sm text-txtcol">{testimonial.role}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/testimonials">
          <Button size="lg">More Testimonials</Button>
        </Link>
      </div>
    </section>
  )
}
