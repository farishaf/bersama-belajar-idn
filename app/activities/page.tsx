import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ActivitiesHero, ActivitiesGrid } from "@/components/activities-sections";
import { getActivities } from "@/lib/strapi";

export const metadata: Metadata = {
  title: "Activities — Bersama Belajar",
  description: "A running record of what we build together, in photos.",
};

export default async function ActivitiesPage() {
  const activities = await getActivities();

  return (
    <>
      <Header />
      <main className="flex-1 overflow-x-clip">
        <ActivitiesHero />
        <ActivitiesGrid activities={activities} />
      </main>
      <Footer />
    </>
  );
}
