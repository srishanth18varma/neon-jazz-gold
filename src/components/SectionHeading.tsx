export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-14 text-center">
      <div className="mb-4 font-mono text-xs uppercase tracking-[0.4em] text-gold/70">
        {eyebrow}
      </div>
      <h2 className="text-4xl md:text-5xl text-foreground">{title}</h2>
      <div className="mt-6 flex items-center justify-center gap-4">
        <span className="h-px w-24 bg-gradient-to-r from-transparent via-gold/60 to-gold/60" />
        <svg width="14" height="14" viewBox="0 0 14 14" className="text-gold">
          <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5Z" fill="currentColor" />
        </svg>
        <span className="h-px w-24 bg-gradient-to-l from-transparent via-gold/60 to-gold/60" />
      </div>
    </div>
  );
}
