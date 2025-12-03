"use client"

import { ArrowDown } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/5 to-background overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 text-foreground">
          Discover the <span className="text-primary">Rhythm</span> of Creativity
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-8 text-balance">
          Explore exceptional music, compelling stories, and creative vision from an award-winning artist
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="#songs"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Listen to Music
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            Get in Touch
          </Link>
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="#biography" className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-primary" />
          </Link>
        </div>
      </div>
    </section>
  )
}
