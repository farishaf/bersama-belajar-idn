"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/lib/language-context";
import Reveal from "./Reveal";
import Mascot from "./Mascot";
import Doodle from "./Doodle";
import StatCounter from "./StatCounter";
import * as c from "@/lib/content";

const colorBg: Record<string, string> = {
  orange: "bg-orange",
  red: "bg-red",
  blue: "bg-blue",
  ink: "bg-ink",
  yellow: "bg-yellow",
};

const colorText: Record<string, string> = {
  orange: "text-orange",
  red: "text-red",
  blue: "text-blue",
  ink: "text-ink",
};

export function Hero() {
  const t = useT();
  return (
    <section id="top" className="relative mx-auto grid max-w-6xl gap-10 px-5 pt-14 pb-12 sm:px-8 sm:pt-16 sm:pb-16 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:gap-16 lg:pt-19">
      <Mascot
        src="/mascots/mascot_2.svg"
        className="absolute top-[-24px] left-1/2 z-10 hidden size-[130px] -translate-x-10 lg:block"
      />
      <Reveal className="relative">
        <Doodle
          src="/assets/asset_6.svg"
          className="top-1 left-[-38px] z-0 hidden w-8 -rotate-12 opacity-80 lg:block"
        />
        <div className="mb-5 inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.1em] text-red uppercase">
          <span className="block size-2.5 rounded-full bg-red" />
          {c.hero.kicker}
        </div>
        <h1 className="mb-6 text-[clamp(2.4rem,6vw,4.1rem)] leading-[1.02] font-bold tracking-[-0.03em] text-balance font-display">
          {t(c.hero.title)}
        </h1>
        <p className="mb-8 max-w-[520px] text-[18px] leading-relaxed text-ink/80 sm:text-[19px]">
          {t(c.hero.body)}
        </p>
        <div className="flex flex-wrap items-center gap-3.5">
          <Link
            href="/#join"
            className="rounded-full bg-orange px-7 py-4 text-[16px] font-bold text-paper transition-all hover:-translate-y-0.5 hover:bg-red"
          >
            {t(c.hero.volunteer)}
          </Link>
          <Link
            href="/#story"
            className="rounded-full border-[1.5px] border-ink/25 px-6 py-4 text-[16px] font-bold transition-colors hover:border-ink"
          >
            {t(c.hero.readStory)}
          </Link>
        </div>
      </Reveal>
      <Reveal delay={0.1} className="relative">
        <div className="relative h-[320px] w-full overflow-hidden rounded-[22px] sm:h-[400px] lg:h-[480px]">
          <Image src="/images/photo-kids.png" alt="Children of Karang Pola" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" priority />
        </div>
        <div className="absolute bottom-[-22px] left-[-16px] flex size-24 items-end justify-center gap-3.5 rounded-[50%_50%_46%_54%/52%_48%_52%_48%] bg-blue pb-6 sm:left-[-34px]">
          <span className="block size-1.75 rounded-full bg-paper" />
          <span className="block size-1.75 rounded-full bg-paper" />
        </div>
      </Reveal>
    </section>
  );
}

export function StatBar() {
  const t = useT();
  return (
    <section className="border-y border-ink/10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-8 sm:px-8 lg:grid-cols-4">
        {c.stats.map((s, i) => (
          <Reveal key={i}>
            <div className={`font-display text-[34px] leading-none font-bold sm:text-[40px] ${colorText[s.color]}`}>
              {s.value ? <StatCounter value={s.value} /> : t(c.statsSundays)}
            </div>
            <div className="mt-2 text-[14px] font-semibold text-ink/65">{t(s.label)}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ThePlace() {
  const t = useT();
  return (
    <section id="place" className="mx-auto max-w-6xl px-5 pt-16 pb-2 sm:px-8 sm:pt-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-14">
        <Reveal className="relative">
          <Doodle
            src="/assets/asset_1.svg"
            className="top-[-30px] left-[-42px] hidden w-9 rotate-6 opacity-90 lg:block"
          />
          <div className="mb-4.5 text-[13px] font-bold tracking-[0.1em] text-ink/45 uppercase">{t(c.place.eyebrow)}</div>
          <h2 className="mb-5.5 text-[clamp(1.9rem,4.5vw,3rem)] leading-[1.06] font-bold tracking-[-0.025em] text-balance font-display">
            {t(c.place.title)}
          </h2>
          <p className="max-w-[520px] text-[17px] leading-relaxed text-ink/80 sm:text-[18px]">{t(c.place.body)}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative h-[220px] w-full overflow-hidden rounded-[18px] sm:h-[300px] lg:h-[340px]">
            <Image src="/images/photo-village.png" alt="Karang Pola" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-3">
        {c.barriers.map((b, i) => (
          <Reveal
            key={i}
            className="rounded-[18px] border border-ink/10 bg-white p-6.5 transition-all hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(33,27,84,0.10)]"
          >
            <span className={`mb-4.5 block size-8.5 rounded-[11px] ${colorBg[b.color]}`} />
            <h3 className="mb-2.5 text-[21px] font-bold font-display">{t(b.title)}</h3>
            <p className="text-[15.5px] leading-relaxed text-ink/70">{t(b.body)}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function StoryBanner() {
  const t = useT();
  return (
    <section
      id="story"
      className="relative mt-16 flex h-[420px] items-end bg-cover bg-[center_42%] sm:mt-24 sm:h-[560px]"
      style={{ backgroundImage: "url('/images/photo-group-c.png')" }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(33,27,84,.10)_0%,rgba(33,27,84,.30)_45%,rgba(33,27,84,.88)_100%)]" />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8 sm:pb-14">
        <Reveal className="max-w-[640px]">
          <div className="mb-3.5 text-[13px] font-bold tracking-[0.1em] text-yellow uppercase">{t(c.story.eyebrow)}</div>
          <h2 className="mb-3 text-[clamp(1.9rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.025em] text-paper text-balance font-display">
            {t(c.story.title)}
          </h2>
          <p className="max-w-[560px] text-[18px] leading-relaxed text-paper/80 sm:text-[19px]">{t(c.story.body)}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Beginning() {
  const t = useT();
  return (
    <section className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-22">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.08fr] lg:items-center lg:gap-14">
        <Reveal className="grid grid-cols-2 gap-4">
          <div className="relative h-[220px] w-full overflow-hidden rounded-[18px] sm:h-[320px] lg:h-[400px]">
            <Image src="/images/photo-brothers.png" alt="Two brothers at home" fill sizes="25vw" className="object-cover" />
          </div>
          <div className="relative mt-8 h-[220px] w-full overflow-hidden rounded-[18px] sm:h-[320px] lg:h-[400px]">
            <Image src="/images/photo-milk.png" alt="A child at home in Karang Pola" fill sizes="25vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mb-4.5 text-[13px] font-bold tracking-[0.1em] text-ink/45 uppercase">{t(c.beginning.eyebrow)}</div>
          <h2 className="mb-5.5 text-[clamp(1.9rem,4.5vw,3rem)] leading-[1.06] font-bold tracking-[-0.025em] font-display">{t(c.beginning.title)}</h2>
          <p className="mb-6.5 max-w-[520px] text-[17px] leading-relaxed text-ink/80 sm:text-[18px]">{t(c.beginning.bodyA)}</p>
          <blockquote className="mb-6.5 max-w-[540px] rounded-[18px] bg-ink px-7 py-6 text-[20px] leading-snug font-semibold text-paper sm:text-[22px] font-display">
            {t(c.beginning.quote)}
          </blockquote>
          <p className="max-w-[520px] text-[17px] leading-relaxed text-ink/80 sm:text-[18px]">{t(c.beginning.bodyB)}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Pillars() {
  const t = useT();
  return (
    <section className="relative mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-22">
      <Doodle
        src="/assets/asset_3.svg"
        className="top-6 right-2 hidden w-10 rotate-12 opacity-90 lg:block"
      />
      <Reveal className="mb-7 flex flex-wrap items-baseline gap-4">
        <h2 className="text-[28px] font-bold tracking-[-0.02em] font-display sm:text-[34px]">{t(c.pillarsHeading)}</h2>
        <span className="text-[15px] text-ink/55">{t(c.pillarsSub)}</span>
      </Reveal>
      <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-4">
        {c.pillars.map((p) => (
          <Reveal key={p.num} className={`flex min-h-[172px] flex-col justify-between rounded-[18px] p-6.5 text-white ${colorBg[p.color]}`}>
            <span className="font-display text-[15px] font-bold opacity-75">{p.num}</span>
            <h3 className="text-[23px] leading-tight font-bold font-display">{t(p.title)}</h3>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Impact() {
  const t = useT();
  return (
    <section id="impact" className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-24">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14">
        <Reveal>
          <div className="mb-4.5 text-[13px] font-bold tracking-[0.1em] text-ink/45 uppercase">{t(c.impact.eyebrow)}</div>
          <h2 className="mb-7 text-[clamp(1.9rem,4.5vw,3rem)] leading-[1.06] font-bold tracking-[-0.025em] font-display">{t(c.impact.title)}</h2>
          <div className="flex max-w-[540px] flex-col gap-5.5">
            <div className="border-l-[3px] border-orange pl-5">
              <h3 className="mb-2 text-[20px] font-bold font-display">{t(c.impact.academic.title)}</h3>
              <p className="text-[16.5px] leading-relaxed text-ink/72">{t(c.impact.academic.body)}</p>
            </div>
            <div className="border-l-[3px] border-red pl-5">
              <h3 className="mb-2 text-[20px] font-bold font-display">{t(c.impact.social.title)}</h3>
              <p className="text-[16.5px] leading-relaxed text-ink/72">{t(c.impact.social.body)}</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative h-[280px] w-full overflow-hidden rounded-[20px] sm:h-[380px] lg:h-[420px]">
            <Image src="/images/photo-classroom.png" alt="Sunday class in session" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-10 flex flex-wrap items-center gap-6 rounded-[20px] border border-ink/10 bg-white px-6 py-6 sm:mt-13 sm:px-8">
        <span className="flex-none font-display text-[17px] font-bold">{t(c.impact.howWeTeach)}</span>
        <div className="flex flex-wrap gap-2.5">
          {c.impact.tags.map((tag, i) => (
            <span key={i} className="rounded-full border border-ink/12 bg-paper px-4 py-2 text-[15px] font-semibold">
              {t(tag)}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function Beyond() {
  const t = useT();
  return (
    <section id="beyond" className="mx-auto mt-16 max-w-6xl px-5 sm:mt-24 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <Reveal>
          <h2 className="mb-4 text-[clamp(1.9rem,4.5vw,3rem)] leading-[1.06] font-bold tracking-[-0.025em] font-display">{t(c.beyond.title)}</h2>
          <p className="mb-6.5 text-[20px] leading-snug font-bold text-red sm:text-[21px] font-display">{t(c.beyond.quote)}</p>
          <p className="mb-5.5 text-[17px] leading-relaxed text-ink/72">{t(c.beyond.lead)}</p>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {c.beyond.items.map((item, i) => (
              <span
                key={i}
                className={`rounded-xl border border-ink/10 bg-white px-4 py-3 text-[15.5px] font-semibold ${i === c.beyond.items.length - 1 ? "sm:col-span-2" : ""}`}
              >
                {t(item)}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="relative">
          <Mascot
            src="/mascots/mascot_4.svg"
            className="absolute top-[-48px] z-10 hidden size-28 lg:block"
          />
          <div className="relative h-[280px] w-full overflow-hidden rounded-[22px] sm:h-[380px] lg:h-[460px]">
            <Image src="/images/photo-hands.png" alt="Hands together" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function NextSteps() {
  const t = useT();
  return (
    <section id="next" className="mx-auto mt-16 max-w-6xl px-5 sm:mt-24 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative h-[260px] w-full overflow-hidden rounded-[22px] sm:h-[360px] lg:h-[440px]">
            <Image src="/images/photo-drinks.png" alt="Children in Karang Pola" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="relative order-1 lg:order-2">
          <Doodle
            src="/assets/asset_2.svg"
            className="top-[-18px] right-4 hidden w-11 rotate-[18deg] opacity-90 lg:block"
          />
          <div className="mb-4.5 text-[13px] font-bold tracking-[0.1em] text-ink/45 uppercase">{t(c.nextSteps.eyebrow)}</div>
          <h2 className="mb-6 text-[clamp(1.9rem,4.5vw,3rem)] leading-[1.06] font-bold tracking-[-0.025em] font-display">{t(c.nextSteps.title)}</h2>
          <ol className="flex flex-col gap-3.5">
            {c.nextSteps.items.map((item, i) => (
              <li key={i} className="flex items-baseline gap-4 text-[17px] font-semibold sm:text-[18px]">
                <span className="w-6 flex-none font-display text-[15px] font-bold text-orange">{String(i + 1).padStart(2, "0")}</span>
                {t(item)}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

export function Sustainability() {
  const t = useT();
  return (
    <section className="relative mx-auto mt-16 max-w-6xl px-5 sm:mt-24 sm:px-8">
      <Doodle
        src="/assets/asset_5.svg"
        className="top-[-14px] right-2 hidden w-14 -rotate-6 opacity-90 lg:block"
      />
      <Reveal className="mb-9 text-center">
        <h2 className="mb-3 text-[clamp(1.8rem,4vw,2.75rem)] leading-[1.06] font-bold tracking-[-0.025em] font-display">{t(c.sustainability.title)}</h2>
        <p className="text-[17.5px] text-ink/65">{t(c.sustainability.sub)}</p>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2">
        {[
          { data: c.sustainability.financial, color: "bg-orange" },
          { data: c.sustainability.organizational, color: "bg-blue" },
        ].map((block, i) => (
          <Reveal key={i} className="rounded-[22px] border border-ink/10 bg-white p-8">
            <span className={`mb-5 block size-8 rounded-[10px] ${block.color}`} />
            <h3 className="mb-4.5 text-[24px] font-bold font-display">{t(block.data.title)}</h3>
            <ul className="flex flex-col gap-2.75 text-[16.5px] text-ink/78">
              {block.data.items.map((item, j) => (
                <li key={j}>{t(item)}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
      <Reveal className="relative mt-5 h-[220px] w-full overflow-hidden rounded-[22px] sm:h-[300px]">
        <Image
          src="/images/photo-walking.png"
          alt="Children walking to class"
          fill
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
      </Reveal>
    </section>
  );
}

export function TeamTeaser() {
  const t = useT();
  return (
    <section className="mx-auto mt-16 max-w-6xl px-5 sm:mt-24 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <Reveal className="grid grid-cols-2 gap-4">
          <div className="relative h-[220px] w-full overflow-hidden rounded-[18px] sm:h-[300px]">
            <Image src="/images/photo-team.png" alt="The Bersama Belajar team" fill sizes="25vw" className="object-cover" />
          </div>
          <div className="relative h-[220px] w-full overflow-hidden rounded-[18px] sm:h-[300px]">
            <Image src="/images/photo-teaching.png" alt="A volunteer leading a session" fill sizes="25vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-4.5 text-[clamp(1.7rem,4vw,2.5rem)] leading-[1.08] font-bold tracking-[-0.025em] font-display">{t(c.teamTeaser.title)}</h2>
          <p className="max-w-[500px] text-[17px] leading-relaxed text-ink/78 sm:text-[18px]">{t(c.teamTeaser.body)}</p>
          <Link
            href="/who-we-are"
            className="mt-6 inline-block rounded-full border-[1.5px] border-ink/22 px-6.5 py-3.5 text-[16px] font-bold transition-colors hover:border-ink"
          >
            {t(c.teamTeaser.cta)}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function Collaboration() {
  const t = useT();
  return (
    <section className="mx-auto mt-16 max-w-6xl px-5 sm:mt-24 sm:px-8">
      <Reveal className="grid gap-8 rounded-[24px] border border-ink/10 bg-white p-8 sm:p-11 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-12">
        <div>
          <div className="mb-4 text-[13px] font-bold tracking-[0.1em] text-ink/45 uppercase">{t(c.collaboration.eyebrow)}</div>
          <h2 className="mb-3.5 text-[clamp(1.6rem,3.5vw,2.375rem)] leading-[1.08] font-bold tracking-[-0.02em] font-display">
            {t(c.collaboration.title)}
          </h2>
          <p className="text-[17px] leading-relaxed text-ink/72">{t(c.collaboration.body)}</p>
        </div>
        <div className="relative h-[200px] w-full overflow-hidden rounded-2xl sm:h-[280px]">
          <Image
            src="/images/photo-columbia.png"
            alt="Online session with Columbia University collaborators"
            fill
            sizes="(min-width:1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}

export function JoinCta() {
  const t = useT();
  return (
    <section id="join" className="mx-auto mt-16 max-w-6xl px-5 sm:mt-24 sm:px-8">
      <Reveal className="relative overflow-hidden rounded-[28px] bg-ink p-8 sm:p-14">
        <Mascot
          src="/mascots/mascot_1.svg"
          className="absolute top-14 right-14 z-10 hidden size-40 lg:block"
        />
        <div className="relative max-w-[600px]">
          <h2 className="mb-4 text-[clamp(1.9rem,4.5vw,2.9rem)] leading-[1.05] font-bold tracking-[-0.025em] text-paper text-balance font-display">
            {t(c.join.title)}
          </h2>
          <p className="text-[18px] leading-relaxed text-paper/75">{t(c.join.body)}</p>
        </div>
        <div className="relative mt-9 grid gap-4.5 sm:grid-cols-3">
          {c.join.ways.map((way, i) => (
            <Link
              key={i}
              href="/#join"
              className="block rounded-[18px] bg-paper p-6.5 transition-transform hover:-translate-y-1"
            >
              <span className={`mb-4.5 block size-7.5 rounded-full ${colorBg[way.color]}`} />
              <h3 className="mb-2 text-[22px] font-bold font-display">{t(way.title)}</h3>
              <p className="text-[15.5px] leading-snug text-ink/70">{t(way.body)}</p>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
