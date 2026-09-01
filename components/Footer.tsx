"use client";

import Link from "next/link";
import { useT } from "@/lib/language-context";
import { footer } from "@/lib/content";

export default function Footer() {
  const t = useT();
  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-14 sm:flex-row sm:items-end sm:justify-between sm:px-8">
      <div className="flex items-center gap-3">
        <span className="block size-8.5 flex-none rounded-full bg-orange" />
        <span className="font-display text-[17px] leading-tight font-bold">
          bersama belajar
          <br />
          <span className="font-body text-[13px] font-semibold text-ink/55">{t(footer.address)}</span>
        </span>
      </div>
      <div className="flex gap-6 text-sm font-semibold text-ink/60">
        <Link href="https://www.instagram.com/bersamabelajar.idn/" target="_blank" rel="noopener noreferrer" className="hover:text-ink">
          Instagram
        </Link>
        <Link href="/#join" className="hover:text-ink">
          Email
        </Link>
        <Link href="/#join" className="hover:text-ink">
          WhatsApp
        </Link>
      </div>
    </footer>
  );
}
