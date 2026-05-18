"use client";

import { useEffect } from "react";

const KEY = "ds-scroll-y";

export function ScrollRestoration() {
  useEffect(() => {
    // Prevent the browser from restoring scroll position itself
    // (its built-in restoration triggers the smooth-scroll animation, causing the "scrolls down" effect)
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const saved = sessionStorage.getItem(KEY);
    if (saved !== null) {
      // Temporarily bypass smooth-scroll so the restore is instant
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, parseInt(saved, 10));
      sessionStorage.removeItem(KEY);
      // Restore smooth-scroll after the jump completes
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = "";
      });
    }

    const save = () => sessionStorage.setItem(KEY, String(window.scrollY));
    window.addEventListener("beforeunload", save);
    return () => window.removeEventListener("beforeunload", save);
  }, []);

  return null;
}
