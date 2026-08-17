import { Hero } from "@/components/Hero/Hero";
import { PipelineTracker } from "@/components/PipelineTracker/PipelineTracker";
import { AboutSection } from "@/components/AboutSection/AboutSection";
import { TechStack } from "@/components/TechStack/TechStack";
import { ContactSection } from "@/components/ContactSection/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PipelineTracker />
      <AboutSection />
      <PipelineTracker />
      <TechStack />
      <PipelineTracker />
      <ContactSection />
    </>
  );
}
