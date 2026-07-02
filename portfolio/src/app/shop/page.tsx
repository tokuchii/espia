import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Shop — Your Name",
  description: "Shop for tools, resources, and merchandise.",
};

export default function ShopPage() {
  return (
    <div className="py-12">
      <SectionHeader number="09" title="shop" />

      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Shop Coming Soon</h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Explore my recommended tools, resources, and merchandise to support your journey in software engineering and AI.
          </p>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
