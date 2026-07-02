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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-full w-auto"
    >
      {/*
        Salon monogram: two continuous ribbons form the scissors.
        Each ribbon starts as a blade tip at the bottom, travels up to
        the central pivot, then loops around to form a finger-hole on
        the opposite side. The two loops meet at the pivot as a bow.
      */}
      {/* Left ribbon: bottom-left blade → pivot → right-hand loop → back to pivot */}
      <path d="M 10 56
               L 32 32
               C 46 22, 54 14, 46 10
               C 38 6,  30 12, 32 22
               L 32 32" />
      {/* Right ribbon: bottom-right blade → pivot → left-hand loop → back to pivot */}
      <path d="M 54 56
               L 32 32
               C 18 22, 10 14, 18 10
               C 26 6,  34 12, 32 22
               L 32 32" />
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
          <span className="inline-block h-11 w-11">{Monogram}</span>
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