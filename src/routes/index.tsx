import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Marquee } from "@/components/marquee";
import { rounds } from "@/lib/program";
import heroGym from "@/assets/hero-gym.jpg";
import handsWrapped from "@/assets/hands-wrapped.jpg";
import shadowboxer from "@/assets/shadowboxer.jpg";
import punchingBag from "@/assets/punching-bag.jpg";
import ringCorner from "@/assets/ring-corner.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Fighter's Mindset | 12-Round Mental Conditioning" },
      {
        name: "description",
        content:
          "A 12-round, video-guided mental conditioning system that destroys self-sabotage, builds ironclad discipline, and forges unbreakable focus.",
      },
      { property: "og:title", content: "The Fighter's Mindset | 12-Round Mental Conditioning" },
      {
        property: "og:description",
        content:
          "Train your mind like a championship fighter. Twelve rounds of video, audio, and written drills.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "12", label: "Video Rounds" },
  { value: "12", label: "eBooks & Guides" },
  { value: "05", label: "Audio Drills" },
  { value: "/infinity.png", label: "Lifetime Access" },
];

function Index() {
  useScrollReveal();

  return (
    <main>
      {/* Hero — fight poster */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0">
          <img
            src={heroGym}
            alt="Dimly lit boxing gym with a single spotlight illuminating worn gloves and rising steam"
            className="h-full w-full object-cover opacity-45"
            width={1920}
            height={1088}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/80 to-canvas/30" />
          <div className="absolute inset-0 vignette" />
          <div className="absolute inset-0 poster-grain" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-end gap-10 py-24 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-primary" />
              <p className="section-kicker">Main Event — 12 Rounds</p>
            </div>
            <h1 className="display-title text-glow">
              Your excuses
              <br />
              <span className="text-outline">don&apos;t bleed.</span>
              <br />
              <span className="text-primary">Stop letting them win.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/75 sm:text-lg">
              A video-guided mental conditioning system built in the corner of the gym — engineered to
              destroy self-sabotage, install discipline that survives bad days, and forge focus that
              doesn&apos;t flinch.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/enroll" className="btn-fighter text-base">
                Step Into The Ring
              </Link>
              <Link to="/program" className="btn-fighter-outline text-base">
                See The 12 Rounds
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px border border-border/60 bg-border/40 lg:col-span-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-canvas/80 p-5 backdrop-blur-sm">
                <p className="stat-num">{s.value}</p>
                <p className="mt-2 text-[0.65rem] font-bold tracking-[0.22em] text-muted-foreground uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee
        items={[
          "Discipline over motivation",
          "Train, don't complain",
          "The fight is won in private",
          "No fluff. No hype.",
        ]}
      />

      {/* Hard truth */}
      <section className="relative px-4 py-24 sm:px-6 sm:py-32">
        <div className="absolute inset-0 spotlight-gradient opacity-60" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="reveal relative">
            <div className="overflow-hidden border border-border/60">
              <img
                src={handsWrapped}
                alt="Close-up of a fighter wrapping their hands with black hand wraps in a dim gym"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
                width={1024}
                height={1280}
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden border border-primary/50 bg-canvas px-6 py-4 sm:block">
              <p className="text-4xl leading-none text-primary">05:00</p>
              <p className="mt-1 text-[0.6rem] font-bold tracking-[0.24em] text-muted-foreground uppercase">
                Nobody is watching
              </p>
            </div>
          </div>

          <div className="reveal">
            <p className="section-kicker mb-5">The Hard Truth</p>
            <h2 className="section-title text-balance">
              Motivation is a lie.
              <br />
              <span className="text-primary">Discipline is a system.</span>
            </h2>
            <div className="mt-8 border-l-2 border-primary bg-card/50 p-6">
              <p className="text-xl leading-snug font-semibold text-foreground sm:text-2xl">
                &ldquo;Champions don&apos;t feel like showing up either. They just do it.&rdquo;
              </p>
            </div>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-foreground/75">
              <p>
                You don&apos;t have a talent problem. You don&apos;t have a time problem. You have a{" "}
                <strong className="text-foreground">mental conditioning problem</strong>.
              </p>
              <p>
                Every day you step into the ring against invisible opponents: procrastination, self-doubt,
                burnout, and the quiet voice telling you to start tomorrow.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-primary uppercase hover:underline"
            >
              Meet the corner →
            </Link>
          </div>
        </div>
      </section>

      {/* Interlude quote */}
      <section className="relative h-[62vh] min-h-[420px] overflow-hidden">
        <img
          src={shadowboxer}
          alt="Silhouette of a fighter shadowboxing under a single spotlight in a dark gym"
          className="h-full w-full object-cover"
          loading="lazy"
          width={1024}
          height={768}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-canvas via-canvas/50 to-canvas" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <blockquote className="reveal max-w-4xl text-center text-3xl leading-[1.05] tracking-tight text-foreground uppercase text-glow sm:text-5xl">
            The fight is won or lost far away from witnesses — behind the lines, in the gym, and out on
            the road, long before I dance under those lights.
          </blockquote>
        </div>
      </section>

      {/* Curriculum preview */}
      <section className="relative px-4 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="reveal flex flex-col justify-between gap-6 border-b border-border/60 pb-8 md:flex-row md:items-end">
            <div>
              <p className="section-kicker mb-4">The Fight Card</p>
              <h2 className="section-title text-balance">
                Twelve rounds.
                <br />
                <span className="text-primary">One new mind.</span>
              </h2>
            </div>
            <Link to="/program" className="btn-fighter-outline self-start text-xs md:self-auto">
              Full Curriculum
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <div className="reveal group relative overflow-hidden border border-border/60 lg:col-span-5">
              <img
                src={punchingBag}
                alt="Worn leather punching bag hanging in a dark gym with dramatic lighting"
                className="img-zoom h-full min-h-[320px] w-full object-cover group-hover:img-zoom-hover"
                loading="lazy"
                width={1024}
                height={768}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-7">
                <p className="section-kicker mb-2">Round by Round</p>
                <p className="text-3xl leading-none text-foreground uppercase">
                  Modules that hit harder than motivation.
                </p>
              </div>
            </div>

            <ul className="reveal divide-y divide-border/60 border border-border/60 lg:col-span-7">
              {rounds.slice(0, 6).map((round) => (
                <li
                  key={round.num}
                  className="group flex items-center gap-5 px-5 py-4 transition-colors hover:bg-card/70"
                >
                  <span className="text-2xl leading-none text-primary/70 group-hover:text-primary">
                    {round.num}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg leading-tight tracking-wide text-foreground uppercase">
                      {round.title}
                    </h3>
                    <p className="truncate text-sm text-muted-foreground">{round.focus}</p>
                  </div>
                </li>
              ))}
              <li className="px-5 py-4">
                <Link
                  to="/program"
                  className="text-xs font-bold tracking-[0.22em] text-primary uppercase hover:underline"
                >
                  + 6 more rounds →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Triad */}
      <section className="relative border-y border-border/60 bg-secondary/25 px-4 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <p className="section-kicker mb-5">How It Works</p>
            <h2 className="section-title text-balance">
              Your triad
              <br />
              <span className="text-primary">of training.</span>
            </h2>
            <div className="mt-10 space-y-px bg-border/40">
              {[
                {
                  t: "Cinematic Video Lessons",
                  d: "Direct, intense, atmospheric. It feels like a head coach walking you through your biggest personal battles.",
                },
                {
                  t: "Deep-Dive eBooks",
                  d: "A manual per round explaining why fighter psychology works and how to apply it to your career, health, and mind.",
                },
                {
                  t: "Audio Drills & Systems",
                  d: "Scorecards, trackers, and reflection templates that turn concepts into daily physical habits.",
                },
              ].map((item, i) => (
                <div key={item.t} className="bg-canvas p-6">
                  <div className="flex items-baseline gap-4">
                    <span className="text-xl text-accent">0{i + 1}</span>
                    <h3 className="text-xl tracking-wide text-foreground uppercase">{item.t}</h3>
                  </div>
                  <p className="mt-3 pl-9 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal group overflow-hidden border border-border/60">
            <img
              src={ringCorner}
              alt="Empty boxing ring corner with white ropes, stool, and towel under a single spotlight"
              className="img-zoom aspect-[4/5] w-full object-cover group-hover:img-zoom-hover"
              loading="lazy"
              width={1024}
              height={1280}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-4 py-28 sm:px-6 sm:py-36">
        <div className="absolute inset-0">
          <img
            src={heroGym}
            alt=""
            className="h-full w-full object-cover opacity-25"
            loading="lazy"
            width={1920}
            height={1088}
          />
          <div className="absolute inset-0 bg-canvas/80" />
          <div className="absolute inset-0 vignette" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="section-kicker mb-5">No more delays</p>
          <h2 className="display-title text-balance">
            The bell has rung.
            <br />
            <span className="text-primary">Claim your corner.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-foreground/75">
            Keep letting your excuses dictate your life, or step into the ring and forge a mind that
            refuses to break.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/enroll" className="btn-fighter text-base">
              Enroll — Start Round 1
            </Link>
            <Link to="/faq" className="btn-fighter-outline text-base">
              Read The FAQ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
