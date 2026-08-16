"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Sobre Mim
            </h1>
            <p className="text-muted-foreground text-lg">
              Desenvolvedor fullstack de Franca, SP. Construindo interfaces, APIs
              e explorando IA generativa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 4 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="shrink-0"
          >
            <Image
              src="https://github.com/RaFaSMK.png"
              alt="Rafael Souza"
              width={144}
              height={144}
              className="rounded-xl ring-4 ring-border ring-offset-4 ring-offset-background shadow-lg hover:rotate-0 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Bio */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose-custom space-y-6 text-muted-foreground leading-relaxed"
        >
          <p>
            Eu sou o <strong className="text-foreground">Rafael</strong>, estudante de
            Engenharia de Software na Uni-FACEF (6º semestre) e desenvolvedor Fullstack
            na OTicket Gestão de Entretenimentos. Atuo ponta a ponta: desde a construção
            de interfaces com React e Next.js, passando por APIs REST com Node.js e Express,
            até a modelagem e manipulação de bancos de dados com PostgreSQL.
          </p>

          <p>
            Tenho interesse genuíno em <strong className="text-foreground">IA generativa</strong> —
            construí um pipeline de RAG do zero (LangChain, ChromaDB, embeddings e integração
            com LLMs como Llama 3). Ferramentas como Claude, Cursor e Gemini fazem parte da
            minha rotina diária de desenvolvimento, me ajudando a ser mais produtivo e
            escrever código de maior qualidade.
          </p>

          <p>
            Atualmente estou também estudando <strong className="text-foreground">Python</strong> de
            forma ativa, com foco em FastAPI e automações com IA, expandindo meu repertório
            para além do ecossistema JavaScript. Tenho facilidade para aprender novas tecnologias
            de forma autônoma e gosto de testar na prática.
          </p>

          <p>
            Antes da OTicket, passei pela Prefeitura Municipal de Franca, onde comecei como
            estagiário de Help Desk e evoluí para desenvolvimento web, criando interfaces
            com Next.js para sistemas internos de urbanismo.
          </p>
        </motion.div>
      </section>

      <div className="border-t border-border" />

      {/* Education & Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-bold mb-6 text-foreground flex items-center gap-2">
              <span className="text-2xl">🎓</span> Formação Acadêmica
            </h2>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground">
                Bacharelado em Engenharia de Software
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Uni-FACEF — Período noturno
              </p>
              <p className="text-xs text-primary font-mono mt-2">Fev 2024 – Dez 2027</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  6º Semestre
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-accent text-muted-foreground">
                  Em andamento
                </span>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-xl font-bold mb-6 text-foreground flex items-center gap-2">
              <span className="text-2xl">📜</span> Certificações
            </h2>
            <div className="space-y-3">
              {[
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
              ].map((cert) => (
                <a
                  key={cert.name}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 hover:border-primary/40 hover:bg-muted/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-background border border-border group-hover:border-primary/30 transition-colors">
                    <img src={cert.icon} alt={cert.org} className="w-5 h-5 group-hover:scale-110 transition-transform" loading="lazy" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">{cert.org}</p>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">{cert.date}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Languages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-xl font-bold mb-8 text-foreground">🌐 Idiomas</h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4 hover:border-primary/40 transition-colors duration-300">
              <span className="text-2xl">🇧🇷</span>
              <div className="text-left">
                <p className="font-medium text-sm text-foreground">Português</p>
                <p className="text-xs text-muted-foreground">Nativo</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4 hover:border-primary/40 transition-colors duration-300">
              <span className="text-2xl">🇺🇸</span>
              <div className="text-left">
                <p className="font-medium text-sm text-foreground">Inglês</p>
                <p className="text-xs text-muted-foreground">Intermediário</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
