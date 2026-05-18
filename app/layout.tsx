import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SmoothScroll } from "@/components/SmoothScroll";
import { MouseGlow } from "@/components/MouseGlow";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "D's Construction & Remodeling | Alvarado, TX",
  description:
    "Licensed Texas contractor serving Alvarado, Cedar Hill, and the DFW area. Full home remodels, bathroom renovations, flooring, custom showers, accessibility remodeling, and storm damage repair. Call (682) 622-1532 for a free estimate.",
  keywords: [
    "construction Alvarado TX",
    "remodeling Cedar Hill TX",
    "DFW contractor",
    "bathroom renovation Texas",
    "flooring installation DFW",
    "accessibility remodeling",
    "storm damage repair Texas",
    "custom shower contractor",
  ],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "D's Construction & Remodeling",
    description: "Transforming DFW homes since day one. Honest work. Fair prices. Local crew.",
    type: "website",
    images: [{ url: "/hero-chatgpt.png", width: 1200, height: 630, alt: "D's Construction & Remodeling — DFW Contractor" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "D's Construction & Remodeling",
    description: "Transforming DFW homes since day one. Honest work. Fair prices. Local crew.",
    images: ["/hero-chatgpt.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="font-sans">
        <SmoothScroll />
        <MouseGlow />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
