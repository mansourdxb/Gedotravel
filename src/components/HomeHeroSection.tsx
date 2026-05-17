"use client";

import { useState, type ReactNode } from "react";
import { HeroSlider } from "./HeroSlider";
import { ServiceTabs } from "./ServiceTabs";
import { FlightsHomeContent } from "./FlightsHomeContent";
import { VisasHomeContent } from "./VisasHomeContent";
import { HotelsHomeContent } from "./HotelsHomeContent";

export function HomeHeroSection({ children }: { children?: ReactNode }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <HeroSlider umrahMode={activeTab === 0} />
      <ServiceTabs activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === 1 && <FlightsHomeContent />}
      {activeTab === 2 && <VisasHomeContent />}
      {activeTab === 4 && <HotelsHomeContent />}
      {activeTab !== 0 && activeTab !== 1 && activeTab !== 2 && activeTab !== 4 && children}
    </>
  );
}
