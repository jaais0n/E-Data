import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AOSProvider } from "@/components/AOSProvider";
// @ts-ignore
import "../styles.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-hanken",
});

export const metadata: Metadata = {
  title: "E-Data | Precision B2B Intelligence",
  description: "Precision B2B intelligence, verified contacts, and data enrichment for global enterprise outreach.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={hanken.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block"
        />
      </head>
      <body className="font-sans bg-[#f7f9fb] text-[#191c1e] antialiased">
        <AOSProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </AOSProvider>
      </body>
    </html>
  );
}

