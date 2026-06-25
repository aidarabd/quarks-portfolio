import { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/sections/CTASection";

// Non-translatable per-member assets, zipped with translated text by index.
const photos: (string | null)[] = ["/team/aidar.jpg", null, "/team/arzybek.jpg"];
const initials = ["A", "E", "A"];

type Member = {
  name: string;
  role: string;
  bio: string;
  specialties: string[];
};

type Value = { title: string; description: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("AboutPage");
  const values = t.raw("values") as Value[];
  const team = t.raw("team") as Member[];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#03060f] overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[400px] bg-blue-600/8 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionHeader
            tag={t("tag")}
            title={t("title")}
            description={t("description")}
          />
        </div>
      </section>

      {/* Mission quote */}
      <section className="py-20 bg-[#080d1a] border-y border-[#1e2d47]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
              &ldquo;
              {t.rich("quote", {
                accent: (chunks) => (
                  <span className="text-white font-medium">{chunks}</span>
                ),
              })}
              &rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#03060f]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader tag={t("valuesTag")} title={t("valuesTitle")} centered />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-[#080d1a] border border-[#1e2d47] rounded-2xl p-6 hover:border-blue-500/30 transition-colors"
              >
                <h3 className="text-white font-semibold mb-3">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-[#080d1a]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            tag={t("teamTag")}
            title={t("teamTitle")}
            description={t("teamDescription")}
            centered
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="bg-[#03060f] border border-[#1e2d47] rounded-2xl p-8 hover:border-blue-500/30 transition-colors"
              >
                {photos[i] ? (
                  <Image
                    src={photos[i] as string}
                    alt={member.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-2xl object-cover mb-6"
                  />
                ) : (
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-white">{initials[i]}</span>
                  </div>
                )}
                <h3 className="text-white font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-blue-400 text-sm font-medium mb-4">{member.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((s) => (
                    <span
                      key={s}
                      className="text-xs text-slate-500 bg-white/5 border border-[#1e2d47] rounded-md px-2 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
