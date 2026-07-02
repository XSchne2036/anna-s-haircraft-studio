type LogoProps = {
  className?: string;
  variant?: "full" | "compact" | "mark";
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

  if (variant === "compact") {
    return (
      <span
        className={className}
        style={{ color: ink }}
        aria-label="Anna Hammesfahr Friseurhandwerk"
      >
        <span className="flex items-center gap-2.5">
          <span
            className="flex flex-col leading-[0.95] tracking-[0.06em]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            <span className="text-base sm:text-lg">ANNA</span>
            <span className="text-base sm:text-lg">HAMMESFAHR</span>
          </span>
          <span className="inline-block h-9 w-9">{Monogram}</span>
        </span>
      </span>
    );
  }

  return (
    <span
      className={className}
      style={{ color: ink }}
      aria-label="Anna Hammesfahr Friseurhandwerk"
    >
      <span className="inline-flex items-stretch gap-3">
        {/* Vertical caption on the left, height matches the wordmark */}
        <span
          className="text-[0.6rem] font-semibold uppercase leading-none tracking-[0.4em]"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontFamily: "var(--font-body)",
          }}
        >
          Friseurhandwerk
        </span>
        <span
          className="flex flex-col justify-center leading-[0.95] tracking-[0.06em]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
        >
          <span className="text-2xl sm:text-3xl">ANNA</span>
          <span className="text-2xl sm:text-3xl">HAMMESFAHR</span>
        </span>
        <span className="inline-flex items-center">
          <span className="inline-block h-14 w-14">{Monogram}</span>
        </span>
      </span>
    </span>
  );
}