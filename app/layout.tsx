import type { Metadata } from "next";
import { Quicksand, Nunito_Sans } from "next/font/google";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const siteUrl = "https://bersamabelajar.id";
const siteName = "Bersama Belajar";
const description =
  "A small community in Jakarta building an environment where children want to learn.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Kampung Pemulung Karang Pola`,
    template: `%s — ${siteName}`,
  },
  description,
  keywords: [
    "Bersama Belajar",
    "Kampung Pemulung Karang Pola",
    "komunitas belajar Jakarta",
    "pendidikan anak Jakarta",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: `${siteName} — Kampung Pemulung Karang Pola`,
    description,
    locale: "id_ID",
    images: [{ url: "/bersama_belajar_logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Kampung Pemulung Karang Pola`,
    description,
    images: ["/bersama_belajar_logo.png"],
  },
  verification: {
    google: "google-site-verification=VskocSdQhDqxrcDKNiK71evNgCUzmaPYpfSp76iGK9k",
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/bersama_belajar_logo.png`,
  description,
  areaServed: {
    "@type": "Place",
    name: "Kampung Pemulung Karang Pola, Jakarta",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
