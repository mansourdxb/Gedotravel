"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  Phone,
  Calendar,
  Menu,
  X,
  Globe,
} from "lucide-react";
import { useCurrency } from "@/lib/currency";
import { useLocale } from "@/lib/i18n";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavMenuItem {
  label: string;
  href?: string;
  items?: DropdownItem[];
}

function useNavMenus(): NavMenuItem[] {
  const { locale, t } = useLocale();
  const p = `/${locale}`;
  return [
    {
      label: t("nav.destinations"),
      items: [
        { label: t("nav.allDestinations"), href: `${p}/destination/egypt` },
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
      label: t("nav.programsHotels"),
      href: `${p}/ibe`,
    },
    {
      label: t("nav.services"),
      items: [
        { label: t("nav.allExcursions"), href: `${p}/excursions` },
        { label: t("nav.dayTrips"), href: `${p}/excursions` },
        { label: t("nav.fastTrack"), href: `${p}/travel-idea/fast-track-assistance-services` },
        { label: t("nav.privateTransfers"), href: `${p}/travel-idea/private-airport-transfers` },
        { label: t("nav.hotelsAccommodation"), href: `${p}/hotels-destinations` },
        { label: t("nav.boatTrips"), href: `${p}/travel-idea/boat-trips-luxury-cruises` },
        { label: t("nav.culturalTours"), href: `${p}/travel-idea/cultural-historical-tours` },
      ],
    },
    {
      label: t("nav.gedotravel"),
      items: [
        { label: t("nav.aboutUs"), href: `${p}/about` },
        { label: t("nav.news"), href: `${p}/news` },
        { label: t("nav.contactUs"), href: `${p}/contact` },
        { label: t("nav.bePartner"), href: `${p}/partner` },
        { label: t("nav.branches"), href: `${p}/branches` },
        { label: t("nav.affiliatedCompanies"), href: `${p}/affiliated-companies` },
        { label: t("nav.destinationHandbook"), href: `${p}/destination-handbook` },
        { label: t("nav.testimonials"), href: `${p}/testimonials` },
      ],
    },
  ];
}

export function Navbar() {
  const { locale, t } = useLocale();
  const navMenus = useNavMenus();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currencyRef = useRef<HTMLDivElement>(null);
  const { currency, setCurrency } = useCurrency();
  const otherLocale = locale === "en" ? "ar" : "en";
  const p = `/${locale}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 h-[70px]" : "bg-transparent h-[100px]"
      }`}
    >
      <div className="container mx-auto h-full flex items-center justify-between px-4 lg:px-8">
        <Link href={`/${locale}`} className="shrink-0">
          <Image
            src="/images/logo-white.png"
            alt="Gedotravel"
            width={280}
            height={140}
            className="h-auto w-auto max-h-[90px]"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navMenus.map((menu) => (
            <div
              key={menu.label}
              className="relative"
              onMouseEnter={() =>
                menu.items ? handleMouseEnter(menu.label) : undefined
              }
              onMouseLeave={menu.items ? handleMouseLeave : undefined}
            >
              {menu.href ? (
                <Link
                  href={menu.href}
                  className="flex items-center gap-1 text-white text-lg font-normal hover:text-white/80 transition-colors"
                >
                  {menu.label}
                </Link>
              ) : (
                <button className="flex items-center gap-1 text-white text-lg font-normal hover:text-white/80 transition-colors">
                  {menu.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openDropdown === menu.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}

              {menu.items && openDropdown === menu.label && (
                <div className="absolute top-full start-0 pt-2">
                  <div className="bg-white rounded-xl shadow-xl border py-2 min-w-[280px] animate-in fade-in slide-in-from-top-1 duration-150">
                    {menu.items.map((item) => (
                      <Link
                        key={item.href + item.label}
                        href={item.href}
                        className="flex items-center justify-between px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-[rgb(230,0,0)] transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.label}
                        <ChevronRight className="w-4 h-4 text-gray-500 rtl:rotate-180" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Utility Items */}
        <div className="hidden lg:flex items-center gap-3 text-white text-sm">
          <Link
            href={`${p}/ibe`}
            className="p-2 hover:text-white/80 transition-colors"
            title={t("nav.programsHotels")}
          >
            <Calendar className="w-5 h-5" />
          </Link>
          <Link
            href={`${p}/contact`}
            className="p-2 hover:text-white/80 transition-colors"
            title={t("nav.contactUs")}
          >
            <Phone className="w-5 h-5" />
          </Link>

          {/* Currency Switcher */}
          <div
            ref={currencyRef}
            className="relative"
            onMouseEnter={() => setCurrencyOpen(true)}
            onMouseLeave={() => setCurrencyOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-white/80 transition-colors">
              {currency} <ChevronDown className={`w-3 h-3 transition-transform ${currencyOpen ? "rotate-180" : ""}`} />
            </button>
            {currencyOpen && (
              <div className="absolute top-full end-0 pt-2">
                <div className="bg-white rounded-lg shadow-xl border py-1 min-w-[100px]">
                  {(["USD", "EGP"] as const).map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setCurrency(c);
                        setCurrencyOpen(false);
                      }}
                      className={`w-full text-start px-4 py-2 text-sm transition-colors ${
                        currency === c
                          ? "text-[rgb(230,0,0)] font-semibold bg-red-50"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Language Switcher */}
          <Link
            href={`/${otherLocale}`}
            className="flex items-center gap-1.5 hover:text-white/80 transition-colors font-medium"
          >
            <Globe className="w-4 h-4" />
            {t("lang.switchTo")}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black/95 border-t border-white/10 max-h-[80vh] overflow-y-auto">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navMenus.map((menu) => (
              <div key={menu.label}>
                {menu.href ? (
                  <Link
                    href={menu.href}
                    className="text-white text-lg py-3 px-2 hover:bg-white/10 rounded transition-colors block"
                    onClick={() => setMobileOpen(false)}
                  >
                    {menu.label}
                  </Link>
                ) : (
                  <>
                    <button
                      className="w-full flex items-center justify-between text-white text-lg py-3 px-2 hover:bg-white/10 rounded transition-colors"
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === menu.label ? null : menu.label
                        )
                      }
                    >
                      {menu.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileExpanded === menu.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileExpanded === menu.label && menu.items && (
                      <div className="ps-4 pb-2">
                        {menu.items.map((item) => (
                          <Link
                            key={item.href + item.label}
                            href={item.href}
                            className="block text-white/70 text-base py-2 px-2 hover:text-white hover:bg-white/5 rounded transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            <div className="border-t border-white/10 mt-2 pt-4 flex items-center gap-6 text-white/60 text-sm px-2">
              <span>{currency}</span>
              <Link
                href={`/${otherLocale}`}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-1.5"
              >
                <Globe className="w-4 h-4" />
                {t("lang.switchTo")}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
