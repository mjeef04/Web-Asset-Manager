import { motion } from "framer-motion"

export function About() {
  return (
    <section id="apropos" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
              {/* warm restaurant interior */}
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" 
                alt="Intérieur du restaurant Le Teranga" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-secondary/10"></div>
            </div>
            
            {/* Overlay card */}
            <div className="absolute -bottom-8 -right-8 md:-right-12 bg-card p-6 md:p-8 rounded-2xl shadow-xl max-w-[280px] border border-border">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl">
                  ✧
                </div>
                <h4 className="font-display font-bold text-xl">L'Hospitalité</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Le Teranga, c'est l'art de recevoir à l'africaine, avec générosité et chaleur.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-8 pt-8 lg:pt-0"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Notre Histoire
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-secondary mb-8 leading-tight">
              Une invitation au <br/>
              <span className="text-primary italic">voyage culinaire</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Au cœur de Cotonou, le Restaurant <strong className="text-secondary">Le Teranga</strong> vous invite dans un cadre exceptionnel. Notre nom, qui signifie « hospitalité » en wolof, reflète notre philosophie la plus profonde : vous accueillir comme des amis de longue date.
              </p>
              <p>
                Profitez de notre magnifique terrasse illuminée et savourez notre cuisine fusion — un mélange subtil et raffiné de saveurs libanaises, méditerranéennes, africaines et internationales. Chaque plat est préparé avec des ingrédients frais et une passion débordante.
              </p>
              <p>
                Que vous soyez en famille pour un dîner convivial, en couple pour une soirée romantique, ou entre amis pour célébrer, Le Teranga est <span className="italic text-primary">votre table</span>.
              </p>
            </div>
            
            <div className="mt-10 flex items-center gap-6">
              <img src={`${import.meta.env.BASE_URL}images/teranga-logo.png`} alt="Le Teranga Icon" className="w-16 h-16 opacity-80 mix-blend-multiply" />
              <div className="flex flex-col">
                <span className="font-display text-xl text-secondary font-semibold">Le Chef Exécutif</span>
                <span className="text-primary text-sm tracking-widest uppercase">Signature Teranga</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
