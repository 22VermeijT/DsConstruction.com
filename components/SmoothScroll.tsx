"use client";

import { useEffect } from "react";

// Intercepts all anchor clicks and smooth-scrolls them via JS.
// This lets us remove scroll-behavior: smooth from the html element,
// so the browser's native scroll restoration is instant (no animated jump on refresh).
export function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", window.location.pathname + window.location.search);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
