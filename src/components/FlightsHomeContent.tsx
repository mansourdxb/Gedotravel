"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Plane,
  PlaneTakeoff,
  Globe,
  DollarSign,
  Headphones,
  ChevronRight,
} from "lucide-react";
import { useLocale } from "@/lib/i18n";

export function FlightsHomeContent() {
  const { t, locale } = useLocale();

  const reasons = [
    { icon: DollarSign, titleKey: "reason1Title", descKey: "reason1Desc" },
    { icon: Globe, titleKey: "reason2Title", descKey: "reason2Desc" },
    { icon: Headphones, titleKey: "reason4Title", descKey: "reason4Desc" },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero block with image */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <div className="flex items-center gap-2 text-[rgb(230,0,0)] mb-3">
              <PlaneTakeoff className="w-6 h-6 rtl:scale-x-[-1]" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                {t("services.dayTrips")}
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              {t("flights.heroHeading")}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("flights.heroDesc")}
            </p>
            <Link
              href={`/${locale}/flights`}
              className="inline-flex items-center gap-2 bg-[rgb(230,0,0)] text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              <Plane className="w-4 h-4" />
              {t("services.dayTripsBtn")}
              <ChevronRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/slides/slider6-privatejet.webp"
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
            {t("flights.whyTitle")}
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div key={r.titleKey} className="p-6 bg-gray-50 rounded-xl">
                <r.icon className="w-7 h-7 text-[rgb(230,0,0)] mb-3" />
                <h4 className="font-semibold mb-2">
                  {t(`flights.${r.titleKey}`)}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`flights.${r.descKey}`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Airlines banner */}
        <div className="relative rounded-2xl overflow-hidden mb-16">
          <Image
            src="/images/slides/slider4.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative p-8 md:p-12 text-white">
            <Plane className="w-8 h-8 mb-4" />
            <h3 className="font-display text-2xl md:text-3xl mb-3">
              {t("flights.airlinesTitle")}
            </h3>
            <p className="text-white/80 max-w-2xl leading-relaxed">
              {t("flights.airlinesDesc")}
            </p>
          </div>
        </div>

        {/* CTA to full flights page */}
        <div className="text-center bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="font-display text-2xl mb-3">
            {t("flights.formTitle")}
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            {t("flights.formDesc")}
          </p>
          <Link
            href={`/${locale}/flights`}
            className="inline-flex items-center gap-2 bg-[rgb(230,0,0)] text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
          >
            <Plane className="w-4 h-4" />
            {t("flights.submit")}
            <ChevronRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
