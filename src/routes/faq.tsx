import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Access, Format & Refunds — The Fighter's Mindset" },
      {
        name: "description",
        content:
          "Answers on how the 12-round program is delivered, how long it takes, whether you need boxing experience, access length, and refunds.",
      },
      { property: "og:title", content: "FAQ | The Fighter's Mindset" },
      {
        property: "og:description",
        content:
          "Format, time commitment, access, and refunds for the 12-round mental conditioning system.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  {
    q: "Do I need any boxing experience?",
    a: "None. There is no physical training required. Boxing is the framework, not the workout — every drill is mental, written, or audio-guided.",
  },
  {
    q: "How is the program delivered?",
    a: "Instant digital access after purchase. Twelve cinematic video lessons, a dedicated eBook or guide per round, audio drills, and printable trackers.",
  },
  {
    q: "How long does it take?",
    a: "Most people run one round per week, roughly 30-45 minutes of lesson time plus daily drills of 10-15 minutes. You can move faster; nothing is locked.",
  },
  {
    q: "How long do I keep access?",
    a: "Lifetime. Every video, audio track, and written resource stays available, including future updates to the material.",
  },
  {
    q: "Is this therapy or mental health treatment?",
    a: "No. This is performance and discipline training. It is not a substitute for clinical care — if you're dealing with a mental health condition, work with a qualified professional.",
  },
  {
    q: "What if it isn't for me?",
    a: "Refund terms are handled at checkout by our payment partner. Read the terms on the checkout page before purchasing so there are no surprises.",
  },
  {
    q: "Can I use this alongside another program?",
    a: "Yes. The rounds are designed to layer on top of existing training, study, or work routines rather than replace them.",
  },
];

function FaqPage() {
  useScrollReveal();

  return (
    <main>
      <section className="border-b border-border/60 px-4 py-24 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker mb-5">Before The Bell</p>
          <h1 className="display-title text-balance">
            Questions,
            <br />
            <span className="text-primary">answered straight.</span>
          </h1>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl space-y-px bg-border/40">
          {faqs.map((item, i) => (
            <div key={item.q} className="reveal bg-canvas p-6 sm:p-8">
              <div className="flex gap-5">
                <span className="text-2xl leading-none text-primary/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-xl tracking-wide text-foreground uppercase sm:text-2xl">{item.q}</h2>
                  <p className="mt-3 text-base leading-relaxed text-foreground/75">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-4xl border border-primary/50 p-8 text-center">
          <h2 className="text-3xl tracking-wide text-foreground uppercase">Still deciding?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Read the full round-by-round breakdown, then decide whether you&apos;re ready to answer the bell.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/program" className="btn-fighter-outline">See The 12 Rounds</Link>
            <Link to="/enroll" className="btn-fighter">Enroll Now</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
