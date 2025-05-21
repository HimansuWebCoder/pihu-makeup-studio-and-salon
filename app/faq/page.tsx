import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FAQPage() {
  const generalFaqs = [
    {
      question: "What are your salon hours?",
      answer:
        "Our salon is open Monday to Sunday from 10:00 AM to 8:30 PM. We recommend booking appointments in advance, especially for weekends and holidays.",
    },
    {
      question: "Do I need to book an appointment or can I walk in?",
      answer:
        "While we do accept walk-ins based on availability, we highly recommend booking an appointment to ensure you get your preferred time slot and stylist. You can book appointments through our website, by phone, or in person.",
    },
    {
      question: "How far in advance should I book my appointment?",
      answer:
        "For regular services, we recommend booking 3-5 days in advance. For bridal services or during peak seasons (festivals, wedding season), we suggest booking 2-4 weeks in advance to secure your preferred date and time.",
    },
    {
      question: "What forms of payment do you accept?",
      answer:
        "We accept cash, all major credit/debit cards, UPI payments, and digital wallets like Paytm, Google Pay, and PhonePe. We currently do not accept personal checks.",
    },
    {
      question: "Do you have a cancellation policy?",
      answer:
        "Yes, we require at least 24 hours' notice for cancellations or rescheduling. Late cancellations or no-shows may result in a cancellation fee of 50% of the service price. For bridal bookings, the advance payment is non-refundable if cancelled within 7 days of the appointment.",
    },
    // {
    //   question: "Is there parking available?",
    //   answer:
    //     "Yes, we have dedicated parking spaces available for our clients. Additionally, there is public parking available within walking distance of our salon.",
    // },
  ]

  const servicesFaqs = [
    {
      question: "What brands of makeup and skincare products do you use?",
      answer:
        "We use premium, internationally recognized brands including MAC, Estée Lauder, Kryolan, Dermalogica, L'Oréal Professional, and Kérastase, among others. We select products based on quality, performance, and suitability for Indian skin tones and hair types.",
    },
    {
      question: "How long do makeup services typically take?",
      answer:
        "The duration varies depending on the type of makeup service. Basic makeup typically takes 45-60 minutes, party makeup 60-90 minutes, and bridal makeup 2-3 hours. We recommend discussing time requirements when booking your appointment.",
    },
    {
      question: "Do you offer hair extensions?",
      answer:
        "Yes, we offer various types of hair extensions including clip-ins, tape-ins, and fusion extensions. We use high-quality human hair extensions that can be colored and styled to match your natural hair perfectly.",
    },
    {
      question: "How often should I get a facial?",
      answer:
        "For optimal results, we recommend getting a facial every 4-6 weeks, which aligns with your skin's natural renewal cycle. However, this can vary based on your skin type, concerns, and goals. Our skincare experts can recommend a personalized schedule during your consultation.",
    },
    {
      question: "How long does nail polish/gel polish last?",
      answer:
        "Regular nail polish typically lasts 5-7 days without chipping, while gel polish can last 2-3 weeks. Proper aftercare and wearing gloves while doing household chores can extend the life of your manicure.",
    },
    {
      question: "Do you offer any hair treatments for damaged hair?",
      answer:
        "Yes, we offer a variety of treatments for damaged hair including deep conditioning, keratin treatments, protein treatments, and specialized hair spa services. Our stylists can recommend the best treatment based on your hair's specific needs.",
    },
  ]

  const bridalFaqs = [
    {
      question: "When should I book my bridal makeup trial?",
      answer:
        "We recommend booking your bridal makeup trial 3-4 weeks before your wedding day. This gives you enough time to make any adjustments and ensures your look is perfect for your special day.",
    },
    {
      question: "What should I bring to my bridal trial?",
      answer:
        "Please bring photos of your wedding outfit, jewelry, any makeup inspiration images, and your hair accessories or veil. Also, wear a top in a similar color to your wedding outfit to better visualize the complete look.",
    },
    {
      question: "Do you offer on-location bridal services?",
      answer:
        "Yes, we offer on-location services for the bride and bridal party. There is an additional travel fee based on the distance. Please inquire about this service when booking your bridal package.",
    },
    {
      question: "What is included in your bridal packages?",
      answer:
        "Our comprehensive bridal packages include pre-wedding consultations, trial makeup and hair sessions, day-of bridal makeup and hairstyling, touch-ups, and services for family members. We also offer pre-bridal skincare packages to prepare your skin for the big day.",
    },
    {
      question: "How far in advance should I book bridal services?",
      answer:
        "We recommend booking bridal services 3-6 months in advance, especially if your wedding falls during peak wedding season. This ensures you secure your preferred makeup artist and time slot.",
    },
    {
      question: "Can you accommodate my entire bridal party?",
      answer:
        "Yes, we can accommodate bridal parties of all sizes. For larger groups, we recommend booking well in advance and may bring in additional artists to ensure everyone is ready on time.",
    },
  ]

  const pricingFaqs = [
    {
      question: "Do you offer any discounts or packages?",
      answer:
        "Yes, we offer various packages and seasonal promotions. We also have a loyalty program and referral discounts. Check our Offers page for current promotions or ask our staff about packages that might suit your needs.",
    },
    {
      question: "Is there an additional charge for longer/thicker hair?",
      answer:
        "Yes, there may be an additional charge for extra-long or thick hair for certain services like coloring, treatments, or elaborate styling, as these require more product and time. Your stylist will inform you of any additional charges during your consultation.",
    },
    {
      question: "Do you charge for consultations?",
      answer:
        "Basic consultations are complimentary. However, detailed color consultations with sample swatches or extensive bridal consultations may have a nominal fee, which is typically adjusted against your service if you proceed with booking.",
    },
    {
      question: "Are gratuities included in your pricing?",
      answer:
        "No, gratuities are not included in our service prices. If you're happy with your service, tipping your stylist or technician is appreciated but entirely at your discretion.",
    },
    {
      question: "Do you offer any student or senior citizen discounts?",
      answer:
        "Yes, we offer a 10% discount for students and senior citizens on select services from Monday to Thursday. Please bring valid ID to avail of these discounts.",
    },
    {
      question: "Is there a deposit required for booking services?",
      answer:
        "For regular services, no deposit is required. For bridal services, special event packages, or services over ₹5,000, we require a 30% non-refundable deposit to secure your booking.",
    },
  ]

  const productsFaqs = [
    {
      question: "Do you sell the products you use in the salon?",
      answer:
        "Yes, we retail many of the professional products we use in our services. This includes haircare, skincare, and makeup products from brands like L'Oréal Professional, Kérastase, Dermalogica, MAC, and more.",
    },
    {
      question: "Can I return products if they don't work for me?",
      answer:
        "Unopened products in their original packaging can be returned within 7 days with receipt for a full refund or exchange. Opened products cannot be returned but our experts are happy to help you find alternatives that might work better for you.",
    },
    {
      question: "Do you offer product recommendations for home care?",
      answer:
        "Our stylists and technicians are trained to recommend appropriate products for maintaining your look at home. We believe in educating our clients on proper home care to extend the benefits of our salon services.",
    },
    {
      question: "Are the products you use and sell ethical?",
      answer:
        "Many of our products are cruelty-free, and we're continuously expanding our range of ethical and sustainable beauty products. Please ask our staff about specific brands if this is important to you.",
    },
    {
      question: "Do you offer samples of products before purchasing?",
      answer:
        "For certain skincare and haircare products, we do offer samples so you can try before committing to a full-size purchase. Availability of samples depends on the brand and product.",
    },
  ]

  const covidFaqs = [
    {
      question: "What safety measures do you have in place?",
      answer:
        "We maintain high standards of hygiene and safety. Our measures include regular sanitization of all tools and surfaces, mandatory hand sanitization for all clients and staff, proper ventilation, and adherence to all local health guidelines.",
    },
    {
      question: "Do I need to wear a mask during my appointment?",
      answer:
        "While masks are no longer mandatory, we respect personal preferences. Our staff can wear masks upon request, and clients are welcome to wear masks if they feel more comfortable doing so.",
    },
    {
      question: "What if I'm feeling unwell on the day of my appointment?",
      answer:
        "If you're feeling unwell, please reschedule your appointment. We waive cancellation fees for health-related cancellations to ensure everyone's safety. You can easily reschedule through our website or by calling us.",
    },
    {
      question: "Are your staff vaccinated?",
      answer: "Yes, all our staff members are fully vaccinated against COVID-19.",
    },
    {
      question: "How do you sanitize your tools and equipment?",
      answer:
        "We use hospital-grade disinfectants and UV sterilizers for our tools. Implements like files and buffers are either single-use or sanitized between clients. Workstations are thoroughly cleaned between each appointment.",
    },
  ]

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h1>
      <p className="text-lg text-center text-txtcol mb-12 max-w-3xl mx-auto">
        Find answers to common questions about our services, policies, and more. If you don't see your question here,
        feel free to contact us.
      </p>

      <Tabs defaultValue="general" className="w-full mb-16">
        <TabsList className="grid w-full h-auto grid-cols-2 md:grid-cols-6 mb-8">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="bridal">Bridal</TabsTrigger>
          <TabsTrigger value="pricing">Pricing</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="covid">Safety</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Accordion type="single" collapsible className="w-full">
            {generalFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`general-item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>

        <TabsContent value="services">
          <Accordion type="single" collapsible className="w-full">
            {servicesFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`services-item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>

        <TabsContent value="bridal">
          <Accordion type="single" collapsible className="w-full">
            {bridalFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`bridal-item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>

        <TabsContent value="pricing">
          <Accordion type="single" collapsible className="w-full">
            {pricingFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`pricing-item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>

        <TabsContent value="products">
          <Accordion type="single" collapsible className="w-full">
            {productsFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`products-item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>

        <TabsContent value="covid">
          <Accordion type="single" collapsible className="w-full">
            {covidFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`covid-item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
      </Tabs>

      <div className="bg p-8 rounded-lg text-center mb-16">
        <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          If you couldn't find the answer to your question, please don't hesitate to reach out to us directly. Our team
          is always happy to help.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">Contact Us</Button>
          </Link>
          <Link href="tel:+919438222888">
            <Button size="lg" variant="outline">
              Call Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
