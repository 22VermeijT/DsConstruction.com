"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];


type Project = {
  id: number;
  title: string;
  location: string;
  category: string;
  description: string;
  photoDesc: string;
  image?: string;
  details?: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Master Bath Renovation",
    location: "Cedar Hill, TX",
    category: "Bathrooms",
    description: "Complete gut-and-rebuild. New tile, custom shower, floating vanity, updated plumbing.",
    photoDesc: "Finished master bath — large-format tile, frameless shower glass, floating double vanity",
    image: "/projects/bathroom-remodel.jpg",
    details: [
      "Large-format marble-look tile throughout floor and shower surround",
      "Frameless glass shower enclosure with black hardware",
      "Built-in shower niche and bench",
      "New floating dark vanity with quartz countertop",
      "Full plumbing update — new fixtures, valves, and supply lines",
      "Glass block window for natural light and privacy",
    ],
  },
  {
    id: 3,
    title: "Loft Flooring & Renovation",
    location: "Mansfield, TX",
    category: "Flooring",
    description: "Full loft-level flooring renovation. Cool-toned LVP laid wall to wall, clean stair landing transition, and fresh paint throughout.",
    photoDesc: "Wide-angle loft shot showing continuous LVP runs — tight seams, clean finish",
    image: "/projects/loft-flooring.jpg",
    details: [
      "Wide-plank LVP in a cool ash-grey tone across the entire loft level",
      "Clean stair landing integration — tight edge trim at the open staircase",
      "Consistent layout direction ties the space together visually",
      "Fresh drywall and paint throughout the renovation",
      "Installed during active construction phase — coordinated with other trades on site",
    ],
  },
  {
    id: 4,
    title: "Covered Porch Tile & Trim",
    location: "Burleson, TX",
    category: "Exterior",
    description: "Full covered porch renovation — bold decorative tile floor, painted brick, white trim and ceiling, and recessed lighting.",
    photoDesc: "Covered porch at night with decorative tile floor, painted brick, and recessed lighting",
    image: "/projects/exterior-porch.jpg",
    details: [
      "Encaustic-style black and white decorative tile laid across the full porch floor",
      "White-painted brick exterior — clean, crisp contrast against the dark tile",
      "White trim and porch ceiling repainted and detailed",
      "Recessed lighting installed in the porch ceiling",
      "Black metal post wraps and hanging planter hardware",
      "Complete transformation of an outdated covered porch into a standout entryway",
    ],
  },
  {
    id: 5,
    title: "Covered Porch · Metallic Epoxy Floor",
    location: "Cedar Hill, TX",
    category: "Exterior",
    description: "Metallic epoxy coating on a screened covered porch. Black and silver swirl finish over the full concrete slab — looks like polished stone.",
    photoDesc: "Covered porch with black and silver metallic epoxy floor — high-gloss finish, brick walls, screened windows",
    image: "/projects/epoxy-porch.jpg",
    details: [
      "Full metallic epoxy system applied over existing concrete slab",
      "Black and silver swirl pattern — custom mixed on site",
      "High-gloss topcoat seals and protects the surface",
      "Screened covered porch with brick surround — prep included full surface cleaning and etching",
      "Durable, UV-resistant finish built for Texas outdoor conditions",
      "Transforms a plain concrete slab into a true design feature",
    ],
  },
  {
    id: 7,
    title: "Fireplace Construction",
    location: "Cleburne, TX",
    category: "Interior",
    description: "Floor-to-ceiling tiled fireplace wall with built-in linear electric insert, floating mantle, and flanking wood-panel accent walls.",
    photoDesc: "Stone-faced outdoor fireplace on a finished back patio — ideally photographed at dusk or in use",
    image: "/projects/fireplace.jpg",
    details: [
      "Full floor-to-ceiling tile surround with large-format linear tile",
      "Built-in linear electric fireplace insert with black frame",
      "Floating white mantle shelf above the insert",
      "Custom flanking wood-panel accent walls with framed detail",
      "TV mounting above the mantle integrated into the design",
      "Coordinating LVP flooring throughout the space",
    ],
  },
  {
    id: 8,
    title: "Luxury Vinyl Plank, Open Floor Plan",
    location: "Midlothian, TX",
    category: "Flooring",
    description: "LVP throughout kitchen, dining, and living area. Waterproof and built for Texas summer.",
    photoDesc: "Open-concept kitchen/dining/living area unified by continuous waterproof LVP flooring",
    image: "/projects/lvp-flooring.jpg",
    details: [
      "Wide-plank LVP in a warm driftwood tone across the full room",
      "Tight, consistent seams with no gaps or lippage",
      "Clean baseboard transitions throughout",
      "Waterproof construction — ideal for Texas heat and humidity",
      "Installed over existing subfloor with minimal disruption",
    ],
  },
];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      key="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-10"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" />

      {/* Panel */}
      <motion.div
        key="modal-panel"
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 24 }}
        transition={{ duration: 0.3, ease: EASE }}
        className="relative z-10 bg-cream w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-ink/60 hover:bg-ink text-cream w-9 h-9 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Image */}
        <div className="relative w-full h-[300px] lg:h-[420px] bg-stone overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-muted text-[11px] text-center leading-relaxed font-medium max-w-[180px] px-4">
                {project.photoDesc}
              </p>
            </div>
          )}
          {/* Gradient over image bottom */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream to-transparent" />
        </div>

        {/* Content */}
        <div className="px-8 pb-10 pt-2">
          {/* Category + location */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-lime text-[10px] font-bold tracking-[0.2em] uppercase bg-forest px-2.5 py-1">
              {project.category}
            </span>
            <span className="flex items-center gap-1 text-muted text-xs font-medium">
              <MapPin className="w-3 h-3" />
              {project.location}
            </span>
          </div>

          <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink leading-tight mb-4">
            {project.title}
          </h2>

          <p className="text-charcoal leading-relaxed mb-6">{project.description}</p>

          {project.details && project.details.length > 0 && (
            <div className="mb-8">
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-muted mb-3">What we did</p>
              <ul className="space-y-2">
                {project.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-charcoal leading-relaxed">
                    <span className={`mt-0.5 flex-shrink-0 ${i % 2 === 0 ? "text-lime" : "text-pink"}`}>★</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-3 pt-6 border-t border-stone">
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 bg-forest text-cream font-semibold px-6 py-3 hover:bg-forest-mid transition-colors text-sm shadow-[0_2px_0_rgba(244,114,182,0.4)]"
            >
              Get a Quote for This Work
            </a>
            <a
              href="tel:+16826221532"
              className="inline-flex items-center gap-2 border border-stone text-ink font-medium px-6 py-3 hover:border-forest transition-colors text-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              (682) 622-1532
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="bg-cream py-24 lg:py-36">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-14">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-muted text-xs tracking-[0.22em] uppercase font-semibold">03 / Projects</span>
              <span className="rule-pink w-12" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="font-display text-5xl lg:text-6xl font-bold text-ink leading-tight"
            >
              Work we&apos;re<br />
              <em className="text-pink not-italic">proud to put our name on.</em>
            </motion.h2>
          </div>

          {/* Perfect grid — 3 columns desktop, 2 tablet, 1 mobile */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="flex flex-col"
                  onMouseEnter={() => setHovered(project.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div
                    className="relative overflow-hidden group cursor-pointer"
                    onClick={() => setSelected(project)}
                  >
                    {/* Image */}
                    <div className="relative h-[300px] overflow-hidden bg-stone flex items-center justify-center">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <p className="text-muted text-[11px] text-center leading-relaxed font-medium max-w-[180px] px-4">
                          {project.photoDesc}
                        </p>
                      )}
                    </div>

                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 bg-forest/90 flex flex-col justify-end p-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hovered === project.id ? 1 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-pink text-xs font-semibold tracking-wide uppercase mb-1.5">
                            {project.category}
                          </p>
                          <h3 className="font-display text-xl font-bold text-cream leading-tight mb-2">
                            {project.title}
                          </h3>
                          <p className="text-stone text-sm leading-relaxed">{project.description}</p>
                          <p className="text-pink/70 text-xs mt-3 font-medium">{project.location}</p>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-lime flex-shrink-0 mt-1" />
                      </div>
                      <p className="text-pink/60 text-[10px] mt-4 font-semibold tracking-widest uppercase">
                        Click to view details
                      </p>
                    </motion.div>

                    {/* Always-visible category tag */}
                    <div className="absolute top-3 left-3 bg-ink/75 text-cream text-[10px] px-2.5 py-1.5 font-semibold tracking-wide uppercase">
                      {project.category}
                    </div>
                  </div>

                  {/* Below-image title */}
                  <div className={`bg-white px-4 py-3 border-l-2 ${idx % 2 === 0 ? "border-lime" : "border-pink"}`}>
                    <p className="font-semibold text-ink text-sm leading-tight">{project.title}</p>
                    <p className="text-muted text-xs mt-0.5">{project.location}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-muted text-sm mt-14"
          >
            These are a small sample of our work. Call us and we&apos;ll walk you through more projects
            similar to what you have in mind.{" "}
            <a href="tel:+16826221532" className="text-pink hover:text-pink-dark font-semibold underline-offset-2 underline">
              (682) 622-1532
            </a>
          </motion.p>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
