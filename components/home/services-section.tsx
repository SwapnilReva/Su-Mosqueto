"use client"
import { motion } from "framer-motion"
import { Home, Building, Wrench, Phone, Sparkles, Clock } from "lucide-react"
import Image from "next/image"
import residentialImg from "@/public/images/residential-luxury.jpeg"
import commercialImg from "@/public/images/commercial-modern.png"
import installationImg from "@/public/images/installation-professional.jpeg"

type ServiceColor = "blue" | "purple" | "green"
interface Service {
  icon: typeof Home
  title: string
  description: string
  features: string[]
  color: ServiceColor
  image: any
}

const services: Service[] = [
  {
    icon: Home,
    title: "Residential Solutions",
    description: "Premium mosquito nets designed for luxury homes and apartments",
    features: ["Custom sizing", "Aesthetic integration", "Easy maintenance"],
    color: "blue",
    image: residentialImg,
  },
  {
    icon: Building,
    title: "Commercial Projects",
    description: "Large-scale installations for offices, hotels, and commercial spaces",
    features: ["Bulk installations", "Professional grade", "Warranty included"],
    color: "purple",
    image: commercialImg,
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Expert installation services by certified technicians",
    features: ["Same-day service", "Precision fitting", "Quality guarantee"],
    color: "green",
    image: installationImg,
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="cv-section py-16 bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0.6, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
            Our Premium{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From residential luxury to commercial excellence, we deliver tailored mosquito net solutions that exceed
            expectations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const colorClasses: Record<ServiceColor, string> = {
              blue: "from-blue-600 to-cyan-600",
              purple: "from-purple-600 to-pink-600",
              green: "from-green-600 to-emerald-600",
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0.7, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.32), ease: "easeOut" }}
                className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden group border border-white/70 transform-gpu will-change-transform"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    placeholder="blur"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    priority={index < 1}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${colorClasses[service.color]} opacity-20`}></div>
                </div>

                <div className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${colorClasses[service.color]} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0.6, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 rounded-3xl p-12 text-white shadow-2xl transform-gpu will-change-transform"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Simple Process</h3>
            <p className="text-slate-300 text-lg">From consultation to installation, we make it effortless</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">1. Consultation</h4>
              <p className="text-slate-300">Free consultation and precise measurements</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">2. Customization</h4>
              <p className="text-slate-300">Tailored design to match your interiors</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">3. Installation</h4>
              <p className="text-slate-300">Professional same-day installation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
