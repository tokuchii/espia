import type { Metadata } from "next";
import { experience } from "@/data/experience";
import { stack } from "@/data/stack";
import SectionHeader from "@/components/SectionHeader";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Experience — Your Name",
  description: "Professional experience and career history of Your Name.",
};

export default function ExperiencePage() {
  return (
    <div className="py-12">
      <SectionHeader number="03" title="experience" allLink="/stack" allLabel="+ more →" />

      <div className="space-y-4">
        {experience.map((exp, i) => (
          <div key={i} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 py-3 border-b border-border last:border-0">
            <span className="text-sm text-muted w-28 w-28 shrink-0">{exp.year}</span>
            <span className="text-foreground font-medium">{exp.role}</span>
            <span className="text-muted8">{exp.company}</span>
          </div>
        ))}
      </div>

      {/* Tech Stack Tag Cloud */}
      <div className="mt-8">
        <h3 className="text-lg text-white font-medium mb-4">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech, index) => (
            <span
              key={index}
              className="text-xs text-white/60 bg-surface-alt px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
