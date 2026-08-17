"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projetos" },
  { href: "/about", label: "Sobre" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center px-[6vw] py-7 border-b border-border">
      <Link
        href="/"
        className="font-mono text-[13px] text-muted tracking-wider hover:text-text transition-colors duration-200"
      >
        rafael<span className="text-cool">.</span>souza
      </Link>

      <div className="flex gap-5 sm:gap-9 font-mono text-[12px] tracking-[0.12em] uppercase">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
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
    </nav>
  );
}
