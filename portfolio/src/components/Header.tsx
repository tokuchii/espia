"use client";

import Link from "next/link";
import { useState } from "react";
import CommandPalette from "./ui/CommandPalette";
import LiveViewer from "./ui/LiveViewer";

const contentLinks = [
  { name: "Shop", href: "/shop" },
  { name: "Blog", href: "/blog" },
  { name: "Gear", href: "/gear" },
  { name: "Resources", href: "/resources" },
];

const businessLinks = [
  { name: "Collabs", href: "/collabs" },
  { name: "Consulting", href: "/consulting" },
];

const profileLinks = [
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Stack", href: "/stack" },
  { name: "Certifications", href: "/certifications" },
  { name: "Recommendations", href: "/recommendations" },
  { name: "Affiliations", href: "/affiliations" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Left side: Logo/Name */}
        <Link href="/" className="text-foreground font-medium tracking-tight hover:opacity-80 transition-opacity">
          Your Name
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <div className="flex flex-col md:flex-row space-x-8 md:space-x-6">

            {/* Content Group */}
            <div className="space-y-1 md:space-y-0 md:space-x-6">
              <span className="text-xs uppercase tracking-widest text-muted">Content</span>
              <div className="flex space-x-4">
                {contentLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Business Group */}
            <div className="space-y-1 md:space-y-0 md:space-x-6 border-l border-border pl-6 md:pl-8">
              <span className="text-xs uppercase tracking-widest text-muted">Business</span>
              <div className="flex space-x-4">
                {businessLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Profile Group */}
            <div className="space-y-1 md:space-y-0 md:space-x-6 border-l border-border pl-6 md:pl-8">
              <span className="text-xs uppercase tracking-widest text-muted">Profile</span>
              <div className="flex space-x-4">
                {profileLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Search button and live viewer */}
        <div className="flex items-center gap-4">
          {/* Live Viewer Counter */}
          <LiveViewer />

          {/* Search / Ask Button (triggers command palette) */}
          <div className="relative">
            <button
              className="flex items-center gap-2 px-3 py-1 rounded-lg border border-border bg-surface-alt text-xs uppercase tracking-widest text-muted hover:text-white hover:bg-surface transition-colors"
              onClick={() => {
                // Trigger command palette via custom event
                const event = new KeyboardEvent('keydown', {
                  key: 'k',
                  metaKey: true,
                  bubbles: true,
                  cancelable: true
                });
                document.dispatchEvent(event);
              }}
            >
              <span>Search / ask anything</span>
              <span className="flex items-center gap-1 text-[10px] bg-surface px-1 py-0.5 rounded text-muted">
                ⌘K
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-[#0a0a0a]">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {/* Content Group */}
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-muted">Content</span>
              <div className="space-y-1">
                {contentLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Business Group */}
            <div className="space-y-2 border-t border-border pt-4">
              <span className="text-xs uppercase tracking-widest text-muted">Business</span>
              <div className="space-y-1">
                {businessLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Profile Group */}
            <div className="space-y-2 border-t border-border pt-4">
              <span className="text-xs uppercase tracking-widest text-muted">Profile</span>
              <div className="space-y-1">
                {profileLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
      
      {/* Command Portal - will be handled by the global keystroke handler */}
      <CommandPalette />
    </header>
  );
}
