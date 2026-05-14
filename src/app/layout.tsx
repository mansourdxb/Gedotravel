import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Arabic, Prata } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-sans-ar",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
});

const prata = Prata({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gedotravel.com"),
  title: "Gedotravel — Travel Company of Egypt",
  description:
    "Discover the best travel deals, hotel bookings, and travel packages with Gedotravel. Your journey begins here!",
  icons: {
    icon: "/seo/favicon.ico",
    apple: "/images/logo-dark.png",
  },
  openGraph: {
    type: "website",
    siteName: "Gedotravel",
    title: "Gedotravel — Travel Company of Egypt",
    description:
      "Discover the best travel deals, hotel bookings, and travel packages with Gedotravel.",
    images: [
      {
        url: "/images/logo-dark.png",
        width: 800,
        height: 800,
        alt: "Gedotravel Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Gedotravel — Travel Company of Egypt",
    description:
      "Discover the best travel deals, hotel bookings, and travel packages with Gedotravel.",
    images: ["/images/logo-dark.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      className={`${notoSans.variable} ${notoSansArabic.variable} ${prata.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
