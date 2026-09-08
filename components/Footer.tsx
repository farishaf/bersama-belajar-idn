"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/lib/language-context";
import { footer } from "@/lib/content";

export default function Footer() {
  const t = useT();
  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-14 sm:flex-row sm:items-end sm:justify-between sm:px-8">
      <div className="flex items-center gap-3">
        <span className="grid size-8.5 flex-none place-items-center rounded-full bg-orange p-1.5">
          <Image
            src="/icons/bersamabelajar-icon-only.png"
            alt="Bersama Belajar logo"
            width={28}
            height={28}
            className="h-full w-full object-contain"
          />
        </span>
        <span className="font-display text-[17px] leading-tight font-bold">
          bersama belajar
          <br />
          <span className="font-body text-[13px] font-semibold text-ink/55">{t(footer.address)}</span>
        </span>
      </div>
      <div className="flex flex-col gap-2 text-sm font-semibold text-ink/60 sm:flex-row sm:items-center sm:gap-6">
        <Link href="https://www.instagram.com/bersamabelajar.idn/" target="_blank" rel="noopener noreferrer" className="hover:text-ink">
          Instagram
        </Link>
        <Link href="mailto:bersamabelajar.idn@gmail.com" className="hover:text-ink">
          bersamabelajar.idn@gmail.com
        </Link>
        <span className="text-ink/40">WhatsApp (soon)</span>
      </div>
    </footer>
  );
}
