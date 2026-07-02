import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Consulting — Your Name",
  description: "Expert consulting services for AI and software engineering projects.",
};

export default function ConsultingPage() {
  return (
    <div className="py-12">
      <SectionHeader number="08" title="consulting" />

      <div className="space-y-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Expert Consulting Services</h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Helping businesses leverage AI and modern software engineering practices to build scalable, intelligent products.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">AI Strategy & Architecture</h3>
            <div className="bg-surface-alt border border-border rounded-lg p-6">
              <h4 className="text-white mb-2">LLM Application Architecture</h4>
              <p className="text-sm text-muted mb-4">
                Designing scalable architectures for large language model applications, including prompt engineering, fine-tuning strategies, and deployment patterns.
              </p>
              
              <h4 className="text-white mb-2">ML Infrastructure</h4>
              <p className="text-sm text-muted mb-4">
                Building robust ML pipelines, feature stores, and model serving infrastructure using AWS, GCP, or Azure.
              </p>
              
              <h4 className="text-white mb-2">AI Ethics & Governance</h4>
              <p className="text-sm text-muted">
                Implementing responsible AI practices, bias detection, and model governance frameworks.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Software Engineering Excellence</h3>
            <div className="bg-surface-alt border border-border rounded-lg p-6">
              <h4 className="text-white mb-2">System Design & Scalability</h4>
              <p className="text-sm text-muted mb-4">
                Architecting microservices, distributed systems, and cloud-native applications for high scale and resilience.
              </p>
              
              <h4 className="text-white mb-2">DevOps & CI/CD</h4>
              <p className="text-sm text-muted mb-4">
                Implementing automated testing, continuous deployment, and infrastructure as code using modern DevOps practices.
              </p>
              
              <h4 className="text-white mb-2">Technical Due Diligence</h4>
              <p className="text-sm text-muted">
                Conducting technical audits, code reviews, and architecture assessments for investments or acquisitions.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-surface-alt border border-border rounded-lg p-8">
          <h3 className="text-lg font-semibold text-white mb-4">Engagement Models</h3>
          <div className="grid gap-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-xs text-white/40">
                ⏰
              </div>
              <div>
                <h4 className="text-white mb-1">Hourly Consulting</h4>
                <p className="text-sm text-muted">Flexible advisory sessions for specific challenges</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-xs text-white/40">
                📅
              </div>
              <div>
                <h4 className="text-white mb-1">Project-Based</h4>
                <p className="text-sm text-muted">Fixed-scope engagements with clear deliverables</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-xs text-white/40">
                🔄
              </div>
              <div>
                <h4 className="text-white mb-1">Retainer Partnerships</h4>
                <p className="text-sm text-muted">Ongoing strategic advisory for long-term initiatives</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white text-sm rounded-lg hover:bg-white/20 transition-colors">
          Start a Conversation →
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
