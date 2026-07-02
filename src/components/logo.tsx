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
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-full w-auto"
    >
      {/*
        Salon monogram: a pair of scissors whose finger-loops on top
        form a bow, and whose blades cross into an X below.
        The two continuous ribbons start at the top pinch, loop out,
        cross at the centre, and end as the blade tips.
      */}
      {/* Left ribbon: from top pinch → loops out left → crosses centre → ends as bottom-right blade */}
      <path d="M32 14
               C 22 12, 12 20, 14 30
               C 16 38, 28 36, 32 32
               L 52 54" />
      {/* Right ribbon: mirror — top pinch → loops out right → crosses centre → ends as bottom-left blade */}
      <path d="M32 14
               C 42 12, 52 20, 50 30
               C 48 38, 36 36, 32 32
               L 12 54" />
      {/* Small knot where the two loops meet at the top */}
      <path d="M30 14 C 31 12, 33 12, 34 14" />
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