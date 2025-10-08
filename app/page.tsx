"use client"

import { useEffect } from "react"
import HeroSection from "@/components/home/hero-section"
import AboutSection from "@/components/home/about-section"
import ServicesSection from "@/components/home/services-section"
import GallerySection from "@/components/home/gallery-section"
import ContactSection from "@/components/home/contact-section"

export default function Page() {
  // Smooth scroll for in-page anchors
  useEffect(() => {
    const handleSmooth = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      const href = target?.getAttribute?.("href")
      if (href && href.startsWith("#")) {
        const el = document.querySelector(href)
        if (el) {
          e.preventDefault()
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }
    }
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((l) => l.addEventListener("click", handleSmooth))
    return () => links.forEach((l) => l.removeEventListener("click", handleSmooth))
  }, [])

  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
    </main>
  )
}
