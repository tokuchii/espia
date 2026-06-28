import Hero from "@/components/Hero";
import BlogSection from "@/components/BlogSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import RecommendationsSection from "@/components/RecommendationsSection";
import AffiliationsSection from "@/components/AffiliationsSection";
import GitHubSection from "@/components/GitHubSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <>
      <Hero />
      <BlogSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <RecommendationsSection />
      <AffiliationsSection />
      <GitHubSection />
      <FooterSection />
    </>
  );
}