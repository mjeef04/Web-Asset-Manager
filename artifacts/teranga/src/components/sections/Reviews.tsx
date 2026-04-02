import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const reviews = [
  {
    name: "Marie D.",
    text: "La meilleure pizza de Cotonou ! La terrasse est magnifique, parfaite pour une soirée romantique. Je reviendrai certainement !",
    date: "Il y a 2 semaines"
  },
  {
    name: "Kofi A.",
    text: "Portions généreuses et saveurs authentiques. Le shawarma est exceptionnel. Ambiance festive et service attentionné.",
    date: "Il y a 1 mois"
  },
  {
    name: "Amira B.",
    text: "Le TiersMonde, c'est une expérience unique à Cotonou. La fusion cuisine libanaise-africaine est parfaitement réussie. Incontournable !",
    date: "Il y a 2 mois"
  },
  {
    name: "Jean-Pierre M.",
    text: "Excellente découverte ! La terrasse la nuit est féerique. Les fruits de mer sont frais et délicieusement préparés. Bravo !",
    date: "Il y a 3 mois"
  }
]

export function Reviews() {
  return (
    <section id="avis" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative quote mark background */}
      <div className="absolute top-10 left-10 text-[300px] font-display text-primary/5 leading-none select-none z-0">
        "
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
            Témoignages
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-secondary mb-6">
            Ce que disent nos clients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg shadow-black/5 bg-card/80 hover:bg-card transition-colors">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-lg italic mb-6 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-bold text-secondary font-display text-lg">
                      {review.name}
                    </span>
                    <span className="text-sm text-muted-foreground/70">
                      {review.date}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
