"use client";

import { Star } from "lucide-react";
import { useLocale } from "@/lib/i18n";

export function ReviewsSection() {
  const { t } = useLocale();

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground mb-8 md:mb-12">
          {t("reviews.tripadvisorTitle")}
        </h2>

        <div className="bg-[#f2fcf5] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-[#34e0a1] text-white px-4 py-2 rounded-lg mb-6">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <circle cx="12" cy="12" r="10" />
                <circle cx="8.5" cy="11" r="2.5" fill="white" />
                <circle cx="15.5" cy="11" r="2.5" fill="white" />
                <circle cx="8.5" cy="11" r="1" />
                <circle cx="15.5" cy="11" r="1" />
              </svg>
              <span className="font-bold text-lg">Tripadvisor</span>
            </div>

            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-[#00aa6c] text-[#00aa6c]"
                />
              ))}
            </div>

            <p className="text-gray-600 text-base leading-relaxed max-w-lg">
              &quot;{t("reviews.quote")}&quot;
            </p>
            <p className="text-gray-500 text-sm mt-3">
              &mdash; {t("reviews.author")}
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 shrink-0">
            <div className="text-center">
              <p className="text-[#00aa6c] text-2xl font-bold mb-1">
                {t("reviews.bravo")}
              </p>
              <div className="border border-[#00aa6c] rounded-lg p-4 text-center">
                <p className="text-sm text-gray-700 leading-snug">
                  {t("reviews.ratedLine1")}
                  <br />
                  {t("reviews.ratedLine2")}
                  <br />
                  {t("reviews.ratedLine3")}
                </p>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-[#34e0a1]"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="8.5" cy="11" r="2.5" fill="white" />
                    <circle cx="15.5" cy="11" r="2.5" fill="white" />
                    <circle cx="8.5" cy="11" r="1" />
                    <circle cx="15.5" cy="11" r="1" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-800">
                    Tripadvisor
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">Tripadvisor</p>
              <p className="text-lg font-bold text-gray-800">
                {t("reviews.travelersChoice")}
              </p>
              <p className="text-sm text-gray-600">{t("reviews.awards")}</p>
              <div className="flex items-center justify-center gap-1 mt-1">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-gray-800"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="8.5" cy="11" r="2.5" fill="white" />
                  <circle cx="15.5" cy="11" r="2.5" fill="white" />
                  <circle cx="8.5" cy="11" r="1" />
                  <circle cx="15.5" cy="11" r="1" />
                </svg>
              </div>
              <p className="text-2xl font-bold text-gray-800 mt-1">2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
