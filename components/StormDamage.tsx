"use client";

import { motion } from "framer-motion";
import { CloudLightning, Phone, ArrowRight } from "lucide-react";

export function StormDamage() {
  return (
    <section id="storm" className="bg-charcoal py-24 lg:py-32 overflow-hidden relative">
      {/* Background texture */}
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-60" aria-hidden="true" />

      {/* Lime glow — top center */}
      <div
        className="absolute inset-0 pointer-events-none glow-breathe"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(74,222,128,0.07) 0%, transparent 60%)" }}
      />
      {/* Pink glow — bottom right */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 55% 45% at 95% 100%, rgba(244,114,182,0.08) 0%, transparent 60%)" }}
      />
      {/* Grey ambient glow — center depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(180,185,210,0.05) 0%, transparent 70%)" }}
      />
      {/* Watermark ★ */}
      <div
        className="absolute right-[8%] top-1/2 -translate-y-1/2 select-none pointer-events-none text-[18vw] leading-none text-white/[0.025]"
        aria-hidden="true"
      >★</div>

      {/* Accent bar — lime-to-pink gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: "linear-gradient(to bottom, #4ADE80, #F472B6)" }} aria-hidden="true" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Left content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <CloudLightning className="w-5 h-5 text-lime" />
              <span className="text-lime text-xs font-semibold tracking-[0.22em] uppercase">Storm & Damage Repair</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
              className="font-display text-4xl lg:text-6xl font-bold text-cream leading-tight mb-6"
            >
              Storm hit your home?
              <br />
              <em className="text-lime not-italic">We&apos;re one of the first
              <br />calls DFW homeowners make.</em>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 text-warm leading-relaxed mb-10"
            >
              <p>
                Texas weather doesn&apos;t ask for permission. Hail, high winds, heavy
                rain. When your home takes a hit, you need someone out there quickly
                who knows what they&apos;re doing and won&apos;t take advantage of the situation.
              </p>
              <p>
                We assess the damage honestly, help you understand what needs to happen,
                and get the repairs done right, whether it&apos;s roof damage, water
                intrusion, busted siding, or structural issues from fallen trees.
              </p>
              <p className="text-stone font-semibold">
                We serve Alvarado, Cedar Hill, Mansfield, Burleson, Cleburne,
                and surrounding DFW communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="tel:+16826221532"
                className="inline-flex items-center gap-2.5 bg-lime text-ink font-bold px-7 py-4 hover:bg-lime-dark transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now: (682) 622-1532
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-white/20 text-cream font-medium px-7 py-4 hover:border-lime hover:text-lime transition-colors"
              >
                Send a Message
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right: damage types card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="hidden lg:block bg-ink border border-lime/20 p-8 w-72 bracket-lime"
          >
            <p className="text-lime text-xs font-semibold tracking-[0.18em] uppercase mb-6">
              What we handle
            </p>
            <ul className="space-y-3">
              {[
                "Roof & Ceiling Damage",
                "Water Intrusion & Drywall",
                "Fallen Tree Cleanup",
                "Siding & Fascia Repair",
                "Window & Door Damage",
                "Structural Framing Repairs",
                "Interior Water Damage",
                "Full Rebuild If Needed",
              ].map((item, i) => (
                <li key={item} className="flex items-start gap-2.5 text-stone text-sm">
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${i % 2 === 0 ? "bg-lime" : "bg-pink"}`} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-muted text-xs leading-relaxed">
                Available for urgent assessments across the DFW area. Call first. We&apos;ll
                come out and give you a straight answer.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
