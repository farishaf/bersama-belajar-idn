"use client";

import { useState } from "react";
import Link from "next/link";
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
              className={`rounded-full px-2.5 py-1 transition-colors ${lang === "en" ? "bg-ink text-paper" : "text-ink/60"}`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("id")}
              aria-pressed={lang === "id"}
              className={`rounded-full px-2.5 py-1 transition-colors ${lang === "id" ? "bg-ink text-paper" : "text-ink/60"}`}
            >
              ID
            </button>
          </div>

          <Link
            href="/#join"
            className="hidden rounded-full bg-orange px-5 py-2.5 text-[15px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-red sm:block"
          >
            {t(nav.donate)}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="grid size-9 place-items-center rounded-full border border-ink/20 lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1">
              <span className="block h-0.5 w-4 bg-ink" />
              <span className="block h-0.5 w-4 bg-ink" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 px-5 py-3 text-[15px] font-semibold lg:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2.5 hover:bg-ink/5"
            >
              {t(l.key)}
            </Link>
          ))}
          <Link
            href="/#join"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-full bg-orange px-5 py-2.5 text-center font-bold text-white"
          >
            {t(nav.donate)}
          </Link>
        </nav>
      )}
    </header>
  );
}
