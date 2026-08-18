import { Hero } from "@/components/Hero/Hero";
import { PipelineTracker } from "@/components/PipelineTracker/PipelineTracker";
import { AboutSection } from "@/components/AboutSection/AboutSection";
import { TechStack } from "@/components/TechStack/TechStack";
import { ContactSection } from "@/components/ContactSection/ContactSection";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);

  return (
    <>
      <Hero dictionary={dictionary.hero} />
      <PipelineTracker />
      <AboutSection dictionary={dictionary.aboutSection} />
      <PipelineTracker />
      <TechStack dictionary={dictionary.techStack} />
      <PipelineTracker />
      <ContactSection dictionary={dictionary.contactSection} />
    </>
  );
}
