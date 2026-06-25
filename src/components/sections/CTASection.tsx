import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function CTASection() {
  const t = useTranslations("CTA");

  return (
    <section className="py-24 bg-[#080d1a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-[#0d1425] border border-[#1e2d47] rounded-3xl p-12 md:p-16 overflow-hidden text-center">
          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[90px]" />
          </div>

          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {t.rich("title", {
                accent: (chunks) => <span className="gradient-text">{chunks}</span>,
              })}
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              {t("description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/25 group"
              >
                {t("startConversation")}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 border border-[#1e2d47] hover:border-blue-500/40 bg-white/5 text-white px-8 py-4 rounded-xl font-semibold transition-all"
              >
                {t("seeWork")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
