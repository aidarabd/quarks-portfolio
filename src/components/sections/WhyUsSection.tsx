import { CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const points = [
  {
    title: "Enterprise-Grade Engineering",
    description:
      "We apply the same rigor used in large-scale government and finance systems to every project — regardless of size.",
  },
  {
    title: "Direct Communication",
    description:
      "No account managers or middlemen. You work directly with the engineers building your system — faster decisions, better outcomes.",
  },
  {
    title: "Process-First Thinking",
    description:
      "We deeply understand your workflows before writing a single line of code. Better design decisions from day one.",
  },
  {
    title: "Built to Last",
    description:
      "We architect for the long term. Systems that don't just solve today's problem — they scale with your organization.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-[#03060f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionHeader
            tag="Why Quarks Code"
            title="Enterprise Thinking, Startup Speed"
            description="We combine the engineering discipline of large-scale systems with the responsiveness and direct communication of a focused team. You get both."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {points.map((p) => (
              <div
                key={p.title}
                className="bg-[#080d1a] border border-[#1e2d47] rounded-2xl p-6 hover:border-blue-500/30 transition-colors"
              >
                <CheckCircle2 size={18} className="text-blue-400 mb-3" />
                <h3 className="text-white font-semibold mb-2 text-sm">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
