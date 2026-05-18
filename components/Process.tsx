"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Call or text us.",
    body: "We pick up. Tell us what you're thinking — even if it's just an idea. We'll ask a few questions and tell you honestly if it's a job we can do well and on budget.",
    cue: "(682) 622-1532",
  },
  {
    num: "02",
    title: "We come to the site.",
    body: "Free on-site visit, usually within a few days. We look at the space, take measurements, and give you a straight read on what's realistic. No upselling.",
    cue: "Free. No obligation.",
  },
  {
    num: "03",
    title: "Written quote, clear scope.",
    body: "You get a written quote with exactly what's included. No vague line items. If something has a chance of changing mid-project, we'll tell you upfront — before you sign.",
    cue: "No surprises.",
  },
  {
    num: "04",
    title: "Same crew, start to finish.",
    body: "The people you met at the estimate are the people in your home. We show up when we say we will, keep your space tidy, and check in with you throughout.",
    cue: "Your crew. Every day.",
  },
];

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Process() {
  return (
    <section
      id="process"
      className="relative py-24 lg:py-36"
      style={{
        backgroundImage: "url('/bg-pattern.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Slight cream overlay to soften pattern */}
      <div className="absolute inset-0 bg-cream/60" aria-hidden="true" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-muted text-xs tracking-[0.22em] uppercase font-semibold">How It Works</span>
            <span className="rule-pink w-12" />
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="font-display text-5xl lg:text-6xl font-bold text-ink leading-tight"
            >
              What happens when<br />
              <em className="text-forest-mid not-italic">you call us.</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-charcoal text-sm leading-relaxed max-w-xs lg:text-right"
            >
              No mystery. No runaround. Here&apos;s exactly how a project goes
              from first call to finished job.
            </motion.p>
          </div>
        </div>

        {/* Steps grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {steps.map((step, i) => {
            const isPink = i % 2 === 1;
            return (
              <motion.div
                key={step.num}
                variants={cardVariants}
                className={`bg-white/75 backdrop-blur-sm p-8 flex flex-col gap-6 group hover:bg-white transition-all duration-300 ring-1 ring-stone ${isPink ? "hover:ring-pink" : "hover:ring-forest-mid"}`}
              >
                <div className={`font-display text-5xl font-bold transition-colors duration-300 leading-none ${isPink ? "text-pink/20 group-hover:text-pink/40" : "text-forest/20 group-hover:text-forest/40"}`}>
                  {step.num}
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="font-display text-xl font-bold text-ink leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-charcoal text-sm leading-relaxed">{step.body}</p>
                </div>
                <p className={`text-xs font-semibold tracking-wide uppercase border-t border-stone pt-4 ${isPink ? "text-pink" : "text-forest-mid"}`}>
                  {step.cue}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-stone pt-12"
        >
          <p className="text-charcoal text-sm max-w-sm">
            Our first customer called us back two years later. That kind of
            repeat business is the only review that actually means something.
          </p>
          <a
            href="tel:+16826221532"
            className="inline-flex items-center gap-2 bg-forest text-cream font-bold px-6 py-3.5 hover:bg-forest-mid transition-colors text-sm flex-shrink-0"
          >
            <Phone className="w-4 h-4" />
            Start with a Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
