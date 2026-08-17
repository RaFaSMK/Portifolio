import type { Metadata } from "next";
import Image from "next/image";
import { PipelineTracker } from "@/components/PipelineTracker/PipelineTracker";
import { Reveal } from "@/components/ScrollReveal/ScrollReveal";
import { VectorText } from "@/components/VectorText/VectorText";

export const metadata: Metadata = {
  title: "Sobre Mim",
  description:
    "Rafael Chaves Souza — Desenvolvedor Fullstack, estudante de Engenharia de Software na Uni-FACEF. Experiência com React, Node.js, IA Generativa e Python.",
};

const certifications = [
  {
    name: "Programming with PL/SQL",
    org: "Oracle",
    date: "Jul 2026",
    url: "https://drive.google.com/file/d/1F_3LKL6IzV2T9AMB2LIVVcA9jliLIuln/view?usp=sharing",
    icon: "https://api.iconify.design/simple-icons:oracle.svg?color=%23F80000",
  },
  {
    name: "Programming with SQL",
    org: "Oracle",
    date: "Jan 2026",
    url: "https://drive.google.com/file/d/1k2NTI1knhUwwX5U6LuWB3mJqxQeTtJ_9/view?usp=sharing",
    icon: "https://api.iconify.design/simple-icons:oracle.svg?color=%23F80000",
  },
  {
    name: "React",
    org: "RocketSeat",
    date: "Out 2025",
    url: "https://app.rocketseat.com.br/certificates/f09f6a0f-e588-4e0e-bf39-e3da48f2f480",
    icon: "https://api.iconify.design/lucide:rocket.svg?color=%238B5CF6",
  },
  {
    name: "Next.js",
    org: "RocketSeat",
    date: "Set 2025",
    url: "https://app.rocketseat.com.br/certificates/2eaa0d0d-3e2d-454f-846f-38153f32fa88",
    icon: "https://api.iconify.design/lucide:rocket.svg?color=%238B5CF6",
  },
  {
    name: "Database Design",
    org: "Oracle",
    date: "Jul 2025",
    url: "https://drive.google.com/file/d/1Y8UALBjG-mZM0EOCgxvGLjZX-S1_0ZTj/view?usp=sharing",
    icon: "https://api.iconify.design/simple-icons:oracle.svg?color=%23F80000",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-16 pb-12 px-[6vw] max-w-6xl mx-auto">
        <Reveal>
          <>
            <h1 className="font-display font-[560] text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight mb-4">
              <VectorText>Sobre Mim</VectorText>
            </h1>
            <p className="text-muted text-[15px]">
              <VectorText delay={150} duration={1500}>
                Desenvolvedor fullstack de Franca, SP. Construindo interfaces, APIs e
                explorando IA generativa.
              </VectorText>
            </p>
          </>
        </Reveal>
      </section>

      <div className="border-t border-border" />

      {/* Bio */}
      <section className="py-16 px-[6vw] max-w-3xl mx-auto">
        <div className="space-y-5 text-muted text-[15px] leading-relaxed">
          <Reveal>
            <p>
              <VectorText delay={150} duration={1500} hideCursor>Eu sou o </VectorText><strong className="text-text font-medium"><VectorText delay={150} duration={1500} hideCursor>Rafael</VectorText></strong><VectorText delay={150} duration={1500}>, estudante de Engenharia de Software na Uni-FACEF (6º semestre) e desenvolvedor Fullstack na OTicket Gestão de Entretenimentos. Atuo ponta a ponta: desde a construção de interfaces com React e Next.js, passando por APIs REST com Node.js e Express, até a modelagem e manipulação de bancos de dados com PostgreSQL.</VectorText>
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p>
              <VectorText delay={250} duration={1500} hideCursor>Tenho interesse genuíno em </VectorText>
              <strong className="text-text font-medium"><VectorText delay={250} duration={1500} hideCursor>IA generativa</VectorText></strong>
              <VectorText delay={250} duration={1500}> — construí um pipeline de RAG do zero (LangChain, ChromaDB, embeddings e integração com LLMs como Llama 3). Ferramentas como Claude, Cursor e Gemini fazem parte da minha rotina diária de desenvolvimento, me ajudando a ser mais produtivo e escrever código de maior qualidade.</VectorText>
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              <VectorText delay={350} duration={1500} hideCursor>Atualmente estou também estudando </VectorText>
              <strong className="text-text font-medium"><VectorText delay={350} duration={1500} hideCursor>Python</VectorText></strong>
              <VectorText delay={350} duration={1500}> de forma ativa, com foco em FastAPI e automações com IA, expandindo meu repertório para além do ecossistema JavaScript. Tenho facilidade para aprender novas tecnologias de forma autônoma e gosto de testar na prática.</VectorText>
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p>
              <VectorText delay={450} duration={1500}>Antes da OTicket, passei pela Prefeitura Municipal de Franca, onde comecei como estagiário de Help Desk e evoluí para desenvolvimento web, criando interfaces com Next.js para sistemas internos de urbanismo.</VectorText>
            </p>
          </Reveal>
        </div>
      </section>

      <PipelineTracker />

      {/* Education & Certifications */}
      <section className="py-16 px-[6vw] max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <Reveal>
              <h2 className="font-display font-[560] text-xl mb-6 text-text">
                <VectorText>Formação Acadêmica</VectorText>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="rounded-lg border border-border p-5">
                <h3 className="font-medium text-[15px] text-text">
                  Bacharelado em Engenharia de Software
                </h3>
                <p className="text-[13px] text-muted mt-1">
                  <VectorText delay={200} duration={1000}>Uni-FACEF — Período noturno</VectorText>
                </p>
                <p className="font-mono text-[11px] text-cool mt-2 tracking-wide">
                  Fev 2024 – Dez 2027
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="font-mono text-[10.5px] px-2 py-0.5 rounded border border-cool/30 text-cool tracking-wide">
                    6º Semestre
                  </span>
                  <span className="font-mono text-[10.5px] px-2 py-0.5 rounded border border-border text-muted-dim tracking-wide">
                    Em andamento
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Certifications */}
          <div>
            <Reveal delay={100}>
              <h2 className="font-display font-[560] text-xl mb-6 text-text">
                <VectorText>Certificações</VectorText>
              </h2>
            </Reveal>
            <div className="space-y-2">
              {certifications.map((cert, i) => (
                <Reveal key={cert.name} delay={140 + i * 60}>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-lg border border-border p-4 transition-colors duration-200 hover:border-cool"
                  >
                    <div className="w-9 h-9 rounded-md flex items-center justify-center shrink-0 border border-border group-hover:border-cool/30 transition-colors">
                      <img
                        src={cert.icon}
                        alt={cert.org}
                        className="w-4 h-4"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-medium text-text group-hover:text-cool transition-colors truncate">
                        {cert.name}
                      </p>
                      <p className="text-[11px] text-muted">{cert.org}</p>
                    </div>
                    <span className="font-mono text-[11px] text-muted-dim tracking-wide shrink-0">
                      {cert.date}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-muted-dim opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PipelineTracker />

      {/* Languages */}
      <section className="py-16 px-[6vw] max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-display font-[560] text-xl mb-8 text-text">
            <VectorText>Idiomas</VectorText>
          </h2>
        </Reveal>
        <div className="flex flex-wrap gap-4">
          <Reveal delay={80}>
            <div className="flex items-center gap-3 rounded-lg border border-border px-5 py-3.5 hover:border-cool transition-colors duration-200">
              <span className="text-xl">🇧🇷</span>
              <div>
                <p className="text-[13px] font-medium text-text">
                  <VectorText delay={150}>Português</VectorText>
                </p>
                <p className="font-mono text-[10.5px] text-muted-dim tracking-wide">
                  <VectorText delay={250}>Nativo</VectorText>
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="flex items-center gap-3 rounded-lg border border-border px-5 py-3.5 hover:border-cool transition-colors duration-200">
              <span className="text-xl">🇺🇸</span>
              <div>
                <p className="text-[13px] font-medium text-text">
                  <VectorText delay={200}>Inglês</VectorText>
                </p>
                <p className="font-mono text-[10.5px] text-muted-dim tracking-wide">
                  <VectorText delay={300}>Intermediário</VectorText>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}