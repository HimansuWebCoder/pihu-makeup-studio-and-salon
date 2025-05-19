"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if the popup has been shown before
    const hasShownPopup = localStorage.getItem("welcomePopupShown")

    if (!hasShownPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true)
        // Set flag in localStorage
        localStorage.setItem("welcomePopupShown", "true")
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Welcome to Pihu Makeup Studio and Salon!</DialogTitle>
          <DialogDescription>
            We're delighted to have you visit our website. Discover our range of professional beauty services designed
            to enhance your natural beauty.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="mb-4">
            As a welcome gift, enjoy <span className="font-bold text-primary">10% OFF</span> on your first appointment
            when you book online.
          </p>
         {/* <p className="text-sm text-muted-foreground">
            Use code: <span className="font-bold">WELCOME10</span> at checkout.
          </p>*/}
        </div>
        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Maybe Later
          </Button>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button className="w-full" onClick={() => setIsOpen(false)}>
              Book Now
            </Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
