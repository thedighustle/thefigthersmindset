import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/tfm-logo.png.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/program", label: "The 12 Rounds" },
  { to: "/about", label: "The Corner" },
  { to: "/faq", label: "FAQ" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="h-7 w-1.5 bg-primary" aria-hidden="true" />
          <img
            src="/tfm-logo.png"
            alt="The Fighter's Mindset logo"
            className="h-20 w-auto"
          />
          <span className="sr-only">The Fighter&apos;s Mindset</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-foreground/70 hover:text-foreground" }}
              className="text-xs font-bold tracking-[0.22em] uppercase transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link to="/enroll" className="btn-fighter px-6 py-3 text-xs">
            Enroll
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-foreground md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-canvas px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  className="block py-2 text-sm font-bold tracking-[0.22em] text-foreground/80 uppercase"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link to="/enroll" onClick={() => setOpen(false)} className="btn-fighter w-full">
                Enroll
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
