import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TeamHero, CoreTeamGrid, VolunteersGrid, PartnersGrid, JoinBanner } from "@/components/who-we-are-sections";

export const metadata: Metadata = {
  title: "Who we are — Bersama Belajar",
  description: "Five people, twenty volunteers, thirty kids — the Bersama Belajar community.",
};

export default function WhoWeArePage() {
  return (
    <>
      <Header />
      <main className="flex-1 overflow-x-clip">
        <TeamHero />
        <CoreTeamGrid />
        <VolunteersGrid />
        <PartnersGrid />
        <JoinBanner />
      </main>
      <Footer />
    </>
  );
}
