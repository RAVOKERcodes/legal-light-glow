import { createFileRoute } from "@tanstack/react-router";
import { Scale, Gavel, Users, Shield, Home as HomeIcon, BookOpen, Baby, FileText, Mail, Phone, MapPin } from "lucide-react";
import alkaAsset from "@/assets/alka.png.asset.json";
import { Disclaimer } from "@/components/Disclaimer";

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
      { property: "og:description", content: "Divorce, family law and civil litigation across Delhi NCR." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const practices = [
  { icon: Gavel, title: "Divorce", desc: "Contested & mutual consent divorce, matrimonial disputes." },
  { icon: Baby, title: "Child Custody", desc: "Custody, visitation, and international custody disputes." },
  { icon: Scale, title: "Maintenance & Alimony", desc: "Litigation for maintenance, alimony and settlement." },
  { icon: Shield, title: "Domestic Violence", desc: "Protection orders and remedies under the DV Act." },
  { icon: BookOpen, title: "Criminal Aspects of Family Law", desc: "498A, cruelty, dowry-related proceedings." },
  { icon: FileText, title: "Succession & Inheritance", desc: "Wills, probate, letters of administration." },
  { icon: Users, title: "Family Settlements", desc: "Mediation and structured family agreements." },
  { icon: Home, title: "Property & Probate", desc: "Property disputes, estate planning, due diligence." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-30 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-gold" />
            <span className="font-serif text-lg font-semibold leading-none">
              Chambers of <span className="text-gold">Alka Nupur Singh</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#practice" className="hover:text-foreground">Practice</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-md bg-primary px-4 py-2 text-xs font-medium uppercase tracking-wider text-primary-foreground hover:opacity-90"
          >
            Consult
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        {/* YouTube background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <iframe
            className="absolute left-1/2 top-1/2 h-[120vh] w-[220vw] max-w-none -translate-x-1/2 -translate-y-1/2 sm:w-[177.77vh]"
            src="https://www.youtube.com/embed/yXaegVWBrK0?autoplay=1&mute=1&controls=0&loop=1&playlist=yXaegVWBrK0&playsinline=1&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3"
            title="Background"
            allow="autoplay; encrypted-media"
            frameBorder={0}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          <div className="absolute inset-0 bg-primary/40" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-background/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Advocate · Supreme Court of India
          </span>
          <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[1.05] text-primary-foreground sm:text-6xl md:text-7xl">
            Advocate <span className="italic text-gold">Alka Nupur Singh</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            A boutique chambers offering focused counsel in divorce, family law and civil litigation across
            Delhi NCR — with over 12 years of courtroom experience.
          </p>

          <div className="relative mt-10">
            <div className="absolute inset-x-6 bottom-0 top-8 -z-10 rounded-t-full bg-gradient-to-b from-gold/30 to-transparent blur-2xl" />
            <img
              src={alkaAsset.url}
              alt="Advocate Alka Nupur Singh"
              className="mx-auto h-[420px] w-auto object-contain drop-shadow-2xl sm:h-[520px]"
            />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="rounded-md bg-gold px-6 py-3 text-sm font-medium uppercase tracking-wider text-primary hover:opacity-90"
            >
              Book Consultation
            </a>
            <a
              href="#practice"
              className="rounded-md border border-primary-foreground/30 bg-background/10 px-6 py-3 text-sm font-medium uppercase tracking-wider text-primary-foreground backdrop-blur hover:bg-background/20"
            >
              Practice Areas
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-border py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">About the Chambers</span>
            <h2 className="mt-3 font-serif text-4xl font-medium sm:text-5xl">
              Strategic counsel, delivered with discretion.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Founded by Advocate Alka Nupur Singh, the <span className="text-foreground">Chambers of Alka Nupur Singh</span> is
              a boutique law firm providing comprehensive legal services across a wide range of practice areas.
              Recognised for its focused expertise in divorce and family law matters, the firm represents clients before
              the Supreme Court of India, the Delhi High Court, Family Courts, and District Courts across Delhi NCR.
            </p>
            <p>
              With over <span className="text-foreground font-medium">12 years of legal experience</span>, Adv. Alka Nupur Singh has built a strong
              reputation in handling complex and sensitive legal disputes involving divorce, child custody, domestic
              violence, maintenance, alimony, matrimonial disputes, property disputes, succession, inheritance, and family
              settlements. The firm also regularly advises on international child custody disputes, cross-border family
              conflicts, private international law, civil and criminal litigation, consumer disputes, real estate,
              estate planning, and due diligence.
            </p>
            <p>
              As a trusted divorce lawyer in Delhi NCR, Adv. Singh is known for her strategic, client-focused approach
              and her ability to navigate emotionally challenging disputes with professionalism and discretion. Her
              practice is founded on integrity, confidentiality, transparency, and effective legal representation.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4">
            {[
              { k: "12+", v: "Years of Practice" },
              { k: "SC", v: "Supreme Court of India" },
              { k: "500+", v: "Matters Handled" },
              { k: "NCR", v: "Delhi High & District Courts" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-serif text-4xl font-medium text-gold">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICE */}
      <section id="practice" className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Practice Areas</span>
            <h2 className="mt-3 font-serif text-4xl font-medium sm:text-5xl">Family Law & Beyond</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {practices.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group relative bg-card p-8 transition-colors hover:bg-background">
                <Icon className="h-7 w-7 text-gold" />
                <h3 className="mt-5 font-serif text-2xl font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <div className="absolute inset-x-8 bottom-0 h-px scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Get in touch</span>
            <h2 className="mt-3 font-serif text-4xl font-medium sm:text-5xl">
              Request a confidential consultation.
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Share a brief note about your matter and the Chambers will revert with next steps.
            </p>

            <div className="mt-10 space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-gold" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <div className="font-medium">chambers@alkanupursingh.in</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-gold" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                  <div className="font-medium">+91 · By appointment</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-gold" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Chambers</div>
                  <div className="font-medium">Delhi NCR · Supreme Court · High Court</div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thank you — the Chambers will be in touch."); }}
            className="space-y-4 rounded-xl border border-border bg-card p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input required placeholder="Full name" className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
              <input required type="email" placeholder="Email" className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
            </div>
            <input placeholder="Phone" className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
            <select className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold">
              <option>Matter type</option>
              {practices.map((p) => <option key={p.title}>{p.title}</option>)}
            </select>
            <textarea required rows={5} placeholder="Briefly describe your matter" className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold" />
            <button className="w-full rounded-md bg-primary py-3 text-sm font-medium uppercase tracking-wider text-primary-foreground hover:opacity-90">
              Request Consultation
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Chambers of Alka Nupur Singh · All rights reserved
      </footer>

      <Disclaimer />
    </div>
  );
}
