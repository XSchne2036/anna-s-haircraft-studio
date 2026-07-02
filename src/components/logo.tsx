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
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-full w-auto"
    >
      {/*
        Salon monogram: two continuous ribbons form a pair of scissors.
        Each ribbon starts at the bottom as a blade tip, rises up crossing
        the other at the centre pivot, then loops back on itself at the top
        to form the finger-hole. The two loops meet in the middle as a bow.
      */}
      {/* Left ribbon: bottom-left blade tip → crosses centre → up-right → loops back to centre-top */}
      <path d="M10 56
               L 32 34
               L 40 20
               C 44 12, 32 8, 30 18
               C 29 24, 34 28, 32 32" />
      {/* Right ribbon: bottom-right blade tip → crosses centre → up-left → loops back to centre-top */}
      <path d="M54 56
               L 32 34
               L 24 20
               C 20 12, 32 8, 34 18
               C 35 24, 30 28, 32 32" />
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