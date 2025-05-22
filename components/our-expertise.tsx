import type React from "react"
import { Award, Gem, Heart, Sparkles, Star, Users } from "lucide-react"
import { Check } from "lucide-react"
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // optional: specify weights you want
});


export default function OurExpertise() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className={`${playfair.className} text-3xl font-bold mb-4`}>Our Expertise</h2>
        <p className="text-lg text-txtcol max-w-3xl mx-auto">
          With years of experience and a passion for beauty, our team delivers exceptional services tailored to your
          unique style and preferences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ExpertiseCard
          icon={<Sparkles className="h-10 w-10 text-primary" />}
          title="Professional Makeup"
          description="From natural everyday looks to glamorous event makeup, our artists create flawless, personalized looks for any occasion."
          services={[
            "Bridal Makeup",
            "Party & Event Makeup",
            "HD & Airbrush Makeup",
            "Natural Everyday Makeup",
            "Makeup Lessons",
          ]}
        />
        <ExpertiseCard
          icon={<Heart className="h-10 w-10 text-primary" />}
          title="Hair Styling"
          description="Expert cuts, colors, and styling that enhance your natural beauty and reflect your personal style."
          services={[
            "Precision Haircuts",
            "Color & Highlights",
            "Balayage & Ombre",
            "Bridal Hairstyling",
            "Hair Treatments & Spa",
          ]}
        />
        <ExpertiseCard
          icon={<Star className="h-10 w-10 text-primary" />}
          title="Bridal Services"
          description="Comprehensive bridal packages to ensure you look and feel your best on your special day."
          services={[
            "Complete Bridal Packages",
            "Pre-Bridal Treatments",
            "Engagement Makeup",
            "Reception Looks",
            "Family & Bridal Party Services",
          ]}
        />
        <ExpertiseCard
          icon={<Gem className="h-10 w-10 text-primary" />}
          title="Skincare Treatments"
          description="Rejuvenating facials and treatments that nourish your skin and create a radiant complexion."
          services={[
            "Customized Facials",
            "Chemical Peels",
            "Microdermabrasion",
            "Anti-Aging Treatments",
            "Acne & Pigmentation Treatments",
          ]}
        />
        <ExpertiseCard
          icon={<Award className="h-10 w-10 text-primary" />}
          title="Nail Care"
          description="Meticulous nail services from basic manicures to elaborate nail art designs."
          services={[
            "Manicures & Pedicures",
            "Gel & Acrylic Extensions",
            "Nail Art & Design",
            "Spa Treatments for Hands & Feet",
            "Bridal Nail Packages",
          ]}
        />
        <ExpertiseCard
          icon={<Users className="h-10 w-10 text-primary" />}
          title="Spa & Wellness"
          description="Relaxing and rejuvenating spa services to pamper your body and calm your mind."
          services={[
            "Massage Therapy",
            "Body Scrubs & Wraps",
            "Aromatherapy Treatments",
            "Reflexology",
            "Wellness Packages",
          ]}
        />
      </div>
    </section>
  )
}

function ExpertiseCard({
  icon,
  title,
  description,
  services,
}: {
  icon: React.ReactNode
  title: string
  description: string
  services: string[]
}) {
  return (
    <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className={`${playfair.className} text-xl font-semibold mb-2`}>{title}</h3>
      <p className="text-txtcol mb-4">{description}</p>
      <div className="mt-4">
        <h4 className="font-medium mb-2 text-sm uppercase tracking-wide">Services Include:</h4>
        <ul className="space-y-1">
          {services.map((service, index) => (
            <li key={index} className="flex items-start text-sm">
              <Check className="h-4 w-4 mr-2 text-primary shrink-0 mt-0.5" />
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
