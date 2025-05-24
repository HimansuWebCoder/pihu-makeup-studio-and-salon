"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function FloatingElements() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Wait for component to mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDarkMode = theme === "dark"

  // Generate random position for each element
  const getRandomPosition = () => {
    return {
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: 0.5 + Math.random() * 0.5,
      rotate: Math.random() * 360,
    }
  }

  // Create array of floating elements
  const floatingElements = Array.from({ length: 12 }).map((_, i) => {
    const initialPos = getRandomPosition()
    const finalPos = getRandomPosition()

    return (
      <motion.div
        key={i}
        className="absolute pointer-events-none"
        style={{
          left: `${initialPos.x}%`,
          top: `${initialPos.y}%`,
          opacity: isDarkMode ? 0.07 : 0.15,
        }}
        animate={{
          x: [0, finalPos.x - initialPos.x, 0],
          y: [0, finalPos.y - initialPos.y, 0],
          rotate: [0, finalPos.rotate, 0],
        }}
        transition={{
          duration: 20 + Math.random() * 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <FloatingElement type={i % 4} scale={initialPos.scale} />
      </motion.div>
    )
  })

  return <div className="fixed inset-0 overflow-hidden z-[-1]">{floatingElements}</div>
}

function FloatingElement({ type, scale }: { type: number; scale: number }) {
  // Different SVG elements for variety
  switch (type) {
    case 0:
      return (
        <svg width={50 * scale} height={50 * scale} viewBox="0 0 24 24" fill="currentColor" className="text-primary/20">
          <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" opacity="0.4" />
          <path d="M12,7a5,5,0,1,0,5,5A5,5,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z" />
        </svg>
      )
    case 1:
      return (
        <svg
          width={60 * scale}
          height={60 * scale}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-rose-400/20"
        >
          <path d="M12,22.5C5.3,22.5,0,17.1,0,10.2C0,4.9,3.2,0.6,7.5,0.1C8,0,8.5,0.4,8.6,0.9c0.1,0.5-0.3,1-0.8,1.1C4.2,2.4,1.5,6,1.5,10.3 c0,5.9,4.6,10.8,10.5,10.8S22.5,16.2,22.5,10.3c0-4.2-2.8-7.9-6.7-9.1c-0.5-0.1-0.8-0.6-0.7-1.1c0.1-0.5,0.6-0.8,1.1-0.7 C20.7,0.9,24,5.2,24,10.5C24,17.1,18.7,22.5,12,22.5z" />
          <path d="M12,16.5c-3.6,0-6.5-2.9-6.5-6.5c0-3.2,2.4-5.9,5.5-6.4C11.5,3.5,12,3.9,12.1,4.4c0.1,0.5-0.3,1-0.8,1.1 c-2.2,0.4-3.8,2.3-3.8,4.5c0,2.5,2,4.5,4.5,4.5s4.5-2,4.5-4.5c0-2.2-1.6-4.1-3.8-4.5c-0.5-0.1-0.9-0.6-0.8-1.1 c0.1-0.5,0.6-0.9,1.1-0.8c3.1,0.5,5.5,3.2,5.5,6.4C18.5,13.6,15.6,16.5,12,16.5z" />
        </svg>
      )
    case 2:
      return (
        <svg
          width={40 * scale}
          height={40 * scale}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-pink-300/20"
        >
          <path d="M12,0L8,4L4,8L0,12L4,16L8,20L12,24L16,20L20,16L24,12L20,8L16,4L12,0Z" />
        </svg>
      )
    case 3:
    default:
      return (
        <svg
          width={45 * scale}
          height={45 * scale}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-rose-600/20"
        >
          <path d="M12,0c-1.1,0-2,0.9-2,2c0,0.4,0.1,0.7,0.3,1C5.5,4.1,2,8.3,2,13c0,5.5,4.5,10,10,10s10-4.5,10-10c0-4.7-3.5-8.9-8.3-9.9 c0.2-0.3,0.3-0.7,0.3-1C14,0.9,13.1,0,12,0z M12,21c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S16.4,21,12,21z" />
          <path d="M12,7c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S14.8,7,12,7z M12,15c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S13.7,15,12,15z" />
        </svg>
      )
  }
}
