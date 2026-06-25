import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/sections/CTASection";

const colors = [
  {
    tag: "bg-blue-500/10 border-blue-500/30 text-blue-300",
    metric: "text-blue-400",
    divider: "border-blue-500/20",
  },
  {
    tag: "bg-indigo-500/10 border-indigo-500/30 text-indigo-300",
    metric: "text-indigo-400",
    divider: "border-indigo-500/20",
  },
  {
    tag: "bg-violet-500/10 border-violet-500/30 text-violet-300",
    metric: "text-violet-400",
    divider: "border-violet-500/20",
  },
];

type CaseText = {
  tag: string;
  title: string;
  overview: string;
  problem: string;
  solution: string;
  tech: string[];
  results: { metric: string; label: string }[];
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CaseStudiesPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function CaseStudiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("CaseStudiesPage");
  const cases = t.raw("items") as CaseText[];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#03060f] overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/8 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionHeader
            tag={t("tag")}
            title={t("title")}
            description={t("description")}
          />
        </div>
      </section>

      {/* Cases */}
      <section className="pb-24 bg-[#03060f]">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          {cases.map((c, i) => {
            const number = String(i + 1).padStart(2, "0");
            const color = colors[i];
            return (
              <div
                key={c.title}
                className="bg-[#080d1a] border border-[#1e2d47] rounded-3xl p-8 md:p-12 overflow-hidden"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl font-bold text-white/8">{number}</span>
                      <span
                        className={`text-xs border rounded-full px-3 py-1 font-medium ${color.tag}`}
                      >
                        {c.tag}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {c.title}
                    </h2>
                    <p className="text-slate-400 leading-relaxed max-w-2xl">{c.overview}</p>
                  </div>
                </div>

                {/* Problem / Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                  <div className="bg-[#03060f] border border-[#1e2d47] rounded-2xl p-6">
                    <h3 className="text-white font-semibold mb-3 text-xs uppercase tracking-widest">
                      {t("problemLabel")}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{c.problem}</p>
                  </div>
                  <div className="bg-[#03060f] border border-[#1e2d47] rounded-2xl p-6">
                    <h3 className="text-white font-semibold mb-3 text-xs uppercase tracking-widest">
                      {t("solutionLabel")}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{c.solution}</p>
                  </div>
                </div>

                {/* Results + Tech */}
                <div
                  className={`border-t ${color.divider} pt-8 grid grid-cols-1 md:grid-cols-2 gap-8`}
                >
                  <div>
                    <h3 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">
                      {t("resultsLabel")}
                    </h3>
                    <div className="flex flex-wrap gap-8">
                      {c.results.map((r) => (
                        <div key={r.label}>
                          <div className={`text-2xl font-bold mb-1 ${color.metric}`}>
                            {r.metric}
                          </div>
                          <div className="text-slate-500 text-sm">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">
                      {t("techLabel")}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {c.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-sm text-slate-400 bg-white/5 border border-[#1e2d47] rounded-lg px-3 py-1.5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
