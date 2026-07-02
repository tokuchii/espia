import type { Metadata } from "next";
import { certifications } from "@/data/certifications";
import SectionHeader from "@/components/SectionHeader";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Certifications — Your Name",
  description: "Professional certifications earned by Your Name.",
};

export default function CertificationsPage() {
  return (
    <div className="py-12">
      <SectionHeader number="04" title="certifications" />

      <div className="grid gap-6">
        {certifications.map((cert) => (
          <div key={cert.name} className="flex items-center gap-4 p-4 rounded-lg bg-surface-alt border border-border">
            <div className="w-12 h-12 rounded bg-surface shrink-0 flex items-center justify-center">
              <span className="text-xs text-white/40">{cert.name.charAt(0)}</span>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-white mb-1">{cert.name}</h2>
              <p className="text-sm text-muted">{cert.issuer}</p>
            </div>
            <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors shrink-0">
              Verify →
            </a>
          </div>
        ))}
      </div>

      <FooterSection />
    </div>
  );
}
