import { SectionHeading } from "@/components/SectionHeading";

const stack = ["Python", "SQL", "DSA", "AI Tools", "Claude Code", "Git"];

export function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Chapter I" title="About" />
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a computer science student at{" "}
              <span className="text-gold">Scaler School of Technology</span>,
              fascinated by the space where rigorous engineering meets a little
              bit of mischief.
            </p>
            <p>
              I like building things that are small, sharp and a little
              opinionated — terminals that feel friendly, scripts that quietly
              do the boring work, AI tools that I actually trust.
            </p>
            <p>
              Off-screen: jazz records, late-night reading, and a permanent
              shortlist of side projects.
            </p>
          </div>

          <aside className="relative border-l border-gold/40 pl-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
              // tech_stack
            </div>
            <ul className="mt-4 space-y-2 font-mono text-sm">
              {stack.map((s, i) => (
                <li key={s} className="flex items-center gap-3 text-foreground/90">
                  <span className="text-gold/60">{String(i + 1).padStart(2, "0")}</span>
                  <span className="transition-colors hover:text-teal">{s}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
