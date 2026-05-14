import en from "../../messages/en.json";
import ar from "../../messages/ar.json";

export type Locale = "en" | "ar";
export const locales: Locale[] = ["en", "ar"];
export const defaultLocale: Locale = "ar";

type Messages = Record<string, unknown>;
const allMessages: Record<Locale, Messages> = { en, ar };

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const parts = path.split(".");
  let current: unknown = obj;
  for (const part of parts) {
    if (current && typeof current === "object" && part in current) {
      current = (current as Record<string, unknown>)[part];
    } else {
      return path;
    }
  }
  return typeof current === "string" ? current : path;
}

export function getMessages(locale: Locale): Record<string, unknown> {
  return allMessages[locale] ?? allMessages.en;
}

export function t(locale: Locale, key: string): string {
  const msgs = locale === "ar" ? ar : en;
  return getNestedValue(msgs as Record<string, unknown>, key);
}

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
