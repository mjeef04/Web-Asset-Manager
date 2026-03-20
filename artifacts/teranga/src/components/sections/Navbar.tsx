import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Accueil", href: "#accueil" },
  { name: "À propos", href: "#apropos" },
  { name: "Spécialités", href: "#menu" },
  { name: "Galerie", href: "#galerie" },
  { name: "Avis", href: "#avis" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-secondary/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#accueil" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isScrolled ? 'bg-primary' : 'bg-white/20 backdrop-blur-sm'}`}>
              <img 
                src={`${import.meta.env.BASE_URL}images/teranga-logo.png`} 
                alt="Logo" 
                className="w-6 h-6 object-contain"
              />
            </div>
            <span className={`font-display font-bold text-2xl tracking-wide transition-colors ${
              isScrolled ? "text-white" : "text-white drop-shadow-md"
            }`}>
              Le Teranga
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary ${
                      isScrolled ? "text-white/80" : "text-white/90 drop-shadow-sm"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button asChild variant={isScrolled ? "default" : "outlineLight"} className="rounded-full">
              <a href="#contact">Réserver une table</a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-secondary pt-24 px-6 pb-6 flex flex-col md:hidden"
          >
            <ul className="flex flex-col gap-6 text-center mt-10">
              {navLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-display text-white hover:text-primary transition-colors block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto pb-8 flex justify-center">
              <Button asChild size="lg" className="w-full rounded-full max-w-xs">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Réserver une table</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
