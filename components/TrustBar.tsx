"use client";

import { Shield, Star, MapPin, RefreshCw } from "lucide-react";

const items = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: Star, text: "Free Estimates" },
  { icon: MapPin, text: "Alvarado · Cedar Hill · DFW" },
  { icon: RefreshCw, text: "Repeat-Customer Trusted" },
];

// Duplicate for seamless loop
const track = [...items, ...items];

export function TrustBar() {
  return (
    <section id="trust" className="bg-forest py-4 overflow-hidden">
      <div
        className="flex gap-0"
        style={{ maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}
      >
        <ul
          className="flex items-center gap-0 shrink-0"
          style={{
            animation: "marquee 22s linear infinite",
          }}
          aria-hidden="false"
        >
          {track.map(({ icon: Icon, text }, i) => (
            <li key={i} className="flex items-center">
              <span className="flex items-center gap-2.5 px-5 py-2 mx-2 whitespace-nowrap">
                <Icon className={`w-4 h-4 flex-shrink-0 ${i % 2 === 0 ? "text-lime" : "text-pink"}`} />
                <span className="text-sm text-stone font-medium tracking-wide">{text}</span>
              </span>
              <span className={`text-lg select-none ${i % 2 === 0 ? "text-lime/30 star-glow" : "text-pink/40 star-glow-pink"}`}>★</span>
            </li>
          ))}
        </ul>

        {/* Second copy for seamless loop */}
        <ul
          className="flex items-center gap-0 shrink-0"
          style={{ animation: "marquee 22s linear infinite" }}
          aria-hidden="true"
        >
          {track.map(({ icon: Icon, text }, i) => (
            <li key={i} className="flex items-center">
              <span className="flex items-center gap-2.5 px-5 py-2 mx-2 whitespace-nowrap">
                <Icon className={`w-4 h-4 flex-shrink-0 ${i % 2 === 0 ? "text-lime" : "text-pink"}`} />
                <span className="text-sm text-stone font-medium tracking-wide">{text}</span>
              </span>
              <span className={`text-lg select-none ${i % 2 === 0 ? "text-lime/30 star-glow" : "text-pink/40 star-glow-pink"}`}>★</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
