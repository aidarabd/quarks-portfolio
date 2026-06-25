import { Cpu, Globe, Zap, Shield, GitMerge, BarChart3 } from "lucide-react";
import { useTranslations } from "next-intl";
import SectionHeader from "@/components/ui/SectionHeader";
import { Link } from "@/i18n/navigation";
import type { LucideIcon } from "lucide-react";

const icons: LucideIcon[] = [Zap, Globe, GitMerge, Shield, Cpu, BarChart3];

type ServiceText = { title: string; description: string };

export default function ServicesSection() {
  const t = useTranslations("HomeServices");
  const services = t.raw("items") as ServiceText[];

  return (
    <section className="py-24 bg-[#03060f]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag={t("tag")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <div
                key={service.title}
                className="card-hover bg-[#080d1a] rounded-2xl p-7"
              >
                <div className="w-11 h-11 bg-blue-500/15 rounded-xl flex items-center justify-center mb-5">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
          >
            {t("exploreAll")}
          </Link>
        </div>
      </div>
    </section>
  );
}
