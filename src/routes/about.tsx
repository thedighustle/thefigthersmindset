import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import shadowboxer from "@/assets/shadowboxer.jpg";
import ringCorner from "@/assets/ring-corner.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The Corner | Philosophy Behind The Fighter's Mindset" },
      {
        name: "description",
        content:
          "The philosophy behind The Fighter's Mindset: why boxing psychology transfers to work, health, and self-discipline — and who this training is built for.",
      },
      { property: "og:title", content: "The Corner | Philosophy Behind The Fighter's Mindset" },
      {
        property: "og:description",
        content:
          "Why fighter psychology transfers to everyday life, and who this mental conditioning system is built for.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const principles = [
  {
    t: "The opponent is internal",
    d: "Nobody is beating you. You are conceding rounds to comfort, and calling it circumstance.",
  },
  {
    t: "Effort is the only currency",
    d: "You cannot buy conditioning. Every round of mental capacity is earned in reps nobody applauds.",
  },
  {
    t: "Rituals beat feelings",
    d: "Fighters don't audit their mood before training. They walk in and the ritual takes over.",
  },
  {
    t: "Pain is information",
    d: "Discomfort tells you where you're weak. Most people run from the exact data they need.",
  },
];

const forYou = [
  "You start strong and quit at week three",
  "You need pressure performance: pitches, exams, competition",
  "You're rebuilding after a setback that broke your rhythm",
  "You're disciplined at work and undisciplined with yourself",
];

const notForYou = [
  "You want quotes to screenshot, not drills to run",
  "You want results without a daily commitment",
  "You're looking for therapy or clinical treatment",
];

function AboutPage() {
  useScrollReveal();

  return (
    <main>
      <section className="relative overflow-hidden border-b border-border/60 px-4 py-24 sm:px-6 sm:py-28">
        <div className="absolute inset-0">
          <img src={shadowboxer} alt="" className="h-full w-full object-cover opacity-25" width={1024} height={768} />
          <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/85 to-canvas/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="section-kicker mb-5">The Corner</p>
          <h1 className="display-title text-balance">
            Built in the gym.
            <br />
            <span className="text-primary">Not in a lecture hall.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/75">
            The Fighter&apos;s Mindset takes the mental protocols boxers use to survive twelve rounds and
            translates them into a training system for ordinary, brutal weeks.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <p className="section-kicker mb-5">Why Boxing</p>
            <h2 className="section-title text-balance">
              A sport with <span className="text-primary">no hiding place.</span>
            </h2>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-foreground/75">
              <p>
                In most arenas you can coast, delegate, or blame the team. In a ring, your conditioning is
                public within ninety seconds. That honesty is exactly what makes boxing the cleanest model
                for self-discipline.
              </p>
              <p>
                Fighters don&apos;t train to feel inspired. They train to be reliable when everything hurts —
                and reliability under pressure is the only skill that compounds.
              </p>
              <p>
                Every round of this program borrows a specific protocol from that world: corner talk becomes
                self-talk, pacing becomes energy management, scorecards become goal maps.
              </p>
            </div>
          </div>
          <div className="reveal group overflow-hidden border border-border/60">
            <img
              src={ringCorner}
              alt="Empty boxing ring corner with white ropes, stool, and towel under a single spotlight"
              className="img-zoom aspect-[4/3] w-full object-cover group-hover:img-zoom-hover"
              loading="lazy"
              width={1024}
              height={768}
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/25 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker mb-5">Four Principles</p>
          <h2 className="section-title text-balance mb-12">The rules of the corner.</h2>
          <div className="grid gap-px bg-border/40 sm:grid-cols-2">
            {principles.map((p, i) => (
              <div key={p.t} className="reveal bg-canvas p-7">
                <span className="text-xl text-accent">0{i + 1}</span>
                <h3 className="mt-3 text-2xl tracking-wide text-foreground uppercase">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="reveal border border-primary/50 p-7">
            <h2 className="text-2xl tracking-wide text-primary uppercase">This is for you if</h2>
            <ul className="mt-5 space-y-3">
              {forYou.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal border border-border/60 p-7">
            <h2 className="text-2xl tracking-wide text-muted-foreground uppercase">It&apos;s not for you if</h2>
            <ul className="mt-5 space-y-3">
              {notForYou.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-muted-foreground" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 text-center">
          <Link to="/enroll" className="btn-fighter">Claim Your Corner</Link>
        </div>
      </section>
    </main>
  );
}
