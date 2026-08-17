"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const VECTOR_CHARS = "0123456789abcdef";

function randomChar() {
  return VECTOR_CHARS[Math.floor(Math.random() * VECTOR_CHARS.length)];
}

/**
 * Gera uma string "vetorial" com o mesmo comprimento do texto real,
 * preservando espaços e quebras de linha.
 */
function vectorize(text: string): string {
  return text
    .split("")
    .map((ch) => (ch === " " || ch === "\n" ? ch : randomChar()))
    .join("");
}

/**
 * Componente que exibe texto começando como "vetores" (hex) e decodifica
 * caractere a caractere em uma onda da esquerda pra direita.
 *
 * - `trigger`: quando true, inicia a decodificação.
 * - `duration`: tempo total da animação em ms.
 * - `delay`: delay antes de começar (ms).
 * - `scrambleSpeed`: quantas vezes cada char "embaralha" antes de resolver.
 */
export function VectorText({
  children,
  trigger = true,
  duration = 2000,
  delay = 0,
  className = "",
}: {
  children: string;
  trigger?: boolean;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const text = children;
  const [display, setDisplay] = useState(() => vectorize(text));
  const [resolved, setResolved] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  const animate = useCallback(
    (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);

      const chars = text.split("");
      const totalChars = chars.filter((c) => c !== " " && c !== "\n").length;

      // Wave front: how many chars are fully resolved
      const waveFront = progress * totalChars * 1.3; // 1.3x so it finishes cleanly

      let charIndex = 0;
      const result = chars
        .map((realChar) => {
          if (realChar === " " || realChar === "\n") return realChar;

          const distFromFront = charIndex - waveFront;
          charIndex++;

          if (distFromFront < -2) {
            // Fully resolved
            return realChar;
          } else if (distFromFront < 0) {
            // Scrambling zone — flicker between random and real
            return Math.random() > 0.4 ? realChar : randomChar();
          } else {
            // Still vector
            return randomChar();
          }
        })
        .join("");

      setDisplay(result);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(text);
        setResolved(true);
      }
    },
    [text, duration]
  );

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(text);
      setResolved(true);
      return;
    }

    if (!trigger) {
      // Keep showing vectors, re-randomize occasionally
      const interval = setInterval(() => {
        setDisplay(vectorize(text));
      }, 120);
      return () => clearInterval(interval);
    }

    // Start decode after delay
    const timeout = setTimeout(() => {
      startRef.current = null;
      rafRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [trigger, text, delay, animate]);

  return (
    <span
      className={`${className} ${
        !resolved ? "font-mono" : ""
      } transition-[font-family] duration-300`}
    >
      {display}
    </span>
  );
}
