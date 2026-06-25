import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/sections/ContactForm";
import type { LucideIcon } from "lucide-react";

const icons: LucideIcon[] = [Phone, Mail, MapPin, Clock];
const hrefs: (string | undefined)[] = [
  "tel:+996770000833",
  "mailto:info@quarks.com",
  undefined,
  undefined,
];

type ContactInfo = { label: string; lines: string[] };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ContactPage");
  const contactInfo = t.raw("info") as ContactInfo[];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#03060f] overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[300px] bg-blue-600/8 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionHeader
            tag={t("tag")}
            title={t("title")}
            description={t("description")}
          />
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 bg-[#03060f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-5">
              {contactInfo.map((info, i) => {
                const Icon = icons[i];
                const href = hrefs[i];
                return (
                  <div
                    key={info.label}
                    className="bg-[#080d1a] border border-[#1e2d47] rounded-2xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-500/15 rounded-xl flex items-center justify-center shrink-0">
                        <Icon size={17} className="text-blue-400" />
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">
                          {info.label}
                        </p>
                        {info.lines.map((line, j) =>
                          href && j === 0 ? (
                            <a
                              key={line}
                              href={href}
                              className="block text-white hover:text-blue-400 transition-colors text-sm"
                            >
                              {line}
                            </a>
                          ) : (
                            <p key={line} className="text-white text-sm">
                              {line}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
                <p className="text-blue-200 text-sm leading-relaxed">
                  <strong className="text-blue-300">{t("responseLabel")}</strong>{" "}
                  {t("responseBody")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
