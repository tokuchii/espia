import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import SectionHeader from "@/components/SectionHeader";
import FooterSection from "@/components/FooterSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Your Name",
  description: "Articles and insights about development, AI, and building products.",
};

export default function BlogPage() {
  // Get 3 most recent posts (assuming they're already sorted by date)
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="py-12">
      <div className="flex items-baseline justify-between mb-6">
        <SectionHeader number="01" title="blog" />
        <Link
          href="/blog"
          className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors"
        >
          all posts →
        </Link>
      </div>

      <div className="space-y-6">
        {recentPosts.map((post) => (
          <article key={post.slug} className="group border-b border-border pb-6 last:border-0">
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
