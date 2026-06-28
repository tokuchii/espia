import { certifications } from "@/data/certifications";
import SectionHeader from "./SectionHeader";

export default function CertificationsSection() {
  const featuredCerts = certifications.slice(0, 3);

  return (
    <section className="py-12 border-t border-white/10">
      <SectionHeader number="04" title="certifications" allLink="/certifications" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {featuredCerts.map((cert) => (
          <div
            key={cert.name}
            className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10"
          >
            <div className="w-10 h-10 rounded bg-white/10 shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm text-white truncate">{cert.name}</h3>
              <p className="text-xs text-white/50">{cert.issuer}</p>
            </div>
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/50 hover:text-white transition-colors shrink-0"
            >
              Verify →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}