import type React from "react"
import { Award, Gem, Heart, Sparkles, Star, Users } from "lucide-react"

export default function OurExpertise() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          With years of experience and a passion for beauty, our team delivers exceptional services tailored to your
          unique style and preferences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ExpertiseCard
          icon={<Sparkles className="h-10 w-10 text-primary" />}
          title="Professional Makeup"
          description="From natural everyday looks to glamorous event makeup, our artists create flawless, personalized looks for any occasion."
        />
        <ExpertiseCard
          icon={<Heart className="h-10 w-10 text-primary" />}
          title="Hair Styling"
          description="Expert cuts, colors, and styling that enhance your natural beauty and reflect your personal style."
        />
        <ExpertiseCard
          icon={<Star className="h-10 w-10 text-primary" />}
          title="Bridal Services"
          description="Comprehensive bridal packages to ensure you look and feel your best on your special day."
        />
        <ExpertiseCard
          icon={<Gem className="h-10 w-10 text-primary" />}
          title="Skincare Treatments"
          description="Rejuvenating facials and treatments that nourish your skin and create a radiant complexion."
        />
        <ExpertiseCard
          icon={<Award className="h-10 w-10 text-primary" />}
          title="Premium Products"
          description="We use only high-quality, premium and organic products that deliver exceptional results."
        />
        <ExpertiseCard
          icon={<Users className="h-10 w-10 text-primary" />}
          title="Experienced Team"
          description="Our skilled professionals stay updated with the latest trends and techniques in the beauty industry."
        />
      </div>
    </section>
  )
}

function ExpertiseCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
