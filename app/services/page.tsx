import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // optional: specify weights you want
});

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className={`${playfair.className} text-4xl font-bold text-center mb-4`}>Our Services</h1>
      <p className="text-lg text-center text-txtcol mb-12 max-w-3xl mx-auto">
        Discover our comprehensive range of beauty and salon services designed to enhance your natural beauty
      </p>

      <Tabs defaultValue="makeup" className="w-full mb-16">
        <TabsList className="grid w-full grid-cols-2 h-auto md:grid-cols-6 mb-8">
          <TabsTrigger value="makeup">Makeup</TabsTrigger>
          <TabsTrigger value="hair">Hair</TabsTrigger>
          <TabsTrigger value="skincare">Skincare</TabsTrigger>
          <TabsTrigger value="nails">Nails</TabsTrigger>
          <TabsTrigger value="spa">Spa</TabsTrigger>
          <TabsTrigger value="bridal">Bridal</TabsTrigger>
        </TabsList>

        <TabsContent value="makeup" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/party4.jpg" alt="Makeup Services" fill className="object-cover" />
            </div>
            <div>
              <h2 className={`${playfair.className} text-3xl font-bold mb-4`}>Makeup Services</h2>
              <p className="text-txtcol mb-6">
                Our professional makeup artists use high-quality products to create flawless looks for any occasion.
                From natural everyday makeup to glamorous evening looks, we customize each service to enhance your
                unique features.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ServiceCategory
                  title="Bridal Makeup"
                  items={[
                    "Classic Bridal Makeup",
                    "Modern Bridal Makeup",
                    "Reception Makeup",
                    "HD Bridal Makeup",
                    "HD Pro Bridal Makeup",
                    "Airbrush Bridal Makeup",
                    "HD Airbrush Bridal Makeup",
                    "Bridal Party Makeup",
                  ]}
                />
                <ServiceCategory
                  title="Party Makeup"
                  items={[
                    "Basic Party Makeup (Basic Makeup & Hair Do)",
                    "Classic Party Makeup",
                    "HD Party Makeup",
                    "HD Pro Party Makeup",
                    "Airbrush Party Makeup",
                    "Festival Makeup",
                    "Photoshoot Makeup",
                    "Celebrity-inspired Looks",
                  ]}
                />
                <ServiceCategory
                  title="Engagement Makeup"
                  items={[
                    "Classic Engagement Makeup",
                    "HD Engagement Makeup",
                    "HD Pro Engagement Makeup",
                    "Airbrush Engagement Makeup",
                    "HD Airbrush Engagement Makeup",
                  ]}
                />
                <ServiceCategory
                  title="Groom Makeup"
                  items={[
                    "Classic Groom Makeup",
                    "HD Groom Makeup",
                    "Airbrush Groom Makeup",
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              title="Bridal Makeup"
              description="Complete bridal makeup package including trials, day-of makeup, and touch-ups"
              price="₹15,000"
              image="/images/bridal12.jpg"
            />
            <ServiceCard
              title="Party Makeup"
              description="Glamorous makeup for special events and parties"
              price="₹3,500"
              image="/images/party3.jpg"
            />
            <ServiceCard
              title="Natural Everyday Look"
              description="Subtle enhancement for a polished everyday appearance"
              price="₹2,000"
              image="/images/party2.jpg"
            />
            <ServiceCard
              title="HD Makeup"
              description="Camera-ready makeup using HD techniques and products"
              price="₹4,500"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Airbrush Makeup"
              description="Flawless, long-lasting makeup application using airbrush technology"
              price="₹5,000"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Eye Makeup"
              description="Focused eye makeup service including lashes"
              price="₹1,500"
              image="/images/hair-styling.jpg"
            />
          </div>
        </TabsContent>

        <TabsContent value="hair" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/hair-styling.jpg" alt="Hair Services" fill className="object-cover" />
            </div>
            <div>
              <h2 className={`${playfair.className} text-3xl font-bold mb-4`}>Hair Services</h2>
              <p className="text-txtcol mb-6">
                Our expert stylists provide a full range of hair services using premium products. Whether you're looking
                for a simple trim or a complete transformation, our team will help you achieve the perfect look for your
                hair type and lifestyle.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ServiceCategory
                  title="Haircuts & Styling"
                  items={[
                    "Ironing / Curls (With Wash & Conditioning)",
                    "Advanced Protein Styling",
                    "Dandruff Wash",
                    "Special Occasion Styling",
                  ]}
                />
                <ServiceCategory
                  title="Hair Coloring"
                  items={["Full Color", "Highlights/Lowlights", "Root Touch-up", "Fashion Colors"]}
                />
                <ServiceCategory
                  title="Hair Treatments"
                  items={[
                    "Deep Conditioning",
                    "Keratin Treatment",
                    "Hair Spa",
                    "Hairfall Treatment",
                    "Anti-Frizz Treatment",
                  ]}
                />
                {/*<ServiceCategory
                  title="Hair Extensions"
                  items={[
                    "Clip-in Extensions",
                    "Tape-in Extensions",
                    "Fusion Extensions",
                    "Micro-link Extensions",
                    "Extension Maintenance",
                  ]}
                />*/}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              title="Haircut & Styling"
              description="Professional haircut and styling tailored to your face shape and preferences"
              price="₹1,200"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Hair Coloring"
              description="Full hair coloring services including highlights, balayage, and ombre"
              price="₹3,500"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Bridal Hair"
              description="Elaborate bridal hairstyling including trials"
              price="₹8,000"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Hair Treatments"
              description="Nourishing treatments for damaged hair"
              price="₹2,500"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Hair Extensions"
              description="Professional application of high-quality hair extensions"
              price="₹10,000"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Blowout"
              description="Professional blow dry and styling"
              price="₹800"
              image="/images/hair-styling.jpg"
            />
          </div>
        </TabsContent>

        <TabsContent value="skincare" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/hair-styling.jpg"
                alt="Skincare Services"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className={`${playfair.className} text-3xl font-bold mb-4`}>Skincare Services</h2>
              <p className="text-txtcol mb-6">
                Our skincare experts provide personalized treatments to address your specific skin concerns. Using
                premium products and advanced techniques, we help you achieve healthy, glowing skin that looks and feels
                its best.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ServiceCategory
                  title="Facials"
                  items={[
                    "Classic Facial",
                    "Deep Cleansing Facial",
                    "Anti-Aging Facial",
                    "Brightening Facial",
                    "Hydrating Facial",
                  ]}
                />
                <ServiceCategory
                  title="Advanced Treatments"
                  items={["Chemical Peels", "Microdermabrasion", "Hydrafacial", "LED Light Therapy", "Oxygen Facial"]}
                />
                <ServiceCategory
                  title="Skin Concerns"
                  items={[
                    "Acne Treatment",
                    "Pigmentation Treatment",
                    "Sensitive Skin Treatment",
                    "Rosacea Treatment",
                    "Anti-Aging Treatment",
                  ]}
                />
                <ServiceCategory
                  title="Body Treatments"
                  items={["Body Polishing", "Back Facial", "Body Scrub", "Skin Brightening", "De-Tan Treatment"]}
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              title="Facial"
              description="Deep cleansing facial customized for your skin type"
              price="₹2,000"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Chemical Peel"
              description="Exfoliating treatment to improve skin texture and tone"
              price="₹3,500"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Microdermabrasion"
              description="Non-invasive exfoliation for smoother, brighter skin"
              price="₹3,000"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Hydrafacial"
              description="Multi-step treatment for deep hydration and cleansing"
              price="₹4,500"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Anti-Aging Treatment"
              description="Specialized treatment targeting fine lines and wrinkles"
              price="₹5,000"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Bridal Skincare Package"
              description="Series of treatments to prepare skin for the big day"
              price="₹12,000"
              image="/images/hair-styling.jpg"
            />
          </div>
        </TabsContent>

        <TabsContent value="nails" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/hair-styling.jpg" alt="Nail Services" fill className="object-cover" />
            </div>
            <div>
              <h2 className={`${playfair.className} text-3xl font-bold mb-4`}>Nail Services</h2>
              <p className="text-txtcol mb-6">
                Our nail technicians provide a range of services to keep your hands and feet looking their best. From
                basic manicures and pedicures to elaborate nail art, we use quality products for long-lasting results.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ServiceCategory
                  title="Manicures"
                  items={[
                    "Express Manicure",
                    "Classic Manicure",
                    "Spa Manicure",
                    "Paraffin Manicure",
                  ]}
                />
                <ServiceCategory
                  title="Pedicures"
                  items={[
                    "Express Pedicure",
                    "Classic Pedicure",
                    "Spa Pedicure",
                    "Paraffin Pedicure",
                  ]}
                />
                <ServiceCategory
                  title="Nail Enhancements"
                  items={["Gel Polish", "Acrylic Extensions", "Gel Extensions", "Dip Powder", "Nail Repair"]}
                />
              {/*  <ServiceCategory
                  title="Nail Services"
                  items={["Simple Nail Art", "French Tips", "Chrome/Holographic", "Bridal Nail Art"]}
                />*/}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              title="Manicure"
              description="Classic manicure with nail shaping, cuticle care, and polish"
              price="₹800"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Pedicure"
              description="Relaxing pedicure with foot soak, exfoliation, and polish"
              price="₹1,200"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Gel Nails"
              description="Long-lasting gel nail application"
              price="₹1,500"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Nail Art"
              description="Creative nail designs and embellishments"
              price="₹500+"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Acrylic Extensions"
              description="Full set of acrylic nail extensions"
              price="₹2,500"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Mani-Pedi Combo"
              description="Complete manicure and pedicure package"
              price="₹1,800"
              image="/images/hair-styling.jpg"
            />
          </div>
        </TabsContent>

        <TabsContent value="spa" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/hair-styling.jpg" alt="Spa Services" fill className="object-cover" />
            </div>
            <div>
              <h2 className={`${playfair.className} text-3xl font-bold mb-4`}>Spa Services</h2>
              <p className="text-txtcol mb-6">
                Indulge in our luxurious spa services designed to relax, rejuvenate, and restore balance to your body
                and mind. Our skilled therapists use premium products and techniques to provide a truly pampering
                experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ServiceCategory
                  title="Massages"
                  items={[
                    "Swedish Massage",
                    "Deep Tissue Massage",
                    "Aromatherapy Massage",
                    "Hot Stone Massage",
                    "Head & Shoulder Massage",
                  ]}
                />
                <ServiceCategory
                  title="Body Treatments"
                  items={["Body Scrub", "Body Wrap", "Body Polishing", "Detox Treatment", "Slimming Treatment"]}
                />
                <ServiceCategory
                  title="Wellness Therapies"
                  items={[
                    "Reflexology",
                    "Ayurvedic Treatments",
                    "Stress Relief Therapy",
                    "Prenatal Massage",
                    "Couple's Massage",
                  ]}
                />
                <ServiceCategory
                  title="Spa Packages"
                  items={[
                    "Half-Day Spa Package",
                    "Full-Day Spa Package",
                    "Bridal Spa Package",
                    "Couple's Spa Package",
                    "Detox Spa Package",
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              title="Swedish Massage"
              description="Relaxing full-body massage to release tension"
              price="₹2,500"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Aromatherapy Massage"
              description="Therapeutic massage with essential oils"
              price="₹3,000"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Body Scrub & Wrap"
              description="Exfoliating scrub followed by a nourishing body wrap"
              price="₹3,500"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Hot Stone Massage"
              description="Deep relaxation massage using heated stones"
              price="₹3,200"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Foot Reflexology"
              description="Pressure point massage focusing on the feet"
              price="₹1,800"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Spa Day Package"
              description="Complete spa experience with multiple treatments"
              price="₹7,500"
              image="/images/hair-styling.jpg"
            />
          </div>
        </TabsContent>

        <TabsContent value="bridal" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/hair-styling.jpg" alt="Bridal Services" fill className="object-cover" />
            </div>
            <div>
              <h2 className={`${playfair.className} text-3xl font-bold mb-4`}>Bridal Services</h2>
              <p className="text-txtcol mb-6">
                Make your special day even more memorable with our comprehensive bridal services. Our experienced team
                will work closely with you to create the perfect look that complements your style, outfit, and wedding
                theme.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ServiceCategory
                  title="Bridal Makeup"
                  items={[
                    "Traditional Bridal Makeup",
                    "Modern Bridal Makeup",
                    "Reception Makeup",
                    "Engagement Makeup",
                    "Trial Makeup Session",
                  ]}
                />
                <ServiceCategory
                  title="Bridal Hair"
                  items={["Bridal Updo", "Half-Up Styles", "Braided Styles", "Hair Extensions", "Trial Hair Session"]}
                />
                <ServiceCategory
                  title="Pre-Wedding Services"
                  items={[
                    "Skincare Packages",
                    "Hair Treatments",
                    "Body Polishing",
                    "Nail Services",
                    "Waxing & Threading",
                  ]}
                />
                <ServiceCategory
                  title="Wedding Party"
                  items={[
                    "Mother of Bride/Groom",
                    "Bridesmaid Makeup",
                    "Bridesmaid Hair",
                    "Flower Girl Services",
                    "Groom Grooming",
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              title="Complete Bridal Package"
              description="Comprehensive package including pre-wedding treatments, trial, and day-of services"
              price="₹35,000"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Bridal Makeup & Hair"
              description="Professional makeup and hairstyling for your wedding day"
              price="₹20,000"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Pre-Bridal Package"
              description="Series of treatments to prepare for your wedding day"
              price="₹15,000"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Reception Look"
              description="Makeup and hair styling for your reception"
              price="₹15,000"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Engagement Package"
              description="Makeup and hair for your engagement ceremony"
              price="₹12,000"
              image="/images/hair-styling.jpg"
            />
            <ServiceCard
              title="Bridal Party Package"
              description="Services for bridesmaids and family members"
              price="₹8,000/person"
              image="/images/hair-styling.jpg"
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className=" p-8 rounded-lg text-center mb-16">
        <h2 className={`${playfair.className} text-2xl font-semibold mb-4`}>Looking for a Custom Package?</h2>
        <p className="mb-6 max-w-2xl mx-auto text-txtcol">
          We offer personalized service packages tailored to your specific needs and preferences. Contact us to discuss
          your requirements and create your perfect beauty package.
        </p>
        <Link href="/contact">
          <Button size="lg">Contact Us</Button>
        </Link>
      </div>

      <div className="text-center">
        <h2 className={`${playfair.className} text-2xl font-semibold mb-4`}>Ready to Book Your Appointment?</h2>
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

function ServiceCategory({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mb-4">
      <h3 className={`${playfair.className} font-semibold text-lg mb-2`}>{title}</h3>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-start text-sm">
            <Check className="h-4 w-4 mr-2 text-primary shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
