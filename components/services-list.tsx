import { Check } from "lucide-react"

export default function ServicesList() {
  const serviceCategories = [
    {
      category: "Makeup Services",
      services: [
        {
          name: "Bridal Makeup",
          price: "₹15,000 - ₹25,000",
          description: "Complete bridal makeup with trials and touch-ups",
        },
        {
          name: "Party Makeup",
          price: "₹3,500 - ₹5,000",
          description: "Glamorous makeup for special events and parties",
        },
        {
          name: "HD Makeup",
          price: "₹4,500",
          description: "High-definition makeup for photoshoots and special occasions",
        },
        {
          name: "Airbrush Makeup",
          price: "₹5,000",
          description: "Lightweight, long-lasting makeup application using airbrush technology",
        },
        {
          name: "Engagement Makeup",
          price: "₹8,000",
          description: "Special makeup for engagement ceremonies",
        },
        {
          name: "Reception Makeup",
          price: "₹10,000",
          description: "Elegant makeup for wedding receptions",
        },
      ],
    },
    {
      category: "Hair Services",
      services: [
        {
          name: "Haircut & Styling",
          price: "₹800 - ₹1,500",
          description: "Precision cuts and styling for all hair types",
        },
        {
          name: "Hair Coloring",
          price: "₹2,500 - ₹5,000",
          description: "Full color, highlights, balayage, or ombre",
        },
        {
          name: "Hair Treatments",
          price: "₹1,500 - ₹3,000",
          description: "Deep conditioning, keratin, or protein treatments",
        },
        {
          name: "Bridal Hairstyling",
          price: "₹5,000 - ₹8,000",
          description: "Elaborate hairstyling for brides including trials",
        },
        {
          name: "Hair Extensions",
          price: "₹8,000 - ₹15,000",
          description: "Premium quality hair extensions application",
        },
        {
          name: "Men's Haircut & Styling",
          price: "₹500 - ₹1,000",
          description: "Specialized cuts and styling for men",
        },
      ],
    },
    {
      category: "Skincare Services",
      services: [
        {
          name: "Basic Facial",
          price: "₹1,200",
          description: "Cleansing, exfoliation, and hydration for all skin types",
        },
        {
          name: "Advanced Facial",
          price: "₹2,500",
          description: "Targeted treatment for specific skin concerns",
        },
        {
          name: "Chemical Peel",
          price: "₹3,500",
          description: "Exfoliating treatment to improve skin texture and tone",
        },
        {
          name: "Hydrafacial",
          price: "₹4,500",
          description: "Multi-step treatment for deep hydration and cleansing",
        },
        {
          name: "Anti-Aging Treatment",
          price: "₹5,000",
          description: "Specialized treatment targeting fine lines and wrinkles",
        },
        {
          name: "Acne Treatment",
          price: "₹2,800",
          description: "Targeted treatment for acne-prone skin",
        },
      ],
    },
    {
      category: "Nail Services",
      services: [
        {
          name: "Manicure",
          price: "₹800",
          description: "Classic manicure with nail shaping, cuticle care, and polish",
        },
        {
          name: "Pedicure",
          price: "₹1,200",
          description: "Relaxing pedicure with foot soak, exfoliation, and polish",
        },
        {
          name: "Gel Nails",
          price: "₹1,500",
          description: "Long-lasting gel nail application",
        },
        {
          name: "Nail Art",
          price: "₹500+",
          description: "Creative nail designs and embellishments",
        },
        {
          name: "Acrylic Extensions",
          price: "₹2,500",
          description: "Full set of acrylic nail extensions",
        },
        {
          name: "Mani-Pedi Combo",
          price: "₹1,800",
          description: "Complete manicure and pedicure package",
        },
      ],
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 bg-muted/10 rounded-lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Complete Service Menu</h2>
        <p className="text-lg text-txtcol max-w-3xl mx-auto">
          Explore our comprehensive range of beauty and salon services with transparent pricing
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {serviceCategories.map((category, index) => (
          <div key={index} className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-primary border-b pb-2">{category.category}</h3>
            <div className="space-y-4">
              {category.services.map((service, idx) => (
                <div key={idx} className="flex justify-between items-start">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-sm text-txtcol">{service.description}</div>
                    </div>
                  </div>
                  <div className="font-semibold text-right">{service.price}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 text-sm text-txtcol">
        <p>* Prices may vary based on hair length, thickness, or service complexity.</p>
        <p>* Please consult with our stylists for a personalized quote.</p>
      </div>
    </section>
  )
}
