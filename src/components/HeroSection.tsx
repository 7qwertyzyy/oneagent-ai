import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-hero/60 to-hero" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8 pt-24 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            KI-Agenten für Ihr Unternehmen
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-hero-foreground leading-tight tracking-tight mb-6">
            OneAgent – Ihr digitaler{" "}
            <span className="text-gradient-accent">KI-Mitarbeiter</span>
          </h1>

          <p className="text-lg sm:text-xl text-hero-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Wir richten intelligente KI-Agenten für Ihr Unternehmen ein – für Telefon, Chat und Terminbuchung. 
            Automatisiert. Rund um die Uhr. Individuell angepasst.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 glow-accent text-base px-8 h-12">
              <a href="#kontakt">
                Demo buchen
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-accent text-white hover:bg-accent/90 text-base px-8 h-12"
            >
              <a href="#leistungen">
                <Play className="mr-2 h-4 w-4" />
                Mehr erfahren
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-3xl mx-auto"
        >
          {[
            { value: "5x", label: "Produktivität" },
            { value: "100%", label: "Automatisierung" },
            { value: "0", label: "Wartezeiten" },
            { value: "24/7", label: "Digitale Mitarbeiter" }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient-accent">{stat.value}</div>
              <div className="text-sm text-hero-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
