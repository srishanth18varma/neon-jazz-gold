export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
      {/* diagonal accent */}
      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-[1px] w-[60%] rotate-[-8deg] bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-1/4 h-[1px] w-[55%] rotate-[6deg] bg-gradient-to-r from-transparent via-teal/30 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--gold), transparent 60%)" }}
        aria-hidden
      />

      <div className="stagger relative z-10 max-w-4xl text-center">
        <div className="font-mono text-xs uppercase tracking-[0.5em] text-gold/80">
          ~/portfolio — est. 2026
        </div>
        <h1 className="mt-8 text-6xl leading-[0.95] tracking-tight md:text-8xl">
          Srishanth
          <br />
          <span className="italic text-gold">Varma</span>
        </h1>
        <p className="mx-auto mt-8 max-w-xl font-mono text-sm text-muted-foreground md:text-base">
          <span className="text-teal">&gt;</span> Student. Builder. Curious mind.
        </p>
        <p className="mx-auto mt-3 max-w-lg text-base text-muted-foreground/80">
          Computer Science at <span className="text-gold">Scaler School of Technology</span>.
        </p>
        <div>
          <a
            href="#projects"
            className="group relative mt-12 inline-flex items-center gap-3 border border-gold/60 bg-transparent px-8 py-4 font-mono text-xs uppercase tracking-[0.3em] text-gold transition-all duration-300 hover:bg-gold hover:text-background hover:glow-gold"
          >
            See My Work
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground/60 animate-shimmer">
        scroll ↓
      </div>
    </section>
  );
}
