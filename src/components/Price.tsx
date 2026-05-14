"use client";

import { useCurrency } from "@/lib/currency";

export function Price({
  usd,
  className,
}: {
  usd: number;
  className?: string;
}) {
  const { format } = useCurrency();
  return <span className={className}>{format(usd)}</span>;
}
