"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time (you can remove this in production and use real loading detection)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center">
            <div className="relative h-24 w-24 mb-6">
              <Image
                src="/logo.svg"
                alt="Pihu Makeup Studio and Salon"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative">
              <div className="h-2 w-48 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.5,
                    ease: "linear",
                  }}
                  className="h-full w-24 bg-gradient-to-r from-transparent via-primary to-transparent absolute"
                />
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-muted-foreground font-cormorant text-lg italic"
            >
              Enhancing your beauty...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
