import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import WhyUsSection from "@/components/sections/WhyUsSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesSection />
      <CaseStudiesPreview />
      <WhyUsSection />
      <CTASection />
    </>
  );
}
