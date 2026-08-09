import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(window.scrollY > 400);
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const radius = 21;
  const circumference = 2 * Math.PI * radius;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`group fixed bottom-20 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-500 sm:bottom-6 sm:right-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      {/* Scroll-progress ring */}
      <svg className="absolute inset-0 h-12 w-12 -rotate-90" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r={radius} fill="none" stroke="var(--border)" strokeWidth="1.5" />
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="var(--brass)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress)}
          style={{ transition: "stroke-dashoffset .15s linear" }}
        />
      </svg>
      <span className="glass absolute inset-1 rounded-full" />
      <ArrowUp className="relative h-4 w-4 text-brass transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}
