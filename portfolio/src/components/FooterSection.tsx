import { founded, achievements } from "@/data/achievements";

export default function FooterSection() {
  return (
    <footer className="py-12 border-t border-border">
      {founded.length > 0 && (
        <div className="mb-10">
          <h3 className="text-sm text-muted uppercase tracking-wider mb-4">Founded</h3>
          <div className="flex flex-wrap gap-4">
            {founded.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {item.name} →
              </a>
            ))}
          </div>
        </div>
      )}

      <div>
        <h3 className="text-sm text-muted uppercase tracking-wider mb-4">Achievements</h3>
        <div className="space-y-2">
          {achievements.map((achievement) => (
            <div key={achievement.event} className="flex items-baseline gap-4">
              <span className="text-white text-sm">{achievement.event}</span>
              <span className="text-white/40 text-sm">—</span>
              <span className="text-white/60 text-sm">{achievement.result}</span>
              <span className="text-white/40 text-sm">· {achievement.organizer}</span>
              {achievement.pressUrl && (
                <a
                  href={achievement.pressUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/50 hover:text-white transition-colors"
                >
                  Press →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border text-center text-xs text-muted">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
}
