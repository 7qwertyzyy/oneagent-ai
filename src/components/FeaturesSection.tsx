import { motion } from "framer-motion";
import { Phone, MessageSquare, CalendarCheck, Clock, Globe, Settings, Plug, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "KI Voice Agents",
    description: "Intelligente Telefonassistenten, die Anrufe professionell entgegennehmen und bearbeiten.",
  },
  {
    icon: MessageSquare,
    title: "KI Chat Agents",
    description: "Automatisierte Chat-Agenten für Ihre Website und WhatsApp – sofortige Antworten für Ihre Kunden.",
  },
  {
    icon: CalendarCheck,
    title: "Automatische Terminbuchung",
    description: "Ihre Kunden buchen Termine direkt über den KI-Agenten – ohne Wartezeiten.",
  },
  {
    icon: Clock,
    title: "24/7 Kundenservice",
    description: "Rund um die Uhr erreichbar – auch außerhalb der Geschäftszeiten.",
  },
  {
    icon: Globe,
    title: "Mehrsprachige Unterstützung",
    description: "Ihre KI-Agenten sprechen die Sprache Ihrer Kunden – in über 10 Sprachen.",
  },
  {
    icon: Settings,
    title: "Individuelle Anpassung",
    description: "Jeder Agent wird speziell auf Ihr Unternehmen und Ihre Anforderungen konfiguriert.",
  },
  {
    icon: Plug,
    title: "Systemintegration",
    description: "Nahtlose Integration in Ihre bestehenden Tools, CRM- und Buchungssysteme.",
  },
  {
    icon: ShieldCheck,
    title: "Datenschutz & Sicherheit",
    description: "Ihre KI-Agenten werden datenschutzkonform eingerichtet und erfüllen moderne Sicherheitsstandards.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section id="leistungen" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Leistungen</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Was unsere KI-Agenten können
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Modernste KI-Technologie, maßgeschneidert für Ihr Unternehmen.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group relative p-6 rounded-xl border border-border bg-card hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
