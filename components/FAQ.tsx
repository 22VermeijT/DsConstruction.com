"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do you pull permits?",
    a: "Yes. For any work that requires one, we pull the permit ourselves. We don't skip that step. Code compliance protects you as a homeowner, and we take that seriously.",
  },
  {
    q: "Do you use subcontractors?",
    a: "No. Our crew does the work. The people you meet at the estimate are the people in your home. We don't broker your job out to someone you've never met.",
  },
  {
    q: "How long does a typical bathroom renovation take?",
    a: "Most bathroom renovations run 2–3 weeks from start to finish, depending on scope. We'll give you a realistic timeline before we start — not an optimistic one we have to walk back later.",
  },
  {
    q: "What do I need to do before work begins?",
    a: "Not much. A signed quote, access to the space, and a general sense of your preferences on finishes and fixtures. We can help you think through those if you're not sure what you want.",
  },
  {
    q: "What if something unexpected comes up mid-project?",
    a: "We stop and tell you immediately. If we open a wall and find water damage that wasn't in the original scope, we show you, explain the options, and agree on next steps before moving forward. No surprise charges buried in the final invoice.",
  },
  {
    q: "Do you serve my area?",
    a: "We're based in Alvarado and work throughout DFW — Cedar Hill, Mansfield, Burleson, Cleburne, Midlothian, and surrounding communities. Not sure if you're in range? Just call us and we'll tell you straight.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. We're a licensed Texas contractor and carry full liability insurance. We're happy to provide documentation before any work begins — just ask.",
  },
  {
    q: "How do I get started?",
    a: "Call or text us at (682) 622-1532, or fill out the contact form below. We'll schedule a free on-site estimate and go from there. No pressure.",
  },
];

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative py-24 lg:py-36"
      style={{
        backgroundImage: "url('/bg-pattern-2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-cream/55" aria-hidden="true" />
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-muted text-xs tracking-[0.22em] uppercase font-semibold">Common Questions</span>
            <span className="rule-lime w-12" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-display text-5xl lg:text-6xl font-bold text-ink leading-tight mb-5"
          >
            Questions we get<br />
            <em className="text-forest-mid not-italic">all the time.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted text-sm leading-relaxed max-w-sm"
          >
            Hiring a contractor shouldn&apos;t feel like a gamble. Here&apos;s
            what most people want to know before they call.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.05 }}
              className={`border-b border-stone transition-colors duration-200 ${open === i ? "faq-open" : ""}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-5 text-left group"
              >
                <span
                  className={`font-semibold text-base leading-snug transition-colors duration-200 ${
                    open === i
                      ? "text-forest-mid"
                      : "text-ink group-hover:text-forest-mid"
                  }`}
                >
                  {faq.q}
                </span>
                <span className="flex-shrink-0 w-7 h-7 border border-stone flex items-center justify-center group-hover:border-forest-mid transition-colors duration-200">
                  {open === i ? (
                    <Minus className="w-3.5 h-3.5 text-forest-mid" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 text-muted" />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <p className="text-charcoal text-sm leading-relaxed pb-6 max-w-2xl">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-muted text-sm text-center"
        >
          Still have a question?{" "}
          <a
            href="tel:+16826221532"
            className="text-forest-mid font-semibold hover:text-forest underline underline-offset-2"
          >
            Call us — we&apos;re happy to talk it through.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
