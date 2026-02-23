import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Was ist ein KI-Agent?",
    a: "Ein KI-Agent ist eine intelligente Software, die Aufgaben wie Telefonieren, Chatten oder Terminbuchung automatisch übernimmt – wie ein digitaler Mitarbeiter, der rund um die Uhr verfügbar ist.",
  },
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "Je nach Komplexität dauert die Einrichtung zwischen 3 und 10 Werktagen. Einfache Agenten können bereits innerhalb weniger Tage einsatzbereit sein.",
  },
  {
    q: "Kann der Agent in mein bestehendes System integriert werden?",
    a: "Ja, unsere KI-Agenten lassen sich nahtlos in Ihre bestehenden Tools, CRM-Systeme und Buchungsplattformen integrieren.",
  },
  {
    q: "In welchen Sprachen kann der Agent kommunizieren?",
    a: "Unsere Agenten unterstützen über 10 Sprachen, darunter Deutsch, Englisch, Französisch, Spanisch und weitere.",
  },
  {
    q: "Was kostet ein KI-Agent?",
    a: "Die Kosten variieren je nach Umfang und Anpassung. Kontaktieren Sie uns für ein individuelles Angebot – die Erstberatung ist kostenlos.",
  },
  {
    q: "Ist meine Daten sicher?",
    a: "Ja, wir setzen auf DSGVO-konforme Infrastruktur und verschlüsselte Kommunikation. Ihre Daten sind bei uns in sicheren Händen.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Häufig gestellte Fragen
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-6 bg-card data-[state=open]:border-accent/30"
              >
                <AccordionTrigger className="text-left text-card-foreground font-medium hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
