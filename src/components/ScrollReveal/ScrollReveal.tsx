"use client";

import { createContext, useEffect, useRef, useState, type ReactNode } from "react";

export const RevealContext = createContext<boolean | undefined>(undefined);

/**
 * Hook que observa um elemento e retorna true quando ele entra no viewport.
 * Usa IntersectionObserver — sem dependências externas.
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Garante que o navegador já pintou o estado "escondido" antes
          // de virar visível. Sem isso, se o elemento já estiver perto da
          // viewport no primeiro mount (ex: depois de um hot-reload que
          // preserva a posição do scroll), o observer pode disparar quase
          // instantaneamente e o browser funde os dois estados num único
          // frame — a transição CSS nunca chega a rodar.
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setIsVisible(true);
            });
          });
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

/**
 * Componente wrapper para scroll-reveal com delay configurável.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode | ((isVisible: boolean) => ReactNode);
  delay?: number;
  className?: string;
}) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
        } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <RevealContext.Provider value={isVisible}>
        {typeof children === "function" ? children(isVisible) : children}
      </RevealContext.Provider>
    </div>
  );
}

import { VectorText } from "../VectorText/VectorText";

export function RevealVector({
  text,
  delay = 0,
  duration = 1500,
  className = "",
}: {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className={className}>
      <VectorText trigger={isVisible} delay={delay} duration={duration}>
        {text}
      </VectorText>
    </div>
  );
}