import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import SectionHeader from "@/components/ui/SectionHeader";
import { Link } from "@/i18n/navigation";

const styles = [
  {
    tagClass: "bg-blue-500/10 border-blue-500/30 text-blue-300",
    resultClass: "text-blue-400",
  },
  {
    tagClass: "bg-indigo-500/10 border-indigo-500/30 text-indigo-300",
    resultClass: "text-indigo-400",
  },
  {
    tagClass: "bg-violet-500/10 border-violet-500/30 text-violet-300",
    resultClass: "text-violet-400",
  },
];

type CaseText = {
  tag: string;
  title: string;
  problem: string;
  result: string;
  tech: string[];
};

export default function CaseStudiesPreview() {
  const t = useTranslations("HomeCases");
  const cases = t.raw("items") as CaseText[];

  return (
    <section className="py-24 bg-[#080d1a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            tag={t("tag")}
            title={t("title")}
            description={t("description")}
          />
          <Link
            href="/case-studies"
            className="shrink-0 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
          >
            {t("viewAll")} <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div
              key={c.title}
              className="card-hover bg-[#03060f] rounded-2xl p-7 flex flex-col"
            >
              <span
                className={`inline-flex self-start border rounded-full px-3 py-1 text-xs font-medium mb-5 ${styles[i].tagClass}`}
              >
                {c.tag}
              </span>
              <h3 className="text-white font-semibold text-lg leading-snug mb-3">
                {c.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">
                {c.problem}
              </p>
              <div className="border-t border-[#1e2d47] pt-4 mt-auto">
                <div className={`font-semibold text-sm mb-3 ${styles[i].resultClass}`}>
                  ✦ {c.result}
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-slate-500 bg-white/5 rounded-md px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
