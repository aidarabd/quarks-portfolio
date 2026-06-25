import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import WhyUsSection from "@/components/sections/WhyUsSection";
import CTASection from "@/components/sections/CTASection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

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
