"use client";

import { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-start md:justify-between items-center px-[6vw] py-4 md:py-7 border-b border-border bg-bg/80 backdrop-blur-md">
        <Link
          href={`/${lang}`}
          className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 font-mono text-[17px] text-muted tracking-wider hover:text-text transition-colors duration-200 z-50"
        >
          rafael<span className="text-cool">.</span>souza
        </Link>

        <div className="hidden md:flex items-center gap-8">
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

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center gap-[6px] z-50 w-8 h-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-8 h-[2px] bg-text transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
          <span className={`w-8 h-[2px] bg-text transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`w-8 h-[2px] bg-text transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
        </button>
      </nav>

      {/* Overlay Backdrop for Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-[100dvh] w-64 bg-bg border-r border-border z-40 flex flex-col pt-24 pb-8 px-8 transition-transform duration-300 md:hidden shadow-2xl ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 font-mono text-xl tracking-[0.12em] uppercase mt-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== `/${lang}` && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`pb-1 border-b transition-colors duration-200 w-fit ${
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
        
        {/* Mobile Language Switcher */}
        <div className="flex justify-center gap-8 mt-auto border-t border-border pt-8">
          <Link 
            href={`/pt${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`}
            onClick={() => setIsMenuOpen(false)}
            className={`text-4xl hover:scale-110 transition-transform ${lang === 'pt' ? 'opacity-100 grayscale-0' : 'opacity-50 grayscale hover:opacity-80 hover:grayscale-0'}`}
            title="Português"
          >
            🇧🇷
          </Link>
          <Link 
            href={`/en${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`}
            onClick={() => setIsMenuOpen(false)}
            className={`text-4xl hover:scale-110 transition-transform ${lang === 'en' ? 'opacity-100 grayscale-0' : 'opacity-50 grayscale hover:opacity-80 hover:grayscale-0'}`}
            title="English"
          >
            🇺🇸
          </Link>
        </div>
      </div>
    </>
  );
}
