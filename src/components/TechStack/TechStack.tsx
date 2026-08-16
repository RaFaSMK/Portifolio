"use client";

import { motion } from "framer-motion";

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
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-bold mb-12 text-center text-foreground"
      >
        Tecnologias & Ferramentas
      </motion.h2>

      <div className="space-y-10">
        {categories.map((category) => (
          <motion.div
            key={category.title}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.techs.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border hover:border-primary/40 transition-colors duration-200 cursor-default"
                >
                  {"icon" in tech ? (
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-5 h-5 opacity-90 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  ) : null}
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors duration-200">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
