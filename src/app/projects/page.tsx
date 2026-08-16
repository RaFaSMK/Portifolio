import type { Metadata } from "next";
import { ProjectsContent } from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos desenvolvidos por Rafael Souza — APIs, pipelines de IA, plataformas web e aplicativos mobile.",
};

const projects = [
  {
    name: "project-products",
    description:
      "API de microserviços com NestJS + MongoDB: Auth Service (JWT/RBAC) e API Service (CRUD de produtos), com observabilidade via Prometheus/Grafana e testes de carga com k6.",
    url: "https://github.com/RaFaSMK/project-products",
    language: "TypeScript",
    languageColor: "#3178c6",
    emoji: "🏗️",
  },
  {
    name: "RAG",
    description:
      "Pipeline de Retrieval-Augmented Generation em Python: ingestão de documentos, chunking, embeddings, armazenamento vetorial (ChromaDB) e geração de respostas com LLM (Llama 3) via LangChain.",
    url: "https://github.com/RaFaSMK/RAG",
    language: "Python",
    languageColor: "#3572A5",
    emoji: "🔎",
  },
  {
    name: "PI-Equaly",
    description:
      "Plataforma web para conectar Pessoas com Deficiência a vagas de emprego. Back-end com Node.js e PostgreSQL, interface com React/Next.js e Tailwind CSS, orquestrado com Docker.",
    url: "https://github.com/RaFaSMK/PI-Equaly",
    language: "TypeScript",
    languageColor: "#3178c6",
    emoji: "♿",
  },
  {
    name: "hustle-tracker",
    description:
      "Aplicativo mobile multiplataforma de gestão de inventário e vendas desenvolvido com React Native, com integração direta a banco de dados em nuvem via GCP/Firebase.",
    url: "https://github.com/RaFaSMK/hustle-tracker",
    language: "JavaScript",
    languageColor: "#f1e05a",
    emoji: "📦",
  },
  {
    name: "n8n-automations",
    description:
      "Workflows de automação de processos com n8n — integração entre serviços, automatização de tarefas repetitivas e orquestração de fluxos de trabalho.",
    url: "https://github.com/RaFaSMK/n8n-automations",
    language: "JavaScript",
    languageColor: "#f1e05a",
    emoji: "⚙️",
  },
  {
    name: "mini_pedidos",
    description:
      "Desafio técnico de sistema de pedidos fullstack — desenvolvido como desafio de vaga para a OTicket, demonstrando habilidades em desenvolvimento ponta a ponta.",
    url: "https://github.com/RaFaSMK/mini_pedidos",
    language: "TypeScript",
    languageColor: "#3178c6",
    emoji: "🧾",
  },
];

export default function ProjectsPage() {
  return <ProjectsContent projects={projects} />;
}
