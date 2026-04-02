import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 border-b border-white/10 pb-16">
          
          {/* Brand Col */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <img 
                  src={`${import.meta.env.BASE_URL}images/teranga-logo.png`} 
                  alt="Logo" 
                  className="w-6 h-6 object-contain brightness-0 invert"
                />
              </div>
              <span className="font-display font-bold text-2xl tracking-wide text-white">
                Le TiersMonde
              </span>
            </div>
            <p className="text-white/70 mb-6 max-w-sm leading-relaxed">
              L'hospitalité au cœur des saveurs. Venez découvrir notre cuisine fusion dans un cadre enchanteur à Cotonou.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div className="col-span-1 md:pl-10">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#accueil" className="text-white/70 hover:text-primary transition-colors">Accueil</a></li>
              <li><a href="#apropos" className="text-white/70 hover:text-primary transition-colors">Notre Histoire</a></li>
              <li><a href="#menu" className="text-white/70 hover:text-primary transition-colors">Spécialités</a></li>
              <li><a href="#galerie" className="text-white/70 hover:text-primary transition-colors">Galerie</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-primary transition-colors">Réservation</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contactez-nous</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <span className="text-white/70">Rue 375, Haie-Vive<br/>Cotonou, Bénin</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span className="text-white/70">+229 01 00 00 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <span className="text-white/70">contact@letiersmonde.bj</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Restaurant Le TiersMonde. Tous droits réservés.</p>
          <p>Conçu avec passion pour l'hospitalité.</p>
        </div>

      </div>
    </footer>
  )
}
