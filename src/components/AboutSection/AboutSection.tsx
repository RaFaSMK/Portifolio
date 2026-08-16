"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-foreground">Sobre Mim</h2>
          <p className="text-muted-foreground leading-relaxed">
            Estudante do 6º semestre de Engenharia de Software e desenvolvedor Fullstack, 
            atuando ponta a ponta em interfaces (React/Next.js), APIs REST (Node.js/Express) 
            e banco de dados. Tenho interesse genuíno em IA generativa — construí um pipeline 
            de RAG próprio (LangChain, ChromaDB, embeddings e integração com LLMs) com apoio 
            de ferramentas de IA no fluxo de desenvolvimento. Claude, Cursor e Gemini fazem 
            parte da minha rotina diária de código.
          </p>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-foreground">Trabalho & Experiência</h2>
          <div className="space-y-4">
            <ExperienceItem
              period="Fev 2026 – Presente"
              company="OTicket Gestão de Entretenimentos"
              role="Desenvolvedor Fullstack"
            />
            <ExperienceItem
              period="Out 2025 – Fev 2026"
              company="OTicket Gestão de Entretenimentos"
              role="Estagiário de Desenvolvimento Fullstack"
            />
            <ExperienceItem
              period="Mar 2025 – Out 2025"
              company="Prefeitura Municipal de Franca"
              role="Estagiário de Desenvolvimento Web"
            />
            <ExperienceItem
              period="Set 2024 – Mar 2025"
              company="Prefeitura Municipal de Franca"
              role="Estagiário de Help Desk"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceItem({
  period,
  company,
  role,
}: {
  period: string;
  company: string;
  role: string;
}) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="flex flex-col items-center">
        <div className="w-2.5 h-2.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors duration-300 mt-1.5" />
        <div className="w-px h-full bg-border min-h-[40px]" />
      </div>
      <div className="pb-4">
        <span className="text-xs text-muted-foreground font-mono">{period}</span>
        <p className="text-sm font-medium text-foreground">{role}</p>
        <p className="text-xs text-muted-foreground">{company}</p>
      </div>
    </div>
  );
}
