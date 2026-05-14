import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Clock,
  Users,
  Award,
  Globe,
  Shield,
  Building2,
  Handshake,
  BookOpen,
  Star,
  Calendar,
  Search,
  Bed,
  ChevronRight,
} from "lucide-react";
import {
  destinations,
  excursions,
  contactInfo,
  partnerLogos,
} from "@/lib/data";
import { Price } from "@/components/Price";
import { ProgramsSearch } from "@/components/ProgramsSearch";
import { HomeHeroSection } from "@/components/HomeHeroSection";
import { CardCarousel } from "@/components/CardCarousel";
import { ReviewsSection } from "@/components/ReviewsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { t, type Locale } from "@/lib/i18n-config";

function localizeHref(href: string, locale: Locale): string {
  if (href.startsWith("/en/")) return `/${locale}${href.slice(3)}`;
  return href;
}

function formatSlug(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function BackLink({ href, label, locale }: { href: string; label: string; locale?: Locale }) {
  return (
    <Link
      href={locale ? localizeHref(href, locale) : href}
      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
    >
      <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
      {label}
    </Link>
  );
}

function PageHero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image?: string;
}) {
  return (
    <div className="relative min-h-[35vh] md:min-h-[45vh] bg-gray-900 flex items-end pb-12">
      {image ? (
        <>
          <Image src={image} alt="" fill className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      )}
      <div className="relative container mx-auto px-4 lg:px-8">
        <h1 className="text-white text-3xl md:text-5xl font-display mb-3">
          {title}
        </h1>
        <p className="text-white/70 max-w-xl">{subtitle}</p>
      </div>
    </div>
  );
}

export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ locale: string; slug?: string[] }>;
}) {
  const { locale, slug } = await params;
  const l = locale as Locale;
  const prefix = `/${locale}`;

  if (!slug || slug.length === 0) {
    return (
      <>
        <HomeHeroSection />
        <CardCarousel
          title={t(l, "sections.destinationsTitle")}
          subtitle={t(l, "sections.destinationsSubtitle")}
          cards={destinations.map(d => ({ ...d, href: localizeHref(d.href, l) }))}
          viewAllLabel={t(l, "sections.viewAllDestinations")}
          viewAllHref={`${prefix}/destination/egypt`}
        />
        <CardCarousel
          title={t(l, "sections.excursionsTitle")}
          subtitle={t(l, "sections.excursionsSubtitle")}
          cards={excursions.map(d => ({ ...d, href: localizeHref(d.href, l) }))}
          viewAllLabel={t(l, "sections.viewAllTypes")}
          viewAllHref={`${prefix}/excursions`}
        />
        <ReviewsSection />
        <PartnersSection />
      </>
    );
  }

  const path = slug.join("/");

  const routes: Record<string, () => React.ReactNode> = {
    "destination/egypt": () => <DestinationsPage locale={l} />,
    excursions: () => <ExcursionsPage locale={l} />,
    about: () => <AboutPage locale={l} />,
    contact: () => <ContactPage locale={l} />,
    news: () => <NewsPage locale={l} />,
    ibe: () => <ProgramsPage locale={l} />,
    "hotels-destinations": () => <HotelsPage locale={l} />,
    "affiliated-companies": () => <AffiliatedPage locale={l} />,
    partner: () => <PartnerPage locale={l} />,
    branches: () => <BranchesPage locale={l} />,
    "destination-handbook": () => <HandbookPage locale={l} />,
    testimonials: () => <TestimonialsPage locale={l} />,
    privacy: () => <PrivacyPage locale={l} />,
    terms: () => <TermsPage locale={l} />,
  };

  if (routes[path]) return routes[path]();

  if (slug[0] === "destination" && slug.length >= 3) {
    const dest = destinations.find(
      (d) => d.href === `/en/${path}` || d.href === `/${locale}/${path}`
    );
    if (dest) return <DestinationDetailPage destination={dest} locale={l} />;
  }

  if (slug[0] === "travel-idea" && slug.length >= 2) {
    const exc = excursions.find(
      (e) => e.href === `/en/${path}` || e.href === `/${locale}/${path}`
    );
    if (exc) return <ExcursionDetailPage excursion={exc} locale={l} />;
  }

  const title = formatSlug(slug[slug.length - 1]);
  return (
    <div>
      <PageHero title={title} subtitle="" />
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <BackLink href={prefix} label={t(l, "common.backToHome")} />
      </div>
    </div>
  );
}

/* ─── DESTINATIONS ─── */

function DestinationsPage({ locale }: { locale: Locale }) {
  return (
    <div>
      <PageHero
        title={t(locale, "pages.destinationsTitle")}
        subtitle={t(locale, "pages.destinationsSubtitle")}
        image="/images/destinations/cairo.jpg"
      />
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <BackLink href={`/${locale}`} label={t(locale, "common.backToHome")} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <Link
              key={dest.name}
              href={localizeHref(dest.href, locale)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-white text-2xl font-medium">
                  {dest.name}
                </h2>
                <p className="text-white/70 text-sm mt-1">
                  {dest.tourCount} {t(locale, "common.tours")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function DestinationDetailPage({
  destination,
  locale,
}: {
  destination: (typeof destinations)[number];
  locale: Locale;
}) {
  const descKeys: Record<string, string> = {
    Aswan: "aswan",
    Cairo: "cairo",
    Hurghada: "hurghada",
    Luxor: "luxor",
    "Sharm El Sheikh": "sharmElSheikh",
    "Marsa Alam": "marsaAlam",
    "Mersa Matruh": "mersaMatruh",
  };
  const descKey = descKeys[destination.name];

  return (
    <div>
      <div className="relative min-h-[45vh] md:min-h-[55vh] flex items-end">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
        <div className="relative w-full pb-10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
              <MapPin className="w-4 h-4" />
              {t(locale, "common.egypt")}
            </div>
            <h1 className="text-white text-4xl md:text-5xl font-display">
              {destination.name}
            </h1>
            <p className="text-white/70 mt-2">
              {destination.tourCount} {t(locale, "common.toursAvailable")}
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <BackLink href={`/${locale}/destination/egypt`} label={t(locale, "common.allDestinations")} />
        <div className="max-w-3xl">
          <p className="text-lg text-foreground leading-relaxed mb-8">
            {descKey
              ? t(locale, `destDesc.${descKey}`)
              : t(locale, "destDesc.fallback").replace("{name}", destination.name)}
          </p>
          <h2 className="font-display text-2xl mb-6">
            {t(locale, "destDesc.availableTours").replace("{name}", destination.name)}
          </h2>
          <div className="grid gap-4">
            {Array.from({ length: Math.min(destination.tourCount, 4) }).map(
              (_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 border rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 relative">
                    <Image
                      src={destination.image}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">
                      {t(locale, "destDesc.discoveryTour").replace("{name}", destination.name).replace("{n}", String(i + 1))}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {3 + i} {t(locale, "common.hours")}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {t(locale, "common.max")} {8 + i * 2} {t(locale, "common.people")}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <Price usd={45 + i * 25} className="font-semibold text-lg" />
                    <p className="text-xs text-muted-foreground">{t(locale, "common.perPerson")}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── EXCURSIONS ─── */

function ExcursionsPage({ locale }: { locale: Locale }) {
  return (
    <div>
      <PageHero
        title={t(locale, "pages.excursionsPageTitle")}
        subtitle={t(locale, "pages.excursionsPageSubtitle")}
        image="/images/excursions/cultural-historical.jpg"
      />
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <BackLink href={`/${locale}`} label={t(locale, "common.backToHome")} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {excursions.map((exc) => (
            <Link
              key={exc.name}
              href={localizeHref(exc.href, locale)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src={exc.image}
                alt={exc.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-white text-xl font-medium">{exc.name}</h2>
                <p className="text-white/70 text-sm mt-1">
                  {exc.tourCount} {exc.tourCount === 1 ? t(locale, "common.tour") : t(locale, "common.tours")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExcursionDetailPage({
  excursion,
  locale,
}: {
  excursion: (typeof excursions)[number];
  locale: Locale;
}) {
  const excDescKeys: Record<string, string> = {
    Snorkeling: "snorkeling",
    "Luxury & Premium Experiences": "luxury",
    "Boat Trips & Luxury Cruises": "boatTrips",
    Safaris: "safaris",
    "Fast Track & Assistance Services": "fastTrack",
    "Cultural & Historical Tours": "cultural",
    "Adventure & Desert Tours": "adventure",
    "City Breaks": "cityBreaks",
    "Night Tours & Entertainment": "nightTours",
    "Private Airport Transfers": "transfers",
  };
  const excDescKey = excDescKeys[excursion.name];

  return (
    <div>
      <div className="relative min-h-[45vh] md:min-h-[55vh] flex items-end">
        <Image
          src={excursion.image}
          alt={excursion.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
        <div className="relative w-full pb-10">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-white text-4xl md:text-5xl font-display">
              {excursion.name}
            </h1>
            <p className="text-white/70 mt-2">
              {excursion.tourCount} {t(locale, "common.toursAvailable")}
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <BackLink href={`/${locale}/excursions`} label={t(locale, "nav.allExcursions")} />
        <div className="max-w-3xl">
          <p className="text-lg text-foreground leading-relaxed mb-8">
            {excDescKey
              ? t(locale, `excDesc.${excDescKey}`)
              : t(locale, "excDesc.fallback").replace("{name}", excursion.name)}
          </p>
          <h2 className="font-display text-2xl mb-6">
            {t(locale, "excDesc.featuredTours").replace("{name}", excursion.name)}
          </h2>
          <div className="grid gap-4">
            {Array.from({ length: Math.min(excursion.tourCount, 3) }).map(
              (_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 border rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 relative">
                    <Image
                      src={excursion.image}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">
                      {t(locale, "excDesc.experience").replace("{name}", excursion.name).replace("{n}", String(i + 1))}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {2 + i * 2} {t(locale, "common.hours")}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5" />
                        4.{7 + (i % 3)}/5
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <Price usd={35 + i * 20} className="font-semibold text-lg" />
                    <p className="text-xs text-muted-foreground">{t(locale, "common.perPerson")}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── ABOUT ─── */

function AboutPage({ locale }: { locale: Locale }) {
  const stats = [
    { value: "50+", label: t(locale, "about.yearsExperience") },
    { value: "100K+", label: t(locale, "about.happyTravelers") },
    { value: "200+", label: t(locale, "about.tourPackages") },
    { value: "7", label: t(locale, "about.egyptianDestinations") },
  ];

  return (
    <div>
      <PageHero
        title={t(locale, "pages.aboutTitle")}
        subtitle={t(locale, "pages.aboutSubtitle")}
        image="/images/destinations/luxor.jpg"
      />
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <BackLink href={`/${locale}`} label={t(locale, "common.backToHome")} />
        <div className="max-w-4xl">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {stats.map((s) => (
              <div
                key={s.label}
                className="text-center p-6 rounded-xl bg-gray-50"
              >
                <p className="text-3xl font-bold text-[rgb(230,0,0)]">
                  {s.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl mb-4">{t(locale, "about.ourStory")}</h2>
          <p className="text-foreground leading-relaxed mb-6">
            {t(locale, "about.storyP1")}
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            {t(locale, "about.storyP2")}
          </p>

          <h2 className="font-display text-2xl mb-4 mt-10">{t(locale, "about.whatWeOffer")}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: Globe,
                title: t(locale, "about.dmc"),
                desc: t(locale, "about.dmcDesc"),
              },
              {
                icon: Users,
                title: t(locale, "about.mice"),
                desc: t(locale, "about.miceDesc"),
              },
              {
                icon: Award,
                title: t(locale, "about.luxury"),
                desc: t(locale, "about.luxuryDesc"),
              },
              {
                icon: Shield,
                title: t(locale, "about.reliable"),
                desc: t(locale, "about.reliableDesc"),
              },
            ].map((item) => (
              <div key={item.title} className="p-5 border rounded-xl">
                <item.icon className="w-6 h-6 text-[rgb(230,0,0)] mb-3" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl mb-4 mt-10">{t(locale, "about.ourPartners")}</h2>
          <p className="text-muted-foreground mb-6">
            {t(locale, "about.partnersNote")}
          </p>
          <div className="flex flex-wrap items-center gap-8">
            {partnerLogos.map((p) => (
              <Image
                key={p.name}
                src={p.image}
                alt={p.alt}
                width={100}
                height={50}
                className="h-10 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── CONTACT ─── */

function ContactPage({ locale }: { locale: Locale }) {
  return (
    <div>
      <PageHero
        title={t(locale, "pages.contactTitle")}
        subtitle={t(locale, "pages.contactSubtitle")}
        image="/images/destinations/cairo.jpg"
      />
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <BackLink href={`/${locale}`} label={t(locale, "common.backToHome")} />
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <div>
            <h2 className="font-display text-2xl mb-6">{t(locale, "contact.sendUsMessage")}</h2>
            <form className="space-y-4" action="#">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={t(locale, "contact.firstName")}
                  className="w-full px-4 py-3 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-[rgb(230,0,0)]/20 focus:border-[rgb(230,0,0)]"
                />
                <input
                  type="text"
                  placeholder={t(locale, "contact.lastName")}
                  className="w-full px-4 py-3 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-[rgb(230,0,0)]/20 focus:border-[rgb(230,0,0)]"
                />
              </div>
              <input
                type="email"
                placeholder={t(locale, "contact.emailAddress")}
                className="w-full px-4 py-3 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-[rgb(230,0,0)]/20 focus:border-[rgb(230,0,0)]"
              />
              <input
                type="tel"
                placeholder={t(locale, "contact.phoneNumber")}
                className="w-full px-4 py-3 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-[rgb(230,0,0)]/20 focus:border-[rgb(230,0,0)]"
              />
              <select className="w-full px-4 py-3 border rounded-lg text-sm text-gray-500 outline-none focus:ring-2 focus:ring-[rgb(230,0,0)]/20 focus:border-[rgb(230,0,0)]">
                <option>{t(locale, "contact.selectSubject")}</option>
                <option>{t(locale, "contact.generalInquiry")}</option>
                <option>{t(locale, "contact.tourBooking")}</option>
                <option>{t(locale, "contact.corporateMice")}</option>
                <option>{t(locale, "contact.partnership")}</option>
                <option>{t(locale, "contact.feedback")}</option>
              </select>
              <textarea
                placeholder={t(locale, "contact.yourMessage")}
                rows={5}
                className="w-full px-4 py-3 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-[rgb(230,0,0)]/20 focus:border-[rgb(230,0,0)] resize-none"
              />
              <button
                type="submit"
                className="bg-[rgb(230,0,0)] text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                {t(locale, "common.sendMessage")}
              </button>
            </form>
          </div>

          <div>
            <h2 className="font-display text-2xl mb-6">{t(locale, "contact.getInTouch")}</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[rgb(230,0,0)]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t(locale, "contact.phone")}</h3>
                  <p className="text-muted-foreground text-sm">
                    {contactInfo.phone}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {contactInfo.phoneLabel}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[rgb(230,0,0)]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t(locale, "contact.email")}</h3>
                  <p className="text-muted-foreground text-sm">
                    {contactInfo.email}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {contactInfo.emailLabel}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[rgb(230,0,0)]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t(locale, "contact.address")}</h3>
                  <p className="text-muted-foreground text-sm">
                    {contactInfo.address}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[rgb(230,0,0)]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t(locale, "contact.workingHours")}</h3>
                  <p className="text-muted-foreground text-sm">
                    {t(locale, "contact.workHoursValue")}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {t(locale, "contact.emergencySupport")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── PROGRAMS & HOTELS (IBE) ─── */

function ProgramsPage({ locale }: { locale: Locale }) {
  return (
    <div>
      <PageHero
        title={t(locale, "pages.programsTitle")}
        subtitle={t(locale, "pages.programsSubtitle")}
        image="/images/slides/slider1.jpg"
      />
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <BackLink href={`/${locale}`} label={t(locale, "common.backToHome")} />
        <ProgramsSearch />
      </div>
    </div>
  );
}

/* ─── HOTELS ─── */

function HotelsPage({ locale }: { locale: Locale }) {
  const hotels = [
    {
      name: "Marriott Mena House",
      location: "Cairo, Giza",
      stars: 5,
      price: 180,
      image: "/images/destinations/cairo.jpg",
    },
    {
      name: "Steigenberger Resort",
      location: "Hurghada",
      stars: 5,
      price: 120,
      image: "/images/destinations/hurghada.jpg",
    },
    {
      name: "Savoy Luxury Resort",
      location: "Sharm El Sheikh",
      stars: 5,
      price: 150,
      image: "/images/destinations/sharm-el-sheikh.jpg",
    },
    {
      name: "Sofitel Winter Palace",
      location: "Luxor",
      stars: 5,
      price: 200,
      image: "/images/destinations/luxor.jpg",
    },
    {
      name: "Movenpick Resort",
      location: "Aswan",
      stars: 4,
      price: 95,
      image: "/images/destinations/aswan.jpg",
    },
    {
      name: "Hilton Marsa Alam",
      location: "Marsa Alam",
      stars: 5,
      price: 110,
      image: "/images/destinations/marsa-alam.jpg",
    },
  ];

  return (
    <div>
      <PageHero
        title={t(locale, "pages.hotelsTitle")}
        subtitle={t(locale, "pages.hotelsSubtitle")}
        image="/images/slides/slider5.jpg"
      />
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <BackLink href={`/${locale}`} label={t(locale, "common.backToHome")} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <div
              key={hotel.name}
              className="border rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: hotel.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <h3 className="font-semibold text-lg">{hotel.name}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {hotel.location}
                </p>
                <div className="mt-3 flex items-end justify-between">
                  <div>
                    <span className="text-xs text-muted-foreground">{t(locale, "common.from")}</span>
                    <p className="text-lg font-bold text-[rgb(230,0,0)]">
                      <Price usd={hotel.price} />
                      <span className="text-xs font-normal text-muted-foreground">
                        {t(locale, "common.perNight")}
                      </span>
                    </p>
                  </div>
                  <button className="text-sm bg-[rgb(230,0,0)] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-1">
                    <Bed className="w-3.5 h-3.5" />
                    {t(locale, "common.book")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── NEWS ─── */

function NewsPage({ locale }: { locale: Locale }) {
  const articles = [
    {
      title: t(locale, "news.article1Title"),
      date: t(locale, "news.article1Date"),
      excerpt: t(locale, "news.article1Excerpt"),
      image: "/images/destinations/luxor.jpg",
    },
    {
      title: t(locale, "news.article2Title"),
      date: t(locale, "news.article2Date"),
      excerpt: t(locale, "news.article2Excerpt"),
      image: "/images/destinations/cairo.jpg",
    },
    {
      title: t(locale, "news.article3Title"),
      date: t(locale, "news.article3Date"),
      excerpt: t(locale, "news.article3Excerpt"),
      image: "/images/destinations/hurghada.jpg",
    },
    {
      title: t(locale, "news.article4Title"),
      date: t(locale, "news.article4Date"),
      excerpt: t(locale, "news.article4Excerpt"),
      image: "/images/destinations/cairo.jpg",
    },
    {
      title: t(locale, "news.article5Title"),
      date: t(locale, "news.article5Date"),
      excerpt: t(locale, "news.article5Excerpt"),
      image: "/images/destinations/aswan.jpg",
    },
    {
      title: t(locale, "news.article6Title"),
      date: t(locale, "news.article6Date"),
      excerpt: t(locale, "news.article6Excerpt"),
      image: "/images/destinations/marsa-alam.jpg",
    },
  ];

  return (
    <div>
      <PageHero
        title={t(locale, "pages.newsTitle")}
        subtitle={t(locale, "pages.newsSubtitle")}
        image="/images/destinations/aswan.jpg"
      />
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <BackLink href={`/${locale}`} label={t(locale, "common.backToHome")} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={article.image}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-muted-foreground mb-2">
                  {article.date}
                </p>
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-[rgb(230,0,0)] mt-3 group-hover:gap-2 transition-all">
                  {t(locale, "common.readMore")} <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── INTERNATIONAL OFFICES ─── */

function OfficesPage({ locale }: { locale: Locale }) {
  const offices = [
    {
      city: "Cairo",
      country: "Egypt",
      role: "Headquarters",
      address: "TODO: Gedotravel address",
      phone: "+20 10 00927322",
    },
    {
      city: "Dubai",
      country: "UAE",
      role: "Regional Office",
      address: "Dubai, United Arab Emirates",
      phone: "+971 XX XXX XXXX",
    },
    {
      city: "London",
      country: "United Kingdom",
      role: "European Office",
      address: "London, United Kingdom",
      phone: "+44 XX XXXX XXXX",
    },
    {
      city: "Berlin",
      country: "Germany",
      role: "European Office",
      address: "Berlin, Germany",
      phone: "+49 XX XXXX XXXX",
    },
  ];

  return (
    <div>
      <PageHero
        title={t(locale, "pages.officesTitle")}
        subtitle={t(locale, "pages.officesSubtitle")}
      />
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <BackLink href={`/${locale}`} label={t(locale, "common.backToHome")} />
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
          {offices.map((office) => (
            <div key={office.city} className="p-6 border rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-5 h-5 text-[rgb(230,0,0)]" />
                <span className="text-xs font-medium text-[rgb(230,0,0)] uppercase tracking-wider">
                  {office.role}
                </span>
              </div>
              <h3 className="font-display text-xl mb-1">
                {office.city}, {office.country}
              </h3>
              <p className="text-sm text-muted-foreground">{office.address}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {office.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── AFFILIATED COMPANIES ─── */

function AffiliatedPage({ locale }: { locale: Locale }) {
  const companies = [
    {
      name: t(locale, "affiliated.tours"),
      desc: t(locale, "affiliated.toursDesc"),
    },
    {
      name: t(locale, "affiliated.transport"),
      desc: t(locale, "affiliated.transportDesc"),
    },
    {
      name: t(locale, "affiliated.hotels"),
      desc: t(locale, "affiliated.hotelsDesc"),
    },
    {
      name: t(locale, "affiliated.aviation"),
      desc: t(locale, "affiliated.aviationDesc"),
    },
  ];

  return (
    <div>
      <PageHero
        title={t(locale, "pages.affiliatedTitle")}
        subtitle={t(locale, "pages.affiliatedSubtitle")}
      />
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <BackLink href={`/${locale}`} label={t(locale, "common.backToHome")} />
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
          {companies.map((c) => (
            <div key={c.name} className="p-6 border rounded-xl">
              <Building2 className="w-8 h-8 text-[rgb(230,0,0)] mb-3" />
              <h3 className="font-semibold text-lg mb-2">{c.name}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── BE OUR PARTNER ─── */

function PartnerPage({ locale }: { locale: Locale }) {
  return (
    <div>
      <PageHero
        title={t(locale, "pages.partnerTitle")}
        subtitle={t(locale, "pages.partnerSubtitle")}
        image="/images/destinations/sharm-el-sheikh.jpg"
      />
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <BackLink href={`/${locale}`} label={t(locale, "common.backToHome")} />
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <div>
            <h2 className="font-display text-2xl mb-4">{t(locale, "partnerPage.whyPartner")}</h2>
            <div className="space-y-4">
              {[
                {
                  icon: Globe,
                  title: t(locale, "partnerPage.globalReach"),
                  desc: t(locale, "partnerPage.globalReachDesc"),
                },
                {
                  icon: Handshake,
                  title: t(locale, "partnerPage.trustedReputation"),
                  desc: t(locale, "partnerPage.trustedReputationDesc"),
                },
                {
                  icon: Award,
                  title: t(locale, "partnerPage.competitiveRates"),
                  desc: t(locale, "partnerPage.competitiveRatesDesc"),
                },
                {
                  icon: Shield,
                  title: t(locale, "partnerPage.reliableOps"),
                  desc: t(locale, "partnerPage.reliableOpsDesc"),
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-[rgb(230,0,0)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl mb-4">{t(locale, "partnerPage.partnerInquiry")}</h2>
            <form className="space-y-4" action="#">
              <input
                type="text"
                placeholder={t(locale, "partnerPage.companyName")}
                className="w-full px-4 py-3 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-[rgb(230,0,0)]/20 focus:border-[rgb(230,0,0)]"
              />
              <input
                type="text"
                placeholder={t(locale, "partnerPage.contactPerson")}
                className="w-full px-4 py-3 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-[rgb(230,0,0)]/20 focus:border-[rgb(230,0,0)]"
              />
              <input
                type="email"
                placeholder={t(locale, "contact.emailAddress")}
                className="w-full px-4 py-3 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-[rgb(230,0,0)]/20 focus:border-[rgb(230,0,0)]"
              />
              <select className="w-full px-4 py-3 border rounded-lg text-sm text-gray-500 outline-none focus:ring-2 focus:ring-[rgb(230,0,0)]/20 focus:border-[rgb(230,0,0)]">
                <option>{t(locale, "partnerPage.partnershipType")}</option>
                <option>{t(locale, "partnerPage.travelAgency")}</option>
                <option>{t(locale, "partnerPage.hotelResort")}</option>
                <option>{t(locale, "partnerPage.transportProvider")}</option>
                <option>{t(locale, "partnerPage.tourOperator")}</option>
                <option>{t(locale, "partnerPage.other")}</option>
              </select>
              <textarea
                placeholder={t(locale, "partnerPage.tellAboutBusiness")}
                rows={4}
                className="w-full px-4 py-3 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-[rgb(230,0,0)]/20 focus:border-[rgb(230,0,0)] resize-none"
              />
              <button
                type="submit"
                className="bg-[rgb(230,0,0)] text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                {t(locale, "partnerPage.submitInquiry")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── BRANCHES ─── */

function BranchesPage({ locale }: { locale: Locale }) {
  const branches = [
    {
      name: t(locale, "branches.cairoMain"),
      address: "TODO: Gedotravel address",
      phone: "+20 10 00927322",
      hours: "Sun–Thu: 9AM–5PM",
    },
    {
      name: t(locale, "branches.hurghada"),
      address: "Hurghada, Red Sea, Egypt",
      phone: "+20 10 00927322",
      hours: "Daily: 8AM–8PM",
    },
    {
      name: t(locale, "branches.sharm"),
      address: "Sharm El Sheikh, South Sinai, Egypt",
      phone: "+20 10 00927322",
      hours: "Daily: 8AM–8PM",
    },
    {
      name: t(locale, "branches.luxor"),
      address: "Luxor, Upper Egypt",
      phone: "+20 10 00927322",
      hours: "Daily: 8AM–6PM",
    },
    {
      name: t(locale, "branches.aswan"),
      address: "Aswan, Upper Egypt",
      phone: "+20 10 00927322",
      hours: "Daily: 8AM–6PM",
    },
    {
      name: t(locale, "branches.marsaAlam"),
      address: "Marsa Alam, Red Sea, Egypt",
      phone: "+20 10 00927322",
      hours: "Daily: 8AM–8PM",
    },
  ];

  return (
    <div>
      <PageHero
        title={t(locale, "pages.branchesTitle")}
        subtitle={t(locale, "pages.branchesSubtitle")}
      />
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <BackLink href={`/${locale}`} label={t(locale, "common.backToHome")} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          {branches.map((b) => (
            <div key={b.name} className="p-5 border rounded-xl">
              <MapPin className="w-6 h-6 text-[rgb(230,0,0)] mb-3" />
              <h3 className="font-semibold mb-2">{b.name}</h3>
              <p className="text-sm text-muted-foreground">{b.address}</p>
              <p className="text-sm text-muted-foreground mt-1">{b.phone}</p>
              <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {b.hours}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── DESTINATION HANDBOOK ─── */

function HandbookPage({ locale }: { locale: Locale }) {
  const tips = [
    {
      icon: Globe,
      title: t(locale, "handbook.bestTime"),
      content: t(locale, "handbook.bestTimeContent"),
    },
    {
      icon: Shield,
      title: t(locale, "handbook.visa"),
      content: t(locale, "handbook.visaContent"),
    },
    {
      icon: BookOpen,
      title: t(locale, "handbook.currency"),
      content: t(locale, "handbook.currencyContent"),
    },
    {
      icon: Users,
      title: t(locale, "handbook.culture"),
      content: t(locale, "handbook.cultureContent"),
    },
    {
      icon: Phone,
      title: t(locale, "handbook.connectivity"),
      content: t(locale, "handbook.connectivityContent"),
    },
    {
      icon: Award,
      title: t(locale, "handbook.health"),
      content: t(locale, "handbook.healthContent"),
    },
  ];

  return (
    <div>
      <PageHero
        title={t(locale, "pages.handbookTitle")}
        subtitle={t(locale, "pages.handbookSubtitle")}
        image="/images/destinations/aswan.jpg"
      />
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <BackLink href={`/${locale}`} label={t(locale, "common.backToHome")} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          {tips.map((tip) => (
            <div key={tip.title} className="p-6 border rounded-xl">
              <tip.icon className="w-8 h-8 text-[rgb(230,0,0)] mb-4" />
              <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tip.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── TESTIMONIALS ─── */

function TestimonialsPage({ locale }: { locale: Locale }) {
  const reviews = [
    {
      name: t(locale, "testimonialsList.r1Name"),
      country: t(locale, "testimonialsList.r1Country"),
      rating: 5,
      text: t(locale, "testimonialsList.r1Text"),
    },
    {
      name: t(locale, "testimonialsList.r2Name"),
      country: t(locale, "testimonialsList.r2Country"),
      rating: 5,
      text: t(locale, "testimonialsList.r2Text"),
    },
    {
      name: t(locale, "testimonialsList.r3Name"),
      country: t(locale, "testimonialsList.r3Country"),
      rating: 5,
      text: t(locale, "testimonialsList.r3Text"),
    },
    {
      name: t(locale, "testimonialsList.r4Name"),
      country: t(locale, "testimonialsList.r4Country"),
      rating: 5,
      text: t(locale, "testimonialsList.r4Text"),
    },
    {
      name: t(locale, "testimonialsList.r5Name"),
      country: t(locale, "testimonialsList.r5Country"),
      rating: 5,
      text: t(locale, "testimonialsList.r5Text"),
    },
    {
      name: t(locale, "testimonialsList.r6Name"),
      country: t(locale, "testimonialsList.r6Country"),
      rating: 5,
      text: t(locale, "testimonialsList.r6Text"),
    },
  ];

  return (
    <div>
      <PageHero
        title={t(locale, "pages.testimonialsTitle")}
        subtitle={t(locale, "pages.testimonialsSubtitle")}
        image="/images/excursions/cruises-sailing.jpg"
      />
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <BackLink href={`/${locale}`} label={t(locale, "common.backToHome")} />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {reviews.map((review) => (
            <div key={review.name} className="p-6 border rounded-xl">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-4 text-sm">
                &quot;{review.text}&quot;
              </p>
              <div>
                <p className="font-semibold text-sm">{review.name}</p>
                <p className="text-xs text-muted-foreground">
                  {review.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── PRIVACY POLICY ─── */

function PrivacyPage({ locale }: { locale: Locale }) {
  return (
    <div>
      <PageHero title={t(locale, "pages.privacyTitle")} subtitle={t(locale, "pages.privacySubtitle")} />
      <div className="container mx-auto px-4 lg:px-8 py-12">
      <BackLink href={`/${locale}`} label={t(locale, "common.backToHome")} />
      <div className="max-w-3xl prose prose-gray">
          {[1, 2, 3, 4, 5, 6, 7].map(n => (
            <div key={n}>
              <h2 className="font-display text-xl mt-8 mb-3">
                {t(locale, `privacy.s${n}Title`)}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {t(locale, `privacy.s${n}Text`).replace("{email}", contactInfo.email)}
              </p>
            </div>
          ))}
      </div>
      </div>
    </div>
  );
}

/* ─── TERMS & CONDITIONS ─── */

function TermsPage({ locale }: { locale: Locale }) {
  return (
    <div>
      <PageHero title={t(locale, "pages.termsTitle")} subtitle={t(locale, "pages.termsSubtitle")} />
      <div className="container mx-auto px-4 lg:px-8 py-12">
      <BackLink href={`/${locale}`} label={t(locale, "common.backToHome")} />
      <div className="max-w-3xl">
          {[1, 2, 3, 4, 5, 6, 7].map(n => (
            <div key={n}>
              <h2 className="font-display text-xl mt-8 mb-3">
                {t(locale, `terms.s${n}Title`)}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {t(locale, `terms.s${n}Text`)}
              </p>
            </div>
          ))}
      </div>
      </div>
    </div>
  );
}
