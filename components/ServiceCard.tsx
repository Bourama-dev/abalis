import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  featured?: boolean;
}

export default function ServiceCard({ icon, title, description, href, featured }: ServiceCardProps) {
  return (
    <article
      className={`group relative rounded-xl border transition-all duration-300 overflow-hidden ${
        featured
          ? "bg-navy border-gold/30 hover:border-gold/60 hover:shadow-[0_0_0_1px_rgba(216,96,48,0.4),0_16px_48px_rgba(43,95,107,0.4)]"
          : "bg-white border-gray-100 hover:border-gold/40 hover:shadow-[0_1px_3px_rgba(0,0,0,0.04),0_12px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1"
      }`}
    >
      {/* Top accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[3px] transition-opacity duration-300 ${
          featured
            ? "bg-gradient-to-r from-gold to-gold-light opacity-60 group-hover:opacity-100"
            : "bg-gradient-to-r from-gold to-gold-light opacity-0 group-hover:opacity-100"
        }`}
        aria-hidden="true"
      />

      {/* Featured shimmer overlay */}
      {featured && (
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(216,96,48,0.05) 0%, transparent 50%, rgba(216,96,48,0.05) 100%)",
            backgroundSize: "200% 200%",
            animation: "gradient-shift 6s ease infinite",
          }}
          aria-hidden="true"
        />
      )}

      <div className="p-7">
        {/* Icon container */}
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
            featured
              ? "bg-gold/20 group-hover:bg-gold/30"
              : "bg-gray-50 group-hover:bg-orange-50"
          }`}
          aria-hidden="true"
        >
          <div
            className={`transition-all duration-300 group-hover:scale-110 ${
              featured ? "text-gold" : "text-navy group-hover:text-gold"
            }`}
          >
            {icon}
          </div>
        </div>

        {/* Content */}
        <h3
          className={`font-serif font-semibold text-lg mb-2.5 ${
            featured ? "text-white" : "text-dark-text"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm leading-relaxed mb-6 ${
            featured ? "text-white/60" : "text-mid-gray"
          }`}
        >
          {description}
        </p>

        {/* Link */}
        <Link
          href={href}
          className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group/link ${
            featured ? "text-gold hover:text-gold-light" : "text-navy hover:text-gold"
          }`}
          aria-label={`En savoir plus sur ${title}`}
        >
          En savoir plus
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="transition-transform duration-300 group-hover/link:translate-x-1.5"
            aria-hidden="true"
          >
            <path
              d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
