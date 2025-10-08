"use client"
import { motion } from "framer-motion"
import { Eye, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const galleryImages = [
  { src: "/images/hero-city.png", title: "Modern City View", category: "Residential", span: "col-span-2 row-span-2" },
  {
    src: "/images/landscape-window.jpg",
    title: "Garden Paradise",
    category: "Luxury Home",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/woman-reading.jpg",
    title: "Countryside Elegance",
    category: "Premium",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/living-room-wide.png",
    title: "Comfort Zone",
    category: "Interior Design",
    span: "col-span-2 row-span-1",
  },
  {
    src: "/images/living-vertical.png",
    title: "Minimal Luxury",
    category: "Contemporary",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/window-mesh.jpg",
    title: "Mesh Protection",
    category: "Window System",
    span: "col-span-1 row-span-1",
  },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="pt-16 pb-6 bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-stone-100/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
            Stunning{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Transformations
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Witness how our premium mosquito nets elevate interior spaces while providing uncompromising protection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/40 h-48 sm:h-56 lg:h-64`}
            >
              <Image
                src={image.src || "/placeholder.jpg"}
                alt={image.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
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
