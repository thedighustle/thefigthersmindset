import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { rounds } from "@/lib/program";
import punchingBag from "@/assets/punching-bag.jpg";

export const Route = createFileRoute("/program")({
  head: () => ({
    meta: [
      { title: "The 12 Rounds | Full Curriculum — The Fighter's Mindset" },
      {
        name: "description",
        content:
          "Round-by-round breakdown of the 12-round mental conditioning system: video lessons, eBooks, audio drills, trackers, and the outcome of each round.",
      },
      { property: "og:title", content: "The 12 Rounds | Full Curriculum" },
      {
        property: "og:description",
        content:
          "Every round of the mental conditioning system, with the focus, the resource, and what changes when you finish it.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProgramPage,
});

function ProgramPage() {
  useScrollReveal();

  return (
    <main>
      <section className="relative overflow-hidden border-b border-border/60 px-4 py-24 sm:px-6 sm:py-28">
        <div className="absolute inset-0">
          <img
            src={punchingBag}
            alt=""
            className="h-full w-full object-cover opacity-25"
            width={1024}
            height={768}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/85 to-canvas/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="section-kicker mb-5">The Full Fight Card</p>
          <h1 className="display-title text-balance">
            Twelve rounds.
            <br />
            <span className="text-primary">No filler.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/75">
            Each round pairs a cinematic video lesson with a written manual and a practical tool. Run one
            round a week, or one a day if you can take the punishment.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl space-y-px bg-border/40">
          {rounds.map((round) => (
            <article key={round.num} className="reveal bg-canvas p-6 sm:p-8">
              <div className="grid gap-6 sm:grid-cols-[auto_1fr]">
                <div className="text-5xl leading-none text-primary/60 sm:text-6xl">{round.num}</div>
                <div>
                  <h2 className="text-2xl leading-tight tracking-wide text-foreground uppercase sm:text-3xl">
                    {round.title}
                  </h2>
                  <p className="mt-2 text-sm font-semibold text-accent">{round.focus}</p>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/75">
                    {round.detail}
                  </p>
                  <p className="mt-5 inline-block border border-border/70 px-3 py-1.5 text-[0.65rem] font-bold tracking-[0.2em] text-muted-foreground uppercase">
                    Includes: {round.resource}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/25 px-4 py-20 text-center sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="section-title text-balance">
            Ready to answer <span className="text-primary">the bell?</span>
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/enroll" className="btn-fighter">Enroll Now</Link>
            <Link to="/faq" className="btn-fighter-outline">Questions First</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
