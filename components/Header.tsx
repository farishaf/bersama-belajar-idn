"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLanguage, useT } from "@/lib/language-context";
import { nav } from "@/lib/content";
import Image from "next/image";

const links = [
  { href: "/who-we-are", key: nav.who },
  { href: "/activities", key: nav.activities },
];

export default function Header() {
  const { lang, setLang } = useLanguage();
  const t = useT();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const topBarRef = useRef<HTMLSpanElement>(null);
  const bottomBarRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const dur = reduced ? 0.01 : 0.3;

      gsap.to(menuRef.current, {
        height: open ? "auto" : 0,
        opacity: open ? 1 : 0,
        duration: dur,
        ease: "power2.out",
      });
      gsap.to(topBarRef.current, { rotate: open ? 45 : 0, y: open ? 3 : 0, duration: dur, ease: "power2.out" });
      gsap.to(bottomBarRef.current, { rotate: open ? -45 : 0, y: open ? -3 : 0, duration: dur, ease: "power2.out" });

      if (open) {
        gsap.fromTo(
          menuRef.current?.querySelectorAll("a, button") ?? [],
          { opacity: 0, y: -8 },
          { opacity: 1, y: 0, duration: dur, stagger: 0.05, delay: dur * 0.4, ease: "power2.out" }
        );
      }
    },
    { dependencies: [open] }
  );

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3.5 sm:gap-9 sm:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-12 shrink-0 place-items-center rounded-full bg-orange p-2">
            <Image
              src="/icons/bersamabelajar-icon-only.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-full w-full object-contain"
            />
          </span>
          <span className="font-tt-norms text-[19px] leading-none font-extrabold tracking-tight">
            bersama
            <br />
            belajar
          </span>
        </Link>

        <nav className="ml-auto hidden gap-7 text-[15px] font-semibold lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="border-b-2 border-transparent py-1.5 transition-colors hover:border-orange"
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <div className="flex rounded-full border-[1.5px] border-ink/20 p-0.5 text-xs font-bold tracking-wide">
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`cursor-pointer rounded-full px-2.5 py-1 transition-colors ${lang === "en" ? "bg-ink text-paper" : "text-ink/60"}`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("id")}
              aria-pressed={lang === "id"}
              className={`cursor-pointer rounded-full px-2.5 py-1 transition-colors ${lang === "id" ? "bg-ink text-paper" : "text-ink/60"}`}
            >
              ID
            </button>
          </div>

          <Link
            href="/#join"
            className="hidden cursor-pointer rounded-full bg-orange px-5 py-2.5 text-[15px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-red sm:block"
          >
            {t(nav.donate)}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="grid size-9 cursor-pointer place-items-center rounded-full border border-ink/20 transition-colors hover:border-ink/40 lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="relative flex h-2 w-4 flex-col justify-between">
              <span ref={topBarRef} className="block h-0.5 w-4 origin-center bg-ink" />
              <span ref={bottomBarRef} className="block h-0.5 w-4 origin-center bg-ink" />
            </div>
          </button>
        </div>
      </div>

      <nav
        ref={menuRef}
        className="flex flex-col gap-1 overflow-hidden border-t border-ink/10 px-5 text-[15px] font-semibold lg:hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="flex flex-col gap-1 py-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded-lg px-2 py-2.5 transition-colors hover:bg-ink/5"
            >
              {t(l.key)}
            </Link>
          ))}
          <Link
            href="/#join"
            onClick={() => setOpen(false)}
            className="mt-1 cursor-pointer rounded-full bg-orange px-5 py-2.5 text-center font-bold text-white transition-colors hover:bg-red"
          >
            {t(nav.donate)}
          </Link>
        </div>
      </nav>
    </header>
  );
}
