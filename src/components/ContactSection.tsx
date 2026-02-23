import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1475496253667414111/Mz68kjaVunAZIEh6zjQJzH2GoQNyGjgXoWrNNvkkA440ZDVWEZ1lpjik1WvkEYBUEgKO";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Bitte geben Sie Ihren Namen ein.").max(100),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail ein.").max(255),
  company: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1, "Bitte geben Sie eine Nachricht ein.").max(2000),
});

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    const messageContent = `
@everyone 📩 **Neue Kontaktanfrage**

**Name:** ${form.name}
**E-Mail:** ${form.email}
**Unternehmen:** ${form.company || "-"}
**Nachricht:**
${form.message}
    `;

    try {
      await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: messageContent,
        }),
      });

      toast({
        title: "Nachricht gesendet!",
        description: "Vielen Dank! Wir melden uns in Kürze bei Ihnen.",
      });

      setForm({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Nachricht konnte nicht gesendet werden.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="kontakt" className="py-24 bg-hero">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
              Kontakt
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-hero-foreground mb-6">
              Bereit für Ihren KI-Agenten?
            </h2>
            <p className="text-hero-muted text-lg mb-10 leading-relaxed">
              Kontaktieren Sie uns für eine kostenlose Erstberatung. Wir zeigen Ihnen, wie ein KI-Agent Ihr Unternehmen unterstützen kann.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-hero-muted">E-Mail</p>
                  <p className="text-hero-foreground font-medium">
                    contakt@oneagent-ai.de
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div>
                <Input
                  placeholder="Ihr Name *"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="bg-white/5 border-white/10 text-hero-foreground placeholder:text-hero-muted/60"
                />
                {errors.name && (
                  <p className="text-xs text-destructive mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Input
                  placeholder="E-Mail Adresse *"
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="bg-white/5 border-white/10 text-hero-foreground placeholder:text-hero-muted/60"
                />
                {errors.email && (
                  <p className="text-xs text-destructive mt-1">{errors.email}</p>
                )}
              </div>

              <Input
                placeholder="Unternehmen (optional)"
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
                className="bg-white/5 border-white/10 text-hero-foreground placeholder:text-hero-muted/60"
              />

              <div>
                <Textarea
                  placeholder="Ihre Nachricht *"
                  rows={4}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="bg-white/5 border-white/10 text-hero-foreground placeholder:text-hero-muted/60 resize-none"
                />
                {errors.message && (
                  <p className="text-xs text-destructive mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12"
              >
                <Send className="mr-2 h-4 w-4" />
                Nachricht senden
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
