"use client";

import { useState } from "react";
import { HeroSlider } from "./HeroSlider";
import { ServiceTabs } from "./ServiceTabs";

export function HomeHeroSection() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <HeroSlider umrahMode={activeTab === 2} />
      <ServiceTabs activeTab={activeTab} onTabChange={setActiveTab} />
    </>
  );
}
