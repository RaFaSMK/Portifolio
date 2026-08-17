"use client";

import { useEffect, useState, useContext } from "react";
import { RevealContext } from "../ScrollReveal/ScrollReveal";

const HEX_CHARS = "0123456789abcdef";
const VECTOR_DIGITS = 6;

// DEBUG: deixa true enquanto investiga, depois volta pra false (ou apaga os logs).
const DEBUG = false;

function randomVector(): string {
  let hex = "";
  for (let i = 0; i < VECTOR_DIGITS; i++) {
    hex += HEX_CHARS[Math.floor(Math.random() * HEX_CHARS.length)];
  }
  return `[${hex}]`;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

type Phase = "waiting" | "resolved" | "vector-typing" | "vector-deleting" | "real-typing";

interface VectorTextProps {
  children: string;
  trigger?: boolean;
  duration?: number;
  delay?: number;
  className?: string;
  hideCursor?: boolean;
}

export function VectorText({
  children,
  trigger,
  duration = 1400,
  delay = 0,
  className = "",
  hideCursor = false,
}: VectorTextProps) {
  const text = children;
  const contextTrigger = useContext(RevealContext);
  const activeTrigger = trigger !== undefined ? trigger : (contextTrigger !== undefined ? contextTrigger : true);

  const [phase, setPhase] = useState<Phase>("waiting");
  const [visibleCount, setVisibleCount] = useState(0);
  const [vector, setVector] = useState("");

  const log = (...args: unknown[]) => {
    if (DEBUG) console.log(`[VectorText:"${text}"]`, ...args);
  };

  useEffect(() => {
    log("useEffect rodou — trigger =", activeTrigger);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      log(
        "prefers-reduced-motion ATIVO no SO/navegador — pulando animação, mostrando texto final direto."
      );
      setPhase("resolved");
      return;
    }

    if (!activeTrigger) {
      log("trigger ainda é false — aguardando (normal antes do elemento entrar na tela).");
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    const schedule = (fn: () => void, ms: number) => {
      timers.push(setTimeout(fn, Math.max(0, ms)));
    };

    const vec = randomVector();
    setVector(vec);

    const actualDuration = duration * 0.4;

    const vecSpeed = clamp((actualDuration * 0.38) / vec.length, 12, 40);
    const delSpeed = clamp(vecSpeed * 0.45, 6, 20);
    const realSpeed = clamp((actualDuration * 0.42) / Math.max(text.length, 1), 10, 40);
    const HOLD = 110;
    const GAP = 60;

    log("disparando animação:", { delay, duration: actualDuration, vec, vecSpeed, delSpeed, realSpeed });

    let t = delay;

    schedule(() => {
      log("fase -> vector-typing");
      setPhase("vector-typing");
      setVisibleCount(0);
    }, t);
    for (let i = 1; i <= vec.length; i++) {
      schedule(() => setVisibleCount(i), t + i * vecSpeed);
    }
    t += vec.length * vecSpeed + HOLD;

    schedule(() => {
      log("fase -> vector-deleting");
      setPhase("vector-deleting");
    }, t);
    for (let i = vec.length - 1; i >= 0; i--) {
      schedule(() => setVisibleCount(i), t + (vec.length - i) * delSpeed);
    }
    t += vec.length * delSpeed + GAP;

    schedule(() => {
      log("fase -> real-typing");
      setPhase("real-typing");
      setVisibleCount(0);
    }, t);
    for (let i = 1; i <= text.length; i++) {
      schedule(() => setVisibleCount(i), t + i * realSpeed);
    }
    t += text.length * realSpeed;

    schedule(() => {
      log("fase -> resolved (fim)");
      setPhase("resolved");
    }, t + 40);

    return () => {
      log("cleanup —", timers.length, "timers limpos");
      timers.forEach(clearTimeout);
    };
  }, [activeTrigger, text, delay, duration]);

  const isVectorPhase = phase === "vector-typing" || phase === "vector-deleting";
  const isRealTyping = phase === "real-typing";
  const isResolved = phase === "resolved";

  const source = isVectorPhase ? vector : text;
  const count = isResolved ? text.length : visibleCount;
  const chars = source.slice(0, count).split("");

  return (
    <span className={className}>
      {/* Texto real, sempre presente para leitores de tela e para SEO. */}
      <span className="sr-only">{text}</span>

      {/* Versão animada, decorativa — escondida de leitores de tela. */}
      <span aria-hidden="true" className="whitespace-pre-wrap">
        <span className={isVectorPhase ? "font-mono" : undefined}>
          {chars.map((ch, i) => {
            const isLeadingChar = isRealTyping && i === chars.length - 1;
            const highlighted = isVectorPhase || isLeadingChar;
            return (
              <span
                key={i}
                style={highlighted ? { color: "var(--cool)" } : undefined}
              >
                {ch}
              </span>
            );
          })}
        </span>
        {!isResolved && !hideCursor && (
          <span className="inline-block w-[0.5em] h-[1em] align-[-0.15em] ml-[1px] bg-cool animate-[blink_1s_step-start_infinite]" />
        )}
      </span>
    </span>
  );
}