import { useEffect, useState } from "react";
import { X, ChevronUp, ChevronDown } from "lucide-react";

const STORAGE_KEY = "canns-disclaimer-hidden";

export function Disclaimer() {
  const [hidden, setHidden] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const dismissed = typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY) === "1";
    setHidden(dismissed);
  }, []);

  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [expanded]);

  const hide = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setHidden(true);
    setExpanded(false);
  };

  if (hidden) return null;

  return (
    <>
      {expanded && (
        <div
          className="fixed inset-0 z-40 bg-ink/80 backdrop-blur-sm"
          onClick={() => setExpanded(false)}
        />
      )}
      <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-6 sm:pb-6">
        <div className="glass mx-auto max-w-4xl overflow-hidden rounded-2xl border border-brass/25 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.95)]">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex w-full items-center justify-between gap-3 px-5 py-3.5 text-left transition-colors hover:bg-brass/[0.06]"
          >
            <span className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brass" />
              <span className="eyebrow text-[0.5625rem] text-foreground">
                Disclaimer · Bar Council of India
              </span>
            </span>
            <span className="flex items-center gap-2 text-xs text-muted-foreground">
              {expanded ? "Collapse" : "Read"}
              {expanded ? (
                <ChevronDown className="h-3.5 w-3.5" />
              ) : (
                <ChevronUp className="h-3.5 w-3.5" />
              )}
            </span>
          </button>

          {expanded && (
            <div className="max-h-[70vh] overflow-y-auto border-t border-border px-5 py-6 text-sm leading-relaxed text-muted-foreground">
              <p>
                The Bar Council of India does not permit advertising or soliciting by advocates in
                any form/manner. By accessing this website, you acknowledge and confirm that you are
                seeking information about the Chambers at your own accord and that there has been no
                form of inducement by the Chambers. The content of this website is for informational
                purposes only and should not be interpreted as soliciting or advertising nor should
                be construed as legal advice. Chambers shall not be liable for consequences of any
                action taken by relying on the information provided on this website. In cases where
                the user has any legal issues, he/she in all cases must seek independent legal
                advice.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={hide}
                  className="inline-flex items-center gap-2 rounded-full bg-brass px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-brass-soft"
                >
                  I agree — hide
                  <X className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => setExpanded(false)}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:border-brass/50 hover:text-brass"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
