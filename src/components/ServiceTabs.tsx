"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Compass,
  Moon,
  Hotel,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { useLocale } from "@/lib/i18n";
import { UmrahContent } from "@/components/UmrahContent";

export function ServiceTabs({
  activeTab,
  onTabChange,
}: {
  activeTab?: number;
  onTabChange?: (tab: number) => void;
}) {
  const { t, locale } = useLocale();
  const [localActive, setLocalActive] = useState(1);
  const active = activeTab ?? localActive;
  const setActive = onTabChange ?? setLocalActive;

  const tabs: { label: string; icon: LucideIcon }[] = [
    { label: t("services.umrah"), icon: Moon },
    { label: t("services.packages"), icon: MapPin },
    { label: t("services.dayTrips"), icon: Compass },
    { label: t("services.hotels"), icon: Hotel },
  ];

  const panels = [
    null,
    {
      title: t("services.packagesTitle"),
      desc: t("services.packagesDesc"),
      href: `/${locale}/ibe`,
      btn: t("services.packagesBtn"),
    },
    {
      title: t("services.dayTripsTitle"),
      desc: t("services.dayTripsDesc"),
      href: `/${locale}/excursions`,
      btn: t("services.dayTripsBtn"),
    },
    {
      title: t("services.hotelsTitle"),
      desc: t("services.hotelsDesc"),
      href: `/${locale}/hotels-destinations`,
      btn: t("services.hotelsBtn"),
    },
  ];

  return (
    <div className="relative z-20 -mt-14 md:-mt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-t-2xl shadow-xl overflow-hidden">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab, i) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.label}
                  onClick={() => setActive(i)}
                  className={`flex-1 min-w-[100px] flex flex-col items-center gap-2 py-4 px-3 text-xs sm:text-sm font-medium transition-colors border-b-2 ${
                    i === active
                      ? "text-[rgb(230,0,0)] border-[rgb(230,0,0)]"
                      : "text-gray-500 border-transparent hover:text-gray-800"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="whitespace-nowrap">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {active !== 0 && panels[active] && (
            <div className="p-6 md:p-8 border-t">
              <h3 className="text-xl font-display mb-2">{panels[active]!.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-2xl">
                {panels[active]!.desc}
              </p>
              <Link
                href={panels[active]!.href}
                className="inline-flex items-center gap-2 bg-[rgb(230,0,0)] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
              >
                {panels[active]!.btn}
                <ChevronRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </div>
          )}

          {active === 0 && <UmrahContent />}
        </div>
      </div>
    </div>
  );
}
