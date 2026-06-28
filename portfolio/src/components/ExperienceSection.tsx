import Link from "next/link";
import { experience } from "@/data/experience";
import { stack } from "@/data/stack";
import SectionHeader from "./SectionHeader";

export default function ExperienceSection() {
  const recentExperience = experience.slice(0, 3);

  return (
    <section className="py-12 border-t border-white/10">
      <SectionHeader number="03" title="experience" allLink="/experience" allLabel="full history" />

      <div className="space-y-3 mb-12">
        {recentExperience.map((exp, i) => (
          <div key={i} className="flex items-baseline gap-4">
            <span className="text-sm text-white/40 w-28 shrink-0">{exp.year}</span>
            <span className="text-white">{exp.role}</span>
            <span className="text-white/50">{exp.company}</span>
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-white/10">
        <div className="flex items-baseline justify-between mb-4">
          <h3 className="text-sm text-white/60 uppercase tracking-wider">Stack</h3>
          <Link
            href="/stack"
            className="text-xs text-white/50 hover:text-white transition-colors"
          >
            view all →
          </Link>
        </div>

        <div className="flex flex-wrap gap-2">
          {stack.slice(0, 8).map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/60 border border-white/10"
            >
              {tech}
            </span>
          ))}
          <Link
            href="/stack"
            className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/40 hover:text-white transition-colors"
          >
            + more →
          </Link>
        </div>
      </div>
    </section>
  );
}