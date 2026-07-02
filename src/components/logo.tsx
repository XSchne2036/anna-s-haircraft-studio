type LogoProps = {
  className?: string;
  variant?: "full" | "mark";
  invert?: boolean;
};

/**
 * Wordmark reproduced from the salon's custom doormat:
 * - Antique-gold looping monogram (stylised scissor bow)
 * - Condensed uppercase "ANNA HAMMESFAHR" stack
 * - Vertical "FRISEURHANDWERK" caption on the left
 */
export function Logo({ className, variant = "full", invert = false }: LogoProps) {
  const ink = invert ? "var(--color-primary-foreground)" : "var(--color-foreground)";
  const gold = "var(--color-accent)";

  const Monogram = (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke={gold}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-full w-auto"
    >
      {/* Central stem */}
      <path d="M32 8 V56" />
      {/* Left loop (scissor bow) */}
      <path d="M32 30 C 14 26, 10 46, 22 50 C 32 52, 34 40, 32 32" />
      {/* Right loop */}
      <path d="M32 30 C 50 26, 54 46, 42 50 C 32 52, 30 40, 32 32" />
      {/* Top flourish */}
      <path d="M28 12 C 30 16, 34 16, 36 12" />
    </svg>
  );

  if (variant === "mark") {
    return <span className={className}>{Monogram}</span>;
  }

  return (
    <span
      className={className}
      style={{ color: ink }}
      aria-label="Anna Hammesfahr Friseurhandwerk"
    >
      <span className="flex items-center gap-3">
        {/* Vertical caption */}
        <span
          className="text-[0.55rem] font-semibold uppercase leading-none tracking-[0.35em]"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontFamily: "var(--font-body)",
          }}
        >
          Friseurhandwerk
        </span>
        {/* Stacked wordmark */}
        <span
          className="flex flex-col leading-[0.9] tracking-[0.08em]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
        >
          <span className="text-lg sm:text-xl">ANNA</span>
          <span className="text-lg sm:text-xl">HAMMESFAHR</span>
        </span>
        {/* Monogram */}
        <span className="h-9 w-9 sm:h-10 sm:w-10">{Monogram}</span>
      </span>
    </span>
  );
}