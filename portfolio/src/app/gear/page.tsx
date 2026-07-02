import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Gear — Your Name",
  description: "My recommended gear and tools for development.",
};

export default function GearPage() {
  return (
    <div className="py-12">
      <SectionHeader number="10" title="gear" />

      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Gear Recommendations</h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Here are the tools and gear I use daily for software development and AI engineering.
          </p>
        </div>
        
        {/* Gear categories would go here */}
        <div className="grid gap-6">
          <div className="bg-surface-alt border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Development Setup</h3>
            <ul className="space-y-2 text-white/50">
              <li>• MacBook Pro M2 Max</li>
              <li>• 32GB RAM</li>
              <li>• 1TB SSD Storage</li>
              <li>• LG Ultrafine 4K Display</li>
              <li>• Mechanical Keyboard (Custom)</li>
              <li>• Vertical Mouse</li>
            </ul>
          </div>
          
          <div className="bg-surface-alt border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Software & Tools</h3>
            <ul className="space-y-2 text-white/50">
              <li>• VS Code with custom theme</li>
              <li>• Docker Desktop</li>
              <li>• Postman API Platform</li>
              <li>• Linear for project management</li>
              <li>• Notion for documentation</li>
              <li>• GitHub Copilot</li>
            </ul>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
