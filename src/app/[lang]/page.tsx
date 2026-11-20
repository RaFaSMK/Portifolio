import { Hero } from "@/components/Hero/Hero";
import { PipelineTracker } from "@/components/PipelineTracker/PipelineTracker";
import { AboutSection } from "@/components/AboutSection/AboutSection";
import { TechStack } from "@/components/TechStack/TechStack";
import { ContactSection } from "@/components/ContactSection/ContactSection";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { Reveal } from "@/components/ScrollReveal/ScrollReveal";
import { projects } from "@/data/projects";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);

  return (
    <>
      <Hero dictionary={dictionary.hero} lang={lang} />
      <PipelineTracker />
      <section className="py-20 px-[6vw] max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h2 className="font-display font-[560] text-3xl">{dictionary.projectsPage.featuredTitle}</h2>
          <Link href={`/${lang}/projects`} className="font-mono text-sm text-cool underline underline-offset-4">
            {dictionary.projectsPage.allProjectsLabel}
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {projects.filter((project) => ["projectProducts", "miniPedidos", "iot"].includes(project.translationKey)).map((project) => (
            <Reveal key={project.translationKey} className="h-full">
              <ProjectCard {...project} name={dictionary.projectsPage.names[project.translationKey]} description={dictionary.projectsPage.projects[project.translationKey]} context={dictionary.projectsPage.contexts[project.context]} />
            </Reveal>
          ))}
        </div>
      </section>
      <PipelineTracker />
      <AboutSection dictionary={dictionary.aboutSection} />
      <PipelineTracker />
      <TechStack dictionary={dictionary.techStack} />
      <PipelineTracker />
      <ContactSection dictionary={dictionary.contactSection} />
    </>
  );
}
