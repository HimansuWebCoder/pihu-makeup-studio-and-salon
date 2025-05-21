"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="mr-6">
              <div className="relative h-10 w-40">
                <Image
                  src="/logo2.svg?height=40&width=160"
                  alt="Pihu Makeup Studio and Salon"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              HOME
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              ABOUT
            </Link>
            <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
              SERVICES
            </Link>
            <Link href="/offers" className="text-sm font-medium transition-colors hover:text-primary">
              OFFERS
            </Link>
            <Link href="/gallery" className="text-sm font-medium transition-colors hover:text-primary">
              GALLERY
            </Link>
            <Link href="/videos" className="text-sm font-medium transition-colors hover:text-primary">
              VIDEOS
            </Link>
            <Link href="/testimonials" className="text-sm font-medium transition-colors hover:text-primary">
              TESTIMONIALS
            </Link>
            <Link href="/faq" className="text-sm font-medium transition-colors hover:text-primary">
              FAQ
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              CONTACT US
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm font-medium">+91-9438222888</span>
            </div>
            <ModeToggle />
            <Link href="/contact">
              <Button>Book Now</Button>
            </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/" className="text-lg font-medium transition-colors hover:text-primary">
                  HOME
                </Link>
                <Link href="/about" className="text-lg font-medium transition-colors hover:text-primary">
                  ABOUT
                </Link>
                <Link href="/services" className="text-lg font-medium transition-colors hover:text-primary">
                  SERVICES
                </Link>
                <Link href="/offers" className="text-lg font-medium transition-colors hover:text-primary">
                  OFFERS
                </Link>
                <Link href="/gallery" className="text-lg font-medium transition-colors hover:text-primary">
                  GALLERY
                </Link>
                <Link href="/videos" className="text-lg font-medium transition-colors hover:text-primary">
                  VIDEOS
                </Link>
                <Link href="/testimonials" className="text-lg font-medium transition-colors hover:text-primary">
                  TESTIMONIALS
                </Link>
                <Link href="/faq" className="text-lg font-medium transition-colors hover:text-primary">
                  FAQ
                </Link>
                <Link href="/contact" className="text-lg font-medium transition-colors hover:text-primary">
                  CONTACT US
                </Link>
                <div className="pt-4">
                  <div className="flex justify-center mb-4">
                    <ModeToggle />
                  </div>
                  <Link href="/contact">
                    <Button className="w-full">Book Now</Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
