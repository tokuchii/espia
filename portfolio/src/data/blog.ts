export interface BlogPost {
  title: string;
  description: string;
  date: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Building AI-Powered Developer Tools",
    description: "How we built a code review assistant that actually understands context.",
    date: "June 2026",
    slug: "building-ai-dev-tools",
  },
  {
    title: "The Future of Local-First Applications",
    description: "Why local-first architecture is making a comeback in 2026.",
    date: "May 2026",
    slug: "future-local-first",
  },
  {
    title: "Shipping Fast Without Breaking Things",
    description: "Lessons learned from building and launching 10+ apps.",
    date: "April 2026",
    slug: "shipping-fast",
  },
  {
    title: "TypeScript Patterns I Use Every Day",
    description: "Practical patterns that have saved me countless hours of debugging.",
    date: "March 2026",
    slug: "typescript-patterns",
  },
  {
    title: "From Hackathon to Production",
    description: "How to turn weekend projects into real products.",
    date: "February 2026",
    slug: "hackathon-to-production",
  },
];