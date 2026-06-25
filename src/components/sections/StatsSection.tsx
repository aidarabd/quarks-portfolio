import { useTranslations } from "next-intl";

type Stat = { value: string; label: string };

export default function StatsSection() {
  const t = useTranslations("Stats");
  const stats = t.raw("items") as Stat[];

  return (
    <section className="border-y border-[#1e2d47] bg-[#080d1a]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
