import { VectorText } from "@/components/VectorText/VectorText";

interface ProjectCardProps {
  name: string;
  description: string;
  url: string;
  stack: readonly string[];
  context: string;
}

export function ProjectCard({ name, description, url, stack, context }: ProjectCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-lg border border-border p-5 transition-colors duration-200 hover:border-cool"
    >
      <p className="font-mono text-sm text-cool mb-3">{context}</p>
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-medium text-[17px] text-text group-hover:text-cool transition-colors duration-200">
          <VectorText duration={1000}>{name}</VectorText>
        </h3>
      </div>

      <p className="text-base text-muted leading-relaxed mb-5">
        <VectorText delay={150} duration={1200}>{description}</VectorText>
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-sm tracking-wide text-muted px-2 py-0.5 rounded border border-border"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
}
