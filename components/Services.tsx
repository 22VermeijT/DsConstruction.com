"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    number: "01",
    title: "Interior Remodeling",
    services: [
      "Full Home Remodels",
      "Bathroom Renovations",
      "Custom Shower Builds",
      "Flooring Installation",
      "Interior Painting",
      "Kitchen Updates",
      "Framing & Drywall",
    ],
    accent: "From tearing out the old to finishing every detail. Complete interior transformations.",
    timeline: "Most projects 1–4 weeks. Written quote with exact scope before we touch a thing.",
  },
  {
    number: "02",
    title: "Exterior Work",
    services: [
      "Exterior House Painting",
      "Patio Stencil Designs",
      "Fireplace Construction",
      "Deck & Patio Work",
      "Exterior Trim & Siding",
      "Tree Removal",
    ],
    accent: "Curb appeal that holds up to Texas weather and turns heads on the block.",
    timeline: "Most exterior jobs wrapped in 3–10 days. We plan around the Texas forecast.",
  },
  {
    number: "03",
    title: "Accessibility Remodeling",
    services: [
      "Wheelchair-Accessible Bathrooms",
      "Roll-In Shower Builds",
      "Grab Bar Installation",
      "Doorway Widening",
      "Ramp Construction",
      "Custom ADA-Compliant Layouts",
    ],
    accent: "We design and build spaces that give people their independence back. It matters.",
    timeline: "Typically 1–3 weeks. ADA-certified work, permit-ready documentation included.",
  },
  {
    number: "04",
    title: "Repair & Restoration",
    services: [
      "Storm Damage Repair",
      "Water Damage Restoration",
      "Structural Repairs",
      "Remodeling Damage Fixes",
      "General Home Improvement",
      "Emergency Repairs",
    ],
    accent: "When something goes wrong, we help you get back to normal. Fast and done right.",
    timeline: "Storm and water damage prioritized. Most repairs completed in 1–5 days.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-ink py-24 lg:py-36 dot-grid">
      {/* Lime glow — top center */}
      <div
        className="absolute inset-0 pointer-events-none glow-breathe"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(74,222,128,0.07) 0%, transparent 60%)" }}
      />
      {/* Pink glow — bottom left */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 60% 45% at 5% 100%, rgba(244,114,182,0.07) 0%, transparent 60%)" }}
      />
      {/* Grey ambient glow — center depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(180,185,210,0.04) 0%, transparent 70%)" }}
      />
      {/* Watermark number */}
      <div
        className="absolute right-8 bottom-8 select-none pointer-events-none text-[20vw] font-display font-bold leading-none text-white/[0.02]"
        aria-hidden="true"
      >02</div>
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-warm text-xs tracking-[0.22em] uppercase font-semibold">02 / Services</span>
              <span className="rule-lime w-12 opacity-60" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
              className="font-display text-5xl lg:text-6xl font-bold text-cream leading-tight"
            >
              What we do.<br />
              <em className="text-lime not-italic">and do well.</em>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-warm max-w-xs leading-relaxed text-sm lg:text-right"
          >
            We handle everything from a single bathroom to a full-house renovation.
            Call us and we&apos;ll tell you straight if it&apos;s a job we can do right.
          </motion.p>
        </div>

        {/* Service categories — editorial list style */}
        <div className="divide-y divide-white/8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.65,
                ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
                delay: i * 0.07,
              }}
              className="group py-10 grid lg:grid-cols-[80px_1fr_1fr_auto] gap-6 lg:gap-10 items-start"
            >
              {/* Number */}
              <div className="font-display text-4xl font-bold text-white/30 group-hover:text-lime/60 transition-colors duration-300 leading-none pt-1">
                {cat.number}
              </div>

              {/* Title + accent */}
              <div>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-cream group-hover:text-lime transition-colors duration-200 leading-tight mb-3">
                  {cat.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed max-w-xs">{cat.accent}</p>
                <p className="text-warm/60 text-xs mt-3 font-medium">
                  <span className={i === 2 ? "text-pink/70" : "text-lime/70"}>Timeline: </span>{cat.timeline}
                </p>
              </div>

              {/* Service list */}
              <ul className="space-y-2">
                {cat.services.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-stone text-sm">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${i === 2 ? "bg-pink" : "bg-lime"}`} />
                    {s}
                  </li>
                ))}
              </ul>

              {/* Arrow icon — right-aligned */}
              <div className="hidden lg:block pt-1">
                <a
                  href="#contact"
                  className="w-10 h-10 border border-white/15 flex items-center justify-center text-warm group-hover:border-lime group-hover:text-lime transition-colors duration-200"
                  aria-label={`Get a quote for ${cat.title}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-12 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <p className="text-warm text-sm max-w-sm">
            Not sure which category your project falls into? Just call us. We&apos;ll figure it out together.
          </p>
          <a
            href="tel:+16826221532"
            className="inline-flex items-center gap-2 bg-lime text-ink font-semibold px-6 py-3.5 hover:bg-lime-dark transition-colors text-sm flex-shrink-0"
          >
            Call (682) 622-1532
          </a>
        </motion.div>
      </div>
    </section>
  );
}

