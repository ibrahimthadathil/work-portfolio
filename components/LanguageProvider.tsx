"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { content, type Content, type Lang } from "@/lib/i18n/content";

const STORAGE_KEY = "lang";

type LanguageContextValue = {
  lang: Lang;
  t: Content;
  dir: "ltr" | "rtl";
  setLang: (lang: Lang) => void;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restore the saved choice after hydration so server and client markup match.
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved === "ar" || saved === "en") setLangState(saved);
  }, []);

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const el = document.documentElement;
    el.lang = lang;
    el.dir = dir;
    document.title = content[lang].meta.title;
  }, [lang, dir]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      dir,
      t: content[lang],
      setLang,
      toggle: () => setLang(lang === "en" ? "ar" : "en"),
    }),
    [lang, dir, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
