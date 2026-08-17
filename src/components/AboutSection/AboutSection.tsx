"use client";

import { Reveal } from "@/components/ScrollReveal/ScrollReveal";

export function AboutSection() {
  return (
    <section className="py-20 px-[6vw] max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* About Me */}
        <Reveal>
          <h2 className="font-display font-[560] text-2xl mb-4 text-text">
            Sobre Mim
          </h2>
          <p className="text-muted leading-relaxed text-[15px]">
            Estudante do 6º semestre de Engenharia de Software e desenvolvedor Fullstack,
            atuando ponta a ponta em interfaces (React/Next.js), APIs REST (Node.js/Express)
            e banco de dados. Tenho interesse genuíno em IA generativa — construí um pipeline
            de RAG próprio (LangChain, ChromaDB, embeddings e integração com LLMs) com apoio
            de ferramentas de IA no fluxo de desenvolvimento. Claude, Cursor e Gemini fazem
            parte da minha rotina diária de código.
          </p>
        </Reveal>

        {/* Experience */}
        <Reveal delay={150}>
          <h2 className="font-display font-[560] text-2xl mb-4 text-text">
            Trabalho & Experiência
          </h2>
          <div className="space-y-1">
            <ExperienceItem
              period="Fev 2026 – Presente"
              company="OTicket Gestão de Entretenimentos"
              role="Desenvolvedor Fullstack"
              delay={0}
            />
            <ExperienceItem
              period="Out 2025 – Fev 2026"
              company="OTicket Gestão de Entretenimentos"
              role="Estagiário de Desenvolvimento Fullstack"
              delay={80}
            />
            <ExperienceItem
              period="Mar 2025 – Out 2025"
              company="Prefeitura Municipal de Franca"
              role="Estagiário de Desenvolvimento Web"
              delay={160}
            />
            <ExperienceItem
              period="Set 2024 – Mar 2025"
              company="Prefeitura Municipal de Franca"
              role="Estagiário de Help Desk"
              delay={240}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ExperienceItem({
  period,
  company,
  role,
  delay = 0,
}: {
  period: string;
  company: string;
  role: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="flex items-start gap-4 group py-3">
        <div className="flex flex-col items-center pt-1.5">
          <div className="w-[6px] h-[6px] rounded-full bg-cool shrink-0 group-hover:bg-warm group-hover:shadow-[0_0_8px_rgba(242,184,75,0.4)] transition-all duration-300" />
          <div className="w-px flex-1 bg-border min-h-[32px]" />
        </div>
        <div>
          <span className="font-mono text-[11px] text-muted-dim tracking-wide">
            {period}
          </span>
          <p className="text-[14px] font-medium text-text mt-0.5">{role}</p>
          <p className="text-[12px] text-muted">{company}</p>
        </div>
      </div>
    </Reveal>
  );
}
