import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "Sobre Mim",
  description:
    "Rafael Chaves Souza — Desenvolvedor Fullstack, estudante de Engenharia de Software na Uni-FACEF. Experiência com React, Node.js, IA Generativa e Python.",
};

export default function AboutPage() {
  return <AboutContent />;
}
