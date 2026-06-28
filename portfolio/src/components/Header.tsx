"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Stack", href: "/stack" },
  { name: "Certifications", href: "/certifications" },
  { name: "Recommendations", href: "/recommendations" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-white font-medium tracking-tight hover:opacity-80 transition-opacity">
          Your Name
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="mailto:you@example.com"
            className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
          >
            Email
          </a>
        </nav>

        <button
          className="md:hidden text-white/60 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0a0a0a]">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="mailto:you@example.com"
              className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
            >
              Email
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}