import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { Reveal } from "@/components/ScrollReveal/ScrollReveal";
import { VectorText } from "@/components/VectorText/VectorText";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import { projects } from "@/data/projects";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);
  return {
    title: dictionary.projectsPage.title,
    description: dictionary.projectsPage.metaDescription,
  };
}

export default async function ProjectsPage({ params }: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);
  const t = dictionary.projectsPage;

  const translatedProjects = projects.map(p => ({
    ...p,
    name: t.names[p.translationKey],
    description: t.projects[p.translationKey],
    context: t.contexts[p.context]
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
            <Reveal key={project.name} delay={(i % 3) * 80} className="h-full">
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}