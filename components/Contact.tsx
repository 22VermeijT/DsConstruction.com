"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const services = [
  "Full Home Remodel",
  "Bathroom Renovation",
  "Flooring Installation",
  "Exterior Painting",
  "Accessibility Remodel",
  "Storm / Damage Repair",
  "Custom Shower",
  "Other / Not Sure",
];

type FormFields = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 10);
  if (digits.length < 4) return digits;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function validate(form: FormFields): FormErrors {
  const errors: FormErrors = {};

  if (!form.name.trim() || form.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  const digits = form.phone.replace(/\D/g, "");
  if (!digits) {
    errors.phone = "Phone number is required.";
  } else if (digits.length !== 10) {
    errors.phone = "Enter a valid 10-digit US phone number.";
  }

  if (form.email.trim()) {
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRe.test(form.email.trim())) {
      errors.email = "Enter a valid email address.";
    }
  }

  if (!form.service) {
    errors.service = "Please select a project type.";
  }

  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = "Please describe your project (at least 10 characters).";
  }

  return errors;
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState<FormFields>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    const updated = {
      ...form,
      [name]: name === "phone" ? formatPhone(value) : value,
    };
    setForm(updated);
    if (touched[name as keyof FormFields]) {
      setErrors(validate(updated));
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const name = e.target.name as keyof FormFields;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(form));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      (Object.keys(form) as (keyof FormFields)[]).map((k) => [k, true])
    ) as Record<keyof FormFields, boolean>;
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    setSubmitError(false);

    try {
      const res = await fetch("https://formspree.io/f/xzdwbdyp", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  }

  const fieldClass = (name: keyof FormFields) =>
    `w-full bg-charcoal border text-cream text-sm px-4 py-3.5 focus:outline-none transition-colors placeholder:text-muted ${
      touched[name] && errors[name]
        ? "border-red-400 focus:border-red-400"
        : "border-white/10 focus:border-pink"
    }`;

  return (
    <section id="contact" className="relative bg-ink py-24 lg:py-36 dot-grid crosshatch">
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
        style={{ background: "radial-gradient(ellipse 65% 50% at 50% 50%, rgba(180,185,210,0.04) 0%, transparent 70%)" }}
      />
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-warm text-xs tracking-[0.22em] uppercase font-semibold">06 / Contact</span>
          <span className="rule-pink w-12 opacity-80" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          className="font-display text-4xl lg:text-6xl font-bold text-cream mb-16 leading-tight"
        >
          Let&apos;s talk about
          <br />
          <em className="text-lime not-italic">your project.</em>
        </motion.h2>

        <div className="grid lg:grid-cols-[400px_1fr] gap-16 lg:gap-24 items-start">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="space-y-10 border-l-2 border-pink/20 pl-6"
          >
            <div>
              <p className="text-warm text-sm leading-relaxed mb-8">
                We give free estimates. There&apos;s no pressure and no sales pitch. Tell
                us what you&apos;re thinking and we&apos;ll tell you what&apos;s realistic. No fluff.
              </p>

              <div className="space-y-5">
                <a href="tel:+16826221532" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 border border-lime/30 flex items-center justify-center flex-shrink-0 group-hover:border-lime group-hover:shadow-[0_0_10px_rgba(74,222,128,0.25)] transition-all">
                    <Phone className="w-4 h-4 text-lime" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wide font-semibold mb-0.5">Call or Text</p>
                    <p className="text-stone font-semibold group-hover:text-lime transition-colors">
                      (682) 622-1532
                    </p>
                  </div>
                </a>

                <a href="mailto:dlassetter24@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 border border-pink/30 flex items-center justify-center flex-shrink-0 group-hover:border-pink group-hover:shadow-[0_0_10px_rgba(244,114,182,0.25)] transition-all">
                    <Mail className="w-4 h-4 text-pink" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wide font-semibold mb-0.5">Email</p>
                    <p className="text-stone font-medium group-hover:text-pink transition-colors break-all">
                      dlassetter24@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-white/15 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-pink" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wide font-semibold mb-0.5">Based In</p>
                    <p className="text-stone font-medium">
                      Alvarado, Texas 76009
                      <br />
                      <span className="text-muted text-sm font-normal">
                        Serving Cedar Hill, Mansfield,
                        <br />
                        Burleson, Cleburne & all of DFW
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="text-muted text-xs leading-relaxed">
                We&apos;re usually available Monday–Saturday. Texts are fine any time and
                we&apos;ll get back to you the same day. For urgent storm damage, just call.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay: 0.1 }}
            className="shadow-[inset_0_2px_0_rgba(244,114,182,0.4),inset_0_-2px_0_rgba(74,222,128,0.3)]"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="border border-lime/30 bg-forest/20 p-10 flex flex-col items-center text-center gap-5 bracket-lime"
              >
                <CheckCircle className="w-12 h-12 text-lime" />
                <div>
                  <h3 className="font-display text-2xl font-bold text-cream mb-2">
                    Got it. Thanks!
                  </h3>
                  <p className="text-warm text-sm leading-relaxed">
                    We&apos;ll reach out within one business day. If you need something faster,
                    call us directly at{" "}
                    <a href="tel:+16826221532" className="text-lime font-semibold">
                      (682) 622-1532
                    </a>
                    .
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name + Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs text-muted uppercase tracking-wide font-semibold" htmlFor="name">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="First & last name"
                      className={fieldClass("name")}
                    />
                    {touched.name && errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-muted uppercase tracking-wide font-semibold" htmlFor="phone">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="(xxx) xxx-xxxx"
                      className={fieldClass("phone")}
                    />
                    {touched.phone && errors.phone && (
                      <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs text-muted uppercase tracking-wide font-semibold" htmlFor="email">
                    Email Address <span className="text-muted normal-case font-normal">(optional)</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="your@email.com"
                    className={fieldClass("email")}
                  />
                  {touched.email && errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Service type */}
                <div className="space-y-1.5">
                  <label className="text-xs text-muted uppercase tracking-wide font-semibold" htmlFor="service">
                    Type of Project *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${fieldClass("service")} appearance-none`}
                  >
                    <option value="">Select a project type…</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {touched.service && errors.service && (
                    <p className="text-red-400 text-xs mt-1">{errors.service}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs text-muted uppercase tracking-wide font-semibold" htmlFor="message">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Describe what you have in mind: size, timeline, any photos you'd like to share, etc."
                    className={`${fieldClass("message")} resize-none`}
                  />
                  {touched.message && errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 border border-red-400/40 bg-red-400/10 px-4 py-3.5"
                  >
                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-red-300 text-sm leading-relaxed">
                      Our form isn&apos;t working right now. Please call or text us directly at{" "}
                      <a href="tel:+16826221532" className="text-lime font-semibold underline underline-offset-2">
                        (682) 622-1532
                      </a>{" "}
                      and we&apos;ll get you taken care of.
                    </p>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2.5 bg-lime text-ink font-bold py-4 hover:bg-lime-dark transition-colors text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send My Request. It&apos;s Free.
                    </>
                  )}
                </button>

                <p className="text-muted text-xs text-center">
                  No spam. No pressure. Just a real conversation about your home.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
