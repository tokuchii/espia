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
          <div key={testimonial.name} className="border-b border-border pb-6 last:border-0">
            <blockquote className="text-white/70 mb-4 text-base leading-relaxed">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center text-xs text-white/60">
                {testimonial.initials}
              </div>
              <div>
                <div className="text-white">{testimonial.name}</div>
                <div className="text-sm text-muted">{testimonial.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FooterSection />
    </div>
  );
}
