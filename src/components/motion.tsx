import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Fires once when the element scrolls into view. Everything on the page that
 * animates in shares this observer contract so timings stay consistent.
 */
function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    // Anything already on screen at mount reveals straight away — don't wait on
    // the observer's first delivery, which can lag behind first paint.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={cn("reveal", inView && "is-visible", className)}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}

/**
 * Above-the-fold counterpart to `Reveal`: a pure CSS entrance animation
 * that plays on paint. Use this for hero/first-viewport content — `Reveal`
 * waits on hydration + an IntersectionObserver, which reads as a stuck
 * page if nothing above the fold is visible in the meantime.
 */
export function Enter({
  children,
  delay = 0,
  as: Tag = "div",
  className,
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
}) {
  return (
    <Tag className={cn("enter", className)} style={{ "--enter-delay": `${delay}ms` } as React.CSSProperties}>
      {children}
    </Tag>
  );
}

/** Counts up to `value` the first time it becomes visible. */
export function CountUp({
  value,
  suffix = "",
  duration = 1600,
  className,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.5);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutExpo — fast start, long settle
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

/** Seamless infinite ticker. Children are rendered twice for the loop. */
export function Marquee({
  items,
  duration = 42,
  className,
}: {
  items: string[];
  duration?: number;
  className?: string;
}) {
  return (
    <div className={cn("marquee-host overflow-hidden", className)}>
      <div
        className="marquee-track"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
            {items.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="flex items-center gap-6 whitespace-nowrap px-6 sm:px-8"
              >
                <span className="font-display text-2xl text-foreground/70 sm:text-3xl">{item}</span>
                <span className="h-1 w-1 rounded-full bg-brass/70" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
