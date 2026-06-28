import { profile } from "@/data/profile";

const contributionLevels = [
  0.1, 0.1, 0.1, 0.1, 0.4, 0.1, 0.1, 0.4, 0.1, 0.1, 0.4, 0.1, 0.1, 0.1,
  0.1, 0.4, 0.1, 0.1, 0.4, 0.1, 0.8, 0.4, 0.1, 0.1, 0.1, 0.4, 0.1, 0.1,
  0.1, 0.1, 0.1, 0.1, 0.4, 0.1, 0.1, 0.1, 0.1, 0.8, 0.1, 0.1, 0.4, 0.1,
  0.1, 0.1, 0.1, 0.4, 0.1, 0.1, 0.1, 0.4, 0.1, 0.1, 0.1, 0.1, 0.4, 0.1,
  0.1, 0.1, 0.1, 0.1, 0.4, 0.1, 0.1, 0.8, 0.1, 0.1, 0.1, 0.1, 0.1, 0.4,
  0.1, 0.1, 0.1, 0.4, 0.1, 0.1, 0.1, 0.1, 0.1, 0.4, 0.1, 0.1, 0.1, 0.8,
  0.1, 0.1, 0.1, 0.1, 0.4, 0.1, 0.1, 0.1, 0.1, 0.1, 0.4, 0.1, 0.1, 0.1,
  0.1, 0.4, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.4, 0.1, 0.1, 0.8, 0.1, 0.1,
  0.1, 0.1, 0.1, 0.1, 0.4, 0.1, 0.1, 0.1, 0.1, 0.4, 0.1, 0.1, 0.1, 0.1,
  0.1, 0.1, 0.4, 0.1, 0.1, 0.1, 0.1, 0.8, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1,
  0.4, 0.1, 0.1, 0.1, 0.1, 0.1, 0.4, 0.1, 0.1, 0.1, 0.1, 0.1, 0.4, 0.1,
  0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.4, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1,
  0.4, 0.1, 0.1, 0.8, 0.1, 0.1, 0.1, 0.1, 0.1, 0.4, 0.1, 0.1, 0.1, 0.1,
  0.1, 0.1, 0.1, 0.1, 0.4, 0.1, 0.1, 0.1, 0.1, 0.4, 0.1, 0.1, 0.1, 0.1,
  0.1, 0.1, 0.1, 0.4, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.4, 0.1, 0.1, 0.1,
  0.1, 0.1, 0.1, 0.4, 0.1, 0.1, 0.1, 0.1, 0.8, 0.1, 0.1, 0.1, 0.1, 0.1,
  0.1, 0.4, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.4, 0.1, 0.1, 0.1,
  0.1, 0.1, 0.1, 0.1, 0.4, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.4, 0.1,
  0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.4, 0.1, 0.1, 0.1, 0.1, 0.1,
  0.1, 0.1, 0.1, 0.4, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1,
  0.4, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.4, 0.1, 0.1, 0.1, 0.1,
  0.1, 0.1, 0.1, 0.1, 0.1, 0.4, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1,
  0.1, 0.1, 0.4, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1,
];

export default function GitHubSection() {
  return (
    <section className="py-12 border-t border-white/10">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-lg text-white font-medium tracking-tight">
          <span className="text-white/40 mr-2">07</span>
          — github
        </h2>
        <a
          href={`https://github.com/${profile.githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors"
        >
          @{profile.githubUsername} ↗
        </a>
      </div>

      <div className="rounded-lg bg-white/5 border border-white/10 p-6">
        <div className="grid grid-cols-7 gap-1 mb-4">
          {contributionLevels.map((opacity, i) => (
            <div
              key={i}
              className="w-full aspect-square rounded-sm bg-white/5"
              style={{ opacity }}
            />
          ))}
        </div>
        <p className="text-sm text-white/50 text-center">
          847 contributions in the last year
        </p>
      </div>

      <div className="mt-6">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white text-sm hover:bg-white/20 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Open mail app
        </a>
      </div>
    </section>
  );
}