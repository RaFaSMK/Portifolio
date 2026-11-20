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

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);
  return {
    metadataBase: new URL("https://rafasmk.vercel.app"),
    title: { default: dictionary.metadata.title, template: "%s | Rafael Souza" },
    description: dictionary.metadata.description,
    keywords: ["Rafael Souza", "TypeScript", "Node.js", "React", "Next.js", "PostgreSQL", "AWS", "Python"],
    authors: [{ name: "Rafael Chaves Souza" }],
    openGraph: {
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      type: "website",
      locale: lang === "pt" ? "pt_BR" : "en_US",
    },
  };
}

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
