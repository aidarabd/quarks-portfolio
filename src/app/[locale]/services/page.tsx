import { Metadata } from "next";
import { Cpu, Globe, Zap, Shield, GitMerge, BarChart3 } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/sections/CTASection";
import type { LucideIcon } from "lucide-react";

const icons: LucideIcon[] = [Zap, Globe, GitMerge, Shield, Cpu, BarChart3];

type ServiceText = {
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
};

type ProcessStep = { step: string; title: string; description: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ServicesPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ServicesPage");
  const services = t.raw("items") as ServiceText[];
  const process = t.raw("process") as ProcessStep[];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#03060f] overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-blue-600/8 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionHeader
            tag={t("tag")}
            title={t("title")}
            description={t("description")}
          />
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-[#03060f]">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <div
                key={service.title}
                className="bg-[#080d1a] border border-[#1e2d47] hover:border-blue-500/30 rounded-2xl p-8 md:p-10 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 bg-blue-500/15 rounded-xl flex items-center justify-center shrink-0">
                        <Icon size={22} className="text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xl">{service.title}</h3>
                        <p className="text-slate-500 text-sm">{service.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-slate-400 leading-relaxed">{service.description}</p>
                  </div>
                  <div>
                    <h4 className="text-slate-300 font-semibold text-xs uppercase tracking-widest mb-4">
                      {t("whatYouGet")}
                    </h4>
                    <ul className="space-y-3">
                      {service.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0" />
                          <span className="text-slate-400 text-sm leading-relaxed">{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#080d1a]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            tag={t("processTag")}
            title={t("processTitle")}
            description={t("processDescription")}
            centered
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((p) => (
              <div
                key={p.step}
                className="bg-[#03060f] border border-[#1e2d47] rounded-2xl p-6"
              >
                <div className="text-4xl font-bold text-blue-500/25 mb-4">{p.step}</div>
                <h3 className="text-white font-semibold mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
