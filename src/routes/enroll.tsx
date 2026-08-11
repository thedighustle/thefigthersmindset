import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { WHOP_URL } from "@/lib/program";
import heroGym from "@/assets/hero-gym.jpg";

export const Route = createFileRoute("/enroll")({
  head: () => ({
    meta: [
      { title: "Enroll | Claim Your Corner — The Fighter's Mindset" },
      {
        name: "description",
        content:
          "Get instant, lifetime access to the 12-round mental conditioning system: 12 video lessons, eBooks, audio drills, and trackers.",
      },
      { property: "og:title", content: "Enroll | Claim Your Corner" },
      {
        property: "og:description",
        content:
          "Instant access to 12 video rounds, eBooks, audio drills, and trackers. Lifetime access.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EnrollPage,
});

const included = [
  "12 cinematic video lessons — one per round",
  "12 eBooks and field guides, one per round",
  "5-part audio drill series for daily conditioning",
  "Boxing scorecard goal mapper & 30-day challenge",
  "Self-talk scripts, journals, and focus trackers",
  "Official completion certificate after Round 12",
  "Lifetime access, including future updates",
];

function EnrollPage() {
  useScrollReveal();

  return (
    <main>
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-28">
        <div className="absolute inset-0">
          <img src={heroGym} alt="" className="h-full w-full object-cover opacity-30" width={1920} height={1088} />
          <div className="absolute inset-0 bg-canvas/80" />
          <div className="absolute inset-0 vignette" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="section-kicker mb-5">Enrollment</p>
          <h1 className="display-title text-balance">
            Claim your corner.
            <br />
            <span className="text-primary">Start round one.</span>
          </h1>

          <div className="mt-14 grid gap-8 lg:grid-cols-12">
            <div className="reveal border border-border/60 bg-canvas/70 p-7 backdrop-blur-sm lg:col-span-7">
              <h2 className="text-2xl tracking-wide text-foreground uppercase">What&apos;s included</h2>
              <ul className="mt-6 space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="reveal border border-primary/60 bg-canvas/80 p-7 backdrop-blur-sm lg:col-span-5">
              <p className="section-kicker">Instant Digital Access</p>
              <h2 className="mt-4 text-4xl leading-none text-foreground uppercase">
                The 12-Round <span className="text-primary">Program</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Checkout is handled securely by our payment partner. Current pricing and refund terms are
                shown on the checkout page.
              </p>

              <a
                href={WHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fighter mt-7 w-full text-base"
              >
                Claim Your Corner — Start Round 1 Now
              </a>

              <p className="mt-4 text-center text-[0.7rem] leading-relaxed text-muted-foreground">
                Opens the secure checkout in a new tab. Lifetime access to all video, audio, and written
                materials.
              </p>
            </aside>
          </div>

          <div className="reveal mt-14 border-t border-border/60 pt-8">
            <p className="text-sm text-muted-foreground">
              Want the detail first? Read the{" "}
              <Link to="/program" className="text-primary hover:underline">round-by-round curriculum</Link>{" "}
              or the{" "}
              <Link to="/faq" className="text-primary hover:underline">FAQ</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
