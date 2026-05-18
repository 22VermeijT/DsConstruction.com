"use client";

import { motion } from "framer-motion";

const stories = [
  {
    quote:
      "They built a custom shower for me after my accident. I told them exactly what I needed: grab bars here, bench there, zero threshold. They built it exactly right. Didn't have to explain it twice.",
    context: "Accessibility remodel · Alvarado, TX",
    initial: "R.T.",
  },
  {
    quote:
      "We called them back two years after our first flooring job. Still the same quality, same crew, same attitude. That's rare. You don't find that with most contractors in this area.",
    context: "Repeat customer · Cedar Hill, TX",
    initial: "M.W.",
  },
  {
    quote:
      "Storm took out part of our back fence and some siding. They came out fast, told us exactly what needed to happen, gave us a fair price, and got it done. No drama.",
    context: "Storm damage repair · Burleson, TX",
    initial: "J.K.",
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-cream py-24 lg:py-36 dot-grid-dark overflow-hidden">
      {/* Lime glow — top left */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 55% 45% at 5% 0%, rgba(74,222,128,0.09) 0%, transparent 60%)" }}
      />
      {/* Pink glow — bottom right */}
      <div
        className="absolute inset-0 pointer-events-none glow-breathe"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 55% 45% at 95% 100%, rgba(244,114,182,0.08) 0%, transparent 60%)" }}
      />
      {/* Watermark quote mark */}
      <div
        className="absolute right-4 bottom-0 select-none pointer-events-none font-display font-bold leading-none text-[22vw] text-ink/[0.03]"
        aria-hidden="true"
      >&ldquo;</div>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-muted text-xs tracking-[0.22em] uppercase font-semibold">05 / From Our Customers</span>
          <span className="rule-pink w-12" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          className="font-display text-4xl lg:text-5xl font-bold text-ink mb-16 max-w-xl leading-tight"
        >
          Real words from real
          <br />
          <em className="text-pink not-italic">DFW homeowners.</em>
        </motion.h2>

        {/* Stories — editorial staggered layout */}
        <div className="grid lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-stone">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.65,
                ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
                delay: i * 0.1,
              }}
              className="px-0 py-10 lg:px-10 lg:py-0 first:pl-0 last:pr-0 flex flex-col bracket-lime"
            >
              {/* Top accent rule */}
              <div className={`h-0.5 w-14 mb-5 ${i === 1 ? "bg-pink shadow-[0_0_8px_rgba(244,114,182,0.6)]" : "bg-lime shadow-[0_0_8px_rgba(74,222,128,0.6)]"}`} />
              {/* Texas Lone Stars */}
              <div className="flex gap-1.5 mb-3" aria-hidden="true">
                {[...Array(5)].map((_, s) => (
                  <span key={s} className={`text-sm ${i === 1 ? "text-pink star-glow-pink" : "text-lime star-glow"}`}>★</span>
                ))}
              </div>

              {/* Large quotation mark */}
              <div
                className={`font-display text-[72px] leading-none font-bold mb-4 select-none ${i === 1 ? "text-pink" : "text-lime"}`}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              <blockquote className={`text-charcoal text-base leading-relaxed flex-1 font-medium border-l-2 pl-4 ${i === 1 ? "border-pink/40" : "border-lime/40"}`}>
                {story.quote}
              </blockquote>

              <footer className="mt-8 pt-5 border-t border-stone">
                <div className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${i === 1 ? "bg-pink-dark" : "bg-forest"}`}>
                    <span className="text-cream text-xs font-bold">{story.initial}</span>
                  </div>
                  <div>
                    <p className="text-muted text-xs font-semibold tracking-wide uppercase">
                      {story.context}
                    </p>
                  </div>
                </div>
              </footer>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted text-sm">
            We&apos;re actively booking projects.{" "}
            <a
              href="#contact"
              className="text-pink font-semibold hover:text-pink-dark underline underline-offset-2"
            >
              Get your estimate before the calendar fills up.
            </a>
          </p>
        </motion.div>
      </div>
    </section>

  );
}
