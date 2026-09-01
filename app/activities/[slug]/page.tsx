import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ActivityArticle, ActivityGallery } from "@/components/activities-sections";
import { getActivity } from "@/lib/strapi";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const activity = await getActivity(slug);
  if (!activity) return { title: "Activity — Bersama Belajar" };

  return {
    title: `${activity.title.en} — Bersama Belajar`,
    description: activity.excerpt.en,
    openGraph: {
      images: activity.coverImage ? [activity.coverImage.url] : undefined,
    },
  };
}

export default async function ActivityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const activity = await getActivity(slug);
  if (!activity) notFound();

  return (
    <>
      <Header />
      <main className="flex-1 overflow-x-clip">
        <ActivityArticle activity={activity} />
        <ActivityGallery activity={activity} />
      </main>
      <Footer />
    </>
  );
}
