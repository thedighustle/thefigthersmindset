import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/tfm-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-canvas">
      <div className="h-1 w-full rope-divider opacity-70" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <h2 className="sr-only">The Fighter&apos;s Mindset</h2>
          <img
            src="/tfm-logo.png"
            alt="The Fighter's Mindset logo"
            className="h-10 w-auto"
          />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Mental conditioning for the fight that matters most — the one nobody watches.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-[0.28em] text-primary uppercase">Navigate</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="text-foreground/70 transition-colors hover:text-foreground">Home</Link></li>
            <li><Link to="/program" className="text-foreground/70 transition-colors hover:text-foreground">The 12 Rounds</Link></li>
            <li><Link to="/about" className="text-foreground/70 transition-colors hover:text-foreground">The Corner</Link></li>
            <li><Link to="/faq" className="text-foreground/70 transition-colors hover:text-foreground">FAQ</Link></li>
            <li><Link to="/enroll" className="text-foreground/70 transition-colors hover:text-foreground">Enroll</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-[0.28em] text-primary uppercase">Step In</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Twelve rounds. Video, audio, and written drills. Lifetime access.
          </p>
          <Link to="/enroll" className="btn-fighter mt-5 text-xs">
            Claim Your Corner
          </Link>
        </div>
      </div>
      <div className="border-t border-border/50 px-4 py-6 sm:px-6">
        <p className="mx-auto max-w-7xl text-xs text-muted-foreground">
          © {new Date().getFullYear()} The Fighter&apos;s Mindset. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
