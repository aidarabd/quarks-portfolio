import Image from "next/image";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("Footer");

  const links = [
    { href: "/services", label: t("services") },
    { href: "/case-studies", label: t("caseStudies") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ] as const;

  return (
    <footer className="bg-[#03060f] border-t border-[#1e2d47]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <Image
                src="/quarks-logo.jpg"
                alt="Quarks Code"
                width={32}
                height={32}
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="font-semibold text-white text-lg">
                Quarks<span className="text-blue-500">Code</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              {t("tagline")}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">
              {t("companyHeading")}
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">
              {t("contactHeading")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={13} className="text-blue-500 mt-0.5 shrink-0" />
                <div className="text-sm">
                  <a href="tel:+996770000833" className="block text-slate-400 hover:text-blue-400 transition-colors">
                    +996 770 000 833
                  </a>
                  <a href="tel:+996559033375" className="block text-slate-400 hover:text-blue-400 transition-colors">
                    +996 559 033 375
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={13} className="text-blue-500 shrink-0" />
                <a
                  href="mailto:info@quarks.com"
                  className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
                >
                  info@quarks.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={13} className="text-blue-500 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">{t("address")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1e2d47] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            {t("rights", { year: new Date().getFullYear() })}
          </p>
          <p className="text-slate-600 text-xs">{t("bottomTag")}</p>
        </div>
      </div>
    </footer>
  );
}
