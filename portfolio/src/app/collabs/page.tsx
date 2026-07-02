import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Collabs — Your Name",
  description: "Collaborations and partnerships.",
};

export default function CollabsPage() {
  return (
    <div className="py-12">
      <SectionHeader number="07" title="collabs" />

      <div className="space-y-8">
        <div className="border-t border-border pt-8">
          <h3 className="text-lg font-semibold text-white mb-4">Open Source Collaborations</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-surface-alt flex items-center justify-center text-xs text-white/40">
                OS
              </div>
              <div className="flex-1">
                <h4 className="text-white mb-1">TensorFlow Extended (TFX)</h4>
                <p className="text-sm text-muted">Contributor to TFX Python library for ML pipelines</p>
                <a href="https://github.com/tensorflow" className="text-sm text-white/50 hover:text-white underline">GitHub →</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-surface-alt flex items-center justify-center text-xs text-white/40">
                OS
              </div>
              <div className="flex-1">
                <h4 className="text-white mb-1">Apache Kafka</h4>
                <p className="text-sm text-muted">Contributor to Kafka Streams documentation</p>
                <a href="https://github.com/apache/kafka" className="text-sm text-white/50 hover:text-white underline">GitHub →</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <h3 className="text-lg font-semibold text-white mb-4">Content Collaborations</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-surface-alt flex items-center justify-center text-xs text-white/40">
                📝
              </div>
              <div className="flex-1">
                <h4 className="text-white mb-1">Towards Data Science</h4>
                <p className="text-sm text-muted">Regular contributor on ML engineering topics</p>
                <a href="https://towardsdatascience.com/" className="text-sm text-white/50 hover:text-white underline">Visit →</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-surface-alt flex items-center justify-center text-xs text-white/40">
                🎥
              </div>
              <div className="flex-1">
                <h4 className="text-white mb-1">YouTube: AI Explained</h4>
                <p className="text-sm text-muted">Guest expert on MLOps and model deployment</p>
                <a href="https://youtube.com/c/AIExplained" className="text-sm text-white/50 hover:text-white underline">Watch →</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <h3 className="text-lg font-semibold text-white mb-4">Research Partnerships</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-surface-alt flex items-center justify-center text-xs text-white/40">
                🔬
              </div>
              <div className="flex-1">
                <h4 className="text-white mb-1">Stanford AI Lab</h4>
                <p className="text-sm text-muted">Collaborating on efficient transformer architectures</p>
                <a href="https://ai.stanford.edu/" className="text-sm text-white/50 hover:text-white underline">Learn More →</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-surface-alt flex items-center justify-center text-xs text-white/40">
                🔬
              </div>
              <div className="flex-1">
                <h4 className="text-white mb-1">MIT CSAIL</h4>
                <p className="text-sm text-muted">Joint research on edge AI optimization</p>
                <a href="https://www.csail.mit.edu/" className="text-sm text-white/50 hover:text-white underline">Learn More →</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
