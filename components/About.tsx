"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  },
});

const stats = [
  { value: "Small", label: "Tight-Knit Crew" },
  { value: "100%", label: "Owner on Every Job" },
  { value: "DFW", label: "Local & Family-Rooted" },
];

export function About() {
  return (
    <section id="about" className="relative bg-cream py-24 lg:py-36 overflow-hidden">
      {/* Lime glow — top left */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 50% 40% at 0% 0%, rgba(74,222,128,0.07) 0%, transparent 55%)" }}
      />
      {/* Pink glow — bottom right */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 50% 40% at 100% 100%, rgba(244,114,182,0.06) 0%, transparent 55%)" }}
      />
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section label */}
        <motion.div
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-muted text-xs tracking-[0.22em] uppercase font-semibold">01 / About</span>
          <span className="rule-pink flex-1 max-w-[60px]" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-16 lg:gap-24 items-start">
          {/* Left: Story */}
          <div className="space-y-8">
            <motion.h2
              variants={fadeUp()}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="font-display text-5xl lg:text-6xl font-bold text-ink leading-tight"
            >
              Not a big company.
              <br />
              <em className="text-forest-mid not-italic">Just a small crew
              <br />that does it right.</em>
            </motion.h2>

            <motion.div
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-5 text-charcoal leading-relaxed max-w-xl"
            >
              <p>
                D&apos;s Construction is built around Daven Lassetter — a husband,
                a family man, and a contractor out of Alvarado, TX who runs a tight,
                trusted crew. No massive operation, no revolving door of strangers
                on your job site. When you call, you get Daven. When the work starts,
                Daven is there leading it.
              </p>
              <p>
                Keeping the team small is a choice, not a limitation. It means every
                job gets real attention. No overbooked schedule, no work getting
                handed off to whoever&apos;s available. The same people who show up on
                day one are there on the last day — and they care about the outcome
                because Daven does.
              </p>
              <p>
                Daven started doing this work because he&apos;s good at it and because
                he genuinely enjoys it. Building something, fixing something, leaving
                a home better than he found it. That drive doesn&apos;t come from a
                business plan. It comes from who he is.
              </p>
              <p className="font-semibold text-ink">
                Based in Alvarado, TX. Serving Cedar Hill, Mansfield, Burleson, and
                the wider DFW area. Small team by design — big on accountability.
              </p>
            </motion.div>
          </div>

          {/* Right: Daven's photo */}
          <motion.div
            variants={fadeUp(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-4"
          >
            <div className="relative h-[540px] overflow-hidden ring-1 ring-pink/30">
              <Image
                src="/daven-family.jpg"
                alt="Daven Lassetter — Owner of D's Construction & Remodeling"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
              <div className="absolute bottom-4 left-4 bg-ink/80 text-cream text-xs px-3 py-1.5 font-medium tracking-wide">
                Alvarado, TX
              </div>
            </div>

            <div className="bg-forest px-6 py-5 shadow-[inset_0_-2px_0_rgba(244,114,182,0.5),inset_2px_0_0_rgba(74,222,128,0.3)]">
              <p className="text-stone text-sm leading-relaxed italic font-display">
                &ldquo;When you hire us, you get me on the job.
                <br />That&apos;s not something I plan to change.&rdquo;
              </p>
              <p className="text-pink text-xs mt-3 font-semibold tracking-wide uppercase not-italic">
                Daven Lassetter · D&apos;s Construction &amp; Remodeling
              </p>
            </div>
          </motion.div>
        </div>

        {/* Full-width centered stats + CTA */}
        <motion.div
          variants={fadeUp(0.25)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 pt-12 border-t border-stone flex flex-col items-center gap-8"
        >
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
            {stats.map(({ value, label }, i) => (
              <div key={label} className="text-center">
                <div className={`font-display text-5xl font-bold leading-none ${i === 2 ? "text-pink" : "text-forest-mid"}`}>
                  {value}
                </div>
                <div className={`h-px w-8 mx-auto mt-2 mb-2 ${i === 2 ? "bg-pink/60 shadow-[0_0_6px_rgba(244,114,182,0.5)]" : "bg-forest-mid/60 shadow-[0_0_6px_rgba(74,222,128,0.3)]"}`} />
                <div className="text-muted text-sm font-medium">{label}</div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-pink text-pink font-semibold px-8 py-4 hover:bg-pink hover:text-ink transition-colors text-sm"
          >
            Talk to Daven About Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
