import { motion } from "framer-motion"
import { Pizza, Utensils, Beef, Fish, Salad, Martini } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const menuCategories = [
  {
    id: "pizzas",
    title: "Pizzas au feu de bois",
    icon: Pizza,
    description: "Pâte artisanale, cuisson traditionnelle",
    items: ["Pizza Méditerranée (Signature)", "Pizza 4 Fromages", "Pizza Orientale"]
  },
  {
    id: "libanais",
    title: "Spécialités Libanaises",
    icon: Utensils,
    description: "Mezzés et saveurs d'Orient",
    items: ["Shawarma Authentique", "Falafels Maison", "Houmous & Taboulé"]
  },
  {
    id: "grillades",
    title: "Grillades & Viandes",
    icon: Beef,
    description: "Viandes tendres, épices subtiles",
    items: ["Côte de Bœuf", "Poulet Grillé aux Épices", "Agneau Méchoui"]
  },
  {
    id: "mer",
    title: "Fruits de Mer & Poisson",
    icon: Fish,
    description: "La fraîcheur de l'océan",
    items: ["Poisson Braisé Sauce Tomate", "Crevettes Flambées", "Brochettes de Fruits de Mer"]
  },
  {
    id: "salades",
    title: "Salades",
    icon: Salad,
    description: "Fraîcheur et légèreté",
    items: ["Salade Avocat-Crevettes", "Salade César Orientale", "Salade Fraîcheur du Marché"]
  },
  {
    id: "boissons",
    title: "Cocktails & Boissons",
    icon: Martini,
    description: "Rafraîchissements et mixologie",
    items: ["Mojito Classique", "Margarita", "Cocktails Maison & Jus Frais"]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
}

export function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-card relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
            Découvrez
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-secondary mb-6">
            Nos Spécialités
          </h2>
          <p className="text-muted-foreground text-lg">
            Une carte variée conçue pour satisfaire toutes vos envies, des classiques réconfortants aux créations audacieuses.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {menuCategories.map((category) => {
            const Icon = category.icon
            return (
              <motion.div key={category.id} variants={itemVariants}>
                <Card className="h-full border border-border/50 bg-background/50 hover:bg-background hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative">
                  {/* Subtle top border accent on hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                  
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-secondary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="font-display text-2xl font-bold text-secondary mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-primary mb-6 italic">
                      {category.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-accent mt-1 text-xs">✦</span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Et bien d'autres délices vous attendent sur place...</p>
        </div>
      </div>
    </section>
  )
}
