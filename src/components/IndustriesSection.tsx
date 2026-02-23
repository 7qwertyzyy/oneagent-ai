import { motion } from "framer-motion";
import { UtensilsCrossed, Stethoscope, Scale, Building2, Hotel, Briefcase } from "lucide-react";

const industries = [
  { icon: UtensilsCrossed, name: "Restaurants", desc: "Reservierungen, Bestellungen und Anfragen automatisiert bearbeiten." },
  { icon: Stethoscope, name: "Arztpraxen", desc: "Terminbuchung, Rezeptanfragen und Patienteninformation rund um die Uhr." },
  { icon: Scale, name: "Kanzleien", desc: "Mandantenanfragen entgegennehmen und Erstberatungstermine planen." },
  { icon: Building2, name: "Immobilien", desc: "Objektanfragen beantworten und Besichtigungstermine koordinieren." },
  { icon: Hotel, name: "Hotels", desc: "Buchungen, Check-in-Infos und Gästeanfragen automatisiert abwickeln." },
  { icon: Briefcase, name: "Dienstleister", desc: "Kundenanfragen bearbeiten und Aufträge entgegennehmen – ohne Wartezeit." },
];

const IndustriesSection = () => {
  return (
    <section id="branchen" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Branchen</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Für jede Branche die richtige Lösung
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Unsere KI-Agenten sind vielseitig einsetzbar – wir passen sie individuell an Ihre Branche an.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-accent/30 transition-all"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-accent/10 flex items-center justify-center">
                <ind.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground mb-1">{ind.name}</h3>
                <p className="text-sm text-muted-foreground">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
