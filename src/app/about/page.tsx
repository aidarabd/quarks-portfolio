import { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the Quarks Code team — senior engineers and project managers with deep experience delivering national-scale government systems and enterprise platforms.",
};

const team = [
  {
    name: "Aidar Abakir",
    role: "CEO & Technical Lead",
    initial: "A",
    bio: "Software Engineer with 8+ years of experience across government, finance, and healthcare systems. Aidar builds scalable software that serves thousands of users and automates complex business processes. His focus is turning complex workflows into simple, reliable systems that improve efficiency and support organizational growth.",
    specialties: ["System Architecture", "Government Systems", "Process Automation", "Technical Leadership"],
  },
  {
    name: "Elmira Botobekova",
    role: "Project Manager",
    initial: "E",
    bio: "Project Manager with extensive experience leading large-scale government digital transformation projects across Kyrgyzstan. Elmira specializes in Scrum practices and coordinating cross-functional teams to deliver complex systems on time and at scale. She has led initiatives including national address registration platforms, statistical systems, and large-scale document production systems.",
    specialties: ["Project Management", "Scrum & Agile", "Government Projects", "Cross-functional Teams"],
  },
  {
    name: "Arzybek Bekmuratov",
    role: "Frontend Developer",
    initial: "A",
    bio: "Frontend Developer with 6 years of experience building complex web applications across logistics systems for US truck operations, financial automation platforms in Australia, and government digital systems. His focus is scalable, performant frontend architectures that handle real-world operational complexity while keeping user experience clean and efficient.",
    specialties: ["React", "Frontend Architecture", "Performance", "Complex UI Systems"],
  },
];

const values = [
  {
    title: "Engineering Excellence",
    description:
      "We hold our work to the same standards as the largest enterprise systems — because the organizations we serve depend on it.",
  },
  {
    title: "Business Understanding",
    description:
      "We don't just implement requirements. We understand the business context behind them — so the software we deliver solves the right problem.",
  },
  {
    title: "Transparent Delivery",
    description:
      "No surprises. You see what we're building at every step. We communicate proactively about progress, blockers, and decisions.",
  },
  {
    title: "Long-term Thinking",
    description:
      "We build for the future, not just the deadline. Our systems are designed to scale, adapt, and remain maintainable for years.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#03060f] overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[400px] bg-blue-600/8 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionHeader
            tag="About Us"
            title="Built by Engineers Who Understand Business"
            description="Quarks Code is a software development company focused on helping organizations automate processes, streamline operations, and build scalable digital products. Our experience spans government, finance, and healthcare — where reliability, security, and efficiency are non-negotiable."
          />
        </div>
      </section>

      {/* Mission quote */}
      <section className="py-20 bg-[#080d1a] border-y border-[#1e2d47]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
              &ldquo;We believe software should do more than solve today&apos;s problems — it should create a foundation for future growth. Our goal is simple:{" "}
              <span className="text-white font-medium">
                transform complex business challenges into efficient digital systems that create measurable value.
              </span>
              &rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#03060f]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader tag="What We Stand For" title="Our Principles" centered />
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
            tag="The Team"
            title="People Who Build Your Software"
            description="A small, focused team of senior specialists — every person who works on your project is experienced, accountable, and committed to the outcome."
            centered
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-[#03060f] border border-[#1e2d47] rounded-2xl p-8 hover:border-blue-500/30 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">{member.initial}</span>
                </div>
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
