"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale } from "@/lib/i18n";

interface Card {
  name: string;
  tourCount: number;
  image: string;
  href: string;
}

interface CardCarouselProps {
  title: string;
  subtitle: string;
  cards: Card[];
  viewAllLabel: string;
  viewAllHref: string;
}

export function CardCarousel({
  title,
  subtitle,
  cards,
  viewAllLabel,
  viewAllHref,
}: CardCarouselProps) {
  const { t } = useLocale();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector("a")?.offsetWidth ?? 280;
    const gap = 20;
    const distance = cardWidth + gap;
    scrollRef.current.scrollBy({
      left: direction === "right" ? distance : -distance,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-start justify-between mb-8 md:mb-12">
          <div>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground mb-2">
              {title}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl">
              {subtitle}
            </p>
          </div>
          <div className="flex flex-col items-end gap-3 shrink-0 ms-4">
            <div className="flex gap-3">
              <button
                onClick={() => scroll("left")}
                className="w-11 h-11 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-400 hover:border-gray-500 hover:text-gray-600 transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-11 h-11 rounded-full bg-[rgb(230,0,0)] flex items-center justify-center text-white hover:bg-red-700 transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <Link
              href={viewAllHref}
              className="text-sm text-foreground hover:text-[rgb(230,0,0)] transition-colors"
            >
              {viewAllLabel}
            </Link>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-4 px-4 lg:-mx-0 lg:px-0 scrollbar-hide"
        >
          {cards.map((card) => (
            <Link
              key={card.name}
              href={card.href}
              className="group relative shrink-0 w-[220px] sm:w-[240px] md:w-[260px] lg:w-[calc((100%-80px)/5)] aspect-[3/4] rounded-2xl overflow-hidden snap-start"
            >
              <Image
                src={card.image}
                alt={card.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 220px, (max-width: 768px) 240px, (max-width: 1024px) 260px, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white text-lg md:text-xl font-medium leading-tight">
                  {card.name}
                </h3>
                <p className="text-white/70 text-sm mt-1">
                  {card.tourCount} {card.tourCount === 1 ? t("common.tour") : t("common.tours")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
