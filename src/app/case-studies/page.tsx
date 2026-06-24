import { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how Quarks Code has delivered national-scale government software systems with measurable results — from citizen registration to passport issuance platforms.",
};

const cases = [
  {
    number: "01",
    tag: "Government · Digital Transformation",
    title: "Citizen Registration System",
    overview:
      "A national-level platform built to digitize and centralize the citizen registration process — eliminating paper-based workflows and the inefficiencies that came with them.",
    problem: {
      title: "The Problem",
      body: "Registration offices relied entirely on manual, paper-based processes. Documents were processed by hand, data was entered multiple times across different systems, and citizens often had to visit offices repeatedly to complete registration. Staff spent the majority of their time on low-value administrative tasks rather than serving citizens.",
    },
    solution: {
      title: "The Solution",
      body: "We developed a centralized web platform that digitizes the entire registration workflow — from document intake to final approval. The platform provides a unified back-office interface for staff, automated document routing between departments, and a structured data model that eliminates redundant entry.",
    },
    tech: ["ASP.NET Core", "React", "PostgreSQL"],
    results: [
      { metric: "70%", label: "Reduction in processing time" },
      { metric: "↓↓", label: "Data entry errors eliminated" },
      { metric: "↑", label: "Staff throughput and capacity" },
    ],
    colors: {
      tag: "bg-blue-500/10 border-blue-500/30 text-blue-300",
      metric: "text-blue-400",
      divider: "border-blue-500/20",
    },
  },
  {
    number: "02",
    tag: "Government · Identity Systems",
    title: "Passport Application & Issuance System",
    overview:
      "A comprehensive back-office platform managing the full lifecycle of passport applications — including integration with biometric scanning equipment, identity verification, and government databases.",
    problem: {
      title: "The Problem",
      body: "The passport issuance process required staff to manually coordinate across multiple disconnected systems and physical equipment. Biometric data capture, identity verification, document production, and record-keeping all happened in isolation — creating bottlenecks, delays, and high risk of errors in official identity documents.",
    },
    solution: {
      title: "The Solution",
      body: "We built a centralized back-office platform integrating the full passport issuance workflow. The system connects directly with biometric scanning devices, external government identity databases, and document production equipment — creating a single unified workspace. Every step is tracked, audited, and verifiable.",
    },
    tech: ["ASP.NET Core", "React", "PostgreSQL", "Biometric Hardware Integration"],
    results: [
      { metric: "80%", label: "Reduction in processing time per application" },
      { metric: "Full", label: "Integration with biometric equipment" },
      { metric: "End-to-end", label: "Audit trail for every document" },
    ],
    colors: {
      tag: "bg-indigo-500/10 border-indigo-500/30 text-indigo-300",
      metric: "text-indigo-400",
      divider: "border-indigo-500/20",
    },
  },
  {
    number: "03",
    tag: "Government · Anti-Corruption",
    title: "Land Allocation Application System",
    overview:
      "A transparent digital platform managing citizen applications for government land allocation — replacing a process vulnerable to manipulation with an auditable, rules-based system.",
    problem: {
      title: "The Problem",
      body: "Land allocation decisions were made through a manual, opaque process with paper queues and in-person evaluations. The lack of transparency and accountability created significant risk of corruption — both actual and perceived. Citizens had no visibility into application status or the criteria by which decisions were made.",
    },
    solution: {
      title: "The Solution",
      body: "We designed and built a web platform managing the entire allocation process — from citizen application through review, approval, and assignment. The system enforces business rules consistently, maintains a full audit log of every decision and action, and gives citizens real-time application visibility. Discretionary decisions are constrained and documented.",
    },
    tech: ["Web Platform", "Business Process Management", "Audit Logging"],
    results: [
      { metric: "100%", label: "Transparent, auditable allocation process" },
      { metric: "Eliminated", label: "Unstructured discretion in approvals" },
      { metric: "↑", label: "Public trust in the allocation process" },
    ],
    colors: {
      tag: "bg-violet-500/10 border-violet-500/30 text-violet-300",
      metric: "text-violet-400",
      divider: "border-violet-500/20",
    },
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#03060f] overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/8 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionHeader
            tag="Case Studies"
            title="Real Systems. Real Results."
            description="Every project we take on is high-stakes. Here is how we've solved them — and the measurable outcomes we delivered."
          />
        </div>
      </section>

      {/* Cases */}
      <section className="pb-24 bg-[#03060f]">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          {cases.map((c) => (
            <div
              key={c.number}
              className="bg-[#080d1a] border border-[#1e2d47] rounded-3xl p-8 md:p-12 overflow-hidden"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl font-bold text-white/8">{c.number}</span>
                    <span
                      className={`text-xs border rounded-full px-3 py-1 font-medium ${c.colors.tag}`}
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
                    {c.problem.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{c.problem.body}</p>
                </div>
                <div className="bg-[#03060f] border border-[#1e2d47] rounded-2xl p-6">
                  <h3 className="text-white font-semibold mb-3 text-xs uppercase tracking-widest">
                    {c.solution.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{c.solution.body}</p>
                </div>
              </div>

              {/* Results + Tech */}
              <div
                className={`border-t ${c.colors.divider} pt-8 grid grid-cols-1 md:grid-cols-2 gap-8`}
              >
                <div>
                  <h3 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">
                    Results
                  </h3>
                  <div className="flex flex-wrap gap-8">
                    {c.results.map((r) => (
                      <div key={r.label}>
                        <div className={`text-2xl font-bold mb-1 ${c.colors.metric}`}>
                          {r.metric}
                        </div>
                        <div className="text-slate-500 text-sm">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {c.tech.map((t) => (
                      <span
                        key={t}
                        className="text-sm text-slate-400 bg-white/5 border border-[#1e2d47] rounded-lg px-3 py-1.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
