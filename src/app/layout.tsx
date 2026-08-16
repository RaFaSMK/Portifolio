import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import { Navbar } from "@/components/Navbar/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased font-sans">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <footer className="py-8 text-center text-xs text-muted-foreground border-t border-border">
            <p>© {new Date().getFullYear()} Rafael Souza. Todos os direitos reservados.</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
