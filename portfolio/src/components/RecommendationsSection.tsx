import { testimonials } from "@/data/recommendations";
import SectionHeader from "./SectionHeader";

export default function RecommendationsSection() {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-12 border-t border-white/10">
      <SectionHeader number="05" title="recommendations" allLink="/recommendations" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredTestimonials.map((testimonial) => (
          <div key={testimonial.name} className="flex flex-col">
            <blockquote className="text-sm text-white/70 mb-4 flex-1">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/60">
                {testimonial.initials}
              </div>
              <div>
                <div className="text-sm text-white">{testimonial.name}</div>
                <div className="text-xs text-white/50">{testimonial.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}