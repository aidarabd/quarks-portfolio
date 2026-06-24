import { Metadata } from "next";
import { Cpu, Globe, Zap, Shield, GitMerge, BarChart3 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/sections/CTASection";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Process automation, custom web applications, system integration, and government digital solutions. See how Quarks Code can help your organization.",
};

const services: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
}[] = [
  {
    icon: Zap,
    title: "Process Automation",
    subtitle: "Eliminate manual work at scale",
    description:
      "Manual processes are a hidden tax on your organization — they slow delivery, introduce errors, and consume your team's most valuable hours. We analyze, map, and replace repetitive workflows with automated systems that operate faster, more accurately, and around the clock.",
    outcomes: [
      "Automated document processing and routing",
      "Trigger-based workflow execution",
      "Error reduction and full audit trails",
      "Integration with existing tools and databases",
    ],
  },
  {
    icon: Globe,
    title: "Custom Web Applications",
    subtitle: "Enterprise platforms built to last",
    description:
      "Off-the-shelf software is built for the average use case — your organization isn't average. We design and develop web applications precisely fitted to your requirements, built for reliability, security, and the scale of users you need to serve.",
    outcomes: [
      "Citizen-facing and back-office portals",
      "Multi-role access and permissions management",
      "Responsive design for all devices",
      "Scalable, cloud-ready architecture",
    ],
  },
  {
    icon: GitMerge,
    title: "System Integration",
    subtitle: "Connect your digital infrastructure",
    description:
      "Most organizations run multiple systems that don't communicate. The result is manual data transfer, duplicate entry, and broken workflows. We build integrations that connect your existing tools — from legacy databases to modern APIs — into a cohesive ecosystem.",
    outcomes: [
      "REST and SOAP API integrations",
      "Legacy system connectivity",
      "Real-time data synchronization",
      "Biometric and hardware device integration",
    ],
  },
  {
    icon: Shield,
    title: "Government Digital Solutions",
    subtitle: "Purpose-built for the public sector",
    description:
      "Government software demands absolute reliability, security, audit trails, and the ability to serve thousands of citizens simultaneously. Our team has delivered multiple national-level platforms — we know what high-stakes public software requires from day one.",
    outcomes: [
      "Citizen registration and application portals",
      "Document issuance and verification systems",
      "Biometric equipment integration",
      "Secure, role-based access control",
    ],
  },
  {
    icon: Cpu,
    title: "Internal Enterprise Tools",
    subtitle: "Tools that fit how you actually work",
    description:
      "Generic SaaS products force your workflows into shapes they were never designed for. We build internal tools — dashboards, approval systems, case management, reporting — that match exactly how your team operates, not the other way around.",
    outcomes: [
      "Custom dashboards and management panels",
      "Workflow and multi-stage approval systems",
      "Case and queue management",
      "Role-based reporting and exports",
    ],
  },
  {
    icon: BarChart3,
    title: "Data & Reporting",
    subtitle: "Visibility into what matters",
    description:
      "Operational data is only valuable if you can read it. We build reporting layers, live dashboards, and analytics systems that give leadership and operational teams real-time visibility into performance, bottlenecks, and trends.",
    outcomes: [
      "Real-time operational dashboards",
      "Automated report generation and scheduling",
      "Data export and visualization",
      "KPI tracking and alerting",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#03060f] overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-blue-600/8 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionHeader
            tag="Services"
            title="What We Build and How We Help"
            description="We specialize in one area: replacing manual operations with reliable, scalable digital systems. Here's exactly what we do and what you get."
          />
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-[#03060f]">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-[#080d1a] border border-[#1e2d47] hover:border-blue-500/30 rounded-2xl p-8 md:p-10 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 bg-blue-500/15 rounded-xl flex items-center justify-center shrink-0">
                        <Icon size={22} className="text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xl">{service.title}</h3>
                        <p className="text-slate-500 text-sm">{service.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-slate-400 leading-relaxed">{service.description}</p>
                  </div>
                  <div>
                    <h4 className="text-slate-300 font-semibold text-xs uppercase tracking-widest mb-4">
                      What You Get
                    </h4>
                    <ul className="space-y-3">
                      {service.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0" />
                          <span className="text-slate-400 text-sm leading-relaxed">{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#080d1a]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            tag="How We Work"
            title="Our Delivery Process"
            description="Structured delivery from discovery to launch — every step is designed to reduce risk and maximize the value we deliver."
            centered
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We map your current processes, define requirements, and identify the highest-impact opportunities for improvement.",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "We design the system architecture and user experience before writing a single line of code.",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Iterative development with regular demos. You see progress at every stage and can give feedback early.",
              },
              {
                step: "04",
                title: "Launch & Support",
                description:
                  "We handle deployment and provide ongoing support to ensure the system performs exactly as designed.",
              },
            ].map((p) => (
              <div
                key={p.step}
                className="bg-[#03060f] border border-[#1e2d47] rounded-2xl p-6"
              >
                <div className="text-4xl font-bold text-blue-500/25 mb-4">{p.step}</div>
                <h3 className="text-white font-semibold mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
