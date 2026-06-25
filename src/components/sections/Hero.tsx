import { ArrowRight, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type Stat = { value: string; label: string };

export default function Hero() {
  const t = useTranslations("Hero");
  const stats = t.raw("stats") as Stat[];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#03060f]">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/3 w-[300px] h-[300px] bg-indigo-700/6 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-300 text-sm font-medium">{t("badge")}</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.06] tracking-tight mb-6">
            {t.rich("headline", {
              accent: (chunks) => <span className="gradient-text">{chunks}</span>,
            })}
          </h1>

          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
            {t("description")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 group"
            >
              {t("viewWork")}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-[#1e2d47] hover:border-blue-500/40 bg-white/5 hover:bg-white/8 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200"
            >
              {t("startProject")}
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-16 flex flex-wrap gap-10">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-bold text-white">{stat.value}</span>
                <span className="text-slate-500 text-sm mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs uppercase tracking-widest">{t("scroll")}</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}
