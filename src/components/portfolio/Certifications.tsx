import { SectionHeading } from "@/components/SectionHeading";

const certs = [
  { name: "AI Fluency for Students", issuer: "Anthropic" },
  { name: "AI Fluency: Frameworks & Foundations", issuer: "Anthropic" },
  { name: "Claude 101", issuer: "Anthropic" },
  { name: "Claude Code in Action", issuer: "Anthropic" },
];

export function Certifications() {
  return (
    <section id="certs" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Chapter III" title="Certifications" />
        <div className="-mx-6 overflow-x-auto px-6">
          <div className="flex min-w-max gap-5 pb-4">
            {certs.map((c, i) => (
              <div
                key={c.name}
                className="group relative w-72 shrink-0 border border-gold/30 bg-card/40 p-6 transition-all duration-300 hover:border-gold hover:bg-card/80"
              >
                <div className="flex items-start justify-between">
                  <svg width="36" height="36" viewBox="0 0 36 36" className="text-gold">
                    <circle cx="18" cy="14" r="9" fill="none" stroke="currentColor" strokeWidth="1" />
                    <circle cx="18" cy="14" r="5" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M18 11L18.9 13.2L21.3 13.4L19.5 14.9L20.1 17.2L18 16L15.9 17.2L16.5 14.9L14.7 13.4L17.1 13.2Z" fill="currentColor" />
                    <path d="M13 22L15 32L18 29L21 32L23 22" fill="none" stroke="currentColor" strokeWidth="1" />
                  </svg>
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/60">
                    №0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg leading-snug text-foreground transition-colors group-hover:text-gold">
                  {c.name}
                </h3>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {c.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
