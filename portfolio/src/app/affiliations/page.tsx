import type { Metadata } from "next";
import { affiliations } from "@/data/affiliations";
import SectionHeader from "@/components/SectionHeader";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Affiliations — Your Name",
  description: "Organizations and communities affiliated with Your Name.",
};

export default function AffiliationsPage() {
  return (
    <div className="py-12">
      <SectionHeader number="06" title="affiliations" />

      <div className="flex flex-wrap gap-3">
        {affiliations.map((aff) => (
          <div
            key={aff.organization}
            className="flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-surface-alt text-white/60 border border-border"
          >
            <span>{aff.organization}</span>
            <span className="text-white/30">·</span>
            <span className="text-muted">{aff.role}</span>
          </div>
        ))}
      </div>

      <FooterSection />
    </div>
  );
}
