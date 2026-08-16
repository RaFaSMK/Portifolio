"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  name: string;
  description: string;
  url: string;
  language: string;
  languageColor: string;
  emoji: string;
}

export function ProjectCard({
  name,
  description,
  url,
  language,
  languageColor,
  emoji,
}: ProjectCardProps) {
  const repoPath = url.replace("https://github.com/", "");
  const ogImage = `https://opengraph.githubassets.com/1/${repoPath}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      className="group block rounded-xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
    >
      {/* OG Image */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={ogImage}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
            <span>{emoji}</span>
            <span>{name}</span>
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-muted-foreground shrink-0 mt-0.5"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center gap-3 pt-1">
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: languageColor }}
            />
            {language}
          </span>
        </div>
      </div>
    </motion.a>
  );
}
