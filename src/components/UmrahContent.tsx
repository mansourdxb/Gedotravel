"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Moon,
  ChevronRight,
  ChevronDown,
  Check,
  FileCheck,
  Building2,
  Car,
  Plane,
  Utensils,
  MapPin,
  BookOpen,
  Gift,
  Shield,
  Clock,
  Heart,
  Users,
  Star,
  Sliders,
  Package,
  type LucideIcon,
} from "lucide-react";
import { useLocale } from "@/lib/i18n";

export function UmrahContent() {
  const { t, locale } = useLocale();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const packageTypes = [
    {
      badge: t("umrah.comprehensiveBadge"),
      badgeColor: "bg-emerald-100 text-emerald-700",
      title: t("umrah.comprehensiveTitle"),
      desc: t("umrah.comprehensiveDesc"),
      features: [
        t("umrah.fVisa"),
        t("umrah.fAccommodation"),
        t("umrah.fCatering"),
        t("umrah.fTransportation"),
        t("umrah.fFlights"),
        t("umrah.fHeritage"),
        t("umrah.fGuidedTours"),
      ],
      btn: t("umrah.browsePkg"),
    },
    {
      badge: t("umrah.noVisaBadge"),
      badgeColor: "bg-blue-100 text-blue-700",
      title: t("umrah.noVisaTitle"),
      desc: t("umrah.noVisaDesc"),
      features: [
        t("umrah.fAccommodation"),
        t("umrah.fCatering"),
        t("umrah.fTransportation"),
        t("umrah.fFlights"),
        t("umrah.fHeritage"),
        t("umrah.fGuidedTours"),
      ],
      btn: t("umrah.browsePkg"),
    },
    {
      badge: t("umrah.customBadge"),
      badgeColor: "bg-purple-100 text-purple-700",
      title: t("umrah.customTitle"),
      desc: t("umrah.customDesc"),
      features: [
        t("umrah.fVisa"),
        t("umrah.fAccommodation"),
        t("umrah.fTransportation"),
        t("umrah.fFlights"),
        t("umrah.fHeritage"),
        t("umrah.fGuidedTours"),
      ],
      btn: t("umrah.customizePkg"),
    },
    {
      badge: t("umrah.specialBadge"),
      badgeColor: "bg-amber-100 text-amber-700",
      title: t("umrah.specialTitle"),
      desc: t("umrah.specialDesc"),
      features: [
        t("umrah.fVisa"),
        t("umrah.fAccommodation"),
        t("umrah.fCatering"),
        t("umrah.fTransportation"),
        t("umrah.fFlights"),
        t("umrah.fHeritage"),
      ],
      btn: t("umrah.requestPkg"),
    },
    {
      badge: t("umrah.giftBadge"),
      badgeColor: "bg-rose-100 text-rose-700",
      title: t("umrah.giftTitle"),
      desc: t("umrah.giftDesc"),
      features: [
        t("umrah.fVisa"),
        t("umrah.fAccommodation"),
        t("umrah.fTransportation"),
        t("umrah.fFlights"),
        t("umrah.fGuidedTours"),
      ],
      btn: t("umrah.giftPkg"),
    },
  ];

  const stats = [
    { value: "50+", label: t("umrah.statPartners") },
    { value: "+20", label: t("umrah.statPackages") },
    { value: "+500", label: t("umrah.statPilgrims") },
  ];

  const faqs = [
    { q: t("umrah.faq1Q"), a: t("umrah.faq1A") },
    { q: t("umrah.faq2Q"), a: t("umrah.faq2A") },
    { q: t("umrah.faq3Q"), a: t("umrah.faq3A") },
  ];

  return (
    <div className="border-t">
      {/* Hero */}
      <div className="relative h-[300px] md:h-[400px]">
        <Image
          src="/images/umrah/hero.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-4">
            <Moon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-white text-2xl md:text-4xl font-display mb-3 max-w-2xl">
            {t("umrah.heroTitle")}
          </h3>
          <p className="text-white/80 text-sm md:text-base mb-6 max-w-xl">
            {t("umrah.heroSubtitle")}
          </p>
          <div className="flex gap-3">
            <Link
              href={`/${locale}/contact`}
              className="bg-emerald-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors"
            >
              {t("umrah.heroCta1")}
            </Link>
            <a
              href="#umrah-packages"
              className="bg-white/20 backdrop-blur text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors border border-white/30"
            >
              {t("umrah.heroCta2")}
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 divide-x rtl:divide-x-reverse bg-emerald-600">
        {stats.map((s) => (
          <div key={s.label} className="py-6 text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">
              {s.value}
            </div>
            <div className="text-xs md:text-sm text-emerald-100 mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Package Cards */}
      <div id="umrah-packages" className="p-6 md:p-8">
        <h4 className="font-display text-xl md:text-2xl mb-6 text-center">
          {t("umrah.packagesSectionTitle")}
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {packageTypes.map((pkg) => (
            <div
              key={pkg.title}
              className="border rounded-2xl p-5 hover:shadow-lg transition-shadow flex flex-col"
            >
              <span
                className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${pkg.badgeColor}`}
              >
                {pkg.badge}
              </span>
              <h5 className="font-display text-base mb-2">{pkg.title}</h5>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {pkg.desc}
              </p>
              <ul className="space-y-2 mb-5 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={`/${locale}/contact`}
                className="text-center bg-emerald-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors block"
              >
                {pkg.btn}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Gift Banner */}
      <div className="mx-6 md:mx-8 mb-8 bg-gradient-to-r rtl:bg-gradient-to-l from-emerald-600 to-teal-600 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Gift className="w-6 h-6 text-emerald-200" />
            <h4 className="font-display text-lg text-white">
              {t("umrah.giftBannerTitle")}
            </h4>
          </div>
          <p className="text-sm text-emerald-100">
            {t("umrah.giftBannerDesc")}
          </p>
        </div>
        <Link
          href={`/${locale}/contact`}
          className="bg-white text-emerald-700 px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-50 transition-colors whitespace-nowrap"
        >
          {t("umrah.giftBannerBtn")}
        </Link>
      </div>

      {/* Holy Cities */}
      <div className="p-6 md:p-8 bg-gray-50">
        <h4 className="font-display text-xl md:text-2xl mb-6 text-center">
          {t("umrah.citiesSectionTitle")}
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden group">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/umrah/makkah.jpg"
                alt={t("umrah.makkahTitle")}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-4 h-4 text-amber-400" />
                  <h5 className="font-display text-lg text-white">
                    {t("umrah.makkahTitle")}
                  </h5>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  {t("umrah.makkahDesc")}
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden group">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/umrah/madinah.jpg"
                alt={t("umrah.madinahTitle")}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-4 h-4 text-emerald-400" />
                  <h5 className="font-display text-lg text-white">
                    {t("umrah.madinahTitle")}
                  </h5>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  {t("umrah.madinahDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="p-6 md:p-8">
        <h4 className="font-display text-xl md:text-2xl mb-6 text-center">
          {t("umrah.faqTitle")}
        </h4>
        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-start text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                {faq.q}
                <ChevronDown
                  className={`w-4 h-4 shrink-0 ms-3 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === i && (
                <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-emerald-600 p-6 md:p-10 text-center">
        <h4 className="font-display text-xl md:text-2xl text-white mb-2">
          {t("umrah.ctaTitle")}
        </h4>
        <p className="text-sm text-emerald-100 mb-5">{t("umrah.ctaDesc")}</p>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-2 bg-white text-emerald-700 px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-50 transition-colors"
        >
          {t("umrah.ctaBtn")}
          <ChevronRight className="w-4 h-4 rtl:rotate-180" />
        </Link>
      </div>
    </div>
  );
}
