"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
        We'd love to hear from you! Book an appointment or send us a message.
      </p>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Book an Appointment</h2>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()

                // Get form data
                const formData = new FormData(e.currentTarget)
                const firstName = formData.get("first-name")
                const lastName = formData.get("last-name")
                const email = formData.get("email")
                const phone = formData.get("phone")
                const service = formData.get("service")
                const date = formData.get("date")
                const time = formData.get("time")
                const message = formData.get("message")

                // Format WhatsApp message
                const whatsappMessage = `
                  *New Appointment Request*
                  Name: ${firstName} ${lastName}
                  Email: ${email}
                  Phone: ${phone}
                  Service: ${service}
                  Date: ${date}
                  Time: ${time}
                  Special Requests: ${message || "None"}
                                `.trim()

                // Open WhatsApp with pre-filled message
                // Replace 9438222888 with your actual WhatsApp number
                window.open(`https://wa.me/9438222888?text=${encodeURIComponent(whatsappMessage)}`, "_blank")
              }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" name="first-name" placeholder="Enter your first name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" name="last-name" placeholder="Enter your last name" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="Enter your email" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" placeholder="Enter your phone number" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service</Label>
                <Select name="service">
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bridal-makeup">Bridal Makeup</SelectItem>
                    <SelectItem value="party-makeup">Party Makeup</SelectItem>
                    <SelectItem value="haircut">Haircut & Styling</SelectItem>
                    <SelectItem value="hair-color">Hair Coloring</SelectItem>
                    <SelectItem value="facial">Facial</SelectItem>
                    <SelectItem value="manicure">Manicure</SelectItem>
                    <SelectItem value="pedicure">Pedicure</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Date</Label>
                  <input
                    type="date"
                    name="date"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Select name="time">
                    <SelectTrigger id="time">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10:00">10:00 AM</SelectItem>
                      <SelectItem value="11:00">11:00 AM</SelectItem>
                      <SelectItem value="12:00">12:00 PM</SelectItem>
                      <SelectItem value="13:00">1:00 PM</SelectItem>
                      <SelectItem value="14:00">2:00 PM</SelectItem>
                      <SelectItem value="15:00">3:00 PM</SelectItem>
                      <SelectItem value="16:00">4:00 PM</SelectItem>
                      <SelectItem value="17:00">5:00 PM</SelectItem>
                      <SelectItem value="18:00">6:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Special Requests</Label>
                <Textarea id="message" name="message" placeholder="Any special requests or notes" />
              </div>

              <Button type="submit" className="w-full">
                Book Appointment
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 mt-0.5 text-primary" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-muted-foreground">Srusti Plaza, First Floor Infront of Bharat Petrol Pump, Sundarapada Rd, Kantilo</p>
                  <p className="text-muted-foreground">Bhubaneswar, Odisha 751002</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">+91-9438222888</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">info@pihumakeupstudio.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                <div>
                  <h3 className="font-medium">Hours</h3>
                  <p className="text-muted-foreground">Monday - Sunday: 10:00 AM - 8:30 PM</p>
                  {/*<p className="text-muted-foreground">Sunday: 11:00 AM - 8:30 PM</p>*/}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()

                // Get form data
                const formData = new FormData(e.currentTarget)
                const name = formData.get("contact-name")
                const email = formData.get("contact-email")
                const subject = formData.get("contact-subject")
                const message = formData.get("contact-message")

                // Format WhatsApp message
                const whatsappMessage = `
                  *New Message from Website*
                  Name: ${name}
                  Email: ${email}
                  Subject: ${subject}

                  Message:
                  ${message}
                `.trim()

                // Open WhatsApp with pre-filled message
                // Replace 9438222888 with your actual WhatsApp number
                window.open(`https://wa.me/9438222888?text=${encodeURIComponent(whatsappMessage)}`, "_blank")
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="contact-name">Name</Label>
                <Input id="contact-name" name="contact-name" placeholder="Enter your name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input id="contact-email" name="contact-email" type="email" placeholder="Enter your email" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-subject">Subject</Label>
                <Input id="contact-subject" name="contact-subject" placeholder="Enter subject" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  name="contact-message"
                  placeholder="Enter your message"
                  rows={4}
                  required
                />
              </div>

              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden h-[400px] relative">
       {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2536942171014!2d77.20659841508096!3d28.557375982445474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26f903969d7%3A0x8f66310952fafd4!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1651900296272!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>*/}
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202442.83992947603!2d85.63874307812502!3d20.25199098638389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a72b163e292f%3A0x294a6a61e664cf90!2sPihu%20Makeup%20Studio%20%26%20Salon!5e1!3m2!1sen!2sin!4v1747048529691!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      </div>
    </div>
  )
}
