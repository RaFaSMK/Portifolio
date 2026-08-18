import { VectorText } from "@/components/VectorText/VectorText";

interface ProjectCardProps {
  name: string;
  description: string;
  url: string;
  stack: string[];
}

export function ProjectCard({ name, description, url, stack }: ProjectCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg border border-border p-5 transition-colors duration-200 hover:border-cool"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-medium text-[17px] text-text group-hover:text-cool transition-colors duration-200">
          <VectorText duration={1000}>{name}</VectorText>
        </h3>
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
          className="text-muted-dim shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </div>

      <p className="text-[15px] text-muted leading-relaxed mb-4 line-clamp-3">
        <VectorText delay={150} duration={1200}>{description}</VectorText>
      </p>

      <div className="flex flex-wrap gap-1.5">
        {stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[12.5px] tracking-wide text-muted-dim px-2 py-0.5 rounded border border-border"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
}
