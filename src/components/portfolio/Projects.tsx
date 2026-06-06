import { SectionHeading } from "@/components/SectionHeading";

const projects = [
  {
    name: "Ledger.py",
    desc: "A tiny double-entry accounting CLI written in Python — designed for personal finance nerds who think in transactions.",
    tags: ["Python", "CLI", "SQLite"],
  },
  {
    name: "DSA Atlas",
    desc: "An evolving notebook of data structures and algorithms — solved, annotated, and visualised with a focus on intuition over rote.",
    tags: ["DSA", "Notes", "Viz"],
  },
  {
    name: "Claude Companion",
    desc: "An exploration of agentic workflows with Claude Code — pairing prompt design with small, composable shell utilities.",
    tags: ["AI", "Claude", "Bash"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Chapter II" title="Selected Work" />
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className="tilt-card group relative flex flex-col border border-border bg-card/60 p-7 backdrop-blur"
            >
              <div className="mb-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-gold/60">
                <span>0{i + 1}</span>
                <span className="transition-colors group-hover:text-teal">project</span>
              </div>
              <h3 className="text-2xl text-foreground">{p.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-gold/30 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-gold/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
