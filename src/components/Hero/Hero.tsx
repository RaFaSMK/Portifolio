"use client";

import { useEffect, useRef, useState } from "react";
import { VectorText } from "@/components/VectorText/VectorText";

const LOG_LINES = [
  { stage: "01 ingest", detail: "rafael.md" },
  { stage: "02 chunk", detail: "12 segmentos" },
  { stage: "03 embed", detail: "vector space" },
  { stage: "04 retrieve", detail: "top-k context" },
  { stage: "05 generate", detail: "resposta pronta" },
];

const TRACKER_ITEMS = ["ingest", "chunk", "embed", "retrieve", "generate"];

type LineState = "hidden" | "loading" | "active" | "done";

export function Hero() {
  const [lineStates, setLineStates] = useState<LineState[]>(
    LOG_LINES.map(() => "hidden")
  );
  const [trackerLit, setTrackerLit] = useState<boolean[]>(
    TRACKER_ITEMS.map(() => false)
  );
  const [cursorVisible, setCursorVisible] = useState(true);
  const [headlineVisible, setHeadlineVisible] = useState(false);
  const [trackerVisible, setTrackerVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion.current) {
      setLineStates(LOG_LINES.map(() => "done"));
      setTrackerLit(TRACKER_ITEMS.map(() => true));
      setCursorVisible(false);
      setHeadlineVisible(true);
      setTrackerVisible(true);
      setCtaVisible(true);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    let t = 240; // Start delay

    LOG_LINES.forEach((_, i) => {
      // Show line in "loading" state (spinner spinning)
      timers.push(
        setTimeout(() => {
          setLineStates((prev) => {
            const next = [...prev];
            if (i > 0) next[i - 1] = "done";
            next[i] = "loading";
            return next;
          });
        }, t)
      );

      // After "processing", switch to "active" (check mark appears)
      const processingTime = i === LOG_LINES.length - 1 ? 510 : 240 + Math.random() * 120;
      timers.push(
        setTimeout(() => {
          setLineStates((prev) => {
            const next = [...prev];
            next[i] = "active";
            return next;
          });
          // Light up tracker dot
          setTrackerLit((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, t + processingTime)
      );

      t += processingTime + 80; // Gap between stages
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
      }, t + 210)
    );

    // Reveal headline, tracker, CTAs
    timers.push(setTimeout(() => setHeadlineVisible(true), t + 300));
    timers.push(setTimeout(() => setTrackerVisible(true), t + 530));
    timers.push(setTimeout(() => setCtaVisible(true), t + 720));

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative min-h-[calc(100dvh-78px)] flex items-center px-[6vw] py-[6vw] overflow-hidden">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, var(--cool) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[720px] w-full">
        {/* Pipeline Log */}
        <div
          className="font-mono text-[13px] min-h-[160px] mb-8"
          role="log"
          aria-live="polite"
          aria-label="Pipeline RAG em execução"
        >
          {LOG_LINES.map((line, i) => {
            const state = lineStates[i];
            return (
              <div
                key={line.stage}
                className={`flex items-center gap-3 h-[30px] transition-all duration-500 ease-out
                  ${state === "hidden" ? "opacity-0 translate-y-2" : ""}
                  ${state === "loading" ? "opacity-100 translate-y-0 text-muted-dim" : ""}
                  ${state === "active" ? "opacity-100 translate-y-0 text-cool" : ""}
                  ${state === "done" ? "opacity-100 translate-y-0 text-muted" : ""}
                `}
              >
                {/* Status indicator */}
                <span className="w-4 h-4 flex items-center justify-center shrink-0">
                  {state === "loading" && (
                    <span className="block w-3.5 h-3.5 border-[1.5px] border-muted-dim/40 border-t-cool rounded-full animate-[spin_0.6s_linear_infinite]" />
                  )}
                  {(state === "active" || state === "done") && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className={`${state === "active" ? "text-cool" : "text-muted-dim"} ${state === "active" ? "animate-[scale-in_0.3s_ease-out]" : ""}`}
                    >
                      <path
                        d="M2.5 7L5.5 10L11.5 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>

                <span className="w-[90px] shrink-0 whitespace-nowrap">{line.stage}</span>
                <span className="whitespace-nowrap">
                  {state === "loading" ? (
                    <span className="inline-block animate-[typing-dots_1.4s_infinite]">...</span>
                  ) : (
                    line.detail
                  )}
                  {i === LOG_LINES.length - 1 && cursorVisible && state !== "loading" && (
                    <span
                      className="inline-block w-[7px] h-[14px] bg-warm ml-1 align-[-2px] animate-[blink_1s_step-start_infinite]"
                      aria-hidden="true"
                    />
                  )}
                </span>

                {/* Active glow bar */}
                {state === "active" && (
                  <span className="ml-auto h-px w-20 animate-[glow-bar_1.5s_ease-out_forwards] bg-gradient-to-r from-cool/50 to-transparent" />
                )}
              </div>
            );
          })}
        </div>


        {/* Headline */}
        <div
          className={`transition-all duration-[1000ms] ease-out ${
            headlineVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <h1 className="font-display font-[560] text-[clamp(2.6rem,6vw,4.4rem)] leading-[1.03] tracking-tight">
            <span
              className={`inline-block transition-all duration-[800ms] ease-out ${
                headlineVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-6"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <VectorText trigger={headlineVisible} delay={400} duration={1500}>Rafael Souza —</VectorText>
            </span>
            <br />
            <span
              className={`inline-block transition-all duration-[800ms] ease-out ${
                headlineVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-6"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <em className="not-italic text-cool">
                <VectorText trigger={headlineVisible} delay={900} duration={1500} hideCursor>dev fullstack</VectorText>
              </em>
              <VectorText trigger={headlineVisible} delay={900} duration={1500}>, JS & IA generativa.</VectorText>
            </span>
          </h1>

          <p
            className={`font-mono text-[14px] text-muted mt-4 tracking-wide transition-all duration-700 ease-out ${
              headlineVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <VectorText trigger={headlineVisible} delay={1100} duration={1200}>Franca, SP · React/Next.js · Node.js · Python</VectorText>
          </p>

          <p
            className={`text-[16px] leading-[1.65] text-muted max-w-[540px] mt-5 transition-all duration-700 ease-out ${
              headlineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            <VectorText trigger={headlineVisible} delay={1300} duration={1500} hideCursor>Construo interfaces ponta a ponta e, por trás delas, um </VectorText>
            <strong className="text-text font-medium">
              <VectorText trigger={headlineVisible} delay={1300} duration={1500} hideCursor>pipeline de RAG próprio</VectorText>
            </strong>{" "}
            <VectorText trigger={headlineVisible} delay={1300} duration={1500}>— ingestão, chunking, embeddings e recuperação de contexto. Claude, Cursor e Gemini fazem parte da rotina.</VectorText>
          </p>
        </div>

        {/* Pipeline Tracker */}
        <div
          className={`flex items-center flex-wrap gap-y-2 mt-10 transition-all duration-700 ease-out ${
            trackerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3"
          }`}
        >
          {TRACKER_ITEMS.map((item, i) => {
            const isGenerate = item === "generate";
            const isLit = trackerLit[i];
            return (
              <div key={item} className="flex items-center">
                {i > 0 && (
                  <div
                    className={`h-px mx-2.5 shrink-0 transition-all duration-700 ease-out ${
                      isLit ? "w-[22px] bg-cool/40" : "w-[22px] bg-border"
                    }`}
                    style={{ transitionDelay: `${i * 120}ms` }}
                  />
                )}
                <div
                  className={`flex items-center gap-2 font-mono text-[11.5px] tracking-wide whitespace-nowrap transition-all duration-500 ${
                    isLit
                      ? isGenerate
                        ? "text-warm"
                        : "text-cool"
                      : "text-muted-dim"
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <span
                    className={`w-[6px] h-[6px] rounded-full shrink-0 transition-all duration-500 ${
                      isLit
                        ? isGenerate
                          ? "bg-warm shadow-[0_0_10px_rgba(242,184,75,0.6)]"
                          : "bg-cool shadow-[0_0_10px_rgba(94,234,212,0.5)]"
                        : "bg-muted-dim"
                    }`}
                    style={{ transitionDelay: `${i * 120}ms` }}
                  />
                  {item}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-wrap gap-3.5 mt-10 transition-all duration-700 ease-out ${
            ctaVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3"
          }`}
        >
          <a
            href="https://github.com/RaFaSMK"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[12.5px] tracking-wide px-5 py-2.5 rounded-md border border-warm text-warm transition-all duration-200 hover:bg-warm/[0.08] hover:shadow-[0_0_20px_rgba(242,184,75,0.15)]"
          >
            <VectorText trigger={ctaVisible} delay={100}>GitHub</VectorText>
          </a>
          <a
            href="https://www.linkedin.com/in/rafael-chaves-souza-a856b524b/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[12.5px] tracking-wide px-5 py-2.5 rounded-md border border-border text-text transition-all duration-200 hover:border-cool hover:text-cool hover:bg-cool/[0.06] hover:shadow-[0_0_20px_rgba(94,234,212,0.1)]"
          >
            <VectorText trigger={ctaVisible} delay={200}>LinkedIn</VectorText>
          </a>
          <a
            href="mailto:rafael012chavess@gmail.com"
            className="font-mono text-[12.5px] tracking-wide px-5 py-2.5 rounded-md border border-border text-text transition-all duration-200 hover:border-cool hover:text-cool hover:bg-cool/[0.06] hover:shadow-[0_0_20px_rgba(94,234,212,0.1)]"
          >
            <VectorText trigger={ctaVisible} delay={300}>Email</VectorText>
          </a>
        </div>
      </div>
    </section>
  );
}
