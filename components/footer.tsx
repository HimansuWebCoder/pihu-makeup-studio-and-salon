import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Clock, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="relative h-12 w-48 mb-4">
              <Image
                src="/logo2.svg?height=48&width=192"
                alt="Pihu Makeup Studio and Salon"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-white mb-4">
              Enhancing your natural beauty with our professional makeup and salon services.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5 text-blue-300" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.instagram.com/pihumakeupstudio2023" target="_blank" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5 text-blue-300" />
                <span className="sr-only">Instagram</span>
              </Link>
              {/*<Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>*/}
              <Link href="https://www.youtube.com/@PIHUMAKEUPSTUDIO" target="_blank" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5 text-blue-300" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-muted-foreground hover:text-primary">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Bridal Makeup
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Party Makeup
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Hair Styling
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Hair Coloring
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Skincare
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Nail Art
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Contact Us</h3>
            {/*<address className="not-italic text-muted-foreground">
            <MapPin className="h-6 w-6 mr-3 mt-0.5 text-primary" />
              <p className="mb-2">Srusti Plaza, First Floor Infront of Bharat Petrol Pump, Sundarapada Rd, Kantilo
              </p>
              <p className="mb-2">Bhubaneswar, Odisha 751002</p>
              <Phone className="h-5 w-5 mr-3 mt-0.5 text-primary" />
              <p className="mb-2">Phone: +91-9438222888</p>
              <Mail className="h-5 w-5 mr-3 mt-0.5 text-primary" />
              <p className="mb-4">Email: info@pihumakeupstudio.com</p>
            </address>
            <p className="text-muted-foreground">
             <Clock className="h-5 w-5 mr-3 mt-0.5 text-primary" />
              <span className="font-semibold">Hours:</span>
              <br />
              Monday - Sunday: 10:00 AM - 8:30 PM
              <br />
            </p>*/}
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-10 w-10 sm:h-10 sm:w-10 mr-3 mt-0.5 text-primary" />
                <div>
                  <h3 className="font-medium text-muted-foreground">Address</h3>
                  <p className="text-muted-foreground">Srusti Plaza, First Floor Infront of Bharat Petrol Pump, Sundarapada Rd, Kantilo</p>
                  <p className="text-muted-foreground">Bhubaneswar, Odisha 751002</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                <div>
                  <h3 className="font-medium text-muted-foreground">Phone</h3>
                  <p className="text-muted-foreground">+91-9438222888</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                <div>
                  <h3 className="font-medium text-muted-foreground">Email</h3>
                  <p className="text-muted-foreground">info@pihumakeupstudio.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                <div>
                  <h3 className="font-medium text-muted-foreground">Hours</h3>
                  <p className="text-muted-foreground">Monday - Sunday: 10:00 AM - 8:30 PM</p>
                  {/*<p className="text-muted-foreground">Sunday: 11:00 AM - 8:30 PM</p>*/}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Pihu Makeup Studio and Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
