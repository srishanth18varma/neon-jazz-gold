import { SectionHeading } from "@/components/SectionHeading";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading eyebrow="Coda" title="Get In Touch" />
        <p className="mx-auto max-w-lg text-muted-foreground">
          Open to conversations about CS, AI tooling, side projects, or a great
          jazz record. The inbox is always on.
        </p>

        <a
          href="mailto:srishanth.varma@example.com"
          className="mt-10 inline-block font-display text-3xl italic text-gold underline decoration-gold/30 decoration-1 underline-offset-8 transition-all duration-300 hover:text-teal hover:decoration-teal md:text-4xl"
        >
          srishanth.varma@example.com
        </a>

        <div className="mt-12 flex items-center justify-center gap-4">
          {[
            { icon: Mail, href: "mailto:srishanth.varma@example.com", label: "Email" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Github, href: "https://github.com", label: "GitHub" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="group relative flex h-14 w-14 items-center justify-center border border-gold/40 text-gold transition-all duration-300 hover:border-magenta hover:text-magenta"
              style={{}}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <div className="mt-20 flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground/60">
          <span>© 2026</span>
          <span className="text-gold">◆</span>
          <span>Crafted with care</span>
        </div>
      </div>
    </section>
  );
}
