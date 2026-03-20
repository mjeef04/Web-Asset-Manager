import { Navbar } from "@/components/sections/Navbar"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Menu } from "@/components/sections/Menu"
import { Gallery } from "@/components/sections/Gallery"
import { Reviews } from "@/components/sections/Reviews"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}
