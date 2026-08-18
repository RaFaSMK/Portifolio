"use client";

import { Reveal } from "@/components/ScrollReveal/ScrollReveal";
import { VectorText } from "@/components/VectorText/VectorText";

interface ContactSectionProps {
  dictionary?: {
    title: string;
    description: string;
  };
}

export function ContactSection({ dictionary }: ContactSectionProps) {
  return (
    <section className="py-20 px-[6vw] max-w-6xl mx-auto">
      <Reveal>
        {(isVisible) => (
          <>
            <h2 className="font-display font-[560] text-3xl mb-2 text-text">
              <VectorText trigger={isVisible}>{dictionary?.title || "Contato"}</VectorText>
            </h2>
            <p className="text-muted text-[17px] mb-8">
              <VectorText trigger={isVisible} delay={150} duration={1200}>{dictionary?.description || "Vamos conversar? Entre em contato por qualquer um dos canais abaixo."}</VectorText>
            </p>
          </>
        )}
      </Reveal>

      <div className="flex flex-wrap gap-3">
        {[
          {
            label: "GitHub",
            href: "https://github.com/RaFaSMK",
            primary: true,
          },
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/rafael-chaves-souza-a856b524b/",
          },
          {
            label: "Email",
            href: "mailto:rafael012chavess@gmail.com",
          },
        ].map((link, i) => (
          <Reveal key={link.label} delay={i * 100 + 200}>
            <a
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={`font-mono text-[14.5px] tracking-wide px-5 py-2.5 rounded-md border transition-all duration-200 ${
                link.primary
                  ? "border-warm text-warm hover:bg-warm/[0.08] hover:shadow-[0_0_20px_rgba(242,184,75,0.15)]"
                  : "border-border text-text hover:border-cool hover:text-cool hover:bg-cool/[0.06] hover:shadow-[0_0_20px_rgba(94,234,212,0.1)]"
              }`}
            >
              <VectorText delay={i * 100 + 300}>{link.label}</VectorText>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
