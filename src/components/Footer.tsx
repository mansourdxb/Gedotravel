"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { contactInfo, socialLinks } from "@/lib/data";
import { useLocale } from "@/lib/i18n";

function SocialIcon({ platform }: { platform: string }) {
  const colors: Record<string, string> = {
    facebook: "bg-[#1877f2]",
    twitter: "bg-black",
    instagram: "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]",
    youtube: "bg-[#ff0000]",
    whatsapp: "bg-[#25d366]",
  };

  const labels: Record<string, string> = {
    facebook: "f",
    twitter: "𝕏",
    instagram: "◎",
    youtube: "▶",
    whatsapp: "✆",
  };

  return (
    <a
      href="#"
      className={`w-11 h-11 rounded-full ${colors[platform] ?? "bg-gray-600"} flex items-center justify-center text-white text-lg font-bold hover:opacity-80 transition-opacity`}
      aria-label={platform}
    >
      {labels[platform] ?? "?"}
    </a>
  );
}

export function Footer() {
  const { locale, t } = useLocale();
  const year = new Date().getFullYear();
  const p = `/${locale}`;

  const columns = [
    {
      title: t("footer.ourServices"),
      links: [
        { label: t("footer.destinationGuide"), href: `${p}/destination/egypt` },
        { label: t("footer.packages"), href: `${p}/ibe` },
        { label: t("footer.dayTrips"), href: `${p}/excursions` },
        { label: t("footer.fastTrack"), href: `${p}/travel-idea/fast-track-assistance-services` },
        { label: t("footer.visaAssist"), href: `${p}/travel-idea/fast-track-assistance-services` },
      ],
    },
    {
      title: t("footer.topDestinations"),
      links: [
        { label: t("destinations.aswan"), href: `${p}/destination/egypt/aswan` },
        { label: t("destinations.cairo"), href: `${p}/destination/egypt/cairo` },
        { label: t("destinations.hurghada"), href: `${p}/destination/egypt/hurghada` },
        { label: t("destinations.luxor"), href: `${p}/destination/egypt/luxor` },
        { label: t("destinations.marsaAlam"), href: `${p}/destination/egypt/marsa-alam` },
        { label: t("destinations.mersaMatruh"), href: `${p}/destination/egypt/mersa-matruh` },
        { label: t("destinations.sharmElSheikh"), href: `${p}/destination/egypt/sharm-el-sheikh` },
      ],
    },
    {
      title: t("footer.aboutUsTitle"),
      links: [
        { label: t("footer.about"), href: `${p}/about` },
        { label: t("footer.news"), href: `${p}/news` },
        { label: t("footer.affiliated"), href: `${p}/affiliated-companies` },
        { label: t("footer.contact"), href: `${p}/contact` },
        { label: t("footer.partner"), href: `${p}/partner` },
        { label: t("footer.branches"), href: `${p}/branches` },
        { label: t("footer.handbook"), href: `${p}/destination-handbook` },
        { label: t("footer.testimonials"), href: `${p}/testimonials` },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-2xl md:text-3xl mb-2">
                {t("footer.newsletterTitle")}
              </h3>
              <p className="text-white/60 text-sm md:text-base max-w-md">
                {t("footer.newsletterSubtitle")}
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex gap-0">
                <input
                  type="email"
                  placeholder={t("footer.emailPlaceholder")}
                  className="flex-1 md:w-[280px] px-4 py-3 bg-white text-gray-900 text-sm rounded-s-lg outline-none placeholder:text-gray-400"
                />
                <button className="bg-[rgb(230,0,0)] text-white px-6 py-3 rounded-e-lg font-semibold text-sm hover:bg-red-700 transition-colors whitespace-nowrap">
                  {t("footer.subscribe")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Link Columns + Contact */}
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-lg md:text-xl mb-6">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contacts Column */}
          <div>
            <h4 className="font-display text-lg md:text-xl mb-6">
              {t("footer.contacts")}
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-white/60 mt-0.5 shrink-0" />
                <div>
                  <p dir="ltr" className="text-white font-semibold text-sm">
                    {contactInfo.phone}
                  </p>
                  <p className="text-white/50 text-xs mt-0.5">
                    {t("footer.roundTheClock")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-white/60 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">
                    {contactInfo.email}
                  </p>
                  <p className="text-white/50 text-xs mt-0.5">
                    {t("footer.forInquiries")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/60 mt-0.5 shrink-0" />
                <p className="text-white/60 text-sm">{contactInfo.address}</p>
              </div>

              <div className="flex gap-3 pt-2">
                {socialLinks.map((link) => (
                  <SocialIcon key={link.platform} platform={link.platform} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-xs md:text-sm">
            <p>
              {t("footer.copyright").replace("{year}", String(year))}
            </p>
            <div className="flex gap-3">
              <Link href={p} className="hover:text-white transition-colors">
                {t("footer.home")}
              </Link>
              <span>-</span>
              <Link
                href={`${p}/privacy`}
                className="hover:text-white transition-colors"
              >
                {t("footer.privacy")}
              </Link>
              <span>-</span>
              <Link
                href={`${p}/terms`}
                className="hover:text-white transition-colors"
              >
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
