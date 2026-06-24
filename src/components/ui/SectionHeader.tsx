interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  tag,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {tag && (
        <span className="inline-block text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4 border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 rounded-full">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-slate-400 text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}
