"use client";


import Image from "next/image";
import Link from "next/link";
import {
  Hotel,
  Star,
  DollarSign,
  ShieldCheck,
  MapPin,
  CalendarX2,
  ChevronRight,
} from "lucide-react";
import { useLocale } from "@/lib/i18n";

export function HotelsHomeContent() {
  const { t, locale } = useLocale();

  const reasons = [
    { icon: DollarSign, titleKey: "hotelsReason1Title", descKey: "hotelsReason1Desc" },
    { icon: ShieldCheck, titleKey: "hotelsReason2Title", descKey: "hotelsReason2Desc" },
    { icon: MapPin, titleKey: "hotelsReason3Title", descKey: "hotelsReason3Desc" },
    { icon: CalendarX2, titleKey: "hotelsReason4Title", descKey: "hotelsReason4Desc" },
  ];

  const regions = [
    { key: "hotelsCairo", descKey: "hotelsCairoDesc", image: "/images/destinations/cairo.jpg" },
    { key: "hotelsRedSea", descKey: "hotelsRedSeaDesc", image: "/images/hotels/europe.jpg" },
    { key: "hotelsSharm", descKey: "hotelsSharmDesc", image: "/images/hotels/gulf.jpg" },
    { key: "hotelsUpperEgypt", descKey: "hotelsUpperEgyptDesc", image: "/images/hotels/worldwide.jpg" },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero block */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <div className="flex items-center gap-2 text-[rgb(230,0,0)] mb-3">
              <Hotel className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                {t("services.hotels")}
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              {t("services.hotelsHeroHeading")}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("services.hotelsHeroDesc")}
            </p>
            <Link
              href={`/${locale}/hotels-destinations`}
              className="inline-flex items-center gap-2 bg-[rgb(230,0,0)] text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              <Hotel className="w-4 h-4" />
              {t("services.hotelsBtn")}
              <ChevronRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/hotels/hero.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Why book with us */}
        <div className="mb-16">
          <h3 className="font-display text-2xl mb-6">
            {t("services.hotelsWhyTitle")}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div key={r.titleKey} className="p-6 bg-gray-50 rounded-xl">
                <r.icon className="w-7 h-7 text-[rgb(230,0,0)] mb-3" />
                <h4 className="font-semibold mb-2">
                  {t(`services.${r.titleKey}`)}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`services.${r.descKey}`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hotels by region */}
        <div className="mb-16">
          <h3 className="font-display text-2xl mb-6">
            {t("services.hotelsRegionsTitle")}
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {regions.map((r) => (
              <div key={r.key} className="group relative rounded-2xl overflow-hidden aspect-[16/9]">
                <Image
                  src={r.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white text-xl font-semibold mb-1">
                    {t(`services.${r.key}`)}
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {t(`services.${r.descKey}`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured hotels banner */}
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/images/destinations/aswan.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-2">
                {t("services.hotelsTitle")}
              </h3>
              <p className="text-white/80 max-w-lg">
                {t("services.hotelsDesc")}
              </p>
            </div>
            <Link
              href={`/${locale}/hotels-destinations`}
              className="shrink-0 inline-flex items-center gap-2 bg-white text-[rgb(230,0,0)] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              {t("services.hotelsBtn")}
              <ChevronRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
