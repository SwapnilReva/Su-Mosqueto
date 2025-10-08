"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nano-banana-2025-09-09T07-40-51-z8e0v8fKzBe3eUkmtQanuHFc3mvp60.png",
    rating: 5,
    text: "The quality is exceptional. Our windows look stunning and we finally have peace of mind during the monsoon season.",
  },
  {
    name: "Rajesh Kumar",
    location: "Bangalore",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img_5eOYA4oiCj-i4Q4BLHv3atrFBkIvfRARCZMVEOahh.jpeg",
    rating: 5,
    text: "Professional installation and the nets are practically invisible. Worth every rupee!",
  },
  {
    name: "Anita Desai",
    location: "Delhi",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_3kgpuw3kgpuw3kgp-QKAYTDiiWgf7gNbso0PqmsAwefafLv.png",
    rating: 5,
    text: "Su Mosquito Net transformed our living experience. The craftsmanship is outstanding.",
  },
]

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="border-border bg-card">
        <CardContent className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative w-full md:w-1/3 h-64 md:h-80 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={testimonials[current].image || "/placeholder.svg"}
                alt={testimonials[current].name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg text-card-foreground leading-relaxed mb-6 italic">"{testimonials[current].text}"</p>
              <div>
                <p className="font-serif text-xl font-semibold text-card-foreground">{testimonials[current].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[current].location}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          className="rounded-full border-border hover:bg-accent hover:text-accent-foreground bg-transparent"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-accent" : "w-2 bg-border"}`}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={next}
          className="rounded-full border-border hover:bg-accent hover:text-accent-foreground bg-transparent"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
