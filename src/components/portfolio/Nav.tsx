const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#certs", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-display text-xl italic text-gold">
          S<span className="text-teal">.</span>V
        </a>
        <ul className="flex gap-7 font-mono text-[11px] uppercase tracking-[0.3em]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-muted-foreground transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
