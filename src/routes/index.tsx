import { createFileRoute } from "@tanstack/react-router";
import heroGym from "@/assets/hero-gym.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Fighter's Mindset | Mental Conditioning for Champions" },
      {
        name: "description",
        content:
          "Train your mind like a championship fighter. A 12-round video-guided mental training system engineered to destroy self-sabotage, build ironclad discipline, and forge unbreakable focus.",
      },
      { property: "og:title", content: "The Fighter's Mindset | Mental Conditioning for Champions" },
      {
        property: "og:description",
        content:
          "A 12-round mental training system engineered to destroy self-sabotage, build ironclad discipline, and forge unbreakable focus.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const rounds = [
  {
    num: "01",
    title: "Stepping Into the Ring",
    focus: "Overcoming hesitation & committing to your fight",
    resource: "The Fighter's Code Guide",
  },
  {
    num: "02",
    title: "Shadowbox Your Excuses",
    focus: "Identifying and dismantling limiting beliefs",
    resource: "30-Day Notion/PDF Challenge",
  },
  {
    num: "03",
    title: "Fight the 12 Rounds of Life",
    focus: "Pacing, recovery, and long-term endurance",
    resource: "Boxing Scorecard Goal Mapper",
  },
  {
    num: "04",
    title: "Punch Through Fear",
    focus: "Emotional control under extreme pressure",
    resource: "“Fear Drill” Audio Track",
  },
  {
    num: "05",
    title: "The Boxer's Code",
    focus: "Building rituals when motivation dies",
    resource: "The 10 Rules eBook & Tracker",
  },
  {
    num: "06",
    title: "The Underdog System",
    focus: "Turning doubt and criticism into fuel",
    resource: "“When No One's Watching” Journal",
  },
  {
    num: "07",
    title: "Think Like a Champion",
    focus: "Body-mind connection & physical anchors",
    resource: "4-Week Movement & Focus Tracker",
  },
  {
    num: "08",
    title: "Corner Talk",
    focus: "Mastering self-talk & killing the inner critic",
    resource: "Guided Self-Talk Script Journal",
  },
  {
    num: "09",
    title: "Ring Ready",
    focus: "Pre-performance rituals for high-stakes moments",
    resource: "Ring Ready Blueprint Worksheet",
  },
  {
    num: "10",
    title: "Train, Don't Complain",
    focus: "Radical accountability and law of effort",
    resource: "Hard-Hitting Stories & Field Guide",
  },
  {
    num: "11",
    title: "Mental Conditioning",
    focus: "Daily focus drills, micro-goals & visualization",
    resource: "5-Part Audio Series & Daily Log",
  },
  {
    num: "12",
    title: "Becoming the Fighter",
    focus: "Integration, identity shift & self-mastery",
    resource: "Official Completion Certificate",
  },
];

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0">
          <img
            src={heroGym}
            alt="Dimly lit boxing gym with a single spotlight illuminating worn gloves and rising steam"
            className="h-full w-full object-cover opacity-70"
            width={1920}
            height={1088}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-canvas/60 via-canvas/40 to-canvas" />
          <div className="absolute inset-0 vignette" />
          <div className="absolute inset-0 spotlight-gradient" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="section-kicker mb-6">The 12-Round Mental Conditioning System</p>
          <h1 className="text-6xl font-bold uppercase leading-[0.9] tracking-tight text-foreground text-glow sm:text-7xl md:text-8xl lg:text-9xl">
            Your Excuses Don't Bleed.
            <br />
            <span className="text-primary">Stop Letting Them Win.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-foreground/80 sm:text-xl">
            Train your mind like a championship fighter. A 12-round, video-guided mental training system
            engineered to destroy self-sabotage, build ironclad discipline, and forge unbreakable focus.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <a href="#enroll" className="btn-fighter text-base sm:text-lg">
              Step Into The Ring — Enroll Now
            </a>
            <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Instant Access • 12 Video Modules • eBooks, Worksheets & Audio Drills Included
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center">
          <div className="h-16 w-px bg-gradient-to-b from-transparent via-primary/50 to-primary" />
        </div>
      </section>

      {/* Hard Truth */}
      <section className="relative px-4 py-24 sm:py-32">
        <div className="absolute inset-0 spotlight-gradient opacity-50" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="text-center">
            <p className="section-kicker mb-5">The Hard Truth</p>
            <h2 className="section-title text-balance">
              Motivation Is A Lie.
              <br />
              <span className="text-primary">Discipline Is A System.</span>
            </h2>
          </div>

          <div className="mt-12 border-l-2 border-primary/40 bg-card/40 p-8 backdrop-blur-sm sm:p-12">
            <div className="quote-mark -mb-4">“</div>
            <p className="text-2xl font-bold leading-snug text-foreground sm:text-3xl">
              Champions don't feel like showing up either. They just do it.
            </p>
          </div>

          <div className="mt-12 space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              You don't have a talent problem. You don't have a time problem. You have a{" "}
              <strong className="text-foreground">mental conditioning problem</strong>.
            </p>
            <p>
              Every day, you step into the ring against invisible opponents: procrastination, self-doubt,
              burn-out, and the quiet voice telling you to “start tomorrow.”
            </p>
            <p>
              <strong className="text-foreground">The Fighter's Mindset</strong> isn't motivational hype. It
              isn't inspirational quotes over sunrise photos. It is a direct, immersive mental training program
              designed in the corner of the gym—built to help you think, operate, and follow through with the
              relentless clarity of a fighter.
            </p>
          </div>
        </div>
      </section>

      {/* Program Curriculum */}
      <section id="program" className="relative px-4 py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center">
            <p className="section-kicker mb-5">What's Inside The Program</p>
            <h2 className="section-title text-balance">
              The 12-Round
              <br />
              <span className="text-primary">Mental Conditioning System</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-foreground/70">
              Each round delivers a direct, high-impact video lesson paired with actionable eBooks, real-world
              mindset strategies, and practical tools to build your daily rituals.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {rounds.map((round) => (
              <div
                key={round.num}
                className="group bg-card p-6 transition-colors duration-300 hover:bg-card/80 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-4xl font-bold leading-none text-primary/60 group-hover:text-primary/80">
                    {round.num}
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold tracking-wider text-secondary-foreground uppercase">
                    {round.resource}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground">{round.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{round.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative px-4 py-24 sm:py-32">
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="text-center">
            <p className="section-kicker mb-5">How It Works</p>
            <h2 className="section-title text-balance">
              Inside The Corner:
              <br />
              <span className="text-primary">Your Triad Of Training</span>
            </h2>
          </div>

          <div className="mt-16 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <div className="corner-cut bg-card/60 p-6 text-center backdrop-blur-sm sm:p-8">
              <h3 className="text-xl font-bold tracking-wide text-primary uppercase">AI-Driven Cinematic Videos</h3>
            </div>
            <div className="hidden text-primary/40 sm:block">▼</div>
            <div className="block text-primary/40 sm:hidden">▼</div>
            <div className="corner-cut bg-card/60 p-6 text-center backdrop-blur-sm sm:p-8">
              <h3 className="text-xl font-bold tracking-wide text-primary uppercase">Dedicated eBooks & Guides</h3>
            </div>
            <div className="hidden text-primary/40 sm:block">▼</div>
            <div className="block text-primary/40 sm:hidden">▼</div>
            <div className="corner-cut bg-card/60 p-6 text-center backdrop-blur-sm sm:p-8">
              <h3 className="text-xl font-bold tracking-wide text-primary uppercase">Audio Drills & Workbook Systems</h3>
            </div>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="rounded-xl border border-border/50 bg-card/40 p-6">
              <h4 className="text-lg font-bold text-foreground">Cinematic AI Video Lessons</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                No fluff. Direct, intense, and atmospheric lessons that feel like a head coach talking you through
                your biggest personal battles.
              </p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/40 p-6">
              <h4 className="text-lg font-bold text-foreground">Comprehensive eBooks</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Deep-dive manuals for every round that explain why fighter psychology works and how to apply it
                directly to your career, health, and mindset.
              </p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/40 p-6">
              <h4 className="text-lg font-bold text-foreground">Practical Systems</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Audio drills, goal scorecards, and reflection templates designed to convert mental concepts into
                daily physical habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Mentality */}
      <section className="relative px-4 py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="corner-cut border border-primary/30 bg-card/50 p-8 backdrop-blur-sm sm:p-12">
            <p className="section-kicker mb-6 text-center">The Opponent Was Never Out There</p>
            <div className="quote-mark text-center">“</div>
            <blockquote className="text-center text-2xl font-bold leading-snug text-foreground sm:text-3xl">
              The real fight doesn't happen under the bright lights in front of thousands of people. It happens in
              the quiet, empty gym at 5:00 AM when no one is watching. This program gives you the exact blueprint
              to win that fight.
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-primary/40" />
              <span className="text-sm font-bold tracking-widest text-primary uppercase">The Fighter's Mindset</span>
              <div className="h-px w-12 bg-primary/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section id="enroll" className="relative overflow-hidden px-4 py-24 sm:py-32">
        <div className="absolute inset-0">
          <img
            src={heroGym}
            alt=""
            className="h-full w-full object-cover opacity-30"
            loading="lazy"
            width={1920}
            height={1088}
          />
          <div className="absolute inset-0 bg-canvas/80" />
          <div className="absolute inset-0 vignette" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="section-kicker mb-5">No More Excuses. No More Delays.</p>
          <h2 className="section-title text-balance">
            The Bell Has Rung.
            <br />
            <span className="text-primary">Claim Your Corner.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-foreground/80">
            You can keep letting your excuses dictate your life, or you can step into the ring and forge a mind that
            refuses to break.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <a href="#" className="btn-fighter text-base sm:text-lg">
              Claim Your Corner — Start Round 1 Now
            </a>
            <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
              Instant digital access upon purchase. Lifetime access to all video, audio, and written materials.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-canvas px-4 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold tracking-tight text-foreground">The Fighter's Mindset</h3>
            <p className="mt-1 text-sm text-muted-foreground">Mental conditioning for the fight that matters most.</p>
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} The Fighter's Mindset. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
