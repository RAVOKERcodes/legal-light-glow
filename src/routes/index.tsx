import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Scale,
  Gavel,
  Users,
  Shield,
  Home as HomeIcon,
  BookOpen,
  Baby,
  FileText,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  Check,
} from "lucide-react";
import { BackToTop } from "@/components/BackToTop";
import { Disclaimer } from "@/components/Disclaimer";
import { SiteNav } from "@/components/SiteNav";
import { Reveal, Enter, CountUp, Marquee } from "@/components/motion";
import alkaImg from "@/assets/IMG_6487-removebg-preview.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chambers of Alka Nupur Singh — Advocate, Delhi NCR" },
      {
        name: "description",
        content:
          "Boutique law firm led by Advocate Alka Nupur Singh, specialising in divorce, family law, child custody and civil litigation across Delhi NCR and the Supreme Court of India.",
      },
      { property: "og:title", content: "Chambers of Alka Nupur Singh — Advocate, Delhi NCR" },
      {
        property: "og:description",
        content: "Divorce, family law and civil litigation across Delhi NCR.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

/* ── Content ──────────────────────────────────────────── */

const cyclingWords = ["divorce", "custody", "maintenance", "succession"];

const courts = [
  "Supreme Court of India",
  "Delhi High Court",
  "Family Courts, Delhi NCR",
  "District Courts",
  "Mediation Centres",
];

const practices = [
  {
    icon: Gavel,
    title: "Divorce",
    desc: "Contested and mutual-consent divorce, judicial separation and the full arc of matrimonial dispute resolution.",
    span: "lg:col-span-2 lg:row-span-2",
    feature: true,
  },
  {
    icon: Baby,
    title: "Child Custody",
    desc: "Custody, guardianship, visitation and international custody disputes.",
    span: "lg:col-span-2",
  },
  {
    icon: Scale,
    title: "Maintenance & Alimony",
    desc: "Interim and permanent maintenance, alimony and settlement negotiation.",
    span: "",
  },
  {
    icon: Shield,
    title: "Domestic Violence",
    desc: "Protection, residence and monetary relief under the DV Act.",
    span: "",
  },
  {
    icon: BookOpen,
    title: "Criminal Aspects of Family Law",
    desc: "Section 498A, cruelty and dowry-related proceedings — defence and prosecution.",
    span: "lg:col-span-2",
  },
  {
    icon: FileText,
    title: "Succession & Inheritance",
    desc: "Wills, probate and letters of administration.",
    span: "",
  },
  {
    icon: Users,
    title: "Family Settlements",
    desc: "Mediation and structured, enforceable family agreements.",
    span: "",
  },
  {
    icon: HomeIcon,
    title: "Property & Probate",
    desc: "Property disputes, estate planning and title due diligence.",
    span: "sm:col-span-2 lg:col-span-4",
  },
];

const process = [
  {
    step: "01",
    title: "Confidential hearing",
    desc: "A private first conversation — the facts, the timeline, and what you actually want from the outcome.",
  },
  {
    step: "02",
    title: "Case assessment",
    desc: "An honest read of merits, exposure and cost, with the realistic routes laid side by side.",
  },
  {
    step: "03",
    title: "Strategy & filing",
    desc: "Pleadings drafted, forum chosen, and a plan built around leverage rather than volume.",
  },
  {
    step: "04",
    title: "Representation",
    desc: "Argued through to relief — in court, in mediation, or across the settlement table.",
  },
];

const credentials = [
  "Enrolled with the Bar Council of Delhi",
  "Practising before the Supreme Court of India",
  "Private international law & cross-border family disputes",
  "Civil, criminal, consumer and real-estate litigation",
];

/* ── Kinetic hero word ────────────────────────────────── */

function WordCycler() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = setInterval(() => setI((n) => (n + 1) % cyclingWords.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      {cyclingWords.map((word, index) => (
        <span
          key={word}
          aria-hidden={index !== i}
          className="col-start-1 row-start-1 italic text-brass-gradient transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
          style={{
            opacity: index === i ? 1 : 0,
            transform:
              index === i
                ? "none"
                : `translateY(${index < i || (i === 0 && index === cyclingWords.length - 1) ? "-0.5em" : "0.5em"})`,
          }}
        >
          {word}
          <span className="text-brass">.</span>
        </span>
      ))}
    </span>
  );
}

/* ── Section heading ──────────────────────────────────── */

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="eyebrow text-brass">{index}</span>
      <span className="h-px w-10 bg-brass/40" />
      <span className="eyebrow text-muted-foreground">{label}</span>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────── */

function Home() {
  return (
    <div className="grain relative min-h-screen bg-background">
      <SiteNav />

      {/* ══════════ HERO ══════════ */}
      <section
        id="top"
        className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-28"
      >
        {/* Ambient light — replaces the old video background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-[20%] left-[8%] h-[70vh] w-[70vh] rounded-full bg-brass/[0.13] blur-[110px]"
            style={{ animation: "aurora-drift 22s ease-in-out infinite" }}
          />
          <div
            className="absolute bottom-[-15%] right-[2%] h-[62vh] w-[62vh] rounded-full bg-sage/[0.09] blur-[120px]"
            style={{ animation: "aurora-drift 28s ease-in-out infinite reverse" }}
          />
          {/* Hairline grid — quiet structure behind the type */}
          <div
            className="absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
              backgroundSize: "clamp(4rem, 9vw, 8rem) clamp(4rem, 9vw, 8rem)",
              maskImage: "radial-gradient(ellipse at 50% 35%, black 10%, transparent 72%)",
              WebkitMaskImage: "radial-gradient(ellipse at 50% 35%, black 10%, transparent 72%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-[86rem] flex-1 grid-cols-1 items-end gap-y-10 px-6 lg:grid-cols-12 lg:gap-x-8">
          {/* Type block — first in source so mobile leads with the name, not the photo */}
          <div className="pb-10 lg:col-span-7 lg:pb-24">
            <Enter>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-brass/30 bg-brass/[0.07] px-4 py-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span
                    className="absolute inline-flex h-full w-full rounded-full bg-brass"
                    style={{ animation: "pulse-ring 2.4s ease-out infinite" }}
                  />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brass" />
                </span>
                <span className="eyebrow text-brass-soft">Advocate · Supreme Court of India</span>
              </span>
            </Enter>

            <Enter delay={90}>
              <h1 className="fluid-display mt-7 font-display">
                Alka Nupur
                <br />
                Singh
              </h1>
            </Enter>

            <Enter delay={180}>
              <p className="mt-7 max-w-xl font-display text-2xl leading-[1.25] text-foreground/85 sm:text-3xl">
                A boutique chambers for matters of <WordCycler />
              </p>
            </Enter>

            <Enter delay={250}>
              <p className="text-balance-pretty mt-6 max-w-lg text-[0.975rem] leading-relaxed text-muted-foreground">
                Twelve years of courtroom practice across Delhi NCR — arguing the disputes that
                decide how a family's next decade looks.
              </p>
            </Enter>

            <Enter delay={320}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-brass px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-all duration-300 hover:bg-brass-soft hover:shadow-[0_16px_44px_-16px_var(--brass)]"
                >
                  Book a consultation
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#practice"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-border px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-colors duration-300 hover:border-brass/60 hover:text-brass"
                >
                  Practice areas
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </Enter>
          </div>

          {/* Portrait */}
          <div className="flex justify-center self-end lg:col-span-5 lg:justify-end">
            <Enter delay={140} className="relative w-full max-w-[22rem] lg:max-w-[26rem]">
              {/* Arch plinth behind the cut-out */}
              <div className="arch absolute inset-x-2 bottom-0 -top-12 border border-brass/25 bg-gradient-to-b from-brass/[0.14] via-elevated/50 to-transparent backdrop-blur-[2px] lg:inset-x-4 lg:top-6" />
              <div className="arch absolute inset-x-10 bottom-0 top-16 bg-brass/10 blur-3xl" />
              <img
                src={alkaImg}
                alt="Advocate Alka Nupur Singh"
                fetchPriority="high"
                decoding="sync"
                className="relative mx-auto h-[38vh] w-auto max-w-full object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)] sm:h-[50vh] lg:h-[64vh]"
                style={{
                  maskImage: "linear-gradient(to bottom, black 86%, transparent 99%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 86%, transparent 99%)",
                }}
              />
            </Enter>
          </div>
        </div>

        {/* Hero footer strip */}
        <div className="relative z-10 border-t border-border/60">
          {/* px-1 + cell px-5 lines these up with the px-6 gutter above */}
          <div className="mx-auto grid max-w-[86rem] grid-cols-2 divide-x divide-border/60 px-1 sm:grid-cols-4">
            {[
              { k: "12+", v: "Years in practice" },
              { k: "500+", v: "Matters handled" },
              { k: "SC", v: "Supreme Court of India" },
              { k: "NCR", v: "High & District Courts" },
            ].map((s) => (
              <div key={s.v} className="px-5 py-6">
                <div className="font-display text-3xl text-brass sm:text-4xl">{s.k}</div>
                <div className="eyebrow mt-1.5 text-[0.5625rem] text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ COURTS MARQUEE ══════════ */}
      <section className="border-y border-border/60 bg-elevated/40 py-7">
        <Marquee items={courts} duration={46} />
      </section>

      {/* ══════════ 01 · ABOUT ══════════ */}
      <section id="about" className="relative py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[86rem] px-6">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-16">
            {/* Sticky rail */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <SectionLabel index="01" label="The Chambers" />
                  <h2 className="fluid-heading mt-8 font-display">
                    Strategic counsel,
                    <br />
                    <span className="italic text-brass-gradient">delivered quietly.</span>
                  </h2>
                </Reveal>

                <Reveal delay={120}>
                  <ul className="mt-10 space-y-3.5">
                    {credentials.map((c) => (
                      <li key={c} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>

            {/* Prose */}
            <div className="lg:col-span-7 lg:col-start-6">
              <Reveal>
                <p className="text-balance-pretty text-lg leading-[1.75] text-muted-foreground sm:text-xl">
                  <span className="float-left mr-3 mt-1.5 font-display text-[4.5rem] leading-[0.7] text-brass">
                    F
                  </span>
                  ounded by Advocate Alka Nupur Singh, the{" "}
                  <span className="text-foreground">Chambers of Alka Nupur Singh</span> is a
                  boutique law firm providing comprehensive legal services across a wide range of
                  practice areas. Recognised for its focused expertise in divorce and family law,
                  the firm represents clients before the Supreme Court of India, the Delhi High
                  Court, Family Courts and District Courts across Delhi NCR.
                </p>
              </Reveal>

              <Reveal delay={100}>
                <p className="text-balance-pretty mt-7 text-base leading-[1.8] text-muted-foreground">
                  With over{" "}
                  <span className="font-medium text-foreground">
                    twelve years of legal experience
                  </span>
                  , Adv. Singh has built a reputation for handling complex and sensitive disputes —
                  divorce, child custody, domestic violence, maintenance and alimony, matrimonial
                  and property disputes, succession, inheritance and family settlements. The firm
                  also advises on international child custody, cross-border family conflicts,
                  private international law, civil and criminal litigation, consumer disputes, real
                  estate, estate planning and due diligence.
                </p>
              </Reveal>

              <Reveal delay={160}>
                <blockquote className="mt-12 border-l-2 border-brass/60 pl-7">
                  <p className="font-display text-2xl italic leading-snug text-foreground sm:text-[1.75rem]">
                    “Family disputes are rarely won on volume. They are won on preparation, timing,
                    and knowing exactly which relief to press for.”
                  </p>
                  <footer className="eyebrow mt-5 text-muted-foreground">
                    Adv. Alka Nupur Singh
                  </footer>
                </blockquote>
              </Reveal>

              {/* Counters */}
              <Reveal delay={200}>
                <div className="mt-14 grid grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-3">
                  {[
                    { n: 12, suffix: "+", label: "Years of practice" },
                    { n: 500, suffix: "+", label: "Matters handled" },
                    { n: 4, suffix: "", label: "Forums represented" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="font-display text-5xl text-foreground sm:text-6xl">
                        <CountUp value={s.n} suffix={s.suffix} />
                      </div>
                      <div className="eyebrow mt-2 text-[0.5625rem] text-muted-foreground">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ 02 · PRACTICE (bento) ══════════ */}
      <section id="practice" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-[86rem] px-6">
          <Reveal>
            <SectionLabel index="02" label="Practice areas" />
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
              <h2 className="fluid-heading font-display">
                Family law <span className="italic text-brass-gradient">& beyond</span>
              </h2>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                Eight core areas of practice, argued from a single chambers — so your matter never
                gets handed down a bench.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid auto-rows-[minmax(13rem,auto)] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {practices.map(({ icon: Icon, title, desc, span, feature }, i) => (
              <Reveal
                key={title}
                delay={i * 60}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-elevated/50 transition-all duration-500 hover:-translate-y-1 hover:border-brass/45 hover:bg-elevated ${span}`}
              >
                {/* Brass wash on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brass/[0.11] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col p-7">
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brass/25 bg-brass/[0.08] text-brass transition-colors duration-500 group-hover:border-brass/50 group-hover:bg-brass/[0.14]">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <span className="eyebrow text-[0.5625rem] text-muted-foreground/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3
                    className={`mt-auto pt-8 font-display leading-[1.05] transition-colors duration-500 group-hover:text-brass ${
                      feature ? "text-4xl sm:text-5xl" : "text-[1.7rem]"
                    }`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`mt-3 leading-relaxed text-muted-foreground ${
                      feature ? "text-[0.95rem] max-w-sm" : "text-sm"
                    }`}
                  >
                    {desc}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-brass opacity-0 transition-all duration-500 group-hover:opacity-100">
                    Discuss this matter
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>

                {/* Base hairline that draws across */}
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-brass via-brass/40 to-transparent transition-transform duration-700 group-hover:scale-x-100" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ 03 · PROCESS ══════════ */}
      <section
        id="process"
        className="relative border-y border-border/60 bg-elevated/30 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-[86rem] px-6">
          <Reveal>
            <SectionLabel index="03" label="How it works" />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="fluid-heading mt-8 max-w-2xl font-display">
              Four steps, <span className="italic text-brass-gradient">no surprises.</span>
            </h2>
          </Reveal>

          <div className="relative mt-16">
            {/* Connecting rule */}
            <div className="absolute left-0 right-0 top-[1.4rem] hidden h-px bg-gradient-to-r from-brass/50 via-border to-transparent lg:block" />

            <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
              {process.map((p, i) => (
                <Reveal key={p.step} delay={i * 110} className="relative">
                  <div className="flex items-center gap-4 lg:block">
                    <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brass/40 bg-background font-mono text-xs text-brass">
                      {p.step}
                    </span>
                    <h3 className="font-display text-2xl lg:mt-7">{p.title}</h3>
                  </div>
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ 04 · CONTACT ══════════ */}
      <ContactSection />

      {/* ══════════ FOOTER ══════════ */}
      <footer className="relative overflow-hidden border-t border-border/60 pt-16">
        <div className="mx-auto max-w-[86rem] px-6">
          <div className="flex flex-wrap items-start justify-between gap-10">
            <div>
              <span className="eyebrow text-brass">Chambers of</span>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Boutique counsel in divorce, family law and civil litigation across Delhi NCR.
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-muted-foreground">
              <a href="#about" className="link-underline hover:text-foreground">
                About
              </a>
              <a href="#practice" className="link-underline hover:text-foreground">
                Practice
              </a>
              <a href="#process" className="link-underline hover:text-foreground">
                Process
              </a>
              <a href="#contact" className="link-underline hover:text-foreground">
                Contact
              </a>
            </nav>
          </div>

          {/* Oversized wordmark */}
          <div className="mt-16 select-none">
            <span
              className="block whitespace-nowrap font-display leading-[0.8] text-transparent"
              style={{
                fontSize: "clamp(2.75rem, 12.2vw, 12rem)",
                WebkitTextStroke: "1px color-mix(in oklab, var(--brass) 34%, transparent)",
              }}
            >
              Alka Nupur Singh
            </span>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 py-7 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} Chambers of Alka Nupur Singh</span>
            <span className="eyebrow text-[0.5625rem]">Delhi NCR · India</span>
          </div>
        </div>
      </footer>

      <Disclaimer />
      <BackToTop />
    </div>
  );
}

/* ── Contact ──────────────────────────────────────────── */

const contactDetails = [
  { icon: Mail, label: "Email", value: "chambers@alkanupursingh.in" },
  { icon: Phone, label: "Phone", value: "+91 · By appointment" },
  { icon: MapPin, label: "Chambers", value: "Delhi NCR · Supreme Court · High Court" },
];

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow mb-2 block text-[0.5625rem] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

const fieldClass =
  "w-full rounded-lg border border-border bg-background/60 px-4 py-3.5 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/50 focus:border-brass/70 focus:bg-background";

function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[86rem] px-6">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel index="04" label="Get in touch" />
              <h2 className="fluid-heading mt-8 font-display">
                Request a
                <br />
                <span className="italic text-brass-gradient">confidential</span>
                <br />
                consultation.
              </h2>
              <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
                Share a brief note about your matter. The Chambers will revert with next steps —
                privately, and without obligation.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-12 space-y-px overflow-hidden rounded-2xl border border-border">
                {contactDetails.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="group flex items-center gap-4 bg-elevated/50 px-5 py-5 transition-colors duration-300 hover:bg-elevated"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brass/25 bg-brass/[0.07] text-brass">
                      <Icon className="h-4 w-4" strokeWidth={1.6} />
                    </span>
                    <div className="min-w-0">
                      <div className="eyebrow text-[0.5625rem] text-muted-foreground">{label}</div>
                      <div className="truncate text-sm font-medium text-foreground">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={80}>
              <div className="relative overflow-hidden rounded-3xl border border-border bg-elevated/60 p-7 backdrop-blur-sm sm:p-10">
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-brass/10 blur-3xl" />

                {sent ? (
                  <div className="relative flex min-h-[26rem] flex-col items-start justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-brass/40 bg-brass/10 text-brass">
                      <Check className="h-6 w-6" />
                    </span>
                    <h3 className="mt-7 font-display text-4xl">Message received.</h3>
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                      Thank you — the Chambers will be in touch shortly at the contact details you
                      provided.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="link-underline mt-8 text-sm text-brass"
                    >
                      Send another note
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                    className="relative space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Full name">
                        <input required placeholder="Your name" className={fieldClass} />
                      </Field>
                      <Field label="Email">
                        <input
                          required
                          type="email"
                          placeholder="you@example.com"
                          className={fieldClass}
                        />
                      </Field>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Phone">
                        <input placeholder="Optional" className={fieldClass} />
                      </Field>
                      <Field label="Matter type">
                        <select className={fieldClass} defaultValue="">
                          <option value="" disabled>
                            Select an area
                          </option>
                          {practices.map((p) => (
                            <option key={p.title} value={p.title}>
                              {p.title}
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    <Field label="Your matter">
                      <textarea
                        required
                        rows={5}
                        placeholder="Briefly describe the situation and what you need."
                        className={`${fieldClass} resize-none`}
                      />
                    </Field>

                    <button className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-brass px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-all duration-300 hover:bg-brass-soft hover:shadow-[0_16px_44px_-16px_var(--brass)]">
                      Request consultation
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>

                    <p className="text-center text-xs leading-relaxed text-muted-foreground/70">
                      Your enquiry is treated as confidential. Submitting this form does not create
                      an advocate–client relationship.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
