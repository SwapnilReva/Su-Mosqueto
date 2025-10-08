"use client"
import { useState, useEffect, useRef } from "react"
import { ArrowDown, Shield, Star, Award } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import heroCity from "@/public/images/hero-city.png"
import womanReading from "@/public/images/woman-reading.jpg"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const ticking = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking.current = false
        })
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden mb-8">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0 transform-gpu will-change-transform" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <Image
          src={heroCity}
          alt="Luxury Interior with Mosquito Net"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          quality={70}
          className="object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-indigo-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-white"
        >
          <div className="flex items-center space-x-2 mb-6">
            <Award className="w-6 h-6 text-amber-400" />
            <span className="text-amber-400 font-medium tracking-wide">GERMAN PRECISION</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
            Luxury{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Mosquito</span>{" "}
            Net Solutions
          </h1>

          <p className="text-xl lg:text-2xl text-slate-200 mb-10 leading-relaxed max-w-2xl">
            Experience unparalleled protection with premium German-engineered mosquito nets that seamlessly blend with
            your luxury interiors.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl transition-all duration-300"
            >
              Explore Our Products
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm transition-all duration-300"
              type="button"
              onClick={() => {
                const el = document.querySelector('#contact')
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              Schedule Consultation
            </motion.button>
          </div>

          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-green-400" />
              <span className="text-slate-300">Premium Protection</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-6 h-6 text-yellow-400" />
              <span className="text-slate-300">5-Star Quality</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <div className="relative">
            <Image
              src={womanReading}
              alt="Elegant Interior"
              width={800}
              height={1000}
              sizes="(min-width: 1024px) 600px, 100vw"
              placeholder="blur"
              quality={75}
              className="rounded-2xl shadow-2xl w-full max-w-lg ml-auto h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl">
              <div className="text-slate-800">
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-slate-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center text-white/70">
          <span className="text-sm mb-2">Scroll to discover</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}
