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

export const metadata: Metadata = {
  title: "Bersama Belajar — Kampung Pemulung Karang Pola",
  description:
    "A small community in Jakarta building an environment where children want to learn.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
