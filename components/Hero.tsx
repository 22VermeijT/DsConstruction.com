"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen bg-ink overflow-hidden flex items-center">

      {/* Diagonal image panel — right 65% with angled left edge */}
      <div
        className="absolute inset-y-0 right-0 w-[65%] clip-diagonal-left"
        aria-hidden="true"
      >
        <Image
          src="/hero-chatgpt.png"
          alt="Dallas, TX skyline, serving the greater DFW area"
          fill
          className="object-cover object-center [filter:grayscale(55%)]"
          priority
          sizes="(max-width: 768px) 100vw, 65vw"
        />
        {/* Left-to-right shadow so text stays legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/15" />
      </div>

      {/* Dot-grid + crosshatch texture */}
      <div className="absolute inset-0 dot-grid crosshatch pointer-events-none" aria-hidden="true" />

      {/* Lime glow — left-center */}
      <div
        className="absolute inset-0 pointer-events-none glow-breathe"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 70% 55% at 28% 50%, rgba(74,222,128,0.09) 0%, transparent 65%)" }}
      />

      {/* Pink glow — bottom-right counter-glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 55% 45% at 92% 95%, rgba(244,114,182,0.08) 0%, transparent 60%)" }}
      />
      {/* Grey ambient glow — center depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 55%, rgba(180,185,210,0.04) 0%, transparent 70%)" }}
      />

      {/* Watermark star */}
      <div
        className="absolute right-[5%] top-1/2 -translate-y-1/2 select-none pointer-events-none z-0 text-[28vw] leading-none font-bold text-white/[0.025]"
        aria-hidden="true"
      >★</div>

      {/* Main text content */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-20 xl:px-28 max-w-[680px] py-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="space-y-7"
        >
          {/* Location tag */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <span className="block w-7 h-px bg-pink flex-shrink-0" />
            <span className="text-lime text-xs font-semibold tracking-[0.22em] uppercase">
              <span className="text-pink star-glow-pink">★</span> Alvarado, Texas · Serving DFW
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display font-bold leading-[0.93] text-cream"
            style={{ fontSize: "clamp(3rem, 7vw, 5.25rem)" }}
          >
            <span className="block whitespace-nowrap">Done Right.</span>
            <span className="block whitespace-nowrap text-pink" style={{ textShadow: "0 0 60px rgba(244,114,182,0.55), 0 0 20px rgba(244,114,182,0.3)" }}>Done Honest.</span>
            <em className="block whitespace-nowrap text-lime not-italic">Built in Texas.</em>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={fadeUp}
            className="text-warm text-lg leading-relaxed max-w-[480px]"
          >
            We&apos;re D&apos;s Construction &amp; Remodeling, a crew out of Alvarado that&apos;s been
            transforming homes across Cedar Hill and DFW for years. No subs, no
            shortcuts. Just craftsmen who show up and deliver.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-lime text-ink font-semibold px-7 py-4 hover:bg-lime-dark transition-colors duration-200 pulse-lime"
            >
              Get a Free Estimate
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 border border-white/20 text-cream font-medium px-7 py-4 hover:border-lime hover:text-lime transition-colors duration-200"
            >
              See Our Work
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div variants={fadeUp}>
            <a
              href="tel:+16826221532"
              className="inline-flex items-center gap-2.5 text-stone hover:text-lime transition-colors group"
            >
              <Phone className="w-4 h-4 text-lime" />
              <span className="font-medium">(682) 622-1532</span>
              <span className="text-muted text-sm">call or text anytime</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll nudge */}
      <motion.a
        href="#trust"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-warm/50 hover:text-lime transition-colors flex flex-col items-center gap-1"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll down"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.a>
    </section>
  );
}
