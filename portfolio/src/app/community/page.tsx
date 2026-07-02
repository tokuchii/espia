import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Community — Your Name",
  description: "Building and nurturing developer communities.",
};

export default function CommunityPage() {
  return (
    <div className="py-12">
      <SectionHeader number="13" title="community" />

      <div className="space-y-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Building Developer Communities</h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Passionate about fostering inclusive, knowledgeable, and collaborative tech communities.
          </p>
        </div>
        
        <div className="grid gap-6">
          <div className="bg-surface-alt border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Local Meetups</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-white text-sm">
                  👥
                </div>
                <div className="flex-1">
                  <h4 className="text-white mb-1">San Francisco AI Engineers</h4>
                  <p className="text-sm text-muted">Organizer • 2,500+ members</p>
                  <p className="text-xs text-white/50 mt-1">
                    Monthly meetups focusing on practical AI engineering and MLOps
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-white text-sm">
                  👥
                </div>
                <div className="flex-1">
                  <h4 className="text-white mb-1">Women in ML Initiative</h4>
                  <p className="text-sm text-muted">Mentor & Speaker • 1,200+ members</p>
                  <p className="text-xs text-white/50 mt-1">
                    Supporting women and non-binary individuals in machine learning careers
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-surface-alt border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Online Communities</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-white text-sm">
                  💬
                </div>
                <div className="flex-1">
                  <h4 className="text-white mb-1">Discord: AI Developers Hub</h4>
                  <p className="text-sm text-muted">Community Owner • 8,000+ members</p>
                  <p className="text-xs text-white/50 mt-1">
                    Real-time collaboration on AI projects, paper discussions, and career help
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-white text-sm">
                  💬
                </div>
                <div className="flex-1">
                  <h4 className="text-white mb-1">Reddit: r/MLOps</h4>
                  <p className="text-sm text-muted">Moderator • 45,000+ members</p>
                  <p className="text-xs text-white/50 mt-1">
                    Community focused on production ML systems and best practices
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-surface-alt border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Educational Initiatives</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-white text-sm">
                  📚
                </div>
                <div className="flex-1">
                  <h4 className="text-white mb-1">Free ML Workshop Series</h4>
                  <p className="text-sm text-muted">Monthly • 500+ attendees per session</p>
                  <p className="text-xs text-white/50 mt-1">
                    Hands-on workshops covering everything from basics to advanced MLOps
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-white text-sm">
                  📚
                </div>
                <div className="flex-1">
                  <h4 className="text-white mb-1">University Guest Lectures</h4>
                  <p className="text-sm text-muted">Stanford, MIT, UC Berkeley</p>
                  <p className="text-xs text-white/50 mt-1">
                    Regular guest lectures on AI engineering and distributed systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-white/50">
            Join our growing community of developers, researchers, and AI enthusiasts pushing the boundaries of what's possible.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="#" className="px-6 py-3 bg-white/10 text-white hover:bg-white/20 transition-colors rounded-lg">
              Discord Community
            </a>
            <a href="#" className="px-6 py-3 border border-white/10 text-white hover:bg-white/20 transition-colors rounded-lg">
              Newsletter Signup
            </a>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
