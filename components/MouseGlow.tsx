"use client";

import { useEffect, useRef } from "react";

export function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.background = `radial-gradient(520px circle at ${e.clientX}px ${e.clientY}px, rgba(74,222,128,0.055) 0%, transparent 70%)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none hidden lg:block"
      style={{ zIndex: 9998 }}
      aria-hidden="true"
    />
  );
}
