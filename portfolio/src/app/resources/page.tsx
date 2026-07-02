import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Resources — Your Name",
  description: "Curated resources for developers and AI engineers.",
};

export default function ResourcesPage() {
  return (
    <div className="py-12">
      <SectionHeader number="11" title="resources" />

      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Learning Resources</h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Curated collection of books, courses, and resources that have helped me grow as a developer and AI engineer.
          </p>
        </div>
        
        {/* Resources categories */}
        <div className="grid gap-6">
          <div className="bg-surface-alt border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Books</h3>
            <ul className="space-y-2 text-white/50">
              <li>• "Designing Data-Intensive Applications" by Martin Kleppmann</li>
              <li>• "Clean Code" by Robert C. Martin</li>
              <li>• "Deep Learning" by Ian Goodfellow</li>
              <li>• "Introduction to Algorithms" by Cormen et al.</li>
              <li>• "Clean Architecture" by Robert C. Martin</li>
            </ul>
          </div>
          
          <div className="bg-surface-alt border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Online Courses</h3>
            <ul className="space-y-2 text-white/50">
              <li>• Stanford CS229: Machine Learning</li>
              <li>• MIT 6.824: Distributed Systems</li>
              <li>• Stanford CS231n: CNNs for Visual Recognition</li>
              <li>• Coursera: Deep Learning Specialization</li>
              <li>• Udacity: Self-Driving Car Engineer</li>
            </ul>
          </div>
          
          <div className="bg-surface-alt border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Blogs & Newsletters</h3>
            <ul className="space-y-2 text-white/50">
              <li>• Andrej Karpathy's blog</li>
              <li>• ML Street Talk</li>
              <li>• Lilian Weng's Blog</li>
              <li>• Sebastian Ruder's blog</li>
              <li>• The Batch (DeepLearning.AI)</li>
            </ul>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
