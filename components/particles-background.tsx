"use client"

import { useCallback, useEffect, useState } from "react"
import { useTheme } from "next-themes"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"

export default function ParticlesBackground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Wait for component to mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Initialize particles with the slim version
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  if (!mounted) return null

  const isDarkMode = theme === "dark"

  // Create salon-themed SVG shapes
  const salonShapes = [
    // Flower 1 - Rose
    "M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,8C15.31,8 18,10.69 18,14C18,17.31 15.31,20 12,20C8.69,20 6,17.31 6,14C6,10.69 8.69,8 12,8M12,10C9.79,10 8,11.79 8,14C8,16.21 9.79,18 12,18C14.21,18 16,16.21 16,14C16,11.79 14.21,10 12,10Z",

    // Flower 2 - Daisy
    "M12,2L13.09,8.26L20,7L14.74,12.26L21,13.09L14.74,11.74L20,17L13.09,15.74L14.74,22L12,16.74L9.26,22L10.91,15.74L4,17L9.26,11.74L3,10.91L9.26,12.26L4,7L10.91,8.26L9.26,2L12,7.26L14.74,2Z",

    // Makeup Brush
    "M9,2V8H7V22H17V8H15V2H9M11,4H13V8H11V4M9,10H15V20H9V10Z",

    // Lipstick
    "M8,2V6H16V2H8M7,8V22H17V8H7M9,10H15V20H9V10M10,4H14V6H10V4Z",

    // Scissors
    "M9,2C7.89,2 7,2.89 7,4A2,2 0 0,0 9,6C10.11,6 11,5.11 11,4C11,2.89 10.11,2 9,2M15,2C13.89,2 13,2.89 13,4A2,2 0 0,0 15,6C16.11,6 17,5.11 17,4C17,2.89 16.11,2 15,2M9,8L15,14L9,20L15,14L21,20L15,14L9,8Z",

    // Flower 3 - Tulip
    "M12,2C8,2 5,6 5,10C5,14 8,16 12,16C16,16 19,14 19,10C19,6 16,2 12,2M12,18V22H10V18H12Z",

    // Comb
    "M4,4H20V6H4V4M4,8H20V10H4V8M4,12H20V14H4V12M4,16H20V18H4V16M4,20H20V22H4V20Z",

    // Flower 4 - Lotus
    "M12,2C8,2 5,5 5,9C5,11 6,12.5 7.5,13.5C6,14.5 5,16 5,18C5,20 7,22 12,22C17,22 19,20 19,18C19,16 18,14.5 16.5,13.5C18,12.5 19,11 19,9C19,5 16,2 12,2Z",
  ]

  // Salon-themed particles configuration
  const options = {
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    particles: {
      number: {
        value: 12,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      color: {
        value: isDarkMode
          ? ["#ff6b95", "#ff8fa3", "#ffb3c1", "#ffd6e0", "#e91e63", "#f48fb1"]
          : ["#ff4081", "#ff6b95", "#ff8fa3", "#ffb3c1", "#e91e63", "#f06292"],
      },
      shape: {
        type: "image",
        image: salonShapes.map((path, index) => ({
          src: `data:image/svg+xml;base64,${btoa(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="${isDarkMode ? "#ff8fa3" : "#ff4081"}" d="${path}" opacity="0.6"/>
            </svg>
          `)}`,
          width: 24,
          height: 24,
        })),
      },
      opacity: {
        value: isDarkMode ? 0.2 : 0.4,
        random: true,
        anim: {
          enable: true,
          speed: 0.3,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 50,
        random: true,
        anim: {
          enable: true,
          speed: 1.5,
          size_min: 8,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
        },
      },
      rotate: {
        value: 0,
        random: true,
        direction: "clockwise",
        animation: {
          enable: true,
          speed: 2,
          sync: false,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 150,
          size: 20,
          duration: 2,
          opacity: 0.8,
          speed: 3,
        },
        push: {
          particles_nb: 3,
        },
      },
    },
    retina_detect: true,
  }

  return <Particles id="tsparticles" init={particlesInit} options={options} />
}
