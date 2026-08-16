"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projetos" },
  { href: "/about", label: "Sobre" },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="glass rounded-full px-2 py-1.5 flex items-center gap-1 shadow-lg shadow-black/10">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-primary/10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </Link>
          );
        })}

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-1 p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors duration-300 hover:bg-accent/50"
          aria-label="Alternar tema"
        >
          {mounted ? (
            theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )
          ) : (
            <div className="w-4 h-4" />
          )}
        </button>
      </div>
    </motion.nav>
  );
}
