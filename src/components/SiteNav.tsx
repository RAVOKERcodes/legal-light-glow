import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About", index: "01" },
  { href: "#practice", label: "Practice", index: "02" },
  { href: "#process", label: "Process", index: "03" },
  { href: "#contact", label: "Contact", index: "04" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 px-4 transition-all duration-500 sm:px-6",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <div
          className={cn(
            "mx-auto flex w-full max-w-[86rem] items-center rounded-full px-5 py-2.5 transition-all duration-500 sm:px-6",
            scrolled
              ? "glass border border-border/70 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]"
              : "border border-transparent",
          )}
        >
          {/* Left — nav links */}
          <div className="flex flex-1 items-center justify-start">
            <nav className="hidden items-center gap-6 md:flex lg:gap-9">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="link-underline group flex items-baseline gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="eyebrow text-[0.5625rem] text-brass/60 transition-colors group-hover:text-brass">
                    {link.index}
                  </span>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Center — logo */}
          <div className="flex flex-auto items-center justify-center md:flex-1">
            <a href="#top" className="group flex items-center gap-3">
              <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brass/40 bg-brass/10">
                <span className="font-display text-base leading-none text-brass">A</span>
                <span className="absolute inset-0 rounded-full border border-brass/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-[1.1rem]">Alka Nupur Singh</span>
                <span className="eyebrow block text-[0.5625rem] text-muted-foreground">
                  Chambers · Advocate
                </span>
              </span>
            </a>
          </div>

          {/* Right — consult button */}
          <div className="flex flex-1 items-center justify-end gap-2">
            <a
              href="#contact"
              className="group hidden items-center gap-2 rounded-full bg-brass px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-all duration-300 hover:bg-brass-soft sm:inline-flex"
            >
              Consult
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-brass/60 hover:text-brass md:hidden"
            >
              <Menu className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-ink/95 backdrop-blur-xl transition-all duration-500 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <span className="eyebrow text-muted-foreground">Menu</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground"
          >
            <X className="h-4.5 w-4.5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-1 px-6">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-4 border-b border-border/60 py-5"
              style={{
                transitionDelay: `${i * 60}ms`,
                transform: open ? "none" : "translateY(14px)",
                opacity: open ? 1 : 0,
                transition: "transform .6s cubic-bezier(.16,1,.3,1), opacity .6s",
              }}
            >
              <span className="eyebrow text-brass/70">{link.index}</span>
              <span className="font-display text-4xl transition-colors group-hover:text-brass">
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="px-6 pb-10">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-full bg-brass px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground"
          >
            Book a consultation
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  );
}
