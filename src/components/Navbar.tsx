import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "So funktioniert es", href: "#prozess" },
  { label: "Branchen", href: "#branchen" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero/90 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#" className="text-xl font-bold text-hero-foreground tracking-tight">
          One<span className="text-gradient-accent">Agent</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-hero-muted hover:text-hero-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button asChild variant="default" size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 glow-accent">
            <a href="#kontakt">Demo buchen</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-hero-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-hero border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-hero-muted hover:text-hero-foreground transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                <a href="#kontakt" onClick={() => setMobileOpen(false)}>Demo buchen</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
