import type { Metadata } from "next";
import { projects } from "@/data/projects";
import SectionHeader from "@/components/SectionHeader";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Projects — Your Name",
  description: "Apps and projects built by Your Name.",
};

export default function ProjectsPage() {
  return (
    <div className="py-12">
      <SectionHeader number="02" title="projects" />

      <div className="grid gap-8">
        {projects.map((project) => (
          <div key={project.name} className="group border-b border-white/10 pb-8 last:border-0">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.badges?.map((badge) => (
                <span
                  key={badge}
                  className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-white/60"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 shrink-0" />

              <div className="flex-1 min-w-0">
                <h2 className="text-lg text-white mb-1">{project.name}</h2>
                <p className="text-sm text-white/50 mb-4">{project.description}</p>

                <div className="flex gap-4">
                  {project.appStoreUrl && (
                    <a
                      href={project.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white/50 hover:text-white transition-colors"
                    >
                      App Store →
                    </a>
                  )}
                  {project.googlePlayUrl && (
                    <a
                      href={project.googlePlayUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white/50 hover:text-white transition-colors"
                    >
                      Google Play →
                    </a>
                  )}
                  {project.projectUrl && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white/50 hover:text-white transition-colors"
                    >
                      View project →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FooterSection />
    </div>
  );
}