"use client"
import { motion } from "framer-motion"
import { Eye, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import heroCity from "@/public/images/hero-city.png"
import landscapeWindow from "@/public/images/landscape-window.jpg"
import womanReading from "@/public/images/woman-reading.jpg"
import livingRoomWide from "@/public/images/living-room-wide.png"
import livingVertical from "@/public/images/living-vertical.png"
import windowMesh from "@/public/images/window-mesh.jpg"

const galleryImages = [
  { src: heroCity, title: "Modern City View", category: "Residential", span: "col-span-2 row-span-2" },
  { src: landscapeWindow, title: "Garden Paradise", category: "Luxury Home", span: "col-span-1 row-span-1" },
  { src: womanReading, title: "Countryside Elegance", category: "Premium", span: "col-span-1 row-span-1" },
  { src: livingRoomWide, title: "Comfort Zone", category: "Interior Design", span: "col-span-2 row-span-1" },
  { src: livingVertical, title: "Minimal Luxury", category: "Contemporary", span: "col-span-1 row-span-2" },
  { src: windowMesh, title: "Mesh Protection", category: "Window System", span: "col-span-1 row-span-1" },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="cv-section pt-16 pb-6 bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-stone-100/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0.6, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
            Stunning{" "}
            <span className="text-blue-600">Transformations</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Witness how our premium mosquito nets elevate interior spaces while providing uncompromising protection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.7, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.3), ease: "easeOut" }}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/40 h-48 sm:h-56 lg:h-64 transform-gpu will-change-transform`}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                placeholder="blur"
                priority={index < 2}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-slate-300 text-sm">{image.category}</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio button removed as requested */}
      </div>
    </section>
  )
}
