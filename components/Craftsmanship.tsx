"use client";

import { motion } from "framer-motion";

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const principles = [
  {
    num: "01",
    title: "We do the work ourselves.",
    body: "We don't broker your job to a cheaper sub. When you hire us, you get our crew — the same people you talked to on the phone.",
    accent: "lime",
  },
  {
    num: "02",
    title: "We tell you the truth up front.",
    body: "If a project is outside our wheelhouse or your budget doesn't match the scope, we'll say so. No bait-and-switch.",
    accent: "pink",
  },
  {
    num: "03",
    title: "We clean up after ourselves.",
    body: "We treat your home with respect. Protecting floors, containing dust, and leaving your space tidy at the end of every day.",
    accent: "lime",
  },
  {
    num: "04",
    title: "We stand behind our work.",
    body: "Our first customer came back two years later for more work. That kind of return business is the only reputation metric we care about.",
    accent: "pink",
  },
];

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Craftsmanship() {
  return (
    <section className="bg-forest py-24 lg:py-36 overflow-hidden relative">
      {/* Lime glow — top right */}
      <div
        className="absolute inset-0 pointer-events-none glow-breathe"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 60% 55% at 90% 10%, rgba(74,222,128,0.09) 0%, transparent 60%)" }}
      />
      {/* Pink glow — bottom left */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 50% 40% at 5% 100%, rgba(244,114,182,0.07) 0%, transparent 55%)" }}
      />
      {/* Watermark */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none text-[22vw] font-display font-bold leading-none text-white/[0.025]"
        aria-hidden="true"
      >04</div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-lime/60 text-xs tracking-[0.22em] uppercase font-semibold">04 / How We Work</span>
              <span className="w-10 h-px bg-lime/30" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="font-display text-4xl lg:text-5xl font-bold text-cream leading-tight"
            >
              The way we think about<br />
              <em className="text-lime not-italic">craftsmanship</em> is pretty simple.
            </motion.h2>
          </div>

          {/* Inline stat */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-shrink-0 bg-lime px-8 py-5 bracket-lime"
            style={{ boxShadow: "4px 4px 0 rgba(244,114,182,0.4), 0 0 20px rgba(244,114,182,0.15), 0 0 40px rgba(74,222,128,0.1)" }}
          >
            <div className="font-display text-4xl font-bold text-ink leading-none">100%</div>
            <div className="text-ink/70 text-xs mt-1.5 font-semibold leading-tight">
              Owner-operated.<br />Every job.
            </div>
          </motion.div>
        </div>

        {/* Principles grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-lime/10"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {principles.map((p) => (
            <motion.div
              key={p.num}
              variants={cardVariants}
              className={`relative bg-forest p-8 flex flex-col gap-5 group hover:bg-forest-mid transition-all duration-300 overflow-hidden ${p.accent === "lime" ? "hover:shadow-[inset_0_-2px_0_rgba(74,222,128,0.5)]" : "hover:shadow-[inset_0_-2px_0_rgba(244,114,182,0.5)]"}`}
            >
              {/* Large background number */}
              <div
                className={`absolute -bottom-4 -left-2 font-display font-bold leading-none select-none pointer-events-none transition-colors duration-300 ${p.accent === "lime" ? "text-lime/[0.07] group-hover:text-lime/[0.12]" : "text-pink/[0.07] group-hover:text-pink/[0.12]"}`}
                style={{ fontSize: "clamp(80px, 10vw, 130px)" }}
                aria-hidden="true"
              >
                {p.num}
              </div>

              {/* Content */}
              <div className={`w-8 h-px ${p.accent === "lime" ? "bg-lime/40" : "bg-pink/40"} group-hover:w-16 transition-all duration-500 relative z-10`} />
              <div className="relative z-10">
                <h3 className="text-stone font-semibold text-base mb-2 leading-snug">{p.title}</h3>
                <p className="text-stone/55 text-sm leading-relaxed">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-pink text-pink font-semibold px-8 py-4 hover:bg-pink hover:text-ink transition-colors text-sm"
          >
            Start Your Project
          </a>
        </motion.div>

      </div>
    </section>
  );
}
