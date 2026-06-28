import type { Metadata } from "next";
import { stack } from "@/data/stack";
import SectionHeader from "@/components/SectionHeader";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Stack — Your Name",
  description: "Technologies and tools used by Your Name.",
};

export default function StackPage() {
  return (
    <div className="py-12">
      <SectionHeader number="03" title="stack" />

      <div className="flex flex-wrap gap-3">
        {stack.map((tech) => (
          <span
            key={tech}
            className="text-sm px-4 py-2 rounded-full bg-white/5 text-white/70 border border-white/10"
          >
            {tech}
          </span>
        ))}
      </div>

      <FooterSection />
    </div>
  );
}