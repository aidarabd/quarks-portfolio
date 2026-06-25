import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import SectionHeader from "@/components/ui/SectionHeader";

type Point = { title: string; description: string };

export default function WhyUsSection() {
  const t = useTranslations("WhyUs");
  const points = t.raw("points") as Point[];

  return (
    <section className="py-24 bg-[#03060f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionHeader
            tag={t("tag")}
            title={t("title")}
            description={t("description")}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {points.map((p) => (
              <div
                key={p.title}
                className="bg-[#080d1a] border border-[#1e2d47] rounded-2xl p-6 hover:border-blue-500/30 transition-colors"
              >
                <CheckCircle2 size={18} className="text-blue-400 mb-3" />
                <h3 className="text-white font-semibold mb-2 text-sm">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
