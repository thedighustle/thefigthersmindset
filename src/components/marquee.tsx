export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-secondary/40 py-3">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-xs font-bold tracking-[0.3em] text-foreground/60 uppercase"
          >
            {item}
            <span className="h-1.5 w-1.5 rotate-45 bg-primary" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
