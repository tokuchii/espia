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

      <div className="grid gap-4">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10"
          >
            <div className="w-12 h-12 rounded bg-white/10 shrink-0" />
            <div className="flex-1 min-w-0">
              <h2 className="text-white mb-1">{cert.name}</h2>
              <p className="text-sm text-white/50">{cert.issuer}</p>
            </div>
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 hover:text-white transition-colors shrink-0"
            >
              Verify →
            </a>
          </div>
        ))}
      </div>

      <FooterSection />
    </div>
  );
}