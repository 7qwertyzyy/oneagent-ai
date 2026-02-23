const Footer = () => {
  return (
    <footer className="bg-hero border-t border-white/5 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#" className="text-xl font-bold text-hero-foreground tracking-tight">
              One<span className="text-gradient-accent">Agent</span>
            </a>
            <p className="text-sm text-hero-muted mt-1">KI-Agenten für Ihr Unternehmen.</p>
          </div>
          <div className="flex items-center gap-6">
            {[
              { label: "Leistungen", href: "#leistungen" },
              { label: "Prozess", href: "#prozess" },
              { label: "Branchen", href: "#branchen" },
              { label: "Kontakt", href: "#kontakt" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-hero-muted hover:text-hero-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-hero-muted">
            © {new Date().getFullYear()} OneAgent. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
