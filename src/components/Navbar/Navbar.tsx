"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";

interface NavbarProps {
  dictionary: {
    home: string;
    projects: string;
    about: string;
  };
  lang: Locale;
}

export function Navbar({ dictionary, lang }: NavbarProps) {
  const pathname = usePathname();

  const navItems = [
    { href: `/${lang}`, label: dictionary.home },
    { href: `/${lang}/projects`, label: dictionary.projects },
    { href: `/${lang}/about`, label: dictionary.about },
  ];

  // Function to get the pathname without the locale for the language switcher
  const getPathnameWithoutLocale = () => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    if (segments.length > 1 && (segments[1] === "pt" || segments[1] === "en")) {
      segments.splice(1, 1);
    }
    const newPath = segments.join("/");
    return newPath === "" ? "/" : newPath;
  };

  const pathWithoutLocale = getPathnameWithoutLocale();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-[6vw] py-7 border-b border-border bg-bg/80 backdrop-blur-md">
      <Link
        href={`/${lang}`}
        className="font-mono text-[17px] text-muted tracking-wider hover:text-text transition-colors duration-200"
      >
        rafael<span className="text-cool">.</span>souza
      </Link>

      <div className="flex items-center gap-8">
        <div className="flex gap-5 sm:gap-9 font-mono text-[16px] tracking-[0.12em] uppercase">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== `/${lang}` && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`pb-1 border-b transition-colors duration-200 ${
                  isActive
                    ? "text-text border-cool"
                    : "text-muted border-transparent hover:text-text hover:border-cool"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        
        {/* Language Switcher */}
        <div className="flex gap-2 items-center border-l border-border pl-8">
          <Link 
            href={`/pt${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`}
            className={`text-2xl hover:scale-110 transition-transform ${lang === 'pt' ? 'opacity-100 grayscale-0' : 'opacity-50 grayscale hover:opacity-80 hover:grayscale-0'}`}
            title="Português"
          >
            🇧🇷
          </Link>
          <Link 
            href={`/en${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`}
            className={`text-2xl hover:scale-110 transition-transform ${lang === 'en' ? 'opacity-100 grayscale-0' : 'opacity-50 grayscale hover:opacity-80 hover:grayscale-0'}`}
            title="English"
          >
            🇺🇸
          </Link>
        </div>
      </div>
    </nav>
  );
}
