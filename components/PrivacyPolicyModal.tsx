"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

export function PrivacyPolicyModal() {
  const [open, setOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-muted text-sm hover:text-cream transition-colors"
      >
        Privacy Policy
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-10"
            onClick={() => setOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-ink/85 backdrop-blur-sm" />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 20 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="relative z-10 bg-cream w-full max-w-2xl max-h-[88vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-forest px-8 py-6 flex items-start justify-between gap-4 sticky top-0 z-10">
                <div>
                  <p className="text-lime text-[10px] font-bold tracking-[0.2em] uppercase mb-1">
                    D&apos;s Construction &amp; Remodeling
                  </p>
                  <h2 className="font-display text-2xl font-bold text-cream leading-tight">
                    Privacy Policy
                  </h2>
                  <p className="text-stone/60 text-xs mt-1">Effective {year} · Alvarado, TX</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="flex-shrink-0 w-9 h-9 bg-white/10 hover:bg-white/20 flex items-center justify-center text-cream transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="px-8 py-8 space-y-8 text-charcoal text-sm leading-relaxed">

                <section>
                  <h3 className="font-display font-bold text-ink text-base mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-lime inline-block flex-shrink-0" />
                    Overview
                  </h3>
                  <p>
                    D&apos;s Construction &amp; Remodeling (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy.
                    This policy explains what information we collect when you visit our website or
                    contact us, how we use it, and what we don&apos;t do with it. We keep this simple
                    because your trust matters more to us than legal boilerplate.
                  </p>
                </section>

                <section>
                  <h3 className="font-display font-bold text-ink text-base mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-lime inline-block flex-shrink-0" />
                    Analytics &amp; Website Data
                  </h3>
                  <p className="mb-3">
                    Our website uses analytics tools to help us understand how visitors use the site.
                    This data is <strong className="text-ink">fully anonymous</strong> — we cannot
                    identify you as an individual. What may be collected includes:
                  </p>
                  <ul className="space-y-1.5 pl-4">
                    {[
                      "Pages visited and time spent on site",
                      "General geographic region (e.g., Dallas–Fort Worth area) — not your precise location",
                      "Browser type and device category",
                      "Referral source (how you found us)",
                      "Session duration and click patterns",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-forest-mid mt-1 flex-shrink-0">★</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3">
                    This data contains <strong className="text-ink">no personal identifiers</strong> —
                    no names, email addresses, phone numbers, or IP addresses tied to individuals.
                    It is used solely to improve the website experience.
                  </p>
                </section>

                <section>
                  <h3 className="font-display font-bold text-ink text-base mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-lime inline-block flex-shrink-0" />
                    Contact Form &amp; Inquiry Data
                  </h3>
                  <p className="mb-3">
                    When you fill out our contact form or reach out to us directly, you may provide:
                  </p>
                  <ul className="space-y-1.5 pl-4 mb-3">
                    {[
                      "Your name",
                      "Phone number or email address",
                      "Project description or questions",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-forest-mid mt-1 flex-shrink-0">★</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p>
                    This information is used <strong className="text-ink">only to respond to your
                    inquiry</strong> and assist with your project. It is stored internally and
                    never sold, rented, shared, or disclosed to any third party for marketing
                    or commercial purposes.
                  </p>
                </section>

                <section>
                  <h3 className="font-display font-bold text-ink text-base mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-lime inline-block flex-shrink-0" />
                    What We Do Not Do
                  </h3>
                  <ul className="space-y-1.5 pl-4">
                    {[
                      "We do not sell your personal information to any third party",
                      "We do not use your contact data for unsolicited marketing or advertising",
                      "We do not share your data with data brokers or advertising networks",
                      "We do not collect sensitive personal information (financial, health, etc.)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-forest-mid mt-1 flex-shrink-0">★</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="font-display font-bold text-ink text-base mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-lime inline-block flex-shrink-0" />
                    Cookies
                  </h3>
                  <p>
                    Our analytics tools may use cookies or similar technologies to track anonymous
                    session data. These are functional cookies only. You may disable cookies in
                    your browser settings at any time; doing so will not affect your ability to
                    use this site.
                  </p>
                </section>

                <section>
                  <h3 className="font-display font-bold text-ink text-base mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-lime inline-block flex-shrink-0" />
                    Your Rights
                  </h3>
                  <p>
                    You may request deletion of any personal information you have submitted to us
                    at any time. To do so, contact us directly at{" "}
                    <a
                      href="mailto:dlassetter24@gmail.com"
                      className="text-forest-mid font-semibold hover:text-forest underline underline-offset-2"
                    >
                      dlassetter24@gmail.com
                    </a>{" "}
                    or call{" "}
                    <a href="tel:+16826221532" className="text-forest-mid font-semibold hover:text-forest">
                      (682) 622-1532
                    </a>
                    . We will respond promptly.
                  </p>
                </section>

                <section>
                  <h3 className="font-display font-bold text-ink text-base mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-lime inline-block flex-shrink-0" />
                    Changes to This Policy
                  </h3>
                  <p>
                    We may update this policy as our website evolves. Any material changes will
                    be reflected with an updated effective date at the top of this page. Continued
                    use of the site after changes constitutes your acceptance.
                  </p>
                </section>

                {/* Logo footer */}
                <div className="border-t border-stone pt-8 flex flex-col items-center gap-3">
                  <Image
                    src="/logo.png"
                    alt="D's Construction & Remodeling"
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                  <p className="text-muted text-xs text-center">
                    D&apos;s Construction &amp; Remodeling &nbsp;·&nbsp; Alvarado, TX
                    &nbsp;·&nbsp; Licensed &amp; Insured
                  </p>
                  <button
                    onClick={() => setOpen(false)}
                    className="mt-2 text-xs font-semibold text-forest-mid hover:text-forest underline underline-offset-2"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
