interface AbalisLogoProps {
  className?: string;
  /** "light" = teal text (on white bg), "dark" = white text (on teal bg) */
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { width: 120, height: 48 },
  md: { width: 160, height: 64 },
  lg: { width: 220, height: 88 },
};

export default function AbalisLogo({ className = "", variant = "light", size = "md" }: AbalisLogoProps) {
  const { width, height } = sizes[size];
  const textColor = variant === "dark" ? "#FFFFFF" : "#2B5F6B";
  const subtitleColor = variant === "dark" ? "rgba(255,255,255,0.85)" : "#2B5F6B";
  const lineColor = variant === "dark" ? "rgba(255,255,255,0.4)" : "#2B5F6B";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 220 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Abalis Traduction"
    >
      {/* ── Speech bubbles above the "i" ── */}
      {/* Beige/tan bubble (back) */}
      <path
        d="M138 6 L138 24 L150 24 L150 28 L155 24 L166 24 L166 6 Z"
        fill="#C4AD8E"
      />
      {/* Orange bubble (front, larger, overlapping) */}
      <path
        d="M146 2 L146 22 L162 22 L162 27 L168 22 L181 22 L181 2 Z"
        fill="#D86030"
      />
      {/* ® mark */}
      <text x="183" y="8" fontSize="8" fill="#D86030" fontFamily="serif">®</text>

      {/* ── "abalis" wordmark ── */}
      <text
        x="4"
        y="62"
        fontSize="42"
        fontWeight="700"
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fill={textColor}
        letterSpacing="-1"
      >
        abalis
      </text>

      {/* ── Decorative lines + "TRADUCTION" ── */}
      <line x1="4" y1="75" x2="44" y2="75" stroke={lineColor} strokeWidth="1.2"/>
      <text
        x="50"
        y="77"
        fontSize="11"
        fontWeight="600"
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fill={subtitleColor}
        letterSpacing="3"
      >
        TRADUCTION
      </text>
      <line x1="176" y1="75" x2="216" y2="75" stroke={lineColor} strokeWidth="1.2"/>
    </svg>
  );
}
