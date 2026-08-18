import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import { Navbar } from "@/components/Navbar/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: {
    default: "Rafael Souza — Desenvolvedor Fullstack",
    template: "%s | Rafael Souza",
  },
  description:
    "Desenvolvedor Fullstack especializado em JavaScript, React, Node.js e IA Generativa. Estudante de Engenharia de Software.",
  keywords: [
    "Rafael Souza",
    "Desenvolvedor Fullstack",
    "React",
    "Next.js",
    "Node.js",
    "IA Generativa",
    "JavaScript",
    "TypeScript",
    "Python",
  ],
  authors: [{ name: "Rafael Chaves Souza" }],
  openGraph: {
    title: "Rafael Souza — Desenvolvedor Fullstack",
    description:
      "Desenvolvedor Fullstack especializado em JavaScript, React, Node.js e IA Generativa.",
    type: "website",
    locale: "pt_BR",
  },
};

import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);

  return (
    <html
      lang={lang}
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-dvh flex flex-col antialiased">
        <Navbar dictionary={dictionary.navbar} lang={lang as Locale} />
        <main className="flex-1 pt-[64px]">{children}</main>
        <footer className="py-8 px-[6vw] border-t border-border">
          <p className="font-mono text-sm text-muted-dim tracking-wide">
            © {new Date().getFullYear()} Rafael Souza
          </p>
        </footer>
      </body>
    </html>
  );
}
