"use client"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import BiographySection from "@/components/biography-section"
import GallerySection from "@/components/songs-section"
// import SongsSection from "@/components/songs-section"
import DiscographySection from "@/components/discography-section"
import FeaturesSection from "@/components/features-section"
import ContactFooter from "@/components/contact-footer"

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Header />
      <HeroSection />
      <BiographySection />
      <GallerySection />
      <DiscographySection />
      <FeaturesSection />
      <ContactFooter />
    </main>
  )
}
