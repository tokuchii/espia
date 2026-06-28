import { affiliations } from "@/data/affiliations";
import SectionHeader from "./SectionHeader";

export default function AffiliationsSection() {
  const featuredAffiliations = affiliations.slice(0, 4);

  return (
    <section className="py-12 border-t border-white/10">
      <SectionHeader number="06" title="affiliations" allLink="/affiliations" />

      <div className="flex flex-wrap gap-2">
        {featuredAffiliations.map((aff) => (
          <span
            key={aff.organization}
            className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-white/60 border border-white/10"
          >
            {aff.organization}
            <span className="text-white/30 ml-1">· {aff.role}</span>
          </span>
        ))}
      </div>
    </section>
  );
}