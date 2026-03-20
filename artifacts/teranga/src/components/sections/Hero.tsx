import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section id="accueil" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* landing page hero scenic restaurant terrace night ambiance */}
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1934&auto=format&fit=crop"
          alt="Restaurant Le Teranga Terrace"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark elegant wash for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-secondary/90 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 text-sm tracking-widest uppercase mb-6 backdrop-blur-sm">
            Bienvenue à Cotonou
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white mb-6 leading-tight drop-shadow-lg">
            Restaurant <br/>
            <span className="text-primary italic">Le Teranga</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 font-light max-w-2xl mx-auto mb-10 text-balance leading-relaxed">
            L'hospitalité au cœur des saveurs. Un voyage culinaire unique entre la Méditerranée, le Liban et l'Afrique.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full w-full sm:w-auto text-lg px-8">
              <a href="#contact">Réserver une table</a>
            </Button>
            <Button asChild variant="outlineLight" size="lg" className="rounded-full w-full sm:w-auto text-lg px-8">
              <a href="#menu">Voir le menu</a>
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <a href="#apropos" aria-label="Scroll down">
          <ChevronDown size={32} className="hover:text-primary transition-colors" />
        </a>
      </motion.div>
    </section>
  )
}
