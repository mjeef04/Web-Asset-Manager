import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Facebook, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  phone: z.string().optional(),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
})

type ContactFormValues = z.infer<typeof contactSchema>

export function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    // Simulate network request since there's no backend
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    
    toast({
      title: "Message envoyé !",
      description: "Nous avons bien reçu votre demande. Nous vous répondrons très vite.",
    })
    
    form.reset()
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
            Nous Trouver
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-secondary mb-6">
            Contact & Réservation
          </h2>
          <p className="text-muted-foreground text-lg">
            Réservez votre table ou posez-nous vos questions. Notre équipe est à votre écoute.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Info & Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Adresse</h4>
                  <p className="text-muted-foreground">Rue 375, Haie-Vive<br/>Cotonou, Bénin</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Téléphone</h4>
                  <p className="text-muted-foreground">+229 01 00 00 00 00</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Heures d'ouverture</h4>
                  <p className="text-muted-foreground">Tous les jours<br/>de 9h à 1h du matin</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center">
                  <Facebook size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Réseaux Sociaux</h4>
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors underline underline-offset-2">
                    Suivez-nous sur Facebook
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-lg shadow-black/5 border border-border">
              <h3 className="text-2xl font-display font-bold text-secondary mb-6">Envoyez-nous un message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom complet</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre nom" className="bg-card" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="votre@email.com" type="email" className="bg-card" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Téléphone (Optionnel)</FormLabel>
                        <FormControl>
                          <Input placeholder="+229 XX XX XX XX" className="bg-card" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message ou détails de réservation</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Date, heure, nombre de personnes..." 
                            className="min-h-[120px] resize-none bg-card" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full h-12 mt-2" disabled={isSubmitting}>
                    {isSubmitting ? "Envoi en cours..." : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>

          {/* Right Column: Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg shadow-black/5 border border-border"
          >
            <iframe 
              src="https://maps.google.com/maps?q=Cotonou,+Bénin&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte Restaurant Le Teranga"
              className="grayscale-[30%] contrast-[110%] sepia-[80%] hue-rotate-[15deg] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
