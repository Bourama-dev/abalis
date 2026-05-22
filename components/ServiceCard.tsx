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
      className={`group relative rounded-lg border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        featured
          ? "bg-navy border-gold/30 hover:border-gold/60"
          : "bg-white border-gray-100 hover:border-gold/30"
      }`}
    >
      <div className="p-7">
        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300 ${
            featured
              ? "bg-gold/20 group-hover:bg-gold/30"
              : "bg-cream group-hover:bg-gold/10"
          }`}
          aria-hidden="true"
        >
          <div className={featured ? "text-gold" : "text-navy group-hover:text-gold transition-colors duration-300"}>
            {icon}
          </div>
        </div>

        {/* Content */}
        <h3 className={`font-serif font-semibold text-lg mb-2 ${featured ? "text-white" : "text-dark-text"}`}>
          {title}
        </h3>
        <p className={`text-sm leading-relaxed mb-5 ${featured ? "text-white/60" : "text-mid-gray"}`}>
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
            className="transition-transform duration-200 group-hover/link:translate-x-1"
            aria-hidden="true"
          >
            <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

      {/* Hover accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-gold-light rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
    </article>
  );
}
