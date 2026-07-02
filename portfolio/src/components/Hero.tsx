"use client";

import Link from "next/link";
import { useState } from "react";
import { profile } from "@/data/profile";

export default function Hero() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [isAnswering, setIsAnswering] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsAnswering(true);
    // Simulate AI response - in production, this would call an API
    setAnswer(`That's a great question about ${question.toLowerCase()}. As a full-stack AI engineer, I focus on building intelligent systems that combine cutting-edge AI with practical software engineering principles.`);

    // Reset question after a short delay
    setTimeout(() => {
      setQuestion("");
      setIsAnswering(false);
    }, 1500);
  };

  return (
    <section className="py-20 md:py-28">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="flex-1">
          {/* Profile Image */}
          <div className="w-24 h-24 rounded-full overflow-hidden mb-6 bg-white/10">
            <img
              src={profile.avatar}
              alt={`${profile.name}'s profile`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
            {profile.name}
          </h1>
          <p className="text-lg text-white/70 mb-4">
            {profile.title}
          </p>

          {/* Bio - 2-3 paragraphs */}
          <div className="space-y-4 mb-6 max-w-xl">
            {profile.bio.map((paragraph, index) => (
              <p key={index} className="text-base text-white/50 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-6">
            {profile.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
                aria-label={social.name}
              >
                {/* Simple text-based icons for now - could be replaced with actual SVGs */}
                {social.name === "GitHub" && <span className="text-xs"></span>}
                {social.name === "LinkedIn" && <span className="text-xs">in</span>}
                {social.name === "Instagram" && <span className="text-xs">••</span>}
                {social.name === "X" && <span className="text-xs">{'>'}</span>}
                {social.name === "Email" && <span className="text-xs">✉</span>}
              </a>
            ))}
            {/* Email link */}
            <a
              href={`mailto:${profile.email}`}
              className="text-white/40 hover:text-white transition-colors"
              aria-label="Email"
            >
              <span className="text-xs">✉</span>
            </a>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-6 mb-8">
            {profile.stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-start">
                <Link
                  href={stat.href}
                  className="group block"
                >
                  <div className="text-3xl font-bold text-white group-hover:opacity-80 transition-opacity">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Column (moved to side on desktop) */}
        <div className="hidden md:block flex-1 md:flex-col items-start space-y-6">
          {/* Additional stats or info could go here */}
        </div>
      </div>

      {/* Q&A Widget */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <form onSubmit={handleSubmit} className="flex flex-col items-start gap-4">
          <div className="flex items-baseline w-full max-w-xl">
            <span className="text-xs text-white/40 mr-2">💬</span>
            <span className="text-sm text-white/50">what do you want to ask?</span>
          </div>
          <div className="flex w-full max-w-xl gap-3">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask me about AI, software engineering, or my work..."
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              disabled={isAnswering}
            />
            <button
              type="submit"
              disabled={!question.trim() || isAnswering}
              className="px-6 py-3 bg-white/10 text-white hover:bg-white/20 transition-colors rounded-lg font-medium disabled:opacity-50"
            >
              {isAnswering ? "Thinking..." : "Ask"}
            </button>
          </div>
          {answer && (
            <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-sm text-white/90 whitespace-pre-line">{answer}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}