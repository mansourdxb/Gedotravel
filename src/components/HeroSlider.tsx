"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/lib/data";
import { useLocale } from "@/lib/i18n";

export function HeroSlider({ umrahMode = false }: { umrahMode?: boolean }) {
  const { locale, t } = useLocale();
  const slides = heroSlides.map((slide, i) => ({
    backgroundImage: slide.backgroundImage,
    ctaHref: slide.ctaHref.startsWith("/en/") ? `/${locale}${slide.ctaHref.slice(3)}` : slide.ctaHref,
    title: t(`hero.slide${i + 1}Title`),
    subtitle: t(`hero.slide${i + 1}Subtitle`),
    ctaText: t("hero.exploreNow"),
  }));
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + total) % total),
    [total]
  );

  useEffect(() => {
    if (umrahMode) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, umrahMode]);

  if (umrahMode) {
    return (
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(/images/umrah/hero.jpg)`,
            }}
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-emerald-600/80 backdrop-blur text-white text-sm px-4 py-2 rounded-full mb-6">
                <span>☪</span>
                <span>{t("services.umrah")}</span>
              </div>
              <h1
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold text-white mb-5 leading-tight"
                style={{ textShadow: "1px 1px 3px rgb(0,0,0)" }}
              >
                {t("umrah.heroTitle")}
              </h1>
              <p className="text-white/90 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                {t("umrah.heroSubtitle")}
              </p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href={`/${locale}/contact`}
                  className="inline-block bg-emerald-600 text-white text-lg px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                >
                  {t("umrah.heroCta1")}
                </a>
                <a
                  href="#umrah-packages"
                  className="inline-block bg-white/20 backdrop-blur border border-white/30 text-white text-lg px-8 py-3 rounded-lg hover:bg-white/30 transition-colors font-medium"
                >
                  {t("umrah.heroCta2")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          aria-hidden={i !== current}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.35), rgba(0,0,0,0.1)), url(${slide.backgroundImage})`,
            }}
          />
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-2xl">
                <h1
                  className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-semibold text-white mb-4 leading-tight"
                  style={{ textShadow: "1px 1px 2px rgb(0,0,0)" }}
                >
                  {slide.title}
                </h1>
                <p className="text-white/90 text-base md:text-lg mb-8 whitespace-pre-line leading-relaxed">
                  {slide.subtitle}
                </p>
                <a
                  href={slide.ctaHref}
                  className="inline-block bg-[rgb(230,0,0)] text-white text-lg md:text-xl px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  {slide.ctaText}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute end-6 md:end-10 top-1/2 -translate-y-1/2 z-20 flex gap-3">
        <button
          onClick={prev}
          className="w-11 h-11 rounded-full border-2 border-white/60 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="w-11 h-11 rounded-full bg-[rgb(230,0,0)] flex items-center justify-center text-white hover:bg-red-700 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
