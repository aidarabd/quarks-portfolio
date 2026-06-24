import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/sections/ContactForm";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Quarks Code. Tell us about your project and we'll design a solution that fits your organization.",
};

const contactInfo: {
  icon: LucideIcon;
  label: string;
  lines: string[];
  href?: string;
}[] = [
  {
    icon: Phone,
    label: "Phone",
    lines: ["+996 770 000 833", "+996 559 033 375"],
    href: "tel:+996770000833",
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["info@quarks.com"],
    href: "mailto:info@quarks.com",
  },
  {
    icon: MapPin,
    label: "Address",
    lines: ["Асанбай 40", "Bishkek, Kyrgyzstan"],
  },
  {
    icon: Clock,
    label: "Working Hours",
    lines: ["Mon – Fri: 9:00 – 18:00", "Weekend: by appointment"],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#03060f] overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[300px] bg-blue-600/8 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionHeader
            tag="Contact"
            title="Let's Talk About Your Project"
            description="Tell us about the challenge you're trying to solve. We'll review your message and follow up within one business day."
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
              {contactInfo.map((info) => {
                const Icon = info.icon;
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
                        {info.lines.map((line, i) =>
                          info.href && i === 0 ? (
                            <a
                              key={line}
                              href={info.href}
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
                  <strong className="text-blue-300">Typical response time:</strong>{" "}
                  We reply to all project inquiries within one business day. For urgent matters, please call directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
