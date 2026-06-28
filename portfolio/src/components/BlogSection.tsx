import Link from "next/link";
import { blogPosts } from "@/data/blog";
import SectionHeader from "./SectionHeader";

export default function BlogSection() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-12 border-t border-white/10">
      <SectionHeader number="01" title="blog" allLink="/blog" />

      <div className="space-y-4">
        {recentPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block group"
          >
            <div className="flex items-baseline justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-white group-hover:underline mb-1">
                  {post.title}
                </h3>
                <p className="text-sm text-white/50">{post.description}</p>
              </div>
              <span className="text-sm text-white/40 shrink-0">{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}