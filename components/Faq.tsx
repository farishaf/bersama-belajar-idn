"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useT } from "@/lib/language-context";
import { faq, faqIntro } from "@/lib/content";
import Reveal from "./Reveal";
import Mascot from "./Mascot";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const dur = reduced ? 0.01 : 0.35;
      gsap.to(bodyRef.current, { height: open ? "auto" : 0, duration: dur, ease: "power2.out" });
      gsap.to(iconRef.current, { rotate: open ? 45 : 0, duration: dur, ease: "power2.out" });
    },
    { dependencies: [open], scope: bodyRef }
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-ink/10"
      style={{ background: open ? "white" : "" }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-4.5 px-6 py-5.5 text-left font-inherit"
      >
        <span className="flex-1 text-[19px] leading-snug font-bold font-display sm:text-[20px]">{q}</span>
        <span ref={iconRef} className="w-7 h-7 pb-[1px] rounded-full flex items-center justify-center text-2xl font-bold leading-none text-ink transition-colors"
          style={{ background: open ? "#f5851f" : "#211b5410" }}
        >
          +
        </span>
      </button>
      <div ref={bodyRef} className="h-0 overflow-hidden">
        <p className="max-w-[640px] px-6 pb-6 text-[16px] leading-relaxed text-ink/74 sm:text-[16.5px]">{a}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  const t = useT();
  return (
    <section id="faq" className="mx-auto mt-16 max-w-6xl px-5 sm:mt-24 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-14">
        <Reveal className="lg:sticky lg:top-28">
          <div className="mb-4.5 text-[13px] font-bold tracking-[0.1em] text-ink/45 uppercase">{t(faqIntro.eyebrow)}</div>
          <h2 className="mb-4 text-[clamp(1.7rem,4vw,2.75rem)] leading-[1.05] font-bold tracking-[-0.025em] text-balance font-display">
            {t(faqIntro.title)}
          </h2>
          <p className="mb-6.5 text-[17px] leading-relaxed text-ink/70">{t(faqIntro.body)}</p>
          <Mascot src="/mascots/mascot_3.svg" className="hidden w-[150px] lg:block" />
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-3">
          {faq.map((item, i) => (
            <FaqItem key={i} q={t(item.q)} a={t(item.a)} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
