"use client";

import { useState, type ReactNode } from "react";
import { HeroSlider } from "./HeroSlider";
import { ServiceTabs } from "./ServiceTabs";

export function HomeHeroSection({ children }: { children?: ReactNode }) {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <HeroSlider umrahMode={activeTab === 0} />
      <ServiceTabs activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab !== 0 && children}
    </>
  );
}
