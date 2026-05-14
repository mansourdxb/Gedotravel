"use client";

import { createContext, useContext, useState, useCallback } from "react";

type Currency = "USD" | "EGP";

const EGP_RATE = 48.5;

interface CurrencyContextValue {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  format: (usdAmount: number) => string;
}

const CurrencyContext = createContext<CurrencyContextValue>({
  currency: "USD",
  setCurrency: () => {},
  format: (n) => `$${n}`,
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");

  const format = useCallback(
    (usdAmount: number) => {
      if (currency === "EGP") {
        const egp = Math.round(usdAmount * EGP_RATE);
        return `${egp.toLocaleString()} EGP`;
      }
      return `$${usdAmount}`;
    },
    [currency]
  );

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, format }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
