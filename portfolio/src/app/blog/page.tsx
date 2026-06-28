import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import SectionHeader from "@/components/SectionHeader";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Blog — Your Name",
  description: "Articles and insights about development, AI, and building products.",
};

export default function BlogPage() {
  return (
    <div className="py-12">
      <SectionHeader number="01" title="blog" />

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article key={post.slug} className="group border-b border-white/10 pb-6 last:border-0">
            <div className="flex items-baseline justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-xl text-white group-hover:underline mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-white/50">{post.description}</p>
              </div>
              <span className="text-sm text-white/40 shrink-0">{post.date}</span>
            </div>
          </article>
        ))}
      </div>

      <FooterSection />
    </div>
  );
}