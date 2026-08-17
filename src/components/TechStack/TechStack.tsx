"use client";

import { Reveal } from "@/components/ScrollReveal/ScrollReveal";
import { VectorText } from "@/components/VectorText/VectorText";

const categories = [
  {
    title: "Frontend",
    techs: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    title: "Backend",
    techs: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
      { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
    ],
  },
  {
    title: "Dados & Infra",
    techs: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    ],
  },
  {
    title: "IA Generativa & Automação",
    techs: [
      { name: "LangChain", icon: "https://api.iconify.design/simple-icons:langchain.svg?color=%231C3C3C" },
      { name: "ChromaDB", icon: "https://api.iconify.design/simple-icons:databricks.svg?color=%23FF6F00" },
      { name: "Ollama", icon: "https://api.iconify.design/simple-icons:ollama.svg?color=%23888888" },
      { name: "OpenAI", icon: "https://api.iconify.design/simple-icons:openai.svg?color=%23888888" },
      { name: "n8n", icon: "https://api.iconify.design/simple-icons:n8n.svg?color=%23EA4B71" },
      { name: "Claude", icon: "https://api.iconify.design/simple-icons:claude.svg?color=%23D97757" },
      { name: "Cursor", icon: "https://api.iconify.design/simple-icons:cursor.svg?color=%23888888" },
      { name: "Gemini", icon: "https://api.iconify.design/simple-icons:googlegemini.svg?color=%238E75B2" },
    ],
  },
];

export function TechStack() {
  return (
    <section className="py-20 px-[6vw] max-w-6xl mx-auto">
      <Reveal>
        {(isVisible) => (
          <h2 className="font-display font-[560] text-2xl mb-12 text-text">
            <VectorText trigger={isVisible}>Tecnologias & Ferramentas</VectorText>
          </h2>
        )}
      </Reveal>

      <div className="space-y-10">
        {categories.map((category, catIdx) => (
          <Reveal key={category.title} delay={catIdx * 100}>
            {(isVisible) => (
              <>
                <h3 className="font-mono text-[11px] text-muted-dim mb-4 uppercase tracking-[0.12em]">
                  <VectorText trigger={isVisible} delay={catIdx * 100}>{category.title}</VectorText>
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.techs.map((tech, techIdx) => (
                    <div
                      key={tech.name}
                      className={`flex items-center gap-2 px-3 py-2 rounded-md border border-border text-text hover:border-cool hover:text-cool transition-all duration-200 cursor-default opacity-0 ${isVisible ? 'animate-[fade-in-up_0.4s_ease-out_forwards]' : ''}`}
                      style={{ animationDelay: `${techIdx * 50}ms` }}
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-4 h-4"
                        loading="lazy"
                      />
                      <span className="text-[13px]">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
