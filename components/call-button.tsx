"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"

export default function CallButton() {
  const handleCallClick = () => {
    window.location.href = "tel:+919438222888"
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50"
          >
            <Button
              onClick={handleCallClick}
              className="h-14 w-14 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg"
              size="icon"
            >
              <Phone className="h-6 w-6 text-white" />
              <span className="sr-only">Call us</span>
            </Button>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Call us now</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
