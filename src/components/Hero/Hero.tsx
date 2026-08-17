"use client";

import { useEffect, useRef, useState } from "react";

const LOG_LINES = [
  { stage: "01 ingest", detail: "rafael.md" },
  { stage: "02 chunk", detail: "12 segmentos" },
  { stage: "03 embed", detail: "vector space" },
  { stage: "04 retrieve", detail: "top-k context" },
  { stage: "05 generate", detail: "resposta pronta" },
];

const TRACKER_ITEMS = ["ingest", "chunk", "embed", "retrieve", "generate"];

export function Hero() {
  const [lineStates, setLineStates] = useState<Array<"hidden" | "active" | "done">>(
    LOG_LINES.map(() => "hidden")
  );
  const [cursorVisible, setCursorVisible] = useState(true);
  const [headlineVisible, setHeadlineVisible] = useState(false);
  const [trackerVisible, setTrackerVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion.current) {
      setLineStates(LOG_LINES.map(() => "done"));
      setCursorVisible(false);
      setHeadlineVisible(true);
      setTrackerVisible(true);
      setCtaVisible(true);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    let t = 300;

    LOG_LINES.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setLineStates((prev) => {
            const next = [...prev];
            // Previous lines become "done"
            if (i > 0) next[i - 1] = "done";
            next[i] = "active";
            return next;
          });
        }, t)
      );
      t += 420;
    });

    // Hide cursor + last line done
    timers.push(
      setTimeout(() => {
        setCursorVisible(false);
        setLineStates((prev) => {
          const next = [...prev];
          next[next.length - 1] = "done";
          return next;
        });
      }, t + 500)
    );

    // Reveal headline, tracker, CTAs
    timers.push(setTimeout(() => setHeadlineVisible(true), t + 650));
    timers.push(setTimeout(() => setTrackerVisible(true), t + 1050));
    timers.push(setTimeout(() => setCtaVisible(true), t + 1300));

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="min-h-[calc(100dvh-78px)] flex items-center px-[6vw] py-[6vw]">
      <div className="max-w-[720px]">
        {/* Pipeline Log */}
        <div className="font-mono text-[13px] min-h-[128px] mb-7" aria-live="polite">
          {LOG_LINES.map((line, i) => (
            <div
              key={line.stage}
              className={`flex gap-2.5 leading-[1.9] transition-all duration-400 ease-out ${
                lineStates[i] === "hidden"
                  ? "opacity-0 translate-y-1"
                  : lineStates[i] === "active"
                  ? "opacity-100 translate-y-0 text-cool"
                  : "opacity-100 translate-y-0 text-muted"
              }`}
            >
              <span className="w-[78px] shrink-0">{line.stage}</span>
              <span>
                {line.detail}
                {i === LOG_LINES.length - 1 && cursorVisible && (
                  <span
                    className="inline-block w-[7px] h-[14px] bg-warm ml-0.5 align-[-2px] animate-[blink_1s_step-start_infinite]"
                    aria-hidden="true"
                  />
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Headline */}
        <div
          className={`transition-all duration-700 ease-out ${
            headlineVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2.5"
          }`}
        >
          <h1 className="font-display font-[560] text-[clamp(2.6rem,6vw,4.4rem)] leading-[1.03] tracking-tight">
            Rafael Souza —<br />
            <em className="not-italic text-cool">dev fullstack</em>, JS &amp; IA generativa.
          </h1>

          <p className="font-mono text-[14px] text-muted mt-3.5 tracking-wide">
            Franca, SP · React/Next.js · Node.js · Python
          </p>

          <p className="text-[16px] leading-[1.65] text-muted max-w-[540px] mt-5">
            Construo interfaces ponta a ponta e, por trás delas, um{" "}
            <strong className="text-text font-medium">pipeline de RAG próprio</strong> —
            ingestão, chunking, embeddings e recuperação de contexto. Claude, Cursor e
            Gemini fazem parte da rotina.
          </p>
        </div>

        {/* Pipeline Tracker */}
        <div
          className={`flex items-center mt-10 transition-all duration-600 ease-out ${
            trackerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          }`}
        >
          {TRACKER_ITEMS.map((item, i) => (
            <div key={item} className="flex items-center">
              {i > 0 && (
                <div className="w-[22px] h-px bg-border mx-2.5 shrink-0" />
              )}
              <div
                className={`flex items-center gap-2 font-mono text-[11.5px] tracking-wide whitespace-nowrap ${
                  item === "generate" ? "text-warm" : "text-muted-dim"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    item === "generate" ? "bg-warm" : "bg-cool"
                  }`}
                />
                {item}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          className={`flex gap-3.5 mt-10 transition-all duration-600 ease-out ${
            ctaVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          }`}
        >
          <a
            href="https://github.com/RaFaSMK"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[12.5px] tracking-wide px-5 py-2.5 rounded-md border border-warm text-warm transition-colors duration-200 hover:bg-warm/[0.08]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rafael-chaves-souza-a856b524b/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[12.5px] tracking-wide px-5 py-2.5 rounded-md border border-border text-text transition-colors duration-200 hover:border-cool hover:text-cool hover:bg-cool/[0.06]"
          >
            LinkedIn
          </a>
          <a
            href="mailto:rafael012chavess@gmail.com"
            className="font-mono text-[12.5px] tracking-wide px-5 py-2.5 rounded-md border border-border text-text transition-colors duration-200 hover:border-cool hover:text-cool hover:bg-cool/[0.06]"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
