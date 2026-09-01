import type { Lang } from "@/lib/language-context";

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

type StrapiMedia = {
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
};

type StrapiActivityEntry = {
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  date: string;
  coverImage: StrapiMedia | null;
  gallery: StrapiMedia[];
};

export type ResolvedMedia = { url: string; alt: string };

export type Activity = {
  slug: string;
  date: string;
  coverImage: ResolvedMedia | null;
  gallery: ResolvedMedia[];
  title: { en: string; id: string };
  excerpt: { en: string; id: string };
  body: { en: string; id: string };
};

function resolveMedia(media: StrapiMedia | null): ResolvedMedia | null {
  if (!media) return null;
  const url = media.url.startsWith("http") ? media.url : `${STRAPI_URL}${media.url}`;
  return { url, alt: media.alternativeText ?? "" };
}

async function fetchLocale(locale: Lang, path = ""): Promise<StrapiActivityEntry[]> {
  if (!STRAPI_URL) return [];
  const res = await fetch(
    `${STRAPI_URL}/api/activities${path}${path ? "&" : "?"}locale=${locale}&populate=coverImage,gallery&sort=date:desc`,
    {
      headers: STRAPI_API_TOKEN ? { Authorization: `Bearer ${STRAPI_API_TOKEN}` } : undefined,
      next: { revalidate: 3600, tags: ["activities"] },
    }
  ).catch(() => null);
  if (!res || !res.ok) return [];
  const json = await res.json();
  return (json.data ?? []) as StrapiActivityEntry[];
}

function merge(en: StrapiActivityEntry[], id: StrapiActivityEntry[]): Activity[] {
  const byId = new Map(id.map((e) => [e.slug, e]));
  return en.map((e) => {
    const localized = byId.get(e.slug);
    return {
      slug: e.slug,
      date: e.date,
      coverImage: resolveMedia(e.coverImage),
      gallery: (e.gallery ?? []).map(resolveMedia).filter((m): m is ResolvedMedia => m !== null),
      title: { en: e.title, id: localized?.title ?? e.title },
      excerpt: { en: e.excerpt, id: localized?.excerpt ?? e.excerpt },
      body: { en: e.body, id: localized?.body ?? e.body },
    };
  });
}

export async function getActivities(): Promise<Activity[]> {
  const [en, id] = await Promise.all([fetchLocale("en"), fetchLocale("id")]);
  return merge(en, id);
}

export async function getActivity(slug: string): Promise<Activity | null> {
  const [en, id] = await Promise.all([
    fetchLocale("en", `?filters[slug][$eq]=${encodeURIComponent(slug)}`),
    fetchLocale("id", `?filters[slug][$eq]=${encodeURIComponent(slug)}`),
  ]);
  const [merged] = merge(en, id);
  return merged ?? null;
}
