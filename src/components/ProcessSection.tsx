import { motion } from "framer-motion";
import { Search, Wrench, Link, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Beratung & Analyse",
    description: "Wir analysieren Ihre Anforderungen und identifizieren die besten Einsatzmöglichkeiten für KI-Agenten.",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Einrichtung & Anpassung",
    description: "Wir konfigurieren Ihren KI-Agenten individuell – abgestimmt auf Ihre Branche, Sprache und Prozesse.",
  },
  {
    icon: Link,
    number: "03",
    title: "Integration in Ihr System",
    description: "Nahtlose Anbindung an Ihre bestehende Infrastruktur – Telefon, Website, CRM und Buchungstools.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Übergabe & Start",
    description: "Nach erfolgreicher Einrichtung übergeben wir Ihnen den fertigen KI-Agenten zur direkten Nutzung in Ihrem Unternehmen.",
  }
];

const ProcessSection = () => {
  return (
    <section id="prozess" className="py-24 bg-hero">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Prozess</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-hero-foreground">
            So funktioniert es
          </h2>
          <p className="mt-4 text-hero-muted max-w-2xl mx-auto text-lg">
            In vier einfachen Schritten zu Ihrem KI-Agenten.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative text-center"
            >
              <div className="text-6xl font-extrabold text-accent/10 mb-4">{step.number}</div>
              <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-hero-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-hero-muted leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
