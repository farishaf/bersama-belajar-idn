import type { MetadataRoute } from "next";
import { getActivities } from "@/lib/strapi";

const siteUrl = "https://bersamabelajar.id";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const activities = await getActivities();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/who-we-are`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/activities`, changeFrequency: "weekly", priority: 0.8 },
  ];

  const activityRoutes: MetadataRoute.Sitemap = activities.map((activity) => ({
    url: `${siteUrl}/activities/${activity.slug}`,
    lastModified: activity.date,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...activityRoutes];
}
