import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { PrivacyPolicyModal } from "@/components/PrivacyPolicyModal";

const serviceLinks = [
  "Full Home Remodels",
  "Bathroom Renovations",
  "Custom Showers",
  "Flooring Installation",
  "Exterior Painting",
  "Accessibility Remodeling",
  "Storm Damage Repair",
  "Fireplace Construction",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal border-t border-white/8 overflow-hidden">
      {/* Lime glow — top left */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 50% 35% at 15% 0%, rgba(74,222,128,0.06) 0%, transparent 60%)" }}
      />
      {/* Pink glow — top right */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 50% 35% at 85% 0%, rgba(244,114,182,0.05) 0%, transparent 60%)" }}
      />
      {/* Grey ambient glow — center depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(180,185,210,0.04) 0%, transparent 70%)" }}
      />
      {/* Main footer body */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-8 lg:gap-16">
          {/* Brand column — full width on mobile */}
          <div className="col-span-2 lg:col-span-1 space-y-6">
            <div>
              <Image
                src="/logo.png"
                alt="D's Construction & Remodeling"
                width={88}
                height={88}
                className="object-contain"
              />
            </div>

            <p className="text-muted text-sm leading-relaxed max-w-xs">
              A local Texas contractor serving Alvarado, Cedar Hill, and the wider DFW
              area. We do honest work for good people.
            </p>

            <div className="space-y-3">
              <a
                href="tel:+16826221532"
                className="flex items-center gap-2.5 text-stone hover:text-lime transition-colors text-sm group"
              >
                <Phone className="w-3.5 h-3.5 text-lime" />
                (682) 622-1532
              </a>
              <a
                href="mailto:dlassetter24@gmail.com"
                className="flex items-center gap-2.5 text-stone hover:text-pink transition-colors text-sm break-all"
              >
                <Mail className="w-3.5 h-3.5 text-pink flex-shrink-0" />
                dlassetter24@gmail.com
              </a>
              <div className="flex items-start gap-2.5 text-muted text-sm">
                <MapPin className="w-3.5 h-3.5 text-pink flex-shrink-0 mt-0.5" />
                <span>
                  Alvarado, TX 76009
                  <br />
                  Serving all of DFW
                </span>
              </div>

              <a
                href="https://www.facebook.com/profile.php?id=61563223582268"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-stone hover:text-[#1877F2] transition-colors text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 fill-[#1877F2] flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.514c-1.491 0-1.956.93-1.956 1.884v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                </svg>
                Follow us on Facebook
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-xs text-warm uppercase tracking-[0.2em] font-semibold mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-muted text-sm hover:text-cream transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links + CTA */}
          <div>
            <h4 className="text-xs text-warm uppercase tracking-[0.2em] font-semibold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 mb-10">
              {[
                { label: "About Us", href: "#about" },
                { label: "Project Showcase", href: "#projects" },
                { label: "Storm Damage", href: "#storm" },
                { label: "Free Estimate", href: "#contact" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-muted text-sm hover:text-cream transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <PrivacyPolicyModal />
              </li>
            </ul>

            <a
              href="#contact"
              className="inline-block bg-lime text-ink font-bold text-sm px-5 py-3 hover:bg-lime-dark transition-colors"
              style={{ boxShadow: "2px 2px 0 rgba(244,114,182,0.5)" }}
            >
              Get a Free Estimate →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6 relative z-10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-5 flex flex-col items-center gap-1.5">
          <p className="text-muted text-xs">
            &copy; {year} D&apos;s Construction &amp; Remodeling. All rights reserved. Alvarado, TX.
          </p>
          <p className="text-muted text-xs">
            Licensed &amp; Insured <span className="text-pink/60 mx-1 star-glow-pink">★</span> Serving DFW
          </p>
        </div>
        <div className="border-t border-white/4 py-3 flex justify-center">
          <a
            href="https://heeldigital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity duration-300"
          >
            <span className="text-muted text-xs">Built by</span>
            <Image
              src="/heel-digital-logo.png"
              alt="Heel Digital"
              width={72}
              height={24}
              className="object-contain opacity-40"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
