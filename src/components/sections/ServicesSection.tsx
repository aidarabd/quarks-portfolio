import { Cpu, Globe, Zap, Shield, GitMerge, BarChart3 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

const services: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Zap,
    title: "Process Automation",
    description:
      "Eliminate manual, repetitive work. We map your existing workflows and replace them with automated systems that run faster, reduce errors, and free your team for high-value tasks.",
  },
  {
    icon: Globe,
    title: "Custom Web Applications",
    description:
      "Enterprise-grade web platforms built for scale — from citizen-facing portals to internal management systems that your organization can depend on.",
  },
  {
    icon: GitMerge,
    title: "System Integration",
    description:
      "Connect your tools, databases, and third-party services into one cohesive ecosystem. We bridge legacy systems with modern infrastructure so data flows without friction.",
  },
  {
    icon: Shield,
    title: "Government Digital Solutions",
    description:
      "Secure, compliant platforms purpose-built for the public sector. We understand what high-stakes government software demands — from biometric integrations to audit trails.",
  },
  {
    icon: Cpu,
    title: "Internal Enterprise Tools",
    description:
      "Stop working around off-the-shelf limitations. We build dashboards, workflows, reporting, and management tools precisely fitted to how your organization actually operates.",
  },
  {
    icon: BarChart3,
    title: "Data & Reporting",
    description:
      "Turn operational data into actionable intelligence. Real-time dashboards, automated reports, and analytics layers that give leadership visibility into what matters.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[#03060f]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="What We Do"
          title="Software Solutions That Drive Real Results"
          description="We focus on the intersection of engineering excellence and business impact — building systems that work reliably, scale smoothly, and deliver measurable value."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
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
            Explore all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
