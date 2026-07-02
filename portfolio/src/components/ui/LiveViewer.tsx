"use client";

import { useEffect, useState } from "react";

export default function LiveViewer() {
  const [viewerCount, setViewerCount] = useState(23); // Starting value

  useEffect(() => {
    // Simulate live viewer count updates
    // In a real app, this would connect to a WebSocket or polling endpoint
    const interval = setInterval(() => {
      // Simulate random fluctuation (±5)
      const change = Math.floor(Math.random() * 11) - 5;
      const newCount = Math.max(1, viewerCount + change);
      setViewerCount(newCount);
    }, 10000); // Update every 10 seconds
    
    return () => clearInterval(interval);
  }, [viewerCount]);

  return (
    <div className="flex items-center gap-2 text-xs text-muted">
      <div className="flex items-center gap-1">
        {/* Simple avatar placeholder */}
        <div className="w-4 h-4 rounded-full bg-surface-alt flex items-center justify-center text-xs">
          •
        </div>
        <span className="flex items-center gap-1">
          <span id="viewer-count">{viewerCount}</span>
          <span>person viewing now</span>
        </span>
      </div>
      <a
        href="#"
        className="flex items-center gap-1 text-xs text-muted hover:text-white transition-colors"
      >
        <span>Community chat →</span>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}
