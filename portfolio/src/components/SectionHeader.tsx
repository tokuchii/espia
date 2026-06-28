import Link from "next/link";

interface SectionHeaderProps {
  number: string;
  title: string;
  allLink?: string;
  allLabel?: string;
}

export default function SectionHeader({ number, title, allLink, allLabel }: SectionHeaderProps) {
  return (
    <div className="flex items-baseline justify-between mb-6">
      <h2 className="text-lg text-white font-medium tracking-tight">
        <span className="text-white/40 mr-2">{number}</span>
        — {title}
      </h2>
      {allLink && (
        <Link
          href={allLink}
          className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors"
        >
          {allLabel || `all ${title}`} →
        </Link>
      )}
    </div>
  );
}