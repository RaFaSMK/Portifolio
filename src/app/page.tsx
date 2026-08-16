import { Hero } from "@/components/Hero/Hero";
import { AboutSection } from "@/components/AboutSection/AboutSection";
import { TechStack } from "@/components/TechStack/TechStack";
import { ContactSection } from "@/components/ContactSection/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="border-t border-border" />
      <AboutSection />
      <div className="border-t border-border" />
      <TechStack />
      <div className="border-t border-border" />
      <ContactSection />
    </>
  );
}
