"use client";

import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";

export type Lang = "en" | "id";

export type Bilingual = { en: string; id: string };

const STORAGE_KEY = "bb-lang";
const listeners = new Set<() => void>();

function readStored(): Lang {
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === "en" || v === "id" ? v : "en";
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getServerSnapshot(): Lang {
  return "en";
}

function setStoredLang(next: Lang) {
  window.localStorage.setItem(STORAGE_KEY, next);
  listeners.forEach((cb) => cb());
}

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, readStored, getServerSnapshot);

  return (
    <LanguageContext.Provider value={{ lang, setLang: setStoredLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function useT() {
  const { lang } = useLanguage();
  return (copy: Bilingual) => copy[lang];
}
