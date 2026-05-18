"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "About",        href: "#about",    id: "about"    },
  { label: "Services",     href: "#services", id: "services" },
  { label: "Projects",     href: "#projects", id: "projects" },
  { label: "Storm Damage", href: "#storm",    id: "storm"    },
  { label: "FAQ",          href: "#faq",      id: "faq"      },
  { label: "Contact",      href: "#contact",  id: "contact"  },
];

// Every section with an id, listed in the order they appear in the DOM.
// Non-nav sections map to the nav item that should light up while they're on screen.
const sections: { id: string; nav: string }[] = [
  { id: "about",    nav: "about"    },
  { id: "services", nav: "services" },
  { id: "process",  nav: "services" },
  { id: "projects", nav: "projects" },
  { id: "storm",    nav: "storm"    },
  { id: "faq",      nav: "faq"      },
  { id: "contact",  nav: "contact"  },
];

export function Navigation() {
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [activeSection,  setActiveSection]  = useState<string | null>(null);

  // Solid background once the user leaves the hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active-section detection.
  // Strategy: iterate sections in DOM order; for each one whose top edge has
  // scrolled above 35 % of the viewport height, mark it as the current section.
  // The last match wins, so the lowest section that has crossed the line wins.
  useEffect(() => {
    const TRIGGER = 0.35; // fraction of viewport height

    const detect = () => {
      const line = window.innerHeight * TRIGGER;
      let current: string | null = null;

      for (const { id, nav } of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= line) {
          current = nav;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", detect, { passive: true });
    detect(); // run once on mount so the initial state is correct
    return () => window.removeEventListener("scroll", detect);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background:    scrolled ? "rgba(10,10,10,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)"          : "none",
          borderBottom:  scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <nav className="max-w-[1280px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">

          {/* Logo — right on mobile, left on desktop */}
          <a href="#" className="flex items-center select-none logo-glow order-last lg:order-first">
            <Image
              src="/logo.png"
              alt="D's Construction & Remodeling"
              width={52}
              height={52}
              className="object-contain"
              priority
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                      isActive ? "text-white" : "text-warm hover:text-cream"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="block h-px bg-lime mt-0.5 nav-active-line" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+16826221532"
              className="flex items-center gap-2 text-sm text-warm hover:text-pink transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              (682) 622-1532
            </a>
            <a
              href="#contact"
              className="bg-lime text-ink text-sm font-semibold px-5 py-2.5 hover:bg-lime-dark transition-colors"
            >
              Free Quote
            </a>
          </div>

          {/* Mobile toggle — left on mobile, hidden on desktop */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-cream p-1 order-first lg:order-last"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-ink/70 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Sidebar panel — slides from left */}
            <motion.div
              key="mobile-menu"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
              className="fixed top-0 left-0 bottom-0 z-50 w-72 bg-ink border-r border-white/8 flex flex-col pt-20 px-7 pb-10 overflow-y-auto"
            >
              {/* Pink glow accent inside drawer */}
              <div
                className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
                aria-hidden="true"
                style={{ background: "radial-gradient(ellipse 100% 80% at 50% 0%, rgba(244,114,182,0.07) 0%, transparent 70%)" }}
              />

              <ul className="flex flex-col gap-1 flex-1 relative">
                {links.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center gap-3 py-3 text-xl font-semibold transition-colors border-b border-white/5 ${
                          isActive ? "text-lime" : "text-cream hover:text-lime"
                        }`}
                      >
                        {isActive && <span className="w-1 h-4 bg-lime flex-shrink-0" />}
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="border-t border-white/10 pt-6 space-y-4 relative">
                <a
                  href="tel:+16826221532"
                  className="flex items-center gap-3 text-warm hover:text-pink transition-colors"
                >
                  <Phone className="w-4 h-4 text-pink" />
                  <span className="font-medium text-sm">(682) 622-1532</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block bg-lime text-ink font-semibold text-center py-3.5 text-sm hover:bg-lime-dark transition-colors"
                >
                  Get a Free Estimate
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
