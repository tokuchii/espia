import { projects } from "@/data/projects";
import SectionHeader from "./SectionHeader";

export default function ProjectsSection() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-12 border-t border-border">
      <SectionHeader number="02" title="projects" allLink="/projects" />

      {/* Rank Badges Section */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4">
          {featuredProjects.flatMap(project =>
            project.rankBadges?.map((badge, index) => (
              <span
                key={`${project.name}-${index}`}
                className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-surface-alt text-white/60"
              >
                {badge}
              </span>
            )) || []
          )}
        </div>
      </div>

      <div className="grid gap-6">
        {featuredProjects.map((project) => (
          <div key={project.name} className="group">
            <div className="flex flex-wrap gap-2 mb-2">
              {project.badges?.map((badge) => (
                <span
                  key={badge}
                  className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-surface-alt text-white/60"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface-alt shrink-0">
                {/* Project icon would go here */}
                <div className="w-full h-full flex items-center justify-center text-white/40 text-sm">
                  {project.name.charAt(0)}
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-white mb-1">{project.name}</h3>
                <p className="text-sm text-white/50 mb-3">{project.description}</p>

                <div className="flex gap-3">
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
    </section>
  );
}