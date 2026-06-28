import type { Metadata } from "next";
import { experience } from "@/data/experience";
import SectionHeader from "@/components/SectionHeader";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Experience — Your Name",
  description: "Professional experience and career history of Your Name.",
};

export default function ExperiencePage() {
  return (
    <div className="py-12">
      <SectionHeader number="03" title="experience" allLabel="full history" />

      <div className="space-y-4">
        {experience.map((exp, i) => (
          <div key={i} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 py-3 border-b border-white/10 last:border-0">
            <span className="text-sm text-white/40 w-28 shrink-0">{exp.year}</span>
            <span className="text-white font-medium">{exp.role}</span>
            <span className="text-white/50">{exp.company}</span>
          </div>
        ))}
      </div>

      <FooterSection />
    </div>
  );
}