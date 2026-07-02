import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Scissors,
  Palette,
  Sparkles,
  Heart,
  Crown,
  MessageCircle,
  Award,
  MapPin,
  Phone,
  Star,
  Menu,
  X,
  Clock,
  ExternalLink,
} from "lucide-react";
import heroSalon from "@/assets/stuhl.jpg.asset.json";
import aboutStylist from "@/assets/waschbecken.jpg.asset.json";
import lampeImg from "@/assets/lampe.jpg.asset.json";
import glasImg from "@/assets/glas.jpg.asset.json";
import { Logo } from "@/components/logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Anna Hammesfahr Friseurhandwerk | Friseur Mühlhausen/Thüringen",
      },
      {
        name: "description",
        content:
          "Ihr Friseur in Mühlhausen/Thüringen. Haarschnitt, Coloration, Balayage, Hochzeitsstyling und professionelle Haarpflege. Jetzt Termin vereinbaren.",
      },
      {
        property: "og:title",
        content: "Anna Hammesfahr Friseurhandwerk | Friseur Mühlhausen/Thüringen",
      },
      {
        property: "og:description",
        content:
          "Ihr Friseur in Mühlhausen/Thüringen. Haarschnitt, Coloration, Balayage, Hochzeitsstyling und professionelle Haarpflege.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TrustSection />
        <ImpressionsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#ueber-uns", label: "Über uns" },
    { href: "#leistungen", label: "Leistungen" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center text-foreground">
          <Logo variant="compact" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" asChild>
            <a href="tel:+4915121947000">
              <Phone className="size-4" />
              Termin vereinbaren
            </a>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button className="w-full" asChild>
              <a href="tel:+4915121947000">
                <Phone className="size-4" />
                Termin vereinbaren
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden md:min-h-[700px]">
      <img
        src={heroSalon.url}
        alt="Eleganter Friseursalon mit warmem Ambiente"
        className="absolute inset-0 size-full object-cover"
        width={1536}
        height={1024}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-primary/60" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-balance text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Ihr Haar. Unser Handwerk.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
          Willkommen bei Anna Hammesfahr Friseurhandwerk in Mühlhausen/Thüringen. 
          Wir schaffen Looks, die zu Ihnen passen — mit Leidenschaft, 
          Fachwissen und einem Gespür für das Besondere.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" variant="secondary" asChild>
            <a href="tel:+4915121947000">
              <Phone className="size-5" />
              Jetzt anrufen
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            asChild
          >
            <a href="#leistungen">Unsere Leistungen</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="ueber-uns" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              Über uns
            </span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              Friseurhandwerk mit Herz und Stil
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Im Herzen von Mühlhausen, direkt am Untermarkt, heißen wir Sie herzlich willkommen. 
                Bei Anna Hammesfahr Friseurhandwerk steht die individuelle Beratung an erster Stelle.
              </p>
              <p>
                Ob klassischer Schnitt, mutige Coloration oder perfektes Styling für den besonderen 
                Anlass — wir nehmen uns Zeit für Sie und Ihre Wünsche. Mit hochwertigen Produkten 
                und modernen Techniken sorgen wir dafür, dass Sie sich rundum wohlfühlen.
              </p>
              <p>
                Vertrauen Sie auf Erfahrung, Kreativität und ein Team, das das Haarhandwerk 
                liebt. Wir freuen uns darauf, Sie zu verwöhnen.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild>
                <a href="#kontakt">Termin vereinbaren</a>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src={aboutStylist.url}
                alt="Friseurin bei der professionellen Haarbehandlung"
                className="size-full object-cover"
                width={1024}
                height={1024}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Scissors,
    title: "Haarschnitt & Styling",
    description:
      "Vom klassischen Schnitt bis zum trendigen Look — wir finden die Form, die Ihrem Typ am besten schmeichelt.",
  },
  {
    icon: Palette,
    title: "Coloration & Färbung",
    description:
      "Individuelle Farbberatung und professionelle Umsetzung für leuchtende, natürliche oder ausgefallene Töne.",
  },
  {
    icon: Sparkles,
    title: "Balayage & Strähnen",
    description:
      "Sonnengeküsste Highlights und sanfte Übergänge für Dimension und Leuchtkraft in Ihrem Haar.",
  },
  {
    icon: Heart,
    title: "Pflegebehandlungen",
    description:
      "Intensive Kur- und Pflegeanwendungen für gesundes, glänzendes Haar mit langanhaltendem Effekt.",
  },
  {
    icon: Crown,
    title: "Hochzeits- & Eventstyling",
    description:
      "Perfekt gestylt für den schönsten Tag Ihres Lebens oder jeden besonderen Anlass. Inklusive Beratung und Probestyling.",
  },
  {
    icon: MessageCircle,
    title: "Typberatung & Make-up",
    description:
      "Ganzheitliche Beratung zu Haarform, Farbe und Styling — abgestimmt auf Ihren Typ und Ihren Alltag.",
  },
];

function ServicesSection() {
  return (
    <section id="leistungen" className="bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Leistungen
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Alles für Ihr perfektes Haar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Von der klassischen Pflege bis zum kreativen Styling — entdecken Sie unser vielfältiges 
            Angebot für Damen und Herren.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md"
              >
                <div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 text-primary">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              Vertrauen
            </span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              Was unsere Kundinnen und Kunden sagen
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Ihre Zufriedenheit ist unser größtes Anliegen. Mit persönlicher Beratung, 
              hochwertigen Produkten und einem eingespielten Team sorgen wir dafür, 
              dass Sie unseren Salon mit einem Lächeln verlassen.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-6 fill-accent text-accent"
                  />
                ))}
              </div>
              <div>
                <p className="text-lg font-semibold text-foreground">5,0 von 5 Sternen</p>
                <p className="text-sm text-muted-foreground">Basierend auf 30 Google-Bewertungen</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <Award className="size-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                Hochwertige Produkte
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Wir arbeiten ausschließlich mit professionellen Marken, die Ihr Haar schonen und pflegen.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <MapPin className="size-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                Zentral in Mühlhausen
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Direkt am Untermarkt gelegen, leicht erreichbar und mit einer gemütlichen Atmosphäre.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <Clock className="size-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                Persönliche Beratung
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Wir nehmen uns Zeit für Sie und entwickeln gemeinsam den Look, der zu Ihrem Typ passt.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <Heart className="size-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                Herzlicher Service
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                In entspannter Umgebung verwöhnen wir Sie mit Fingerspitzengefühl und Liebe zum Detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpressionsSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Impressionen
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Ein Ort mit Charakter
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Historisches Gemäuer, liebevoll gestaltete Details und ein Kaffee zum Wohlfühlen —
            in unserem Salon dürfen Sie einen Moment abschalten.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src={lampeImg.url}
              alt="Historischer Messing-Kronleuchter mit geschliffenen Glasschirmen an der Stuckdecke"
              className="size-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src={glasImg.url}
              alt="Kaffee und Wasser mit goldenem Rand als Willkommensgruß im Salon"
              className="size-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="kontakt" className="bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Kontakt
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Besuchen Sie uns
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Wir freuen uns darauf, Sie in unserem Salon begrüßen zu dürfen. 
            Vereinbaren Sie am besten telefonisch einen Termin.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          <div className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-sm">
            <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 text-primary">
              <MapPin className="size-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-card-foreground">Adresse</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Untermarkt 35
              <br />
              99974 Mühlhausen/Thüringen
            </p>
            <Button variant="outline" size="sm" className="mt-4" asChild>
              <a
                href="https://maps.google.com/?cid=9606458136402781925&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="size-4" />
                In Google Maps öffnen
              </a>
            </Button>
          </div>

          <div className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-sm">
            <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 text-primary">
              <Phone className="size-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-card-foreground">Telefon</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Rufen Sie uns gerne an, um einen Termin zu vereinbaren.
            </p>
            <Button size="sm" className="mt-4" asChild>
              <a href="tel:+4915121947000">
                <Phone className="size-4" />
                01512 1947000
              </a>
            </Button>
          </div>

          <div className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-sm">
            <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 text-primary">
              <Clock className="size-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-card-foreground">Öffnungszeiten</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Gerne beraten wir Sie telefonisch zu unseren aktuellen Öffnungszeiten und Terminmöglichkeiten.
            </p>
            <Button variant="outline" size="sm" className="mt-4" asChild>
              <a href="tel:+4915121947000">
                <Phone className="size-4" />
                Jetzt anrufen
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-foreground">
              Anna Hammesfahr Friseurhandwerk
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Untermarkt 35, 99974 Mühlhausen/Thüringen
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+4915121947000"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              01512 1947000
            </a>
            <span className="text-muted-foreground">·</span>
            <a
              href="https://maps.google.com/?cid=9606458136402781925&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Google Maps
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Anna Hammesfahr Friseurhandwerk. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
