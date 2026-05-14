"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { MapPin, Calendar, Users, Search } from "lucide-react";
import { destinations } from "@/lib/data";
import { Price } from "@/components/Price";
import { useLocale } from "@/lib/i18n";

interface Package {
  titleKey: string;
  destination: string;
  days: number;
  price: number;
  image: string;
  guests: number;
}

const packages: Package[] = [
  {
    titleKey: "packages.cairoPyramids",
    destination: "Cairo",
    days: 4,
    price: 599,
    image: "/images/destinations/cairo.jpg",
    guests: 2,
  },
  {
    titleKey: "packages.nileCruise",
    destination: "Luxor",
    days: 5,
    price: 899,
    image: "/images/destinations/luxor.jpg",
    guests: 2,
  },
  {
    titleKey: "packages.redSea",
    destination: "Hurghada",
    days: 7,
    price: 749,
    image: "/images/destinations/hurghada.jpg",
    guests: 2,
  },
  {
    titleKey: "packages.ancientEgypt",
    destination: "Aswan",
    days: 10,
    price: 1499,
    image: "/images/destinations/aswan.jpg",
    guests: 4,
  },
  {
    titleKey: "packages.sharmDiving",
    destination: "Sharm El Sheikh",
    days: 5,
    price: 699,
    image: "/images/destinations/sharm-el-sheikh.jpg",
    guests: 2,
  },
  {
    titleKey: "packages.grandTour",
    destination: "Marsa Alam",
    days: 14,
    price: 2199,
    image: "/images/destinations/marsa-alam.jpg",
    guests: 4,
  },
  {
    titleKey: "packages.luxorTemples",
    destination: "Luxor",
    days: 3,
    price: 399,
    image: "/images/destinations/luxor.jpg",
    guests: 1,
  },
  {
    titleKey: "packages.aswanAbuSimbel",
    destination: "Aswan",
    days: 3,
    price: 449,
    image: "/images/destinations/aswan.jpg",
    guests: 2,
  },
  {
    titleKey: "packages.cairoCityBreak",
    destination: "Cairo",
    days: 3,
    price: 349,
    image: "/images/destinations/cairo.jpg",
    guests: 1,
  },
  {
    titleKey: "packages.hurghadaAllInc",
    destination: "Hurghada",
    days: 7,
    price: 649,
    image: "/images/destinations/hurghada.jpg",
    guests: 3,
  },
  {
    titleKey: "packages.sharmFamily",
    destination: "Sharm El Sheikh",
    days: 6,
    price: 1099,
    image: "/images/destinations/sharm-el-sheikh.jpg",
    guests: 4,
  },
  {
    titleKey: "packages.marsaSnorkeling",
    destination: "Marsa Alam",
    days: 5,
    price: 579,
    image: "/images/destinations/marsa-alam.jpg",
    guests: 2,
  },
];

export function ProgramsSearch() {
  const { t } = useLocale();
  const [destination, setDestination] = useState("");
  const [guests, setGuests] = useState(0);
  const [searched, setSearched] = useState(false);

  const filtered = useMemo(() => {
    if (!searched) return packages;
    return packages.filter((pkg) => {
      if (destination && pkg.destination !== destination) return false;
      if (guests > 0 && pkg.guests < guests) return false;
      return true;
    });
  }, [destination, guests, searched]);

  const handleSearch = () => {
    setSearched(true);
  };

  const handleReset = () => {
    setDestination("");
    setGuests(0);
    setSearched(false);
  };

  return (
    <>
      <div className="bg-gray-50 rounded-2xl p-6 mb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">
              {t("common.destination")}
            </label>
            <div className="flex items-center gap-2 bg-white border rounded-lg px-3 py-2.5">
              <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
              <select
                className="flex-1 text-sm outline-none bg-transparent"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              >
                <option value="">{t("common.allDestinations")}</option>
                {destinations.map((d) => (
                  <option key={d.name} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">
              {t("common.checkIn")}
            </label>
            <div className="flex items-center gap-2 bg-white border rounded-lg px-3 py-2.5">
              <Calendar className="w-4 h-4 text-muted-foreground shrink-0" />
              <input
                type="date"
                className="flex-1 text-sm outline-none bg-transparent"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">
              {t("common.guests")}
            </label>
            <div className="flex items-center gap-2 bg-white border rounded-lg px-3 py-2.5">
              <Users className="w-4 h-4 text-muted-foreground shrink-0" />
              <select
                className="flex-1 text-sm outline-none bg-transparent"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
              >
                <option value={0}>{t("common.any")}</option>
                <option value={1}>1 {t("common.adult")}</option>
                <option value={2}>2 {t("common.adults")}</option>
                <option value={3}>3 {t("common.adults")}</option>
                <option value={4}>4 {t("common.adults")}</option>
              </select>
            </div>
          </div>
          <div className="flex items-end">
            <button
              onClick={handleSearch}
              className="w-full bg-[rgb(230,0,0)] text-white py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-red-700 transition-colors"
            >
              <Search className="w-4 h-4" />
              {t("common.search")}
            </button>
          </div>
        </div>
        {searched && (
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {filtered.length} {t("common.packagesFound")}
              {destination ? ` ${t("common.in")} ${destination}` : ""}
            </p>
            <button
              onClick={handleReset}
              className="text-sm text-[rgb(230,0,0)] hover:underline"
            >
              {t("common.clearFilters")}
            </button>
          </div>
        )}
      </div>

      <h2 className="font-display text-2xl mb-6">
        {searched ? t("common.searchResults") : t("common.featuredPackages")}
      </h2>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">{t("common.noPackagesFound")}</h3>
          <p className="text-muted-foreground mb-4">
            {t("common.tryAdjusting")}
          </p>
          <button
            onClick={handleReset}
            className="text-[rgb(230,0,0)] font-medium hover:underline"
          >
            {t("common.clearAll")}
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pkg) => (
            <div
              key={pkg.titleKey}
              className="border rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={pkg.image}
                  alt={t(pkg.titleKey)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 start-3 bg-white/90 text-xs font-medium px-2.5 py-1 rounded-full">
                  {pkg.destination}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">{t(pkg.titleKey)}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {pkg.days} {t("common.days")} / {pkg.days - 1} {t("common.nights")}
                  </span>
                  <div className="text-end">
                    <span className="text-xs text-muted-foreground">{t("common.from")}</span>
                    <Price
                      usd={pkg.price}
                      className="text-lg font-bold text-[rgb(230,0,0)] block"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
