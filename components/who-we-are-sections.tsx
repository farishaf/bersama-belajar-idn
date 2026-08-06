"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/lib/language-context";
import Reveal from "./Reveal";
import Mascot from "./Mascot";
import Doodle from "./Doodle";
import * as c from "@/lib/content";

export function TeamHero() {
  const t = useT();
  return (
    <section className="relative mx-auto max-w-6xl px-5 pt-14 pb-10 sm:px-8 sm:pt-16 sm:pb-14">
      <Doodle
        src="/assets/asset_4.svg"
        className="top-4 right-6 hidden w-9 rotate-6 opacity-90 lg:block"
      />
      <Reveal className="max-w-[760px]">
        <div className="mb-5 text-[13px] font-bold tracking-[0.1em] text-red uppercase">{t(c.whoHero.eyebrow)}</div>
        <h1 className="mb-5.5 text-[clamp(2.1rem,5.5vw,3.9rem)] leading-[1.03] font-bold tracking-[-0.03em] text-balance font-display">
          {t(c.whoHero.title)}
        </h1>
        <p className="max-w-[620px] text-[18px] leading-relaxed text-ink/80 sm:text-[19px]">{t(c.whoHero.body)}</p>
      </Reveal>
      <Reveal delay={0.1} className="relative mt-9 h-[240px] w-full overflow-hidden rounded-[24px] sm:h-[340px] lg:h-[420px]">
        <Image
          src="/images/photo-group-b.png"
          alt="The community together"
          fill
          sizes="100vw"
          className="object-cover object-[center_45%]"
        />
      </Reveal>
    </section>
  );
}

export function CoreTeamGrid() {
  const t = useT();
  return (
    <section id="team" className="mx-auto max-w-6xl px-5 pt-6 sm:px-8">
      <Reveal className="mb-7 flex flex-wrap items-baseline gap-4">
        <h2 className="text-[26px] font-bold tracking-[-0.02em] font-display sm:text-[32px]">{t(c.coreTeam.heading)}</h2>
        <span className="font-mono text-[15px] text-ink/50">{t(c.coreTeam.note)}</span>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: c.coreTeam.count }).map((_, i) => (
          <Reveal
            key={i}
            className="overflow-hidden rounded-[20px] border border-ink/10 bg-white transition-all hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(33,27,84,0.10)]"
          >
            <div className="flex h-[200px] items-center justify-center bg-[repeating-linear-gradient(135deg,rgba(33,27,84,.05)_0_12px,rgba(33,27,84,.09)_12px_24px)] px-4 text-center font-mono text-[11px] leading-relaxed font-semibold text-ink/50">
              PORTRAIT
              <br />
              drop photo here
            </div>
            <div className="px-6 py-6">
              <h3 className="mb-1 text-[20px] font-bold font-display">Team member {i + 1}</h3>
              <div className="mb-3 text-[14px] font-bold text-orange">Role — content placeholder</div>
              <p className="text-[15px] leading-relaxed text-ink/60">Bio to be added.</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function VolunteersGrid() {
  const t = useT();
  return (
    <section className="relative mx-auto max-w-6xl px-5 pt-14 sm:px-8 sm:pt-19">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <Reveal className="relative">
          <Mascot
            src="/mascots/mascot_6.svg"
            className="absolute top-[-104px] left-[-8px] z-10 hidden w-20 lg:block"
          />
          <h2 className="mb-4 text-[26px] font-bold tracking-[-0.02em] font-display sm:text-[32px]">{t(c.volunteersSection.title)}</h2>
          <p className="mb-6.5 max-w-[480px] text-[16.5px] leading-relaxed text-ink/74 sm:text-[17.5px]">{t(c.volunteersSection.body)}</p>
          <div className="grid max-w-[480px] grid-cols-6 gap-2.5">
            {Array.from({ length: c.volunteersSection.count }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-full bg-[repeating-linear-gradient(135deg,rgba(33,27,84,.05)_0_8px,rgba(33,27,84,.09)_8px_16px)]"
              />
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="relative h-[240px] w-full overflow-hidden rounded-[20px] sm:h-[300px] lg:h-[340px]">
          <Image src="/images/photo-team.png" alt="Volunteers" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
        </Reveal>
      </div>
    </section>
  );
}

export function PartnersGrid() {
  const t = useT();
  return (
    <section className="relative mx-auto max-w-6xl px-5 pt-14 sm:px-8 sm:pt-19">
      <Doodle
        src="/assets/asset_2.svg"
        className="top-[-16px] left-8 hidden w-10 -rotate-[24deg] opacity-90 lg:block"
      />
      <Reveal className="rounded-[24px] border border-ink/10 bg-white p-7 sm:p-9.5">
        <h2 className="mb-1.5 text-[24px] font-bold tracking-[-0.02em] font-display sm:text-[30px]">{t(c.partners.title)}</h2>
        <p className="mb-7 text-[16.5px] text-ink/62">{t(c.partners.body)}</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {Array.from({ length: c.partners.count }).map((_, i) => (
            <div
              key={i}
              className="grid h-24 place-items-center rounded-[14px] border-2 border-dashed border-ink/20 text-center font-mono text-[11px] font-semibold text-ink/42"
            >
              PARTNER LOGO
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function JoinBanner() {
  const t = useT();
  return (
    <section className="mx-auto mt-14 max-w-6xl px-5 sm:mt-19 sm:px-8">
      <Reveal className="relative flex flex-col items-start justify-between gap-8 overflow-hidden rounded-[28px] bg-ink p-8 sm:flex-row sm:items-center sm:p-13">
        <Mascot
          src="/mascots/mascot_5.svg"
          className="absolute right-11 bottom-[-20px] z-10 hidden size-[100px] lg:block"
        />
        <div className="relative max-w-[620px]">
          <h2 className="mb-3 text-[clamp(1.6rem,3.5vw,2.375rem)] leading-[1.08] font-bold tracking-[-0.02em] text-paper font-display">
            {t(c.whoJoin.title)}
          </h2>
          <p className="text-[17.5px] leading-relaxed text-paper/75">{t(c.whoJoin.body)}</p>
        </div>
        <Link
          href="/#join"
          className="relative flex-none rounded-full bg-orange px-8 py-4.5 text-[16px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-red hover:text-ink"
        >
          {t(c.whoJoin.cta)}
        </Link>
      </Reveal>
    </section>
  );
}
