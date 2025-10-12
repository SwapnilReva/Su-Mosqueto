"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react"
import { createContact } from "@/api/contact" // Local API entity

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service_type: "residential",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Build WhatsApp message first
      const message = `New contact enquiry from Su Mosquito Net\n\n`
        + `Name: ${formData.name}\n`
        + `Email: ${formData.email}\n`
        + `Phone: ${formData.phone || 'N/A'}\n`
        + `Service Type: ${formData.service_type}\n`
        + `Message: ${formData.message}`

      const whatsappNumber = '919924763444' // 
      const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

      // Open WhatsApp. On iOS Safari, avoid about:blank (causes back to blank page)
      if (typeof window !== 'undefined') {
        const ua = navigator.userAgent || ''
        const isIOS = /iPad|iPhone|iPod/.test(ua)
        if (isIOS) {
          // Open in the same tab so back returns to the site correctly
          window.open(waUrl, '_self')
        } else {
          // Desktop/Android: open a new tab
          window.open(waUrl, '_blank', 'noopener')
        }
      }

      // Fire-and-forget API call; do not block the redirect
      createContact(formData).catch((err) => {
        console.error('Error submitting form:', err)
      })

      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service_type: "residential",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
    }

    setIsSubmitting(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="pt-16 pb-6 bg-gradient-to-b from-slate-100/60 via-blue-50/40 to-indigo-100/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/60"
          >
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Thank You!</h2>
            <p className="text-xl text-slate-600 mb-8">
              Your message has been received. Our team will contact you within 24 hours.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Send Another Message
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="pt-16 pb-6 bg-gradient-to-b from-slate-100/60 via-blue-50/40 to-indigo-100/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
            Get in{" "}
            <span className="text-[var(--brand-blue)]">Touch</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space? Contact us for a free consultation and let's discuss your premium mosquito
            net solution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-[var(--brand-blue)] text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-200" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-blue-100">+91 9924763444</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-200" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-blue-100">swapnil.reva1499@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-200" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-blue-100">131, Vishal Industrial society, U M Road, Surat, Gujrat 395007</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/60">
              <h4 className="text-xl font-bold text-slate-800 mb-4">Business Hours</h4>
              <div className="space-y-2 text-slate-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/90 backdrop-blur-sm p-8 lg:p-12 rounded-3xl shadow-2xl border border-white/60"
            >
              <h3 className="text-3xl font-bold text-slate-800 mb-8">Send us a Message</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-slate-700 font-medium mb-2">Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your full name"
                    className="h-12"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    className="h-12"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-slate-700 font-medium mb-2">Phone</label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Your phone number"
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-2">Service Type</label>
                  <Select
                    value={formData.service_type}
                    onValueChange={(value) => handleInputChange("service_type", value)}
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="installation">Installation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-slate-700 font-medium mb-2">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your project..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-[var(--brand-blue)] hover:brightness-95 text-white text-lg font-semibold"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </div>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
