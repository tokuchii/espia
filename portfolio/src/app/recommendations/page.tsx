import type { Metadata } from "next";
import { testimonials } from "@/data/recommendations";
import SectionHeader from "@/components/SectionHeader";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Recommendations — Your Name",
  description: "Testimonials and recommendations for Your Name.",
};

export default function RecommendationsPage() {
  return (
    <div className="py-12">
      <SectionHeader number="05" title="recommendations" />

      <div className="grid gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="py-6 border-b border-white/10 last:border-0">
            <blockquote className="text-white/70 mb-6 text-lg leading-relaxed">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm text-white/60">
                {testimonial.initials}
              </div>
              <div>
                <div className="text-white">{testimonial.name}</div>
                <div className="text-sm text-white/50">{testimonial.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FooterSection />
    </div>
  );
}