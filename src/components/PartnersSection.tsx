"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { partnerLogos } from "@/lib/data";

export function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "right" ? 240 : -240,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative flex items-center">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-2 lg:-left-6 z-10 text-[rgb(230,0,0)] hover:text-red-700 transition-colors"
            aria-label="Previous partners"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div
            ref={scrollRef}
            className="flex items-center gap-12 md:gap-16 overflow-x-auto scroll-smooth px-10 py-4 scrollbar-hide"
          >
            {partnerLogos.map((logo) => (
              <div key={logo.name} className="shrink-0">
                <Image
                  src={logo.image}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="h-12 md:h-16 w-auto object-contain grayscale-0"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-2 lg:-right-6 z-10 text-[rgb(230,0,0)] hover:text-red-700 transition-colors"
            aria-label="Next partners"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
