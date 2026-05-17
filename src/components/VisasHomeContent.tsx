"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Stamp,
  Globe,
  ShieldCheck,
  Headphones,
  Zap,
  ChevronRight,
} from "lucide-react";
import { useLocale } from "@/lib/i18n";

export function VisasHomeContent() {
  const { t, locale } = useLocale();

  const reasons = [
    { icon: Globe, titleKey: "reason1Title", descKey: "reason1Desc" },
    { icon: ShieldCheck, titleKey: "reason2Title", descKey: "reason2Desc" },
    { icon: Headphones, titleKey: "reason3Title", descKey: "reason3Desc" },
    { icon: Zap, titleKey: "reason4Title", descKey: "reason4Desc" },
  ];

  const visaTypes = [
    { key: "typeSchengen", descKey: "typeSchengenDesc" },
    { key: "typeUK", descKey: "typeUKDesc" },
    { key: "typeUSA", descKey: "typeUSADesc" },
    { key: "typeUmrah", descKey: "typeUmrahDesc" },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero block with image */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <div className="flex items-center gap-2 text-[rgb(230,0,0)] mb-3">
              <Stamp className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                {t("services.visas")}
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              {t("visas.heroHeading")}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("visas.heroDesc")}
            </p>
            <Link
              href={`/${locale}/visas`}
              className="inline-flex items-center gap-2 bg-[rgb(230,0,0)] text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              <Stamp className="w-4 h-4" />
              {t("services.visasBtn")}
              <ChevronRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/slides/slider9-passport.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Why choose us */}
        <div className="mb-16">
          <h3 className="font-display text-2xl mb-6">
            {t("visas.whyTitle")}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div key={r.titleKey} className="p-6 bg-gray-50 rounded-xl">
                <r.icon className="w-7 h-7 text-[rgb(230,0,0)] mb-3" />
                <h4 className="font-semibold mb-2">
                  {t(`visas.${r.titleKey}`)}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`visas.${r.descKey}`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Visa types */}
        <div className="mb-16">
          <h3 className="font-display text-2xl mb-6">
            {t("visas.typesTitle")}
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {visaTypes.map((v) => (
              <div key={v.key} className="p-6 border rounded-xl">
                <h4 className="font-semibold text-lg mb-2">
                  {t(`visas.${v.key}`)}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`visas.${v.descKey}`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/images/slides/slider8-visa.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative p-8 md:p-12 text-center text-white">
            <h3 className="font-display text-2xl md:text-3xl mb-3">
              {t("visas.formTitle")}
            </h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              {t("visas.formDesc")}
            </p>
            <Link
              href={`/${locale}/visas`}
              className="inline-flex items-center gap-2 bg-white text-[rgb(230,0,0)] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              <Stamp className="w-4 h-4" />
              {t("visas.submit")}
              <ChevronRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
