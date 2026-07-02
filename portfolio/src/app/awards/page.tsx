import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Awards — Your Name",
  description: "Awards and recognitions received.",
};

export default function AwardsPage() {
  return (
    <div className="py-12">
      <SectionHeader number="12" title="awards" />

      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Awards & Recognition</h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Honors and awards received for contributions to software engineering and AI.
          </p>
        </div>
        
        <div className="grid gap-6">
          <div className="bg-surface-alt border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Hackathon Championships</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-white text-sm">
                  🏆
                </div>
                <div className="flex-1">
                  <h4 className="text-white mb-1">MIT Hackathon 2023</h4>
                  <p className="text-sm text-muted">1st Place - AI-Powered Healthcare Diagnostics</p>
                  <p className="text-xs text-white/50 mt-1">Built a real-time diagnostic tool using computer vision and NLP</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-white text-sm">
                  🏆
                </div>
                <div className="flex-1">
                  <h4 className="text-white mb-1">Silicon Valley TechCrunch Disrupt 2022</h4>
                  <p className="text-sm text-muted">Finalist - Sustainable Energy Optimization Platform</p>
                  <p className="text-xs text-white/50 mt-1">Platform reducing energy consumption in data centers by 40%</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-white text-sm">
                  🏆
                </div>
                <div className="flex-1">
                  <h4 className="text-white mb-1">Google Developer Challenge 2021</h4>
                  <p className="text-sm text-muted">Top 10 - Open Source ML Toolkit</p>
                  <p className="text-xs text-white/50 mt-1">Created a lightweight library for edge device ML inference</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-surface-alt border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Professional Recognition</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-white text-sm">
                  🎖️
                </div>
                <div className="flex-1">
                  <h4 className="text-white mb-1">Microsoft MVP</h4>
                  <p className="text-sm text-muted">AI Platform Developer (2023-2024)</p>
                  <p className="text-xs text-white/50 mt-1">Recognized for contributions to Azure AI ecosystem</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-white text-sm">
                  🎖️
                </div>
                <div className="flex-1">
                  <h4 className="text-white mb-1">AWS Community Hero</h4>
                  <p className="text-sm text-muted">Machine Learning Specialty</p>
                  <p className="text-xs text-white/50 mt-1">Community leader in AWS ML services</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-white text-sm">
                  🎖️
                </div>
                <div className="flex-1">
                  <h4 className="text-white mb-1">GitHub Star</h4>
                  <p className="text-sm text-muted">Awarded to popular open source projects</p>
                  <p className="text-xs text-white/50 mt-1">Maintainer of 5+ popular repositories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a href="/affiliations" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface-alt text-white text-sm hover:bg-surface transition-colors">
            View All Affiliations →
          </a>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
