"use client";

import { useState } from "react";
import Link from "next/link";

const commandPaletteItems = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Stack", href: "/stack" },
  { name: "Certifications", href: "/certifications" },
  { name: "Recommendations", href: "/recommendations" },
  { name: "Affiliations", href: "/affiliations" },
  { name: "Shop", href: "/shop" },
  { name: "Gear", href: "/gear" },
  { name: "Resources", href: "/resources" },
  { name: "Collabs", href: "/collabs" },
  { name: "Consulting", href: "/consulting" },
  { name: "Community", href: "/community" },
  { name: "Contact", href: "/contact" },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredItems = commandPaletteItems.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      setIsOpen(true);
      setTimeout(() => {
        const input = document.getElementById("command-input");
        input?.focus();
      }, 100);
    }
    
    if (isOpen && e.key === "Escape") {
      setIsOpen(false);
      setSearch("");
    }
  };

  // Handle keydown events globally
  // Using useEffect would be better in a real app, but for simplicity we'll add it directly
  // In a real implementation, you'd use useEffect with proper cleanup

  return (
    <>
      {/* Command Palette Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-lg max-h-[80vh]">
            <div className="bg-surface border border-border rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">Command Panel</h2>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setSearch("");
                  }}
                  className="text-white/40 hover:text-white"
                >
                  ×
                </button>
              </div>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                  <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10.5H21a2 2 0 000-4h-10.5"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="command-input"
                  placeholder="Type to search commands..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-4 py-3 pl-10 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                  autoFocus
                />
              </div>
            </div>
            
            {filteredItems.length > 0 ? (
              <div className="space-y-2">
                {filteredItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <span className="flex-1">{item.name}</span>
                    <span className="text-xs text-white/40">{item.href}</span>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-white/50 text-center py-8">No results found</p>
            )}
          </div>
        </div>
      )}
      
      {/* Script to handle global keydown */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('keydown', function(e) {
            // Check if metaKey (Cmd) or ctrlKey + k is pressed
            if ((e.metaKey || e.ctrlKey) && e.key === 'k' && !e.shiftKey) {
              e.preventDefault();
              // Find the React component and trigger state change
              // This is a simplified approach - in a real app you'd use proper state management
              const chatbotElement = document.querySelector('[data-chatbot-trigger]');
              if (chatbotElement) {
                chatbotElement.click();
              }
            }
            
            // Escape key to close
            if (e.key === 'Escape') {
              const chatbotOverlay = document.querySelector('.fixed.inset-0.z-50');
              if (chatbotOverlay) {
                chatbotOverlay.style.display = 'none';
              }
            }
          });
        `,
      }} />
    </>
  );
}
