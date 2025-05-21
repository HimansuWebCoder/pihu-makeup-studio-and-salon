"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, Scissors, Tag, CalendarDays } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function CouponVoucher() {
  const { toast } = useToast()
  const [couponCode, setCouponCode] = useState("")

  const availableCoupons = [
    {
      code: "WELCOME10",
      discount: "10% OFF",
      description: "10% off on your first visit",
      validUntil: "Ongoing",
      minPurchase: "No minimum purchase",
      forNewUsers: true,
    },
    {
      code: "SUMMER25",
      discount: "25% OFF",
      description: "25% off on all summer packages",
      validUntil: "June 30, 2024",
      minPurchase: "Min. purchase: ₹3,000",
      forNewUsers: false,
    },
    {
      code: "BRIDE2024",
      discount: "15% OFF",
      description: "15% off on bridal packages",
      validUntil: "December 31, 2024",
      minPurchase: "Min. purchase: ₹20,000",
      forNewUsers: false,
    },
    {
      code: "FRIEND20",
      discount: "20% OFF",
      description: "20% off when you refer a friend",
      validUntil: "Ongoing",
      minPurchase: "No minimum purchase",
      forNewUsers: false,
    },
  ]

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    toast({
      title: "Code copied!",
      description: `${code} has been copied to your clipboard.`,
      duration: 3000,
    })
  }

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault()
    if (couponCode.trim() === "") {
      toast({
        title: "Error",
        description: "Please enter a coupon code.",
        variant: "destructive",
        duration: 3000,
      })
      return
    }

    const foundCoupon = availableCoupons.find((coupon) => coupon.code.toLowerCase() === couponCode.toLowerCase())

    if (foundCoupon) {
      toast({
        title: "Success!",
        description: `Coupon code ${foundCoupon.code} is valid for ${foundCoupon.discount}.`,
        duration: 3000,
      })
    } else {
      toast({
        title: "Invalid coupon",
        description: "The coupon code you entered is invalid or expired.",
        variant: "destructive",
        duration: 3000,
      })
    }
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Coupon Codes & Vouchers</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Use these special codes to save on your favorite beauty services
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-primary">Available Coupons</h3>
          <div className="space-y-4">
            {availableCoupons.map((coupon, index) => (
              <Card key={index} className="overflow-hidden border-dashed">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-muted p-6 flex items-center justify-center md:w-1/3">
                    <div className="text-center">
                      <Scissors className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <div className="text-2xl font-bold text-primary">{coupon.discount}</div>
                      {coupon.forNewUsers && (
                        <Badge variant="outline" className="mt-2">
                          New Users Only
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{coupon.description}</h4>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 px-2"
                        onClick={() => handleCopyCode(coupon.code)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Tag className="h-4 w-4 mr-2" />
                      <span>Code: </span>
                      <span className="font-mono bg-muted px-2 py-0.5 rounded ml-1">{coupon.code}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <CalendarDays className="h-4 w-4 mr-2" />
                      <span>Valid until: {coupon.validUntil}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{coupon.minPurchase}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-primary">Check Coupon Validity</h3>
          <Card>
            <CardHeader>
              <CardTitle>Have a coupon code?</CardTitle>
              <CardDescription>Enter your code below to check if it's valid</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleApplyCoupon} className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="coupon-code" className="text-sm font-medium">
                    Coupon Code
                  </label>
                  <div className="flex space-x-2">
                    <Input
                      id="coupon-code"
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="submit">Apply</Button>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <h4 className="font-semibold mb-2">How to use coupon codes:</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                <li>Copy the coupon code you want to use</li>
                <li>Mention the code when booking your appointment</li>
                <li>Show the code to our staff before payment</li>
                <li>Enjoy your discount!</li>
              </ol>
              <p className="text-sm text-muted-foreground mt-4">
                Note: Coupon codes cannot be combined with other offers unless specified.
              </p>
            </CardFooter>
          </Card>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Gift Vouchers</h3>
            <Card>
              <CardHeader>
                <CardTitle>Give the Gift of Beauty</CardTitle>
                <CardDescription>
                  Purchase a gift voucher for your loved ones and let them choose their favorite services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Our gift vouchers are available in various denominations and can be used for any service at our salon.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="border rounded-md p-4 text-center">
                    <div className="text-lg font-semibold">₹1,000</div>
                    <div className="text-sm text-muted-foreground">Basic Voucher</div>
                  </div>
                  <div className="border rounded-md p-4 text-center">
                    <div className="text-lg font-semibold">₹2,500</div>
                    <div className="text-sm text-muted-foreground">Silver Voucher</div>
                  </div>
                  <div className="border rounded-md p-4 text-center">
                    <div className="text-lg font-semibold">₹5,000</div>
                    <div className="text-sm text-muted-foreground">Gold Voucher</div>
                  </div>
                  <div className="border rounded-md p-4 text-center">
                    <div className="text-lg font-semibold">₹10,000</div>
                    <div className="text-sm text-muted-foreground">Platinum Voucher</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Gift vouchers are valid for 6 months from the date of purchase.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Purchase Gift Voucher</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
