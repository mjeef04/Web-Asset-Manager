import { motion } from "framer-motion"

const images = [
  {
    // wood fired pizza
    url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
    title: "Pizzas Artisanales",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    // lebanese food falafel
    url: "https://images.unsplash.com/photo-1529312266912-b33cfce2eefd?q=80&w=1974&auto=format&fit=crop",
    title: "Mezzés Libanais",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    // grilled meats
    url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop",
    title: "Grillades Tendres",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    // seafood
    url: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=1974&auto=format&fit=crop",
    title: "Fruits de Mer Frais",
    className: "md:col-span-1 md:row-span-2"
  },
  {
    // cocktails
    url: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=2069&auto=format&fit=crop",
    title: "Cocktails Signature",
    className: "md:col-span-2 md:row-span-1"
  },
]

export function Gallery() {
  return (
    <section id="galerie" className="py-24 bg-secondary text-secondary-foreground relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              En Images
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-white">
              Notre Galerie
            </h2>
          </div>
          <p className="text-white/70 max-w-sm text-lg md:text-right">
            Un aperçu de l'expérience visuelle et gustative qui vous attend au Teranga.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-xl overflow-hidden group ${img.className}`}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-display text-xl font-semibold tracking-wide">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
