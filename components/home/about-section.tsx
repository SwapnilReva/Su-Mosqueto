"use client"
import { motion } from "framer-motion"
import { Shield, Award, Leaf, CheckCircle, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "German Precision Engineering",
    description: "Meticulously crafted with the highest quality German technology and attention to detail.",
    color: "blue",
  },
  {
    icon: Award,
    title: "Luxury Aesthetic Design",
    description: "Seamlessly blends with modern home interiors while providing superior protection.",
    color: "amber",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Materials",
    description: "Built with sustainable and durable materials for long-lasting performance.",
    color: "green",
  },
  {
    icon: CheckCircle,
    title: "Trusted Quality Assurance",
    description: "Backed by years of expertise and thousands of satisfied customers worldwide.",
    color: "purple",
  },
]

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "10,000+", label: "Happy Customers" },
  { number: "50+", label: "Cities Served" },
  { number: "99%", label: "Satisfaction Rate" },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-slate-50 via-stone-100 to-amber-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Su Mosquito Net
            </span>
            ?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect fusion of German engineering excellence and luxury design. Our premium mosquito nets
            redefine protection with unmatched sophistication.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              const colorClasses = {
                blue: "bg-blue-100 text-blue-600",
                amber: "bg-amber-100 text-amber-600",
                green: "bg-green-100 text-green-600",
                purple: "bg-purple-100 text-purple-600",
              }

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
                >
                  <div className={`p-3 rounded-xl ${colorClasses[feature.color]}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/images/landscape-window.jpg"
              alt="Premium Interior with Mosquito Net"
              className="rounded-3xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-3">
                <Users className="w-8 h-8" />
                <div>
                  <div className="text-2xl font-bold">Premium</div>
                  <div className="text-blue-100">German Quality</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
