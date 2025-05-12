"use client"

import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919438222888", "_blank")
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={handleWhatsAppClick}
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg z-50"
            size="icon"
          >
            <MessageSquare className="h-6 w-6 text-white" />
            <span className="sr-only">Contact us on WhatsApp</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Chat with us on WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
