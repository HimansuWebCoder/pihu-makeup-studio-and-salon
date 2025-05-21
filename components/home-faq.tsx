import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HomeFAQ() {
  const faqs = [
    {
      question: "What are your salon hours?",
      answer:
        "Our salon is open Monday to Saturday from 10:00 AM to 7:00 PM, and on Sundays from 11:00 AM to 5:00 PM. We recommend booking appointments in advance, especially for weekends and holidays.",
    },
    {
      question: "How far in advance should I book my bridal makeup?",
      answer:
        "We recommend booking bridal services 3-6 months in advance, especially if your wedding falls during peak wedding season. This ensures you secure your preferred makeup artist and time slot.",
    },
    {
      question: "What brands of makeup and skincare products do you use?",
      answer:
        "We use premium, internationally recognized brands including MAC, Estée Lauder, Kryolan, Dermalogica, L'Oréal Professional, and Kérastase, among others. We select products based on quality, performance, and suitability for Indian skin tones and hair types.",
    },
    {
      question: "Do you offer any discounts or packages?",
      answer:
        "Yes, we offer various packages and seasonal promotions. We also have a loyalty program and referral discounts. Check our Offers page for current promotions or ask our staff about packages that might suit your needs.",
    },
    {
      question: "Do I need to book an appointment or can I walk in?",
      answer:
        "While we do accept walk-ins based on availability, we highly recommend booking an appointment to ensure you get your preferred time slot and stylist. You can book appointments through our website, by phone, or in person.",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Find answers to common questions about our services, policies, and more
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full mb-8">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center">
          <Link href="/faq">
            <Button variant="outline" size="lg">
              View All FAQs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
