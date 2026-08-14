"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useT } from "@/lib/language-context";
import type { Activity } from "@/lib/strapi";
import Reveal from "./Reveal";
import Mascot from "./Mascot";
import Doodle from "./Doodle";
import * as c from "@/lib/content";

export function ActivitiesHero() {
  const t = useT();
  return (
    <section className="relative mx-auto max-w-6xl px-5 pt-14 pb-10 sm:px-8 sm:pt-16 sm:pb-14">
      <Doodle
        src="/assets/asset_4.svg"
        className="top-4 right-6 hidden w-9 rotate-6 opacity-90 lg:block"
      />
      <Mascot
        src="/mascots/mascot_3.svg"
        className="absolute top-24 -left-2 rotate-315 z-10 hidden w-16 lg:block"
      />
      <Reveal className="max-w-[760px]">
        <div className="mb-5 text-[13px] font-bold tracking-[0.1em] text-red uppercase">{t(c.activitiesHero.eyebrow)}</div>
        <h1 className="mb-5.5 text-[clamp(2.1rem,5.5vw,3.9rem)] leading-[1.03] font-bold tracking-[-0.03em] text-balance font-display">
          {t(c.activitiesHero.title)}
        </h1>
        <p className="max-w-[620px] text-[18px] leading-relaxed text-ink/80 sm:text-[19px]">{t(c.activitiesHero.body)}</p>
      </Reveal>
    </section>
  );
}

export function ActivitiesGrid({ activities }: { activities: Activity[] }) {
  const t = useT();

  if (activities.length === 0) {
    return (
      <section className="mx-auto max-w-6xl px-5 pt-6 pb-20 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-[24px] border border-dashed border-ink/20 p-10 text-center sm:p-16">
          <Mascot
            src="/mascots/mascot_1.svg"
            className="mx-auto mb-6 w-16"
          />
          <h2 className="mb-2 text-[22px] font-bold font-display">{t(c.activitiesEmpty.title)}</h2>
          <p className="text-[16px] text-ink/60">{t(c.activitiesEmpty.body)}</p>
        </Reveal>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-5 pt-6 pb-20 sm:px-8">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity, i) => {
          const cover = activity.coverImage;
          return (
            <Reveal key={activity.slug} delay={Math.min(i * 0.05, 0.3)}>
              <Link
                href={`/activities/${activity.slug}`}
                className="group block overflow-hidden rounded-[20px] border border-ink/10 bg-white transition-all hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(33,27,84,0.10)]"
              >
                <div className="relative h-[200px] w-full overflow-hidden bg-[repeating-linear-gradient(135deg,rgba(33,27,84,.05)_0_12px,rgba(33,27,84,.09)_12px_24px)]">
                  {cover && (
                    <Image
                      src={cover.url}
                      alt={cover.alt}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="px-6 py-6">
                  <div className="mb-2 font-mono text-[12px] font-semibold text-ink/45">
                    {new Date(activity.date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })}
                  </div>
                  <h3 className="mb-1.5 text-[20px] font-bold font-display">{t(activity.title)}</h3>
                  <p className="line-clamp-2 text-[15px] leading-relaxed text-ink/60">{t(activity.excerpt)}</p>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function ActivityArticle({ activity }: { activity: Activity }) {
  const t = useT();
  const cover = activity.coverImage;
  const paragraphs = t(activity.body).split(/\n{2,}/).filter(Boolean);

  return (
    <article className="mx-auto max-w-3xl px-5 pt-10 pb-6 sm:px-8">
      <Link href="/activities" className="mb-6 inline-block text-[14px] font-bold text-ink/50 hover:text-orange">
        &larr; {t(c.activitiesBack)}
      </Link>
      <Reveal>
        <div className="mb-3 font-mono text-[13px] font-semibold text-ink/45">
          {new Date(activity.date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
        </div>
        <h1 className="mb-6 text-[clamp(1.8rem,4.5vw,2.9rem)] leading-[1.08] font-bold tracking-[-0.02em] text-balance font-display">
          {t(activity.title)}
        </h1>
      </Reveal>
      {cover && (
        <Reveal delay={0.1} className="relative mb-8 h-[260px] w-full overflow-hidden rounded-[20px] sm:h-[400px]">
          <Image src={cover.url} alt={cover.alt} fill sizes="768px" className="object-cover" priority />
        </Reveal>
      )}
      <Reveal delay={0.15} className="prose-none max-w-none space-y-5 text-[17px] leading-relaxed text-ink/80">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Reveal>
    </article>
  );
}

export function ActivityGallery({ activity }: { activity: Activity }) {
  const t = useT();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (activity.gallery.length === 0) return null;

  function open(i: number) {
    setOpenIndex(i);
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
    setOpenIndex(null);
  }

  const active = openIndex !== null ? activity.gallery[openIndex] : null;

  return (
    <section className="mx-auto max-w-3xl px-5 pt-4 pb-16 sm:px-8">
      <h2 className="mb-5 text-[22px] font-bold font-display">{t(c.activityGallery.heading)}</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {activity.gallery.map((media, i) => (
          <button
            key={media.url}
            type="button"
            onClick={() => open(i)}
            className="relative aspect-square overflow-hidden rounded-[14px] border border-ink/10 transition-opacity hover:opacity-90"
          >
            <Image src={media.url} alt={media.alt} fill sizes="(min-width:640px) 33vw, 50vw" className="object-cover" />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setOpenIndex(null)}
        className="m-auto max-h-[90vh] max-w-[90vw] overscroll-contain rounded-[16px] bg-transparent p-0 backdrop:bg-ink/80"
      >
        {active && (
          <div className="relative">
            <button
              type="button"
              onClick={close}
              className="absolute top-3 right-3 z-10 rounded-full bg-ink/70 px-3 py-1.5 text-[13px] font-bold text-white"
            >
              {t(c.activityGallery.close)}
            </button>
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img src={active.url} alt={active.alt} className="block max-h-[90vh] max-w-[90vw] object-contain" />
            }
          </div>
        )}
      </dialog>
    </section>
  );
}
