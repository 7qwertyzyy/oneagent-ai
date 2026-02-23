import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Maria Schneider",
    role: "Inhaberin, Zahnarztpraxis München",
    text: "Seit wir OneAgent nutzen, verpassen wir keinen Anruf mehr. Die automatische Terminbuchung hat unseren Empfang enorm entlastet.",
  },
  {
    name: "Thomas Weber",
    role: "Geschäftsführer, Weber Immobilien",
    text: "Unsere Interessenten erhalten sofort Antworten auf Objektanfragen – auch am Wochenende. Das hat unsere Abschlussquote merklich gesteigert.",
  },
  {
    name: "Lisa Hartmann",
    role: "Restaurantleiterin, Goldener Hirsch",
    text: "Die KI nimmt Reservierungen entgegen und beantwortet Fragen zur Speisekarte. Unsere Gäste sind begeistert von der schnellen Reaktion.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Kundenstimmen</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Das sagen unsere Kunden
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-card-foreground leading-relaxed mb-6 text-sm">"{t.text}"</p>
              <div>
                <p className="font-semibold text-card-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
