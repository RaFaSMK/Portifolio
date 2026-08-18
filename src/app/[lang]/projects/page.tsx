import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { Reveal } from "@/components/ScrollReveal/ScrollReveal";
import { VectorText } from "@/components/VectorText/VectorText";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);
  return {
    title: dictionary.projectsPage.title,
    description: dictionary.projectsPage.metaDescription,
  };
}

const projects = [
  {
    name: "project-products",
    translationKey: "projectProducts",
    description: "API de microserviços com NestJS + MongoDB: Auth Service (JWT/RBAC) e API Service (CRUD de produtos), com observabilidade via Prometheus/Grafana e testes de carga com k6.",
    url: "https://github.com/RaFaSMK/project-products",
    stack: ["NestJS", "MongoDB", "JWT", "Prometheus", "Grafana", "k6"],
  },
  {
    name: "RAG",
    translationKey: "rag",
    description: "Pipeline de Retrieval-Augmented Generation em Python: ingestão de documentos, chunking, embeddings, armazenamento vetorial (ChromaDB) e geração de respostas com LLM (Llama 3) via LangChain.",
    url: "https://github.com/RaFaSMK/RAG",
    stack: ["Python", "LangChain", "ChromaDB", "Ollama", "Llama 3"],
  },
  {
    name: "PI-Equaly",
    translationKey: "piEqualy",
    description: "Plataforma web para conectar Pessoas com Deficiência a vagas de emprego. Back-end com Node.js e PostgreSQL, interface com React/Next.js e Tailwind CSS, orquestrado com Docker.",
    url: "https://github.com/RaFaSMK/PI-Equaly",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Docker", "Tailwind"],
  },
  {
    name: "hustle-tracker",
    translationKey: "hustleTracker",
    description: "Aplicativo mobile multiplataforma de gestão de inventário e vendas desenvolvido com React Native, com integração direta a banco de dados em nuvem via GCP/Firebase.",
    url: "https://github.com/RaFaSMK/hustle-tracker",
    stack: ["React Native", "GCP", "Firebase"],
  },
  {
    name: "n8n-automations",
    translationKey: "n8nAutomations",
    description: "Workflows de automação de processos com n8n — integração entre serviços, automatização de tarefas repetitivas e orquestração de fluxos de trabalho.",
    url: "https://github.com/RaFaSMK/n8n-automations",
    stack: ["n8n", "JavaScript", "API"],
  },
  {
    name: "mini_pedidos",
    translationKey: "miniPedidos",
    description: "Desafio técnico de sistema de pedidos fullstack — desenvolvido como desafio de vaga para a OTicket, demonstrando habilidades em desenvolvimento ponta a ponta.",
    url: "https://github.com/RaFaSMK/mini_pedidos",
    stack: ["TypeScript", "Node.js", "React"],
  },
];

export default async function ProjectsPage({ params }: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);
  const t = dictionary.projectsPage;

  const translatedProjects = projects.map(p => ({
    ...p,
    description: t.projects[p.translationKey as keyof typeof t.projects] || p.description
  }));

  return (
    <>
      {/* Header */}
      <section className="pt-16 pb-12 px-[6vw] max-w-6xl mx-auto">
        <Reveal>
          <>
            <h1 className="font-display font-[560] text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight mb-4">
              <VectorText>{t.title}</VectorText>
            </h1>
            <p className="text-muted text-[17px] max-w-xl">
              <VectorText delay={150} duration={1500}>
                {t.subtitle}
              </VectorText>
            </p>
          </>
        </Reveal>
      </section>

      <div className="border-t border-border" />

      {/* Grid */}
      <section className="py-16 px-[6vw] max-w-6xl mx-auto">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {translatedProjects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 3) * 80}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}