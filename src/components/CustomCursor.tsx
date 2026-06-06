import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let rx = 0, ry = 0, dx = 0, dy = 0;
    const onMove = (e: MouseEvent) => {
      dx = e.clientX; dy = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${dx - 4}px, ${dy - 4}px)`;
      }
    };
    const tick = () => {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      raf = requestAnimationFrame(tick);
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor='hover']"));
    };
    let raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-gold"
        style={{ boxShadow: "0 0 12px var(--gold), 0 0 24px var(--gold)" }}
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 rounded-full border transition-[width,height,border-color,opacity] duration-200"
        style={{
          borderColor: hover ? "var(--teal)" : "color-mix(in oklab, var(--gold) 50%, transparent)",
          opacity: hover ? 1 : 0.7,
        }}
      />
    </>
  );
}
